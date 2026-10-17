import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "For Wellness Professionals | Add Knowledge. Expand Your Toolkit. | Harmony of Cells",
  description:
    "If you already work with people in a wellness setting, understanding essential oils can add another dimension to the experiences you create. Responsible, evidence-informed practitioner education.",
};

const AUDIENCE_GROUPS = [
  {
    title: "Yoga Teachers",
    description: "Enhance savasana, mindful breathwork (pranayama), and grounding rituals with safe, atmospheric aromatic diffusion and ambient space design.",
    tag: "Movement & Mind",
  },
  {
    title: "Wellness Coaches",
    description: "Equip your clients with sensory anchoring tools, evening decompression routines, and practical daily wellness rituals for modern life.",
    tag: "Lifestyle Integration",
  },
  {
    title: "Therapists & Bodyworkers",
    description: "Incorporate responsible topical dilution, carrier oil selection, and soothing botanical aromas to deepen client relaxation safely.",
    tag: "Touch & Calming",
  },
  {
    title: "Spa Professionals",
    description: "Design memorable sensory arrival rituals, ambient treatment room atmospheres, and compliant essential-oil application standards.",
    tag: "Hospitality & Spa",
  },
  {
    title: "Retreat Centres & Facilitators",
    description: "Create immersive nature-based sensory experiences, restorative evening wind-down circles, and grounding breath transitions.",
    tag: "Retreat Environments",
  },
  {
    title: "Wellness Practitioners",
    description: "Build deep botanical literacy, evaluate essential oil purity benchmarks, and confidently recommend responsible aromatic habits.",
    tag: "Holistic Practice",
  },
  {
    title: "Healthcare & Allied-Health Professionals",
    description: "Selected clinicians and therapists exploring evidence-informed complementary wellness education within strict, non-medical ethical boundaries.",
    tag: "Complementary Scope",
  },
];

const CURRICULUM_TOPICS = [
  {
    num: "01",
    title: "Essential oil fundamentals",
    description:
      "Plant botanical origins, harvesting methods, distillation science, chemical constituent classifications, and what makes each essential oil unique.",
  },
  {
    num: "02",
    title: "Responsible application",
    description:
      "Appropriate topical, aromatic, and ambient diffusion methods matched to diverse client sensitivities and physical environments.",
  },
  {
    num: "03",
    title: "Aromatic experiences",
    description:
      "Designing intentional atmospheric spaces, diffusion safety, and olfactory anchoring for group classes, private sessions, and treatment rooms.",
  },
  {
    num: "04",
    title: "Dilution and safety",
    description:
      "Rigorous dilution ratios, carrier oil selection, phototoxicity considerations, patch testing protocols, and special population precautions.",
  },
  {
    num: "05",
    title: "Client communication",
    description:
      "Clear intake frameworks, managing client expectations, transparent sensory descriptions, and obtaining informed client consent.",
  },
  {
    num: "06",
    title: "Creating wellness rituals",
    description:
      "Formulating customized morning awakening, mid-day refocusing, and evening restorative rituals to support client wellbeing goals.",
  },
  {
    num: "07",
    title: "Professional boundaries",
    description:
      "Ethical scope of practice, compliant non-medical language standards, and knowing precisely when to refer clients to qualified medical professionals.",
  },
];

export default function ProfessionalsPage() {
  return (
    <main className="professionals-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero professionals-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">FOR WELLNESS PROFESSIONALS</span>
            <h1>
              Add knowledge. Expand your toolkit. <em>Stay responsible.</em>
            </h1>
            <p className="hero-supporting-title">
              If you already work with people in a wellness setting, understanding essential oils can add another dimension to the experiences you create.
            </p>
            <p className="hero-description">
              At Harmony of Cells, we help practitioners understand the science, safety, and sensory art of pure essential oils — empowering you to incorporate aromatherapy education into your practice with total integrity and clear boundaries.
            </p>

            <div className="hero-actions">
              <GoogleFormLink
                type="course"
                item="Explore Professional Education — Practitioner Pathway"
                className="btn btn-primary"
              >
                Explore Professional Education <span>→</span>
              </GoogleFormLink>
              <a href="#topics" className="btn btn-outline hero-secondary-btn">
                View Topics <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Evidence-informed botanical education • Dilution safety • Non-medical scope.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Wellness practitioner setting with botanical essential oils"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">PRACTITIONER STANDARD</span>
                <strong>Add knowledge. Stay responsible.</strong>
                <small>Complementary Wellness Education</small>
              </div>
            </div>
            <div className="floating-badge">
              <span>✦</span>
              <small>
                WELLNESS<br />
                EXPERTS
              </small>
            </div>
          </div>
        </div>

        <div className="container announcement-container">
          <div className="announcement">
            <span className="announcement-symbol">✦</span>
            <span>
              Yoga Teachers • Wellness Coaches • Therapists • Spa Professionals • Retreat Centres • Practitioners
            </span>
          </div>
        </div>
      </section>

      {/* 2. AUDIENCE SECTION */}
      <section className="section professionals-audience-section" id="audience">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">TARGET AUDIENCE</span>
            <h2>Designed for wellness leaders &amp; practitioners.</h2>
            <p className="section-lead">
              <strong>Audience:</strong> Yoga teachers; wellness coaches; therapists; spa professionals; retreat centres; wellness practitioners; selected healthcare and allied-health professionals interested in complementary wellness education.
            </p>
          </div>

          <div className="professionals-audience-grid">
            {AUDIENCE_GROUPS.map((aud, idx) => (
              <article key={idx} className="professionals-audience-card">
                <span className="audience-tag">{aud.tag}</span>
                <h3>{aud.title}</h3>
                <p>{aud.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOPICS SECTION */}
      <section className="section professionals-topics-section" id="topics">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">CURRICULUM AREAS</span>
            <h2>Topics</h2>
            <p className="section-lead">
              A comprehensive curriculum designed to help you understand essential oils deeply, use them safely, and build meaningful sensory wellness rituals for your clients.
            </p>
          </div>

          <div className="professionals-topics-grid">
            {CURRICULUM_TOPICS.map((topic) => (
              <article key={topic.num} className="professionals-topic-card">
                <div className="topic-card-header">
                  <span className="topic-num">{topic.num}</span>
                  <span className="topic-badge">CORE TOPIC</span>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRINCIPLE BANNER */}
      <section className="section professionals-principle-section" id="principle">
        <div className="container">
          <div className="quote-banner professional-principle-banner">
            <p className="quote-text">
              &ldquo;<strong>Principle:</strong> Essential oils should complement responsible wellness practice — not replace qualified medical care.&rdquo;
            </p>
          </div>

          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">CREDENTIAL &amp; ETHICS NOTICE</span>
            </div>
            <div className="disclaimer-content">
              <strong>Scope of Practice &amp; Complementary Standard</strong>
              <p>
                Harmony of Cells professional courses provide non-clinical educational enrichment, sensory training, and responsible application protocols. They do not confer a licensed medical credential, clinical healthcare license, or statutory board certification. Essential oils must always be used within your professional scope of practice and must never be represented as medical diagnosis, clinical treatment, or a replacement for medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="section consultation-section professionals-final-cta-section" id="explore-education">
        <div className="container">
          <div className="consultation-wrapper">
            <div className="consultation-content">
              <span className="eyebrow">PRACTITIONER PATHWAY</span>
              <h2>Explore Professional Education</h2>
              <p className="section-lead">
                If you already work with people in a wellness setting, understanding essential oils can add another dimension to the experiences you create. Join our next practitioner cohort or connect with Founder Richa Ramola for mentoring.
              </p>

              <div className="consultation-points">
                <span>✓ 7 core professional curriculum topics</span>
                <span>✓ Responsible dilution principles &amp; client safety</span>
                <span>✓ Mentorship and practical coaching from Founder Richa Ramola</span>
                <span>✓ Connected to our Level 3 Education Framework</span>
              </div>

              <div className="consultation-cta-group">
                <GoogleFormLink
                  type="course"
                  item="Explore Professional Education — Practitioner Pathway"
                  className="btn btn-primary cta-btn-large"
                >
                  Explore Professional Education <span>→</span>
                </GoogleFormLink>
                <Link href="/education#level-3" className="btn btn-outline cta-btn-secondary">
                  View Level 3 in Education <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
