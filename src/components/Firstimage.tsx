"use client";

import Image from "next/image";
import Link from "next/link";

export default function Firstimage() {



  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="flex flex-col items-center justify-center max-w-xl w-full space-y-8 md:space-y-12">
        
        {/* Logo */}
        <div className="relative w-full max-w-2xl md:max-w-4xl aspect-[3/2] drop-shadow-2xl">
          <Image
            src="/morepluslogo.png"
            alt="MorePlus Detergent"
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-6 md:space-y-8 max-w-3xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-6 max-w-2xl mx-auto font-serif italic tracking-wide">
            Discover our range of high-quality cleaning solutions designed to meet all your household and industrial needs with unmatched effectiveness and care.
          </p>

          {/* Button */}
          <div className="pt-4 md:pt-6">
          <Link
              href="/Typecard"
              className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-all duration-700"></span>
              <span className="relative flex items-center space-x-2">
                <span>View Our Products</span>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <p className="text-sm md:text-base text-gray-500 font-light tracking-wider uppercase">
            Premium Quality • Trusted Results
          </p>
        </div>
      </div>
    </main>
  );
}
