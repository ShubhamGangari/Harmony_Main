import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Wellness Resources & Practical Guides | Harmony of Cells",
  description:
    "Explore educational wellness resources, practical guides, safety frameworks, and evidence-informed insights for everyday nervous system wellbeing.",
};

const CONTENT_PILLARS = [
  {
    icon: "🧠",
    tag: "METHOD & PHILOSOPHY",
    title: "Nervous System Wellness",
    description:
      "Explore the 5R Method—Rest, Regulate, Restore, Resilience, and Ritual—to build supportive conditions for everyday recovery and pause.",
    href: "/approach",
    cta: "Explore Our Method",
  },
  {
    icon: "🌅",
    tag: "DAILY RHYTHMS",
    title: "Lifestyle & Daily Routines",
    description:
      "Learn how small, consistent habits—from morning natural light exposure to evening boundaries—help shape sustainable daily wellbeing.",
    href: "/individuals",
    cta: "Explore Personal Wellness",
  },
  {
    icon: "🌙",
    tag: "REST & RECOVERY",
    title: "Sleep & Evening Routines",
    description:
      "Understand the environmental and lifestyle factors that support restful sleep, restorative downtime, and calm evening transitions.",
    href: "/wellness#rest-and-sleep",
    cta: "Explore Rest & Sleep",
  },
  {
    icon: "🌿",
    tag: "SENSORY PRACTICES",
    title: "Sensory & Ambient Wellness",
    description:
      "Discover the relationship between scent, breath, and calm through mindful aromatic rituals and intentional living spaces.",
    href: "/wellness#everyday-wellness",
    cta: "Explore Sensory Wellness",
  },
  {
    icon: "💧",
    tag: "BOTANICAL EDUCATION",
    title: "Essential Oil Fundamentals",
    description:
      "Master the foundations of pure botanical extracts, carrier oil dilution ratios, and responsible daily applications.",
    href: "/education",
    cta: "Explore Education Pathways",
  },
  {
    icon: "🌸",
    tag: "LIFE STAGES",
    title: "Women's Lifestyle Wellness",
    description:
      "Explore supportive lifestyle habits, restorative practices, and sensory routines designed around the changing rhythms of women's lives.",
    href: "/wellness#womens-wellness",
    cta: "Explore Women's Wellness",
  },
  {
    icon: "🏢",
    tag: "ORGANISATIONAL WELLBEING",
    title: "Workplace Preventive Wellness",
    description:
      "Practical resilience education, sensory workspace concepts, and supportive recovery practices for modern corporate teams.",
    href: "/corporate-wellness",
    cta: "Explore Corporate Programs",
  },
  {
    icon: "🌱",
    tag: "SUSTAINABLE HABITS",
    title: "Healthy Ageing & Longevity",
    description:
      "Evidence-informed lifestyle practices focused on sleep quality, gentle movement, cognitive engagement, and lifelong vitality.",
    href: "/wellness#healthy-ageing",
    cta: "Explore Healthy Ageing",
  },
];

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container resources-hero-content">
          <span className="eyebrow">KNOWLEDGE • RITUAL • PRACTICE</span>
          <h1>Wellness Resources & <em>Practical Guides.</em></h1>
          <p className="resources-hero-subhead">
            We believe that genuine wellbeing begins with understanding. Explore our curated
            collection of practical routines, safety frameworks, and educational insights to help
            you make informed choices for everyday life.
          </p>
        </div>
      </section>

      {/* Featured Lead Magnet Banner */}
      <section className="section bg-cream-soft">
        <div className="container">
          <div className="featured-guide-card">
            <div className="featured-guide-content">
              <span className="featured-badge">FEATURED PRACTICAL GUIDE</span>
              <h2>The 7-Day Supportive Wellness Routine</h2>
              <p className="featured-guide-subtitle">
                Seven simple, accessible practices for rest, relaxation, sensory awareness, and everyday wellbeing.
              </p>
              <p className="featured-guide-desc">
                Designed to be integrated gently into busy schedules, this seven-day sequence explores
                morning light, intentional pauses, work-to-rest transitions, sensory grounding, mindful movement,
                and digital boundaries. Free to read online or print.
              </p>
              <div className="featured-guide-actions">
                <Link
                  href="/resources/7-day-wellness-routine"
                  className="btn btn-primary"
                >
                  Explore the 7-Day Routine <span>→</span>
                </Link>
                <Link
                  href="/resources/7-day-wellness-routine#guide-print"
                  className="btn btn-outline"
                >
                  Print / Save Guide
                </Link>
              </div>
            </div>
            <div className="featured-guide-visual" aria-hidden="true">
              <div className="guide-visual-badge">7 DAYS</div>
              <ul className="guide-preview-days">
                <li><span>01</span> Morning Light & Daily Rhythm</li>
                <li><span>02</span> Breath & Mindful Pause</li>
                <li><span>03</span> Work to Rest Transition</li>
                <li><span>04</span> Sensory Grounding</li>
                <li><span>05</span> Gentle Movement</li>
                <li><span>06</span> Digital Boundaries</li>
                <li><span>07</span> Creating Your Ritual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Educational Hub Trio */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">ESSENTIAL FOUNDATIONS</span>
            <h2>Foundational Frameworks & Transparency</h2>
            <p className="section-subhead">
              Key resources to help you understand our evidence philosophy, safety standards, and answers to common questions.
            </p>
          </div>

          <div className="resources-foundations-grid">
            <article className="foundation-box-card">
              <span className="foundation-box-icon" aria-hidden="true">🛡️</span>
              <span className="foundation-box-tag">SAFETY & RESPONSIBILITY</span>
              <h3>Essential Oil Safety Guide</h3>
              <p>
                Twelve comprehensive dimensions of safe botanical use, including dilution guidance,
                phototoxicity, pregnancy precautions, pet safety, and when to seek healthcare advice.
              </p>
              <Link href="/essential-oil-safety" className="card-link">
                Read Safety Standards <span>→</span>
              </Link>
            </article>

            <article className="foundation-box-card">
              <span className="foundation-box-icon" aria-hidden="true">🔬</span>
              <span className="foundation-box-tag">EVIDENCE PHILOSOPHY</span>
              <h3>Research & Evidence Overview</h3>
              <p>
                An honest, transparent view of what science confirms, what preliminary research suggests,
                and what remains unproven in aromatherapy and lifestyle wellness.
              </p>
              <Link href="/research-evidence" className="card-link">
                Explore Our Philosophy <span>→</span>
              </Link>
            </article>

            <article className="foundation-box-card">
              <span className="foundation-box-icon" aria-hidden="true">💡</span>
              <span className="foundation-box-tag">FREQUENT QUESTIONS</span>
              <h3>Frequently Asked Questions</h3>
              <p>
                Straightforward answers about our services, education programs, consultation boundaries,
                and how to enquire about certified botanical products.
              </p>
              <Link href="/faq" className="card-link">
                Browse Full FAQ <span>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 8 Content Pillars Resource Grid */}
      <section className="section bg-cream-soft">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">EXPLORE BY TOPIC</span>
            <h2>Browse Educational Wellness Topics</h2>
            <p className="section-subhead">
              Access focused educational pathways across the core pillars of nervous system and lifestyle wellness.
            </p>
          </div>

          <div className="resources-topics-grid">
            {CONTENT_PILLARS.map((pillar) => (
              <article key={pillar.title} className="resource-pillar-card">
                <div className="resource-card-top">
                  <span className="resource-card-icon" aria-hidden="true">{pillar.icon}</span>
                  <span className="resource-card-tag">{pillar.tag}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <Link href={pillar.href} className="card-link">
                  {pillar.cta} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Conversion CTA */}
      <section className="section resources-cta-section">
        <div className="container text-center">
          <span className="eyebrow">PERSONAL GUIDANCE</span>
          <h2>Looking for Personalized Wellness Guidance?</h2>
          <p className="section-subhead max-w-2xl mx-auto">
            Our one-to-one educational consultations provide tailored routines aligned with your unique lifestyle,
            sleep patterns, and self-care goals.
          </p>
          <div className="resources-cta-buttons">
            <GoogleFormLink type="consultation" className="btn btn-primary">
              Request a Consultation
            </GoogleFormLink>
            <Link href="/products" className="btn btn-outline">
              Explore Botanical Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
