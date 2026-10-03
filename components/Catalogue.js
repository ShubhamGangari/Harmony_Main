  "use client";

  import { useEffect, useMemo, useState } from "react";
  import Papa from "papaparse";
  import AddToCartButton from "./AddToCartButton";
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
    const price =
      activeVariant.price && activeVariant.price !== "CLIENT TO PROVIDE"
        ? activeVariant.price
        : "Price details available on request";
    const description =
      activeVariant.description && activeVariant.description !== "CLIENT TO PROVIDE"
        ? activeVariant.description
        : "Product details are being updated.";

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

    return (
      <article className="product-card">
        <div className="product-image">
          {image && !failed ? (
            <img
              src={image}
              alt={`${baseTitle}${size ? ` ${size}` : ""}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setFailed(true)}
            />
          ) : (
            <div
              className="product-image-placeholder"
              aria-hidden="true"
            >
              <span className="product-placeholder-icon">{categoryIcon}</span>
              <small>{size ? `${size}` : "Pure Botanical"}</small>
            </div>
          )}

          <span className="product-label">{categoryLabel}</span>
          {size ? (
            <span className="product-size-badge">{size}</span>
          ) : null}
        </div>

        <div className="product-content">
          <div className="product-copy">
            <h3>{baseTitle}</h3>

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

            <p className={`product-price ${
              activeVariant.price && activeVariant.price !== "CLIENT TO PROVIDE"
                ? ""
                : "is-unavailable"
            }`}>
              {price}
            </p>

            <p>{description}</p>
          </div>

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
          <AddToCartButton
            type="course"
            item={{ type: "course", name, price: course.price || "", image, description, tier }}
            itemContext={{ tier }}
            className="education-link"
          >
            Enrol Now <span>→</span>
          </AddToCartButton>
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

        {/* Category Filter Navigation */}
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
                <span>{cat}</span>
                <span className="filter-pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="catalogue-toolbar">
          <div
            className="catalogue-count"
            aria-live="polite"
          >
            <strong>{filtered.length}</strong>{" "}
            {filtered.length === 1
              ? "product"
              : "products"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
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
            <strong>No products found.</strong>

            <p>Try clearing your search query or selecting another category.</p>

            <button
              type="button"
              className="clear-search-button"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
            >
              Reset filters
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
