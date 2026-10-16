# Harmony of Cells — Client Demo & Handoff Document

**Document Version:** 1.0 (Phase 8 Demo Readiness)  
**Date:** October 2026  
**Branch:** `feature/wellness-repositioning`  
**Audience:** Richa Ramola (Founder), Project Stakeholders, Client Leadership & Technical Reviewers  
**Source of Truth:** Harmony of Cells Developer Handoff Blueprint v2 (including Revised Core Positioning Addendum)  
**Deployment Status:** Staging Ready • Public Launch Gated Pending Client Approvals  

---

## 1. Executive Summary & What Changed

Harmony of Cells has transitioned from an essential-oil-centric product catalogue into a premium, education-first **Nervous System & Lifestyle Wellness platform**.

### Core Brand Transformation
- **Brand Positioning:** *Nervous System Wellness for Everyday Life*
- **Brand Philosophy:** *Nature. Knowledge. Informed Wellness.*
- **Signature Principle:** *Learn. Understand. Apply.*
- **Methodology (The 5R Framework):** Rest • Regulate • Restore • Resilience • Ritual
- **Role of Essential Oils:** Repositioned strictly as signature sensory tools and educational subjects—not cure-alls, medical treatments, or the primary definition of the business.

### Key Additions Across Phases 1–8
1. **Homepage:** Complete editorial transformation with hero positioning, 5R interactive method, 4 audience pathways, founder narrative, and compliance safeguards.
2. **Dedicated Delivery Pathways:**
   - `/individuals` — Personal lifestyle rhythms, stress wind-down, and 1-on-1 education.
   - `/corporate-wellness` — Workplace preventive wellness, executive resilience, and sensory environments.
   - `/professionals` — Educational curriculum and safe botanical integration for coaches and movement practitioners.
   - `/hospitality` — Ambient scent architecture, guest sensory journeys, and staff training.
3. **Core Educational Hubs:**
   - `/approach` — Detailed exploration of the 5R Method and lifestyle pacing.
   - `/wellness` — The 6 lifestyle pillars (Rest & Sleep, Daily Rhythms, Sensory Wellness, Women's Life Stages, Workplace Wellness, Healthy Ageing).
   - `/education` — 3-tier education framework (Foundations, Daily Integration, Professional Practice) plus active course catalogue.
   - `/essential-oil-safety` — Conservative dilution charts, phototoxicity guidance, pregnancy/pediatric caution, and non-prescriptive safety notes.
4. **Resources & Lead Magnet:**
   - `/resources` — 8-pillar resource directory and foundational knowledge index.
   - `/resources/7-day-wellness-routine` — Lead magnet ("The 7-Day Supportive Wellness Routine") with daily curriculum, optional botanical cues, zero-gate access, browser print/Save as PDF styling, and an explicit consent-aware updates request form.
5. **Evidence & Transparent FAQ:**
   - `/research-evidence` — Neutral 3-tier analysis (What We Know, What Research Suggests, What We Don't Know) and 5-tier scientific evidence hierarchy.
   - `/faq` — 8 core operational questions answered using only verified project facts, with accessible accordions and Schema.org `FAQPage` JSON-LD.
6. **Compliance & Policy Structure:**
   - `/disclaimer`, `/privacy`, `/terms`, `/shipping-returns` created as reviewable informational drafts with explicit audit notices, excluded from public sitemaps and tagged with `noindex`.

---

## 2. Operational Functionality vs. Demonstration-Only Gating

| Feature / System | Operational Status | Behavior During Demo | Notes & Gating Details |
| :--- | :--- | :--- | :--- |
| **Primary & Mobile Navigation** | Fully Operational | Seamless routing across desktop dropdown, mobile drawer, and footer. | Active highlighting, accessible keyboard escape, smooth scrolling. |
| **Lead Magnet Guide** | Fully Operational | 100% accessible without paywall or email gate; click "Print / Save Complete Guide as PDF" to test browser print. | Print CSS cleanses UI elements (headers, footers, forms) for document output. |
| **Form Intakes & Validation** | Fully Operational | Modal validation, contextual service preservation (Corporate, Hospitality, Professional, General Consultation). | Submits safely via Google Forms and Web3Forms email notifications. |
| **Product Search & Filters** | Fully Operational | Category pills (Single Oil, Blend, Kit, Diffuser, Topical, Carrier) and keyword search. | Instant client-side filtering; local fallback if remote Google Sheet fails. |
| **Product Size Variants** | Fully Operational | Dynamic switching between 5ml and 15ml variants updating bottle size and specifications. | 26 base cards represent all 34 product variants. |
| **Catalogue Inquiries** | Fully Operational | "Enquire to Order" triggers pre-filled intake modal; "WhatsApp" opens direct chat (+91 90760 02266). | Preserves inquiry-first education model. |
| **Direct Cart & Razorpay Checkout** | **Demonstration-Only (Gated)** | Hidden behind `NEXT_PUBLIC_COMMERCE_MODE=inquiry` (default). | Cart and payment code is fully preserved in codebase, but Add to Cart is gated to prevent broken checkouts while pricing and inventory are incomplete. |
| **Automated Newsletter Database** | **Demonstration-Only (Forwarded)** | Form submissions forward an email alert to the admin inbox; does **not** auto-subscribe to an external CRM. | Clearly stated on form and privacy policy to maintain full compliance. |
| **Legal & Policy Pages** | **Review Drafts (Gated)** | Visible on site with prominent "Draft for Legal Review" banners; excluded from sitemap and tagged `noindex`. | Protects brand from presenting unexecuted drafts as legally binding contracts. |

---

## 3. Missing Client Information & Outstanding Launch Blockers

Prior to public deployment, the following items must be provided or confirmed by the client:

1. **Complete Retail Price Sheet:**
   - 23 of 26 catalogue products currently display `"CLIENT TO PROVIDE"` or default placeholders. An authoritative INR price list is required.
2. **Commercial Distribution Clearance:**
   - Documentation of reseller / brand advocacy status for dōTERRA products in India, ensuring brand usage complies with local commercial standards.
3. **Official Business Registration Details:**
   - Registered legal entity name (e.g., Sole Proprietorship, LLP, or Pvt Ltd), registered office postal address, and corporate identification numbers to populate the draft Terms and Privacy policies.
4. **Logistics & Fulfilment Policies:**
   - Confirmation of courier partners, standard delivery timeframes (metro vs. non-metro), and return freight rules for sealed botanical items.
5. **Formal Legal Sign-Off:**
   - Legal counsel review and sign-off on `/disclaimer`, `/privacy`, `/terms`, and `/shipping-returns`.
   - Transition of product content in `docs/PRODUCT_COMPLIANCE_AUDIT.md` from `developer_reviewed` to `client_approved` and `legally_approved`.
6. **Production Domain & Hosting Verification:**
   - Confirmation of DNS ownership and hosting target for `harmonyofcells.com` (or client staging domain).
   - Deployment environment variable: `NEXT_PUBLIC_SITE_URL="https://harmonyofcells.com"`.

---

## 4. Staging Deployment Prerequisites & Configuration

### Environment Variables
Configure the following in your staging hosting environment (e.g. Vercel / Netlify / VPS):

```env
# Required Staging Base URL
NEXT_PUBLIC_SITE_URL="https://staging.harmonyofcells.com"

# Commerce Mode (Keep "inquiry" until pricing and checkout requirements are satisfied)
NEXT_PUBLIC_COMMERCE_MODE="inquiry"

# Web3Forms Notification Key (Email alerts for enquiries)
# NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="<YOUR_WEB3FORMS_KEY>"
# WEB3FORMS_ACCESS_KEY="<YOUR_WEB3FORMS_KEY>"
NOTIFICATION_EMAIL="darkyfactbusiness@gmail.com"

# Razorpay Keys (Do NOT configure for Staging Demo - Inquiry-only commerce mode active)
# NEXT_PUBLIC_RAZORPAY_KEY_ID=""
# RAZORPAY_KEY_ID=""
# RAZORPAY_KEY_SECRET=""
```

### Staging Build & Test Commands
```bash
# 1. Clean build verification
npm run build

# 2. Start staging server locally
npm run start
```

---

## 5. Ten-Point Client Staging Demo Script

Use this sequence during the client walkthrough to demonstrate all deliverables:

1. **Homepage & New Positioning (`/`):**
   - Showcase the hero headline (*Nervous System Wellness for Everyday Life*) and brand philosophy (*Nature. Knowledge. Informed Wellness.*).
   - Scroll through the interactive **5R Method** tabs (Rest, Regulate, Restore, Resilience, Ritual).
   - Point out the founder introduction emphasizing nearly three decades of people leadership.
2. **Four Dedicated Audience Pathways:**
   - Navigate to `/individuals`, `/corporate-wellness`, `/professionals`, and `/hospitality`.
   - Demonstrate how each page addresses its specific audience while maintaining brand cohesion.
3. **Interactive Consultation Booking Modal:**
   - Click "Book a Consultation" on any page.
   - Show how the modal retains the specific service context (e.g., *[Service: Corporate Wellness]*).
   - Demonstrate client-side validation (required fields, time slots, topics).
4. **The Approach Page (`/approach`):**
   - Walk through the expanded deep-dive of the 5R Framework and daily pacing.
   - Note the conservative, evidence-informed language free of medical claims.
5. **Wellness Pillars (`/wellness`):**
   - Showcase the 6 lifestyle areas and anchor navigation (#rest-and-sleep, #womens-wellness, etc.).
6. **Education Pathways & Course Catalogue (`/education`):**
   - Review the 3-tier curriculum structure and non-statutory credential notice.
   - Show how course cards offer "Enquire to Enrol" in inquiry mode.
7. **Essential Oil Catalogue (`/products`):**
   - Demonstrate instant category filters and real-time search.
   - Select a product with multiple sizes (e.g., Lavender or Peppermint) and toggle between 5ml and 15ml.
   - Expand the "Safety & Dilution" accordion on any product.
   - Show "Enquire to Order" and "WhatsApp" inquiry buttons.
8. **Essential Oil Safety Guide (`/essential-oil-safety`):**
   - Review conservative dilution guidance, phototoxicity tables, and non-prescriptive safety notes.
   - Highlight the absence of unsupported first-aid commands (e.g. "NEVER water").
9. **Resources Hub & 7-Day Guide (`/resources` & `/resources/7-day-wellness-routine`):**
   - Walk through the 8 content pillar cards on the Resources Hub.
   - Open the 7-Day Wellness Routine; demonstrate open access (no paywall).
   - Click **"Print / Save Complete Guide as PDF"** and show the clean print preview.
   - Scroll to the bottom and demonstrate the optional educational update form with explicit, unchecked consent.
10. **Research & Evidence + FAQ (`/research-evidence` & `/faq`):**
    - Show the transparent 3-part evidence structure (What We Know, What Research Suggests, What We Don't Know).
    - Open FAQ accordions demonstrating genuine operational answers and non-medical boundaries.

---

## 6. Pre-Launch Recommendation

- **Staging Client Demonstration:** **APPROVED / READY (GO)**  
  All 20+ routes, navigation flows, forms, responsive layouts, search filters, and print mechanisms are verified, stable, and ready for client review.
- **Public Production Deployment:** **HELD PENDING CLIENT INPUT (NO-GO)**  
  Public launch must remain on hold until client provides complete retail pricing, confirms business entity registration, and executes legal review of policy drafts.
