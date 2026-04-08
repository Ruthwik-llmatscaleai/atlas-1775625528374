import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1542826433-cf75176ad178?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Baking cookies"
            className="rounded-xl shadow-lg w-full h-auto object-cover transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Story: A Passion for Baking
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Sweet Delights started with a simple dream: to share the joy of homemade cookies with the world.
            Founded by a passionate baker, we believe in using only the finest, freshest ingredients to create
            cookies that taste just like grandma used to make.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Every cookie is baked with love, care, and a commitment to quality. From classic recipes to innovative
            new flavors, we strive to bring a smile to your face with every bite.
          </p>
          <a
            href="#contact"
            className="inline-block bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;