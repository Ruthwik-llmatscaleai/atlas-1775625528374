import React from 'react';

const products = [
  {
    id: 1,
    name: 'Classic Chocolate Chip',
    description: 'Timeless perfection with rich chocolate chunks.',
    image: 'https://images.unsplash.com/photo-1599859200007-a61f5139268f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$2.50',
  },
  {
    id: 2,
    name: 'Oatmeal Raisin Delight',
    description: 'Chewy oats and sweet raisins for a comforting treat.',
    image: 'https://images.unsplash.com/photo-1504780654519-21655b38f121?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$2.25',
  },
  {
    id: 3,
    name: 'Double Chocolate Fudge',
    description: 'For the ultimate chocolate lover, intensely rich.',
    image: 'https://images.unsplash.com/photo-1558961363-fa1fdf82bad3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$2.75',
  },
];

function FeaturedProducts() {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Our Sweetest Creations
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our most popular and beloved cookie flavors, baked fresh daily with the finest ingredients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-500">{product.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-full text-sm font-medium transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;