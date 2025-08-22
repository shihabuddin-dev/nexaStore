"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSession, signIn, signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  console.log(session?.user)


  return (
    <nav className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-300 hover:text-white transition-colors">NexaStore</Link>
        {/* Hamburger button */}
        <button
          className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-600 hover:bg-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
        {/* Menu */}
        <div
          className={`flex-col sm:flex-row flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-end bg-gray-900 sm:bg-transparent absolute sm:static left-0 top-16 sm:top-auto z-40 p-6 sm:p-0 shadow sm:shadow-none
            transition-all duration-300 ease-in-out
            ${menuOpen ? 'opacity-100 pointer-events-auto scale-100 flex' : 'opacity-0 pointer-events-none scale-95 hidden'}
            sm:opacity-100 sm:pointer-events-auto sm:scale-100 sm:flex`}
          style={{ minWidth: menuOpen ? '100vw' : undefined }}
        >
          <Link href="/" className="text-gray-200 hover:text-blue-400 font-medium transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="text-gray-200 hover:text-blue-400 font-medium transition-colors" onClick={() => setMenuOpen(false)}>Products</Link>
          {session && (
            <Link href="/dashboard/add-product" className="text-gray-200 hover:text-blue-400 font-medium transition-colors" onClick={() => setMenuOpen(false)}>
              Add Product
            </Link>
          )}
          {!session && (
            <Link href="/login" className="text-gray-200 hover:text-blue-400 font-medium transition-colors" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
          {session && (
            <button
              onClick={() => { setMenuOpen(false); signOut(); }}
              className="text-gray-200 hover:text-blue-400 font-medium transition-colors"
            >
              Logout
            </button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

