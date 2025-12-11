"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/cartContext";

export default function ProductCard({ product, isNew }) {
    const router = useRouter();
    const { addToCart } = useCart()

    const handleProductClick = (title) => {
        console.log(title)
        // Convert title → slug (e.g., "Pink Hodie" → "pink-hodie")
        const slug = title.toLowerCase().replace(/\s+/g, "-");
        router.push(`/shop/${slug}`);
    };
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
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                        }}
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
};

