import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "These are hands down the best cookies I've ever tasted! So fresh and flavorful.",
    author: "Sarah J.",
    city: "New York",
  },
  {
    id: 2,
    quote: "Sweet Delights never disappoints. Their chocolate chip cookies are my absolute favorite!",
    author: "Mark T.",
    city: "Los Angeles",
  },
  {
    id: 3,
    quote: "Perfect for any occasion. The variety and quality are simply amazing. Highly recommend!",
    author: "Emily R.",
    city: "Chicago",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-r from-blue-500 to-violet-500 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          What Our Customers Say
        </h2>
        <p className="text-lg opacity-90 mb-12 max-w-3xl mx-auto">
          Don't just take our word for it – hear from our happy customers who can't get enough of our delicious cookies!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-xl text-gray-800 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold text-blue-600">- {testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;