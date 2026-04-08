import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Sweet Delights</h3>
          <p className="text-sm">
            Freshly baked cookies, made with love.
            <br />
            Taste the difference in every bite.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
            <li><a href="#products" className="hover:text-blue-500 transition-colors duration-300">Products</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition-colors duration-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h3>
          <p className="text-sm">
            Email: info@sweetdelights.com
            <br />
            Phone: (123) 456-7890
            <br />
            123 Cookie Lane, Sweetville, CA 90210
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;