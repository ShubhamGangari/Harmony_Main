import Link from "next/link";
import GoogleFormLink from "../components/FormLink";
import { FeaturedProducts, CoursePreview } from "../components/Catalogue";
import FounderVisual from "../components/FounderVisual";
import { SITE_CONFIG } from "../lib/config";

export default function HomePage() {
  return (
    <main>
        <section className="hero" id="home">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">WELLNESS EDUCATION</span>
              <h1>
                Nature, <em>Science,</em> Preventive Wellness.
              </h1>
              <p className="hero-description">
                Discover practical, evidence-informed education on essential oils
                and preventive wellness for everyday life and professional practice.
              </p>

              <div className="hero-actions">
                <Link href="/education" className="btn btn-primary">
                  Explore Education <span>→</span>
                </Link>
                <Link href="/products" className="text-link">
                  Explore Products <span>→</span>
                </Link>
              </div>

              <div className="hero-note">
                <span className="note-icon">✦</span>
                <p>Practical guidance for responsible, informed wellness.</p>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                  src="/assets/hero-image.jpg"
                  alt="Essential oils and botanical wellness"
                  className="hero-image"
                />
                <div className="hero-image-card">
                  <span className="mini-label">HARMONY OF CELLS</span>
                  <strong>Learn. Apply. Thrive.</strong>
                </div>
              </div>
              <div className="floating-badge">
                <span>◌</span>
                <small>EDUCATION<br />FIRST</small>
              </div>
            </div>
          </div>

          <div className="container announcement-container">
            <div className="announcement">
              <span className="announcement-symbol">✦</span>
              <span>Essential oil education • Responsible use • Preventive wellness</span>
            </div>
          </div>
        </section>

        <section className="section education-section education-primary" id="education">
          <div className="container">
            <div className="education-intro">
              <span className="eyebrow">ESSENTIAL OIL EDUCATION</span>
              <h2>Learn at your <em>own level.</em></h2>
              <p>
                Structured education designed to help individuals and wellness
                professionals understand essential oils and apply them responsibly.
              </p>
              <div className="education-pathway" aria-label="Education pathway: 01, 02, 03">
                <span>01</span>
                <i aria-hidden="true">→</i>
                <span>02</span>
                <i aria-hidden="true">→</i>
                <span>03</span>
                <small>Practitioner pathway</small>
              </div>
            </div>

            <CoursePreview url={SITE_CONFIG.coursesCsv} />

            <div className="section-bottom-link">
              <Link href="/education" className="btn btn-primary">
                Explore essential oil education <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section products-section products-secondary" id="products">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">FEATURED PRODUCTS</span>
              <h2>Essential oils for <em>everyday wellness.</em></h2>
              <p>Explore selected essential oils and blends used throughout our wellness education.</p>
            </div>

            <FeaturedProducts url={SITE_CONFIG.productsCsv} />

            <div className="section-bottom-link">
              <Link href="/products" className="outline-link">
                Explore essential oil products <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section consultation-section" id="consultation">
          <div className="container">
            <div className="consultation-wrapper">
              <div className="consultation-content">
                <span className="eyebrow">INDIVIDUAL WELLNESS CONSULTATIONS</span>
                <h2>Personal guidance for your <em>wellness journey.</em></h2>
                <p>
                  One-on-one consultations are designed to help you understand
                  appropriate essential-oil use and create practical routines
                  aligned with your personal wellness goals.
                </p>

                <div className="consultation-points">
                  <span>✓ Choose oils thoughtfully</span>
                  <span>✓ Create customised routines</span>
                  <span>✓ Learn responsible usage</span>
                  <span>✓ Build sustainable habits</span>
                </div>

                <GoogleFormLink type="consultation" className="btn btn-primary">
                  Book a Consultation <span>→</span>
                </GoogleFormLink>
              </div>

              <div className="consultation-visual">
                <img
                  src="/assets/hero-image.jpg"
                  alt="Natural botanical wellness setting"
                />
                <div className="consultation-quote">
                  <span>“</span>
                  <p>Wellness begins with education.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section founder-section" id="founder">
          <div className="container founder-grid">
            <FounderVisual />

            <div className="founder-copy">
              <p className="eyebrow">ABOUT THE FOUNDER</p>
              <h2>Bridging modern life with <em>nature-based wellness.</em></h2>
              <p>
                Richa Ramola is the Founder of Harmony of Cells and a Wellness
                Educator with a vision to make preventive wellness more accessible
                through nature, education and scientific awareness.
              </p>
              <p>
                With nearly three decades of leadership experience in Human Resources
                and Business Operations across multinational organisations, Richa
                chose to dedicate her work to wellness after experiencing the impact
                of natural approaches within her own family.
              </p>
              <p>
                Today, she focuses on educating individuals, families and wellness
                professionals on the informed and responsible use of essential oils
                through workshops, consultations, wellness programs and practitioner education.
              </p>
              <blockquote>
                “Education, purity and prevention can come together to create healthier,
                more empowered communities — one drop at a time.”
              </blockquote>
            </div>
          </div>
        </section>
      </main>
  );
}
