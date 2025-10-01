
"use client"
import Link from "next/link";
// import Footer from "../components/footer/footer";
import Footer from "@/components/footer/footer";

import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";


export default function MainLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">

      <header className="border-b relative z-50">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 lg:px-12 py-4 bg-white">
          {/* Left: Links (Desktop only) */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#">Shop</Link>
            <Link href="#">Brand</Link>
            <Link href="#">Journal</Link>
            <Link href="#">Contact</Link>
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
            <button className="text-sm">🇺🇸</button>
            <button aria-label="Cart" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
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

        {/* Mobile Menu Full Screen (below navbar) */}
        {isOpen && (
          <div className="fixed inset-x-0 top-[64px] bottom-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium md:hidden z-40">
            <Link href="#" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Brand</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Journal</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center">{children}</main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
