import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";
import FounderVisual from "../../components/FounderVisual";

export const metadata = {
  title: "Meet Richa Ramola — Founder & Wellness Educator | Harmony of Cells",
  description:
    "A career built around people. A new chapter built around wellbeing. Discover Richa Ramola's journey bridging multinational leadership with nature-based wellness and essential-oil education.",
};

const KEY_AREAS = [
  {
    step: "01",
    icon: "📖",
    title: "Essential oil education",
    description:
      "Understanding what essential oils are, botanical chemistry, safe dilution standards, and responsible application.",
    linkText: "Explore Education",
    href: "/education",
  },
  {
    step: "02",
    icon: "🌿",
    title: "Aromatherapy and sensory wellness",
    description:
      "Creating intentional olfactory anchors for nervous-system calming, mindful pause rituals, and restorative spaces.",
    linkText: "Explore Botanicals",
    href: "/products",
  },
  {
    step: "03",
    icon: "✨",
    title: "Wellness workshops",
    description:
      "Hands-on sensory workshops and immersive educational sessions for community groups and everyday practitioners.",
    linkText: "View Workshops",
    href: "/education",
  },
  {
    step: "04",
    icon: "🌱",
    title: "Individual wellness consultations",
    description:
      "One-to-one personalised guidance helping you understand essential oils and build sustainable routines aligned with your goals.",
    linkText: "Book Consultation",
    href: "/consultation",
  },
  {
    step: "05",
    icon: "🎓",
    title: "Practitioner education",
    description:
      "Equipping yoga teachers, therapists, bodyworkers, and coaches with responsible, non-commercial botanical knowledge.",
    linkText: "Professional Pathway",
    href: "/professionals",
  },
  {
    step: "06",
    icon: "🏛️",
    title: "Corporate wellness experiences",
    description:
      "Bringing preventive wellbeing, burnout awareness, and sensory pause rituals into multinational organisations.",
    linkText: "Workplace Wellness",
    href: "/corporate-wellness",
  },
  {
    step: "07",
    icon: "🏕️",
    title: "Retreats and experiential learning",
    description:
      "Nature immersion, sensory retreats, and restorative pause practices designed to replenish mental and nervous stamina.",
    linkText: "Inquire About Retreats",
    href: "/consultation",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero about-hero-section" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">ABOUT / FOUNDER PAGE</span>
            <h1>
              MEET <em>RICHA RAMOLA</em>
            </h1>
            <p className="hero-supporting-title">
              A career built around people. A new chapter built around wellbeing.
            </p>
            <p className="hero-description">
              For nearly three decades, Richa Ramola worked in Human Resources and business leadership
              across the services sector, working with multinational and growth-oriented organisations.
            </p>

            <div className="hero-actions">
              <a href="#story" className="btn btn-primary">
                Explore Richa&apos;s Work <span>↓</span>
              </a>
              <GoogleFormLink type="consultation" className="btn btn-outline hero-secondary-btn">
                Connect Directly <span>→</span>
              </GoogleFormLink>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>People-centred leadership • Nature-based wellness education.</p>
            </div>
          </div>

          <div className="hero-visual">
            <FounderVisual />
          </div>
        </div>
      </section>

      {/* 2. THE JOURNEY & LEADERSHIP PERSPECTIVE */}
      <section className="section bg-cream-soft about-story-section" id="story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-copy">
              <span className="eyebrow">HER PROFESSIONAL JOURNEY</span>
              <h2>
                From corporate leadership to <em>grounded wellbeing.</em>
              </h2>
              <p className="story-paragraph">
                For nearly three decades, Richa Ramola worked in Human Resources and business leadership
                across the services sector, working with multinational and growth-oriented organisations.
              </p>
              <p className="story-paragraph">
                Her professional journey gave her a deep understanding of people — how they work, adapt,
                lead, perform and navigate the demands of modern life.
              </p>
              <p className="story-paragraph">
                Over time, her interest in wellbeing evolved from a personal curiosity into a professional calling.
              </p>
              <p className="story-paragraph">
                Today, as Founder of Harmony of Cells, Richa brings together her experience in leadership
                and people development with her work in essential oils, aromatherapy and nature-based wellness education.
              </p>
            </div>

            <div className="about-story-callout-card">
              <div className="callout-inner">
                <span className="callout-glyph" aria-hidden="true">“</span>
                <blockquote>
                  People make better wellness choices when they are given better information.
                </blockquote>
                <p className="callout-sub">
                  Harmony of Cells was created to make that information practical, responsible and accessible.
                </p>
                <div className="callout-footer">
                  <strong>Richa Ramola</strong>
                  <span>Founder, Harmony of Cells</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY AREAS OF FOCUS */}
      <section className="section about-key-areas-section" id="areas">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">AREAS OF FOCUS</span>
            <h2>
              Key areas of <em>practice &amp; education.</em>
            </h2>
            <p className="section-lead">
              Bringing practical wellbeing education and sensory wellness experiences into homes, practices, and workplaces.
            </p>
          </div>

          <div className="key-areas-grid">
            {KEY_AREAS.map((area, idx) => (
              <div key={idx} className="key-area-card">
                <div className="key-area-header">
                  <span className="key-area-step">{area.step}</span>
                  <span className="key-area-icon" aria-hidden="true">{area.icon}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="key-area-footer">
                  <Link href={area.href} className="key-area-link">
                    {area.linkText} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA: EXPLORE RICHA'S WORK */}
      <section className="section bg-cream-soft about-cta-section" id="cta">
        <div className="container">
          <div className="final-cta-card">
            <span className="eyebrow final-eyebrow">CONNECT &amp; LEARN</span>
            <h2>
              Explore Richa&apos;s <em>Work.</em>
            </h2>
            <p className="final-subhead">
              People make better wellness choices when they are given better information.
            </p>
            <div className="final-actions">
              <Link href="/education" className="btn btn-primary final-btn-primary">
                Explore Education Programs <span>→</span>
              </Link>
              <GoogleFormLink type="consultation" className="btn btn-outline final-btn-secondary">
                Book a Consultation <span>→</span>
              </GoogleFormLink>
              <Link href="/corporate-wellness" className="btn btn-outline final-btn-secondary">
                Corporate Wellness <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
