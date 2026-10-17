import Link from "next/link";
import { SITE_CONFIG } from "../lib/config";

export default function Footer() {
  return (
    <footer className="footer footer-blueprint-layout">
      <div className="container">
        {/* Brand Block */}
        <div className="footer-blueprint-brand">
          <Link href="/" className="footer-brand-title-link">
            <span className="footer-exact-headline">HARMONY OF CELLS</span>
          </Link>
          <p className="footer-exact-subhead">
            Nature. Knowledge. Informed Wellness.
          </p>
          <p className="footer-exact-services">
            Wellness education • Essential oils • Aromatherapy • Consultations • Workshops • Corporate Wellness
          </p>

          {/* Social Media & Direct Contact Handles */}
          <div className="footer-social-handles" aria-label="Social media and direct contact">
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

            {SITE_CONFIG.whatsappNumber ? (
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-whatsapp"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="footer-social-svg">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.201.3-.777.979-.953 1.18-.175.2-.35.225-.651.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.516-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.48 1.079 2.909 1.23 3.11.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35z"/>
                  <path d="M12.004 2C6.482 2 2.003 6.48 2.003 12c0 1.99.585 3.845 1.597 5.414L2 22l4.734-1.543A9.957 9.957 0 0 0 12.004 22c5.522 0 10.001-4.48 10.001-10s-4.479-10-10.001-10zm0 18.2c-1.628 0-3.138-.485-4.407-1.319l-.316-.208-2.812.916.932-2.738-.228-.337A8.163 8.163 0 0 1 3.804 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
                </svg>
              </a>
            ) : null}

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

        {/* Navigation Link Rows */}
        <div className="footer-blueprint-nav">
          {/* Explore Row */}
          <div className="footer-nav-row">
            <span className="footer-nav-label">Explore:</span>
            <div className="footer-nav-links">
              <Link href="/">Home</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/about">About</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/education">Education</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/products">Essential Oils</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/corporate-wellness">Corporate Wellness</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/consultation">Consultation</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/research-and-evidence">Research &amp; Evidence</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Information Row */}
          <div className="footer-nav-row">
            <span className="footer-nav-label">Information:</span>
            <div className="footer-nav-links">
              <Link href="/essential-oil-safety">Safety &amp; Responsible Use</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/faq">FAQ</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/privacy">Privacy Policy</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/shipping-returns">Shipping &amp; Returns</Link>
              <span className="footer-nav-sep" aria-hidden="true">|</span>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Disclaimer Paragraph */}
        <div className="footer-blueprint-disclaimer">
          <p>
            Harmony of Cells provides wellness education and guidance and does not provide medical diagnosis or treatment. Product use should always follow applicable product instructions and safety guidance.
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-blueprint-bottom">
          <p>© 2026 Harmony of Cells. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
