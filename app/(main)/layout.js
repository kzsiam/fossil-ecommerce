"use client";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import flag from "@/public/images/flag.png";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Refs for animation targets
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  // Animate drawer with GSAP
  useEffect(() => {
    if (isCartOpen) {
      // Slide drawer in
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
      });
      // Prevent scroll behind drawer
      document.body.style.overflow = "hidden";
    } else {
      // Slide drawer out
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
      // Restore scroll
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className={`border-b fixed top-0 w-full z-50 transition-all duration-300 ${
    isCartOpen ? "bg-transparent border-b-0"  : "bg-white"
  }`}>
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
              Cart(0)
            </button>

            {/* Mobile Menu Button */}
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
        className="fixed inset-0 bg-black/40  z-40 opacity-0 pointer-events-none"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full bg-white shadow-xl z-50 p-6 flex flex-col translate-x-full w-full md:w-[400px]"
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Cart Items (placeholder) */}
        <div className="flex-1 overflow-y-auto">
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        </div>

        {/* Checkout Button */}
        <button className="mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-800">
          Checkout
        </button>
      </div>

      {/* Main content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
