// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { cn } from "@/lib/utils";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Link from "next/link";

// export default function ProductPage() {
//   const [selectedSize, setSelectedSize] = useState(null);

//   const { slug } = useParams(); // e.g., "pink-hodie"
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (!slug) return;

//     // Convert slug (pink-hodie) → title (Pink Hodie)
//     const title = slug.replace(/-/g, " ");

//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`/api/product-by-title?title=${title}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   if (!product) {
//     return <p className="p-8 text-gray-500">Loading...</p>;
//   }

//   const extractSection = (tag) => {
//     const regex = new RegExp(`\\[${tag}\\]<br>(.*?)<\\/p>`, "s");
//     const match = product.body_html.match(regex);
//     return match ? match[1].trim() : null;
//   };


//   // Extract each section
//   const description = extractSection("DESCRIPTION");
//   const sizeChart = extractSection("SIZE");
//   const returnPolicy = extractSection("RETURN_POLICY");
//   const sizeList = sizeChart
//     .split(/<br\s*\/?>/g)
//     .map((line) => line.trim())
//     .filter(Boolean);


//   return (
//     <div className="w-full">
      
//       <h1 className="text-sm font-semibold text-start px-4 lg:px-5 mt-24 mb-0 flex items-center gap-2">
//         <Link  href={"/"}>Home</Link>
//         <span>/</span>
//         <Link className="capitalize" href={`/shop/categories/${product.tags}`}>{product.tags}</Link>
//       </h1>

//       {/* ✅ Main Grid */}
//       <main className="min-h-screen w-full bg-white grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 px-4 lg:px-5 py-4">

//         {/* LEFT SIDE - Mobile Carousel */}
//         <div className="block sm:hidden w-full">
//           <Swiper
//             modules={[Navigation, Pagination]}
//             navigation
//             pagination={{ clickable: true }}
//             className="w-full h-[500px]"
//           >
//             {product.images.map((src, i) => (
//               <SwiperSlide key={i}>
//                 <div className="relative w-full h-[500px]">
//                   <Image
//                     src={src}
//                     alt={`${product.title} image ${i + 1}`}
//                     fill
//                     className="object-cover object-center"
//                     sizes="100vw"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* LEFT SIDE - Tablet & Desktop Grid */}
//         <div className="hidden sm:grid grid-cols-2 gap-2 w-full">
//           {product.images.map((src, i) => (
//             <div key={i} className="relative w-full h-[700px] overflow-hidden">
//               <Image
//                 src={src}
//                 alt={`${product.title} image ${i + 1}`}
//                 fill
//                 className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDE - Product Details */}
//         <div className="relative">
//           <div className="sticky top-20">
//             {/* Product Title */}
//             <h2 className="text-3xl font-semibold mb-6">{product.title}</h2>

//             {/* Size Selector */}
//             <div className="mb-4">
//               <p className="text-sm font-medium mb-2">Size</p>
//               <div className="flex gap-2 flex-wrap">
//                 {product.variants.map((size) => (
//                   <button
//                     key={size.title}
//                     onClick={() => setSelectedSize(size.title)}
//                     className={cn(
//                       "px-4 py-2 border border-gray-300 text-sm font-medium transition-all",
//                       selectedSize === size.title
//                         ? "bg-black text-white"
//                         : "bg-transparent text-gray-800 hover:bg-gray-100"
//                     )}
//                   >
//                     {size.title}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Shop Pay Button */}
//             <Button className="bg-[#9b8cf3] text-white w-full text-lg py-6 mt-2 rounded-none hover:bg-[#8a7ce5]">
//               Shop Pay
//             </Button>

//             {/* Accordions */}
//             <Accordion type="single" collapsible className="w-full border-t border-gray-200 pt-4 mt-4">
//               <AccordionItem value="description">
//                 <AccordionTrigger>Description</AccordionTrigger>
//                 <AccordionContent className="text-gray-600">{description}</AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="sizefit">
//                 <AccordionTrigger>Size & Fit</AccordionTrigger>
//                 <AccordionContent className="text-gray-600">
//                   <ul className="list-disc list-inside space-y-1">
//                     {sizeList.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="returns">
//                 <AccordionTrigger>Returns</AccordionTrigger>
//                 <AccordionContent className="text-gray-600">{returnPolicy}</AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </div>

//       </main>
//     </div>

//   );
// }
