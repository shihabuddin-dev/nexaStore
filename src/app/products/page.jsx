
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest model, high performance.',
    price: '$699',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Noise cancelling, long battery life.',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Smartwatch',
    description: 'Track your fitness and notifications.',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80',
  },
];

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-blue-300 text-center">Products</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg mb-4 border-2 border-blue-700" />
              <h2 className="text-xl font-bold mb-2 text-blue-200">{product.name}</h2>
              <p className="text-blue-400 mb-2 text-center">{product.description}</p>
              <span className="font-bold text-blue-400 mb-4">{product.price}</span>
              <a href={`/products/${product.id}`} className="px-6 py-2 rounded bg-blue-500 text-gray-900 font-semibold hover:bg-blue-400 transition-colors">View Details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
