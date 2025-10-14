"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import bgImage2 from "@/public/images/news.png";

gsap.registerPlugin(ScrollTrigger);

export default function Subscribe() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ============ Background Image Reveal Animation ============
      gsap.fromTo(
        ".subscribe-bg",
        { clipPath: "inset(0 0 100% 0)", opacity: 0.4, scale: 1.05 },
        {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          scale: 1,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".subscribe-bg",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ============ Only Title/Text Fade-Up Animation ============
      gsap.fromTo(
        ".subscribe-title",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".subscribe-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      {/* Newsletter Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full subscribe-bg">
          <Image
            src={bgImage2}
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center w-full h-full"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-full lg:max-w-6xl px-4 sm:px-6 text-white flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 md:gap-8 lg:gap-10 flex-wrap subscribe-content">
          {/* Title */}
          <div className="text-center lg:text-left flex-shrink-0 w-full lg:w-auto subscribe-title">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Get in on the News
            </h1>
          </div>

          {/* Form (No animation) */}
          <div className="w-full max-w-sm flex flex-col items-center lg:items-start">
            <h3 className="uppercase text-xs md:text-sm font-semibold tracking-wider mb-3 text-gray-200 text-center lg:text-left">
              Subscribe to our newsletter
            </h3>
            <form className="flex flex-wrap gap-2 items-stretch justify-center lg:justify-start w-full">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-[120px] md:min-w-[150px] bg-white text-black px-3 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <Button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-none hover:bg-gray-800 transition flex-shrink-0"
              >
                JOIN
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
