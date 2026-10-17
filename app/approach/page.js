import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";
import { DELIVERY_CHANNELS } from "../../lib/navigation";

export const metadata = {
  title: "The Approach — Nervous System & Lifestyle Wellness | Harmony of Cells",
  description:
    "Explore the Harmony of Cells 5R method (Rest, Regulate, Restore, Resilience, Ritual) and our Six Pillars of Everyday Wellness for calmer, healthier living.",
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

const FIVE_R_CONCEPTS = [
  {
    step: "01",
    name: "REST",
    tagline: "Recovery & Downtime",
    description:
      "Creating supportive conditions for deep rest and natural recovery.",
    deepDive:
      "Rest is not merely the absence of work; it is an active state where the mind and body replenish. We teach practical nighttime wind-down routines, sensory room preparation, and evening boundaries that support the body's natural transition into a restful, restorative state before sleep.",
    practices: [
      "Circadian-aligned evening light transitions",
      "Calming botanical aromatic rituals before sleep",
      "Digital detachment habits to quiet cognitive hyper-arousal",
    ],
  },
  {
    step: "02",
    name: "REGULATE",
    tagline: "Pause & Awareness",
    description:
      "Building intentional moments of pause, awareness and relaxation throughout the day.",
    deepDive:
      "Modern schedules often trigger continuous low-grade urgency. Regulate introduces accessible somatic check-ins, mindful breathing pauses, and brief sensory transitions that interrupt the buildup of daily tension before it leads to chronic overwhelm.",
    practices: [
      "2-minute conscious breathing pauses between meetings",
      "Somatic body awareness check-ins throughout the workday",
      "Sensory grounding cues to interrupt mental rumination",
    ],
  },
  {
    step: "03",
    name: "RESTORE",
    tagline: "Daily Rhythms",
    description:
      "Supporting healthy daily rhythms through lifestyle and recovery practices.",
    deepDive:
      "Our vitality is anchored in the cadence of everyday life. Restore focuses on aligning lifestyle habits — daylight exposure, steady hydration, nourishing food, and gentle movement — with our natural biological rhythms to rebuild sustainable daytime energy.",
    practices: [
      "Early morning natural light exposure for circadian anchoring",
      "Rhythmic transitions between intense focus and mental rest",
      "Gentle physical movement and intentional hydration breaks",
    ],
  },
  {
    step: "04",
    name: "RESILIENCE",
    tagline: "Everyday Demands",
    description:
      "Developing practical habits for navigating the continuous demands of modern life.",
    deepDive:
      "Resilience is not about enduring unending pressure without feeling it; it is the capacity to adapt flexibly to stressors and recover quickly. We provide grounded, realistic frameworks to help individuals and teams preserve emotional calm and cognitive clarity under pressure.",
    practices: [
      "Early recognition of personal stress thresholds",
      "Boundaries that protect personal and family renewal time",
      "Adaptive self-care tools that fit high-pressure work cycles",
    ],
  },
  {
    step: "05",
    name: "RITUAL",
    tagline: "Repeatable Habits",
    description:
      "Turning wellness knowledge into small, repeatable everyday practices.",
    deepDive:
      "Information alone rarely changes how we feel. Ritual bridges the gap between learning and living by transforming wellness principles into simple, pleasurable micro-habits that become second nature in your home, workplace, or personal routine.",
    practices: [
      "Creating sensory cues (aroma, tea, breath) that signal transition",
      "Repeatable morning intentions and evening wind-down steps",
      "Sustainable habits that require minutes, not hours, of your day",
    ],
  },
];

const METHOD_FOUNDATIONS = [
  {
    icon: "🌿",
    title: "Lifestyle & Daily Rhythms",
    description:
      "True wellbeing is rooted in the architecture of your day. We look at the interplay between circadian biology, movement, rest intervals, and work boundaries to build sustainable daily cadence.",
  },
  {
    icon: "✦",
    title: "Sensory Wellness",
    description:
      "Our senses — especially olfaction and touch — have a direct, profound connection to emotional memory and sensory relaxation. Thoughtfully chosen botanicals provide immediate, gentle anchors for calm.",
  },
  {
    icon: "🌱",
    title: "Nature-Based Practices",
    description:
      "Reconnecting with pure botanicals, natural daylight, fresh air, and seasonal rhythms restores balance against artificial environments, digital screens, and indoor confinement.",
  },
  {
    icon: "📖",
    title: "Informed Self-Care",
    description:
      "We believe in education before recommendation. Understanding why, when, and how to use botanical essences — and when not to use them — empowers safe, responsible, and personal choices.",
  },
];

export default function ApproachPage() {
  return (
    <main className="approach-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">THE HARMONY OF CELLS METHOD</span>
            <h1>
              Nervous System Wellness for <em>Everyday Life.</em>
            </h1>
            <p className="hero-supporting-title">
              Supporting wellbeing through lifestyle, sensory practices and informed self-care.
            </p>
            <p className="hero-description">
              Modern life places continuous demands on the body and mind. Harmony of Cells
              focuses on the relationship between nervous-system wellbeing, lifestyle, and
              environment — and on the small, practical practices that can make everyday life
              calmer, healthier, and more supportive.
            </p>

            <div className="hero-actions">
              <a href="#method" className="btn btn-primary">
                Explore the 5R Method <span>↓</span>
              </a>
              <GoogleFormLink
                type="consultation"
                item="Approach Inquiry"
                className="btn btn-outline hero-secondary-btn"
              >
                Book a Consultation <span>→</span>
              </GoogleFormLink>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Learn. Understand. Apply. • Educational principles for daily vitality.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Harmony of Cells nervous system wellness environment"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">THE 5R PRINCIPLE</span>
                <strong>Rest • Regulate • Restore</strong>
                <small>Resilience • Ritual</small>
              </div>
            </div>
            <div className="floating-badge">
              <span>✦</span>
              <small>
                EDUCATION<br />FIRST
              </small>
            </div>
          </div>
        </div>

        <div className="container announcement-container">
          <div className="announcement">
            <span className="announcement-symbol">✦</span>
            <span>
              Rest • Regulate • Restore • Resilience • Ritual — Grounded practices for modern life
            </span>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY INTRO */}
      <section className="section service-intro-section" id="philosophy">
        <div className="container">
          <div className="service-intro-box">
            <span className="eyebrow">OUR PHILOSOPHY</span>
            <h2>Wellness is shaped by the rhythms of everyday life.</h2>
            <p className="service-intro-lead">
              Wellness is not one product, one practice or one prescription. It is shaped by
              how we navigate the everyday realities of modern life.
            </p>

            <div className="service-intro-content">
              <p>
                In a culture that often celebrates non-stop hustle, our bodies and minds are
                frequently kept in states of persistent stimulation and mental urgency. Over time,
                this chronic pressure erodes our natural capacity for deep sleep, emotional
                steadiness, and physical vitality.
              </p>
              <p>
                At Harmony of Cells, we do not promise overnight miracle cures or complex regimens.
                Instead, we focus on <strong>educational self-care</strong> — helping you
                understand how daily sensory inputs, work rhythms, and recovery habits shape
                how you feel each day.
              </p>
            </div>

            <blockquote className="service-highlight-quote">
              &ldquo;When you understand how your nervous system responds to the demands of your
              environment, you can make self-care choices that are informed, sustainable, and
              truly supportive.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. THE 5R METHOD SECTION */}
      <section className="section approach-method-section" id="method">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">THE FIVE CORE CONCEPTS</span>
            <h2>
              The Harmony of Cells <em>Method.</em>
            </h2>
            <p className="section-lead">
              Five interconnected principles designed to support calmer, healthier daily rhythms
              through grounded education and repeatable habits.
            </p>
          </div>

          <div className="approach-detailed-grid">
            {FIVE_R_CONCEPTS.map((concept) => (
              <article key={concept.step} className="approach-detailed-card">
                <div className="approach-detailed-header">
                  <div className="approach-step-badge">{concept.step}</div>
                  <div className="approach-meta">
                    <span className="approach-tagline">{concept.tagline}</span>
                    <h3>{concept.name}</h3>
                  </div>
                </div>

                <p className="approach-core-desc">{concept.description}</p>
                <p className="approach-deep-dive">{concept.deepDive}</p>

                <div className="approach-practices-box">
                  <span className="practices-label">Everyday Applications:</span>
                  <ul className="practices-list">
                    {concept.practices.map((practice, idx) => (
                      <li key={idx}>
                        <span className="bullet-icon">✦</span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Educational Disclaimer Banner */}
          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">EDUCATIONAL SCOPE</span>
            </div>
            <div className="disclaimer-content">
              <strong>Non-Medical Lifestyle Education Notice</strong>
              <p>
                These five concepts are educational principles and lifestyle practices designed
                to support healthy daily rhythms and informed self-care. They are not clinical
                therapies, medical treatments, or diagnostic procedures, and they do not claim to
                diagnose, treat, or medically regulate nervous-system disorders. Always consult
                a qualified healthcare professional for medical advice and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDATIONAL PILLARS (Lifestyle, Sensory, Nature, Informed Self-Care) */}
      <section className="section approach-foundations-section" id="foundations">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">THE INTERCONNECTED WHOLE</span>
            <h2>
              Lifestyle, sensory wellness & <em>informed self-care.</em>
            </h2>
            <p className="section-lead">
              How our nature-based practices work together to support everyday wellbeing.
            </p>
          </div>

          <div className="foundations-grid">
            {METHOD_FOUNDATIONS.map((pillar, idx) => (
              <div key={idx} className="foundation-card">
                <span className="foundation-icon" aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="signature-quote-banner">
            <p className="signature-quote-text">
              &ldquo;We don&apos;t believe in simply telling you what to use. We believe in helping
              you understand <strong>WHY, WHEN, HOW — AND WHEN NOT TO USE IT.</strong>&rdquo;
            </p>
            <span className="signature-principle">Signature Principle: Learn. Understand. Apply.</span>
          </div>
        </div>
      </section>

      {/* 5. SIX PILLARS OF EVERYDAY WELLNESS (CONSOLIDATED FROM /WELLNESS) */}
      <section className="section bg-cream-soft" id="wellness-pillars">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">EVERYDAY LIFE DOMAINS</span>
            <h2>
              Six Pillars of <em>Everyday Wellness.</em>
            </h2>
            <p className="section-lead">
              Evidence-informed education, nature-based practices, and practical routines for modern life.
            </p>
          </div>

          <div className="wellness-pillars-grid">
            {WELLNESS_PILLARS.map((pillar) => (
              <article key={pillar.id} id={pillar.id} className="pillar-detail-card">
                <div className="pillar-card-header">
                  <span className="pillar-num">{pillar.step}</span>
                  <span className="pillar-tagline">{pillar.tagline}</span>
                  <h3>{pillar.title}</h3>
                </div>

                <p className="pillar-desc">{pillar.description}</p>

                <ul className="pillar-points">
                  {pillar.details.map((point, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot" aria-hidden="true">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pillar-footer">
                  <Link href={pillar.pathway.href} className="pillar-pathway-link">
                    {pillar.pathway.text} <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="philosophy-callout-box">
            <div className="callout-badge">OUR WELLNESS PHILOSOPHY</div>
            <h3>Sustainable Wellbeing Over Extreme Interventions</h3>
            <p>
              We believe genuine wellness is not about drastic overhauls or unverified claims.
              It is built on small, repeatable daily habits, sensory nourishment, nervous-system awareness,
              and education that empowers you to make informed decisions for yourself and your family.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FOUR DELIVERY CHANNELS */}
      <section className="section approach-channels-section" id="pathways">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">FOUR DELIVERY CHANNELS</span>
            <h2>
              Experience the method <em>in your world.</em>
            </h2>
            <p className="section-lead">
              The Harmony of Cells approach is tailored across four distinct delivery channels
              to meet you exactly where you are.
            </p>
          </div>

          <div className="channels-grid">
            {DELIVERY_CHANNELS.map((channel) => (
              <article key={channel.id} className="channel-card">
                <span className="channel-tag">{channel.target}</span>
                <h3>{channel.label}</h3>
                <span className="channel-subtitle">{channel.subtitle}</span>
                <p>{channel.description}</p>
                <Link href={channel.href} className="channel-link">
                  Explore {channel.label} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="section service-cta-section" id="cta">
        <div className="container">
          <div className="service-cta-card">
            <div className="service-cta-content">
              <span className="eyebrow">START YOUR WELLNESS JOURNEY</span>
              <h2>
                Ready to build calmer, <em>healthier daily rhythms?</em>
              </h2>
              <p>
                Explore our foundation education, connect with Richa for a personalized
                educational consultation, or discover our curated botanical collection.
              </p>

              <div className="service-cta-buttons">
                <Link href="/consultation" className="btn btn-primary">
                  Personal Consultation <span>→</span>
                </Link>
                <Link href="/education" className="btn btn-outline">
                  Explore Education Pathways <span>→</span>
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
