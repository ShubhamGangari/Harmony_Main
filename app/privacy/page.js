import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Harmony of Cells",
  description:
    "Learn how Harmony of Cells handles your personal information, consultation requests, and enquiry communications with privacy and care.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <div className="container policy-hero-content">
          <span className="eyebrow">DATA PROTECTION & TRANSPARENCY</span>
          <h1>Privacy <em>Policy.</em></h1>
          <p className="policy-hero-subhead">
            We value your trust and are committed to handling your personal details with transparency,
            respect, and discretion.
          </p>

          <div className="policy-review-banner" role="alert">
            <span className="banner-tag">DRAFT FOR LEGAL CONFIRMATION</span>
            <strong>Client Action Required:</strong> This draft policy outlines actual data handling practices
            for contact forms and enquiries. The registered corporate entity name, registered office address,
            and jurisdiction-specific data officer details must be verified by client counsel prior to publication.
          </div>
        </div>
      </section>

      <section className="section bg-cream-soft">
        <div className="container max-w-4xl">
          <div className="policy-document-body">
            <div className="policy-section">
              <h2>1. Overview & Information We Collect</h2>
              <p>
                Harmony of Cells collects personal information only when you voluntarily provide it to us through
                our website enquiry forms, consultation booking requests, guide subscriptions, or direct correspondence
                (such as email or WhatsApp).
              </p>
              <p>Depending on the form you complete, we may collect:</p>
              <ul>
                <li>Your name and contact details (email address, phone / WhatsApp number).</li>
                <li>Your delivery address (when you enquire about ordering botanical products).</li>
                <li>Your general background or wellness goals (shared voluntarily for consultation preparation).</li>
                <li>Any questions or messages you choose to share in enquiry forms.</li>
              </ul>
              <p>
                <strong>We do not collect or store sensitive medical records, biometric data, or health insurance information.</strong>
              </p>
            </div>

            <div className="policy-section">
              <h2>2. How We Use Your Information</h2>
              <p>Your details are used strictly for legitimate business and educational purposes:</p>
              <ul>
                <li>To respond to your questions and product availability enquiries.</li>
                <li>To coordinate and schedule one-on-one wellness consultations.</li>
                <li>To process and fulfil verified product orders via authorized courier partners.</li>
                <li>To send requested educational wellness guides or newsletters where you have provided explicit, opt-in consent.</li>
              </ul>
              <p>
                <strong>We never sell, rent, or trade your personal information</strong> to third-party data brokers or marketing aggregators.
              </p>
            </div>

            <div className="policy-section">
              <h2>3. Form Submissions & Third-Party Service Providers</h2>
              <p>
                To deliver our web services, we rely on established service providers:
              </p>
              <ul>
                <li><strong>Web3Forms:</strong> Functions as a secure email-forwarding service that routes contact inquiries directly to our administrative team&apos;s inbox. Web3Forms does not maintain an independent subscriber marketing database or automated email list.</li>
                <li><strong>Google Forms:</strong> Used as an administrative intake mechanism to record consultation and course discovery preferences. Responses are stored in an administrative spreadsheet accessed exclusively by our team to schedule sessions.</li>
                <li><strong>WhatsApp (Meta):</strong> When you click our direct chat links, communication occurs via WhatsApp according to Meta&apos;s independent privacy terms.</li>
                <li><strong>Payment Gateways:</strong> When electronic checkout is activated, payment details are processed directly by certified PCI-DSS compliant providers (such as Razorpay). Harmony of Cells never views or stores your credit card numbers or banking passwords.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4. Your Rights & Data Retention</h2>
              <p>
                You have the right to request a copy of the personal details we hold about you, request corrections,
                or ask that we delete your contact information from our correspondence lists at any time.
                To exercise any of these rights, please email us directly at <strong>connect@harmonyofcells.com</strong>.
              </p>
            </div>

            <div className="policy-section policy-audit-box">
              <h3>Required Client Legal Insertions</h3>
              <ul>
                <li>[ ] Official registered business entity name (e.g. Sole Proprietorship / LLP / Pvt Ltd).</li>
                <li>[ ] Official postal address in India.</li>
                <li>[ ] Grievance officer contact details under the Digital Personal Data Protection Act (DPDPA), 2023.</li>
              </ul>
            </div>

            <div className="policy-back-link">
              <Link href="/" className="btn btn-outline">
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
