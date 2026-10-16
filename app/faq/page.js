import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Harmony of Cells",
  description:
    "Find straightforward answers about Harmony of Cells, our nervous system wellness education, consultations, corporate programs, safety standards, and product enquiries.",
};

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
    a: "Individuals can explore our offerings in several ways: reading our free 7-Day Supportive Wellness Routine guide, browsing our educational wellness pillars (Sleep, Stress, Women's Wellness, Healthy Ageing), booking a one-on-one personal wellness consultation, or enrolling in our structured Level 1 ('Foundations') and Level 2 ('Everyday Application') education workshops.",
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

export default function FAQPage() {
  // Generate valid JSON-LD Structured Data for search engines
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
    <main className="faq-page">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container faq-hero-content">
          <span className="eyebrow">HELP & CLARITY</span>
          <h1>Frequently Asked <em>Questions.</em></h1>
          <p className="faq-hero-subhead">
            Clear, honest answers about our wellness philosophy, delivery channels, education programs,
            safety standards, and product enquiries.
          </p>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="section bg-cream-soft">
        <div className="container max-w-4xl">
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
    </main>
  );
}
