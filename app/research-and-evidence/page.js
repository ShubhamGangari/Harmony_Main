import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Research & Evidence Philosophy | What We Know, Suggest & Don't Know | Harmony of Cells",
  description:
    "Our evidence-informed philosophy: distinguishing established botanical knowledge, emerging research, and what science doesn't know — without blanket claims.",
};

const EVIDENCE_TIERS = [
  {
    tier: "01",
    label: "WHAT WE KNOW",
    badge: "ESTABLISHED SCIENCE",
    tagline: "Established Botanical, Safety and Usage Information",
    description:
      "Core botanical chemistry, dermal safety thresholds, and extraction principles established through decades of validated pharmacognosy and dermatological research.",
    items: [
      "Exact chemical constituent profiles (e.g. linalool in Lavender, menthol in Peppermint, alpha-pinene in Frankincense).",
      "Gas chromatography / mass spectrometry (GC/MS) purity testing standards to detect synthetic adulterants and contaminants.",
      "Strict dermal safety thresholds, safe carrier oil dilution ratios (typically 1–2% for daily topical routines), and skin patch testing protocols.",
      "Phototoxicity risks associated with furocoumarins in cold-pressed citrus oils and necessary sun precautions.",
      "Safe ambient diffusion standards for shared rooms, ventilation requirements, and precautions around infants and pets.",
    ],
  },
  {
    tier: "02",
    label: "WHAT RESEARCH SUGGESTS",
    badge: "EMERGING SCIENCE",
    tagline: "Emerging or Preliminary Evidence, Clearly Labelled",
    description:
      "Preliminary studies and sensory trials that show promising correlations with subjective relaxation, respiratory comfort, and mindful pause, without proving disease cures.",
    items: [
      "Olfactory nerve pathways: How inhaling volatile botanical aromatic molecules stimulates the olfactory bulb and limbic system to encourage relaxation responses.",
      "Human sensory studies demonstrating acute down-regulation of heart rate, breathing rate, and skin conductance during guided aromatic breathing.",
      "Preclinical in-vitro (petri-dish) research showing botanical antioxidant or antimicrobial activity in controlled lab settings — which cannot be claimed as cures in the human body.",
      "Sleep hygiene research indicating that consistent aromatic bedtime rituals can serve as effective sensory anchors to support evening wind-down.",
      "Context-dependent benefits: Research highlights that personal aroma preference strongly influences the subjective efficacy of any wellness routine.",
    ],
  },
  {
    tier: "03",
    label: "WHAT WE DON'T KNOW",
    badge: "HONEST BOUNDARIES",
    tagline: "Areas Where Evidence is Limited or Inconclusive",
    description:
      "Gaps in current scientific literature where claims are unproven, evidence is conflicting, or biological mechanisms remain unknown. We believe in transparent honesty.",
    items: [
      "Essential oils do NOT diagnose, treat, cure, or prevent any chronic disease, cancer, infections, or metabolic disorders.",
      "A petri-dish antimicrobial finding does NOT mean an essential oil kills pathogens inside living human organs or bloodstreams.",
      "Long-term effects of chronic, daily high-concentration diffusion are not fully documented; moderate intermittent diffusion remains the evidence-backed recommendation.",
      "Anti-aging and cellular longevity marketing claims lack validated double-blind human clinical trials.",
      "Bio-individuality: Science cannot guarantee identical emotional or physiological responses across different individuals.",
    ],
  },
];

const EVIDENCE_HIERARCHY = [
  {
    step: "01",
    name: "Traditional Botanical Use",
    scope: "Centuries of empirical human use across cultures (Ayurveda, traditional European herbology, folk practices).",
    status: "Cultural Heritage",
    clarification:
      "Invaluable for historical context and traditional application, but not equivalent to validated modern clinical efficacy.",
  },
  {
    step: "02",
    name: "In-Vitro / Laboratory Assays",
    scope: "Controlled experiments conducted on isolated cell cultures and test tubes.",
    status: "Biochemical Screening",
    clarification:
      "Helpful for identifying isolated active constituents, but petri-dish outcomes cannot be directly extrapolated to living human biology.",
  },
  {
    step: "03",
    name: "Preclinical & Animal Studies",
    scope: "Biological testing in animal models to observe potential physiological pathways.",
    status: "Mechanistic Hypotheses",
    clarification:
      "Generates scientific hypotheses and safety clues, but never constitutes definitive proof of human clinical outcomes.",
  },
  {
    step: "04",
    name: "Observational & Sensory Studies",
    scope: "Human trials monitoring autonomic markers (heart rate, breathing, skin response) during aromatic exposure.",
    status: "Supportive Correlations",
    clarification:
      "Demonstrates positive correlations with sensory relaxation and stress-downregulation, without proving curative medical causality.",
  },
  {
    step: "05",
    name: "Clinical Trials & Systematic Reviews",
    scope: "Gold standard randomized controlled trials (RCTs) and peer-reviewed systematic meta-analyses.",
    status: "Clinical Rigour",
    clarification:
      "Findings are evaluated strictly within their specific dosage, application method, duration, and patient population scope.",
  },
  {
    step: "06",
    name: "Established Scientific Consensus",
    scope: "Broad consensus across independent replications, regulatory agencies, and scientific bodies.",
    status: "Validated Consensus",
    clarification:
      "Formally recognized safety standards and botanical classifications universally accepted in pharmacognosy.",
  },
];

export default function ResearchAndEvidencePage() {
  return (
    <main className="research-evidence-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero evidence-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">RESEARCH &amp; EVIDENCE PHILOSOPHY</span>
            <h1>
              Our evidence philosophy: <em>rigour, nuance and transparency.</em>
            </h1>
            <p className="hero-supporting-title">
              If the brand uses &apos;science&apos; or &apos;evidence-informed&apos; prominently, we believe we have an ethical obligation to explain what that actually means.
            </p>
            <p className="hero-description">
              At Harmony of Cells, we never convert a single isolated study into a blanket product claim. We believe in helping you understand what established science confirms, what preliminary research suggests, and where evidence remains limited or inconclusive.
            </p>

            <div className="hero-actions">
              <a href="#three-tiers" className="btn btn-primary">
                Explore the 3 Evidence Tiers <span>↓</span>
              </a>
              <a href="#evidence-hierarchy" className="btn btn-outline hero-secondary-btn">
                View Evidence Hierarchy <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Transparent science • Non-medical boundaries • Never convert a single study into a blanket claim.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Botanical research, evidence analysis and laboratory standards"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">EVIDENCE STANDARD</span>
                <strong>Nuance Over Hype.</strong>
                <small>Established • Emerging • Inconclusive</small>
              </div>
            </div>
            <div className="floating-badge">
              <span>✦</span>
              <small>
                EVIDENCE<br />
                INFORMED
              </small>
            </div>
          </div>
        </div>

        <div className="container announcement-container">
          <div className="announcement">
            <span className="announcement-symbol">✦</span>
            <span>
              What We Know • What Research Suggests • What We Don&apos;t Know • Nuanced Scientific Hierarchy
            </span>
          </div>
        </div>
      </section>

      {/* 2. CORE STATEMENT BANNER */}
      <section className="section bg-cream-soft py-12">
        <div className="container">
          <div className="quote-banner evidence-quote-banner max-w-4xl mx-auto">
            <p className="quote-text">
              &ldquo;Never convert a single study into a blanket product claim. Clearly distinguish <strong>traditional use, laboratory findings, animal studies, observational research, clinical research and established conclusions.</strong>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE THREE EVIDENCE TIERS */}
      <section className="section evidence-tiers-section" id="three-tiers">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">TRANSPARENT SCIENTIFIC TAXONOMY</span>
            <h2>What we know. What research suggests. What we don&apos;t know.</h2>
            <p className="section-lead">
              We separate verified facts from preliminary signals and marketing exaggerations. Here is how we evaluate botanical wellness information.
            </p>
          </div>

          <div className="evidence-tiers-grid">
            {EVIDENCE_TIERS.map((tier) => (
              <article key={tier.tier} className="evidence-tier-card">
                <div className="tier-header-bar">
                  <span className="tier-number">{tier.tier}</span>
                  <span className="tier-badge">{tier.badge}</span>
                </div>

                <h3>{tier.label}</h3>
                <h4 className="tier-tagline">{tier.tagline}</h4>
                <p className="tier-description">{tier.description}</p>

                <div className="tier-bullet-box">
                  <span className="tier-bullet-label">Key Pillars &amp; Standards:</span>
                  <ul className="tier-points-list">
                    {tier.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="point-bullet" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE EVIDENCE HIERARCHY */}
      <section className="section evidence-hierarchy-section bg-cream-soft" id="evidence-hierarchy">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">METHODOLOGICAL RIGOUR</span>
            <h2>Distinguishing levels of evidence.</h2>
            <p className="section-lead">
              Not all research carries the same clinical weight. Understanding the distinction between test tubes, animal models, and human trials is vital to making informed wellness choices.
            </p>
          </div>

          <div className="evidence-hierarchy-grid">
            {EVIDENCE_HIERARCHY.map((level) => (
              <div key={level.step} className="hierarchy-step-card">
                <div className="step-card-header">
                  <span className="step-num">{level.step}</span>
                  <span className="step-status">{level.status}</span>
                </div>
                <h3>{level.name}</h3>
                <p className="step-scope">{level.scope}</p>
                <div className="step-clarification-box">
                  <span className="clarification-label">Interpretation Boundary:</span>
                  <p>{level.clarification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLAIMS GOVERNANCE TRAFFIC-LIGHT RULE */}
      <section className="section claims-governance-section" id="governance">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">CLAIMS COMPLIANCE</span>
            <h2>Our claims governance: The traffic-light standard.</h2>
            <p className="section-lead">
              We apply strict internal regulatory guardrails across all educational courses, website content, and product guidance.
            </p>
          </div>

          <div className="traffic-light-grid">
            {/* GREEN TIER */}
            <div className="traffic-card traffic-green">
              <div className="traffic-indicator indicator-green" />
              <h3>Green Standard — Approved Language</h3>
              <p className="traffic-sub">Sensory, aromatic, and mindful lifestyle rituals.</p>
              <ul className="traffic-list">
                <li>Aroma, fragrance, and sensory experience</li>
                <li>Relaxation ritual &amp; evening wind-down routine</li>
                <li>Refreshing, grounding, and uplifting atmospheric cues</li>
                <li>Cooling or warming topical sensation with proper dilution</li>
                <li>Mindful self-care and everyday lifestyle habits</li>
                <li>Accurately described traditional botanical history</li>
              </ul>
            </div>

            {/* AMBER TIER */}
            <div className="traffic-card traffic-amber">
              <div className="traffic-indicator indicator-amber" />
              <h3>Amber Standard — Substantiated Only</h3>
              <p className="traffic-sub">Requires strict contextual substantiation before use.</p>
              <ul className="traffic-list">
                <li>Supports subjective evening relaxation</li>
                <li>Sensory anchoring for mindful pauses &amp; meditation</li>
                <li>Atmospheric focus during study or work sessions</li>
                <li>Post-meal digestive mindful pause rituals</li>
                <li>Topical comfort post-activity with safe carrier oils</li>
                <li>Never phrased as guaranteed or clinically proven</li>
              </ul>
            </div>

            {/* RED TIER */}
            <div className="traffic-card traffic-red">
              <div className="traffic-indicator indicator-red" />
              <h3>Red Standard — Strictly Prohibited</h3>
              <p className="traffic-sub">Zero tolerance for medical or unproven disease claims.</p>
              <ul className="traffic-list">
                <li>Cures, treats, heals, or prevents disease</li>
                <li>Immune defence, immune boosting, or antimicrobial claims</li>
                <li>Hormone balancing or cellular repair claims</li>
                <li>Reverses ageing or metabolic disease outcomes</li>
                <li>Treats insomnia, anxiety, depression, or arthritis</li>
                <li>Replaces qualified medical care, diagnosis, or medication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ETHICAL SCOPE NOTICE */}
      <section className="section evidence-disclaimer-section">
        <div className="container">
          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">ETHICAL SCOPE &amp; RESPONSIBILITY</span>
            </div>
            <div className="disclaimer-content">
              <strong>Non-Medical Scope Commitment</strong>
              <p>
                Harmony of Cells provides wellness education and nature-based guidance intended to support informed self-care and sensory rituals. Our content, courses, and consultations are educational in nature and do not diagnose, treat, cure, or prevent any medical condition. Essential oils must always be used responsibly and never as a substitute for qualified medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL ACTION SECTION */}
      <section className="section consultation-section evidence-final-cta-section" id="cta">
        <div className="container">
          <div className="consultation-wrapper">
            <div className="consultation-content">
              <span className="eyebrow">LEARN RESPONSIBLY</span>
              <h2>Have questions about research or specific botanicals?</h2>
              <p className="section-lead">
                Explore our structured 3-tier education programs or book an educational conversation to evaluate practical, evidence-informed routines personal to you.
              </p>

              <div className="consultation-points">
                <span>✓ Grounded in evidence-informed botanical literacy</span>
                <span>✓ Clear distinction between traditional use and clinical data</span>
                <span>✓ Zero pseudoscientific health claims or cure promises</span>
                <span>✓ Personalized guidance from Founder Richa Ramola</span>
              </div>

              <div className="consultation-cta-group">
                <Link href="/education" className="btn btn-primary cta-btn-large">
                  Explore Education Curriculum <span>→</span>
                </Link>
                <GoogleFormLink type="consultation" className="btn btn-outline cta-btn-secondary">
                  Book an Educational Consultation <span>→</span>
                </GoogleFormLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
