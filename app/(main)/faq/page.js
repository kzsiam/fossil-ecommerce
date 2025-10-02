// import bgImage1 from "@/public/images/faq.png"
// import bgImage2 from "@/public/images/news.png"
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail } from "lucide-react";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"
// import { Button } from "@/components/ui/button";

// export default function Privacy() {

//     const faqData = [
//         {
//             title: "Product",
//             items: [
//                 {
//                     q: "What materials are used in your products?",
//                     a: "We're committed to sustainability and use high-quality, eco-friendly materials like organic cotton, recycled polyester, and Tencel."
//                 },
//                 {
//                     q: "How do I care for my product to make it last longer?",
//                     a: "Wash in cold water, avoid harsh chemicals, and air dry when possible to extend your product’s life."
//                 },
//                 {
//                     q: "Are your products designed for specific occasions or everyday wear?",
//                     a: "Our products are versatile and suitable for both daily wear and special occasions."
//                 },
//                 {
//                     q: "Where are your products made?",
//                     a: "All products are ethically produced in certified facilities ensuring fair labor and sustainable practices."
//                 },
//             ]
//         },
//         {
//             title: "Shipping",
//             items: [
//                 {
//                     q: "What shipping options do you offer?",
//                     a: "We offer standard ground shipping, expedited shipping, and express shipping options to fit your needs."
//                 },
//                 {
//                     q: "How long does shipping take?",
//                     a: "Shipping times vary depending on your location, but standard ground shipping typically takes 3-7 business days within the continental US."
//                 },
//                 {
//                     q: "Do you ship internationally?",
//                     a: "Yes, we ship to select countries worldwide. Additional shipping costs and delivery times may apply."
//                 },
//                 {
//                     q: "Can I track my order?",
//                     a: "Yes, once your order ships, you'll receive tracking information via email."
//                 },
//             ]
//         },
//         {
//             title: "Returns",
//             items: [
//                 {
//                     q: "Can I return or exchange an item if it doesn't fit or meet my expectations?",
//                     a: "Yes, you can return or exchange an item within 30 days of delivery. Please see our full return policy for details."
//                 },
//                 {
//                     q: "How do I initiate a return or exchange?",
//                     a: "To start a return or exchange, contact our customer service team via email or phone, and we'll guide you through the process."
//                 },
//                 {
//                     q: "What is the condition of the item when returning it?",
//                     a: "Items must be in their original condition with all tags attached and in their original packaging."
//                 },
//                 {
//                     q: "Do I get a full refund for returned items?",
//                     a: "Yes, you'll receive a full refund once we receive and process your returned item."
//                 },
//             ]
//         }
//     ];
//     return (
//         <div className="">
//             {/* FAQ Header Section */}
//             <section className="relative w-screen h-60 md:h-72 lg:h-96 flex items-center justify-center overflow-hidden">
//                 {/* Background Image */}
//                 <div className="absolute inset-0 w-full h-full">
//                     <Image
//                         src={bgImage1}
//                         alt="FAQ background"
//                         fill
//                         priority
//                         sizes="100vw"
//                         className="object-cover object-center w-full h-full"
//                     />
//                 </div>

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/50" />

//                 {/* Text Content */}
//                 <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-full lg:max-w-6xl">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
//                         FAQ&apos;s
//                     </h1>
//                 </div>
//             </section>

//             {/* FAQ Grid */}
//             <div className="mt-20 lg:mx-20 bg-white border-b mb-30">
//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] w-full max-w-full">
//                     {/* Left Section */}
//                     <div className="hidden lg:flex items-start justify-start">
//                         <div className="sticky top-20 mr-20 h-fit font-semibold">
//                             <h1 className="text-xl font-bold mb-5">
//                                 Frequently Asked Questions: Get the Answers You Need
//                             </h1>
//                             <p className="mb-5">
//                                 Find answers to common questions about our products, orders, and more. Still need help? Email us at:
//                             </p>
//                             <div className="flex items-center gap-1">
//                                 <Mail className="w-4 h-4 text-gray-700" />
//                                 <p>info@fossil.com</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Mobile Title */}
//                     <div className="lg:hidden w-full p-4 bg-white">
//                         <h1 className="text-2xl font-bold">
//                             Frequently Asked Questions: Get the Answers You Need
//                         </h1>
//                     </div>

//                     {/* Right Section */}
//                     <div className="lg:border-l border-b overflow-y-auto no-scrollbar">
//                         <div className="p-6 lg:px-20 w-full mx-auto max-w-full">
//                             {faqData.map((section, i) => (
//                                 <div key={i} className="mb-10 max-w-full">
//                                     <h2 className="bg-gray-200 inline-block text-sm px-2">{section.title}</h2>
//                                     <Accordion type="single" collapsible className="w-full">
//                                         {section.items.map((item, j) => (
//                                             <AccordionItem key={j} value={`item-${j}`}>
//                                                 <AccordionTrigger className="text-xl font-semibold border-none hover:no-underline focus:no-underline">
//                                                     {item.q}
//                                                 </AccordionTrigger>
//                                                 <AccordionContent className="flex flex-col gap-4 text-balance">
//                                                     <p className="font-semibold">{item.a}</p>
//                                                 </AccordionContent>
//                                             </AccordionItem>
//                                         ))}
//                                     </Accordion>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Newsletter Section */}
//             <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
//                 {/* Background Image */}
//                 <div className="absolute inset-0 w-full h-full">
//                     <Image
//                         src={bgImage2}
//                         alt="Background"
//                         fill
//                         priority
//                         sizes="100vw"
//                         className="object-cover object-center w-full h-full"
//                     />
//                 </div>

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/50" />

//                 {/* Content */}
//                 <div className="relative z-10 w-full max-w-full lg:max-w-6xl px-4 sm:px-6 text-white flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 md:gap-8 lg:gap-10 flex-wrap">
//                     {/* Title */}
//                     <div className="text-center lg:text-left flex-shrink-0 w-full lg:w-auto">
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//                             Get in on the News
//                         </h1>
//                     </div>

//                     {/* Form */}
//                     <div className="w-full max-w-sm flex flex-col items-center lg:items-start">
//                         <h3 className="uppercase text-xs md:text-sm font-semibold tracking-wider mb-3 text-gray-200 text-center lg:text-left">
//                             Subscribe to our newsletter
//                         </h3>
//                         <form className="flex flex-wrap gap-2 items-stretch justify-center lg:justify-start w-full">
//                             <input
//                                 type="email"
//                                 placeholder="Your email"
//                                 className="flex-1 min-w-[120px] md:min-w-[150px] bg-white text-black px-3 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-400"
//                             />
//                             <Button
//                                 type="submit"
//                                 className="bg-black text-white px-5 py-2 rounded-none hover:bg-gray-800 transition flex-shrink-0"
//                             >
//                                 JOIN
//                             </Button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </div>

//     )
// }







