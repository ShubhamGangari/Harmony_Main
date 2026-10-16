import Link from "next/link";

export const metadata = {
  title: "Educational & Medical Disclaimer | Harmony of Cells",
  description:
    "Read the educational disclaimer for Harmony of Cells. Our content, consultations, and workshops are educational in nature and do not provide medical diagnosis or treatment.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DisclaimerPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <div className="container policy-hero-content">
          <span className="eyebrow">LEGAL & REGULATORY NOTICE</span>
          <h1>Educational & Medical <em>Disclaimer.</em></h1>
          <p className="policy-hero-subhead">
            Important information regarding the scope of our wellness education, consultations,
            and botanical information.
          </p>

          <div className="policy-review-banner" role="alert">
            <span className="banner-tag">DRAFT NOTICE</span>
            <strong>Legal Review Required Before Public Launch:</strong> This disclaimer draft is based on
            Section 13 of the Harmony of Cells Developer Handoff Blueprint v2. It is provided for review by
            qualified legal counsel and must not be considered a final legally certified document.
          </div>
        </div>
      </section>

      <section className="section bg-cream-soft">
        <div className="container max-w-4xl">
          <div className="policy-document-body">
            <div className="policy-section">
              <h2>1. General Educational Nature</h2>
              <p>
                Harmony of Cells provides wellness education, lifestyle practices, and sensory guidance intended
                to support informed personal self-care and daily rhythms. All materials published on this website—including
                articles, guides, audio, video, graphics, and course content—are provided for general educational
                and informational purposes only.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. Not Medical Advice or Treatment</h2>
              <p>
                Our content, workshops, and one-on-one consultations are strictly educational in nature. They are
                <strong> not intended to diagnose, treat, cure, or prevent any disease, illness, or medical condition</strong>,
                nor are they a substitute for professional medical advice, clinical diagnosis, psychotherapy, or medical treatment.
              </p>
              <p>
                Never disregard professional medical advice or delay seeking medical attention because of information
                you have read on this website or discussed during an educational consultation. Always consult your personal
                physician or an appropriately qualified healthcare professional regarding any medical diagnosis or symptom.
              </p>
            </div>

            <div className="policy-section">
              <h2>3. Botanical & Essential Oil Use</h2>
              <p>
                Essential oils are highly concentrated plant-derived extracts and must always be handled with care,
                respect, and appropriate safety precautions. Individual physiological and dermatological responses may vary.
              </p>
              <p>
                If you have an existing health condition, are taking prescription medications, are pregnant or breastfeeding,
                have known sensitivities or allergies, or have concerns regarding essential oil use, please consult a qualified
                medical doctor before introducing botanicals into your routine.
              </p>
              <p>
                Product information and aromatic notes should always be read together with the original manufacturer&apos;s
                packaging, directions for use, expiration dates, and specific cautionary statements.
              </p>
            </div>

            <div className="policy-section">
              <h2>4. Emergency Medical Situations</h2>
              <p>
                Harmony of Cells does not provide emergency medical services or emergency first aid dispatch.
                If you or someone in your care experiences a medical emergency, acute allergic reaction, respiratory distress,
                or accidental ingestion of a concentrated chemical or botanical, immediately contact your local emergency
                services (such as 112 in India, 911 in the US) or a national poison control helpline.
              </p>
            </div>

            <div className="policy-section policy-audit-box">
              <h3>Client Verification Checklist (Launch Blockers)</h3>
              <ul>
                <li>[ ] Formal sign-off on disclaimer language by certified Indian legal counsel.</li>
                <li>[ ] Review of consumer protection compliance under ASCI and CCPA guidelines.</li>
                <li>[ ] Alignment with distributor agreements for dōTERRA products in India.</li>
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
