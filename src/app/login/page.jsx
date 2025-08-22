"use client";
import { signIn } from "next-auth/react";
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-300">Sign In</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full py-2 rounded bg-blue-500 text-gray-900 font-bold hover:bg-blue-400 transition-colors mb-4"
        >
          Sign in with Google
        </button>
        <div className="mt-6 text-sm text-blue-400">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="underline hover:text-blue-200">Register</Link>
        </div>
      </div>
    </div>
  );
}
