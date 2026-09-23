"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GoogleFormLink from "./FormLink";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
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
            <span className="brand-name">Harmony of Cells</span>
            <span className="brand-tagline">Nature. Science. Preventive Wellness.</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</Link>
          <Link href="/education" className={`nav-link ${isActive("/education") ? "active" : ""}`}>Education</Link>
          <Link href="/products" className={`nav-link ${isActive("/products") ? "active" : ""}`}>Products</Link>
          <GoogleFormLink type="consultation" className="nav-link">
            Consultation
          </GoogleFormLink>
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
        <Link href="/" className={isActive("/") ? "active" : ""} onClick={close}>Home</Link>
        <Link href="/education" className={isActive("/education") ? "active" : ""} onClick={close}>Education</Link>
        <Link href="/products" className={isActive("/products") ? "active" : ""} onClick={close}>Products</Link>
        <GoogleFormLink type="consultation" onOpen={close}>Consultation</GoogleFormLink>
        <GoogleFormLink
          type="consultation"
          className="mobile-menu-cta"
          onOpen={close}
        >
          Book a Consultation →
        </GoogleFormLink>
      </nav>
    </header>
  );
}
