import { ProductCatalogue } from "../../components/Catalogue";
import { SITE_CONFIG } from "../../lib/config";

export const metadata = {
  title: "Products | Harmony of Cells",
  description: "Explore essential oils, blends and wellness products available through Harmony of Cells."
};

export default function ProductsPage() {
  return (
    <main>
      <section className="catalogue-hero">
        <div className="container catalogue-hero-content">
          <span className="eyebrow">ESSENTIAL OIL COLLECTION</span>
          <h1>Explore our <em>products.</em></h1>
          <p>
            Explore essential oils, blends and wellness products available
            through Harmony of Cells.
          </p>
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
