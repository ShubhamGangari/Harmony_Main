import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Personal Wellness Consultation | Harmony of Cells",
  description:
    "Explore essential oils, daily rhythms, and nature-based wellness practices through personalized, one-to-one educational guidance with Richa Ramola.",
};

const TOPICS_EXPLORED = [
  {
    icon: "✦",
    title: "Current Wellness Routines",
    description:
      "Reviewing your daily schedule, energy patterns, work demands, and existing habits to understand your lifestyle cadence.",
  },
  {
    icon: "🌿",
    title: "Essential Oil Familiarity",
    description:
      "Assessing your experience with botanicals, clarifying questions, and addressing past sensitivities or common misconceptions.",
  },
  {
    icon: "◌",
    title: "Personal Preferences & Environment",
    description:
      "Exploring your aromatic preferences, home or office environment, and sensory factors that support personal calm.",
  },
  {
    icon: "✦",
    title: "Appropriate Aromatic Practices",
    description:
      "Identifying botanical aromas suited for daytime focus, mindful breathing, evening wind-down, and calming spaces.",
  },
  {
    icon: "🌿",
    title: "Responsible Methods of Use",
    description:
      "Understanding safe dilution principles, carrier oils, skin patch testing, diffusion guidelines, and precautions.",
  },
  {
    icon: "◌",
    title: "Simple Everyday Routines",
    description:
      "Designing realistic, enjoyable micro-rituals that fit into your day without requiring hours of extra time.",
  },
];

const WHO_THIS_IS_FOR = [
  {
    tag: "EVERYDAY INDIVIDUALS",
    title: "Individuals Seeking Better Daily Rhythms",
    description:
      "If you feel overwhelmed by fast-paced schedules and want practical, grounded habits to support natural rest, steady vitality, and personal calm.",
  },
  {
    tag: "BOTANICAL BEGINNERS",
    title: "New to Essential Oils",
    description:
      "If you want clear, unhyped guidance on what essential oils are, how to use them safely, and how to avoid common dilution and application mistakes.",
  },
  {
    tag: "BUSY PROFESSIONALS",
    title: "High-Demand Working Adults",
    description:
      "If work stress follows you into the evening and you need structured, repeatable transition rituals to decompress and sleep deeply.",
  },
  {
    tag: "PARENTS & CAREGIVERS",
    title: "Nurturing Caregivers",
    description:
      "If you spend your days caring for others and need accessible 5-minute self-care pauses to replenish your own emotional and physical stamina.",
  },
];

const WHAT_IT_INCLUDES = [
  "A dedicated 1-on-1 educational session with Richa Ramola",
  "A thorough review of your lifestyle, stressors, and daily rhythms",
  "Tailored recommendations for appropriate botanical aromas and rituals",
  "Clear dilution guidelines and responsible application principles",
  "Practical steps to create a supportive morning and evening routine",
  "Opportunity to ask specific questions about essential oils and safety",
];

const WHAT_WE_DO_NOT_DO = [
  "We do NOT diagnose medical conditions or nervous-system disorders.",
  "We do NOT prescribe medications, clinical treatments, or cures.",
  "We do NOT advise or ask you to replace qualified medical care with essential oils.",
  "We do NOT promise instant cures, rapid hormonal resets, or disease prevention.",
];

export default function ConsultationPage() {
  return (
    <main className="consultation-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero consultation-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">1-ON-1 EDUCATIONAL GUIDANCE</span>
            <h1>
              Personal Wellness <em>Consultation.</em>
            </h1>
            <p className="hero-supporting-title">
              Sometimes you don&apos;t need another list of wellness tips. You need help understanding what may be appropriate for you.
            </p>
            <p className="hero-description">
              A Harmony of Cells consultation is an educational conversation designed to help you
              explore essential oils, sensory practices, and nature-based wellness in the context
              of your lifestyle, preferences, and personal goals.
            </p>

            <div className="hero-actions">
              <GoogleFormLink
                type="consultation"
                item="Personal Wellness Consultation"
                className="btn btn-primary"
              >
                Request a Consultation <span>→</span>
              </GoogleFormLink>
              <a href="#details" className="btn btn-outline hero-secondary-btn">
                What We Explore <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Learn. Understand. Apply. • Personal educational guidance with Richa Ramola.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Personal wellness consultation setting"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">1-ON-1 SESSIONS</span>
                <strong>Personalized Guidance</strong>
                <small>Lifestyle • Aromatherapy • Daily Rhythms</small>
              </div>
            </div>
            <div className="floating-badge">
              <span>✦</span>
              <small>
                1-ON-1<br />GUIDANCE
              </small>
            </div>
          </div>
        </div>

        <div className="container announcement-container">
          <div className="announcement">
            <span className="announcement-symbol">✦</span>
            <span>
              Personalized Lifestyle Education • Safe Botanical Guidance • Tailored Daily Rhythms
            </span>
          </div>
        </div>
      </section>

      {/* 2. WHO CONSULTATIONS ARE FOR */}
      <section className="section consultation-audiences-section" id="who-it-is-for">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">PERSONALIZED FOR YOU</span>
            <h2>
              Who consultations are <em>for.</em>
            </h2>
            <p className="section-lead">
              Our educational consultations meet you wherever you are on your wellness journey.
            </p>
          </div>

          <div className="audiences-trio-grid">
            {WHO_THIS_IS_FOR.map((item, idx) => (
              <div key={idx} className="audience-box-card">
                <span className="audience-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOPICS WE MAY EXPLORE */}
      <section className="section consultation-topics-section" id="details">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">WHAT WE EXPLORE</span>
            <h2>
              Topics that may be <em>discussed.</em>
            </h2>
            <p className="section-lead">
              Every consultation is tailored to your unique lifestyle, preferences, and personal questions.
            </p>
          </div>

          <div className="topics-grid">
            {TOPICS_EXPLORED.map((topic, idx) => (
              <div key={idx} className="topic-card">
                <span className="topic-icon" aria-hidden="true">
                  {topic.icon}
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT THE CONSULTATION INCLUDES vs DOES NOT PROVIDE */}
      <section className="section consultation-scope-section" id="scope">
        <div className="container">
          <div className="scope-comparison-grid">
            {/* What it includes */}
            <div className="scope-card scope-includes-card">
              <div className="scope-header">
                <span className="scope-pill include-pill">✓ WHAT TO EXPECT</span>
                <h3>What the consultation includes</h3>
              </div>
              <ul className="scope-list">
                {WHAT_IT_INCLUDES.map((item, idx) => (
                  <li key={idx}>
                    <span className="scope-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What it does NOT provide */}
            <div className="scope-card scope-excludes-card">
              <div className="scope-header">
                <span className="scope-pill exclude-pill">✕ IMPORTANT BOUNDARIES</span>
                <h3>What we do not provide</h3>
              </div>
              <ul className="scope-list">
                {WHAT_WE_DO_NOT_DO.map((item, idx) => (
                  <li key={idx}>
                    <span className="scope-cross">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Educational Governance Callout */}
          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">HEALTHCARE SCOPE NOTICE</span>
            </div>
            <div className="disclaimer-content">
              <strong>Harmony of Cells is an Educational Platform</strong>
              <p>
                Harmony of Cells does not diagnose medical conditions, prescribe drugs, or treat
                illnesses. Our consultations are educational conversations designed to support
                informed self-care and daily rhythms. If you are pregnant, nursing, taking
                medication, or managing a health condition, please consult an appropriately
                qualified medical practitioner before using essential oils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT RICHA RAMOLA */}
      <section className="section consultation-founder-section" id="founder">
        <div className="container">
          <div className="consultation-founder-card">
            <div className="founder-card-content">
              <span className="eyebrow">YOUR WELLNESS EDUCATOR</span>
              <h2>Guidance from Richa Ramola</h2>
              <p className="founder-lead">
                Combining nearly three decades of corporate leadership and people development with
                specialized education in essential oils and lifestyle wellness.
              </p>
              <p>
                Richa brings a grounded, people-centred perspective to wellness consultations. Having
                navigated the pressures of executive leadership herself, she understands how demanding
                modern life can be. Her focus is on cutting through wellness noise and helping you
                build simple, enjoyable routines that fit seamlessly into your schedule.
              </p>

              <blockquote className="founder-mini-quote">
                &ldquo;People make better wellness choices when they are given better information.
                Harmony of Cells was created to make that information practical, responsible, and
                accessible.&rdquo;
              </blockquote>

              <div className="founder-actions">
                <GoogleFormLink
                  type="consultation"
                  item="Personal Consultation with Richa"
                  className="btn btn-primary"
                >
                  Request Your Session with Richa <span>→</span>
                </GoogleFormLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOOKING CTA SECTION */}
      <section className="section service-cta-section" id="booking">
        <div className="container">
          <div className="service-cta-card">
            <div className="service-cta-content">
              <span className="eyebrow">TAKE THE NEXT STEP</span>
              <h2>
                Ready to explore <em>supportive daily rhythms?</em>
              </h2>
              <p>
                Submit your consultation request with your preferred timing. Richa will review
                your details and reach out to confirm your session.
              </p>

              <div className="service-cta-buttons">
                <GoogleFormLink
                  type="consultation"
                  item="Personal Wellness Consultation"
                  className="btn btn-primary"
                >
                  Submit Consultation Request <span>→</span>
                </GoogleFormLink>
                <Link href="/approach" className="btn btn-outline">
                  Explore Our Method <span>→</span>
                </Link>
                <Link href="/education" className="btn btn-outline">
                  View Education Pathways <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
