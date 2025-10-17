"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Subscribe from "@/components/subscribe/subscribe";
import axios from "axios";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { category } = useParams(); // e.g., "summer-2025"

  const decodedCategory = category?.replace(/-/g, " ") || "all";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/api/products?category=${decodedCategory}`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [decodedCategory]);

  console.log(products)
  const handleTabClick = (cat) => {
    const formattedCat = cat.toLowerCase().replace(/\s+/g, "-");
    router.push(`/shop/categories/${formattedCat}`);
  };

  const handleProductClick = (title) => {
  // Convert title → slug (e.g., "Pink Hodie" → "pink-hodie")
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  router.push(`/shop/${slug}`);
};

  return (
    <main className="w-full mx-0 px-0">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-start lg:gap-80 items-start mb-6 px-6 md:px-30">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 lg:mb-0">Shop</h1>
        <p className="text-black lg:text-left font-semibold max-w-[500px] break-words">
          Explore Fossil’s premium lifestyle clothing catalog, featuring high-end
          casual wear for the modern individual.
        </p>
      </div>

      {/* Tabs (Sticky on lg, no gap/border) */}
      <div
        className="flex lg:justify-end justify-start px-6 md:px-30
             lg:sticky lg:top-15 lg:z-40 bg-white py-4
             transition-all duration-300"
      >
        <Tabs value={decodedCategory}>
          <TabsList className="bg-transparent gap-4 flex-wrap p-0">
            {["all", "tops", "bottoms", "new", "summer 2025"].map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                onClick={() => handleTabClick(cat)}
                className="
          !bg-transparent !border-none !shadow-none rounded-none
          px-0 py-0 text-gray-500 hover:text-gray-700
          data-[state=active]:!bg-transparent data-[state=active]:text-black
          focus-visible:!ring-0 focus:!outline-none
          before:!bg-transparent after:!bg-transparent
        "
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>


      {/* Product Grid */}
      <div className="px-6 md:px-30 mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {products.length === 0 ? (
            <p className="text-gray-600 text-center w-full py-10">
              No products found in this category.
            </p>
          ) : (
            products.map((product) => {
              const createdDate = new Date(product.created_at);
              const today = new Date();
              const diffDays = (today - createdDate) / (1000 * 60 * 60 * 24);
              const isNew = diffDays <= 15;

              return (
                <Card
                  key={product.id}
                  onClick={() => handleProductClick(product.title)}
                  className="group overflow-hidden !bg-transparent !border-0 !shadow-none !rounded-none transition-transform duration-300"
                >
                  <CardContent className="p-0 flex flex-col items-center w-full relative">
                    <div className="relative w-full aspect-[4/5] overflow-hidden flex items-center justify-center">
                      <Image
                        src={product.images?.[0]?.src || "/fallback.png"}
                        alt={product.title}
                        fill
                        className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                        sizes="100vw"
                      />
                      {product.images?.[1]?.src && (
                        <Image
                          src={product.images[1].src}
                          alt={`${product.title} hover`}
                          fill
                          className="object-cover w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          sizes="100vw"
                        />
                      )}

                      {/* Tag Section */}
                      {isNew ? (
                        <span className="absolute top-3 left-3 bg-white text-black font-semibold text-xs px-3 py-1 rounded-sm shadow-lg">
                          NEW
                        </span>
                      ) : product.tags ? (
                        <span className="absolute top-3 left-3 bg-white text-black font-semibold text-xs px-2 py-1">
                          {product.tags}
                        </span>
                      ) : null}

                      <button
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 bg-black text-white px-8 py-3 flex items-center justify-between gap-8 shadow-md"
                        onClick={() => console.log(`Added ${product.title}`)}
                      >
                        <span className="text-xs font-semibold tracking-wide">
                          Quick Add
                        </span>
                        <Plus size={16} className="shrink-0" />
                      </button>
                    </div>

                    <div className="flex justify-between mt-3 w-full pb-4">
                      <p className="text-sm font-semibold text-gray-800">
                        {product.title}
                      </p>
                      <p className="text-xs text-black mt-1">
                        ${product.variants?.[0]?.price || "N/A"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>

      <Subscribe />
    </main>
  );
}
