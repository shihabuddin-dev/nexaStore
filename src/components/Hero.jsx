import React from "react";

export default function Hero() {
  return (
  <section className="relative w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-3xl text-center z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-300 drop-shadow-lg">
          Welcome to <span className="text-blue-400">nexaStore</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 font-medium">
          Discover the best products, unbeatable prices, and a seamless shopping experience.
        </p>
        <a
          href="/products"
          className="inline-block px-4 md:px-8 py-2 md:py-3 rounded-lg bg-blue-500 text-gray-900 font-semibold shadow-lg hover:bg-blue-400 transition-colors md:text-lg"
        >
          Browse Products
        </a>
       
      </div>
      <div className="absolute left-0 bottom-0 w-full pointer-events-none z-0">
        <svg className="w-full h-32 sm:h-48 md:h-56 lg:h-64 xl:h-72" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#hero-gradient)" fillOpacity="0.3" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          <defs>
            <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
