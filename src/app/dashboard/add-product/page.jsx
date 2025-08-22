"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") return <div className="text-center py-12">Loading...</div>;
  if (!session) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        user: session?.user ? {
          name: session.user.name,
          email: session.user.email,
          image: session.user.image
        } : undefined
      })
    });
    setLoading(false);
    if (res.ok) {
      setForm({ name: "", description: "", price: "", image: "" });
      toast.success("Product added successfully!");
    } else {
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4">
      <Toaster position="top-center" />
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-300">Add Product</h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" required className="w-full px-4 py-2 rounded bg-gray-900 text-blue-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="w-full px-4 py-2 rounded bg-gray-900 text-blue-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required className="w-full px-4 py-2 rounded bg-gray-900 text-blue-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required className="w-full px-4 py-2 rounded bg-gray-900 text-blue-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" disabled={loading} className="w-full py-2 rounded bg-blue-500 text-gray-900 font-bold hover:bg-blue-400 transition-colors">
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
