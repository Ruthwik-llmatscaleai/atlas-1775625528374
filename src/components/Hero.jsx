import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-500 to-violet-500 text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Indulge in <br className="hidden md:inline"/> Heavenly Cookies
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Freshly baked with love, every single day. Taste the difference!
          </p>
          <a
            href="#products"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Our Flavors
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1596590213122-d0f9485741f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Delicious Cookies"
            className="w-full max-w-md rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
      {/* Background shapes for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white opacity-10 rounded-full blur-xl animate-pulse delay-200"></div>
      </div>
    </section>
  );
}

export default Hero;