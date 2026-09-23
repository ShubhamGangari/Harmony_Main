import { SITE_CONFIG } from "./config";

export async function sendWeb3FormsNotification(type, formData, paymentInfo = null) {
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    SITE_CONFIG.web3FormsAccessKey ||
    "3bba933f-8ea3-4b4d-a6e7-f5543df9edb3";

  if (!accessKey) {
    console.warn("Web3Forms access key is not configured.");
    return { success: false, message: "Missing access key" };
  }

  try {
    const value = (key) => {
      const val = formData.get(key);
      return typeof val === "string" && val.trim() ? val.trim() : "";
    };

    const customerName = value("name") || "Valued Customer";
    const customerEmail = value("email") || "";
    const customerPhone = value("phone") || "";
    const customerAddress = value("address");
    const customerNotes = value("message");
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    let subject = paymentInfo?.verified
      ? `[Harmony of Cells] 💳 PAID Order (₹${paymentInfo.amount}) – ${customerName}`
      : `[Harmony of Cells] New Inquiry from ${customerName}`;
    let messageBody = [];

    if (type === "cart") {
      let cartItems = [];
      try {
        const rawCart = formData.get("cart");
        if (rawCart) cartItems = JSON.parse(rawCart);
      } catch (e) {
        console.warn("Could not parse cart JSON:", e);
      }

      const itemLines = cartItems.map((item, idx) => {
        const lineType = item.type === "course" ? "Course" : "Product";
        const tier = item.tier ? ` (${item.tier})` : "";
        return `${idx + 1}. [${lineType}] ${item.name}${tier} × ${item.quantity}`;
      });

      subject = `[Harmony of Cells] Cart Inquiry – ${customerName}`;
      messageBody = [
        "NEW CART INQUIRY RECEIVED",
        "========================================",
        "",
        "CUSTOMER INFORMATION:",
        `• Name: ${customerName}`,
        `• Email: ${customerEmail || "Not provided"}`,
        `• Phone / WhatsApp: ${customerPhone || "Not provided"}`,
        customerAddress ? `• Delivery Address: ${customerAddress}` : "",
        value("background") ? `• Learner Background: ${value("background")}` : "",
        value("goals") ? `• Course Goals: ${value("goals")}` : "",
        "",
        "SELECTED ITEMS IN CART:",
        itemLines.length > 0 ? itemLines.join("\n") : "No items listed.",
        "",
        customerNotes ? `ADDITIONAL NOTES / QUESTIONS:\n${customerNotes}\n` : "",
        "========================================",
        `Submitted: ${timestamp} (IST)`,
      ];
    } else if (type === "product") {
      const product = value("product") || "Product";
      const quantity = value("quantity") || "1";

      subject = `[Harmony of Cells] Product Order – ${product} (${customerName})`;
      messageBody = [
        "NEW PRODUCT ORDER RECEIVED",
        "========================================",
        "",
        "ORDER DETAILS:",
        `• Product: ${product}`,
        `• Quantity: ${quantity}`,
        "",
        "CUSTOMER INFORMATION:",
        `• Name: ${customerName}`,
        `• Email: ${customerEmail || "Not provided"}`,
        `• Phone / WhatsApp: ${customerPhone || "Not provided"}`,
        customerNotes ? `• Delivery Address / Message: ${customerNotes}` : "",
        "",
        "========================================",
        `Submitted: ${timestamp} (IST)`,
      ];
    } else if (type === "course") {
      const course = value("course") || "Course";
      const tier = value("tier") || "";

      subject = `[Harmony of Cells] Course Enrolment – ${course} (${customerName})`;
      messageBody = [
        "NEW COURSE ENROLMENT RECEIVED",
        "========================================",
        "",
        "COURSE DETAILS:",
        `• Course: ${course}`,
        tier ? `• Tier: ${tier}` : "",
        "",
        "STUDENT INFORMATION:",
        `• Name: ${customerName}`,
        `• Email: ${customerEmail || "Not provided"}`,
        `• Phone / WhatsApp: ${customerPhone || "Not provided"}`,
        value("background") ? `• Background: ${value("background")}` : "",
        value("goals") ? `• Goals: ${value("goals")}` : "",
        customerNotes ? `• Message / Questions: ${customerNotes}` : "",
        "",
        "========================================",
        `Submitted: ${timestamp} (IST)`,
      ];
    } else if (type === "consultation") {
      const helpWithItems = formData
        .getAll("helpWith")
        .filter(Boolean)
        .map((item) =>
          item === "__other_option__"
            ? `Other: ${value("helpWithOther") || "Unspecified"}`
            : item
        );

      const rawTime = value("preferredTime");
      const timeSlotMap = {
        "10:00": "Morning (10:00 AM – 12:00 PM)",
        "14:00": "Afternoon (02:00 PM – 04:00 PM)",
        "17:00": "Evening (05:00 PM – 07:00 PM)",
        "19:00": "Late Evening (07:00 PM – 08:30 PM)",
      };
      const formattedTime = timeSlotMap[rawTime] || rawTime || "Not specified";

      subject = `[Harmony of Cells] Consultation Request – ${customerName}`;
      messageBody = [
        "NEW CONSULTATION REQUEST RECEIVED",
        "========================================",
        "",
        "REQUEST DETAILS:",
        `• Preferred Date: ${value("preferredDate") || "Not specified"}`,
        `• Preferred Time Slot: ${formattedTime}`,
        `• Topics of Interest: ${helpWithItems.length ? helpWithItems.join(", ") : "Not specified"}`,
        customerNotes ? `• Specific Requirements: ${customerNotes}` : "",
        "",
        "CLIENT INFORMATION:",
        `• Name: ${customerName}`,
        `• Email: ${customerEmail || "Not provided"}`,
        `• Phone / WhatsApp: ${customerPhone || "Not provided"}`,
        "",
        "========================================",
        `Submitted: ${timestamp} (IST)`,
      ];
    }

    if (paymentInfo?.verified) {
      messageBody.unshift(
        "========================================",
        "💰 PAYMENT VERIFIED & RECEIVED",
        `• Amount Paid: ₹${paymentInfo.amount ? Number(paymentInfo.amount).toLocaleString("en-IN") : "Paid"}`,
        `• Razorpay Payment ID: ${paymentInfo.paymentId}`,
        `• Razorpay Order ID: ${paymentInfo.orderId}`,
        `• Payment Status: SUCCESSFUL / PAID`,
        "========================================",
        ""
      );
    }

    const payload = {
      access_key: accessKey,
      subject,
      from_name: "Harmony of Cells",
      name: customerName,
      email: customerEmail || "inquiry@harmonyofcells.com",
      replyto: customerEmail || undefined,
      message: messageBody.filter(Boolean).join("\n"),
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));
    if (result?.success) {
      console.log("Web3Forms email notification sent successfully:", result);
    } else {
      console.warn("Web3Forms response was not successful:", result);
    }
    return result;
  } catch (error) {
    console.warn("Web3Forms client notification warning:", error);
    return { success: false, error: error?.message };
  }
}
