import Link from "next/link";
import GoogleFormLink from "../../components/FormLink";

export const metadata = {
  title: "Research & Evidence-Informed Philosophy | Harmony of Cells",
  description:
    "Understand the scientific foundations, emerging research, and transparent boundaries behind our nervous system and lifestyle wellness education.",
};

const EVIDENCE_LEVELS = [
  {
    tier: "Level 01",
    label: "Traditional Botanical Use",
    description:
      "Centuries of empirical human use across cultures (Ayurveda, traditional European herbology, folk medicine). Invaluable for cultural context, but not equivalent to validated modern clinical efficacy.",
  },
  {
    tier: "Level 02",
    label: "In-Vitro / Laboratory Studies",
    description:
      "Experiments conducted in petri dishes and cell cultures. While useful for identifying isolated chemical constituents, laboratory petri-dish outcomes cannot be directly extrapolated to living human biology.",
  },
  {
    tier: "Level 03",
    label: "Preclinical & Animal Studies",
    description:
      "Biological testing in animal models that demonstrates potential physiological mechanisms. Provides preliminary hypotheses, but never constitutes definitive proof of human clinical outcomes.",
  },
  {
    tier: "Level 04",
    label: "Observational & Human Sensory Trials",
    description:
      "Studies measuring human physiological markers (heart rate, breathing rate, skin conductance) and subjective wellness indices during sensory exposure. Suggests supportive correlations without establishing curative causality.",
  },
  {
    tier: "Level 05",
    label: "Randomized Controlled Trials (RCTs) & Reviews",
    description:
      "The gold standard in clinical science. Where high-quality peer-reviewed clinical trials and systematic reviews exist, conclusions are carefully evaluated within their specific dosage, context, and population scope.",
  },
];

export default function ResearchEvidencePage() {
  return (
    <main className="research-page">
      {/* Hero Section */}
      <section className="research-hero">
        <div className="container research-hero-content">
          <span className="eyebrow">TRANSPARENCY & SCIENTIFIC INTEGRITY</span>
          <h1>Our Evidence-Informed <em>Wellness Philosophy.</em></h1>
          <p className="research-hero-subhead">
            We believe people make better wellness choices when they are given honest, accurate information.
            Explore what science confirms about sensory practices and essential oils, what preliminary
            research suggests, and what remains unproven.
          </p>

          <div className="research-core-rule">
            <span className="core-rule-icon" aria-hidden="true">⚖️</span>
            <div>
              <strong>Our Core Principle:</strong> We never convert a single isolated study or traditional practice into a commercial medical claim. We educate on supportive lifestyle practices with complete transparency.
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars: What We Know, Suggests, Don't Know */}
      <section className="section bg-cream-soft">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">THE THREE TRUTHS</span>
            <h2>A Grounded Assessment of the Science</h2>
            <p className="section-subhead">
              Separating proven biological mechanisms from preliminary possibilities and commercial myths.
            </p>
          </div>

          <div className="three-truths-grid">
            {/* Pillar 1: What We Know */}
            <article className="truth-card truth-know">
              <div className="truth-card-header">
                <span className="truth-status-tag tag-know">CONFIRMED SCIENCE</span>
                <h3>What We Know</h3>
                <p className="truth-summary">Established physiological, olfactory, and safety facts.</p>
              </div>
              <ul className="truth-list">
                <li>
                  <strong>The Olfactory-Limbic Highway:</strong> Volatile aromatic molecules inhaled through the nose bind directly to olfactory receptor neurons, transmitting electrical signals straight to the olfactory bulb and limbic system (the amygdala and hippocampus), bypassing conscious cognitive filters.
                </li>
                <li>
                  <strong>Epidermal Permeability:</strong> Essential oils are fat-soluble (lipophilic) and can penetrate the outer skin barrier. Diluting them with fatty plant carrier oils significantly reduces skin evaporation and mitigates contact irritation.
                </li>
                <li>
                  <strong>Phototoxicity Biology:</strong> Furanocoumarins present in cold-pressed citrus oils (e.g. bergapten) absorb ultraviolet light energy and can cause cellular redness or hyperpigmentation if exposed to sun.
                </li>
                <li>
                  <strong>Chemical Complexity:</strong> Each pure essential oil contains dozens to hundreds of distinct organic constituents (monoterpenes, sesquiterpenes, esters, alcohols) that give each botanical its unique character.
                </li>
              </ul>
            </article>

            {/* Pillar 2: What Research Suggests */}
            <article className="truth-card truth-suggests">
              <div className="truth-card-header">
                <span className="truth-status-tag tag-suggests">EMERGING EVIDENCE</span>
                <h3>What Research Suggests</h3>
                <p className="truth-summary">Promising preliminary correlations and sensory observations.</p>
              </div>
              <ul className="truth-list">
                <li>
                  <strong>Aromas & Perceived Relaxation:</strong> Preliminary human sensory trials observe that inhaling soothing botanical scents like Lavender or Bergamot frequently correlates with self-reported relaxation and gentle reductions in subjective daily tension.
                </li>
                <li>
                  <strong>Evening Sleep Rhythms:</strong> Incorporating consistent pleasant aromas into nighttime routines acts as a conditioned stimulus that helps participants self-report quicker transitions into subjective evening relaxation.
                </li>
                <li>
                  <strong>Workplace Focus & Mood:</strong> Preliminary trials in office and hospital environments suggest that diffusing crisp botanical oils (e.g. lemon, peppermint) is associated with enhanced subjective alertness and perceived workplace comfort.
                </li>
                <li>
                  <strong>Context Matters:</strong> Research consistently shows that aromatic outcomes are closely tied to individual conditioned memory, personal preference, and the surrounding physical environment.
                </li>
              </ul>
            </article>

            {/* Pillar 3: What We Don't Know */}
            <article className="truth-card truth-dont">
              <div className="truth-card-header">
                <span className="truth-status-tag tag-dont">CLEAR BOUNDARIES</span>
                <h3>What We Don&apos;t Know</h3>
                <p className="truth-summary">Unsubstantiated claims, commercial exaggerations, and myths.</p>
              </div>
              <ul className="truth-list">
                <li>
                  <strong>No Disease Treatment:</strong> Essential oils do NOT cure, reverse, or treat chronic medical diseases, clinical depression, cancer, diabetes, arthritis, or hormonal disorders.
                </li>
                <li>
                  <strong>Petri Dishes ≠ Humans:</strong> Just because an oil shows antimicrobial activity in a concentrated laboratory test tube does not mean inhaling or diffusing it will &ldquo;disinfect ambient air&rdquo; or cure human bacterial infections.
                </li>
                <li>
                  <strong>Ingestion Risks:</strong> Casual internal consumption lacks long-term human safety documentation and carries risks of mucosal irritation and liver strain.
                </li>
                <li>
                  <strong>No Magic Bullets:</strong> Nature-based practices cannot replace adequate sleep, balanced nutrition, psychological support, or prescribed medical treatment.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* The Evidence Hierarchy */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">RESEARCH METHODOLOGY</span>
            <h2>Understanding Levels of Evidence</h2>
            <p className="section-subhead">
              How we evaluate scientific claims before introducing educational practices into our programs.
            </p>
          </div>

          <div className="evidence-levels-list">
            {EVIDENCE_LEVELS.map((level) => (
              <div key={level.tier} className="evidence-level-item">
                <span className="level-badge">{level.tier}</span>
                <div className="level-info">
                  <h3>{level.label}</h3>
                  <p>{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link Bar */}
      <section className="section bg-cream-soft">
        <div className="container text-center">
          <span className="eyebrow">CONTINUE EXPLORING</span>
          <h2>Grounded, Responsible Education</h2>
          <p className="section-subhead max-w-2xl mx-auto">
            Ready to explore our safe usage guidelines, or learn how to incorporate these principles into everyday life?
          </p>
          <div className="research-action-buttons">
            <Link href="/essential-oil-safety" className="btn btn-primary">
              Safety & Responsible Use Guide
            </Link>
            <Link href="/approach" className="btn btn-outline">
              The 5R Approach
            </Link>
            <GoogleFormLink type="consultation" className="btn btn-outline">
              Request a Consultation
            </GoogleFormLink>
          </div>
        </div>
      </section>
    </main>
  );
}
