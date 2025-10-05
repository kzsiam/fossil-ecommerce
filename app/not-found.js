

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://framerusercontent.com/assets/Fm7pW6if3T4b4Y35ZCEaBpmD52w.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

        <p className="mt-2 text-sm text-gray-600 uppercase">Oops! Page doesn’t exist.</p>
        <h2 className="mt-2 text-7xl font-semibold text-black"><span className="text-gray-600">404</span> Page Not Found.</h2>

        <Link href="/" passHref>
          <Button
            className="mt-6 bg-transparent text-black hover:bg-transparent shadow-none border-none"
          >
            Return Home <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>



  )
}
