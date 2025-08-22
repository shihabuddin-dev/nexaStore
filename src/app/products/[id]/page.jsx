import { notFound } from "next/navigation";
import clientPromise from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4 py-12">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-lg mb-6 border-2 border-blue-700" />
        <h1 className="text-3xl font-extrabold mb-4 text-blue-200">{product.name}</h1>
        <p className="text-blue-400 mb-4 text-center">{product.description}</p>
        <span className="font-bold text-blue-400 text-xl mb-6">{product.price}</span>
        <span className="text-xs text-blue-500">ID: {product._id.toString()}</span>
      </div>
    </section>
  );
}
