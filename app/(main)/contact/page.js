

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import image from "@/public/images/contact.png"

export default function Contact() {


    return (
        <div className="flex flex-col lg:flex-row h-screen w-full">
            {/* Image First on Mobile, Last on Desktop */}
            <div className="order-1 lg:order-2 w-full lg:w-1/2 h-[510px] lg:h-full relative">
                <Image
                    src={image}
                    alt="Store"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Contact Form */}
            <div className="order-2 lg:mx-10 lg:order-1 flex justify-between items-center w-full lg:w-1/2 p-10">
                <div className="space-y-6 w-full max-w-md">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <form className="space-y-4">
                        <div className='lg:flex gap-2'>
                            <div className="space-y-2 mb-5">
                                <label htmlFor="name" className=" font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full py-2 mt-3 border-0 border-b border-gray-400 rounded-none focus:border-black focus:ring-0 focus:outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className=" font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full py-2 mt-3 border-0 border-b border-gray-400 rounded-none focus:border-black focus:ring-0 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className=" font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                className="w-full py-2 mt-3 border-0  border-b border-gray-400 rounded-none focus:border-black focus:ring-0 focus:outline-none"
                            />
                        </div>

                        <Button type="submit" className="bg-black text-white px-6 py-3">
                            Join
                        </Button>
                    </form>
                    <div className='flex justify-between font-semibold mt-15'>
                        <div>
                            <h1 className='mb-4'>(Location)</h1>
                            <p className='text-sm'>1456 Broadway</p>
                            <p className='text-sm'>New York, NY 10018</p>
                        </div>
                        <div>
                            <h1 className='mb-3'>(Phone)</h1>
                            <p className='text-sm'>949.245.8870</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
