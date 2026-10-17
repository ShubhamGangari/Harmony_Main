# Harmony of Cells — Internal Product Compliance Checklist & Audit Report

**Document Version:** 2.0 (Phase 7 Compliance Hardening)  
**Date:** October 2026  
**Audience:** Internal Developer, Client Leadership & Legal Review  
**Source of Truth:** Harmony of Cells Developer Handoff Blueprint v2 (Sections 9, 10, 11, 12, 14 & 23)  
**Status:** Developer Review Complete • Awaiting Formal Client & Legal Sign-Off

---

## 1. Compliance Status Hierarchy & Definitions

To prevent ambiguous claims of "approval" prior to formal verification, all content across the codebase and audit sheets is classified into three explicit tiers:

| Tier | Status Key | Definition | Current Application |
| :--- | :--- | :--- | :--- |
| **Tier 1** | `developer_reviewed` | Technical & editorial alignment completed by the engineering team against the client's Blueprint v2 Product Claims Replacement Matrix (Section 10). Prohibited therapeutic claims removed. **Does NOT constitute corporate or legal clearance.** | **All 26 active products & 34 variants in `DEFAULT_PRODUCTS`** |
| **Tier 2** | `client_approved` | Formal written review and sign-off provided by Richa Ramola / Harmony of Cells corporate leadership. | **0 products (Pending client sign-off)** |
| **Tier 3** | `legally_approved` | Formal written verification provided by qualified legal/regulatory counsel confirming compliance with applicable consumer protection, drugs & cosmetics, and advertising laws. | **0 products (Pending legal review)** |
| **Holding** | `pending_review` | Unvetted remote Google Sheet row or new unmapped draft. Quarantined behind safe neutral holding copy. | **Any new unknown remote products** |

> [!IMPORTANT]
> **NO PRODUCT IS MARKED LEGALLY APPROVED.** No therapeutic benefit, disease-prevention outcome, or clinical claim has received legal sign-off. All commercial and educational content is strictly confined to sensory, aromatic, and everyday lifestyle rituals.

---

## 2. Phase 7 Corrections to Safety & First-Aid Instructions

In response to compliance review, the following unsupported or prescriptive instructions in `app/essential-oil-safety/page.js` were corrected:

1. **Accidental Eye Exposure:**
   - *Previous problematic copy:* Commanded absolute first aid ("Never wash accidental eye contact with water—dilute with carrier oil", "Do NOT rinse with water").
   - *Corrected compliance copy:* Removed absolute medical commands. Reframed as non-prescriptive educational context: instruct users to avoid eye contact, immediately follow product packaging/label instructions, consult emergency poison services or healthcare professionals, and avoid rubbing the eye.
2. **Diffusion Durations & UV Intervals:**
   - *Previous problematic copy:* Prescribed universal dogmatic rules (e.g., exact 30–60 min diffusion intervals; rigid 12–18 hr UV avoidance without context).
   - *Corrected compliance copy:* Reframed to direct users to specific manufacturer diffuser manuals and individual citrus oil product labels.
3. **Emergency Protocol Section:**
   - *Corrected compliance copy:* Retitled from "Emergency Protocol" to "Safety & Exposure Guidance Notes". Added explicit disclaimer that educational notes do not replace professional medical advice, poison control instructions, or manufacturer Safety Data Sheets (SDS). Provided standard poison control helpline references.

---

## 3. Master Product Compliance Checklist

| Product Name | Category & Size | Brand | Legacy Problematic Claim (REMOVED) | Approved Compliant Replacement Copy | Compliance Status Tier | Outstanding Launch Blockers | Required Next Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **On Guard** | Blend • 15ml, 5ml | dōTERRA | "Potent natural defensive properties; immune-protection implications; guards against seasonal threats." | *A distinctive warm, spicy-citrus aromatic blend for everyday sensory and home wellness rituals.* | `developer_reviewed` | Missing retail pricing for 5ml & 15ml. | Client corporate sign-off |
| **Lavender** | Single Oil • 15ml, 5ml | dōTERRA | "Therapeutic sleep treatment; cures insomnia; treats anxiety and headaches." | *A soft floral aroma often chosen for evening wind-down, mindful breathing and personal wellness rituals.* | `developer_reviewed` | 5ml price unconfirmed (15ml is ₹399). | Client corporate sign-off |
| **MetaPWR** | Blend • 15ml | dōTERRA | "Metabolic powerhouse; stimulates metabolic function; eliminates cravings; burns fat." | *A vibrant citrus-spice aromatic blend created to complement an active lifestyle and energising routines.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Peppermint** | Single Oil • 15ml, 5ml | dōTERRA | "Therapeutic cognitive performance; cures migraines; digestive treatment." | *A fresh, cooling aroma often used for refreshing sensory experiences, movement and daytime rituals.* | `developer_reviewed` | 5ml price unconfirmed (15ml is ₹599). | Client corporate sign-off |
| **Breathe (Easy Air)** | Blend • 15ml | dōTERRA | "Deep airway support; treats asthma; clears congested bronchial passages." | *A fresh aromatic blend designed to create a clean, refreshing sensory experience.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Lemongrass** | Single Oil • 15ml | dōTERRA | "Purifying antimicrobial agent; kills airborne pathogens." | *A bright citrus-herbaceous aroma for refreshing spaces and sensory wellness rituals.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Lemon** | Single Oil • 15ml | dōTERRA | "Purifies ambient air; detoxifies liver and internal organs." | *A bright, clean citrus aroma that brings a fresh and uplifting character to spaces.* | `developer_reviewed` | 15ml price is ₹999; confirm final MSRP. | Client corporate sign-off |
| **Wild Orange** | Single Oil • 15ml | dōTERRA | "Dispels stress; energises mind and body as an outcome." | *A bright citrus aroma ideal for uplifting sensory and everyday wellness rituals.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **DigestZen** | Blend • 15ml | dōTERRA | "Eases stomach upset, bloating, and digestive disorders; cures indigestion." | *A warm aromatic blend that can complement a mindful post-meal wellness ritual.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Tea Tree (Melaleuca)** | Single Oil • 15ml | dōTERRA | "Treats acne blemishes; antifungal cure for skin infections." | *A distinctive fresh botanical aroma commonly incorporated into personal-care and home wellness routines.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Rosemary** | Single Oil • 15ml | dōTERRA | "Sharpens memory retention; stimulates hair follicle regrowth; prevents hair loss." | *A fresh herbaceous aroma often chosen for study, work and mindful daytime rituals.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Clove** | Single Oil • 15ml | dōTERRA | "Immune defence; stimulates circulation; numbs dental pain." | *A rich, warm and spicy botanical aroma with a distinctive character.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Turmeric** | Single Oil • 15ml | dōTERRA | "Promotes cellular function; anti-inflammatory joint treatment; cures arthritis." | *A warm, earthy botanical oil with a rich, distinctive aromatic profile.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Frankincense** | Single Oil • 15ml | dōTERRA | "Cellular vitality; cellular level repair; therapeutic cornerstone." | *A rich resinous aroma traditionally associated with contemplative, grounding and personal-care rituals.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Deep Blue Rub** | Topical • 120ml | dōTERRA | "Treatment of pain, arthritis, muscle sprains, and sports injury." | *A cooling and comforting topical experience for post-activity self-care.* | `developer_reviewed` | Price unverified; cosmetic licensing docs required. | Client corporate sign-off |
| **Fennel** | Single Oil • 15ml | dōTERRA | "Metabolism booster; stimulates lymphatic flow; relieves digestive spasms." | *A sweet, anise-like botanical aroma with a long history of traditional use.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Ginger** | Single Oil • 15ml | dōTERRA | "Digestive cure; nausea medication; joint pain treatment." | *A warm, spicy botanical aroma that complements grounding and self-care rituals.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Oregano** | Single Oil • 15ml | dōTERRA | "Natural immune shield; nature's antibiotic; eliminates bacterial infections." | *A highly concentrated, intensely herbaceous oil requiring particular care and appropriate dilution.* | `developer_reviewed` | Price unverified; dilution guidance review. | Client corporate sign-off |
| **Family Essential Kit** | Kit • 10 x 5ml | dōTERRA | "Addresses every family health need; complete medical first-aid kit." | *A versatile introductory collection for exploring essential oils as part of everyday family wellness rituals.* | `developer_reviewed` | Kit price unverified; component list verification. | Client corporate sign-off |
| **Healthy Experience Kit** | Kit • 10 x 15ml + Diffuser | dōTERRA | "Lifestyle transformation; therapeutic outcome claims; cures toxic load." | *A curated collection designed to introduce a range of essential oils and everyday wellness practices.* | `developer_reviewed` | Kit price unverified; electrical certification for diffuser. | Client corporate sign-off |
| **Laluz Diffuser** | Diffuser • 1 Unit | dōTERRA | "Medical-grade air sanitiser and therapeutic delivery system." | *An ultrasonic diffuser designed to disperse fine botanical mist and enhance indoor sensory environments.* | `developer_reviewed` | Price unverified; Indian electrical safety compliance docs. | Client corporate sign-off |
| **Fractionated Coconut Oil** | Carrier Oil • 115ml | dōTERRA | "Medicinal skin healer; transdermal medicinal delivery." | *A light, silky carrier oil that absorbs readily and serves as the ideal base for diluting pure essential oils.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Copaiba** | Single Oil • 15ml | dōTERRA | "Neurological system repair; natural CBD alternative for chronic pain." | *A warm, woody and balsamic aroma valued in quiet evening rituals and contemplative routines.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Cedarwood** | Single Oil • 15ml | dōTERRA | "Cures insomnia; promotes rapid deep sleep stages." | *A warm, grounding and woody aroma often selected for relaxing evening spaces and outdoor-inspired rituals.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |
| **Bergamot** | Single Oil • 15ml | dōTERRA | "Cures clinical depression; reduces cortisol levels medically." | *A sweet, complex citrus aroma with subtle floral notes, ideal for refreshing sensory spaces.* | `developer_reviewed` | Phototoxicity label verification; price unverified. | Client corporate sign-off |
| **Roman Chamomile** | Single Oil • 5ml | dōTERRA | "Pediatric sedative; cures anxiety attacks and colic." | *A sweet, apple-like floral aroma traditionally cherished for gentle evening rituals and quiet pauses.* | `developer_reviewed` | Price unverified (`CLIENT TO PROVIDE`). | Client corporate sign-off |

---

## 4. Remote Google Sheets Catalogue Overwrite Governance

### Mechanism Verified in `lib/csv.js`
1. **Developer-Reviewed Descriptions Protected:** `mergeProductCatalog` checks `product.reviewed && product.description`. Because all 26 catalog products are flagged `reviewed: true` and `review_status: "developer_reviewed"`, unreviewed text from Google Sheets cannot overwrite them.
2. **Operational Data Preserved:** Google Sheets remote updates for legitimate commerce data (`price`, `size`, `available`, `image_url`) continue to merge dynamically.
3. **Quarantine for Unknown Products:** If a new product row appears in the remote sheet that is not in `DEFAULT_PRODUCTS`, it is assigned:
   - `description: "Product details are currently undergoing compliance review."`
   - `needsReview: true`
   - `review_status: "pending_review"`
   This prevents any remote marketing claims from being displayed publicly without code review.

---

## 5. Commerce Readiness & Launch Blockers

| Domain | Status | Launch Blocker Description | Resolution Requirement |
| :--- | :--- | :--- | :--- |
| **Commerce Mode** | Active in `inquiry` mode | Add to Cart is deliberately gated to prevent broken checkout experiences. | Maintain `NEXT_PUBLIC_COMMERCE_MODE=inquiry` until payments, warehousing, and logistics are operational. |
| **Pricing Completeness** | 23/26 products unpriced | Automated checkout cannot function with placeholder values (`CLIENT TO PROVIDE`). | Client must provide complete INR retail price sheet. |
| **Legal Review of Disclaimers** | Pending Legal Review | Educational non-medical disclaimers on homepage, footer, and safety page have not been reviewed by formal legal counsel. | Retain `[LEGAL NOTICE • DRAFT MARKED FOR REVIEW]` banner on all relevant pages. |
| **Brand Reseller Documentation** | Documentation Gap | Distribution and trademark usage rights for dōTERRA products in India must be formally filed. | Client must confirm corporate advocacy / reseller terms. |
| **Privacy & Terms Confirmation** | Draft Informational Only | Informational policy templates created in Phase 7 reflect draft placeholders and must not be published as binding contracts. | Retain review notices until legal counsel provides executed policies. |
