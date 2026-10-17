  "use client";

  import { useEffect, useMemo, useState } from "react";
  import Papa from "papaparse";
  import AddToCartButton from "./AddToCartButton";
  import GoogleFormLink from "./FormLink";
  import { SITE_CONFIG } from "../lib/config";
  import { normalizeRows, validExternalUrl, mergeProductCatalog } from "../lib/csv";
  import {
    DEFAULT_PRODUCTS,
    PRODUCT_CATEGORIES,
    groupProducts,
    getBaseProductName,
  } from "../lib/products-data";

  function getCategoryLabel(category) {
    switch (category) {
      case "Blend":
        return "WELLNESS BLEND";
      case "Kit":
        return "COLLECTION KIT";
      case "Diffuser":
        return "DIFFUSER";
      case "Topical":
        return "TOPICAL CARE";
      case "Carrier Oil":
        return "CARRIER OIL";
      default:
        return "ESSENTIAL OIL";
    }
  }

  function getCategoryIcon(category) {
    switch (category) {
      case "Blend":
        return "✨";
      case "Kit":
        return "📦";
      case "Diffuser":
        return "💨";
      case "Topical":
      case "Carrier Oil":
        return "🧴";
      default:
        return "🌿";
    }
  }

  function ProductCard({ product, searchQuery = "" }) {
    const variants = product.variants || [product];

    // Determine default variant: prefer query match (5ml or 15ml) if user searched for a size
    const initialIndex = useMemo(() => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        if (q.includes("5ml")) {
          const idx = variants.findIndex((v) =>
            String(v.size || v.name).toLowerCase().includes("5ml")
          );
          if (idx !== -1) return idx;
        } else if (q.includes("15ml")) {
          const idx = variants.findIndex((v) =>
            String(v.size || v.name).toLowerCase().includes("15ml")
          );
          if (idx !== -1) return idx;
        }
      }
      return product.defaultIndex !== undefined ? product.defaultIndex : 0;
    }, [product.defaultIndex, searchQuery, variants]);

    const [selectedIdx, setSelectedIdx] = useState(initialIndex);

    useEffect(() => {
      setSelectedIdx(initialIndex);
    }, [initialIndex]);

    const [failed, setFailed] = useState(false);

    const activeVariant = variants[selectedIdx] || variants[0] || {};
    const baseTitle = product.baseName || getBaseProductName(activeVariant.name) || activeVariant.name || "Essential Oil";
    const size = activeVariant.size || "";
    const hasValidPrice = Boolean(activeVariant.price && activeVariant.price !== "CLIENT TO PROVIDE");
    const price = hasValidPrice ? activeVariant.price : "Price on request";
    const description =
      activeVariant.description && activeVariant.description !== "CLIENT TO PROVIDE"
        ? activeVariant.description
        : "Product details are currently undergoing compliance review.";

    const aroma = activeVariant.aroma_profile || product.aroma_profile || "";
    const whyChoose = activeVariant.why_choose || product.why_choose || "";
    const rituals = activeVariant.rituals || product.rituals || "";
    const usage = activeVariant.usage || product.usage || "";
    const safety = activeVariant.safety || product.safety || "";
    const brand = activeVariant.brand || product.brand || "dōTERRA";
    const isAvailable = String(activeVariant.available ?? product.available ?? "true").toLowerCase() !== "false";

    const rawImage =
      activeVariant.image_url ||
      variants.find((v) => v.image_url)?.image_url ||
      "";
    const image = validExternalUrl(rawImage);
    const category = product.category || activeVariant.category || "Single Oil";
    const categoryLabel = getCategoryLabel(category);
    const categoryIcon = getCategoryIcon(category);

    const handleSelectVariant = (idx) => {
      setSelectedIdx(idx);
      setFailed(false);
    };

    const itemLabel = `${baseTitle}${size ? ` (${size})` : ""}`;
    const waText = encodeURIComponent(
      `Hello Harmony of Cells, I would like to enquire about ordering ${itemLabel}. Could you please share availability and ordering guidance?`
    );
    const waUrl = SITE_CONFIG.whatsappNumber
      ? `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waText}`
      : `/consultation?item=${encodeURIComponent(itemLabel)}`;

    return (
      <article className="product-card">
        <div className="product-image">
          {image && !failed ? (
            <img
              src={image}
              alt={itemLabel}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setFailed(true)}
              className="product-actual-img"
            />
          ) : (
            <div className="product-botanical-fallback" aria-hidden="true">
              <div className="botanical-halo" />
              <svg className="botanical-motif-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="44" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
                <circle cx="50" cy="50" r="32" strokeWidth="0.8" opacity="0.4" />
                <path d="M50 14 C55 28, 68 40, 86 50 C68 60, 55 72, 50 86 C45 72, 32 60, 14 50 C32 40, 45 28, 50 14 Z" strokeWidth="1" opacity="0.35" />
                <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.25" />
              </svg>
              <div className="botanical-fallback-content">
                <span className="botanical-icon">{categoryIcon}</span>
                <strong className="botanical-plate-title">{baseTitle}</strong>
                <span className="botanical-plate-type">{categoryLabel}</span>
                <span className="botanical-plate-spec">{size || "Pure Botanical Extract"}</span>
              </div>
            </div>
          )}

          <div className="product-badges-row">
            <span className="product-label">{categoryLabel}</span>
            <span className="product-brand-badge">{brand}</span>
          </div>
        </div>

        <div className="product-content">
          <div className="product-copy">
            <div className="product-header-row">
              <h3>{baseTitle}</h3>
            </div>

            {aroma ? (
              <p className="product-aroma-badge">
                <span className="aroma-label">Aroma:</span> {aroma}
              </p>
            ) : null}

            {/* Size / Quantity Pill Selector */}
            {variants.length > 1 ? (
              <div className="product-variant-selector">
                <span className="variant-label">Choose Size:</span>
                <div
                  className="variant-pills"
                  role="radiogroup"
                  aria-label={`Select bottle size for ${baseTitle}`}
                >
                  {variants.map((v, idx) => {
                    const isSelected = selectedIdx === idx;
                    const pillLabel = v.size || (v.name.includes("ml") ? v.name.match(/\d+ml/i)?.[0] : v.name);
                    return (
                      <button
                        key={`${v.size || v.name}-${idx}`}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        className={`variant-pill ${isSelected ? "is-active" : ""}`}
                        onClick={() => handleSelectVariant(idx)}
                        title={`Select ${pillLabel}`}
                      >
                        {pillLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="product-meta-row">
              <span className={`product-price ${!hasValidPrice ? "is-unavailable" : ""}`}>
                {price}
              </span>
              <span className={`product-stock-status ${isAvailable ? "is-in-stock" : "is-out-of-stock"}`}>
                {isAvailable ? "● Available to Order" : "○ Currently Unavailable"}
              </span>
            </div>

            <p className="product-description">{description}</p>

            {/* Expandable Specifications, Rituals and Safety Drawer */}
            {(whyChoose || rituals || usage || safety) ? (
              <details className="product-details-accordion">
                <summary className="product-accordion-summary">
                  <span>Usage, Rituals & Safety</span>
                  <span className="accordion-chevron" aria-hidden="true">▾</span>
                </summary>
                <div className="product-accordion-body">
                  {whyChoose ? (
                    <div className="product-spec-block">
                      <strong>Why People Choose It</strong>
                      <p>{whyChoose}</p>
                    </div>
                  ) : null}
                  {rituals ? (
                    <div className="product-spec-block">
                      <strong>Everyday Rituals</strong>
                      <p>{rituals}</p>
                    </div>
                  ) : null}
                  {usage ? (
                    <div className="product-spec-block">
                      <strong>Recommended Use</strong>
                      <p>{usage}</p>
                    </div>
                  ) : null}
                  {safety ? (
                    <div className="product-spec-block product-safety-block">
                      <strong>Safety Considerations</strong>
                      <p>{safety}</p>
                      <a href="/essential-oil-safety" className="product-safety-link">
                        View Safety & Responsible Use Guide →
                      </a>
                    </div>
                  ) : null}
                </div>
              </details>
            ) : null}
          </div>

          <div className="product-card-footer">
            {SITE_CONFIG.commerceMode === "cart" ? (
              <div className="integration-actions">
                <AddToCartButton
                  type="product"
                  item={{
                    type: "product",
                    name: activeVariant.name,
                    price: activeVariant.price || "",
                    image,
                    description: activeVariant.description,
                    size: activeVariant.size,
                  }}
                  className="card-link"
                >
                  Order Now <span>→</span>
                </AddToCartButton>
              </div>
            ) : (
              <div className="product-order-actions">
                <GoogleFormLink
                  type="product"
                  item={itemLabel}
                  className="btn btn-primary product-enquire-btn"
                >
                  Enquire to Order
                </GoogleFormLink>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline product-wa-btn"
                  title="Enquire or order directly on WhatsApp"
                  aria-label={`Order ${itemLabel} via WhatsApp`}
                >
                  <span aria-hidden="true">💬</span> WhatsApp
                </a>
              </div>
            )}
            <p className="product-card-reassurance">
              Informed guidance • Direct consultation available
            </p>
          </div>
        </div>
      </article>
    );
  }


  function CourseCard({ course, index }) {
    const [failed, setFailed] = useState(false);
    const name = course.name || "Education Program";
    const image = validExternalUrl(course.image_url);
    const price =
      course.price && course.price !== "CLIENT TO PROVIDE"
        ? course.price
        : "Price details available on request";
    const description =
      course.description && course.description !== "CLIENT TO PROVIDE"
        ? course.description
        : "Explore this education program.";

    const tier =
      course.tier ||
      `Level ${String(index + 1).padStart(2, "0")}`;


    return (
      <article className={`education-card tier-${index + 1}`}>
        <div className="course-card-header">
          <span className="level-label">TIER {String(index + 1).padStart(2, "0")}</span>
          <span className="course-stage">{tier}</span>
        </div>

        <div className="course-visual">
          {image && !failed ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="course-visual-fallback" aria-hidden="true">
              <span>✦</span>
              <small>Practitioner pathway</small>
            </div>
          )}
        </div>

        <div className="course-card-body">
          <span className="level-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{name}</h3>
          <p className="course-description">{description}</p>
          <div className={`course-price ${
            course.price && course.price !== "CLIENT TO PROVIDE"
              ? ""
              : "is-unavailable"
          }`}>
            {price}
          </div>
        </div>

        <div className="course-card-footer">
          {SITE_CONFIG.commerceMode === "cart" ? (
            <AddToCartButton
              type="course"
              item={{ type: "course", name, price: course.price || "", image, description, tier }}
              itemContext={{ tier }}
              className="education-link"
            >
              Enrol Now <span>→</span>
            </AddToCartButton>
          ) : (
            <GoogleFormLink
              type="course"
              item={name}
              itemContext={{ tier }}
              className="education-link course-enquiry-trigger"
            >
              Enquire to Enrol <span>→</span>
            </GoogleFormLink>
          )}
        </div>
      </article>
    );
  }

  function useCsv(url) {
    const [state, setState] = useState({
      rows: [],
      loading: true,
      error: false,
    });

    useEffect(() => {
      let active = true;

      if (!url) {
        console.error("CSV URL is missing.");

        setState({
          rows: [],
          loading: false,
          error: true,
        });

        return;
      }

      console.log("Loading CSV:", url);

      Papa.parse(url, {
        download: true,
        header: true,
        skipEmptyLines: true,

        complete(results) {
          if (!active) return;

          console.log("CSV request completed.");
          console.log("CSV URL:", url);
          console.log("CSV results:", results);
          console.log("CSV rows:", results.data);
          console.log("CSV parsing errors:", results.errors);

          const normalizedRows = normalizeRows(
            results.data || []
          );

          console.log(
            "Normalized CSV rows:",
            normalizedRows
          );

          /*
          * PapaParse can successfully download a file while
          * still reporting parsing errors. We log those errors
          * so they are visible during development.
          */
          if (results.errors?.length) {
            console.warn(
              "CSV parsing errors:",
              results.errors
            );
          }

          /*
          * If Google returns an unexpected response such as
          * an HTML page instead of CSV, there may be no usable rows.
          */
          if (!normalizedRows.length) {
            console.error(
              "CSV loaded but contains no usable rows.",
              results
            );
          }

          setState({
            rows: normalizedRows,
            loading: false,
            error: false,
          });
        },

        error(error) {
          console.error("CSV loading error:", error);
          console.error("CSV URL:", url);

          if (!active) return;

          setState({
            rows: [],
            loading: false,
            error: true,
          });
        },
      });

      return () => {
        active = false;
      };
    }, [url]);

    return state;
  }

  function isFeatured(item) {
    return String(item.featured || "").trim().toLowerCase() === "true";
  }

  export function FeaturedProducts({ url }) {
    const { rows, loading } = useCsv(url);
    const allProducts = useMemo(() => mergeProductCatalog(rows, DEFAULT_PRODUCTS), [rows]);
    const groupedProducts = useMemo(() => groupProducts(allProducts), [allProducts]);

    if (loading && !groupedProducts.length) {
      return (
        <div className="data-loading" role="status" aria-live="polite">
          Loading products...
        </div>
      );
    }

    const featured = groupedProducts.filter(
      (g) => g.featured || g.variants?.some(isFeatured)
    );
    const displayItems = featured.length ? featured.slice(0, 3) : groupedProducts.slice(0, 3);

    return (
      <div className="product-grid">
        {displayItems.map((product, index) => (
          <ProductCard
            key={`${product.baseName || product.name}-${index}`}
            product={product}
          />
        ))}
      </div>
    );
  }

  export function ProductCatalogue({ url }) {
    const { rows, loading } = useCsv(url);
    const allProducts = useMemo(() => mergeProductCatalog(rows, DEFAULT_PRODUCTS), [rows]);
    const groupedProducts = useMemo(() => groupProducts(allProducts), [allProducts]);

    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const featured = useMemo(
      () =>
        groupedProducts
          .filter((g) => g.featured || g.variants?.some(isFeatured))
          .slice(0, 3),
      [groupedProducts]
    );

    const categoryCounts = useMemo(() => {
      const counts = { All: groupedProducts.length };
      PRODUCT_CATEGORIES.forEach((cat) => {
        if (cat === "All") return;
        if (cat === "Single Oils") {
          counts[cat] = groupedProducts.filter((p) => p.category === "Single Oil").length;
        } else if (cat === "Blends") {
          counts[cat] = groupedProducts.filter((p) => p.category === "Blend").length;
        } else if (cat === "Kits") {
          counts[cat] = groupedProducts.filter((p) => p.category === "Kit").length;
        } else if (cat === "Diffusers & Care") {
          counts[cat] = groupedProducts.filter((p) =>
            ["Diffuser", "Topical", "Carrier Oil"].includes(p.category)
          ).length;
        }
      });
      return counts;
    }, [groupedProducts]);

    const filtered = useMemo(() => {
      const term = query.trim().toLowerCase();

      return groupedProducts.filter((group) => {
        if (activeCategory === "Single Oils" && group.category !== "Single Oil") return false;
        if (activeCategory === "Blends" && group.category !== "Blend") return false;
        if (activeCategory === "Kits" && group.category !== "Kit") return false;
        if (
          activeCategory === "Diffusers & Care" &&
          !["Diffuser", "Topical", "Carrier Oil"].includes(group.category)
        ) {
          return false;
        }

        if (!term) return true;

        if (group.baseName.toLowerCase().includes(term)) return true;

        return group.variants.some((v) =>
          [v.name, v.description, v.size, v.category, v.price]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(term)
        );
      });
    }, [groupedProducts, query, activeCategory]);

    if (loading && !groupedProducts.length) {
      return (
        <div className="data-loading" role="status" aria-live="polite">
          Loading products...
        </div>
      );
    }

    return (
      <>
        {featured.length ? (
          <section className="catalogue-recommendations" aria-labelledby="product-recommendations-title">
            <div className="recommendations-heading">
              <span className="eyebrow">CURATED FOR YOU</span>
              <h2 id="product-recommendations-title">Recommended products</h2>
            </div>
            <div className="product-grid">
              {featured.map((product, index) => (
                <ProductCard key={`featured-${product.baseName || product.name}-${index}`} product={product} />
              ))}
            </div>
          </section>
        ) : null}

        {/* Category Filter Navigation with mobile scroll affordance */}
        <div className="catalogue-filter-container">
          <div className="catalogue-filter-bar" role="tablist" aria-label="Filter products by category">
            {PRODUCT_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`catalogue-filter-pill ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="filter-pill-label">{cat}</span>
                  <span className="filter-pill-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="catalogue-toolbar">
          <div
            className="catalogue-count"
            aria-live="polite"
          >
            <span className="catalogue-count-text">
              <strong>{filtered.length}</strong>{" "}
              {filtered.length === 1
                ? "product"
                : "products"}
            </span>

            {activeCategory !== "All" ? (
              <span className="active-filter-chip">
                <span>Category: {activeCategory}</span>
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  aria-label={`Clear ${activeCategory} filter`}
                  className="chip-remove-btn"
                >
                  ×
                </button>
              </span>
            ) : null}

            {query.trim() ? (
              <span className="active-filter-chip">
                <span>Search: &ldquo;{query.trim()}&rdquo;</span>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search text"
                  className="chip-remove-btn"
                >
                  ×
                </button>
              </span>
            ) : null}

            {activeCategory !== "All" || query.trim() ? (
              <button
                type="button"
                className="reset-all-filters-btn"
                onClick={() => {
                  setActiveCategory("All");
                  setQuery("");
                }}
              >
                Reset all
              </button>
            ) : null}
          </div>

          <label className="search-box">
            <span aria-hidden="true">⌕</span>

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search by name, size, aroma..."
              aria-label="Search products"
            />

            {query ? (
              <button
                type="button"
                className="search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear product search"
              >
                ×
              </button>
            ) : null}
          </label>
        </div>

        {filtered.length ? (
          <div
            className="product-grid catalogue-grid"
          >
            {filtered.map((product, index) => (
              <ProductCard
                key={`${product.baseName || product.name}-${index}`}
                product={product}
                searchQuery={query}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span className="no-results-icon" aria-hidden="true">🌿</span>
            <strong>No products match your criteria.</strong>
            <p>Try clearing your search query or selecting a different category above.</p>
            <button
              type="button"
              className="btn btn-outline clear-search-button"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
            >
              Reset filters & search <span>→</span>
            </button>
          </div>
        )}
      </>
    );
  }


  export function CoursePreview({ url }) {
    const { rows, loading, error } = useCsv(url);

    if (loading) {
      return (
        <div className="data-loading" role="status" aria-live="polite">
          Loading education...
        </div>
      );
    }

    if (error) {
      return (
        <div className="data-error" role="status" aria-live="polite">
          Education programs could not be loaded.
        </div>
      );
    }

    if (!rows.length) {
      return (
        <div className="data-error" role="status" aria-live="polite">
          No education programs are currently available.
        </div>
      );
    }

    return (
      <div className="education-grid">
        {rows.slice(0, 3).map((course, index) => (
          <CourseCard
            key={`${course.name}-${index}`}
            course={course}
            index={index}
        />
      ))}
      </div>
    );
  }

  export function CourseCatalogue({ url }) {
    const { rows, loading, error } = useCsv(url);

    if (loading) {
      return (
        <div className="data-loading" role="status" aria-live="polite">
          Loading education...
        </div>
      );
    }

    if (error) {
      return (
        <div className="data-error" role="status" aria-live="polite">
          Education programs could not be loaded.
        </div>
      );
    }

    if (!rows.length) {
      return (
        <div className="data-error" role="status" aria-live="polite">
          No education programs are currently available.
        </div>
      );
    }

    return (
      <>
        {rows.filter(isFeatured).slice(0, 3).length ? (
          <section className="catalogue-recommendations" aria-labelledby="course-recommendations-title">
            <div className="recommendations-heading">
              <span className="eyebrow">CURATED PATHWAYS</span>
              <h2 id="course-recommendations-title">Recommended courses</h2>
            </div>
            <div className="education-grid">{rows.filter(isFeatured).slice(0, 3).map((course, index) => <CourseCard key={`featured-${course.name}-${index}`} course={course} index={index} />)}</div>
          </section>
        ) : null}
        <div className="education-grid">
          {rows.map((course, index) => (
            <CourseCard key={`${course.name}-${index}`} course={course} index={index} />
          ))}
        </div>
      </>
    );
  }
