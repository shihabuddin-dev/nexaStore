
import { notFound } from "next/navigation";
import clientPromise from "@/lib/dbconnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  let product = null;
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    product = await db.collection("products").findOne({ _id: new ObjectId(id) });
  } catch (e) {
    // ignore
  }
  if (!product) return notFound();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 text-blue-200 px-4 py-16">
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 rounded-xl shadow-2xl p-10 w-full max-w-3xl flex flex-col md:flex-row items-center border border-blue-700/40 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full gap-10">
          <Image
            src={product.image}
            alt={product.name}
            width={220}
            height={220}
            className="w-56 h-56 object-cover rounded-2xl border-4 border-blue-700 shadow-lg bg-gray-900"
            priority
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-extrabold mb-2 text-blue-100 drop-shadow-lg text-center md:text-left">{product.name}</h1>
            <div className="w-full mb-4">
              <span className="block text-blue-400 font-semibold mb-1 uppercase tracking-wide text-xs">Description</span>
              <p className="text-blue-300 text-base leading-relaxed bg-gray-900/60 rounded-xl px-4 py-3 shadow-inner border border-blue-700/20">
                {product.description}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-6 mt-2">
              <span className="font-bold text-blue-400 text-2xl">{product.price} <strong className="text-sm">TK</strong></span>
              {product.user && (
                <div className="flex items-center gap-2 bg-gray-900/60 px-3 py-1 rounded-full shadow border border-blue-700/30">
                  <Image
                    src={product.user.image}
                    alt={product.user.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-blue-500 shadow"
                  />
                  <span className="text-blue-100 font-semibold text-sm">{product.user.name}</span>
                </div>
              )}
            </div>
            <span className="text-xs text-blue-500 mt-2">Product ID: {product._id.toString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
