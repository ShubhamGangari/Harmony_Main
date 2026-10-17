import Link from "next/link";
import { CourseCatalogue } from "../../components/Catalogue";
import { SITE_CONFIG } from "../../lib/config";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Essential Oil Education & Workshops | Harmony of Cells",
  description:
    "Structured essential oil education and lifestyle wellness pathways for individuals and wellness professionals. Learn at your own pace with botanical integrity.",
};

const EDUCATION_LEVELS = [
  {
    level: "LEVEL 01",
    tagline: "Foundations & Safety",
    title: "Essential Oils: The Foundations",
    description:
      "Start with the core fundamentals — what essential oils are, how they are produced, and how to handle them safely and responsibly in everyday life.",
    topics: [
      "Botanical basics and plant extraction methods",
      "Understanding aroma profiles and fragrance notes",
      "Different ways of using oils (inhalation, diffusion, topical)",
      "Fundamental dilution principles and carrier oils",
      "Responsible use, skin patch testing, and essential oil safety",
    ],
    audience: "Beginners, individuals, and families exploring nature-based wellness.",
    status: "Active Foundation Pathway",
  },
  {
    level: "LEVEL 02",
    tagline: "Daily Integration",
    title: "Essential Oils in Everyday Wellness",
    description:
      "Explore how essential oils can be thoughtfully incorporated into daily life, restorative evening routines, and personalized self-care rituals.",
    topics: [
      "Evening routines and wind-down practices for restorative sleep",
      "Sensory relaxation techniques and mindful breathing",
      "Personal wellness rituals that fit into busy schedules",
      "Creating calming, supportive home environments",
      "Mindful transitions between work and personal rest",
    ],
    audience: "Individuals seeking deeper personal self-care and daily rhythms.",
    status: "Everyday Wellness Pathway",
  },
  {
    level: "LEVEL 03",
    tagline: "Professional Practice",
    title: "Essential Oils for Wellness Professionals",
    description:
      "Designed for professionals who want to understand essential oils more deeply and explore responsible ways of incorporating aromatherapy education into their practice.",
    topics: [
      "Professional applications in movement, bodywork, and coaching",
      "Responsible usage protocols and dilution standards",
      "Aromatherapy education and aromatic space design",
      "Ethical client communication and informed consent",
      "Professional boundaries and non-medical scope of practice",
    ],
    audience:
      "Yoga teachers, wellness coaches, therapists, bodyworkers, spa specialists, and retreat leaders.",
    status: "Practitioner Curriculum Pathway",
  },
];

export default function EducationPage() {
  return (
    <main className="education-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero education-page-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">ESSENTIAL OIL & LIFESTYLE EDUCATION</span>
            <h1>
              Learn at your <em>own level.</em>
            </h1>
            <p className="hero-supporting-title">
              Whether you are completely new to essential oils or already work in wellness, our education programs help you build knowledge you can use responsibly.
            </p>
            <p className="hero-description">
              At Harmony of Cells, education always precedes recommendation. We guide you through
              botanical basics, dilution principles, sensory wellness, and safe daily rituals —
              ensuring you make choices that are informed, responsible, and personal to you.
            </p>

            <div className="hero-actions">
              <a href="#pathway-framework" className="btn btn-primary">
                View 3-Tier Curriculum <span>↓</span>
              </a>
              <a href="#active-courses" className="btn btn-outline hero-secondary-btn">
                Browse Active Courses <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Learn. Understand. Apply. • Evidence-informed botanical knowledge.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Essential oil education and workshop learning setting"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">EDUCATION FRAMEWORK</span>
                <strong>Level 1 • Level 2 • Level 3</strong>
                <small>Foundations • Everyday • Professional</small>
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
              Botanical Basics • Dilution Principles • Sensory Rituals • Professional Ethics • Safe Application
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE THREE-TIER EDUCATIONAL PATHWAYS (Blueprint Specification) */}
      <section className="section education-pathways-framework" id="pathway-framework">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">CURRICULUM ARCHITECTURE</span>
            <h2>
              Three Progressive <em>Education Levels.</em>
            </h2>
            <p className="section-lead">
              Our educational framework is structured into three progressive pathways. Note that these pathways represent our overarching learning blueprint; active course offerings and schedules are detailed below.
            </p>
          </div>

          <div className="education-levels-grid">
            {EDUCATION_LEVELS.map((tier, idx) => (
              <article key={tier.level} className={`education-tier-card tier-tier-${idx + 1}`}>
                <div className="tier-card-header">
                  <span className="tier-badge">{tier.level}</span>
                  <span className="tier-tagline">{tier.tagline}</span>
                </div>

                <h3>{tier.title}</h3>
                <p className="tier-description">{tier.description}</p>

                <div className="tier-curriculum-box">
                  <span className="tier-curriculum-label">Curriculum Highlights:</span>
                  <ul className="tier-curriculum-list">
                    {tier.topics.map((topic, pIdx) => (
                      <li key={pIdx}>
                        <span className="bullet-icon">✦</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tier-card-footer">
                  <div className="tier-audience">
                    <strong>Audience:</strong> {tier.audience}
                  </div>
                  <div className="tier-footer-row">
                    <span className="tier-status-pill">{tier.status}</span>
                    <a href="#active-courses" className="tier-jump-link">
                      View Courses <span>↓</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Signature Brand Principle Box */}
          <div className="signature-quote-banner education-signature-banner">
            <p className="signature-quote-text">
              &ldquo;We don&apos;t believe in simply telling you what to use. We believe in helping you
              understand <strong>WHY, WHEN, HOW — AND WHEN NOT TO USE IT.</strong>&rdquo;
            </p>
            <span className="signature-principle">Signature Principle: Learn. Understand. Apply.</span>
          </div>

          {/* Credential & Non-Medical Scope Notice */}
          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">CREDENTIAL NOTICE</span>
            </div>
            <div className="disclaimer-content">
              <strong>Professional Education & Accreditation Notice</strong>
              <p>
                Harmony of Cells educational courses and pathways provide educational enrichment,
                practical aromatherapy knowledge, and responsible usage principles. They do not
                confer a statutory healthcare license, clinical medical accreditation, or formal
                state certification. Essential oils must be used strictly within your personal or
                professional scope of practice and never as a substitute for qualified medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE COURSE CATALOGUE (Preserving existing catalogue & enrolment) */}
      <section className="section catalogue-section education-catalogue" id="active-courses">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">ENROLMENT & ACTIVE OFFERINGS</span>
            <h2>
              Current Course <em>Catalogue.</em>
            </h2>
            <p className="section-lead">
              Select an available course below to view syllabus details and begin your enrolment pathway.
            </p>
          </div>

          <CourseCatalogue url={SITE_CONFIG.coursesCsv} />
        </div>
      </section>

      {/* 4. WORKSHOP & MENTORING INQUIRY */}
      <section className="section service-cta-section" id="workshop-inquiry">
        <div className="container">
          <div className="service-cta-card">
            <div className="service-cta-content">
              <span className="eyebrow">BESPOKE WORKSHOPS & MENTORING</span>
              <h2>
                Interested in tailored education for <em>your group or practice?</em>
              </h2>
              <p>
                Richa Ramola facilitates interactive workshops, corporate sensory experiences,
                and practitioner mentoring sessions across India and internationally.
              </p>

              <div className="service-cta-buttons">
                <GoogleFormLink
                  type="consultation"
                  item="Education & Workshop Inquiry"
                  className="btn btn-primary"
                >
                  Inquire About Workshops <span>→</span>
                </GoogleFormLink>
                <Link href="/consultation" className="btn btn-outline">
                  Book Personal Consultation <span>→</span>
                </Link>
                <Link href="/professionals" className="btn btn-outline">
                  For Wellness Professionals <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
