"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id);
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount,
      cartTotal,
    }),
    [cartItems, cartCount, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
