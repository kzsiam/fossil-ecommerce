import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get("tag");
  

  if (!tag) {
    return NextResponse.json({ error: "Tag is required" }, { status: 400 });
  }

  try {
    // ✅ Fetch all products from Shopify
    const res = await axios.get(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products.json`,
      {
        headers: {
          "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
        },
      }
    );

    // ✅ Filter products by tag
    const filtered = res.data.products.filter((p) =>
      p.tags?.toLowerCase().includes(tag.toLowerCase())
    );

    return NextResponse.json(filtered, { status: 200 });
  } catch (err) {
    console.error("❌ Error fetching products:", err.message);
    return NextResponse.json(
      { error: "Failed to fetch related products", details: err.message },
      { status: 500 }
    );
  }
}









// import { NextResponse } from "next/server";
// import axios from "axios";

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const tag = searchParams.get("tag");
  
//   try {
//     const res = await axios.get(`https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products.json?tag=${tag}`);
//     return NextResponse.json(res.data.products);
    
    
//   } catch (err) {
//     return NextResponse.json({ error: "Failed to fetch related products" }, { status: 500 });
//   }

  
// }


