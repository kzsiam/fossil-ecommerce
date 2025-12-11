"use client";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import flag from "@/public/images/flag.png";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useCart } from "../context/cartContext";

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart, updateQuantity, removeFromCart, totalQuantity, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  // Refs for animation
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  // Drawer animation with GSAP
  useEffect(() => {
    if (isCartOpen) {
      gsap.to(drawerRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
      });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none",
      });
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  // Handle clear cart 
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header
        className={`border-b fixed top-0 w-full z-50 transition-all duration-300 ${
          isCartOpen ? "bg-transparent border-b-0" : "bg-white"
        }`}
      >
        <nav className="flex items-center justify-between px-4 lg:px-12 py-4">
          {/* Left: Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/shop/categories/all">Shop</Link>
            <Link href="/brand">Brand</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Center: Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="flex items-center">
              fossil<span className="text-xs align-top">™</span>
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="#">Account</Link>
            <button className="text-sm">
              <Image width={20} height={20} src={flag} alt="flag" />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
              className="relative"
            >
              Cart({totalQuantity})
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-x-0 top-[64px] bottom-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium md:hidden z-40">
            <Link href="/shop/categories/all" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="/brand" onClick={() => setIsOpen(false)}>
              Brand
            </Link>
            <Link href="/journal" onClick={() => setIsOpen(false)}>
              Journal
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/40 z-40 opacity-0 pointer-events-none"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full bg-white shadow-xl z-50 flex flex-col translate-x-full w-full md:w-[400px]"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b p-6">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p>No items yet.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-6 bg-white sticky bottom-0">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-medium">Subtotal</h1>
              <div className="font-semibold text-lg">${total.toFixed(2)}</div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
              Checkout
            </button>
            <button
              onClick={handleClearCart}
              className="w-full mt-2 bg-gray-200 text-black py-3 rounded-md hover:bg-gray-300"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {/* Main content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
