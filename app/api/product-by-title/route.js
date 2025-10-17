// import { NextResponse } from "next/server";
// import axios from "axios";

// export async function GET(req) {
//     const { searchParams } = new URL(req.url);
//     const title = searchParams.get("title");

//     if (!title) {
//         return NextResponse.json({ error: "Missing title" }, { status: 400 });
//     }

//     try {
//         // Fetch all products
//         const res = await axios.get(
//             `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products.json`,
//             {
//                 headers: {
//                     "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
//                 },
//             }
//         );

//         const products = res.data.products;

//         // Find product by title (case-insensitive)
//         const product = products.find(
//             (p) => p.title.toLowerCase() === title.toLowerCase()
//         );

//         if (!product) {
//             return NextResponse.json({ error: "Product not found" }, { status: 404 });
//         }

//         return NextResponse.json(product);
//     } catch (err) {
//         console.error("Error fetching product by title:", err.response?.data || err.message);
//         return NextResponse.json(
//             { error: "Failed to fetch product" },
//             { status: 500 }
//         );
//     }
// }
