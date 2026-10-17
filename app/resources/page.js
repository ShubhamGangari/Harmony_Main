import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Wellness Resources, Evidence & FAQ | Harmony of Cells",
  description:
    "Explore educational wellness resources, the 7-Day Supportive Wellness Routine, scientific evidence analysis, safety standards, and frequently asked questions.",
};

const EVIDENCE_LEVELS = [
  {
    tier: "Level 01",
    label: "Traditional Botanical Use",
    description:
      "Centuries of empirical human use across cultures (Ayurveda, traditional European herbology, folk medicine). Invaluable for cultural context, but not equivalent to validated modern clinical efficacy.",
  },
  {
    tier: "Level 02",
    label: "In-Vitro / Laboratory Studies",
    description:
      "Experiments conducted in petri dishes and cell cultures. While useful for identifying isolated chemical constituents, laboratory petri-dish outcomes cannot be directly extrapolated to living human biology.",
  },
  {
    tier: "Level 03",
    label: "Preclinical & Animal Studies",
    description:
      "Biological testing in animal models that demonstrates potential physiological mechanisms. Provides preliminary hypotheses, but never constitutes definitive proof of human clinical outcomes.",
  },
  {
    tier: "Level 04",
    label: "Observational & Human Sensory Trials",
    description:
      "Studies measuring human physiological markers (heart rate, breathing rate, skin conductance) and subjective wellness indices during sensory exposure. Suggests supportive correlations without establishing curative causality.",
  },
  {
    tier: "Level 05",
    label: "Randomized Controlled Trials (RCTs) & Reviews",
    description:
      "The gold standard in clinical science. Where high-quality peer-reviewed clinical trials and systematic reviews exist, conclusions are carefully evaluated within their specific dosage, context, and population scope.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is Harmony of Cells?",
    a: "Harmony of Cells is an education-led wellness platform focused on Nervous System & Lifestyle Wellness. Founded by Richa Ramola—who brings nearly three decades of corporate HR leadership together with specialized wellness education—the platform provides practical guidance, nature-based practices, and sensory experiences to help individuals and organizations cultivate calmer, healthier daily rhythms.",
  },
  {
    q: "What is Nervous System & Lifestyle Wellness?",
    a: "Nervous System & Lifestyle Wellness focuses on the relationship between everyday stress, daily lifestyle habits, and your environment. Through our 5R Method—Rest, Regulate, Restore, Resilience, and Ritual—we teach simple, accessible self-care practices (such as circadian light awareness, breath pauses, work-to-rest transitions, and sensory rituals) that support your body's natural recovery processes. It is a complementary educational approach, not a clinical treatment for neurological disorders.",
  },
  {
    q: "Are Harmony of Cells consultations medical services?",
    a: "No. Our consultations are educational conversations designed to help you explore everyday lifestyle habits, sensory routines, and appropriate essential oil use aligned with your personal goals. We do not diagnose illnesses, prescribe medication, or offer clinical medical treatments. Our educational guidance complements—and never replaces—care from your qualified medical doctor.",
  },
  {
    q: "How can individuals explore wellness education?",
    a: "Individuals can explore our offerings in several ways: reading our free 7-Day Supportive Wellness Routine guide, browsing our educational wellness pillars on our Approach page (Sleep, Stress, Women's Wellness, Healthy Ageing), booking a one-on-one personal wellness consultation, or enrolling in our structured Level 1 ('Foundations') and Level 2 ('Everyday Application') education workshops.",
  },
  {
    q: "Does Harmony of Cells offer workplace wellness for corporate teams?",
    a: "Yes. Drawing on our founder's 28+ years of corporate Human Resources leadership, we offer tailored Workplace Preventive Wellness programs. These include executive stress-awareness workshops, resilience education, sensory workspace design, and practical routines that fit the demanding realities of modern corporate teams.",
  },
  {
    q: "Can wellness professionals learn about essential oils?",
    a: "Yes. We offer dedicated education for yoga teachers, wellness coaches, spa therapists, bodyworkers, and health practitioners. Our curriculum covers botanical chemistry, responsible dilution and topical application, sensory wellness design, and the vital ethical boundaries that keep aromatherapy practice safe and responsible.",
  },
  {
    q: "Where can I find essential oil safety and dilution information?",
    a: "Our complete safety standards are documented on our dedicated Safety & Responsible Use page (/essential-oil-safety). It covers 12 vital dimensions including safe carrier oil dilution, phototoxicity (sun sensitivity), pregnancy and breastfeeding precautions, child and older adult care, pet considerations, and urgent exposure guidance.",
  },
  {
    q: "How can I enquire about or purchase botanical products?",
    a: "To ensure that every customer receives authentic products alongside proper safety and usage education, our catalogue operates on an inquiry-first model. You can enquire directly via our interactive product form on any product card, or chat with our team on WhatsApp (+91 90760 02266). We provide personalized guidance regarding availability, pricing, and appropriate daily rituals.",
  },
];

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
    href: "/approach#rest-and-sleep",
    cta: "Explore Rest & Sleep",
  },
  {
    icon: "🌿",
    tag: "SENSORY PRACTICES",
    title: "Sensory & Ambient Wellness",
    description:
      "Discover the relationship between scent, breath, and calm through mindful aromatic rituals and intentional living spaces.",
    href: "/approach#everyday-wellness",
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
    href: "/approach#womens-wellness",
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
    href: "/approach#healthy-ageing",
    cta: "Explore Healthy Ageing",
  },
];

export default function ResourcesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="resources-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container resources-hero-content">
          <span className="eyebrow">KNOWLEDGE • RITUAL • PRACTICE</span>
          <h1>Wellness Resources & <em>Practical Guides.</em></h1>
          <p className="resources-hero-subhead">
            We believe that genuine wellbeing begins with understanding. Explore our curated
            collection of practical routines, safety frameworks, scientific evidence analysis,
            and answers to common questions to help you make informed choices for everyday life.
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
              <a href="#evidence" className="card-link">
                Explore Evidence Analysis <span>↓</span>
              </a>
            </article>

            <article className="foundation-box-card">
              <span className="foundation-box-icon" aria-hidden="true">💡</span>
              <span className="foundation-box-tag">FREQUENT QUESTIONS</span>
              <h3>Frequently Asked Questions</h3>
              <p>
                Straightforward answers about our services, education programs, consultation boundaries,
                and how to enquire about certified botanical products.
              </p>
              <a href="#faq" className="card-link">
                Browse Full FAQ <span>↓</span>
              </a>
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

      {/* EVIDENCE & SCIENTIFIC INTEGRITY SECTION (MERGED FROM /RESEARCH-EVIDENCE) */}
      <section className="section" id="evidence">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">TRANSPARENCY & SCIENTIFIC INTEGRITY</span>
            <h2>Our Evidence-Informed Wellness Philosophy</h2>
            <p className="section-subhead max-w-3xl mx-auto">
              We believe people make better wellness choices when they are given honest, accurate information.
              Explore what science confirms about sensory practices and essential oils, what preliminary research suggests,
              and what remains unproven.
            </p>
          </div>

          <div className="research-core-rule mb-8">
            <span className="core-rule-icon" aria-hidden="true">⚖️</span>
            <div>
              <strong>Our Core Principle:</strong> We never convert a single isolated study or traditional practice into a commercial medical claim. We educate on supportive lifestyle practices with complete transparency.
            </div>
          </div>

          {/* The Three Truths */}
          <div className="three-truths-grid">
            {/* Pillar 1: What We Know */}
            <article className="truth-card truth-know">
              <div className="truth-card-header">
                <span className="truth-status-tag tag-know">CONFIRMED SCIENCE</span>
                <h3>What We Know</h3>
                <p className="truth-summary">Established physiological, olfactory, and safety facts.</p>
              </div>
              <ul className="truth-list">
                <li>
                  <strong>The Olfactory-Limbic Highway:</strong> Volatile aromatic molecules inhaled through the nose bind directly to olfactory receptor neurons, transmitting signals straight to the olfactory bulb and limbic system (amygdala and hippocampus), bypassing conscious cognitive filters.
                </li>
                <li>
                  <strong>Epidermal Permeability:</strong> Essential oils are fat-soluble (lipophilic) and can penetrate the outer skin barrier. Diluting them with fatty plant carrier oils significantly reduces skin evaporation and mitigates contact irritation.
                </li>
                <li>
                  <strong>Phototoxicity Biology:</strong> Furanocoumarins present in cold-pressed citrus oils (e.g. bergapten) absorb ultraviolet light energy and can cause cellular redness or hyperpigmentation if exposed to sunlight.
                </li>
                <li>
                  <strong>Chemical Complexity:</strong> Each pure essential oil contains dozens to hundreds of distinct organic constituents (monoterpenes, sesquiterpenes, esters, alcohols) that give each botanical its unique character.
                </li>
              </ul>
            </article>

            {/* Pillar 2: What Research Suggests */}
            <article className="truth-card truth-suggests">
              <div className="truth-card-header">
                <span className="truth-status-tag tag-suggests">EMERGING EVIDENCE</span>
                <h3>What Research Suggests</h3>
                <p className="truth-summary">Promising preliminary correlations and sensory observations.</p>
              </div>
              <ul className="truth-list">
                <li>
                  <strong>Aromas & Perceived Relaxation:</strong> Preliminary human sensory trials observe that inhaling soothing botanical scents like Lavender or Bergamot frequently correlates with self-reported relaxation and gentle reductions in subjective daily tension.
                </li>
                <li>
                  <strong>Evening Sleep Rhythms:</strong> Incorporating consistent pleasant aromas into nighttime routines acts as a conditioned stimulus that helps participants self-report quicker transitions into subjective evening relaxation.
                </li>
                <li>
                  <strong>Workplace Focus & Mood:</strong> Preliminary trials in office and hospital environments suggest that diffusing crisp botanical oils (e.g. lemon, peppermint) is associated with enhanced subjective alertness and perceived workplace comfort.
                </li>
                <li>
                  <strong>Context Matters:</strong> Research consistently shows that aromatic outcomes are closely tied to individual conditioned memory, personal preference, and the surrounding physical environment.
                </li>
              </ul>
            </article>

            {/* Pillar 3: What We Don't Know */}
            <article className="truth-card truth-dont">
              <div className="truth-card-header">
                <span className="truth-status-tag tag-dont">CLEAR BOUNDARIES</span>
                <h3>What We Don&apos;t Know</h3>
                <p className="truth-summary">Unsubstantiated claims, commercial exaggerations, and myths.</p>
              </div>
              <ul className="truth-list">
                <li>
                  <strong>No Disease Treatment:</strong> Essential oils do NOT cure, reverse, or treat chronic medical diseases, clinical depression, cancer, diabetes, arthritis, or hormonal disorders.
                </li>
                <li>
                  <strong>Petri Dishes ≠ Humans:</strong> Just because an oil shows antimicrobial activity in a concentrated laboratory test tube does not mean inhaling or diffusing it will &ldquo;disinfect ambient air&rdquo; or cure human bacterial infections.
                </li>
                <li>
                  <strong>Ingestion Risks:</strong> Casual internal consumption lacks long-term human safety documentation and carries risks of mucosal irritation and liver strain.
                </li>
                <li>
                  <strong>No Magic Bullets:</strong> Nature-based practices cannot replace adequate sleep, balanced nutrition, psychological support, or prescribed medical treatment.
                </li>
              </ul>
            </article>
          </div>

          {/* Evidence Hierarchy */}
          <div className="mt-12">
            <div className="section-header text-center">
              <span className="eyebrow">METHODOLOGICAL RIGOUR</span>
              <h3>The Evidence Hierarchy in Botanical Science</h3>
              <p className="section-subhead">
                How we evaluate scientific citations and separate established clinical evidence from early hypotheses.
              </p>
            </div>

            <div className="evidence-pyramid-grid">
              {EVIDENCE_LEVELS.map((tier, idx) => (
                <div key={idx} className="evidence-level-card">
                  <div className="evidence-level-header">
                    <span className="evidence-badge">{tier.tier}</span>
                    <h4>{tier.label}</h4>
                  </div>
                  <p>{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION (MERGED FROM /FAQ) */}
      <section className="section bg-cream-soft" id="faq">
        <div className="container max-w-4xl">
          <div className="section-header text-center">
            <span className="eyebrow">HELP & CLARITY</span>
            <h2>Frequently Asked Questions</h2>
            <p className="section-subhead">
              Clear, honest answers about our wellness philosophy, delivery channels, education programs, safety standards, and product enquiries.
            </p>
          </div>

          <div className="faq-items-list">
            {FAQ_ITEMS.map((item, idx) => (
              <details key={idx} className="faq-accordion-item" open={idx === 0}>
                <summary className="faq-accordion-summary">
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-accordion-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="faq-footer-help-box">
            <h3>Have a question not listed here?</h3>
            <p>
              We are always happy to help. Feel free to connect directly via our contact channels or book an educational session.
            </p>
            <div className="faq-help-actions">
              <GoogleFormLink type="consultation" className="btn btn-primary">
                Book a Consultation
              </GoogleFormLink>
              <a
                href="https://wa.me/919076002266"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                💬 WhatsApp +91 90760 02266
              </a>
            </div>
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
