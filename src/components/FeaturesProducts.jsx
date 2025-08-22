
'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function FeaturesProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts((data.products || []).slice(0, 4)));
  }, []);

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-blue-300 text-center">Featured Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {products.length === 0 ? (
            <div className="text-center text-blue-400 col-span-full py-8">No featured products found.</div>
          ) : (
            products.map(product => (
              <div
                key={product._id}
                className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 rounded-xl shadow-xl p-5 flex flex-col items-center border border-blue-700/30 overflow-hidden group hover:scale-[1.03] transition-transform"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-700/20 rounded-full blur-2xl z-0" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl z-0" />
                <div className="relative z-10 flex flex-col items-center w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg mb-3 border-2 border-blue-700 shadow bg-gray-900"
                  />
                  <h3 className="text-base font-bold mb-1 text-blue-100 text-center drop-shadow-lg">{product.name}</h3>
                  <p className="text-blue-400 mb-2 text-center text-xs max-w-[120px] truncate">{product.description?.length > 40 ? product.description.slice(0, 40) + '...' : product.description}</p>
                  <span className="font-bold text-blue-400 mb-2">{product.price} <strong className='text-xs'>TK</strong></span>
                  <a
                    href={`/products/${product._id}`}
                    className="px-4 py-1 rounded-md bg-gradient-to-r from-blue-500 to-blue-400 text-gray-900 font-semibold shadow hover:from-blue-400 hover:to-blue-300 transition-colors mt-1 text-xs"
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
