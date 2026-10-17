import Link from "next/link";
import GoogleFormLink from "../components/FormLink";
import FounderVisual from "../components/FounderVisual";
import FiveRFramework from "../components/FiveRFramework";

const AUDIENCE_PATHWAYS = [
  {
    id: "individuals",
    tag: "FOR INDIVIDUALS",
    badgeAccent: "tag-individuals",
    title: "Personal Lifestyle & Daily Rhythms",
    subtitle: "Personal Nervous System & Lifestyle Wellness",
    description:
      "Stress & relaxation education, sleep-supportive routines, women's wellness, and one-on-one consultations to build calm into your personal life.",
    features: [
      "1-on-1 Lifestyle Wellness Consultations",
      "Restorative Sleep & Evening Wind-Down",
      "Personalized Sensory Botanical Rituals",
    ],
    cta: "Explore Individual Pathway",
    href: "/individuals",
  },
  {
    id: "corporates",
    tag: "FOR CORPORATES",
    badgeAccent: "tag-corporates",
    title: "Workplace Preventive Wellness",
    subtitle: "Resilience & Sensory Balance for Teams",
    description:
      "Practical education, stress resilience, nervous-system-friendly practices, and sensory wellness workshops tailored for modern organisations.",
    features: [
      "Workplace Preventive Wellness Workshops",
      "Executive Resilience & Stress Boundaries",
      "Sensory Calming Space Consultations",
    ],
    cta: "Explore Corporate Wellness",
    href: "/corporate-wellness",
  },
  {
    id: "professionals",
    tag: "FOR PROFESSIONALS",
    badgeAccent: "tag-professionals",
    title: "Wellness Practitioners & Coaches",
    subtitle: "Evidence-Informed Botanical Curriculum",
    description:
      "Expand your professional toolkit with evidence-informed essential-oil education, aromatic rituals, dilution safety, and responsible client boundaries.",
    features: [
      "Conservative Dilution & Safety Standards",
      "Somatic Sensory Anchoring Protocols",
      "Responsible Client Scope of Practice",
    ],
    cta: "Explore Practitioner Pathway",
    href: "/professionals",
  },
  {
    id: "hospitality",
    tag: "FOR HOSPITALITY",
    badgeAccent: "tag-hospitality",
    title: "Hospitality & Wellness Centres",
    subtitle: "Ambient Scent Architecture & Guest Journeys",
    description:
      "Sensory wellness space design, ambient room-by-room aromatic concepts, guest experiences, and staff education for spas, retreats, and studios.",
    features: [
      "Room-by-Room Ambient Scent Design",
      "Bespoke Spa & Retreat Sensory Menus",
      "On-Site Staff Aromatherapy Training",
    ],
    cta: "Explore Hospitality Concepts",
    href: "/hospitality",
  },
];

const UNDERSTANDING_PILLARS = [
  {
    icon: "📖",
    title: "EDUCATION FIRST",
    description:
      "We don't believe in simply telling you what to use. We believe in helping you understand why, when and how — and when not to use it.",
  },
  {
    icon: "🌱",
    title: "NATURE WITH RESPONSIBILITY",
    description:
      "Essential oils are highly concentrated botanical extracts. We believe they deserve both appreciation and respect, with careful dilution and usage standards.",
  },
  {
    icon: "✦",
    title: "PRACTICAL GUIDANCE",
    description:
      "Learning how botanical practices can be incorporated into everyday rituals and realistic routines aligned with modern schedules.",
  },
  {
    icon: "🌿",
    title: "WHOLE-PERSON WELLNESS",
    description:
      "Approaching wellbeing as an interconnected whole — bridging nervous-system awareness, daily rhythms, and sensory self-care.",
  },
];

const GATEWAY_ENTRY_POINTS = [
  {
    tag: "WELLNESS EDUCATION",
    badgeClass: "entry-badge-edu",
    title: "Evidence-Informed Learning",
    description:
      "Explore our 3-tier education framework: Foundations, Daily Integration, and Professional Practice. Build knowledge you can use safely and responsibly.",
    points: [
      "Botanical chemistry & dilution safety",
      "Evening sleep & nervous system wind-down",
      "Professional practitioner curriculum",
    ],
    linkText: "Explore Wellness Education",
    href: "/education",
  },
  {
    tag: "SIGNATURE BOTANICALS",
    badgeClass: "entry-badge-oils",
    title: "Essential Oils as Sensory Anchors",
    description:
      "Discover pure botanical extracts curated as intentional sensory anchors for mindful breathing, evening routines, and calming spaces.",
    points: [
      "Aroma profile & usage guidance",
      "Zero health claims; sensory focus",
      "Dedicated inquiry & WhatsApp ordering",
    ],
    linkText: "Explore Botanical Collection",
    href: "/products",
  },
  {
    tag: "PERSONAL GUIDANCE",
    badgeClass: "entry-badge-consult",
    title: "1-on-1 Lifestyle Consultations",
    description:
      "Sometimes you don't need more information — you need someone to help you make sense of it. Connect with Richa Ramola for personalized guidance.",
    points: [
      "Personalized daily rhythm assessment",
      "Tailored botanical & aromatic rituals",
      "Responsible, non-medical self-care",
    ],
    linkText: "About Consultations",
    href: "/consultation",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* 1. PREMIUM HERO WITH EXACT POSITIONING & TWO CTAs */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">NATURE. KNOWLEDGE. INFORMED WELLNESS.</span>
            <h1>
              Understand Your Wellness. <em>Make More Informed Choices.</em>
            </h1>
            <p className="hero-description">
              Harmony of Cells brings together essential oil education, nature-based
              wellness practices and personalised guidance to help you create thoughtful,
              practical wellness rituals for everyday life.
            </p>

            <div className="hero-actions">
              <Link href="/education" className="btn btn-primary hero-primary-btn">
                Explore Wellness Education <span>→</span>
              </Link>
              <Link href="/products" className="btn btn-outline hero-secondary-btn">
                Explore Essential Oils <span>→</span>
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Learn. Understand. Apply.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Nervous System & Lifestyle Wellness setting with calming botanicals"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">HARMONY OF CELLS</span>
                <strong>Calmer, healthier daily rhythms.</strong>
                <small>Education • Sensory Wellness • Lifestyle</small>
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
              Nervous System Wellness • Lifestyle Practices • Sensory Self-Care • Nature-Based Education
            </span>
          </div>
        </div>
      </section>

      {/* 2. CONCISE INTRODUCTION — WELLNESS BEGINS WITH UNDERSTANDING */}
      <section className="section bg-cream-soft home-intro-section" id="intro">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">THE HARMONY OF CELLS PHILOSOPHY</span>
            <h2>
              Wellness begins with <em>understanding.</em>
            </h2>
            <p className="section-lead">
              There is no shortage of wellness information today. But more information doesn&apos;t
              always mean better decisions.
            </p>
            <p className="section-subhead">
              At Harmony of Cells, we believe in education before recommendation.
              We help you understand essential oils, their appropriate uses, safety considerations and the role they
              can play within everyday wellness — so you can make choices that are informed, responsible and personal to you.
            </p>
          </div>

          <div className="home-understanding-grid">
            {UNDERSTANDING_PILLARS.map((pillar, idx) => (
              <div key={idx} className="understanding-card">
                <span className="understanding-icon" aria-hidden="true">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR AUDIENCE PATHWAYS */}
      <section className="section pathways-section" id="pathways">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">FOUR DELIVERY CHANNELS</span>
            <h2>
              Discover your <em>wellness pathway.</em>
            </h2>
            <p className="section-lead">
              Whether you are an individual seeking calmer daily rhythms, an organisation building
              workplace resilience, a wellness professional expanding your toolkit, or a sensory
              hospitality space.
            </p>
          </div>

          <div className="pathways-grid">
            {AUDIENCE_PATHWAYS.map((pathway) => (
              <article key={pathway.id} className={`pathway-card pathway-card-${pathway.id}`}>
                <div className="pathway-card-top">
                  <div className="pathway-badge-row">
                    <span className={`pathway-tag ${pathway.badgeAccent}`}>{pathway.tag}</span>
                  </div>
                  <h3>{pathway.title}</h3>
                  <p className="pathway-subtitle">{pathway.subtitle}</p>
                  <p className="pathway-desc">{pathway.description}</p>

                  <ul className="pathway-feature-list" aria-label={`Key features of ${pathway.title}`}>
                    {pathway.features.map((feature) => (
                      <li key={feature}>
                        <span className="pathway-feature-bullet" aria-hidden="true">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pathway-card-bottom">
                  <Link href={pathway.href} className="btn btn-outline pathway-cta-btn">
                    {pathway.cta} <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SHORT INTRODUCTION TO THE FIVE 5R CONCEPTS WITH LINK TO OUR APPROACH */}
      <section className="section approach-section" id="approach">
        <div className="container">
          <div className="approach-intro text-center">
            <span className="eyebrow">THE 5R METHODOLOGY</span>
            <h2>
              Wellness is shaped by the <em>rhythms of everyday life.</em>
            </h2>
            <p className="section-lead">
              Wellness is not one product, one practice or one prescription. Harmony of Cells focuses on
              the relationship between nervous-system wellbeing, lifestyle and environment — bringing together
              five interconnected principles for everyday vitality: <strong>Rest, Regulate, Restore, Resilience, and Ritual.</strong>
            </p>
          </div>

          {/* Sequential Step Sequence Rail */}
          <div className="approach-flow-header" aria-hidden="true">
            <span className="approach-flow-label">A 5-STAGE EDITORIAL SEQUENCE</span>
            <div className="approach-flow-line" />
          </div>

          {/* Interactive 5R Framework Explorer */}
          <FiveRFramework />

          <div className="approach-footer-row">
            <p className="approach-disclaimer-note">
              * These are educational lifestyle concepts designed to support healthy daily
              rhythms, not medical claims to diagnose, treat, or clinically regulate
              nervous-system disorders.
            </p>
            <div className="approach-cta-wrap">
              <Link href="/approach" className="btn btn-primary">
                Explore Our Full Approach <span>→</span>
              </Link>
              <Link href="/approach#wellness-pillars" className="btn btn-outline">
                View Everyday Wellness Pillars <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT THE FOUNDER & CREDIBILITY */}
      <section className="section founder-section" id="founder">
        <div className="container founder-grid">
          <FounderVisual />

          <div className="founder-copy">
            <p className="eyebrow">ABOUT THE FOUNDER</p>
            <h2>
              Bridging corporate leadership with <em>people-centred wellness.</em>
            </h2>
            <p>
              <strong>Richa Ramola</strong> is the Founder of Harmony of Cells and a Wellness
              Educator with a mission to make nervous-system wellbeing and nature-based self-care
              practical, responsible, and accessible.
            </p>
            <p>
              With nearly three decades of leadership experience in Human Resources and Business
              Operations across multinational organisations, Richa brings a rare, people-centred
              corporate perspective to wellness. Having navigated the relentless demands of high-performance
              workplaces firsthand, she understands both sides: the realities of corporate stress and the
              profound need for sustainable rest and recovery practices.
            </p>
            <p>
              Today, she combines her leadership background with comprehensive education in essential
              oils, aromatherapy, and sensory wellness — bridging <strong>Workplace Preventive Wellness</strong> with
              individual education, practitioner mentoring, and bespoke hospitality concepts.
            </p>
            <blockquote className="founder-quote">
              <span className="founder-quote-glyph" aria-hidden="true">“</span>
              <p>
                Education, purity, and small daily rituals come together to create healthier,
                more empowered lives and workplaces — one conscious pause at a time.
              </p>
            </blockquote>
            <div className="founder-actions">
              <GoogleFormLink type="consultation" className="btn btn-primary">
                Connect with Richa <span>→</span>
              </GoogleFormLink>
              <Link href="/education" className="outline-link">
                Explore Her Education Programs <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDUCATION, ESSENTIAL OILS & CONSULTATION ENTRY POINTS */}
      <section className="section bg-cream-soft home-gateway-section" id="gateways">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">DISCOVER HARMONY OF CELLS</span>
            <h2>
              Three ways to <em>experience our platform.</em>
            </h2>
            <p className="section-lead">
              Grounded knowledge, authentic botanicals, and personalized guidance for your wellness journey.
            </p>
          </div>

          <div className="home-gateway-grid">
            {GATEWAY_ENTRY_POINTS.map((gateway, idx) => (
              <article key={idx} className="gateway-card">
                <div className="gateway-card-header">
                  <span className={`gateway-tag ${gateway.badgeClass}`}>{gateway.tag}</span>
                  <h3>{gateway.title}</h3>
                </div>
                <p className="gateway-description">{gateway.description}</p>
                <ul className="gateway-points">
                  {gateway.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="gateway-bullet" aria-hidden="true">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="gateway-card-footer">
                  <Link href={gateway.href} className="btn btn-outline gateway-cta-btn">
                    {gateway.linkText} <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STRONG FINAL CONVERSION CTA */}
      <section className="section consultation-section" id="final-cta">
        <div className="container">
          <div className="consultation-wrapper">
            <div className="consultation-content">
              <span className="eyebrow">YOUR WELLNESS JOURNEY</span>
              <h2>
                Your wellness journey starts with <em>understanding.</em>
              </h2>
              <p>
                Sometimes you don&apos;t need another list of wellness tips. You need someone to help
                you make sense of it all and create practical routines aligned with your unique lifestyle,
                work demands, and personal goals.
              </p>

              <div className="consultation-points">
                <div className="consultation-point-item">
                  <span className="consultation-point-check" aria-hidden="true">✓</span>
                  <span>Explore nervous-system-friendly daily rhythms</span>
                </div>
                <div className="consultation-point-item">
                  <span className="consultation-point-check" aria-hidden="true">✓</span>
                  <span>Learn responsible essential-oil dilution & application</span>
                </div>
                <div className="consultation-point-item">
                  <span className="consultation-point-check" aria-hidden="true">✓</span>
                  <span>Design calming evening wind-down rituals</span>
                </div>
                <div className="consultation-point-item">
                  <span className="consultation-point-check" aria-hidden="true">✓</span>
                  <span>Inquire about corporate & hospitality workshops</span>
                </div>
              </div>

              <div className="consultation-cta-group">
                <GoogleFormLink type="consultation" className="btn btn-primary">
                  Book a Consultation <span>→</span>
                </GoogleFormLink>
                <Link href="/consultation" className="btn btn-outline">
                  About Consultations <span>→</span>
                </Link>
                <Link href="/education" className="btn btn-outline">
                  View Education Pathways <span>→</span>
                </Link>
              </div>
            </div>

            <div className="consultation-visual">
              <div className="consultation-image-frame">
                <img
                  src="/assets/hero-image.jpg"
                  alt="Natural botanical wellness setting for calm and restoration"
                  className="consultation-image"
                />
              </div>
              <div className="consultation-quote">
                <span>“</span>
                <p>Learn. Understand. Apply. • Wellness begins with education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
