import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-blue-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Sweet Delights
        </span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Home</a>
        <a href="#products" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Products</a>
        <a href="#about" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">About Us</a>
        <a href="#testimonials" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Testimonials</a>
        <a href="#contact" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Contact</a>
      </div>
      <div className="md:hidden">
        {/* Mobile menu icon (hamburger) */}
        <svg className="w-6 h-6 text-gray-800 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;