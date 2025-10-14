"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Subscribe from "@/components/subscribe/subscribe";
import bgImage1 from "@/public/images/faq.png";

gsap.registerPlugin(ScrollTrigger);

export default function Privacy() {
  const container = useRef(null);
  const faqRefs = useRef({});

  const faqData = [
    {
      title: "Product",
      items: [
        {
          q: "What materials are used in your products?",
          a: "We're committed to sustainability and use high-quality, eco-friendly materials like organic cotton, recycled polyester, and Tencel.",
        },
        {
          q: "How do I care for my product to make it last longer?",
          a: "Wash in cold water, avoid harsh chemicals, and air dry when possible to extend your product’s life.",
        },
        {
          q: "Are your products designed for specific occasions or everyday wear?",
          a: "Our products are versatile and suitable for both daily wear and special occasions.",
        },
        {
          q: "Where are your products made?",
          a: "All products are ethically produced in certified facilities ensuring fair labor and sustainable practices.",
        },
      ],
    },
    {
      title: "Shipping",
      items: [
        {
          q: "What shipping options do you offer?",
          a: "We offer standard ground shipping, expedited shipping, and express shipping options to fit your needs.",
        },
        {
          q: "How long does shipping take?",
          a: "Shipping times vary depending on your location, but standard ground shipping typically takes 3-7 business days within the continental US.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to select countries worldwide. Additional shipping costs and delivery times may apply.",
        },
        {
          q: "Can I track my order?",
          a: "Yes, once your order ships, you'll receive tracking information via email.",
        },
      ],
    },
    {
      title: "Returns",
      items: [
        {
          q: "Can I return or exchange an item if it doesn't fit or meet my expectations?",
          a: "Yes, you can return or exchange an item within 30 days of delivery. Please see our full return policy for details.",
        },
        {
          q: "How do I initiate a return or exchange?",
          a: "To start a return or exchange, contact our customer service team via email or phone, and we'll guide you through the process.",
        },
        {
          q: "What is the condition of the item when returning it?",
          a: "Items must be in their original condition with all tags attached and in their original packaging.",
        },
        {
          q: "Do I get a full refund for returned items?",
          a: "Yes, you'll receive a full refund once we receive and process your returned item.",
        },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-hero-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-hero-text",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".faq-left-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".faq-left-text",
            start: "top 80%",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const handleAccordionToggle = (id) => {
    const el = faqRefs.current[id];
    if (!el) return;

    // Wait a tiny bit until the accordion opens (DOM visible)
    requestAnimationFrame(() => {
      const isVisible = el.offsetParent !== null;
      if (isVisible) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }
    });
  };

  return (
    <div ref={container}>
      {/* Header */}
      <section className="relative w-screen h-60 md:h-72 lg:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bgImage1}
            alt="FAQ background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-full lg:max-w-6xl faq-hero-text">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            FAQ&apos;s
          </h1>
        </div>
      </section>

      {/* FAQ Grid */}
      <div className="mt-20 lg:mx-20 bg-white border-b mb-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] w-full max-w-full">
          {/* Left */}
          <div className="hidden lg:flex items-start justify-start">
            <div className="sticky top-20 mr-20 h-fit font-semibold faq-left-text">
              <h1 className="text-xl font-bold mb-5">
                Frequently Asked Questions: Get the Answers You Need
              </h1>
              <p className="mb-5">
                Find answers to common questions about our products, orders, and
                more. Still need help? Email us at:
              </p>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-gray-700" />
                <p>info@fossil.com</p>
              </div>
            </div>
          </div>

          {/* Mobile Title */}
          <div className="lg:hidden w-full p-4 bg-white faq-left-text">
            <h1 className="text-2xl font-bold">
              Frequently Asked Questions: Get the Answers You Need
            </h1>
          </div>

          {/* Right Accordion */}
          <div className="lg:border-l border-b overflow-y-auto no-scrollbar">
            <div className="p-6 lg:px-20 w-full mx-auto max-w-full">
              {faqData.map((section, i) => (
                <div key={i} className="mb-10 max-w-full">
                  <h2 className="bg-gray-200 inline-block text-sm px-2">
                    {section.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, j) => {
                      const id = `${i}-${j}`;
                      return (
                        <AccordionItem key={id} value={`item-${id}`}>
                          <AccordionTrigger
                            className="text-xl font-semibold border-none hover:no-underline focus:no-underline"
                            onClick={() => handleAccordionToggle(id)}
                          >
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div
                              ref={(el) => (faqRefs.current[id] = el)}
                              className="flex flex-col gap-4 text-balance"
                            >
                              <p className="font-semibold">{item.a}</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
    </div>
  );
}
