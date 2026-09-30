"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import { SITE_CONFIG } from "../lib/config";
import { normalizeRows, validExternalUrl, mergeProductCatalog } from "../lib/csv";
import { DEFAULT_PRODUCTS } from "../lib/products-data";
import { sendWeb3FormsNotification } from "../lib/web3forms";
import { openRazorpayCheckout } from "../lib/razorpay";
import { useCart } from "./CartProvider";
import AddToCartButton from "./AddToCartButton";

function useCatalogue(url) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (!url) return;
    Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: ({ data }) => setRows(normalizeRows(data || []))
    });
  }, [url]);
  return rows;
}

function CartVisual({ image, type, tier }) {
  const [failed, setFailed] = useState(false);
  const source = validExternalUrl(image);

  if (!source || failed) {
    return (
      <div className={`cart-item-image ${type === "course" ? "is-course" : ""}`} aria-hidden="true">
        <span>✦</span>
        {tier ? <small>{tier}</small> : null}
      </div>
    );
  }

  return (
    <img
      src={source}
      alt=""
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

function CartItems({ title, items, onRemove, onQuantity }) {
  if (!items.length) return null;

  return (
    <section className="cart-group" aria-label={title}>
      <div className="cart-group-heading">
        <h2>{title}</h2>
        <span className="cart-group-count">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="cart-items-list">
        {items.map((item) => {
          const unitPrice = Number(String(item.price || "").replace(/[^\d]/g, "")) || 0;
          const lineTotal = unitPrice * (item.quantity || 1);

          return (
            <article className="cart-item" key={`${item.type}-${item.name}`}>
              <CartVisual image={item.image} type={item.type} tier={item.tier} />

              <div className="cart-item-details">
                <span className="cart-item-type">{item.type}</span>
                <h3>{item.name}</h3>
                {item.tier ? <p className="cart-item-tier">{item.tier}</p> : null}
                
                <div className="cart-item-price-wrap">
                  <p className="cart-price">{item.price || "Price confirmed after inquiry"}</p>
                  {item.quantity > 1 && unitPrice > 0 ? (
                    <span className="cart-line-total">
                      Total: ₹{lineTotal.toLocaleString("en-IN")}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="cart-item-actions">
                {item.type === "product" ? (
                  <div className="cart-stepper-wrap">
                    <span className="cart-stepper-label">Qty</span>
                    <div className="cart-stepper" role="group" aria-label={`Quantity for ${item.name}`}>
                      <button
                        type="button"
                        className="cart-stepper-btn"
                        onClick={() => onQuantity(item.type, item.name, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="cart-stepper-value" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="cart-stepper-btn"
                        onClick={() => onQuantity(item.type, item.name, Math.min(99, item.quantity + 1))}
                        disabled={item.quantity >= 99}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ) : (
                  <span className="cart-course-quantity">1 enrolment</span>
                )}

                <button
                  type="button"
                  className="cart-remove-btn"
                  onClick={() => onRemove(item.type, item.name)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                  <span>Remove</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Recommendations({ items }) {
  if (!items.length) return null;

  return (
    <section className="cart-recommendations" aria-labelledby="cart-recommendations-title">
      <div className="recommendations-heading">
        <span className="eyebrow">YOU MAY ALSO LIKE</span>
        <h2 id="cart-recommendations-title">
          Chosen to complement<br /><em>your selections.</em>
        </h2>
        <p>Thoughtful additions curated from your cart.</p>
      </div>

      <div className="recommendations-grid">
        {items.map((item) => {
          const description =
            item.description && item.description !== "CLIENT TO PROVIDE"
              ? item.description
              : "Pure, therapeutic-grade botanical wellness.";

          return (
            <article className="cart-recommendation-card" key={`${item.type}-${item.name}`}>
              <div className="recommendation-media">
                <CartVisual image={item.image} type={item.type} tier={item.tier} />
                <span className="recommendation-type">{item.type}</span>
              </div>
              <div className="recommendation-content">
                <h3>{item.name}</h3>
                {item.tier ? <p className="recommendation-tier">{item.tier}</p> : null}
                <p className="product-price">{item.price || "Price on request"}</p>
                <p>{description}</p>
                <AddToCartButton item={item} className="recommendation-add" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function parseRecommendationReference(value) {
  const match = String(value || "").trim().match(/^(product|course)\s*:\s*(.+)$/i);
  return match ? { type: match[1].toLowerCase(), name: match[2].trim() } : null;
}

function isAvailable(row) {
  return (
    row &&
    row.name &&
    !["false", "no", "unavailable", "inactive"].includes(
      String(row.available || "").trim().toLowerCase()
    )
  );
}

export default function CartPage() {
  const { items, ready, itemCount, removeItem, updateQuantity, clearCart } = useCart();
  const rawProductRows = useCatalogue(SITE_CONFIG.productsCsv);
  const productRows = useMemo(
    () => mergeProductCatalog(rawProductRows, DEFAULT_PRODUCTS),
    [rawProductRows]
  );
  const courseRows = useCatalogue(SITE_CONFIG.coursesCsv);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [directOrderDetails, setDirectOrderDetails] = useState(null);

  const products = items.filter((item) => item.type === "product");
  const courses = items.filter((item) => item.type === "course");

  // Calculate live estimated subtotal
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const numericPrice = Number(String(item.price || "").replace(/[^\d]/g, "")) || 0;
      return sum + numericPrice * (item.quantity || 1);
    }, 0);
  }, [items]);

  const recommendations = useMemo(() => {
    const inCart = new Set(items.map((item) => `${item.type}:${item.name.toLowerCase()}`));
    const catalogue = {
      product: new Map(
        productRows
          .filter(isAvailable)
          .map((row) => [String(row.name).trim().toLowerCase(), row])
      ),
      course: new Map(
        courseRows
          .filter(isAvailable)
          .map((row) => [String(row.name).trim().toLowerCase(), row])
      ),
    };
    const suggested = new Set();
    const result = [];

    items.forEach((cartItem) => {
      const source = catalogue[cartItem.type]?.get(cartItem.name.toLowerCase());
      String(source?.recommended_with || "")
        .split(",")
        .forEach((reference) => {
          if (result.length >= 3) return;
          const parsed = parseRecommendationReference(reference);
          if (!parsed) return;
          const key = `${parsed.type}:${parsed.name.toLowerCase()}`;
          const row = catalogue[parsed.type]?.get(parsed.name.toLowerCase());
          if (!row || inCart.has(key) || suggested.has(key)) return;
          suggested.add(key);
          result.push({
            type: parsed.type,
            name: row.name,
            price: row.price || "",
            image: row.image_url || "",
            description: row.description || "",
            tier: row.tier || "",
          });
        });
    });
    return result;
  }, [items, productRows, courseRows]);

  async function submit(event) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    if (!form.checkValidity()) return form.reportValidity();

    const data = new FormData(form);
    data.append("formType", "cart");
    data.append(
      "cart",
      JSON.stringify(
        items.map(({ type, name, quantity, tier }) => ({
          type,
          name,
          quantity,
          tier,
        }))
      )
    );

    const customerName = data.get("name") || "";
    const customerEmail = data.get("email") || "";
    const customerPhone = data.get("phone") || "";

    // If subtotal is greater than 0, initiate Razorpay payment
    if (subtotal > 0) {
      setStatus("preparing_payment");

      try {
        const orderResponse = await fetch("/api/payment/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: subtotal,
            customer: {
              name: customerName,
              email: customerEmail,
              phone: customerPhone,
            },
            notes: {
              items_count: items.length,
            },
          }),
        });

        const orderData = await orderResponse.json();
        if (!orderResponse.ok || !orderData.success) {
          throw new Error(orderData.message || "Failed to initialize payment order.");
        }

        setStatus("awaiting_payment");

        openRazorpayCheckout({
          keyId: orderData.keyId,
          orderId: orderData.orderId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "Harmony of Cells",
          description: `Order Checkout (Total: ₹${subtotal.toLocaleString("en-IN")})`,
          prefill: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
          },
          onSuccess: async (razorpayResponse) => {
            setStatus("verifying_payment");
            try {
              // Verify cryptographic HMAC signature
              const verifyRes = await fetch("/api/payment/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(razorpayResponse),
              });
              const verifyData = await verifyRes.json();
              if (!verifyRes.ok || !verifyData.success) {
                throw new Error("Payment signature verification failed. Please contact us.");
              }

              // Append verified payment attributes
              data.append("paymentId", razorpayResponse.razorpay_payment_id);
              data.append("paymentStatus", "PAID");
              data.append("amountPaid", String(subtotal));

              const paymentInfo = {
                verified: true,
                amount: subtotal,
                paymentId: razorpayResponse.razorpay_payment_id,
                orderId: razorpayResponse.razorpay_order_id,
              };

              // Submit to Google Forms and Web3Forms in parallel
              await Promise.all([
                fetch("/api/forms", { method: "POST", body: data }),
                sendWeb3FormsNotification("cart", data, paymentInfo).catch((err) =>
                  console.warn("Web3Forms dispatch error:", err)
                ),
              ]);

              setPaymentReceipt({
                paymentId: razorpayResponse.razorpay_payment_id,
                orderId: razorpayResponse.razorpay_order_id,
                amount: subtotal,
                date: new Date().toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  dateStyle: "medium",
                  timeStyle: "short",
                }),
                items: [...items],
              });

              clearCart();
              setStatus("paid");
            } catch (verErr) {
              setStatus("error");
              setError(verErr.message || "Payment verification failed. Please contact support.");
            }
          },
          onDismiss: () => {
            setStatus("idle");
            setError("Online payment was cancelled or closed. You can retry, or place your order directly via UPI / WhatsApp below.");
          },
          onError: (payErr) => {
            setStatus("error");
            setError(
              payErr?.description ||
                payErr?.message ||
                "Online payment could not be completed. You can try again or place your order directly via UPI / WhatsApp below."
            );
          },
        });
      } catch (err) {
        setStatus("error");
        setError(
          err.message ||
            "Could not start online payment. You can place your order directly via UPI / WhatsApp below."
        );
      }
      return;
    }

    // Fallback if subtotal is 0
    setStatus("submitting");
    try {
      const [response] = await Promise.all([
        fetch("/api/forms", { method: "POST", body: data }),
        sendWeb3FormsNotification("cart", data).catch((err) =>
          console.warn("Web3Forms dispatch error:", err)
        ),
      ]);
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      clearCart();
      setStatus("sent");
    } catch (submitError) {
      setStatus("error");
      setError(submitError.message || "We could not submit your inquiry. Please try again.");
    }
  }

  async function handleDirectUpiOrder(e) {
    if (e && e.preventDefault) e.preventDefault();
    setError("");

    const form = document.querySelector("form.cart-checkout");
    if (form && !form.checkValidity()) {
      return form.reportValidity();
    }

    const data = form ? new FormData(form) : new FormData();
    data.append("formType", "cart");
    data.append(
      "cart",
      JSON.stringify(
        items.map(({ type, name, quantity, tier }) => ({
          type,
          name,
          quantity,
          tier,
        }))
      )
    );

    const customerName = data.get("name") || "";
    const customerEmail = data.get("email") || "";
    const customerPhone = data.get("phone") || "";
    const customerAddress = data.get("address") || "";

    const orderRef = `HOC-${Date.now().toString().slice(-6)}`;
    data.append("paymentId", `UPI_DIRECT_${Date.now()}`);
    data.append("paymentStatus", "PENDING_UPI_CONFIRMATION");
    data.append("amountPaid", "0");

    setStatus("submitting");

    try {
      const paymentInfo = {
        verified: false,
        paymentStatus: "PENDING_UPI_CONFIRMATION",
        amount: subtotal,
        paymentId: `UPI_DIRECT_${Date.now()}`,
        orderId: orderRef,
      };

      await Promise.all([
        fetch("/api/forms", { method: "POST", body: data }),
        sendWeb3FormsNotification("cart", data, paymentInfo).catch((err) =>
          console.warn("Web3Forms notification error:", err)
        ),
      ]);

      setDirectOrderDetails({
        orderRef,
        customerName,
        customerEmail,
        customerPhone,
        customerAddress,
        amount: subtotal,
        date: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "medium",
          timeStyle: "short",
        }),
        items: [...items],
      });

      clearCart();
      setStatus("direct_upi_success");
    } catch (err) {
      console.error("Direct order submission failed:", err);
      setStatus("error");
      setError(err?.message || "Could not submit your order. Please try again.");
    }
  }

  return (
    <section className="section cart-page">
      <div className="container">
        <div className="cart-page-heading">
          <div>
            <span className="eyebrow">YOUR SELECTIONS</span>
            <h1>
              Your <em>cart.</em>
            </h1>
          </div>
          {ready && items.length ? (
            <span className="cart-count-pill">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          ) : null}
        </div>

        {!ready ? (
          <div className="data-loading">Loading your cart...</div>
        ) : !items.length && status !== "sent" ? (
          <div className="no-results cart-empty-state">
            <div className="empty-cart-icon" aria-hidden="true">🌿</div>
            <strong>Your cart is empty.</strong>
            <p>Explore our pure essential oils and practitioner education pathways to begin.</p>
            <div className="empty-cart-actions">
              <Link className="btn btn-primary" href="/products">
                Explore Products <span>→</span>
              </Link>
              <Link className="btn btn-outline" href="/education">
                Explore Education <span>→</span>
              </Link>
            </div>
          </div>
        ) : status === "paid" ? (
          <div className="cart-success" role="status">
            <div className="success-icon is-paid" aria-hidden="true">✓</div>
            <span className="paid-badge">PAYMENT CONFIRMED</span>
            <h2>Payment Successful!</h2>
            <p>
              Thank you for your purchase. Your payment has been securely verified and recorded.
              A receipt has been dispatched to our fulfillment team, and Richa will reach out to you
              personally via WhatsApp / Email with your order details and delivery / enrolment confirmation.
            </p>

            {paymentReceipt ? (
              <div className="payment-receipt-box">
                <div className="receipt-row">
                  <span>Payment ID:</span>
                  <code>{paymentReceipt.paymentId}</code>
                </div>
                <div className="receipt-row">
                  <span>Amount Paid:</span>
                  <strong>₹{paymentReceipt.amount.toLocaleString("en-IN")}</strong>
                </div>
                <div className="receipt-row">
                  <span>Order Reference:</span>
                  <code>{paymentReceipt.orderId}</code>
                </div>
                <div className="receipt-row">
                  <span>Date & Time:</span>
                  <span>{paymentReceipt.date}</span>
                </div>
                <div className="receipt-divider" />
                <div className="receipt-items-list">
                  <span className="receipt-items-label">Order Items:</span>
                  <ul>
                    {paymentReceipt.items.map((it, idx) => (
                      <li key={idx}>
                        {it.name} {it.tier ? `(${it.tier})` : ""} × {it.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}

            <div className="paid-actions" style={{ flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
                <Link className="btn btn-primary" href="/">
                  Return to Home <span>→</span>
                </Link>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => window.print()}
                >
                  Print Receipt 🖨
                </button>
              </div>

              {paymentReceipt ? (
                <a
                  href={`https://wa.me/919076002266?text=${encodeURIComponent(
                    `Hello Richa! I've completed payment on Harmony of Cells (Payment ID: ${paymentReceipt.paymentId}).\n\n` +
                      `*Items:*\n` +
                      paymentReceipt.items
                        .map((it) => `• ${it.name} ${it.tier ? `(${it.tier})` : ""} × ${it.quantity}`)
                        .join("\n") +
                      `\n\n*Amount Paid:* ₹${paymentReceipt.amount.toLocaleString("en-IN")}\n` +
                      `Looking forward to receiving the confirmation and dispatch details. Thank you!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-confirm"
                  style={{ width: "100%", maxWidth: "420px", justifyContent: "center" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="whatsapp-svg-icon" aria-hidden="true">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.201.3-.777.979-.953 1.18-.175.2-.35.225-.651.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.516-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.48 1.079 2.909 1.23 3.11.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35z"/>
                    <path d="M12.004 2C6.482 2 2.003 6.48 2.003 12c0 1.99.585 3.845 1.597 5.414L2 22l4.734-1.543A9.957 9.957 0 0 0 12.004 22c5.522 0 10.001-4.48 10.001-10s-4.479-10-10.001-10zm0 18.2c-1.628 0-3.138-.485-4.407-1.319l-.316-.208-2.812.916.932-2.738-.228-.337A8.163 8.163 0 0 1 3.804 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                  </svg>
                  <span>Chat with Richa on WhatsApp for Fast Dispatch →</span>
                </a>
              ) : null}
            </div>
          </div>
        ) : status === "direct_upi_success" && directOrderDetails ? (
          <div className="cart-success" role="status">
            <div className="success-icon is-paid" aria-hidden="true">✓</div>
            <span className="paid-badge" style={{ background: "rgba(37, 211, 102, 0.15)", color: "#1a783e" }}>
              ORDER RECORDED • PENDING UPI
            </span>
            <h2>Order Received Successfully!</h2>
            <p>
              Thank you, {directOrderDetails.customerName}! Your order has been registered in our system.
              To finalize and dispatch your items, please connect with Richa on WhatsApp below to complete payment via UPI (GPay, PhonePe, Paytm, BHIM) or Bank Transfer.
            </p>

            <div className="direct-upi-success-box">
              <div className="payment-receipt-box" style={{ margin: "0 0 20px 0" }}>
                <div className="receipt-row">
                  <span>Order Reference:</span>
                  <code>{directOrderDetails.orderRef}</code>
                </div>
                <div className="receipt-row">
                  <span>Total Amount to Pay:</span>
                  <strong style={{ color: "var(--green-dark)", fontSize: "1.15rem" }}>
                    ₹{directOrderDetails.amount.toLocaleString("en-IN")}
                  </strong>
                </div>
                <div className="receipt-row">
                  <span>Customer Phone:</span>
                  <span>{directOrderDetails.customerPhone}</span>
                </div>
                <div className="receipt-divider" />
                <div className="receipt-items-list">
                  <span className="receipt-items-label">Order Items:</span>
                  <ul>
                    {directOrderDetails.items.map((it, idx) => (
                      <li key={idx}>
                        {it.name} {it.tier ? `(${it.tier})` : ""} × {it.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="upi-instruction-step">
                <span className="upi-step-num">1</span>
                <div>
                  <strong>Tap the WhatsApp button below</strong> to send your order reference directly to Richa.
                </div>
              </div>
              <div className="upi-instruction-step">
                <span className="upi-step-num">2</span>
                <div>
                  Richa will share the direct <strong>UPI QR code</strong> or bank transfer details for instant clearance.
                </div>
              </div>
              <div className="upi-instruction-step">
                <span className="upi-step-num">3</span>
                <div>
                  Your order is prepared and tracking details will be sent immediately upon confirmation.
                </div>
              </div>
            </div>

            <div className="paid-actions" style={{ flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <a
                href={`https://wa.me/919076002266?text=${encodeURIComponent(
                  `Hello Richa! I've placed an order on Harmony of Cells (Order #${directOrderDetails.orderRef}).\n\n` +
                    `*Items:*\n` +
                    directOrderDetails.items
                      .map((it) => `• ${it.name} ${it.tier ? `(${it.tier})` : ""} × ${it.quantity}`)
                      .join("\n") +
                    `\n\n*Total Amount:* ₹${directOrderDetails.amount.toLocaleString("en-IN")}\n` +
                    `*Name:* ${directOrderDetails.customerName}\n` +
                    `*Phone:* ${directOrderDetails.customerPhone}\n` +
                    (directOrderDetails.customerAddress
                      ? `*Delivery Address:* ${directOrderDetails.customerAddress}\n`
                      : "") +
                    `\nPlease share your UPI payment QR code so I can complete payment. Thank you!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-confirm"
                style={{ width: "100%", maxWidth: "420px", justifyContent: "center" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="whatsapp-svg-icon" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.201.3-.777.979-.953 1.18-.175.2-.35.225-.651.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.516-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.48 1.079 2.909 1.23 3.11.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35z"/>
                  <path d="M12.004 2C6.482 2 2.003 6.48 2.003 12c0 1.99.585 3.845 1.597 5.414L2 22l4.734-1.543A9.957 9.957 0 0 0 12.004 22c5.522 0 10.001-4.48 10.001-10s-4.479-10-10.001-10zm0 18.2c-1.628 0-3.138-.485-4.407-1.319l-.316-.208-2.812.916.932-2.738-.228-.337A8.163 8.163 0 0 1 3.804 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                </svg>
                <span>Confirm & Pay via WhatsApp (Richa) →</span>
              </a>

              <Link className="btn btn-outline" href="/" style={{ width: "100%", maxWidth: "420px", justifyContent: "center" }}>
                Return to Home <span>→</span>
              </Link>
            </div>
          </div>
        ) : status === "sent" ? (
          <div className="cart-success" role="status">
            <div className="success-icon" aria-hidden="true">✓</div>
            <h2>Inquiry received.</h2>
            <p>
              Thank you for reaching out. Richa and the Harmony of Cells team will review
              your selections and contact you personally via WhatsApp / Email to confirm
              availability, enrolment, and payment details.
            </p>
            <Link className="btn btn-primary" href="/">
              Return to Home <span>→</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-layout">
              {/* Left Column: Selections & Order Summary */}
              <div className="cart-summary-panel">
                <div className="cart-summary-intro">
                  <div>
                    <span className="summary-title">Order summary</span>
                    <p>Review items before submitting your inquiry.</p>
                  </div>
                  <button
                    type="button"
                    className="cart-clear-link"
                    onClick={clearCart}
                    aria-label="Clear all items from cart"
                  >
                    Clear cart
                  </button>
                </div>

                <CartItems
                  title="Products"
                  items={products}
                  onRemove={removeItem}
                  onQuantity={updateQuantity}
                />

                <CartItems
                  title="Courses"
                  items={courses}
                  onRemove={removeItem}
                  onQuantity={updateQuantity}
                />

                {/* Subtotal & Pricing Breakdown */}
                <div className="cart-subtotal-card">
                  <div className="cart-subtotal-row">
                    <span>Estimated Total</span>
                    <strong className="cart-subtotal-price">
                      {subtotal > 0 ? `₹${subtotal.toLocaleString("en-IN")}` : "Price on request"}
                    </strong>
                  </div>
                  <p className="cart-subtotal-caption">
                    {subtotal > 0
                      ? "🔒 Secure online payment via Razorpay. Supports UPI (GPay, PhonePe, Paytm), Cards & NetBanking."
                      : "✦ No immediate payment required. Confirmation & payment link shared after review."}
                  </p>
                </div>
              </div>

              {/* Right Column: Inquiry & Checkout Form */}
              <form className="cart-checkout" onSubmit={submit}>
                <div className="cart-checkout-heading">
                  <span className="checkout-step-badge">Step 2 of 2</span>
                  <h2>{subtotal > 0 ? "Checkout & Payment" : "Send your inquiry"}</h2>
                  <p>
                    {subtotal > 0
                      ? "Provide your delivery / learner details to complete your order."
                      : "We’ll personally verify your items, answer questions, and confirm next steps."}
                  </p>
                </div>

                <div className="cart-form-grid-2">
                  <label>
                    Full name *
                    <input name="name" required placeholder="e.g. Richa Sharma" />
                  </label>
                  <label>
                    Phone / WhatsApp *
                    <input name="phone" type="tel" required placeholder="e.g. +91 98765 43210" />
                  </label>
                </div>

                <label>
                  Email address *
                  <input name="email" type="email" required placeholder="e.g. name@example.com" />
                </label>

                {products.length ? (
                  <label>
                    Delivery address *
                    <textarea
                      name="address"
                      required
                      rows="3"
                      placeholder="Complete delivery address including pincode..."
                    />
                  </label>
                ) : null}

                {courses.length ? (
                  <>
                    <label>
                      Your background *
                      <select name="background" required defaultValue="">
                        <option value="" disabled>
                          Select your background
                        </option>
                        <option>Individual / Personal Learning</option>
                        <option>Wellness Professional</option>
                        <option>Healthcare Professional</option>
                        <option>Doctor</option>
                        <option>Dentist</option>
                        <option>Physiotherapist</option>
                        <option>Yoga Teacher</option>
                        <option>Nutritionist</option>
                        <option>Therapist</option>
                        <option>Wellness Coach</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label>
                      What are you hoping to achieve? *
                      <textarea
                        name="goals"
                        required
                        rows="3"
                        placeholder="Tell us what you hope to learn or accomplish..."
                      />
                    </label>
                  </>
                ) : null}

                <label>
                  Notes or special requests
                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Any specific questions or preferred consultation timings..."
                  />
                </label>

                {error ? (
                  <div className="payment-fallback-notice">
                    <p className="custom-form-error" role="alert" style={{ margin: "0 0 8px 0" }}>
                      {error}
                    </p>
                    {subtotal > 0 ? (
                      <button
                        type="button"
                        className="btn btn-outline cart-btn-upi"
                        onClick={handleDirectUpiOrder}
                        disabled={status === "submitting"}
                      >
                        Place Order & Pay via UPI / WhatsApp 💬
                      </button>
                    ) : null}
                  </div>
                ) : null}

                <div className="cart-payment-options">
                  <button
                    type="submit"
                    className="btn btn-primary cart-submit"
                    disabled={
                      status === "submitting" ||
                      status === "preparing_payment" ||
                      status === "awaiting_payment" ||
                      status === "verifying_payment"
                    }
                  >
                    {status === "preparing_payment"
                      ? "Initializing payment..."
                      : status === "awaiting_payment"
                      ? "Complete in Razorpay..."
                      : status === "verifying_payment"
                      ? "Verifying payment..."
                      : status === "submitting"
                      ? "Submitting order..."
                      : subtotal > 0
                      ? `Proceed to Pay ₹${subtotal.toLocaleString("en-IN")}`
                      : "Send inquiry"}
                    <span aria-hidden="true">→</span>
                  </button>

                  {subtotal > 0 ? (
                    <div className="cart-alt-payment">
                      <span className="cart-alt-divider">or</span>
                      <button
                        type="button"
                        className="btn btn-outline cart-btn-upi"
                        onClick={handleDirectUpiOrder}
                        disabled={status === "submitting" || status === "preparing_payment"}
                      >
                        Place Order & Pay via UPI / WhatsApp 💬
                      </button>
                    </div>
                  ) : null}
                </div>
              </form>
            </div>

            <Recommendations items={recommendations} />
          </>
        )}
      </div>
    </section>
  );
}
