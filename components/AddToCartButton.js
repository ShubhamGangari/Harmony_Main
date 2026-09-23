"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToCartButton({ item, className = "card-link" }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  function handleClick() {
    addItem(item);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }
  return <button type="button" className={className} onClick={handleClick}>{added ? "Added to cart" : "Add to cart"} <span aria-hidden="true">→</span></button>;
}
