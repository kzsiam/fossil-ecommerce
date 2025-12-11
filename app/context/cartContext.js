"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //  Load cart from localStorage when app loads
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  //  Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  //  Add to cart logic
  const addToCart = (product, selectedSize = null) => {
    const size = selectedSize || product.variants?.[0]?.title;
    const variant = product.variants?.find((v) => v.title === size);

    const itemToAdd = {
      id: `${product.id}-${size}`,
      productId: product.id,
      title: product.title,
      size,
      price: variant?.price || product.variants?.[0]?.price,
      image: product.images?.[0],
      quantity: 1,
    };

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemToAdd.id);
      if (existing) {
        return prev.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, itemToAdd];
      }
    });
  };

  //  Update quantity
  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(qty, 1) } : item
      )
    );
  };

  //  Remove single item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  //  Clear entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
