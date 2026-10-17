import Link from "next/link";
import GoogleFormLink from "./FormLink";
import FounderVisual from "./FounderVisual";

export default function ServicePageTemplate({
  theme = "general",
  hero,
  intro,
  offerings,
  howItWorks,
  audiences,
  founderCredibility,
  disclaimer,
  ctaSection,
}) {
  return (
    <main className={`service-page-main service-theme-${theme}`}>
      {/* 1. HERO SECTION */}
      <section className="hero service-hero" id="top">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            {hero.eyebrow && <span className="eyebrow">{hero.eyebrow}</span>}
            <h1>{hero.title}</h1>
            {hero.supporting && (
              <p className="hero-supporting-title">{hero.supporting}</p>
            )}
            <p className="hero-description">{hero.description}</p>

            <div className="hero-actions">
              {hero.primaryCta?.type === "form" ? (
                <GoogleFormLink
                  type="consultation"
                  item={hero.primaryCta.formItem || ""}
                  itemContext={hero.primaryCta.formItemContext}
                  className="btn btn-primary"
                >
                  {hero.primaryCta.text} <span>→</span>
                </GoogleFormLink>
              ) : hero.primaryCta?.href ? (
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.text} <span>↓</span>
                </a>
              ) : null}

              {hero.secondaryCta?.href && (
                <a
                  href={hero.secondaryCta.href}
                  className="btn btn-outline hero-secondary-btn"
                >
                  {hero.secondaryCta.text} <span>→</span>
                </a>
              )}
            </div>

            {hero.microline && (
              <div className="hero-note">
                <span className="note-icon">✦</span>
                <p>{hero.microline}</p>
              </div>
            )}
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src={hero.image || "/assets/hero-image.jpg"}
                alt={hero.imageAlt || "Harmony of Cells Wellness Setting"}
                className="hero-image"
              />
              {hero.badge && (
                <div className="hero-image-card">
                  <span className="mini-label">{hero.badge.tag || "HARMONY OF CELLS"}</span>
                  <strong>{hero.badge.title}</strong>
                  {hero.badge.sub && <small>{hero.badge.sub}</small>}
                </div>
              )}
            </div>
            <div className="floating-badge">
              <span>✦</span>
              <small>
                NATURE &<br />
                EDUCATION
              </small>
            </div>
          </div>
        </div>

        {hero.announcement && (
          <div className="container announcement-container">
            <div className="announcement">
              <span className="announcement-symbol">✦</span>
              <span>{hero.announcement}</span>
            </div>
          </div>
        )}
      </section>

      {/* 2. INTRODUCTORY CONTEXT & PHILOSOPHY */}
      {intro && (
        <section className="section service-intro-section" id="intro">
          <div className="container">
            <div className="service-intro-box">
              {intro.eyebrow && <span className="eyebrow">{intro.eyebrow}</span>}
              <h2>{intro.title}</h2>
              {intro.lead && <p className="service-intro-lead">{intro.lead}</p>}

              <div className="service-intro-content">
                {intro.paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {intro.highlightQuote && (
                <blockquote className="service-highlight-quote">
                  &ldquo;{intro.highlightQuote}&rdquo;
                </blockquote>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 3. CORE OFFERINGS / PILLARS GRID */}
      {offerings && (
        <section className={`section service-offerings-section section-theme-${theme}`} id={offerings.id || "offerings"}>
          <div className="container">
            <div className="section-heading text-center">
              {offerings.eyebrow && <span className="eyebrow">{offerings.eyebrow}</span>}
              <h2>{offerings.title}</h2>
              {offerings.description && <p className="section-lead">{offerings.description}</p>}
            </div>

            <div className={`service-offerings-grid ${offerings.layout ? `layout-${offerings.layout}` : ""}`}>
              {offerings.items?.map((item, idx) => (
                <article key={idx} className={`service-offering-card ${item.highlight ? "card-highlight" : ""}`}>
                  <div className="service-card-top">
                    {item.step && <span className="service-card-step">{item.step}</span>}
                    {item.icon && <span className="service-card-icon" aria-hidden="true">{item.icon}</span>}
                    {item.tagline && <span className="service-card-tagline">{item.tagline}</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  {item.points && (
                    <ul className="service-card-points">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <span className="point-bullet" aria-hidden="true">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.action && (
                    <div className="service-card-action">
                      {item.action.type === "form" ? (
                        <GoogleFormLink
                          type="consultation"
                          item={item.action.formItem || item.title}
                          className="service-card-link"
                        >
                          {item.action.text || "Enquire About This"} <span>→</span>
                        </GoogleFormLink>
                      ) : (
                        <Link href={item.action.href || "#contact"} className="service-card-link">
                          {item.action.text || "Learn More"} <span>→</span>
                        </Link>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. HOW THE EXPERIENCE WORKS / THE ENGAGEMENT SEQUENCE */}
      {howItWorks ? (
        <section className="section service-process-section" id={howItWorks.id || "process"}>
          <div className="container">
            <div className="section-heading text-center">
              {howItWorks.eyebrow && <span className="eyebrow">{howItWorks.eyebrow}</span>}
              <h2>{howItWorks.title}</h2>
              {howItWorks.description && <p className="section-lead">{howItWorks.description}</p>}
            </div>

            <div className="service-process-grid">
              {howItWorks.steps?.map((step, idx) => (
                <div key={idx} className="service-process-card">
                  <div className="process-card-step">{step.num || `0${idx + 1}`}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.highlight && (
                    <span className="process-highlight-pill">{step.highlight}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : audiences ? (
        <section className="section service-audiences-section" id={audiences.id || "audiences"}>
          <div className="container">
            <div className="section-heading text-center">
              {audiences.eyebrow && <span className="eyebrow">{audiences.eyebrow}</span>}
              <h2>{audiences.title}</h2>
              {audiences.description && <p className="section-lead">{audiences.description}</p>}
            </div>

            <div className="service-audiences-grid">
              {audiences.items?.map((aud, idx) => (
                <div key={idx} className="service-audience-card">
                  {aud.tag && <span className="pathway-tag">{aud.tag}</span>}
                  <h3>{aud.title}</h3>
                  <p>{aud.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. FOUNDER CREDIBILITY SECTION */}
      {founderCredibility && (
        <section className="section founder-section service-founder-section" id="founder">
          <div className="container founder-grid">
            <FounderVisual />

            <div className="founder-copy">
              <span className="eyebrow">{founderCredibility.eyebrow || "ABOUT THE FOUNDER"}</span>
              <h2>{founderCredibility.title}</h2>

              {founderCredibility.paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {founderCredibility.quote && (
                <blockquote>&ldquo;{founderCredibility.quote}&rdquo;</blockquote>
              )}

              <div className="founder-actions">
                <GoogleFormLink
                  type="consultation"
                  item={founderCredibility.formItem || "Founder Consultation"}
                  itemContext={founderCredibility.formItemContext}
                  className="btn btn-primary"
                >
                  {founderCredibility.ctaText || "Connect with Richa"} <span>→</span>
                </GoogleFormLink>
                <Link href="/education" className="outline-link">
                  Explore Education Programs <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. EDUCATIONAL & SAFETY DISCLAIMER */}
      {disclaimer && (
        <section className="section service-disclaimer-section">
          <div className="container">
            <div className="service-disclaimer-box" role="note">
              <span className="service-disclaimer-tag">
                {disclaimer.tag || "EDUCATIONAL SCOPE & RESPONSIBLE USE"}
              </span>
              <h3>{disclaimer.title}</h3>
              <p>{disclaimer.text}</p>
            </div>
          </div>
        </section>
      )}

      {/* 7. CONVERSION & FINAL CTA */}
      {ctaSection && (
        <section className="section consultation-section service-cta-section" id={ctaSection.id || "contact"}>
          <div className="container">
            <div className="consultation-wrapper">
              <div className="consultation-content">
                {ctaSection.eyebrow && <span className="eyebrow">{ctaSection.eyebrow}</span>}
                <h2>{ctaSection.title}</h2>
                <p>{ctaSection.description}</p>

                {ctaSection.points && (
                  <div className="consultation-points">
                    {ctaSection.points.map((pt, idx) => (
                      <span key={idx}>✓ {pt}</span>
                    ))}
                  </div>
                )}

                <div className="consultation-cta-group">
                  {ctaSection.primaryCta?.type === "link" ? (
                    <Link href={ctaSection.primaryCta.href} className="btn btn-primary">
                      {ctaSection.primaryCta.text} <span>→</span>
                    </Link>
                  ) : (
                    <GoogleFormLink
                      type="consultation"
                      item={ctaSection.primaryCta.formItem || ""}
                      itemContext={ctaSection.primaryCta.formItemContext}
                      className="btn btn-primary"
                    >
                      {ctaSection.primaryCta.text} <span>→</span>
                    </GoogleFormLink>
                  )}

                  {ctaSection.secondaryCta && (
                    <Link href={ctaSection.secondaryCta.href} className="btn btn-outline">
                      {ctaSection.secondaryCta.text} <span>→</span>
                    </Link>
                  )}
                </div>

                {ctaSection.showContactLinks && (
                  <div className="service-direct-contact">
                    <small>Direct contact channels:</small>
                    <div className="service-contact-pills">
                      <a href="mailto:connect@harmonyofcells.com">✉ connect@harmonyofcells.com</a>
                      <a href="tel:+919076002266">✆ +91 90760 02266</a>
                      <a href="https://wa.me/919076002266" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp Direct
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="consultation-visual">
                <img
                  src={ctaSection.image || "/assets/hero-image.jpg"}
                  alt="Natural botanical wellness setting for calm and restoration"
                />
                <div className="consultation-quote">
                  <span>“</span>
                  <p>Learn. Understand. Apply. • Nature-based educational self-care.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
