import Link from "next/link";
import { CourseCatalogue } from "../../components/Catalogue";
import { SITE_CONFIG } from "../../lib/config";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Essential Oil Education | Learn at Your Own Level | Harmony of Cells",
  description:
    "Whether you're completely new to essential oils or already work in the wellness space, our education programs are designed to help you build knowledge you can use responsibly.",
};

const LEVEL_1_TOPICS = [
  "What essential oils are",
  "How they are produced",
  "Botanical basics",
  "Aroma profiles",
  "Different ways of using oils",
  "Basic dilution principles",
  "Essential oil safety",
  "Choosing oils responsibly",
];

const LEVEL_2_HIGHLIGHTS = [
  "Evening routines & restorative sleep",
  "Sensory relaxation & mindful breathing",
  "Personal wellness rituals for busy schedules",
  "Calming, supportive home environments",
  "Mindful transitions between work & personal rest",
  "Responsible self-care & sensory anchors",
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
            <span className="eyebrow">ESSENTIAL OIL EDUCATION</span>
            <h1>
              Learn at your <em>own level.</em>
            </h1>
            <p className="hero-supporting-title">
              Whether you&apos;re completely new to essential oils or already work in the wellness space, our education programs are designed to help you build knowledge you can use responsibly.
            </p>
            <p className="hero-description">
              At Harmony of Cells, education always precedes recommendation. We guide you through
              botanical basics, dilution principles, sensory wellness, and safe daily rituals —
              ensuring you make choices that are informed, responsible, and personal to you.
            </p>

            <div className="hero-actions">
              <a href="#levels" className="btn btn-primary">
                Explore Curriculum Levels <span>↓</span>
              </a>
              <a href="#active-courses" className="btn btn-outline hero-secondary-btn">
                Browse Scheduled Courses <span>↓</span>
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

      {/* 2. THE THREE-TIER EDUCATIONAL PATHWAYS */}
      <section className="section education-pathways-framework" id="levels">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">CURRICULUM LEVELS</span>
            <h2>
              Learn at your <em>own level.</em>
            </h2>
            <p className="section-lead">
              Whether you&apos;re completely new to essential oils or already work in the wellness space, our education programs are designed to help you build knowledge you can use responsibly.
            </p>
          </div>

          <div className="education-levels-grid">
            {/* LEVEL 1 CARD */}
            <article className="education-tier-card tier-tier-1" id="level-1">
              <div className="tier-card-header">
                <span className="tier-badge">LEVEL 1</span>
                <span className="tier-tagline">THE FOUNDATIONS</span>
              </div>

              <h3>Level 1 — Essential Oils: The Foundations</h3>
              <p className="tier-description">
                Start with the core fundamentals — what essential oils are, how they are produced, and how to handle them safely and responsibly in everyday life.
              </p>

              <div className="tier-curriculum-box">
                <span className="tier-curriculum-label">Curriculum Topics:</span>
                <ul className="tier-curriculum-list">
                  {LEVEL_1_TOPICS.map((topic, idx) => (
                    <li key={idx}>
                      <span className="bullet-icon">✓</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tier-card-footer">
                <div className="tier-audience">
                  <strong>Audience:</strong> Beginners, individuals, and families exploring nature-based wellness.
                </div>
                <div className="tier-footer-cta">
                  <GoogleFormLink
                    type="course"
                    item="Level 1 — Essential Oils: The Foundations"
                    className="btn btn-primary tier-cta-btn"
                  >
                    Explore Level 1 <span>→</span>
                  </GoogleFormLink>
                </div>
              </div>
            </article>

            {/* LEVEL 2 CARD */}
            <article className="education-tier-card tier-tier-2" id="level-2">
              <div className="tier-card-header">
                <span className="tier-badge">LEVEL 2</span>
                <span className="tier-tagline">EVERYDAY WELLNESS</span>
              </div>

              <h3>Level 2 — Essential Oils in Everyday Wellness</h3>
              <p className="tier-description">
                Explore how essential oils may be incorporated into evening routines, sensory relaxation, mindful breathing, personal wellness rituals, home environments and self-care practices.
              </p>

              <div className="tier-curriculum-box">
                <span className="tier-curriculum-label">Everyday Application Areas:</span>
                <ul className="tier-curriculum-list">
                  {LEVEL_2_HIGHLIGHTS.map((highlight, idx) => (
                    <li key={idx}>
                      <span className="bullet-icon">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tier-card-footer">
                <div className="tier-audience">
                  <strong>Audience:</strong> Individuals seeking deeper self-care rituals and supportive home rhythms.
                </div>
                <div className="tier-footer-cta">
                  <GoogleFormLink
                    type="course"
                    item="Level 2 — Essential Oils in Everyday Wellness"
                    className="btn btn-primary tier-cta-btn"
                  >
                    Explore Level 2 <span>→</span>
                  </GoogleFormLink>
                </div>
              </div>
            </article>

            {/* LEVEL 3 CARD */}
            <article className="education-tier-card tier-tier-3" id="level-3">
              <div className="tier-card-header">
                <span className="tier-badge">LEVEL 3</span>
                <span className="tier-tagline">FOR WELLNESS PROFESSIONALS</span>
              </div>

              <h3>Level 3 — Essential Oils for Wellness Professionals</h3>
              <p className="tier-description">
                Designed for professionals who want to understand essential oils more deeply and explore responsible ways of incorporating aromatherapy education into their existing practice.
              </p>

              <div className="tier-curriculum-box">
                <span className="tier-curriculum-label">Audience:</span>
                <p className="tier-audience-text">
                  Yoga teachers, wellness coaches, therapists, spa professionals, wellness centres, retreat facilitators and other wellness practitioners.
                </p>
                <span className="tier-curriculum-label mt-3">Professional Focus:</span>
                <ul className="tier-curriculum-list">
                  <li>
                    <span className="bullet-icon">✓</span>
                    <span>Responsible dilution standards & client safety</span>
                  </li>
                  <li>
                    <span className="bullet-icon">✓</span>
                    <span>Sensory space design & ambient aromatic atmospheres</span>
                  </li>
                  <li>
                    <span className="bullet-icon">✓</span>
                    <span>Ethical client boundaries & non-medical scope</span>
                  </li>
                </ul>
              </div>

              <div className="tier-card-footer">
                <div className="tier-audience">
                  <strong>Path:</strong> Practitioner Curriculum Pathway
                </div>
                <div className="tier-footer-cta">
                  <Link href="/professionals" className="btn btn-primary tier-cta-btn">
                    Explore Professional Education <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* 3. SIGNATURE MESSAGE BANNER */}
          <div className="quote-banner education-banner">
            <p className="quote-text">
              &ldquo;We don&apos;t believe in simply telling you what to use. We believe in helping you
              understand <strong>WHY, WHEN, HOW — AND WHEN NOT TO USE IT.</strong>&rdquo;
            </p>
            <div className="signature-action">
              <GoogleFormLink
                type="consultation"
                item="Workshops & Experiential Learning"
                className="btn btn-primary signature-cta-btn"
              >
                Explore Workshops <span>→</span>
              </GoogleFormLink>
            </div>
          </div>

          {/* Credential & Non-Medical Scope Notice */}
          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">CREDENTIAL NOTICE</span>
            </div>
            <div className="disclaimer-content">
              <strong>Professional Education & Scope Notice</strong>
              <p>
                Harmony of Cells educational courses and pathways provide educational enrichment,
                practical aromatherapy knowledge, and responsible usage principles. They do not
                confer a statutory healthcare license or clinical medical accreditation. Essential oils
                must be used strictly within your personal or professional scope of practice and never as
                a substitute for qualified medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACTIVE COURSE CATALOGUE */}
      <section className="section bg-cream-soft catalogue-section education-catalogue" id="active-courses">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">ENROLMENT & SCHEDULED WORKSHOPS</span>
            <h2>
              Currently Scheduled <em>Courses & Cohorts.</em>
            </h2>
            <p className="section-lead">
              Browse currently open workshop cohorts below. Click &ldquo;Enquire to Enrol&rdquo; or reach out on WhatsApp to confirm dates, curriculum syllabus, and seat availability.
            </p>
          </div>

          <CourseCatalogue url={SITE_CONFIG.coursesCsv} />
        </div>
      </section>

      {/* 5. WORKSHOP & MENTORING INQUIRY */}
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
