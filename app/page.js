import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://framerusercontent.com/assets/Jrokg6alyBgm1Pjbi6TM0iK3Qww.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay for darkening the video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Image className="mb-10" src="https://framerusercontent.com/images/s6IdE1T9pWMvaniOcb8tnaSRZWM.svg" alt="" width={100}
            height={100} />

          <div className="text-white mb-5">
            <ul className="flex flex-col gap-4">
              {["Shop", "New Arrivals", "Brand", "Journal", "Contact"].map((item) => (
                <li
                  key={item}
                  className="relative group overflow-hidden h-6 flex items-center justify-center"
                >
                  {/* Dot */}
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                  {/* Text animation */}
                  <Link href="#" className="inline-block relative">
                    <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      {item}
                    </span>
                    <span className="block absolute top-full left-0 w-full text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

