"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "harmony-of-cells-cart-v1";
const CartContext = createContext(null);

function validItem(item) {
  return item && ["product", "course"].includes(item.type) && typeof item.name === "string" && item.name.trim();
}

function getStoredItems() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter(validItem).map((item) => ({
      ...item,
      quantity: item.type === "course" ? 1 : Math.max(1, Math.min(99, Number(item.quantity) || 1)),
    })) : [];
  } catch { return []; }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => { setItems(getStoredItems()); setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items, ready]);

  const value = useMemo(() => ({
    items, ready,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    addItem(item) {
      if (!validItem(item)) return;
      setItems((current) => {
        const existing = current.findIndex((entry) => entry.type === item.type && entry.name === item.name);
        if (existing < 0) return [...current, { ...item, quantity: 1 }];
        if (item.type === "course") return current;
        return current.map((entry, index) => index === existing ? { ...entry, quantity: Math.min(99, entry.quantity + 1) } : entry);
      });
    },
    updateQuantity(type, name, quantity) {
      setItems((current) => current.map((item) => item.type === type && item.name === name && type === "product"
        ? { ...item, quantity: Math.max(1, Math.min(99, Number(quantity) || 1)) } : item));
    },
    removeItem(type, name) { setItems((current) => current.filter((item) => item.type !== type || item.name !== name)); },
    clearCart() { setItems([]); },
  }), [items, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
