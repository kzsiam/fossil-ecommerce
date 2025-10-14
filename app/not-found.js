"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function NotFound() {
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  useEffect(() => {
    // Timeline for sequential animation
    const tl = gsap.timeline();

    // Animate heading (404) from top
    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate paragraph
    tl.from(
      contentRef.current.querySelector("p"),
      {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.5" // overlap slightly
    );

    // Animate button wrapper
    tl.from(buttonWrapperRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://framerusercontent.com/assets/Fm7pW6if3T4b4Y35ZCEaBpmD52w.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 " />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <p className="mt-2 text-sm text-gray-600 uppercase">
          Oops! Page doesn’t exist.
        </p>
        <h2
          ref={headingRef}
          className="mt-2 text-7xl font-semibold text-black"
        >
          <span className="text-gray-600">404</span> Page Not Found.
        </h2>

        {/* Button wrapper for GSAP */}
        <div ref={buttonWrapperRef}>
          <Link href="/" passHref>
            <Button className="mt-6 bg-transparent text-black hover:bg-transparent shadow-none border-none">
              Return Home <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
