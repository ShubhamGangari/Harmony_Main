import Link from "next/link";
import GoogleFormLink from "../components/FormLink";
import FounderVisual from "../components/FounderVisual";


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

const DISCOVER_PATHWAYS = [
  {
    step: "01",
    tag: "BEGINNERS",
    title: "I'm new to essential oils",
    description:
      "Start with the basics — what essential oils are, how to use them responsibly and where they may fit into everyday wellness.",
    cta: "Start Here",
    href: "/education",
  },
  {
    step: "02",
    tag: "BOTANICALS",
    title: "I already use essential oils",
    description:
      "Explore individual oils, blends, practical applications and responsible-use guidance.",
    cta: "Explore Essential Oils",
    href: "/products",
  },
  {
    step: "03",
    tag: "PROFESSIONALS",
    title: "I'm a wellness professional",
    description:
      "Build your knowledge and explore ways to incorporate essential-oil education into your professional practice.",
    cta: "Professional Education",
    href: "/professionals",
  },
  {
    step: "04",
    tag: "ORGANISATIONS",
    title: "I'm an organisation",
    description:
      "Bring practical wellbeing education and sensory wellness experiences into your workplace or organisation.",
    cta: "Corporate Wellness",
    href: "/corporate-wellness",
  },
];

const APPROACHED_DIFFERENTLY_PILLARS = [
  {
    icon: "🌿",
    title: "Botanical knowledge",
    description:
      "Understanding where oils come from, how they are produced and what makes each one unique.",
  },
  {
    icon: "📖",
    title: "Practical education",
    description:
      "Learning how oils can be incorporated into everyday rituals and wellness practices.",
  },
  {
    icon: "💧",
    title: "Responsible use",
    description:
      "Understanding dilution, application, individual considerations and appropriate precautions.",
  },
  {
    icon: "🔬",
    title: "Evidence-informed thinking",
    description:
      "Exploring what research tells us — while being transparent about what it does not.",
  },
];

const FEATURED_OILS = [
  {
    name: "Lavender",
    tag: "CALM & RESTORATION",
    aroma: "Soft • Floral • Herbaceous",
    context:
      "A comforting aroma chosen for evening wind-down, mindful breathing, and tranquil home spaces.",
    badgeClass: "oil-badge-lavender",
  },
  {
    name: "Peppermint",
    tag: "FOCUS & VITALITY",
    aroma: "Fresh • Cooling • Invigorating",
    context:
      "Crisp and revitalizing, ideal for daytime focus rituals, clear breathing, and afternoon refreshment.",
    badgeClass: "oil-badge-peppermint",
  },
  {
    name: "Frankincense",
    tag: "GROUNDING & CENTERING",
    aroma: "Resinous • Grounding • Rich",
    context:
      "A deeply grounding botanical aroma for meditation, reflective pauses, and quiet stillness.",
    badgeClass: "oil-badge-frankincense",
  },
  {
    name: "Wild Orange",
    tag: "UPLIFT & RADIANCE",
    aroma: "Bright • Citrus • Uplifting",
    context:
      "Energizing citrus brightness to uplift the senses, brighten morning routines, and enliven your room.",
    badgeClass: "oil-badge-orange",
  },
];

const TRUST_METRICS = [
  {
    num: "28+",
    unit: "Years",
    tag: "VERIFIED LEADERSHIP",
    title: "HR & Business Leadership",
    description:
      "Founded by Richa Ramola, bringing nearly three decades of corporate HR and organisational leadership experience to people-first wellness education.",
  },
  {
    num: "1,200+",
    unit: "Learners",
    tag: "SUBSTANTIATED IMPACT",
    title: "Workshop Attendees & Participants",
    description:
      "Individuals, corporate teams, and wellness practitioners guided through hands-on educational workshops and sensory wellness sessions.",
  },
  {
    num: "100%",
    unit: "Purity Focus",
    tag: "BOTANICAL STANDARDS",
    title: "Certified Aromatherapist Standards",
    description:
      "Strict adherence to gas chromatography / mass spectrometry (GC/MS) purity testing benchmarks, carrier oil safety, and non-medical boundaries.",
  },
  {
    num: "3",
    unit: "Curriculum Tiers",
    tag: "STRUCTURED PATHWAY",
    title: "Level 1 to Level 3 Education",
    description:
      "A progressive, evidence-informed framework from foundational essential-oil safety to advanced professional practitioner application.",
  },
];

const COMPLIANT_TESTIMONIALS = [
  {
    quote:
      "Richa's workshop transformed how I approach my evening routine. Learning the science of dilution and simple aromatic breathing gave me a practical ritual I look forward to every night after intense workdays.",
    author: "Ananya S.",
    role: "HR Director & Corporate Workshop Participant",
    focus: "Workplace Wellbeing & Evening Rituals",
  },
  {
    quote:
      "As a yoga instructor, I wanted to understand essential oils responsibly without pseudoscientific hype. The Level 3 education gave me clear dilution standards, scent layering principles, and ethical boundaries for my studio classes.",
    author: "Vikram M.",
    role: "Yoga Studio Founder & Movement Teacher",
    focus: "Practitioner Education & Space Design",
  },
  {
    quote:
      "The one-to-one consultation was refreshingly educational. No product pushing — just thoughtful, evidence-informed guidance on building mindful micro-pauses and grounding aromas into my hectic schedule.",
    author: "Priya K.",
    role: "Senior Project Lead",
    focus: "Personal Consultation & Daily Habits",
  },
];

const WELLNESS_TOUCHPOINTS = [
  {
    icon: "📖",
    step: "01",
    title: "EDUCATION",
    description: "Learn essential-oil fundamentals and responsible application.",
    linkText: "Explore Education",
    href: "/education",
  },
  {
    icon: "✨",
    step: "02",
    title: "EXPERIENCES",
    description: "Participate in workshops, sensory wellness experiences and retreats.",
    linkText: "Explore Experiences",
    href: "/education",
  },
  {
    icon: "🌿",
    step: "03",
    title: "CONSULTATION",
    description: "Receive personalised guidance for your wellness journey.",
    linkText: "Book Consultation",
    href: "/consultation",
  },
  {
    icon: "🎓",
    step: "04",
    title: "PROFESSIONAL PRACTICE",
    description: "Build knowledge that can complement your existing wellness practice.",
    linkText: "For Professionals",
    href: "/professionals",
  },
  {
    icon: "🏛️",
    step: "05",
    title: "CORPORATE WELLNESS",
    description: "Bring practical wellbeing education into organisations.",
    linkText: "Workplace Wellness",
    href: "/corporate-wellness",
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

      {/* 3. DISCOVER YOUR PATHWAY */}
      <section className="section pathway-discovery-section" id="discover-pathway">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">CHOOSE YOUR STARTING POINT</span>
            <h2>
              Discover your <em>pathway.</em>
            </h2>
          </div>

          <div className="pathway-discovery-grid">
            {DISCOVER_PATHWAYS.map((pathway, idx) => (
              <div key={idx} className="pathway-discovery-card">
                <div className="pathway-card-header">
                  <span className="pathway-step-tag">PATHWAY {pathway.step}</span>
                  <h3 className="pathway-title">{pathway.title}</h3>
                </div>
                <p className="pathway-desc">{pathway.description}</p>
                <div className="pathway-card-footer">
                  <Link href={pathway.href} className="btn pathway-cta-btn">
                    {pathway.cta} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ESSENTIAL OILS, APPROACHED DIFFERENTLY */}
      <section className="section bg-cream-soft approached-section" id="approached-differently">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">OUR BOTANICAL PHILOSOPHY</span>
            <h2>
              Essential oils, <em>approached differently.</em>
            </h2>
            <p className="section-lead">
              Essential oils are highly concentrated botanical extracts. We believe they deserve both appreciation and respect.
            </p>
          </div>

          <div className="approached-grid">
            {APPROACHED_DIFFERENTLY_PILLARS.map((pillar, idx) => (
              <div key={idx} className="approached-card">
                <span className="approached-icon" aria-hidden="true">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center approached-action">
            <Link href="/education" className="btn btn-primary">
              Explore Essential Oil Education <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OUR ESSENTIAL OILS */}
      <section className="section explore-oils-section" id="featured-oils">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">THE ESSENTIAL COLLECTION</span>
            <h2>
              Explore our <em>essential oils.</em>
            </h2>
            <p className="section-lead">
              From single botanical oils to carefully selected blends, discover products that can become part of your personal wellness rituals.
            </p>
          </div>

          <div className="featured-oils-grid">
            {FEATURED_OILS.map((oil, idx) => (
              <div key={idx} className="featured-oil-card">
                <div className="featured-oil-top">
                  <span className={`featured-oil-badge ${oil.badgeClass}`}>{oil.tag}</span>
                  <h3>{oil.name}</h3>
                  <p className="oil-aroma-line">
                    <span className="aroma-label">Aroma:</span> {oil.aroma}
                  </p>
                </div>
                <p className="oil-context">{oil.context}</p>
              </div>
            ))}
          </div>

          <div className="explore-oils-footer text-center">
            <div className="explore-oils-action">
              <Link href="/products" className="btn btn-primary">
                Explore the Collection <span>→</span>
              </Link>
            </div>
            <p className="explore-oils-microcopy">
              <span className="microcopy-glyph" aria-hidden="true">✦</span>
              Product descriptions focus on aroma, usage context and responsible wellness applications rather than medical outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PERSONAL GUIDANCE */}
      <section className="section bg-cream-soft personal-guidance-section" id="guidance">
        <div className="container">
          <div className="personal-guidance-wrapper">
            <div className="personal-guidance-content">
              <span className="eyebrow">ONE-TO-ONE SUPPORT</span>
              <h2>
                Sometimes you don&apos;t need more information. <em>You need someone to help you make sense of it.</em>
              </h2>
              <p className="guidance-lead">
                Our one-to-one wellness consultations help you understand essential oils, explore appropriate ways of incorporating them into your routine and develop practical wellness rituals aligned with your lifestyle and goals.
              </p>

              <div className="guidance-points">
                <div className="guidance-point-item">
                  <span className="guidance-point-check" aria-hidden="true">✓</span>
                  <span>Personalized daily rhythm & sensory routine evaluation</span>
                </div>
                <div className="guidance-point-item">
                  <span className="guidance-point-check" aria-hidden="true">✓</span>
                  <span>Dilution, responsible topical care & diffusion guidance</span>
                </div>
                <div className="guidance-point-item">
                  <span className="guidance-point-check" aria-hidden="true">✓</span>
                  <span>Evening nervous system rest & mindful pause rituals</span>
                </div>
                <div className="guidance-point-item">
                  <span className="guidance-point-check" aria-hidden="true">✓</span>
                  <span>Non-medical, evidence-informed wellness education</span>
                </div>
              </div>

              <div className="guidance-actions">
                <GoogleFormLink type="consultation" className="btn btn-primary">
                  Book a Consultation <span>→</span>
                </GoogleFormLink>
                <Link href="/consultation" className="btn btn-outline">
                  About Consultations <span>→</span>
                </Link>
              </div>
            </div>

            <div className="personal-guidance-visual">
              <div className="guidance-image-frame">
                <img
                  src="/assets/hero-image.jpg"
                  alt="Personal wellness consultation and calming botanical setting"
                  className="guidance-image"
                />
              </div>
              <div className="guidance-floating-quote">
                <span className="quote-glyph" aria-hidden="true">“</span>
                <p>Informed choices create lasting wellness — one personal ritual at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEET RICHA RAMOLA */}
      <section className="section founder-section" id="meet-richa">
        <div className="container founder-grid">
          <FounderVisual />

          <div className="founder-copy">
            <span className="eyebrow">ABOUT THE FOUNDER</span>
            <h2>
              From leadership and people to <em>wellness and prevention.</em>
            </h2>
            <p>
              With nearly three decades of leadership experience across Human Resources and business
              operations, Richa brings a people-centred perspective to wellness.
            </p>
            <p>
              As Founder of Harmony of Cells, she combines her experience in leadership, education
              and people development with her passion for nature-based wellness.
            </p>
            <p>
              Her work focuses on helping individuals, families, wellness professionals and organisations
              approach essential oils and everyday wellness with greater understanding and responsibility.
            </p>
            <div className="founder-actions">
              <Link href="/about" className="btn btn-primary">
                Meet Richa <span>→</span>
              </Link>
              <GoogleFormLink type="consultation" className="btn btn-outline">
                Connect Directly <span>→</span>
              </GoogleFormLink>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUST & SOCIAL PROOF */}
      <section className="section trust-social-proof-section" id="trust">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">TRUST &amp; SOCIAL PROOF</span>
            <h2>
              Grounded in experience, education and <em>responsible practice.</em>
            </h2>
            <p className="section-lead">
              We believe trust is earned through transparency. At Harmony of Cells, education precedes recommendation — with verified credentials, substantiated workshop numbers, and responsible wellness practices.
            </p>
          </div>

          {/* Substantiated Metrics Grid */}
          <div className="trust-metrics-grid">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="trust-metric-card">
                <span className="trust-metric-tag">{metric.tag}</span>
                <div className="trust-metric-number">
                  <span className="metric-val">{metric.num}</span>
                  {metric.unit && <span className="metric-unit">{metric.unit}</span>}
                </div>
                <h3>{metric.title}</h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Workshop Experience & Participation */}
          <div className="trust-workshop-banner">
            <div className="trust-workshop-visual">
              <img
                src="/assets/hero-image.jpg"
                alt="Interactive essential oil workshop and participant learning session"
                className="trust-workshop-img"
              />
              <div className="trust-workshop-badge">
                <span className="workshop-badge-title">WORKSHOP EXPERIENCE</span>
                <p>Interactive • Botanical • Sensory Learning</p>
              </div>
            </div>
            <div className="trust-workshop-content">
              <span className="eyebrow">WORKSHOP &amp; EVENT PARTICIPATION</span>
              <h3>Interactive learning that builds genuine understanding.</h3>
              <p>
                Our interactive workshops and sensory sessions take participants beyond generic product tips. We explore botanical distillation, sensory space design, safe topical ratios, and conscious breathing practices in a supportive, hands-on environment.
              </p>
              <ul className="trust-checklist">
                <li>
                  <span className="check-icon">✓</span>
                  <span>Interactive blending &amp; sensory evaluation sessions</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Exact dilution charts and skin safety protocols provided</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Corporate wellness offsites and practitioner cohorts</span>
                </li>
              </ul>
              <div className="trust-workshop-actions">
                <Link href="/education" className="btn btn-outline">
                  Explore Education &amp; Workshops <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Screened, Compliant Testimonials (Focused on Education & Routines) */}
          <div className="trust-testimonials-wrapper">
            <div className="section-heading text-center max-w-2xl mx-auto mb-8">
              <span className="eyebrow">WHAT LEARNERS SAY</span>
              <h3 className="testimonials-heading">Education, experience and practical routines.</h3>
            </div>

            <div className="trust-testimonials-grid">
              {COMPLIANT_TESTIMONIALS.map((item, idx) => (
                <article key={idx} className="trust-testimonial-card">
                  <div className="testimonial-header">
                    <span className="quote-mark" aria-hidden="true">“</span>
                    <span className="testimonial-focus">{item.focus}</span>
                  </div>
                  <blockquote className="testimonial-quote">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="testimonial-author-block">
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>

            <p className="testimonials-compliance-disclaimer text-center">
              ✦ Feedback is focused on education, daily wellness rituals, and personal experiences. In accordance with ethical standards, we never publish disease-treatment or health-outcome claims.
            </p>
          </div>

          {/* Research & Evidence Callout Banner */}
          <div className="quote-banner trust-evidence-callout-banner">
            <p className="quote-text">
              &ldquo;We don&apos;t believe in exaggerated claims. We believe in helping you understand
              <strong> WHAT WE KNOW, WHAT RESEARCH SUGGESTS, AND WHAT WE DON&apos;T KNOW.</strong>&rdquo;
            </p>
            <div className="trust-evidence-action">
              <Link href="/research-and-evidence" className="btn btn-primary">
                Explore Research &amp; Evidence Page <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WELLNESS THAT CAN BE LEARNED, EXPERIENCED AND SHARED */}
      <section className="section bg-cream-soft ecosystem-section" id="ecosystem">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">HOLISTIC WELLNESS ECOSYSTEM</span>
            <h2>
              Wellness that can be <em>learned, experienced and shared.</em>
            </h2>
          </div>

          <div className="ecosystem-grid">
            {WELLNESS_TOUCHPOINTS.map((item, idx) => (
              <div key={idx} className="ecosystem-card">
                <div className="ecosystem-card-header">
                  <span className="ecosystem-step">{item.step}</span>
                  <span className="ecosystem-icon" aria-hidden="true">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="ecosystem-card-footer">
                  <Link href={item.href} className="ecosystem-link">
                    {item.linkText} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="section final-cta-section" id="final-cta">
        <div className="container">
          <div className="final-cta-card">
            <span className="eyebrow final-eyebrow">YOUR WELLNESS JOURNEY STARTS WITH UNDERSTANDING.</span>
            <h2>
              Explore. Learn. <em>Experience.</em>
            </h2>
            <div className="final-actions">
              <Link href="/education" className="btn btn-primary final-btn-primary">
                Start Your Journey <span>→</span>
              </Link>
              <GoogleFormLink type="consultation" className="btn btn-outline final-btn-secondary">
                Book your First Consultation <span>→</span>
              </GoogleFormLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
