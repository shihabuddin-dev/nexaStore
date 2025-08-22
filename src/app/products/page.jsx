

'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

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
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-300 text-center">All Products</h1>
        <div className="text-center mb-8 text-blue-400">Total Products: {products.length}</div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length === 0 ? (
            <div className="text-center text-blue-400 col-span-full py-12">No products found.</div>
          ) : (
            products.map(product => (
              <div
                key={product._id}
                className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 rounded-xl shadow-2xl p-6 flex flex-col items-center hover:scale-[1.03] transition-transform border border-blue-700/30 overflow-hidden group"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-700/20 rounded-full blur-2xl z-0" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl z-0" />
                <div className="relative z-10 flex flex-col items-center w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded-xl mb-4 border-2 border-blue-700 shadow bg-gray-900"
                  />
                  <h2 className="text-lg font-extrabold mb-1 text-blue-100 text-center drop-shadow-lg">{product.name}</h2>
                  <p className="text-blue-400 mb-2 text-center text-sm max-w-[180px] truncate">{product.description?.length > 50 ? product.description.slice(0, 50) + '...' : product.description}</p>
                  <span className="font-bold text-blue-400 mb-3">{product.price} <strong className='text-xs'>TK</strong></span>
                  <a
                    href={`/products/${product._id}`}
                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-gray-900 font-semibold shadow hover:from-blue-400 hover:to-blue-300 transition-colors mt-2"
                  >
                    Details
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
