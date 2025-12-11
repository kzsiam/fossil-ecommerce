"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import ProductCard from "@/components/ProductCard/page";
import { useCart } from "@/app/context/cartContext";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);


  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  const {addToCart} = useCart()

  useEffect(() => {
    if (!slug) return;

    const title = slug.replace(/-/g, " ");

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/product-by-title?title=${title}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [slug]);

  useEffect(() => {
    if (!product?.tags) return;

    const fetchRelatedProducts = async () => {
      try {
        const res = await axios.get(`/api/products-by-tag?tag=${product.tags}`);
        console.log(" API raw response:", res.data);

        const filtered = res.data.filter((p) => p.id !== product.id);
        setRelatedProducts(filtered);
      } catch (err) {
        console.error(" Error fetching related products:", err);
      }
    };

    fetchRelatedProducts();
  }, [product]);


  console.log(product)

  if (!product) {
    return <p className="p-8 text-gray-500">No matching product here</p>;
  }

  const extractSection = (tag) => {
    const regex = new RegExp(`\\[${tag}\\]<br>(.*?)<\\/p>`, "s");
    const match = product.body_html.match(regex);
    return match ? match[1].trim() : null;
  };


  console.log(product.tags)
  const description = extractSection("DESCRIPTION");
  const sizeChart = extractSection("SIZE");
  const returnPolicy = extractSection("RETURN_POLICY");
  const sizeList = sizeChart
    .split(/<br\s*\/?>/g)
    .map((line) => line.trim())
    .filter(Boolean);


  return (
    <div className="w-full">

      <h1 className="text-sm font-semibold text-start px-4 lg:px-5 mt-24 mb-0 flex items-center gap-2">
        <Link href={"/"}>Home</Link>
        <span>/</span>
        <Link className="capitalize" href={`/shop/categories/${product.tags}`}>{product.tags}</Link>
      </h1>


      <main className="min-h-screen w-full bg-white grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 px-4 lg:px-5 py-4">


        <div className="block sm:hidden w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-[500px]"
          >
            {product.images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[500px]">
                  <Image
                    src={src}
                    alt={`${product.title} image ${i + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className="hidden sm:grid grid-cols-2 gap-2 w-full">
          {product.images.map((src, i) => (
            <div key={i} className="relative w-full h-[700px] overflow-hidden">
              <Image
                src={src}
                alt={`${product.title} image ${i + 1}`}
                fill
                className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>


        <div className="relative">
          <div className="sticky top-20">

            <h2 className="text-3xl font-semibold">{product.title}</h2>
            <h1 className="mb-6 font-semibold text-[12px]">${product.variants.find(v => v.title === selectedSize)?.price || product.variants?.[0]?.price}</h1>

            <div className="mb-1">
              <p className="text-sm font-medium mb-2">Size</p>

              <div className="flex gap-1 flex-wrap mb-10">
                {product.variants.map((size) => (
                  <button
                    key={size.title}
                    onClick={() => setSelectedSize(size.title)}
                    className={cn(
                      "px-4 py-4 border border-gray-300 text-sm font-medium transition-all ",
                      selectedSize === size.title
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-gray-800 hover:bg-gray-100"
                    )}
                  >
                    {size.title}
                  </button>
                ))}
              </div>

              {/* Add to Cart / Select Size button */}
              {!selectedSize ? (
                <button
                  disabled
                  className="w-full bg-gray-200 text-gray-500 py-3 rounded-sm cursor-not-allowed"
                >
                  Select Size
                </button>
              ) : (
                <button onClick={() => addToCart(product,selectedSize)} className="w-full bg-black text-white py-3 rounded-sm hover:bg-gray-800 transition">
                  <div className="flex justify-between items-center px-4">
                    <h1 className="text-sm font-medium">Add to Cart</h1>
                    <h1 className="text-[12px] font-semibold">
                      ${product.variants.find(v => v.title === selectedSize)?.price || product.variants?.[0]?.price}
                    </h1>
                  </div>
                </button>
              )}
            </div>

            <Button className="bg-[#9b8cf3] text-white w-full text-lg py-6 mt-0 rounded-sm hover:bg-[#8a7ce5]">
              Shop Pay
            </Button>

            <Accordion type="single" collapsible className="w-full border-t border-gray-200 pt-4 mt-4">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent className="text-gray-600">{description}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="sizefit">
                <AccordionTrigger>Size & Fit</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    {sizeList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns">
                <AccordionTrigger>Returns</AccordionTrigger>
                <AccordionContent className="text-gray-600">{returnPolicy}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </main>

      <div className="px-6 md:px-30  mt-30">
        <h1 className="text-xl font-semibold"> More <span className="capitalize">{product.tags}s</span></h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {relatedProducts.length === 0 ? (
            <p className="text-gray-600 text-center w-full py-10">
              No products found in this category.
            </p>
          ) : (
            relatedProducts.map((relatedProduct) => {
              const createdDate = new Date(product.created_at);
              const today = new Date();
              const diffDays = (today - createdDate) / (1000 * 60 * 60 * 24);
              const isNew = diffDays <= 15;

              return (
                <ProductCard key={relatedProduct.id} product={relatedProduct} isNew={isNew} ></ProductCard>
              );
            })
          )}
        </div>
      </div>
    </div>

  );
}
