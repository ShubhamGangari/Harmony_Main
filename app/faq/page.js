import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Harmony of Cells",
  description:
    "Find clear answers about Harmony of Cells, our Nervous System & Lifestyle Wellness philosophy, educational courses, corporate wellness, safety standards, and inquiry-first botanical products.",
};

const FAQ_ITEMS = [
  {
    category: "About & Philosophy",
    q: "What is Harmony of Cells?",
    a: "Harmony of Cells is an education-led wellness platform focused on Nervous System & Lifestyle Wellness. Founded by Richa Ramola—who brings nearly three decades of corporate HR leadership together with specialized wellness education—the platform provides practical guidance, nature-based practices, and sensory experiences to help individuals and organizations cultivate calmer, healthier daily rhythms.",
  },
  {
    category: "About & Philosophy",
    q: "What is Nervous System & Lifestyle Wellness?",
    a: "Nervous System & Lifestyle Wellness focuses on the relationship between everyday stress, daily lifestyle habits, and your environment. Through gentle lifestyle practices—such as circadian light awareness, breath pauses, work-to-rest transitions, and sensory rituals—we teach simple, accessible self-care habits that support your body's natural recovery processes. It is a complementary educational approach, not a clinical treatment for neurological disorders.",
  },
  {
    category: "Services & Scope",
    q: "Are Harmony of Cells consultations medical services?",
    a: "No. Our consultations are educational conversations designed to help you explore everyday lifestyle habits, sensory routines, and appropriate essential oil use aligned with your personal goals. We do not diagnose illnesses, prescribe medication, or offer clinical medical treatments. Our educational guidance complements—and never replaces—care from your qualified medical doctor.",
  },
  {
    category: "Services & Scope",
    q: "How can individuals explore wellness education?",
    a: "Individuals can explore our offerings in several ways: browsing our educational wellness pillars on our About & Approach pages, booking a one-on-one personal wellness consultation, or enrolling in our structured Level 1 ('The Foundations') and Level 2 ('Everyday Wellness') education workshops.",
  },
  {
    category: "Corporate & Professionals",
    q: "Does Harmony of Cells offer workplace wellness for corporate teams?",
    a: "Yes. Drawing on our founder's nearly three decades of corporate Human Resources and business leadership, we offer tailored Corporate Wellness programs. These include workplace wellbeing, stress awareness, sensory workspace experiences, women's wellness, sleep and recovery education, and custom executive offsites.",
  },
  {
    category: "Corporate & Professionals",
    q: "Can wellness professionals learn about essential oils?",
    a: "Yes. Through our Level 3 education framework and dedicated For Wellness Professionals pathway, we offer specialized education for yoga teachers, wellness coaches, spa therapists, bodyworkers, and health practitioners. Our curriculum covers botanical chemistry, responsible dilution, sensory space design, and the vital ethical boundaries that keep aromatherapy practice safe and responsible.",
  },
  {
    category: "Safety & Standards",
    q: "Where can I find essential oil safety and dilution information?",
    a: "Our complete safety standards are documented on our dedicated Safety & Responsible Use page (/essential-oil-safety). It covers 12 vital dimensions including safe carrier oil dilution, phototoxicity (sun sensitivity), pregnancy and breastfeeding precautions, child and older adult care, pet considerations, and urgent exposure guidance.",
  },
  {
    category: "Products & Ordering",
    q: "How can I enquire about or purchase botanical products?",
    a: "To ensure that every customer receives authentic products alongside proper safety and usage education, our catalogue operates on an inquiry-first model. You can enquire directly via our interactive product form on any product card, or connect with our team via email or our consultation form. We provide personalized guidance regarding availability, pricing, and appropriate daily rituals.",
  },
  {
    category: "Products & Ordering",
    q: "How does shipping and order delivery work across India?",
    a: "We ship authentic botanical products and diffusers via domestic courier partners across serviceable PIN codes in India. Orders are typically processed and dispatched within 2 to 3 business days, with metro deliveries arriving within 3 to 5 business days. Full details are available on our Shipping & Returns page.",
  },
];

export default function FAQPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="resources-hero faq-hero" id="top">
        <div className="container resources-hero-content text-center">
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h1>
            Straightforward Answers &amp; <em>Clarity.</em>
          </h1>
          <p className="resources-hero-subhead max-w-2xl mx-auto">
            Find clear answers about our wellness philosophy, educational pathways,
            workplace programs, safety standards, and product enquiries.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section bg-cream-soft faq-main-section">
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

          {/* Unanswered Questions Help Box */}
          <div className="faq-footer-help-box">
            <h3>Have a question not answered here?</h3>
            <p>
              We are always glad to assist. Feel free to connect directly with our team via email or book an educational consultation with Richa Ramola.
            </p>
            <div className="faq-help-actions">
              <GoogleFormLink type="consultation" className="btn btn-primary">
                Book a Consultation
              </GoogleFormLink>
              <a
                href="mailto:connect@harmonyofcells.com"
                className="btn btn-outline"
              >
                ✉ Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guided Consultation & Navigation CTA */}
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
            <Link href="/education" className="btn btn-outline">
              Explore Education Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
