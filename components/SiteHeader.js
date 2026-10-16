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
  const isPathwaysActive = [
    "/individuals",
    "/corporate-wellness",
    "/professionals",
    "/hospitality",
  ].includes(pathname);

  useEffect(() => {
    if (!open && !dropdownOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, dropdownOpen]);

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

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link href="/approach" className={`nav-link ${isActive("/approach") ? "active" : ""}`}>
            The Approach
          </Link>
          <Link href="/wellness" className={`nav-link ${isActive("/wellness") ? "active" : ""}`}>
            Wellness
          </Link>

          {/* Grouped Pathways Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-btn ${isPathwaysActive ? "active" : ""}`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((value) => !value)}
            >
              Pathways <span className="dropdown-caret" aria-hidden="true">▾</span>
            </button>

            {dropdownOpen && (
              <div className="nav-dropdown-menu" role="menu">
                <Link
                  href="/individuals"
                  className={`nav-dropdown-item ${isActive("/individuals") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">FOR INDIVIDUALS</span>
                  <strong>Personal Lifestyle & Rhythms</strong>
                  <small>Stress, sleep routines & 1-on-1 consultations</small>
                </Link>
                <Link
                  href="/corporate-wellness"
                  className={`nav-dropdown-item ${isActive("/corporate-wellness") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">FOR CORPORATES</span>
                  <strong>Workplace Preventive Wellness</strong>
                  <small>Resilience workshops & executive wellbeing</small>
                </Link>
                <Link
                  href="/professionals"
                  className={`nav-dropdown-item ${isActive("/professionals") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">FOR PROFESSIONALS</span>
                  <strong>Wellness Practitioners & Coaches</strong>
                  <small>Aromatherapy education & responsible application</small>
                </Link>
                <Link
                  href="/hospitality"
                  className={`nav-dropdown-item ${isActive("/hospitality") ? "active" : ""}`}
                  role="menuitem"
                  onClick={close}
                >
                  <span className="nav-dropdown-tag">FOR HOSPITALITY</span>
                  <strong>Hospitality & Wellness Centres</strong>
                  <small>Sensory space design & aromatic concepts</small>
                </Link>
              </div>
            )}
          </div>

          <Link href="/education" className={`nav-link ${isActive("/education") ? "active" : ""}`}>
            Education
          </Link>
          <Link href="/products" className={`nav-link ${isActive("/products") ? "active" : ""}`}>
            Essential Oils
          </Link>
          <Link href="/resources" className={`nav-link ${isActive("/resources") || pathname.startsWith("/resources") ? "active" : ""}`}>
            Resources
          </Link>
          <Link href="/consultation" className={`nav-link ${isActive("/consultation") ? "active" : ""}`}>
            Consultation
          </Link>
          <GoogleFormLink type="consultation" className="nav-cta">
            Book a Consultation <span>→</span>
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

      <nav
        id="mobile-navigation"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <Link href="/" className={isActive("/") ? "active" : ""} onClick={close}>
          Home
        </Link>
        <Link href="/approach" className={isActive("/approach") ? "active" : ""} onClick={close}>
          The Approach
        </Link>
        <Link href="/wellness" className={isActive("/wellness") ? "active" : ""} onClick={close}>
          Wellness Pillars
        </Link>

        <div className="mobile-group-block">
          <span className="mobile-group-label">Service Pathways</span>
          <Link
            href="/individuals"
            className={`mobile-sub-link ${isActive("/individuals") ? "active" : ""}`}
            onClick={close}
          >
            • For Individuals (Personal Wellness)
          </Link>
          <Link
            href="/corporate-wellness"
            className={`mobile-sub-link ${isActive("/corporate-wellness") ? "active" : ""}`}
            onClick={close}
          >
            • Corporate Wellness (Workplace)
          </Link>
          <Link
            href="/professionals"
            className={`mobile-sub-link ${isActive("/professionals") ? "active" : ""}`}
            onClick={close}
          >
            • Wellness Professionals (Practitioners)
          </Link>
          <Link
            href="/hospitality"
            className={`mobile-sub-link ${isActive("/hospitality") ? "active" : ""}`}
            onClick={close}
          >
            • Hospitality & Wellness Centres
          </Link>
        </div>

        <Link href="/education" className={isActive("/education") ? "active" : ""} onClick={close}>
          Education Pathways
        </Link>
        <Link href="/products" className={isActive("/products") ? "active" : ""} onClick={close}>
          Essential Oils & Shop
        </Link>
        <Link href="/resources" className={isActive("/resources") || pathname.startsWith("/resources") ? "active" : ""} onClick={close}>
          Resources Hub & 7-Day Guide
        </Link>
        <Link href="/research-evidence" className={isActive("/research-evidence") ? "active" : ""} onClick={close}>
          Research & Evidence
        </Link>
        <Link href="/faq" className={isActive("/faq") ? "active" : ""} onClick={close}>
          Frequently Asked Questions
        </Link>
        <Link href="/essential-oil-safety" className={isActive("/essential-oil-safety") ? "active" : ""} onClick={close}>
          Safety & Responsible Use
        </Link>
        <Link href="/consultation" className={isActive("/consultation") ? "active" : ""} onClick={close}>
          Personal Consultation
        </Link>
        <GoogleFormLink
          type="consultation"
          className="mobile-menu-cta"
          onOpen={close}
        >
          Book a Consultation →
        </GoogleFormLink>
        <div className="mobile-menu-descriptor" aria-hidden="true">
          <span>{BRAND_POSITIONING.descriptor}</span>
          <small>{BRAND_POSITIONING.philosophy}</small>
        </div>
      </nav>
    </header>
  );
}
