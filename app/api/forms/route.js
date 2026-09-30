import { NextResponse } from "next/server";
import { SITE_CONFIG } from "../../../lib/config";
import { validExternalUrl, normalizeRows, mergeProductCatalog } from "../../../lib/csv";
import { DEFAULT_PRODUCTS } from "../../../lib/products-data";
import Papa from "papaparse";

const FORM_TYPES = new Set(["course", "product", "cart", "consultation"]);
const REQUIRED_FIELDS = {
  course: ["name", "email", "phone", "course", "tier", "background", "goals"],
  product: ["name", "email", "phone", "product", "quantity", "message"],
  cart: ["name", "email", "phone", "cart"],
  consultation: [
    "name",
    "email",
    "phone",
    "preferredDate",
    "preferredTime",
    "helpWith",
  ],
};

// These values are part of the server-side contract. Update them together
// with the published catalogue and Google Form choices.
const PRODUCT_OPTIONS = new Set([
  "Lavender",
  "Peppermint",
  "Lemon",
  ...DEFAULT_PRODUCTS.map((p) => p.name),
  ...DEFAULT_PRODUCTS.map((p) => p.name.replace(/\s*\d+\s*(?:ml|l)\b/i, "").trim()),
]);
const COURSE_TIERS = new Map([
  ["Preliminary Consultation", "Tier 1"],
  ["Initiating & Primary Training", "Tier 2"],
  ["Licensed Safe Body Method Practitioner", "Tier 3"],
]);
const COURSE_BACKGROUNDS = new Set([
  "Individual / Personal Learning",
  "Wellness Professional",
  "Doctor",
  "Dentist",
  "Physiotherapist",
  "Yoga Teacher",
  "Nutritionist",
  "Therapist",
  "Wellness Coach",
  "Other",
]);
const QUANTITY_OPTIONS = new Set(["1", "2", "3", "4", "5+"]);
const CONSULTATION_OPTIONS = new Set([
  "Essential oil education",
  "Creating a wellness routine",
  "Product guidance",
  "Safe usage guidance",
  "Preventive wellness",
  "General consultation",
  "__other_option__",
]);
const FIELD_LIMITS = {
  name: 120,
  email: 254,
  phone: 32,
  course: 160,
  tier: 40,
  product: 160,
  background: 100,
  goals: 3000,
  message: 3000,
  address: 1000,
  cart: 12000,
  preferredDate: 10,
  preferredTime: 5,
  helpWithOther: 500,
};

function parseCart(formData) {
  const raw = getSingleString(formData, "cart");
  if (!raw || raw.length > FIELD_LIMITS.cart) return null;
  try {
    const items = JSON.parse(raw);
    if (!Array.isArray(items) || !items.length || items.length > 30) return null;
    const seen = new Set();
    for (const item of items) {
      if (!item || !["product", "course"].includes(item.type) || typeof item.name !== "string" || !item.name.trim()) return null;
      const key = `${item.type}:${item.name.trim().toLowerCase()}`;
      if (seen.has(key)) return null;
      seen.add(key);
      if (item.type === "product" && (!Number.isInteger(Number(item.quantity)) || Number(item.quantity) < 1 || Number(item.quantity) > 99)) return null;
      if (item.type === "course" && Number(item.quantity || 1) !== 1) return null;
    }
    return items.map((item) => ({ type: item.type, name: item.name.trim(), quantity: item.type === "course" ? 1 : Number(item.quantity), tier: typeof item.tier === "string" ? item.tier.trim() : "" }));
  } catch { return null; }
}

async function validateCartCatalogue(items) {
  try {
    const [productsResponse, coursesResponse] = await Promise.all([
      fetch(SITE_CONFIG.productsCsv, { cache: "no-store" }),
      fetch(SITE_CONFIG.coursesCsv, { cache: "no-store" }),
    ]);

    let products = DEFAULT_PRODUCTS;
    if (productsResponse.ok) {
      const productsText = await productsResponse.text();
      const rawProducts = normalizeRows(
        Papa.parse(productsText, { header: true, skipEmptyLines: true }).data || []
      );
      products = mergeProductCatalog(rawProducts, DEFAULT_PRODUCTS);
    }

    let courses = [];
    if (coursesResponse.ok) {
      const coursesText = await coursesResponse.text();
      courses = normalizeRows(
        Papa.parse(coursesText, { header: true, skipEmptyLines: true }).data || []
      );
    }

    return items.every((item) => {
      if (item.type === "product") {
        return products.some((entry) => {
          const entryClean = String(entry.name).trim().toLowerCase();
          const itemClean = String(item.name).trim().toLowerCase();
          return entryClean === itemClean || entryClean.startsWith(itemClean) || itemClean.startsWith(entryClean);
        });
      }

      if (item.type === "course") {
        const row = courses.find((entry) => String(entry.name).trim().toLowerCase() === String(item.name).trim().toLowerCase());
        return row && (!item.tier || row.tier === item.tier);
      }

      return false;
    });
  } catch {
    return items.every((item) => {
      if (item.type === "product") {
        return DEFAULT_PRODUCTS.some(
          (p) => String(p.name).trim().toLowerCase() === String(item.name).trim().toLowerCase()
        );
      }
      return false;
    });
  }
}

async function submitCartItemsToSheets(formData, cart) {
  const name = getSingleString(formData, "name") || "";
  const email = getSingleString(formData, "email") || "";
  const phone = getSingleString(formData, "phone") || "";
  const address = getSingleString(formData, "address") || "";
  const background = getSingleString(formData, "background") || "";
  const goals = getSingleString(formData, "goals") || "";
  const customerNotes = getSingleString(formData, "message") || "";
  const paymentId = getSingleString(formData, "paymentId");
  const amountPaid = getSingleString(formData, "amountPaid");

  const productFormConfig = SITE_CONFIG.forms.product;
  const courseFormConfig = SITE_CONFIG.forms.course;

  const promises = [];

  for (const item of cart) {
    if (item.type === "product" && productFormConfig?.submissionEnabled && productFormConfig?.responseUrl) {
      const productParams = new URLSearchParams();
      productParams.append(productFormConfig.fields.name, name);
      productParams.append(productFormConfig.fields.email, email);
      productParams.append(productFormConfig.fields.phone, phone);
      productParams.append(productFormConfig.fields.product, item.name);

      const qtyStr = item.quantity >= 5 ? "5+" : String(item.quantity);
      productParams.append(productFormConfig.fields.quantity, qtyStr);

      const deliveryInfo = [
        `[ITEM ORDERED: ${item.name} | QTY: ${item.quantity}]`,
        address ? `Delivery Address:\n${address}` : "",
        paymentId ? `[PAID: ₹${amountPaid} | Razorpay ID: ${paymentId}]` : "",
        customerNotes ? `Notes: ${customerNotes}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");

      productParams.append(productFormConfig.fields.message, deliveryInfo);

      promises.push(
        fetch(productFormConfig.responseUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: productParams.toString(),
          redirect: "follow",
          cache: "no-store",
        })
      );
    } else if (item.type === "course" && courseFormConfig?.submissionEnabled && courseFormConfig?.responseUrl) {
      const courseParams = new URLSearchParams();
      courseParams.append(courseFormConfig.fields.name, name);
      courseParams.append(courseFormConfig.fields.email, email);
      courseParams.append(courseFormConfig.fields.phone, phone);
      courseParams.append(courseFormConfig.fields.course, item.name);
      courseParams.append(courseFormConfig.fields.background, background || "Individual / Personal Learning");
      courseParams.append(courseFormConfig.fields.goals, goals || "Enrolment via cart");

      const courseInfo = [
        item.tier ? `Tier: ${item.tier}` : "",
        paymentId ? `[PAID: ₹${amountPaid} | Razorpay ID: ${paymentId}]` : "",
        customerNotes ? `Notes: ${customerNotes}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");

      courseParams.append(courseFormConfig.fields.message, courseInfo || "Enrolled via cart");

      promises.push(
        fetch(courseFormConfig.responseUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: courseParams.toString(),
          redirect: "follow",
          cache: "no-store",
        })
      );
    }
  }

  // Also submit to cart form with clean human-readable summary
  if (SITE_CONFIG.forms.cart?.submissionEnabled && SITE_CONFIG.forms.cart?.responseUrl) {
    try {
      const readableCartSummary =
        cart
          .map((it) => `• ${it.name} × ${it.quantity}${it.tier ? ` (${it.tier})` : ""}`)
          .join("\n") +
        (amountPaid
          ? `\n\n[PAID: ₹${amountPaid} | Razorpay ID: ${paymentId}]`
          : "\n\n[Inquiry / Confirmation Pending]");

      formData.set("cart", readableCartSummary);
      const mapped = getMappedFields("cart", formData);

      if (mapped.size > 0) {
        promises.push(
          fetch(SITE_CONFIG.forms.cart.responseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: mapped.toString(),
            redirect: "follow",
            cache: "no-store",
          }).catch((e) => console.warn("Cart form backup log:", e))
        );
      }
    } catch (e) {
      console.warn("Cart form backup mapping skipped:", e);
    }
  }

  await Promise.allSettled(promises);
}

function getSingleString(formData, fieldName) {
  const values = formData.getAll(fieldName);

  if (values.length !== 1 || typeof values[0] !== "string") {
    return null;
  }

  return values[0].trim();
}

function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return false;
  }

  const now = new Date();
  const today = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  );

  return date.getTime() >= today;
}

function validateSubmission(type, formData, formConfig) {
  for (const fieldName of REQUIRED_FIELDS[type]) {
    if (type === "consultation" && fieldName === "helpWith") continue;

    const value = getSingleString(formData, fieldName);
    const maxLength = FIELD_LIMITS[fieldName] || 3000;

    if (!value) {
      return "Please complete all required fields before submitting.";
    }

    if (value.length > maxLength) {
      return "One or more submitted fields are too long.";
    }
  }

  const messageValues = formData.getAll("message");
  if (
    messageValues.length > 1 ||
    (messageValues.length === 1 &&
      (typeof messageValues[0] !== "string" ||
        messageValues[0].trim().length > FIELD_LIMITS.message))
  ) {
    return "Your message is invalid or too long.";
  }

  const email = getSingleString(formData, "email");
  const phone = getSingleString(formData, "phone");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (
    !/^[0-9+().\s-]+$/.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    return "Please enter a valid phone or WhatsApp number.";
  }

  if (type === "product") {
    const product = getSingleString(formData, "product");
    const quantity = getSingleString(formData, "quantity");

    if (!PRODUCT_OPTIONS.has(product)) {
      return "The selected product is no longer available. Please refresh and try again.";
    }

    if (!QUANTITY_OPTIONS.has(quantity)) {
      return "Please select a valid quantity.";
    }
  }

  if (type === "course") {
    const course = getSingleString(formData, "course");
    const tier = getSingleString(formData, "tier");
    const background = getSingleString(formData, "background");

    if (!COURSE_TIERS.has(course)) {
      return "The selected course is no longer available. Please refresh and try again.";
    }

    if (COURSE_TIERS.get(course) !== tier) {
      return "The selected course and tier do not match. Please refresh and try again.";
    }

    if (!COURSE_BACKGROUNDS.has(background)) {
      return "Please select a valid background option.";
    }
  }

  if (type === "cart") {
    const cart = parseCart(formData);
    if (!cart) return "Your cart is invalid. Please refresh and try again.";
    const hasProducts = cart.some((item) => item.type === "product");
    const hasCourses = cart.some((item) => item.type === "course");
    if (hasProducts && !getSingleString(formData, "address")) return "Please provide a delivery address for your products.";
    if (hasCourses && (!getSingleString(formData, "background") || !getSingleString(formData, "goals"))) return "Please complete the course enrolment details.";
  }

  if (type === "consultation") {
    const preferredDate = getSingleString(formData, "preferredDate");
    const preferredTime = getSingleString(formData, "preferredTime");
    const helpWith = formData.getAll("helpWith");

    if (!isValidDate(preferredDate)) {
      return "Please select a valid preferred date that is not in the past.";
    }

    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(preferredTime)) {
      return "Please select a valid preferred time.";
    }

    if (
      helpWith.length === 0 ||
      helpWith.length > CONSULTATION_OPTIONS.size ||
      helpWith.some(
        (value) =>
          typeof value !== "string" ||
          !CONSULTATION_OPTIONS.has(value.trim())
      ) ||
      new Set(helpWith).size !== helpWith.length
    ) {
      return "Please select valid consultation topics.";
    }

    const otherSelected = helpWith.includes(formConfig.otherOptionValue);
    const otherResponse = getSingleString(formData, "helpWithOther");

    if (otherSelected && !otherResponse) {
      return "Please specify what you need help with.";
    }

    if (otherSelected && otherResponse.length > FIELD_LIMITS.helpWithOther) {
      return "Your Other response is too long.";
    }

    if (!otherSelected && formData.getAll("helpWithOther").length > 0) {
      return "Please select Other before providing an Other response.";
    }
  }

  return "";
}

function isAuthenticationResponse(response, body) {
  const finalUrl = response.url.toLowerCase();
  const content = body.slice(0, 4000).toLowerCase();

  return (
    finalUrl.includes("accounts.google.com") ||
    finalUrl.includes("/servicelogin") ||
    content.includes("sign in to continue") ||
    content.includes("must be signed in") ||
    content.includes("this form can only be viewed by users in")
  );
}

function getMappedFields(type, formData) {
  const formConfig = SITE_CONFIG.forms[type];
  const { fields, otherOptionValue } = formConfig;
  const mapped = new URLSearchParams();

  if (type === "consultation") {
    const email = formData.get("email");
    if (typeof email === "string" && email.trim()) {
      mapped.append("emailAddress", email.trim());
    }
  }

  Object.entries(fields).forEach(([fieldName, entryId]) => {
    if (!entryId || fieldName === "helpWithOther") return;

    if (type === "consultation" && fieldName === "preferredDate") {
      const value = formData.get(fieldName);
      if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [year, month, day] = value.split("-");
        mapped.append(`${entryId}_year`, year);
        mapped.append(`${entryId}_month`, String(Number(month)));
        mapped.append(`${entryId}_day`, String(Number(day)));
      }
      return;
    }

    if (type === "consultation" && fieldName === "preferredTime") {
      const value = formData.get(fieldName);
      if (typeof value === "string" && /^\d{2}:\d{2}$/.test(value)) {
        const [hour, minute] = value.split(":");
        mapped.append(`${entryId}_hour`, hour);
        mapped.append(`${entryId}_minute`, minute);
      }
      return;
    }

    const values = type === "consultation" && fieldName === "helpWith"
      ? formData.getAll(fieldName)
      : [formData.get(fieldName)];

    values.forEach((value) => {
      if (typeof value === "string" && value.trim()) {
        mapped.append(entryId, value.trim());
      }
    });

    if (
      type === "consultation" &&
      fieldName === "helpWith" &&
      values.includes(otherOptionValue)
    ) {
      const otherResponse = formData.get("helpWithOther");

      if (typeof otherResponse === "string" && otherResponse.trim()) {
        mapped.append(fields.helpWithOther, otherResponse.trim());
      }
    }
  });

  return mapped;
}

export async function POST(request) {
  let formData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: "The submitted form data was invalid." },
      { status: 400 }
    );
  }

  const type = getSingleString(formData, "formType");

  if (typeof type !== "string" || !FORM_TYPES.has(type)) {
    return NextResponse.json(
      { success: false, message: "The form type is invalid." },
      { status: 400 }
    );
  }

  const formConfig = SITE_CONFIG.forms[type];
  const responseUrl = validExternalUrl(formConfig.responseUrl);

  if (!formConfig.submissionEnabled || !responseUrl) {
    return NextResponse.json(
      { success: false, message: "This form is not available right now. Please contact us directly." },
      { status: 503 }
    );
  }

  const unmappedRequiredField = REQUIRED_FIELDS[type]
    .filter((fieldName) => fieldName !== "tier")
    .find(
    (fieldName) => !formConfig.fields[fieldName]
  );

  if (unmappedRequiredField) {
    return NextResponse.json(
      {
        success: false,
        message: "This form is missing a configured field mapping. Please contact us directly.",
      },
      { status: 503 }
    );
  }

  const validationError = validateSubmission(type, formData, formConfig);

  if (validationError) {
    return NextResponse.json(
      { success: false, message: validationError },
      { status: 400 }
    );
  }

  if (type === "cart") {
    const cart = parseCart(formData);
    if (!cart || !(await validateCartCatalogue(cart))) {
      return NextResponse.json(
        { success: false, message: "One or more cart items are no longer available. Please refresh and try again." },
        { status: 400 }
      );
    }
    await submitCartItemsToSheets(formData, cart);
    return NextResponse.json({ success: true });
  }

  if (
    type === "consultation" &&
    formData.getAll("helpWith").includes(formConfig.otherOptionValue) &&
    !formConfig.fields.helpWithOther
  ) {
    return NextResponse.json(
      {
        success: false,
        message: "This form is missing a configured field mapping. Please contact us directly.",
      },
      { status: 503 }
    );
  }

  const mappedFields = getMappedFields(type, formData);

  if (!mappedFields.size) {
    return NextResponse.json(
      { success: false, message: "No valid form fields were submitted." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(responseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: mappedFields.toString(),
      redirect: "follow",
      cache: "no-store",
    });
    const body = await response.text();

    if (!response.ok) {
      console.error("Google Forms rejected the submission.", {
        type,
        status: response.status,
      });
      return NextResponse.json(
        { success: false, message: "Google Forms rejected the submission. Please try again." },
        { status: 502 }
      );
    }

    if (isAuthenticationResponse(response, body)) {
      console.error("Google Forms requires authentication for the submission.", {
        type,
        status: response.status,
        finalUrl: response.url,
      });
      return NextResponse.json(
        {
          success: false,
          message: "Google Forms requires authorization before this form can be submitted.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Google Forms request failed.", { type, error });
    return NextResponse.json(
      { success: false, message: "The form could not be submitted. Please try again." },
      { status: 502 }
    );
  }
}
