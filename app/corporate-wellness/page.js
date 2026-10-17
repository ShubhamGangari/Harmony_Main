import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";
import FounderVisual from "../../components/FounderVisual";

export const metadata = {
  title: "Corporate Wellness | Wellbeing at Work Starts with People | Harmony of Cells",
  description:
    "Modern workplaces demand energy, focus, adaptability and resilience. Our corporate wellness experiences introduce practical, accessible approaches to everyday wellbeing through education, sensory experiences and mindful wellness practices.",
};

const CORPORATE_OFFERINGS = [
  {
    step: "01",
    tagline: "Culture & Daily Vitality",
    title: "Workplace Wellbeing",
    description:
      "Introducing practical, human-centred wellbeing habits, intentional meeting transitions, and mindful desk micro-pauses that nurture a healthy, engaged team culture.",
    points: [
      "Mindful workday micro-pauses & desk resets",
      "Conscious meeting transitions & boundary agreements",
      "Building supportive, sustainable team rhythms",
    ],
  },
  {
    step: "02",
    tagline: "Resilience & Decompression",
    title: "Stress & Relaxation Education",
    description:
      "Grounded education on nervous-system awareness, recognizing cognitive burnout warning signs early, and somatic techniques to down-regulate workday stress.",
    points: [
      "Understanding nervous system overdrive & burnout signs",
      "Practical somatic pause techniques during high pressure",
      "Sustainable cognitive recovery during intense delivery cycles",
    ],
  },
  {
    step: "03",
    tagline: "Olfactory Calming & Focus",
    title: "Sensory Wellness Experiences",
    description:
      "Interactive olfactory sessions introducing pure botanical aromas, guided breathing, and ambient space design to reset mental fatigue and enhance workplace presence.",
    points: [
      "Olfactory cues for mental clarity and afternoon energy",
      "Ambient workspace scent diffusion standards",
      "Hands-on botanical sensory pause moments",
    ],
  },
  {
    step: "04",
    tagline: "Supportive Daily Rhythms",
    title: "Women's Wellness",
    description:
      "Dedicated educational sessions addressing female professional wellbeing, hormonal lifecycle awareness, energy management, and supportive daily rituals in demanding careers.",
    points: [
      "Navigating professional fatigue & sustainable pacing",
      "Hormonal rhythm awareness and self-care tools",
      "Creating inclusive, empathetic workplace support",
    ],
  },
  {
    step: "05",
    tagline: "Detachment & Restorative Sleep",
    title: "Sleep & Recovery Education",
    description:
      "Practical frameworks helping busy professionals detach from digital overdrive in the evening, establish calming wind-down rituals, and achieve deep, restorative sleep.",
    points: [
      "Evening mental detachment & digital boundary setting",
      "Circadian sleep hygiene and bedroom sensory environments",
      "Sustaining daytime clarity without over-caffeination",
    ],
  },
  {
    step: "06",
    tagline: "Tailored Corporate Experiences",
    title: "Custom Wellness Programs",
    description:
      "Bespoke masterclasses, executive offsites, wellness days, and retreat facilitation tailored precisely to your organisation's unique schedule, culture, and strategic goals.",
    points: [
      "60-minute masterclasses, half-day, or full-day formats",
      "Executive leadership offsite and retreat facilitation",
      "On-site, hybrid, and remote workforce customization",
    ],
  },
];

export default function CorporateWellnessPage() {
  return (
    <main className="corporate-wellness-page">
      {/* 1. HERO SECTION */}
      <section className="hero service-hero corporate-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">CORPORATE WELLNESS</span>
            <h1>
              Wellbeing at work starts with <em>people.</em>
            </h1>
            <p className="hero-supporting-title">
              Modern workplaces demand energy, focus, adaptability and resilience. Our corporate wellness experiences introduce practical, accessible approaches to everyday wellbeing through education, sensory experiences and mindful wellness practices.
            </p>
            <p className="hero-description">
              Backed by nearly three decades of corporate HR and leadership experience, we design workplace wellness programs that bridge business realities with human wellbeing — helping teams thrive without burning out.
            </p>

            <div className="hero-actions">
              <GoogleFormLink
                type="consultation"
                item="Bring Wellness to Your Workplace"
                className="btn btn-primary"
              >
                Bring Wellness to Your Workplace <span>→</span>
              </GoogleFormLink>
              <a href="#offerings" className="btn btn-outline hero-secondary-btn">
                Explore Offerings <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <p>Founded on nearly three decades of corporate HR &amp; business leadership experience.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-image.jpg"
                alt="Corporate workplace wellness and sensory experience"
                className="hero-image"
              />
              <div className="hero-image-card">
                <span className="mini-label">WORKPLACE WELLBEING</span>
                <strong>People. And the workplace.</strong>
                <small>Education • Sensory Experiences • Mindful Rituals</small>
              </div>
            </div>
            <div className="floating-badge">
              <span>✦</span>
              <small>
                WORKPLACE<br />
                WELLBEING
              </small>
            </div>
          </div>
        </div>

        <div className="container announcement-container">
          <div className="announcement">
            <span className="announcement-symbol">✦</span>
            <span>
              Workplace Wellbeing • Stress &amp; Relaxation • Sensory Experiences • Women&apos;s Wellness • Sleep &amp; Recovery • Custom Programs
            </span>
          </div>
        </div>
      </section>

      {/* 2. OFFERINGS SECTION */}
      <section className="section corporate-offerings-section" id="offerings">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">PRACTICAL &amp; ACCESSIBLE PROGRAMS</span>
            <h2>Offerings</h2>
            <p className="section-lead">
              Modern workplaces demand energy, focus, adaptability and resilience. Our corporate wellness experiences introduce practical, accessible approaches to everyday wellbeing through education, sensory experiences and mindful wellness practices.
            </p>
          </div>

          <div className="corporate-offerings-grid">
            {CORPORATE_OFFERINGS.map((offering) => (
              <article key={offering.step} className="corporate-offering-card">
                <div className="offering-card-top">
                  <span className="offering-card-step">{offering.step}</span>
                  <span className="offering-card-tagline">{offering.tagline}</span>
                </div>

                <h3>{offering.title}</h3>
                <p className="offering-card-description">{offering.description}</p>

                <ul className="offering-points-list">
                  {offering.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="point-bullet" aria-hidden="true">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="offering-card-footer">
                  <GoogleFormLink
                    type="consultation"
                    item={`Corporate Wellness Offering: ${offering.title}`}
                    className="btn btn-outline offering-cta-btn"
                  >
                    Inquire About This Offering <span>→</span>
                  </GoogleFormLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY HARMONY OF CELLS? */}
      <section className="section corporate-why-section" id="why-harmony">
        <div className="container">
          <div className="section-heading text-center max-w-3xl mx-auto">
            <span className="eyebrow">THE FOUNDER&apos;S ADVANTAGE</span>
            <h2>Why Harmony of Cells?</h2>
          </div>

          {/* Signature Quote Banner */}
          <div className="quote-banner corporate-quote-banner">
            <p className="quote-text">
              &ldquo;Our founder brings nearly three decades of corporate HR and leadership experience together with her work in wellness education. That means we understand both sides: <strong>People. And the workplace.</strong>&rdquo;
            </p>
          </div>

          <div className="founder-grid corporate-founder-grid">
            <FounderVisual />

            <div className="founder-copy">
              <span className="eyebrow">MEET RICHA RAMOLA</span>
              <h3>A career built around people. A new chapter built around wellbeing.</h3>
              <p>
                For nearly three decades, Richa Ramola worked in Human Resources and business leadership across multinational and growth-oriented organisations. Her professional journey gave her a deep understanding of people — how they work, adapt, lead, perform and navigate the relentless demands of modern life.
              </p>
              <p>
                When wellness initiatives are treated as superficial perks, they fail to create lasting engagement. Because Richa has sat in leadership meetings, managed high-stakes deadlines, and guided diverse workforces, Harmony of Cells programs are designed around business realities: practical, respectful of time, and immediately usable.
              </p>
              <p>
                We bridge leadership and people development with pure botanical essential oils, sensory relaxation, and nature-based wellness education.
              </p>

              <div className="founder-actions">
                <GoogleFormLink
                  type="consultation"
                  item="Corporate Wellness Discovery Call"
                  className="btn btn-primary"
                >
                  Schedule Corporate Discovery <span>→</span>
                </GoogleFormLink>
                <Link href="/about" className="btn btn-outline">
                  Meet Founder Richa Ramola <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCATIONAL & PREVENTIVE SCOPE NOTICE */}
      <section className="section corporate-scope-section">
        <div className="container">
          <div className="method-disclaimer-box" role="note">
            <div className="disclaimer-icon-wrap">
              <span className="disclaimer-badge">EDUCATIONAL SCOPE NOTICE</span>
            </div>
            <div className="disclaimer-content">
              <strong>Workplace Preventive Wellness Scope</strong>
              <p>
                Harmony of Cells corporate wellness programs provide educational workshops, sensory experiences, and preventive self-care practices. They are designed to support employee wellbeing, stress awareness, and healthy daily habits. They do not constitute clinical psychological therapy, psychiatric intervention, or medical treatment, and are intended to complement qualified healthcare and Employee Assistance Programs (EAPs).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="section consultation-section corporate-final-cta-section" id="bring-wellness">
        <div className="container">
          <div className="consultation-wrapper">
            <div className="consultation-content">
              <span className="eyebrow">TRANSFORM YOUR WORKPLACE</span>
              <h2>Bring Wellness to Your Workplace</h2>
              <p className="section-lead">
                Modern workplaces demand energy, focus, adaptability and resilience. Our corporate wellness experiences introduce practical, accessible approaches to everyday wellbeing through education, sensory experiences and mindful wellness practices.
              </p>

              <div className="consultation-points">
                <span>✓ Practical, accessible education teams use immediately</span>
                <span>✓ Grounded in nearly three decades of corporate HR &amp; leadership</span>
                <span>✓ Interactive sensory experiences with pure botanical oils</span>
                <span>✓ Flexible formats: 60-min sessions, lunch &amp; learns, or executive offsites</span>
              </div>

              <div className="consultation-cta-group">
                <GoogleFormLink
                  type="consultation"
                  item="Bring Wellness to Your Workplace"
                  className="btn btn-primary cta-btn-large"
                >
                  Bring Wellness to Your Workplace <span>→</span>
                </GoogleFormLink>
                <Link href="/education" className="btn btn-outline cta-btn-secondary">
                  Explore Essential Oil Education <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
