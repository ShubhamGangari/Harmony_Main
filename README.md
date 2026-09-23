# Harmony of Cells — Next.js

A Next.js-based frontend application for **Harmony of Cells**, a wellness education platform focused on essential oils and preventive wellness. The application provides courses, products, consultation bookings, and a unified cart with a responsive UI.

---

## Architecture Overview

- **Framework**: Next.js App Router (React, ES6+ JavaScript)
- **Styling**: Vanilla CSS (`app/globals.css`) with custom design tokens
- **Data Source**: Google Sheets published CSV for Courses and Products (parsed via PapaParse)
- **Forms**: Custom modal forms submitting via `/api/forms` proxy to Google Forms response endpoints
- **Cart**: Browser-persistent unified cart for products and courses (`/cart`)
- **Payments**: Hosted Razorpay payment links configured via Google Sheets
- **Backend-less**: No database, server-side authentication, or custom checkout backend required

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in your browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
harmony-of-cells/
├── app/
│   ├── api/
│   │   ├── forms/               # Next.js API route for Google Forms submission proxy
│   │   └── payment/             # Payment verification helper route
│   ├── cart/
│   │   └── page.js              # Unified cart page
│   ├── education/
│   │   └── page.js              # Education courses page
│   ├── products/
│   │   └── page.js              # Products page
│   ├── globals.css              # Global design system & component styles
│   ├── layout.js                # Root layout component
│   └── page.js                  # Homepage
├── components/
│   ├── CartPage.js              # Cart management & inquiry workflow
│   ├── Catalogue.js             # Displays courses & featured products
│   ├── Footer.js                # Site footer
│   ├── FormLink.js              # Custom form modal & submission trigger
│   ├── GoogleFormLink.js        # Legacy form link wrapper
│   └── SiteHeader.js            # Header & mobile navigation
├── lib/
│   ├── config.js                # Centralized configuration & Google Form entry IDs
│   ├── csv.js                   # CSV fetching, parsing & normalization
│   └── razorpay.js              # Razorpay checkout script loader
├── public/
│   └── assets/                  # Static assets (logos, founder, hero)
├── jsconfig.json                # JS path configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation
```

---

## Assets

Ensure the following image assets are placed in `public/assets/`:
- `harmony-logo.png` — Brand logo
- `hero-image.jpg` — Main hero background
- `founder.jpg` — Founder portrait

---

## Integrations & Data Flow

### 1. Google Sheets Catalogue (CSV)
All product and course data is maintained in published Google Sheets exported as public CSV URLs (configured in `lib/config.js`):
- `SITE_CONFIG.coursesCsv`
- `SITE_CONFIG.productsCsv`

#### Supported CSV Columns:
- **`Featured`**: `TRUE` or `FALSE`. Controls highlight sections on the catalogue.
- **`Available`**: Setting to `FALSE`, `NO`, `UNAVAILABLE`, or `INACTIVE` hides the item.
- **`Recommended With`**: Controls cart cross-sells using comma-separated typed references:
  ```
  product:Lavender, course:Preliminary Consultation
  ```
  The cart preserves ordering, removes duplicates/already-added items, and shows at most three recommendations.
- **`Razorpay URL`**: Direct hosted Razorpay link for immediate purchase where applicable.

### 2. Custom Google Forms Integration
The website never embeds or directly redirects users to Google Forms. Visitors interact with custom modals:
1. Visitor submits a form on the site (Course Inquiry, Product Inquiry, Consultation, or Cart Inquiry).
2. The submission is sent to `/api/forms`.
3. The API route forwards URL-encoded form data to Google Forms `/formResponse`.
4. Only when Google returns a recorded-response confirmation does the UI report success.
5. All field mappings (`entry.<numeric-id>`) are maintained in `lib/config.js`.

### 3. Unified Cart (`/cart`)
- Combines products and courses in a browser-persistent cart (stored in `localStorage`).
- Cross-sells dynamically suggested based on the `Recommended With` catalogue column.
- Cart inquiries submit all selected products and courses to the dedicated Cart Inquiry form so Harmony of Cells can confirm enrolment, fulfilment, and final pricing.

---

## Configuration (`lib/config.js`)

All external endpoints, CSV links, and Google Form entry mappings are centralized in [`lib/config.js`](lib/config.js):

```javascript
export const SITE_CONFIG = {
  coursesCsv: "https://docs.google.com/spreadsheets/...",
  productsCsv: "https://docs.google.com/spreadsheets/...",
  forms: {
    course: {
      url: "...",
      responseUrl: "...",
      fields: { name: "entry.123456", email: "entry.789101" }
    }
  }
};
```

---

## Troubleshooting

- **CSV Data Not Loading**: Ensure the Google Sheet is published to the web (`File` → `Share` → `Publish to web` → Format: `CSV`). Check the browser console for network or CORS issues.
- **Form Submissions Failing**: Verify that Google Form URLs and field IDs in `lib/config.js` match the live Google Form's `entry.<numeric-id>` parameters, and that the form accepts public submissions without requiring sign-in.
- **Payment Link Not Appearing**: Verify the column header in the Google Sheet is named exactly `Razorpay URL` (case-sensitive) and has a valid `https://` link.
