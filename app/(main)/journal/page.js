import React from 'react';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "@/public/images/journal1.png"
import image2 from "@/public/images/journal2.png"
import image3 from "@/public/images/faq.png"
import style1 from "@/public/images/style1.png"
import style2 from "@/public/images/style2.png"
import style3 from "@/public/images/style3.png"

export default function Journal() {

    return (
        <div className='mt-20'>
            <div className='text-start'>
                <h1 className='text-7xl mx-20 font-bold'>Journal</h1>
            </div>
            <section className="w-full px-4 md:px-10 lg:px-20 py-12">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-0">(Featured)</h2>

                {/* Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-3">
                    {/* ========== First Large Image ========== */}
                    <Card className="!border-none !shadow-none !bg-transparent rounded-none overflow-hidden group">
                        <div className="relative w-full h-96 md:h-[400px] lg:h-[650px] overflow-hidden">
                            <Image
                                src={image1}
                                alt="Crafting Performance Wear"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>

                        <CardContent className="pt-2 flex justify-between items-center px-0">
                            <div>
                                <h3 className="font-semibold text-[16px] md:text-[16px]">
                                    Crafting Performance Wear
                                </h3>
                                <p className="text-sm text-muted-foreground">04.01.2025</p>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium mt-2">
                                <ArrowRight size={16} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* ========== Second Image ========== */}
                    <Card className="!border-none !shadow-none !bg-transparent rounded-none overflow-hidden group">
                        <div className="relative w-full h-72 md:h-[400px] lg:h-[350px] overflow-hidden">
                            <Image
                                src={image2}
                                alt="Timeless Comfort"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>

                        <CardContent className="pt-2 flex justify-between items-center px-0">
                            <div>
                                <h3 className="font-semibold text-[16px] md:text-[16px]">
                                    Timeless Comfort: The Fossil Way
                                </h3>
                                <p className="text-sm text-muted-foreground">05.04.2025</p>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium mt-2">
                                <ArrowRight size={16} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* ========== Third Image ========== */}
                    <Card className="!border-none !shadow-none !bg-transparent rounded-none overflow-hidden group">
                        <div className="relative w-full h-72 md:h-[400px] lg:h-[350px] overflow-hidden">
                            <Image
                                src={image3}
                                alt="Value of Quality"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>

                        <CardContent className="pt-2 flex justify-between items-center px-0">
                            <div>
                                <h3 className="font-semibold text-[16px] md:text-[16px] leading-snug">
                                    The Value of Quality: Investing in Timeless Fashion
                                </h3>
                                <p className="text-sm text-muted-foreground">06.12.2025</p>
                            </div>
                            <div className="flex items-center text-sm font-medium mt-2">
                                <ArrowRight size={16} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>



            <section className="w-full px-4 md:px-10 lg:px-20 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* ========== CARD 1 ========== */}
                    <Card className="group overflow-hidden border-0 shadow-none  transition-all duration-300">
                        <div className="relative w-full h-64 md:h-72 lg:h-80">
                            <Image
                                src={style1}
                                alt="Sustainable Style"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <CardContent className="p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm md:text-base font-semibold leading-snug">
                                    Sustainable Style: Fossil’s Commitment to Sustainability
                                </h3>
                                <ArrowRight className="w-5 h-5 text-gray-800 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                            <p className="text-xs text-gray-500">03.04.2025</p>
                        </CardContent>
                    </Card>

                    {/* ========== CARD 2 ========== */}
                    <Card className="group overflow-hidden border-0 shadow-none  transition-all duration-300">
                        <div className="relative w-full h-64 md:h-72 lg:h-80">
                            <Image
                                src={style2}
                                alt="Fashion in Motion"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <CardContent className="p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm md:text-base font-semibold leading-snug">
                                    Fashion in Motion
                                </h3>
                                <ArrowRight className="w-5 h-5 text-gray-800 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                            <p className="text-xs text-gray-500">03.12.2025</p>
                        </CardContent>
                    </Card>

                    {/* ========== CARD 3 ========== */}
                    <Card className="group overflow-hidden border-0 shadow-none  transition-all duration-300">
                        <div className="relative w-full h-64 md:h-72 lg:h-80">
                            <Image
                                src={style3}
                                alt="Style that Keeps Up with Your Active Life"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <CardContent className="p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm md:text-base font-semibold leading-snug">
                                    Style that Keeps Up with Your Active Life
                                </h3>
                                <ArrowRight className="w-5 h-5 text-gray-800 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                            <p className="text-xs text-gray-500">04.22.2025</p>
                        </CardContent>
                    </Card>
                </div>
            </section>



        </div>
    );
};
