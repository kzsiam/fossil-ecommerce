"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Subscribe from "@/components/subscribe/subscribe";

import brand1 from "@/public/images/brand1.png";
import image1 from "@/public/images/ireland.png";
import image2 from "@/public/images/pima.png";

gsap.registerPlugin(ScrollTrigger);

export default function BrandPage() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==================== IMAGE REVEAL ANIMATION ====================
      const images = gsap.utils.toArray(".reveal-img");
      images.forEach((img) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          img,
          { 
            clipPath: "inset(0 0 100% 0)", 
            opacity: 0.4, 
            y: 50 
          }, // hidden from top with slight downward offset
          {
            clipPath: "inset(0 0 0% 0)", 
            opacity: 1, 
            y: 0,
            duration: 2.2, // slower reveal
            ease: "power2.out", // smoother easing
          }
        );
      });

      // ==================== TEXT FADE-UP ANIMATION ====================
      const texts = gsap.utils.toArray(".fade-up");
      texts.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.8, // slightly slower too
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="overflow-hidden">
      {/* ========== OUR BRAND SECTION ========== */}
      <section className="w-full px-4 md:px-10 lg:px-40 py-12">
        <h2 className="fade-up text-4xl md:text-5xl font-bold mb-8">Our Brand</h2>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr] gap-10 items-start lg:items-end">
          {/* Image */}
          <div className="reveal-img w-full">
            <Image
              src={brand1}
              alt="Founder"
              width={1000}
              height={600}
              className="w-full h-auto md:h-[450px] lg:h-[650px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="fade-up flex flex-col justify-start lg:justify-end space-y-4 h-full font-semibold">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              (Meet The Founder)
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              From the streets of New York City to the world stage, a passion
              for fashion sparked a movement. What began as a hobby – crafting
              unique garments for fun – evolved into a global brand, iconic for
              its retro flair and timeless style. Today, our watches and
              accessories are worn by style enthusiasts everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ========== BASED NEW YORK SECTION ========== */}
      <div className="based-text text-6xl md:text-8xl text-center font-bold mb-60 mt-20 fade-up">
        <h1>(Based)</h1>
        <h1>New York</h1>
      </div>

      {/* ========== SUSTAINABLE SECTION ========== */}
      <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_2.5fr_0.8fr] gap-8 items-start">
          {/* Left Text */}
          <div className="fade-up flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Sustainable Style: We Source Only the Finest Organic Cotton and
              Wool.
            </h2>

            <div className="grid lg:grid-cols-2 gap-5 font-semibold">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                At Fossil, we believe fashion and nature go hand-in-hand. That’s
                why we source only organic cotton and materials, reducing our
                environmental footprint.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Fossil is committed to sustainable practices. From seed to
                stitch, we’re minimizing our ecological footprint with 100%
                organic materials.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="reveal-img flex flex-col items-center space-y-2 w-full">
            <div className="w-full">
              <Image
                src={image1}
                alt="Sustainable Environment"
                width={1200}
                height={800}
                className="w-full h-auto object-contain bg-gray-100"
              />
            </div>
            <span className="text-xs md:text-sm text-gray-600">
              (Sourced from Ireland)
            </span>
          </div>

          {/* Right Image */}
          <div className="reveal-img flex flex-col items-center space-y-2 w-full">
            <div className="w-full">
              <Image
                src={image2}
                alt="Pima Cotton"
                width={600}
                height={600}
                className="w-full h-auto object-contain bg-gray-100"
              />
            </div>
            <span className="text-xs md:text-sm text-gray-600">
              (Pima Cotton)
            </span>
          </div>
        </div>
      </section>

      <section>
        <Subscribe />
      </section>
    </div>
  );
}
