import Link from "next/link";

export const metadata = {
  title: "Ordering, Delivery & Returns | Harmony of Cells",
  description:
    "Learn about our inquiry-first botanical ordering process, dispatch estimates, delivery timeframes, and hygiene-first return policies.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShippingReturnsPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <div className="container policy-hero-content">
          <span className="eyebrow">ORDERING & FULFILMENT</span>
          <h1>Ordering, Delivery & <em>Returns Policy.</em></h1>
          <p className="policy-hero-subhead">
            Transparent information regarding our personalized ordering model, dispatch timelines,
            and botanical safety standards.
          </p>

          <div className="policy-review-banner" role="alert">
            <span className="banner-tag">OPERATIONAL DRAFT</span>
            <strong>Reflects Current Inquiry-Only Model:</strong> Because automated ecommerce checkout
            is gated, this policy explains our manual inquiry and WhatsApp ordering workflow.
            Final logistics courier partnerships and return freight rules must be confirmed by client operations.
          </div>
        </div>
      </section>

      <section className="section bg-cream-soft">
        <div className="container max-w-4xl">
          <div className="policy-document-body">
            <div className="policy-section">
              <h2>1. Our Inquiry-First Ordering Process</h2>
              <p>
                At Harmony of Cells, we believe in <em>education before purchase</em>. Essential oils are concentrated
                botanical extracts, and ensuring you receive the appropriate product along with proper dilution and safety
                guidance is our priority.
              </p>
              <p>To order products from our curated collection:</p>
              <ol>
                <li>Explore our catalogue on the <Link href="/products" className="underline font-bold">Essential Oils page</Link>.</li>
                <li>Click <strong>&ldquo;Enquire to Order&rdquo;</strong> on your chosen oil or kit to submit your inquiry directly to our team.</li>
                <li>Our team confirms current stock availability, bottle size, current INR pricing, and applicable courier shipping charges to your PIN code.</li>
                <li>Upon your confirmation, payment details are provided via direct bank transfer (UPI / NEFT) or secure payment link.</li>
                <li>Once payment is verified, your order is prepared for dispatch.</li>
              </ol>
            </div>

            <div className="policy-section">
              <h2>2. Shipping & Delivery Timelines</h2>
              <p>
                <strong>Domestic Coverage:</strong> We arrange courier delivery across serviceable PIN codes in India.
              </p>
              <ul>
                <li><strong>Order Processing & Dispatch:</strong> Confirmed orders are typically processed and dispatched within 2 to 3 business days (excluding Sundays and national holidays).</li>
                <li><strong>Estimated Delivery:</strong> Most metropolitan shipments arrive within 3 to 5 business days from dispatch. Regional and remote locations may take 5 to 8 business days.</li>
                <li><strong>Tracking:</strong> Once your consignment is picked up by our courier partner, tracking details are shared with you directly via email or registered messaging channel.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. Damaged or Tampered Consignments</h2>
              <p>
                We inspect and securely package all glass bottles and diffusers prior to dispatch. However, if your parcel
                arrives with visible external damage or leakage:
              </p>
              <ul>
                <li>Please take clear photographs of the outer carton, courier shipping label, and the damaged product immediately upon receipt.</li>
                <li>Contact our support team within <strong>48 hours</strong> of delivery at <strong>connect@harmonyofcells.com</strong>.</li>
                <li>Our team will promptly coordinate a replacement or resolution.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4. Returns & Hygiene Standards</h2>
              <p>
                Because pure essential oils, carrier oils, and topical balms are personal hygiene and wellness items:
              </p>
              <ul>
                <li><strong>Opened / Unsealed Bottles:</strong> For safety and hygiene reasons, bottles with broken tamper-evident seals or opened caps cannot be returned or refunded under any circumstances.</li>
                <li><strong>Unopened Items:</strong> If you wish to return a factory-sealed, completely unopened product, please notify us within <strong>7 days</strong> of delivery. Return freight shipping costs and inspection requirements will be confirmed upon review.</li>
              </ul>
            </div>

            <div className="policy-section policy-audit-box">
              <h3>Client Operations Verification Checklist</h3>
              <ul>
                <li>[ ] Confirm primary domestic courier partners (e.g. Blue Dart, Delhivery, DTDC).</li>
                <li>[ ] Confirm standard shipping fee structure (e.g. flat rate or free shipping above a threshold).</li>
                <li>[ ] Confirm return warehouse receipt address in India.</li>
              </ul>
            </div>

            <div className="policy-back-link">
              <Link href="/products" className="btn btn-outline">
                ← Explore Essential Oils
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
