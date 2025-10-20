

import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category")?.toLowerCase() || "all";

  try {
    // 🛍 Fetch products from Shopify Admin API
    const res = await axios.get(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products.json`,
      {
        headers: {
          "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
        },
      }
    );

    let products = res.data.products;

    // ✅ Filter by category
    if (category === "new") {
      const now = new Date();
      products = products.filter((p) => {
        const createdAt = new Date(p.created_at);
        const daysDiff = (now - createdAt) / (1000 * 60 * 60 * 24);
        return daysDiff <= 15; // added within last 15 days
      });
    } else if (category !== "all") {
      products = products.filter((p) => {
        if (!p.tags) return false;

        // 🧩 Normalize and split tags
        const tagsArray = p.tags
          .split(",")
          .map((t) => t.trim().toLowerCase());

        // Handle space or hyphen mismatch (e.g., "summer 2025" vs "summer-2025")
        const normalizedCategory = category.replace(/-/g, " ").trim();

        return tagsArray.some(
          (tag) =>
            tag === normalizedCategory ||
            tag.includes(normalizedCategory) ||
            normalizedCategory.includes(tag)
        );
      });
    }

    return NextResponse.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.response?.data || err.message);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

