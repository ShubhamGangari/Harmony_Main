  "use client";

  import { useEffect, useMemo, useState } from "react";
  import Papa from "papaparse";
  import AddToCartButton from "./AddToCartButton";
  import { normalizeRows, validExternalUrl } from "../lib/csv";

  function ProductCard({ product }) {
    const [failed, setFailed] = useState(false);
    const name = product.name || "Essential Oil";
    const price =
      product.price && product.price !== "CLIENT TO PROVIDE"
        ? product.price
        : "Price details available on request";
    const description =
      product.description && product.description !== "CLIENT TO PROVIDE"
        ? product.description
        : "Product details are being updated.";
    const image = validExternalUrl(product.image_url);

    return (
      <article className="product-card">
        <div className="product-image">
          {image && !failed ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setFailed(true)}
            />
          ) : (
            <div
              className="product-image-placeholder"
              aria-hidden="true"
            >
              <span>✦</span>
              <small>Image unavailable</small>
            </div>
          )}

          <span className="product-label">ESSENTIAL OIL</span>
        </div>

        <div className="product-content">
          <div className="product-copy">
            <h3>{name}</h3>

            <p className={`product-price ${
              product.price && product.price !== "CLIENT TO PROVIDE"
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
              item={{ type: "product", name, price: product.price || "", image, description }}
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
    const { rows, loading, error } = useCsv(url);

    if (loading) {
      return (
        <div className="data-loading" role="status" aria-live="polite">
          Loading products...
        </div>
      );
    }

    if (error) {
      return (
        <div className="data-error" role="status" aria-live="polite">
          Products could not be loaded.
        </div>
      );
    }

    if (!rows.length) {
      return (
        <div className="data-error" role="status" aria-live="polite">
          No products are currently available.
        </div>
      );
    }

    return (
      <div className="product-grid">
        {rows.slice(0, 3).map((product, index) => (
          <ProductCard
            key={`${product.name}-${index}`}
            product={product}
          />
        ))}
      </div>
    );
  }

  export function ProductCatalogue({ url }) {
    const { rows, loading, error } = useCsv(url);

    const [query, setQuery] = useState("");
    const featured = useMemo(() => rows.filter(isFeatured).slice(0, 3), [rows]);

    const filtered = useMemo(() => {
      const term = query.trim().toLowerCase();

      if (!term) return rows;

      return rows.filter((product) =>
        [
          product.name,
          product.description,
          product.price,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(term)
      );
    }, [rows, query]);

    if (loading) {
      return (
        <div className="data-loading" role="status" aria-live="polite">
          Loading products...
        </div>
      );
    }

    if (error) {
      return (
        <div className="data-error" role="status" aria-live="polite">
          Products could not be loaded.
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
            <div className="product-grid">{featured.map((product, index) => <ProductCard key={`featured-${product.name}-${index}`} product={product} />)}</div>
          </section>
        ) : null}
        <div className="catalogue-toolbar">
          <div
            className="catalogue-count"
            aria-live="polite"
          >
            <strong>{filtered.length}</strong>{" "}
            {filtered.length === 1
              ? "product"
              : "products"}
          </div>

          <label className="search-box">
            <span aria-hidden="true">⌕</span>

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search products..."
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
                key={`${product.name}-${index}`}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <strong>No products found.</strong>

            <p>Try a different search term.</p>

            <button
              type="button"
              className="clear-search-button"
              onClick={() => setQuery("")}
            >
              Clear search
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
