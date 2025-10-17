// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";

// export default function ProductPage() {
//     const { slug } = useParams(); // e.g., "pink-hodie"
//     const [product, setProduct] = useState(null);

//     // Convert slug → title ("pink-hodie" → "Pink Hodie")
//     const title = slug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await axios.get(`/api/product-by-title?title=${title}`);
//                 setProduct(res.data);
//             } catch (err) {
//                 console.error("Error fetching product:", err);
//             }
//         };
//         if (title) fetchProduct();
//     }, [title]);

//     if (!product) return <p className="text-center mt-10">Loading...</p>;

//     return (
//         <main className="px-6 md:px-30 mt-20">
//             <div className="flex flex-col lg:flex-row gap-10">
//                 {/* Product Images */}
//                 <div className="relative w-full lg:w-1/2 aspect-square">
//                     <Image
//                         src={product.images?.[0]?.src || "/fallback.png"}
//                         alt={product.title}
//                         fill
//                         className="object-cover rounded-lg"
//                     />
//                 </div>

//                 {/* Product Info */}
//                 <div className="flex-1">
//                     <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//                     <p className="text-lg mb-4 text-gray-700">
//                         ${product.variants?.[0]?.price || "N/A"}
//                     </p>
//                     <p className="text-gray-600 leading-relaxed mb-6">
//                         {product.body_html
//                             ? product.body_html.replace(/<[^>]+>/g, "")
//                             : "No description available."}
//                     </p>

//                     <button className="bg-black text-white px-6 py-3 font-semibold">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </main>
//     );
// }
