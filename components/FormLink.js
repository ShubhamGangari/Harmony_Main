"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { validExternalUrl } from "../lib/csv";
import { sendWeb3FormsNotification } from "../lib/web3forms";

const FORM_COPY = {
  course: {
    eyebrow: "EDUCATION ENROLMENT",
    title: "Begin your pathway",
    description:
      "Share your details and we will provide the next steps for enrollment and payment.",
    submitLabel: "Submit & Continue to Payment",
  },

  product: {
    eyebrow: "PRODUCT ORDER",
    title: "Place your order",
    description:
      "Provide your details and select the product and quantity you would like to purchase.",
    submitLabel: "Submit & Continue to Payment",
  },

  consultation: {
    eyebrow: "WELLNESS CONSULTATION • 1-ON-1",
    title: "Request a consultation",
    description:
      "Share your details and preferred timing. Richa will review your request and connect with you to confirm your one-on-one session.",
    submitLabel: "Submit consultation request",
  },
};

const TIME_SLOT_OPTIONS = [
  { label: "Morning (10:00 AM – 12:00 PM)", value: "10:00" },
  { label: "Afternoon (02:00 PM – 04:00 PM)", value: "14:00" },
  { label: "Evening (05:00 PM – 07:00 PM)", value: "17:00" },
  { label: "Late Evening (07:00 PM – 08:30 PM)", value: "19:00" },
];

function getFields(type) {
  if (type === "consultation") {
    return [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Phone / WhatsApp Number",
        type: "tel",
        required: true,
      },
      {
        name: "preferredDate",
        label: "Preferred Date",
        type: "date",
        required: true,
      },
      {
        name: "preferredTime",
        label: "Preferred Time Slot",
        type: "select",
        required: true,
        options: TIME_SLOT_OPTIONS,
      },
      {
        name: "helpWith",
        label: "What would you like help with?",
        type: "checkboxes",
        required: true,
        options: [
          "Essential oil education",
          "Creating a wellness routine",
          "Product guidance",
          "Safe usage guidance",
          "Preventive wellness",
          "General consultation",
          {
            label: "Other",
            value: "__other_option__",
            isOther: true,
          },
        ],
      },
      {
        name: "message",
        label: "Please tell us more about your requirements",
        type: "textarea",
      },
    ];
  }

  if (type === "course") {
    return [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Phone / WhatsApp Number",
        type: "tel",
        required: true,
      },
      {
        name: "background",
        label: "Your Background",
        type: "select",
        required: true,
        options: [
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
        ],
      },
      {
        name: "goals",
        label: "What are you hoping to achieve through this program?",
        type: "textarea",
        required: true,
      },
      {
        name: "message",
        label: "Message / Questions",
        type: "textarea",
      },
    ];
  }

  if (type === "product") {
    return [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Phone / WhatsApp Number",
        type: "tel",
        required: true,
      },
      {
        name: "quantity",
        label: "Quantity",
        type: "select",
        required: true,
        options: ["1", "2", "3", "4", "5+"],
      },
      {
        name: "message",
        label: "Delivery Address / Additional Information",
        type: "textarea",
        required: true,
        placeholder: "Please provide your complete delivery address, including PIN code.",
      },
    ];
  }

  return [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone / WhatsApp Number",
      type: "tel",
      required: true,
    },
    {
      name: "contactMethod",
      label: "Preferred Contact Method",
      type: "select",
      required: true,
      options: ["Phone call", "WhatsApp", "Email"],
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us what you would like help with.",
    },
  ];
}

async function submitToGoogleForm(formData) {
  const response = await fetch("/api/forms", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "The form could not be submitted.");
  }

  return result;
}

function CustomFormModal({
  type,
  item,
  paymentUrl,
  itemContext,
  triggerRef,
  onClose,
}) {
  const copy = FORM_COPY[type];
  const fields = getFields(type);
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [submittedInfo, setSubmittedInfo] = useState(null);
  const [otherHelpSelected, setOtherHelpSelected] = useState(false);
  const safePaymentUrl = validExternalUrl(paymentUrl);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [onClose, triggerRef]);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const helpWith = formData.getAll("helpWith");
    const otherSelected = helpWith.includes("__other_option__");

    if (type === "consultation" && helpWith.length === 0) {
      setError("Please select at least one reason for your consultation.");
      return;
    }

    if (
      type === "consultation" &&
      otherSelected &&
      !String(formData.get("helpWithOther") || "").trim()
    ) {
      setError("Please specify what you need help with.");
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const preferredDate = String(formData.get("preferredDate") || "").trim();
    const preferredTime = String(formData.get("preferredTime") || "").trim();
    setSubmittedInfo({ name, preferredDate, preferredTime });

    setStatus("submitting");

    try {
      await Promise.all([
        submitToGoogleForm(formData),
        sendWeb3FormsNotification(type, formData).catch((err) =>
          console.warn("Web3Forms dispatch error:", err)
        ),
      ]);

      setStatus("sent");

      /*
       * Give the user a moment to see that
       * the submission was accepted before
       * moving to payment.
       */
      if (safePaymentUrl) {
        setTimeout(() => {
          window.location.assign(safePaymentUrl);
        }, 700);
      }
    } catch (submissionError) {
      console.error(
        "Google Forms submission failed:",
        submissionError
      );

      setStatus("error");
      setError(
        submissionError.message ||
          "We could not submit your request. Please try again."
      );
    }
  }

  const slotMap = {
    "10:00": "Morning (10:00 AM – 12:00 PM)",
    "14:00": "Afternoon (02:00 PM – 04:00 PM)",
    "17:00": "Evening (05:00 PM – 07:00 PM)",
    "19:00": "Late Evening (07:00 PM – 08:30 PM)",
  };
  const timeSlotDisplay = slotMap[submittedInfo?.preferredTime] || submittedInfo?.preferredTime || "";
  const waConfirmText = encodeURIComponent(
    `Hi Harmony of Cells! I just submitted a consultation request on your website for ${submittedInfo?.preferredDate || "an upcoming date"}${timeSlotDisplay ? ` (${timeSlotDisplay})` : ""}. My name is ${submittedInfo?.name || ""}.`
  );
  const waConfirmUrl = `https://wa.me/919076002266?text=${waConfirmText}`;

  const modal = (
    <div
      className="form-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        ref={dialogRef}
        className="form-modal custom-form-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="form-modal-header">
          <div>
            <span className="eyebrow">{copy.eyebrow}</span>

            <h2 id={titleId}>{copy.title}</h2>

            <p>{copy.description}</p>
          </div>

          <button
            ref={closeRef}
            type="button"
            className="form-modal-close"
            aria-label="Close form"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {status === "sent" ? (
          <div className="custom-form-state" role="status">
            <strong>
              {safePaymentUrl
                ? "Details submitted. Redirecting to payment..."
                : "Your consultation request has been submitted successfully."}
            </strong>

            <p>
              {safePaymentUrl
                ? "Your information has been received."
                : type === "consultation"
                  ? `Thank you, ${submittedInfo?.name || "there"}. Richa will review your preferred timing${
                      submittedInfo?.preferredDate ? ` (${submittedInfo.preferredDate}${timeSlotDisplay ? `, ${timeSlotDisplay}` : ""})` : ""
                    } and contact you to confirm your session.`
                  : "Your information was received, but a payment link is not configured. Please contact us to complete your request."}
            </p>

            {type === "consultation" ? (
              <div className="consultation-success-actions">
                <a
                  href={waConfirmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-confirm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="whatsapp-svg-icon" aria-hidden="true">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.201.3-.777.979-.953 1.18-.175.2-.35.225-.651.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.516-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.48 1.079 2.909 1.23 3.11.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35z"/>
                    <path d="M12.004 2C6.482 2 2.003 6.48 2.003 12c0 1.99.585 3.845 1.597 5.414L2 22l4.734-1.543A9.957 9.957 0 0 0 12.004 22c5.522 0 10.001-4.48 10.001-10s-4.479-10-10.001-10zm0 18.2c-1.628 0-3.138-.485-4.407-1.319l-.316-.208-2.812.916.932-2.738-.228-.337A8.163 8.163 0 0 1 3.804 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Chat on WhatsApp for Quick Confirmation →</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={onClose}
                  style={{ marginTop: "4px" }}
                >
                  Done
                </button>
              </div>
            ) : !safePaymentUrl ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Close
              </button>
            ) : null}
          </div>
        ) : (
          <form
            className="custom-form"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="formType"
              value={type}
            />

            {type !== "consultation" ? (
              <div className="form-context" aria-live="polite">
                <span>{type === "course" ? "Selected course" : "Selected product"}</span>
                <b>{item}</b>
                {type === "course" && itemContext?.tier ? (
                  <strong>{itemContext.tier}</strong>
                ) : null}
              </div>
            ) : null}

            {type === "course" ? (
              <>
                <input
                  type="hidden"
                  name="course"
                  value={item}
                  required
                />

                {itemContext?.tier ? (
                  <input
                    type="hidden"
                    name="tier"
                    value={itemContext.tier}
                  />
                ) : null}
              </>
            ) : null}

            {type === "product" ? (
              <input
                type="hidden"
                name="product"
                value={item}
                required
              />
            ) : null}

            {fields.map((field) => {
              const fieldId = `${titleId}-${field.name}`;

              return (
                <div
                  className="custom-form-field"
                  key={field.name}
                >
                  <label htmlFor={fieldId}>
                    {field.label}
                    {field.required ? " *" : ""}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={fieldId}
                      name={field.name}
                      required={field.required}
                      rows="4"
                      placeholder={field.placeholder || ""}
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={fieldId}
                      name={field.name}
                      required={field.required}
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select an option
                      </option>

                      {field.options.map((option) => {
                        const optionLabel = typeof option === "string" ? option : option.label;
                        const optionValue = typeof option === "string" ? option : option.value;

                        return (
                          <option key={optionValue} value={optionValue}>
                            {optionLabel}
                          </option>
                        );
                      })}
                    </select>
                  ) : field.type === "checkboxes" ? (
                    <fieldset className="custom-form-checkboxes">
                      <legend className="sr-only">
                        {field.label}
                      </legend>

                      {field.options.map((option) => {
                        const optionLabel = typeof option === "string" ? option : option.label;
                        const optionValue = typeof option === "string" ? option : option.value;
                        const isOtherOption = typeof option !== "string" && option.isOther;
                        const otherFieldId = `${fieldId}-other`;

                        return (
                          <div className="custom-form-checkbox-option" key={optionValue}>
                            <label>
                              <input
                                type="checkbox"
                                name={field.name}
                                value={optionValue}
                                onChange={(event) => {
                                  if (isOtherOption) {
                                    setOtherHelpSelected(event.target.checked);
                                  }
                                }}
                              />

                              <span>{optionLabel}</span>
                            </label>

                            {isOtherOption && otherHelpSelected ? (
                              <label className="custom-form-other-response" htmlFor={otherFieldId}>
                                <span>Please specify: *</span>
                                <input
                                  id={otherFieldId}
                                  name="helpWithOther"
                                  type="text"
                                  required
                                  autoComplete="off"
                                />
                              </label>
                            ) : null}
                          </div>
                        );
                      })}
                    </fieldset>
                  ) : (
                    <input
                      id={fieldId}
                      name={field.name}
                      type={field.type}
                      min={field.type === "date" ? new Date().toISOString().split("T")[0] : undefined}
                      required={field.required}
                    />
                  )}
                </div>
              );
            })}

            {error ? (
              <p
                className="custom-form-error"
                role="alert"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="btn btn-primary custom-form-submit"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Submitting..."
                : copy.submitLabel}
            </button>
          </form>
        )}
      </section>
    </div>
  );

  return typeof document === "undefined"
    ? null
    : createPortal(modal, document.body);
}

export default function FormLink({
  type,
  item = "",
  itemContext,
  paymentUrl = "",
  className = "card-link",
  children,
  onOpen,
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  function handleClick(event) {
    event.preventDefault();

    onOpen?.();

    setOpen(true);
  }

  return (
    <>
      <a
        ref={triggerRef}
        href="#"
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>

      {open ? (
        <CustomFormModal
          type={type}
          item={item}
          itemContext={itemContext}
          paymentUrl={validExternalUrl(paymentUrl)}
          triggerRef={triggerRef}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
