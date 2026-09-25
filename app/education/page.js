import { CourseCatalogue } from "../../components/Catalogue";
import { SITE_CONFIG } from "../../lib/config";

export const metadata = {
  title: "Education | Harmony of Cells",
  description: "Structured essential oil education for individuals and wellness professionals."
};

export default function EducationPage() {
  return (
    <main>
      <section className="catalogue-hero education-page-hero">
        <div className="container catalogue-hero-content">
          <span className="eyebrow">ESSENTIAL OIL EDUCATION</span>
          <h1>Learn at your <em>own level.</em></h1>
          <p>
            Structured education for individuals and wellness professionals
            seeking practical, responsible essential oil knowledge.
          </p>
        </div>
      </section>

      <section className="section catalogue-section education-catalogue">
        <div className="container">
          <CourseCatalogue url={SITE_CONFIG.coursesCsv} />
        </div>
      </section>
    </main>
  );
}
