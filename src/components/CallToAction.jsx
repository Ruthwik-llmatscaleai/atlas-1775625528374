import React from 'react';

function CallToAction() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Ready for a Sweet Treat?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Order your favorite cookies today and experience the joy of Sweet Delights delivered right to your door!
        </p>
        <a
          href="#products"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Order Now!
        </a>
      </div>
    </section>
  );
}

export default CallToAction;