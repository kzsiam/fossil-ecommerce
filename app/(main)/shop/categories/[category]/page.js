"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Subscribe from "@/components/subscribe/subscribe";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard/page";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [isSticky, setIsSticky] = useState(false); //  scroll bg control
  const router = useRouter();
  const { category } = useParams();

  const decodedCategory = category?.replace(/-/g, " ") || "all";

  //  Fetch products by category
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

  //  Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (cat) => {
    const formattedCat = cat.toLowerCase().replace(/\s+/g, "-");
    router.push(`/shop/categories/${formattedCat}`);
  };

  return (
    <main className="w-full mx-0 px-0">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-start lg:gap-80 items-start mb-6 px-6 md:px-30">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 lg:mb-0">Shop</h1>
        <p className="text-black lg:text-left font-semibold max-w-[500px] break-words">
          Explore Fossil’s premium lifestyle clothing catalog, featuring high-end
          casual wear for the modern individual.
        </p>
      </div>

      {/* Tabs Section */}
      <div
        className={`flex lg:justify-end justify-start px-6 md:px-30 
        lg:sticky lg:top-15 lg:z-40 py-2 transition-all duration-300
        ${isSticky ? "bg-white shadow-sm" : "bg-transparent"}`}
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

      {/* Product Grid Section */}
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
                <ProductCard
                  key={product.id}
                  product={product}
                  isNew={isNew}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Subscribe Section */}
      <Subscribe />
    </main>
  );
}
