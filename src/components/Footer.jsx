'use client'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 ">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold tracking-tight mb-1 text-blue-300">NexaStore</span>
          <span className="text-sm text-blue-400">Your trusted online shop</span>
        </div>
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium items-center">
          <a href="/" className="hover:underline hover:text-blue-400 transition-colors">Home</a>
          <a href="/products" className="hover:underline hover:text-blue-400 transition-colors">Products</a>
          <a href="/login" className="hover:underline hover:text-blue-400 transition-colors">Login</a>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 items-center mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors">
            <FaFacebookF className="w-4 h-4 text-gray-900" />
          </a>
          <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors">
            <FaTwitter className="w-4 h-4 text-gray-900" />
          </a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors">
            <FaInstagram className="w-4 h-4 text-gray-900" />
          </a>
        </div>
      </div>
      <div className="border-t border-blue-400 text-center py-4 text-xs text-blue-400 bg-opacity-80">
        &copy; {year} <span className="font-bold">NexaStore</span>. All rights reserved.
      </div>
    </footer>
  );
}
