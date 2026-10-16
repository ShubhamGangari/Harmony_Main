import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Essential Oil Safety & Responsible Use | Harmony of Cells",
  description:
    "Learn responsible essential oil use, dilution, topical application, diffusion, precautions and when to seek professional guidance.",
};

const SAFETY_PILLARS = [
  {
    icon: "💧",
    title: "1. Dilution & Topical Application",
    summary: "Follow product labels and use carrier oils for topical use.",
    details: [
      "Essential oils are highly concentrated botanical extracts. Applying pure essential oils directly to the skin increases the likelihood of sensitivity or contact irritation.",
      "Most manufacturers recommend blending essential oils with a quality plant-based carrier oil (such as Fractionated Coconut Oil, Jojoba oil, or Sweet Almond oil) before applying to the skin.",
      "Consider conducting a patch test before regular use: blend a small drop with carrier oil, apply to the inner forearm, and observe for any personal sensitivity.",
      "Always read and follow the specific dilution and application instructions on the individual product packaging.",
    ],
  },
  {
    icon: "💨",
    title: "2. Diffusion & Ambient Use",
    summary: "Diffuse in well-ventilated spaces with adequate airflow.",
    details: [
      "Follow the manufacturer operating instructions for your specific diffuser model and space size.",
      "Educational aromatherapy sources often suggest intermittent diffusion with breaks to allow the olfactory senses to reset, rather than continuous unventilated diffusion.",
      "Ensure rooms have proper ventilation and air circulation. Avoid diffusing in small, closed, or windowless spaces without fresh airflow.",
      "Ensure pets and family members can easily leave the room if they find the aroma overpowering or uncomfortable.",
    ],
  },
  {
    icon: "☀️",
    title: "3. Phototoxicity (Sun Sensitivity)",
    summary: "Certain citrus oils increase sensitivity to ultraviolet light.",
    details: [
      "Certain cold-pressed citrus oils (such as Bergamot, Lime, Grapefruit, and Lemon) contain naturally occurring compounds called furanocoumarins that can increase sun sensitivity.",
      "Review the specific product label before outdoor exposure. General manufacturer guidance typically advises avoiding direct sunlight, tanning beds, and intense UV exposure for 12 to 18 hours after topical application, or as indicated on the package.",
      "Where daytime topical use is desired, consider diffusing the aroma instead, applying under clothing, or selecting steam-distilled citrus alternatives where available.",
    ],
  },
  {
    icon: "🤰",
    title: "4. Pregnancy & Breastfeeding",
    summary: "Exercise heightened caution and consult qualified healthcare providers.",
    details: [
      "The body experiences heightened physiological and hormonal changes during pregnancy and lactation.",
      "Many wellness professionals advise avoiding essential oil use during the first trimester unless under direct medical supervision.",
      "Certain essential oils should be avoided during pregnancy due to their specific botanical constituents.",
      "Always consult your obstetrician, midwife, or qualified healthcare professional before introducing any essential oils into your personal care or home environment.",
    ],
  },
  {
    icon: "👶",
    title: "5. Children & Older Adults",
    summary: "Gentler approaches and age-appropriate precautions are essential.",
    details: [
      "Infants and young children have delicate skin, developing respiratory systems, and different metabolic responses.",
      "Avoid applying strong, high-menthol or high-cineole oils (such as Peppermint, Eucalyptus, or Rosemary) on or near the face, nose, or chest of infants and young children.",
      "Older adults often have thinner, more fragile skin and may be managing multiple health conditions; conservative, gentle usage is recommended.",
      "Always store all essential oil bottles securely capped and out of sight and reach of children and vulnerable individuals.",
    ],
  },
  {
    icon: "🐾",
    title: "6. Pets & Household Animals",
    summary: "Animals metabolise botanical compounds differently.",
    details: [
      "Pets—especially cats, dogs, birds, and small animals—have acute olfactory sensitivity and different metabolic pathways. Cats lack specific liver enzymes required to process certain terpenes and phenols.",
      "Do not apply essential oils directly onto pets without the explicit supervision of a qualified veterinary professional.",
      "When diffusing at home, always leave doors open so pets can leave the room freely if the aroma bothers them.",
      "Never leave open diffusers, bottles, or spilled oils where animals could access, lick, or brush against them.",
    ],
  },
  {
    icon: "🌿",
    title: "7. Allergies & Sensitisations",
    summary: "Discontinue use if irritation occurs and seek professional advice.",
    details: [
      "Individual physiological responses vary widely. A botanical that feels soothing to one person may cause contact irritation in another.",
      "If skin redness, itching, or irritation occurs, discontinue use of the product immediately.",
      "Because essential oils are oil-soluble (hydrophobic), gently applying a neutral carrier oil (such as coconut, olive, or jojoba oil) can help dilute the botanical on the skin surface before gently washing with mild soap and water.",
      "If irritation, burning, or discomfort persists, seek evaluation from a qualified dermatologist or medical practitioner.",
    ],
  },
  {
    icon: "💊",
    title: "8. Medication & Health Considerations",
    summary: "Disclose aromatic and botanical use to your healthcare team.",
    details: [
      "Certain chemical constituents in essential oils can interact with prescription medications or affect underlying health conditions.",
      "If you have an existing medical condition, are scheduled for medical procedures, or take prescription drugs, discuss your intended essential oil practices with your prescribing physician.",
      "Essential oils are complementary lifestyle tools and should never replace prescribed medical treatments or advice.",
    ],
  },
  {
    icon: "🧴",
    title: "9. Safe Storage & Shelf Life",
    summary: "Protect oils from heat, light, air, and moisture.",
    details: [
      "Store essential oils in airtight, dark amber or cobalt glass bottles to protect delicate botanical constituents from degradation.",
      "Keep bottles in a cool, dry place away from direct sunlight, open flames, and heat sources.",
      "Oxidised oils (oils exposed to air over long periods) are significantly more prone to causing skin sensitisation. Discard oils that have noticeably changed aroma, colour, or consistency.",
      "Always ensure bottle caps are securely tightened after each use.",
    ],
  },
  {
    icon: "👁️",
    title: "10. Eye Contact & Mucous Membranes",
    summary: "Keep essential oils away from eyes, ears, and mucous membranes.",
    details: [
      "Essential oils should never be placed directly into the eyes, ears, nasal passages, or onto broken skin or mucous membranes.",
      "Wash hands thoroughly with soap after handling essential oil bottles before touching your face, eyes, or handling contact lenses.",
      "If accidental eye contact occurs, follow manufacturer emergency instructions and seek immediate medical evaluation or contact a poison control centre.",
      "Do not rub the eye. While botanical literature suggests soothing accidental skin contact around the eyelid with a drop of gentle carrier oil, urgent professional medical evaluation should always be sought if discomfort or redness continues.",
    ],
  },
  {
    icon: "⚠️",
    title: "11. Accidental Ingestion & Internal Use",
    summary: "Harmony of Cells advocates aromatic and topical education.",
    details: [
      "Essential oils are exceptionally concentrated plant extracts. A single drop often represents the botanical equivalent of dozens of cups of herbal tea.",
      "Harmony of Cells does not advocate casual, self-prescribed internal consumption of essential oils. Internal usage should only occur under the direct guidance of a licensed healthcare provider certified in clinical aromatic medicine.",
      "In the event of accidental ingestion by a child, pet, or vulnerable individual, do not induce vomiting unless explicitly directed by a poison control centre or emergency physician. Immediately contact emergency medical services or your local poison control centre, keeping the product bottle available for reference.",
    ],
  },
  {
    icon: "🩺",
    title: "12. When to Consult a Healthcare Professional",
    summary: "Recognise the appropriate boundaries of lifestyle wellness.",
    details: [
      "Essential oils are supportive sensory, lifestyle, and self-care tools designed to complement whole-person wellbeing. They are not medical cures, pharmaceuticals, or disease treatments.",
      "If you experience any sudden adverse reaction, severe allergic symptoms, respiratory discomfort, or persistent irritation, seek immediate medical care.",
      "Before beginning any new wellness protocol involving botanicals, we encourage consulting an appropriately qualified physician, pharmacist, or certified clinical aromatherapist.",
    ],
  },
];

export default function EssentialOilSafetyPage() {
  return (
    <main className="safety-page">
      {/* Hero Section */}
      <section className="safety-hero">
        <div className="container safety-hero-content">
          <span className="eyebrow">COMPLIANCE & RESPONSIBLE PRACTICE</span>
          <h1>Essential Oil Safety & <em>Responsible Use.</em></h1>
          <p className="safety-hero-subhead">
            We believe responsible practice is an essential foundation of wellness education.
            Essential oils are concentrated botanical substances that deserve appreciation,
            respect and informed handling.
          </p>

          <div className="safety-quick-banner">
            <span className="safety-quick-icon" aria-hidden="true">✓</span>
            <div>
              <strong>Education Before Application:</strong> Understand why, when, and how to use botanical oils safely in everyday life—and when not to use them.
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Safety Tenets Grid */}
      <section className="section bg-cream-soft">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">CORE PRINCIPLES</span>
            <h2>Five Essential Safety Tenets</h2>
            <p className="section-subhead">
              Straightforward guidelines to keep your daily aromatic and topical rituals safe,
              effective and grounded.
            </p>
          </div>

          <div className="safety-tenets-grid">
            <div className="safety-tenet-card">
              <span className="tenet-num">01</span>
              <h3>Always Dilute</h3>
              <p>
                Blend essential oils with carrier oils (coconut, jojoba, almond) before applying to the skin to prevent sensitisation.
              </p>
            </div>
            <div className="safety-tenet-card">
              <span className="tenet-num">02</span>
              <h3>Diffuse with Airflow</h3>
              <p>
                Use intermittent diffusion in well-ventilated rooms so occupants and pets can breathe freely and step away.
              </p>
            </div>
            <div className="safety-tenet-card">
              <span className="tenet-num">03</span>
              <h3>Protect Sensitive Areas</h3>
              <p>
                Keep oils away from eyes, inner ears, and mucous membranes. In case of accidental contact, follow product label instructions and seek professional medical guidance.
              </p>
            </div>
            <div className="safety-tenet-card">
              <span className="tenet-num">04</span>
              <h3>Mind Sun Sensitivity</h3>
              <p>
                Check citrus oil packaging for UV guidance, and avoid direct sun or UV exposure after applying phototoxic oils topically as advised by the manufacturer.
              </p>
            </div>
            <div className="safety-tenet-card">
              <span className="tenet-num">05</span>
              <h3>Consult for Health Conditions</h3>
              <p>
                Seek medical advice if pregnant, nursing, taking medications, or managing chronic health conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed 12 Pillars Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">DETAILED GUIDANCE</span>
            <h2>Twelve Dimensions of Responsible Use</h2>
            <p className="section-subhead">
              Explore thorough safety standards designed to help you, your family, and your clients
              navigate nature-based wellness with confidence.
            </p>
          </div>

          <div className="safety-pillars-grid">
            {SAFETY_PILLARS.map((pillar, idx) => (
              <article key={pillar.title} className="safety-pillar-card">
                <div className="safety-pillar-header">
                  <span className="safety-pillar-icon" aria-hidden="true">{pillar.icon}</span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p className="safety-pillar-summary">{pillar.summary}</p>
                  </div>
                </div>
                <ul className="safety-pillar-list">
                  {pillar.details.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accidental Exposure & Support Section */}
      <section className="section bg-cream-soft">
        <div className="container">
          <div className="safety-emergency-card">
            <div className="safety-emergency-header">
              <span className="emergency-badge">SAFETY & EXPOSURE GUIDANCE</span>
              <h2>Accidental Exposure & Urgent Support Notes</h2>
              <p className="safety-emergency-subhead">
                The notes below provide educational context based on general botanical safety literature. They do not substitute for professional medical assessment, poison control instructions, or manufacturer Safety Data Sheets (SDS). In any urgent scenario, contact local emergency healthcare or poison control immediately.
              </p>
            </div>
            <div className="emergency-steps-grid">
              <div className="emergency-step">
                <strong>Accidental Eye Contact:</strong>
                <p>
                  Immediately refer to the product packaging. Do not rub the eye. Seek prompt medical evaluation or contact a poison control centre. While botanical literature frequently notes that gently soothing surrounding eyelid skin with a mild carrier oil can help dilute hydrophobic botanicals, urgent professional evaluation should be prioritized if pain or irritation persists.
                </p>
              </div>
              <div className="emergency-step">
                <strong>Skin Sensitivity or Redness:</strong>
                <p>
                  Discontinue use immediately. Applying a gentle plant carrier oil (such as coconut, jojoba, or olive oil) can help dilute the botanical on the skin surface prior to washing gently with mild soap and water. If irritation, rash, or burning persists, consult a qualified healthcare provider.
                </p>
              </div>
              <div className="emergency-step">
                <strong>Accidental Ingestion:</strong>
                <p>
                  Do not induce vomiting unless explicitly directed by a poison control centre or emergency medical physician. Have the original product container available so healthcare responders can identify the botanical ingredients, and call your local emergency service or poison helpline immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Educational Legal Disclaimer */}
      <section className="section">
        <div className="container">
          <div className="safety-disclaimer-box" role="region" aria-label="Educational Disclaimer">
            <div className="disclaimer-header">
              <span className="disclaimer-tag">LEGAL NOTICE • EDUCATIONAL DISCLAIMER</span>
              <span className="disclaimer-status">Marked for Legal Review Before Publication</span>
            </div>
            <div className="disclaimer-body">
              <p>
                Harmony of Cells provides wellness education and guidance intended to support informed lifestyle,
                nervous system and self-care choices. Our content, workshops and consultations are educational
                in nature and are <strong>not intended to diagnose, treat, cure or prevent any disease or medical condition</strong>,
                nor are they a substitute for professional medical advice, diagnosis or treatment.
              </p>
              <p>
                Essential oils are highly concentrated botanical products and should be used responsibly and according
                to appropriate product, dilution and safety guidance. Individual physiological responses may vary.
              </p>
              <p>
                If you have a medical condition, are taking prescription medication, are pregnant or breastfeeding,
                have allergies or sensitivities, or have questions regarding the safe use of essential oils, please
                consult an appropriately qualified healthcare professional before use.
              </p>
              <p className="disclaimer-footnote">
                Product information should always be read together with the manufacturer's original instructions,
                applicable package warnings, and verified directions for use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section safety-cta-section bg-cream-soft">
        <div className="container text-center">
          <span className="eyebrow">NEXT STEPS</span>
          <h2>Explore Informed, Grounded Wellness</h2>
          <p className="section-subhead max-w-2xl mx-auto">
            Ready to explore nature-based practices with personal guidance, or build your foundation in essential oil education?
          </p>
          <div className="safety-cta-buttons">
            <GoogleFormLink type="consultation" className="btn btn-primary">
              Book a Personal Consultation
            </GoogleFormLink>
            <Link href="/products" className="btn btn-outline">
              Explore Product Collection
            </Link>
            <Link href="/education" className="btn btn-outline">
              Explore Education Pathways
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
