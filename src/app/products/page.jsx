
'use client'
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.products || []));
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-300 text-center">Products</h1>
        <div className="text-center mb-8 text-blue-400">Total Products: {products.length}</div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length === 0 ? (
            <div className="text-center text-blue-400 col-span-full py-12">No products found.</div>
          ) : (
            products.map(product => (
              <div key={product._id} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg mb-4 border-2 border-blue-700" />
                <h2 className="text-xl font-bold mb-2 text-blue-200">{product.name}</h2>
                <p className="text-blue-400 mb-2 text-center">{product.description}</p>
                <span className="font-bold text-blue-400 mb-4">{product.price}</span>
                <a href={`/products/${product._id}`} className="px-6 py-2 rounded bg-blue-500 text-gray-900 font-semibold hover:bg-blue-400 transition-colors mt-2">Details</a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
