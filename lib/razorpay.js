export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay checkout script.");
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function openRazorpayCheckout({
  keyId,  
  orderId,
  amount,
  currency = "INR",
  name = "Harmony of Cells",
  description = "Pure Botanical Wellness & Education",
  prefill = {},
  onSuccess,
  onDismiss,
  onError,
}) {
  const loaded = await loadRazorpayScript();
  if (!loaded || !window.Razorpay) {
    const errorMsg = "Unable to load payment interface. Please check your internet connection.";
    onError?.(new Error(errorMsg));
    return;
  }

  const options = {
    key: keyId,
    amount: amount, // in paise
    currency: currency,
    name: name,
    description: description,
    ...(orderId ? { order_id: orderId } : {}),
    prefill: {
      name: prefill.name || "",
      email: prefill.email || "",
      contact: prefill.phone || "",
    },
    notes: prefill.notes || {},
    theme: {
      color: "#284b37",
    },
    modal: {
      ondismiss: () => {
        onDismiss?.();
      },
    },
    handler: async (response) => {
      // response contains razorpay_payment_id, razorpay_order_id, razorpay_signature
      onSuccess?.(response);
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.on("payment.failed", function (response) {
    console.error("Payment failed:", response.error);
    onError?.(response.error);
  });
  paymentObject.open();
}
