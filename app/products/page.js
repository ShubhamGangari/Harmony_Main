import Link from "next/link";
import { ProductCatalogue } from "../../components/Catalogue";
import { SITE_CONFIG } from "../../lib/config";

export const metadata = {
  title: "Explore Essential Oils & Wellness Products | Harmony of Cells",
  description:
    "Explore single botanical oils, blends and wellness essentials curated for sensory, relaxation and daily wellness practices.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="catalogue-hero">
        <div className="container catalogue-hero-content">
          <span className="eyebrow">ESSENTIAL OIL COLLECTION</span>
          <h1>Explore our <em>botanicals.</em></h1>
          <p>
            Pure single botanical oils and curated blends selected to complement
            your daily sensory and nervous system wellness rituals.
          </p>

          <div className="catalogue-safety-banner">
            <span className="safety-icon" aria-hidden="true">🌿</span>
            <div className="safety-banner-text">
              <strong>Responsible Botanical Use:</strong> Essential oils are highly concentrated plant extracts. Always follow recommended dilution and safety guidance.{" "}
              <Link href="/essential-oil-safety" className="safety-banner-link">
                Read our Safety & Responsible Use Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section catalogue-section">
        <div className="container">
          <ProductCatalogue url={SITE_CONFIG.productsCsv} />
        </div>
      </section>
    </main>
  );
}
