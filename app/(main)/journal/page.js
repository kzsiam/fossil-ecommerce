"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";

import image1 from "@/public/images/journal1.png";
import image2 from "@/public/images/journal2.png";
import image3 from "@/public/images/faq.png";
import style1 from "@/public/images/style1.png";
import style2 from "@/public/images/style2.png";
import style3 from "@/public/images/style3.png";

export default function Journal() {
  const titleRef = useRef(null);
  const featuredRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate titles
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      featuredRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
    );

    // Hover animations for cards
    cardRefs.current.forEach((cardObj) => {
      if (!cardObj) return;

      const { card, arrow } = cardObj;
      const img = card.querySelector("img");
      const border = card.querySelector(".hover-border");

      card.addEventListener("mouseenter", () => {
        // Image zoom
        gsap.to(img, { scale: 1.1, duration: 0.4, ease: "power3.out" });
        // Bottom border
        gsap.to(border, { width: "100%", duration: 0.4, ease: "power3.out" });
        // Slow arrow slide and reset
        if (arrow) {
          const tl = gsap.timeline();
          tl.to(arrow, { x: 15, duration: 0.8, ease: "power3.out" }) // slower slide
            .to(arrow, { x: 0, duration: 0.5, ease: "power3.inOut" }); // smooth return
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.4, ease: "power3.out" });
        gsap.to(border, { width: "0%", duration: 0.4, ease: "power3.inOut" });
      });
    });
  }, []);

  const featuredCards = [
    {
      img: image1,
      title: "Crafting Performance Wear",
      date: "04.01.2025",
      height: "h-96 md:h-[400px] lg:h-[650px]",
    },
    {
      img: image2,
      title: "Timeless Comfort: The Fossil Way",
      date: "05.04.2025",
      height: "h-72 md:h-[400px] lg:h-[320px]",
    },
    {
      img: image3,
      title: "The Value of Quality: Investing in Timeless Fashion",
      date: "06.12.2025",
      height: "h-72 md:h-[400px] lg:h-[320px]",
    },
  ];

  const lowerCards = [
    {
      img: style1,
      title: "Sustainable Style: Fossil’s Commitment to Sustainability",
      date: "03.04.2025",
    },
    {
      img: style2,
      title: "Fashion in Motion",
      date: "03.12.2025",
    },
    {
      img: style3,
      title: "Style that Keeps Up with Your Active Life",
      date: "04.22.2025",
    },
  ];

  return (
    <div className="mt-20">
      {/* JOURNAL TITLE */}
      <div className="text-start">
        <h1 ref={titleRef} className="text-7xl mx-20 font-bold">
          Journal
        </h1>
      </div>

      {/* FEATURED SECTION */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-12">
        <h2
          ref={featuredRef}
          className="text-2xl md:text-3xl font-semibold mb-0"
        >
          (Featured)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-4 mt-6">
          {featuredCards.map((card, idx) => (
            <Card
              key={idx}
              ref={(el) =>
                (cardRefs.current[idx] = { card: el, arrow: cardRefs.current[idx]?.arrow })
              }
              className="group !border-none !shadow-none !bg-transparent flex flex-col overflow-hidden relative rounded-none"
            >
              <div className={`relative w-full ${card.height} overflow-hidden`}>
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </div>

              <CardContent className="pt-4 flex justify-between items-center px-0 relative">
                <div>
                  <h3 className="font-semibold text-[16px] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{card.date}</p>
                </div>
                <ArrowRight
                  size={16}
                  ref={(el) =>
                    (cardRefs.current[idx] = { card: cardRefs.current[idx]?.card, arrow: el })
                  }
                  className="transition-transform duration-300"
                />
              </CardContent>

              <div className="hover-border absolute left-0 bottom-0 h-[3px] bg-black w-0"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* LOWER 3 CARDS */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lowerCards.map((card, idx) => (
            <Card
              key={idx + 3}
              ref={(el) =>
                (cardRefs.current[idx + 3] = { card: el, arrow: cardRefs.current[idx + 3]?.arrow })
              }
              className="group flex flex-col overflow-hidden border-0 shadow-none relative rounded-none"
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={card.img}
                  alt={`Style ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </div>

              <CardContent className="p-4 flex flex-col gap-2 relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm md:text-base font-semibold leading-snug">
                    {card.title}
                  </h3>
                  <ArrowRight
                    ref={(el) =>
                      (cardRefs.current[idx + 3] = {
                        card: cardRefs.current[idx + 3]?.card,
                        arrow: el,
                      })
                    }
                    className="w-5 h-5 text-gray-800 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs text-gray-500">{card.date}</p>
              </CardContent>

              <div className="hover-border absolute left-0 bottom-0 h-[3px] bg-black w-0"></div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
