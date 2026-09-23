"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCart } from "./CartProvider";

export default function FloatingCartButton() {
  const { items, itemCount, ready } = useCart();
  const pathname = usePathname();
  const [bump, setBump] = useState(false);
  const prevCount = useRef(itemCount);

  // Calculate live estimated subtotal for preview
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const numericPrice = Number(String(item.price || "").replace(/[^\d]/g, "")) || 0;
      return sum + numericPrice * (item.quantity || 1);
    }, 0);
  }, [items]);

  useEffect(() => {
    if (itemCount > prevCount.current) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 600);
      return () => clearTimeout(timer);
    }
    prevCount.current = itemCount;
  }, [itemCount]);

  // Don't render on the cart page, during SSR/hydration, or when cart is empty
  if (!ready || pathname === "/cart" || itemCount === 0) {
    return null;
  }

  return (
    <aside className="floating-cart-wrapper" aria-label="Cart quick access">
      <Link
        href="/cart"
        className={`floating-cart-badge-btn ${bump ? "is-bumped" : ""}`}
        aria-label={`View cart with ${itemCount} ${itemCount === 1 ? "item" : "items"}${
          subtotal > 0 ? `, total ₹${subtotal.toLocaleString("en-IN")}` : ""
        }`}
      >
        <div className="cart-badge-icon-wrap">
          <svg
            className="cart-badge-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="cart-badge-counter">{itemCount}</span>
        </div>

        <div className="cart-badge-expand-content">
          <span className="cart-badge-count-text">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
          {subtotal > 0 ? (
            <>
              <span className="cart-badge-dot" aria-hidden="true">•</span>
              <span className="cart-badge-subtotal">₹{subtotal.toLocaleString("en-IN")}</span>
            </>
          ) : null}
          <span className="cart-badge-action">
            View <span className="cart-badge-arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </aside>
  );
}
