import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Harmony of Cells",
  description:
    "Review the terms and conditions governing the use of the Harmony of Cells website, education programs, and consultation services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <div className="container policy-hero-content">
          <span className="eyebrow">TERMS OF USE</span>
          <h1>Terms & <em>Conditions.</em></h1>
          <p className="policy-hero-subhead">
            Please read these terms carefully before accessing or using the Harmony of Cells website and services.
          </p>

          <div className="policy-review-banner" role="alert">
            <span className="banner-tag">DRAFT FOR LEGAL REVIEW</span>
            <strong>Legal Confirmation Required:</strong> This document outlines terms of use based on the
            educational service model. Final jurisdiction, dispute resolution clauses, and corporate entity
            definitions must be approved by client legal counsel prior to formal execution.
          </div>
        </div>
      </section>

      <section className="section bg-cream-soft">
        <div className="container max-w-4xl">
          <div className="policy-document-body">
            <div className="policy-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Harmony of Cells website (harmonyofcells.com), you acknowledge that you
                have read, understood, and agree to be bound by these Terms and Conditions, as well as our Educational
                Disclaimer and Privacy Policy. If you do not agree with any part of these terms, please discontinue use
                of the website.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. Scope of Services & Educational Boundary</h2>
              <p>
                Harmony of Cells is an educational and lifestyle wellness platform. Our programs, workshops, digital
                resources, and one-on-one consultations are educational conversations designed to help you explore
                nature-based self-care, daily rhythms, and aromatherapy.
              </p>
              <p>
                <strong>No Doctor-Patient Relationship:</strong> Using this website, enrolling in courses, or attending
                consultations does not create a physician-patient, therapist-client, or other healthcare provider relationship.
                Our services are complementary lifestyle guidance and do not constitute clinical treatment.
              </p>
            </div>

            <div className="policy-section">
              <h2>3. Product Inquiries & Purchases</h2>
              <p>
                Product listings on this website reflect curated botanical oils, blends, and accessories.
                Product descriptions focus strictly on aromatic profiles, sensory experiences, and traditional usage.
                We operate on an inquiry-first commerce model. Final pricing, availability, and delivery timelines are
                confirmed directly upon inquiry.
              </p>
            </div>

            <div className="policy-section">
              <h2>4. Intellectual Property</h2>
              <p>
                All content, text, trademarks, logos, course structures, and visual designs published on this website—including
                the Harmony of Cells brand, the 5R Method (Rest, Regulate, Restore, Resilience, Ritual), and educational guides—are
                the intellectual property of Harmony of Cells and Richa Ramola, protected under applicable copyright laws.
                You may not reproduce, distribute, or commercially exploit any content without prior written permission.
              </p>
            </div>

            <div className="policy-section">
              <h2>5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Harmony of Cells, its founder, and affiliates shall not be liable
                for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use
                this website, misapplication of botanical extracts, failure to consult qualified healthcare providers,
                or reliance on any educational content presented herein.
              </p>
            </div>

            <div className="policy-section policy-audit-box">
              <h3>Client Verification Checklist (Launch Blockers)</h3>
              <ul>
                <li>[ ] Confirmation of designated legal jurisdiction (e.g. Courts of New Delhi / Gurugram, India).</li>
                <li>[ ] Legal counsel review of limitation of liability and consumer dispute arbitration clauses.</li>
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
