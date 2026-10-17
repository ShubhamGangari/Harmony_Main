import Link from "next/link";
import GoogleFormLink from "../components/FormLink";
import { FeaturedProducts } from "../components/Catalogue";
import FounderVisual from "../components/FounderVisual";
import { SITE_CONFIG } from "../lib/config";

const APPROACH_CONCEPTS = [
  {
    step: "01",
    name: "REST",
    tagline: "Recovery & Calm",
    glyph: "✦",
    focus: "Nighttime recovery & deep decompression",
    description:
      "Creating supportive conditions for genuine rest, nighttime recovery, and gentle decompression after demanding days.",
    ritual: "Circadian evening wind-down & light transitions",
  },
  {
    step: "02",
    name: "REGULATE",
    tagline: "Pause & Awareness",
    glyph: "◌",
    focus: "Conscious pauses & somatic calm",
    description:
      "Building intentional moments of pause, somatic awareness, and calming transitions throughout the workday.",
    ritual: "2-minute breath breaks & workday resets",
  },
  {
    step: "03",
    name: "RESTORE",
    tagline: "Daily Rhythms",
    glyph: "◈",
    focus: "Circadian alignment & restorative cadence",
    description:
      "Supporting healthy circadian rhythms and restorative routines through evidence-informed lifestyle practices.",
    ritual: "Morning daylight exposure & hydration rhythms",
  },
  {
    step: "04",
    name: "RESILIENCE",
    tagline: "Sustainable Capacity",
    glyph: "◇",
    focus: "Everyday adaptability & emotional calm",
    description:
      "Developing practical habits and adaptive routines for navigating the continuous demands of modern life.",
    ritual: "Stress boundary protection & renewal intervals",
  },
  {
    step: "05",
    name: "RITUAL",
    tagline: "Repeatable Habits",
    glyph: "✺",
    focus: "Small, enjoyable self-care micro-habits",
    description:
      "Turning wellness knowledge into small, enjoyable, repeatable self-care practices that fit your everyday schedule.",
    ritual: "Sensory aromatic cues & conscious pauses",
  },
];

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

const WELLNESS_PILLARS = [
  {
    title: "Rest & Sleep",
    glyph: "◌",
    category: "RECOVERY",
    description:
      "Calming evening routines, sensory cues, and environmental conditions for deep, restorative sleep.",
  },
  {
    title: "Daily Rhythms & Pacing",
    glyph: "◈",
    category: "LIFESTYLE",
    description:
      "Circadian-aligned daytime habits, hydration breaks, and restorative pacing throughout demanding work schedules.",
  },
  {
    title: "Stress & Resilience",
    glyph: "✦",
    category: "ADAPTABILITY",
    description:
      "Accessible education and somatic micro-practices to build everyday adaptability and emotional calm.",
  },
  {
    title: "Sensory Wellness",
    glyph: "✺",
    category: "AROMATICS",
    description:
      "Mindful breathing, ambient space design, natural soundscapes, and botanical aromatic grounding.",
  },
  {
    title: "Women's Wellness",
    glyph: "◇",
    category: "RHYTHMS",
    description:
      "Supportive, evidence-informed lifestyle routines across life transitions, hormonal shifts, and changing rhythms.",
  },
  {
    title: "Healthy Ageing",
    glyph: "✦",
    category: "LONGEVITY",
    description:
      "Sustainable daily movement, nourishment, nervous-system recovery, and nature-based longevity habits.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">HARMONY OF CELLS</span>
            <h1>
              Nervous System Wellness for <em>Everyday Life.</em>
            </h1>
            <p className="hero-supporting-title">
              Supporting wellbeing through lifestyle, sensory practices and informed self-care.
            </p>
            <p className="hero-description">
              Modern life places continuous demands on the body and mind. Harmony of Cells
              brings together wellness education, lifestyle practices, aromatherapy and
              sensory experiences to help people create more supportive daily rhythms for
              rest, resilience and wellbeing.
            </p>

            <div className="hero-actions">
              <a href="#approach" className="btn btn-primary">
                Explore Our Approach <span>↓</span>
              </a>
              <GoogleFormLink type="consultation" className="btn btn-outline hero-secondary-btn">
                Start Your Wellness Journey <span>→</span>
              </GoogleFormLink>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Learn. Understand. Apply. • Nature-based educational self-care.</p>
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

      {/* 2. OUR APPROACH SECTION — THE 5R METHODOLOGY */}
      <section className="section approach-section" id="approach">
        <div className="container">
          <div className="approach-intro">
            <span className="eyebrow">THE HARMONY OF CELLS METHOD</span>
            <h2>
              Wellness is shaped by the <em>rhythms of everyday life.</em>
            </h2>
            <p>
              Wellness is not one product, one practice or one prescription. It is shaped by
              how we navigate the realities of modern life. Harmony of Cells focuses on the
              relationship between nervous-system wellbeing, lifestyle and environment — and on
              the small, practical practices that make everyday life more supportive.
            </p>
          </div>

          {/* Sequential Step Sequence Rail */}
          <div className="approach-flow-header" aria-hidden="true">
            <span className="approach-flow-label">A 5-STAGE EDITORIAL SEQUENCE</span>
            <div className="approach-flow-line" />
          </div>

          <div className="approach-grid" role="list" aria-label="Our 5-stage wellness methodology">
            {APPROACH_CONCEPTS.map((concept) => (
              <article key={concept.step} className="approach-card" role="listitem">
                <div className="approach-card-header">
                  <div className="approach-step-pill">
                    <span className="approach-step-num">{concept.step}</span>
                    <span className="approach-step-glyph" aria-hidden="true">{concept.glyph}</span>
                  </div>
                  <span className="approach-tagline">{concept.tagline}</span>
                </div>
                <h3>{concept.name}</h3>
                <p className="approach-card-focus">{concept.focus}</p>
                <p className="approach-card-desc">{concept.description}</p>
                <div className="approach-card-ritual">
                  <span className="ritual-label">PRACTICE CUE</span>
                  <small>{concept.ritual}</small>
                </div>
              </article>
            ))}
          </div>

          <div className="approach-footer-row">
            <p className="approach-disclaimer-note">
              * These are educational lifestyle concepts designed to support healthy daily
              rhythms, not medical claims to diagnose, treat, or clinically regulate
              nervous-system disorders.
            </p>
            <div className="approach-cta-wrap">
              <Link href="/approach" className="btn btn-primary">
                Explore The Approach Page <span>→</span>
              </Link>
              <Link href="/education" className="btn btn-outline">
                Explore Wellness Education <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR AUDIENCE PATHWAYS */}
      <section className="section pathways-section" id="pathways">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FOUR DELIVERY CHANNELS</span>
            <h2>
              Discover your <em>wellness pathway.</em>
            </h2>
            <p>
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

      {/* 4. WELLNESS FOCUS AREAS */}
      <section className="section pillars-section" id="pillars">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">CORE FOCUS AREAS</span>
            <h2>
              Education grounded in <em>practical self-care.</em>
            </h2>
            <p>
              Explore our core educational themes focused on everyday balance, sensory
              anchoring, and sustainable wellbeing.
            </p>
          </div>

          <div className="pillars-grid">
            {WELLNESS_PILLARS.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-card-header">
                  <span className="pillar-icon" aria-hidden="true">
                    {pillar.glyph}
                  </span>
                  <span className="pillar-category">{pillar.category}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="pillars-cta-row">
            <Link href="/wellness" className="btn btn-outline">
              Explore All Six Wellness Pillars <span>→</span>
            </Link>
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

      {/* 6. ESSENTIAL OILS — SIGNATURE WELLNESS TOOLS */}
      <section className="section products-section products-secondary" id="products">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">SIGNATURE WELLNESS TOOLS</span>
            <h2>
              Botanical aromas for <em>everyday rituals.</em>
            </h2>
            <p>
              Essential oils are concentrated botanical extracts. Within our approach, they serve
              as intentional sensory anchors for mindful breathing, evening wind-down, and calming
              home environments — supported by responsible dilution and usage education.
            </p>
          </div>

          <FeaturedProducts url={SITE_CONFIG.productsCsv} />

          <div className="section-bottom-link">
            <Link href="/products" className="outline-link">
              Explore the Botanical Collection <span>→</span>
            </Link>
            <small className="product-disclaimer-subtext">
              Product selections focus on aroma profile, sensory rituals and responsible
              application rather than medical outcomes.
            </small>
          </div>
        </div>
      </section>

      {/* 7. CONSULTATION & FINAL CONVERSION */}
      <section className="section consultation-section" id="consultation">
        <div className="container">
          <div className="consultation-wrapper">
            <div className="consultation-content">
              <span className="eyebrow">START YOUR WELLNESS JOURNEY</span>
              <h2>
                Personal guidance for your <em>wellness rhythms.</em>
              </h2>
              <p>
                Sometimes you don't need another list of wellness tips. You need someone to help
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
