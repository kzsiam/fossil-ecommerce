import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white px-6 md:px-0 py-12 ">
                <div className="mx-10">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        {/* Newsletter */}
                        <div className="w-full md:w-1/3">
                            <h3 className="uppercase text-xs font-semibold mb-3">
                                Subscribe to our newsletter
                            </h3>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-black border-b  border-gray-600 rounded-none text-white focus-visible:ring-0 focus-visible:border-white"
                                />
                                <Button
                                    type="submit"
                                    className="bg-gray-900 text-white rounded hover:bg-gray-700 transition"
                                >
                                    Join
                                </Button>
                            </form>
                        </div>

                        {/* Footer Links */}
                        <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
                            <div>
                                <h4 className="text-xs uppercase text-gray-400 mb-3">
                                    Customer Care
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/account" className="hover:underline">Account</Link></li>
                                    <li><Link href="/store" className="hover:underline">Our Store</Link></li>
                                    <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs uppercase text-gray-400 mb-3">
                                    Navigate
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/shop" className="hover:underline">Shop</Link></li>
                                    <li><Link href="/brand" className="hover:underline">Brand</Link></li>
                                    <li><Link href="/journal" className="hover:underline">Journal</Link></li>
                                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs uppercase text-gray-400 mb-3">
                                    Other
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
                                    <li><Link href="/404" className="hover:underline">404</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p className="text-9xl font-bold text-white">fossil.</p>
                        <div className="flex">
                            <p className="uppercase">By Flowit Supply</p>
                            <p>© {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}