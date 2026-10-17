import Link from "next/link";
import { BRAND_POSITIONING } from "../lib/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Philosophy */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-brand-link">
              <img
                src="/assets/harmony-logo.png"
                alt="Harmony of Cells"
                className="footer-brand-logo"
              />
              <div className="footer-brand-info">
                <span className="footer-brand-title">{BRAND_POSITIONING.name}</span>
                <p className="footer-brand-tagline">{BRAND_POSITIONING.speciality}</p>
              </div>
            </Link>

            <p className="footer-mission-text">
              {BRAND_POSITIONING.mission}
            </p>

            <div className="footer-motto-badges">
              <span className="footer-motto-pill">
                ✦ {BRAND_POSITIONING.philosophy}
              </span>
              <span className="footer-motto-pill">
                ✦ {BRAND_POSITIONING.principle}
              </span>
            </div>

            {/* Social Media & Direct Contact Handles */}
            <div className="footer-social-handles" aria-label="Social media and direct contact">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/harmonyofcells?igsh=MWY0YzI5dWoxc2N0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-instagram"
                aria-label="Instagram @harmonyofcells"
                title="Follow us on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-svg">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919076002266"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-whatsapp"
                aria-label="WhatsApp +91 90760 02266"
                title="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="footer-social-svg">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.201.3-.777.979-.953 1.18-.175.2-.35.225-.651.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.516-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.48 1.079 2.909 1.23 3.11.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35z"/>
                  <path d="M12.004 2C6.482 2 2.003 6.48 2.003 12c0 1.99.585 3.845 1.597 5.414L2 22l4.734-1.543A9.957 9.957 0 0 0 12.004 22c5.522 0 10.001-4.48 10.001-10s-4.479-10-10.001-10zm0 18.2c-1.628 0-3.138-.485-4.407-1.319l-.316-.208-2.812.916.932-2.738-.228-.337A8.163 8.163 0 0 1 3.804 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                </svg>
              </a>

              {/* Call / Phone */}
              <a
                href="tel:+919076002266"
                className="footer-social-btn footer-social-phone"
                aria-label="Call +91 90760 02266"
                title="Call +91 90760 02266"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:connect@harmonyofcells.com"
                className="footer-social-btn footer-social-email"
                aria-label="Email connect@harmonyofcells.com"
                title="Email connect@harmonyofcells.com"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-svg">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>


          {/* Column 3: Platform & Resources */}
          <div className="footer-col">
            <span className="footer-col-title">Platform &amp; Resources</span>
            <nav className="footer-links-nav" aria-label="Footer Platform Navigation">
              <Link href="/">Home</Link>
              <Link href="/about">Meet Richa (About)</Link>
              <Link href="/approach">Our Approach</Link>
              <Link href="/education">Education Pathways</Link>
              <Link href="/products">Essential Oils</Link>
              <Link href="/essential-oil-safety">Safety &amp; Responsible Use</Link>
              <Link href="/research-and-evidence">Research &amp; Evidence</Link>
              <Link href="/resources">Resources Hub</Link>
              <Link href="/resources/7-day-wellness-routine">7-Day Supportive Wellness Routine</Link>
              <Link href="/resources#evidence">Evidence &amp; Scientific Context</Link>
              <Link href="/resources#faq">Frequently Asked Questions</Link>
              <Link href="/consultation">Personal Consultation</Link>
            </nav>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="footer-col">
            <span className="footer-col-title">Connect &amp; Inquire</span>
            <div className="footer-contact-details">
              <p className="footer-contact-person">
                <strong>Richa Ramola</strong>
                <span>Founder &amp; Wellness Educator</span>
                <small>Nearly Three Decades in Leadership &amp; People Development</small>
              </p>
              <div className="footer-contact-links">
                <a href="mailto:connect@harmonyofcells.com" className="footer-contact-link">
                  ✉ connect@harmonyofcells.com
                </a>
                <a href="tel:+919076002266" className="footer-contact-link">
                  ✆ +91 90760 02266
                </a>
                <a
                  href="https://wa.me/919076002266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  💬 WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Non-Medical Disclaimer Box */}
        <div className="footer-disclaimer-box" role="note" aria-label="Educational wellness disclaimer">
          <div className="footer-disclaimer-header">
            <span className="footer-disclaimer-badge">DISCLAIMER (DRAFT FOR REVIEW)</span>
            <span className="footer-disclaimer-sub">Educational Scope &amp; Responsible Self-Care</span>
          </div>
          <p className="footer-disclaimer-text">
            Harmony of Cells provides wellness education and lifestyle guidance intended to support informed self-care and calmer daily rhythms. Our educational content, workshops and consultations are not intended to diagnose, treat, cure or prevent any disease, medical condition or nervous system disorder, nor are they a substitute for professional medical advice, diagnosis or treatment. Essential oils are concentrated botanical extracts and should always be used responsibly following appropriate dilution, safe application and product instructions. If you are pregnant, nursing, taking medication or managing a medical condition, please consult an appropriately qualified healthcare professional before use.{" "}
            <Link href="/disclaimer" style={{ color: "#a3c997", textDecoration: "underline", marginLeft: "4px" }}>
              Read full disclaimer →
            </Link>
          </p>
        </div>

        {/* Bottom Bar with Legal Links, Copyright & Credits */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Harmony of Cells. All rights reserved.
          </p>
          <div className="footer-legal-links" aria-label="Policies and terms">
            <Link href="/disclaimer" className="footer-legal-link">Disclaimer</Link>
            <span className="footer-legal-sep" aria-hidden="true">·</span>
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-legal-sep" aria-hidden="true">·</span>
            <Link href="/terms" className="footer-legal-link">Terms &amp; Conditions</Link>
            <span className="footer-legal-sep" aria-hidden="true">·</span>
            <Link href="/shipping-returns" className="footer-legal-link">Shipping &amp; Inquiries</Link>
          </div>
          <p className="footer-credits">
            Nervous System &amp; Lifestyle Wellness • Learn. Understand. Apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
