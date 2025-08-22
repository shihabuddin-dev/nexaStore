"use client";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("login") === "success") {
      toast.success("Logged in successfully!");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-300">Sign In</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products?login=success" })}
          className="w-full py-2 rounded bg-blue-500 text-gray-900 font-bold hover:bg-blue-400 transition-colors mb-4 flex justify-center items-center gap-3"
        >
         <FaGoogle/> Sign in with Google
        </button>
      </div>
    </div>
  );
}
