import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Wellness Pillars — Nervous System & Lifestyle Education | Harmony of Cells",
  description:
    "Explore educational wellness pillars: Rest & Sleep, Stress & Resilience, Women's Wellness, Healthy Ageing, Everyday Wellness, and Sensory Wellness.",
};

const WELLNESS_PILLARS = [
  {
    id: "rest-and-sleep",
    step: "01",
    tagline: "Recovery & Nighttime Rest",
    title: "Rest & Sleep",
    description:
      "Creating supportive conditions for evening decompression, calm nervous-system states, and deep nighttime recovery.",
    details: [
      "Understanding the circadian transition from daytime alertness to nighttime restoration",
      "Designing a calming 30-minute evening wind-down ritual",
      "Aromatic and sensory space preparation to signal psychological closure to the day",
      "Digital detachment practices that reduce evening sensory stimulation",
    ],
    pathway: {
      text: "Explore Individual Sleep Routines",
      href: "/individuals",
    },
  },
  {
    id: "stress-and-resilience",
    step: "02",
    tagline: "Daytime Calm & Adaptability",
    title: "Stress & Resilience",
    description:
      "Accessible somatic pauses, stress awareness, and practical daily habits to prevent tension from compounding over demanding schedules.",
    details: [
      "Recognizing early sensory and physiological indicators of tension",
      "2-minute workday reset protocols and conscious breathing micro-breaks",
      "Establishing healthy psychological boundaries during high-demand cycles",
      "Building emotional adaptability and steady energy without burnout",
    ],
    pathway: {
      text: "Explore Resilience Education",
      href: "/education",
    },
  },
  {
    id: "womens-wellness",
    step: "03",
    tagline: "Lifecycle Rhythms & Care",
    title: "Women's Wellness",
    description:
      "Supportive, evidence-informed lifestyle routines and restorative self-care practices tailored to changing life stages and demands.",
    details: [
      "Honoring changing biological rhythms with compassionate self-care routines",
      "Nourishing sensory grounding practices for busy professional women and caregivers",
      "Evening wind-down rituals to replenish mental and physical stamina",
      "Grounded, non-medical lifestyle practices that foster daily balance and comfort",
    ],
    pathway: {
      text: "Learn About Women's Self-Care",
      href: "/individuals",
    },
  },
  {
    id: "healthy-ageing",
    step: "04",
    tagline: "Longevity & Vitality",
    title: "Healthy Ageing & Lifestyle",
    description:
      "Preserving everyday vitality, physical comfort, and mental clarity across the lifespan through nature-based habits and restorative rhythms.",
    details: [
      "Sustainable everyday movement habits and joint-supportive self-care",
      "Nature immersion and natural daylight exposure for sensory vitality",
      "Prioritizing intentional recovery intervals as an investment in longevity",
      "Cultivating cognitive curiosity and mindful daily engagement",
    ],
    pathway: {
      text: "Explore Consultation Guidance",
      href: "/consultation",
    },
  },
  {
    id: "everyday-wellness",
    step: "05",
    tagline: "Circadian Cadence & Balance",
    title: "Everyday Wellness",
    description:
      "Structuring daily life with intentional cadence: morning light, mindful work-home transitions, hydration, and regular restorative pauses.",
    details: [
      "Circadian light alignment to support natural waking and sleep cycles",
      "Creating intentional transition rituals between work commitments and personal life",
      "Small, repeatable micro-habits that fit seamlessly into busy modern schedules",
      "Practical hydration and nourishment rhythms that sustain daytime focus",
    ],
    pathway: {
      text: "View Everyday Routines",
      href: "/individuals",
    },
  },
  {
    id: "sensory-wellness",
    step: "06",
    tagline: "Aroma, Touch & Environment",
    title: "Sensory Wellness",
    description:
      "Using the power of olfaction, gentle botanical touch, and ambient space design to gently anchor the nervous system in calmness and presence.",
    details: [
      "Understanding olfactory pathways and how botanical aromas evoke sensory calm",
      "Responsible essential-oil dilution principles and safe application methods",
      "Creating sensory-friendly home and work environments free from synthetic overload",
      "Combining botanical essences with mindful breathing and contemplative moments",
    ],
    pathway: {
      text: "Explore Pure Botanicals",
      href: "/products",
    },
  },
];

export default function WellnessPage() {
  return (
    <main className="wellness-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">INFORMED LIFESTYLE EDUCATION</span>
            <h1>
              Six Pillars of <em>Everyday Wellness.</em>
            </h1>
            <p className="hero-supporting-title">
              Evidence-informed education, nature-based practices, and practical routines for modern life.
            </p>
            <p className="hero-description">
              True wellbeing is not about extreme regimens or unsupported promises. It is built
              on clear understanding, supportive daily rhythms, sensory nourishment, and
              repeatable self-care habits that you can maintain with ease and enjoyment.
            </p>

            <div className="hero-actions">
              <a href="#pillars" className="btn btn-primary">
                Explore the Pillars <span>↓</span>
              </a>
              <Link href="/consultation" className="btn btn-outline hero-secondary-btn">
                Book a Consultation <span>→</span>
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Learn. Understand. Apply. • Evidence-informed wellness education.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Harmony of Cells educational wellness setting"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">WELLNESS PILLARS</span>
                <strong>Rest • Resilience • Rhythm</strong>
                <small>Women&apos;s • Ageing • Sensory</small>
              </div>
            </div>
            <div className="floating-badge">
              <span>✦</span>
              <small>
                NATURE &<br />KNOWLEDGE
              </small>
            </div>
          </div>
        </div>

        <div className="container announcement-container">
          <div className="announcement">
            <span className="announcement-symbol">✦</span>
            <span>
              Rest & Sleep • Stress & Resilience • Women&apos;s Wellness • Healthy Ageing • Everyday & Sensory Wellness
            </span>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW INTRO */}
      <section className="section service-intro-section" id="intro">
        <div className="container">
          <div className="service-intro-box">
            <span className="eyebrow">EDUCATION FIRST</span>
            <h2>Understanding precedes meaningful change.</h2>
            <p className="service-intro-lead">
              There is no shortage of wellness advice today. But more information doesn&apos;t always
              translate into better wellbeing.
            </p>

            <div className="service-intro-content">
              <p>
                At Harmony of Cells, our mission is to cut through commercial hype, exaggerated
                therapeutic promises, and confusing jargon. We provide structured education on the
                fundamental components of lifestyle wellness: how our sleep architecture functions,
                how stress compounds throughout a workday, how our sensory environment shapes our
                mental state, and how botanical practices can be safely applied.
              </p>
              <p>
                We do not diagnose or treat medical conditions. Instead, we equip individuals,
                wellness practitioners, and organisations with practical knowledge to make informed,
                responsible, and personal self-care choices.
              </p>
            </div>

            <blockquote className="service-highlight-quote">
              &ldquo;We don&apos;t believe in simply telling you what to use. We believe in helping you
              understand why, when, and how — and when not to use it.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. SIX PILLARS DETAILED SECTION */}
      <section className="section wellness-pillars-section" id="pillars">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">CORE EDUCATIONAL DOMAINS</span>
            <h2>
              The Six Pillars of <em>Lifestyle Wellness.</em>
            </h2>
            <p className="section-lead">
              Grounded, practical frameworks designed around real-world demands and human biology.
            </p>
          </div>

          <div className="wellness-detailed-grid">
            {WELLNESS_PILLARS.map((pillar) => (
              <article key={pillar.id} id={pillar.id} className="wellness-pillar-card">
                <div className="wellness-pillar-header">
                  <span className="pillar-step-number">{pillar.step}</span>
                  <div className="pillar-title-block">
                    <span className="pillar-tagline">{pillar.tagline}</span>
                    <h3>{pillar.title}</h3>
                  </div>
                </div>

                <p className="pillar-desc">{pillar.description}</p>

                <div className="pillar-details-box">
                  <span className="pillar-details-label">Key Educational Focus:</span>
                  <ul className="pillar-details-list">
                    {pillar.details.map((point, idx) => (
                      <li key={idx}>
                        <span className="bullet-icon">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pillar-footer">
                  <Link href={pillar.pathway.href} className="pillar-pathway-link">
                    {pillar.pathway.text} <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Educational Governance & Non-Medical Notice */}
          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">COMPLIANCE & GOVERNANCE</span>
            </div>
            <div className="disclaimer-content">
              <strong>Non-Medical Lifestyle Notice</strong>
              <p>
                The wellness pillars described above represent educational lifestyle principles and
                sensory self-care practices. Harmony of Cells does not provide medical diagnoses,
                clinical treatments, or cures for insomnia, anxiety, hormonal disorders, or any
                medical condition. Our educational content is intended to support informed
                lifestyle choices and does not replace professional healthcare advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE CONVERSION PATHWAYS */}
      <section className="section wellness-pathways-section" id="pathways">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">YOUR NEXT STEPS</span>
            <h2>
              Three ways to explore <em>Harmony of Cells.</em>
            </h2>
            <p className="section-lead">
              Whether you want to learn independently, build practical personal routines, or discuss your lifestyle with an educator.
            </p>
          </div>

          <div className="pathways-trio-grid">
            {/* Pathway 1: For Individuals */}
            <div className="pathway-trio-card">
              <span className="trio-badge">PERSONAL WELLNESS</span>
              <h3>For Individuals & Families</h3>
              <p>
                Discover personalized routines, daily circadian habits, sleep wind-down practices,
                and restorative self-care for your stage of life.
              </p>
              <Link href="/individuals" className="btn btn-outline trio-btn">
                Explore Individual Pathway <span>→</span>
              </Link>
            </div>

            {/* Pathway 2: Education Programs */}
            <div className="pathway-trio-card featured-trio-card">
              <span className="trio-badge">STRUCTURED LEARNING</span>
              <h3>Education & Workshops</h3>
              <p>
                Join our tiered educational programs: from essential-oil foundations to everyday
                wellness applications and professional practitioner modules.
              </p>
              <Link href="/education" className="btn btn-primary trio-btn">
                View Education Pathways <span>→</span>
              </Link>
            </div>

            {/* Pathway 3: 1-on-1 Consultation */}
            <div className="pathway-trio-card">
              <span className="trio-badge">PERSONAL GUIDANCE</span>
              <h3>Personal Consultation</h3>
              <p>
                Connect one-on-one with Richa Ramola for an educational session tailored to your
                schedule, sensory preferences, and lifestyle goals.
              </p>
              <Link href="/consultation" className="btn btn-outline trio-btn">
                Book a Consultation <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="section service-cta-section" id="cta">
        <div className="container">
          <div className="service-cta-card">
            <div className="service-cta-content">
              <span className="eyebrow">START WITH UNDERSTANDING</span>
              <h2>
                Begin your journey toward <em>calmer daily rhythms.</em>
              </h2>
              <p>
                Explore our method, book a one-to-one educational consultation, or browse our
                botanical collection and educational resources.
              </p>

              <div className="service-cta-buttons">
                <Link href="/consultation" className="btn btn-primary">
                  Personal Consultation <span>→</span>
                </Link>
                <Link href="/approach" className="btn btn-outline">
                  The Harmony of Cells Method <span>→</span>
                </Link>
                <Link href="/products" className="btn btn-outline">
                  Explore Essential Oils <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
