"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GoogleFormLink from "./FormLink";

import { BRAND_POSITIONING } from "../lib/navigation";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const close = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const isActive = (path) => pathname === path;
  const isWhoWeHelpActive = [
    "/individuals",
    "/corporate-wellness",
    "/professionals",
    "/hospitality",
  ].includes(pathname);

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (!open && !dropdownOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, dropdownOpen]);

  // Lock body scroll when mobile drawer is open to prevent underlying page jitter
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link href="/" className="brand" aria-label="Harmony of Cells home" onClick={close}>
          <img
            src="/assets/harmony-logo.png"
            alt="Harmony of Cells"
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-name">{BRAND_POSITIONING.name}</span>
            <span className="brand-tagline">{BRAND_POSITIONING.speciality}</span>
          </div>
        </Link>

        {/* Simplified Primary Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link
            href="/approach"
            className={`nav-link ${isActive("/approach") ? "active" : ""}`}
          >
            Our Approach
          </Link>

          {/* Grouped Who We Help Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onBlur={handleDropdownBlur}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-btn ${isWhoWeHelpActive ? "active" : ""}`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((value) => !value)}
            >
              Who We Help <span className="dropdown-caret" aria-hidden="true">▾</span>
            </button>

            {dropdownOpen && (
              <div className="nav-dropdown-menu" role="menu">
                <Link
                  href="/individuals"
                  className={`nav-dropdown-item ${isActive("/individuals") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">INDIVIDUALS &amp; FAMILIES</span>
                  <strong>Personal Lifestyle &amp; Rhythms</strong>
                  <small>Daily stress, sleep routines &amp; 1-on-1 consultations</small>
                </Link>
                <Link
                  href="/corporate-wellness"
                  className={`nav-dropdown-item ${isActive("/corporate-wellness") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">CORPORATE WELLNESS</span>
                  <strong>Workplace Preventive Wellness</strong>
                  <small>Executive resilience &amp; team sensory wellbeing</small>
                </Link>
                <Link
                  href="/professionals"
                  className={`nav-dropdown-item ${isActive("/professionals") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">WELLNESS PROFESSIONALS</span>
                  <strong>Practitioners, Teachers &amp; Coaches</strong>
                  <small>Botanical education &amp; responsible application</small>
                </Link>
                <Link
                  href="/hospitality"
                  className={`nav-dropdown-item ${isActive("/hospitality") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">HOSPITALITY &amp; SPAS</span>
                  <strong>Spas, Resorts &amp; Wellness Centres</strong>
                  <small>Sensory space design &amp; aromatic concepts</small>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/education"
            className={`nav-link ${isActive("/education") ? "active" : ""}`}
          >
            Education
          </Link>
          <Link
            href="/products"
            className={`nav-link ${isActive("/products") ? "active" : ""}`}
          >
            Essential Oils
          </Link>
          <Link
            href="/resources"
            className={`nav-link ${isActive("/resources") || pathname.startsWith("/resources") ? "active" : ""}`}
          >
            Resources
          </Link>
          <GoogleFormLink type="consultation" className="nav-cta">
            Book Consultation <span>→</span>
          </GoogleFormLink>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Simplified Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <Link href="/" className={isActive("/") ? "active" : ""} onClick={close}>
          Home
        </Link>
        <Link href="/approach" className={isActive("/approach") ? "active" : ""} onClick={close}>
          Our Approach
        </Link>

        <div className="mobile-group-block">
          <span className="mobile-group-label">Who We Help</span>
          <Link
            href="/individuals"
            className={`mobile-sub-link ${isActive("/individuals") ? "active" : ""}`}
            onClick={close}
          >
            <span className="mobile-pathway-badge">INDIVIDUALS</span>
            <span className="mobile-pathway-title">Individuals &amp; Families</span>
          </Link>
          <Link
            href="/corporate-wellness"
            className={`mobile-sub-link ${isActive("/corporate-wellness") ? "active" : ""}`}
            onClick={close}
          >
            <span className="mobile-pathway-badge">CORPORATES</span>
            <span className="mobile-pathway-title">Corporate Wellness</span>
          </Link>
          <Link
            href="/professionals"
            className={`mobile-sub-link ${isActive("/professionals") ? "active" : ""}`}
            onClick={close}
          >
            <span className="mobile-pathway-badge">PROFESSIONALS</span>
            <span className="mobile-pathway-title">Wellness Professionals</span>
          </Link>
          <Link
            href="/hospitality"
            className={`mobile-sub-link ${isActive("/hospitality") ? "active" : ""}`}
            onClick={close}
          >
            <span className="mobile-pathway-badge">HOSPITALITY</span>
            <span className="mobile-pathway-title">Hospitality &amp; Spas</span>
          </Link>
        </div>

        <Link href="/education" className={isActive("/education") ? "active" : ""} onClick={close}>
          Education
        </Link>
        <Link href="/products" className={isActive("/products") ? "active" : ""} onClick={close}>
          Essential Oils
        </Link>
        <Link href="/resources" className={isActive("/resources") || pathname.startsWith("/resources") ? "active" : ""} onClick={close}>
          Resources &amp; 7-Day Guide
        </Link>
        <GoogleFormLink
          type="consultation"
          className="mobile-menu-cta"
          onOpen={close}
        >
          Book Consultation →
        </GoogleFormLink>
        <div className="mobile-menu-descriptor" aria-hidden="true">
          <span>{BRAND_POSITIONING.descriptor}</span>
          <small>{BRAND_POSITIONING.philosophy}</small>
        </div>
      </nav>
    </header>
  );
}
