
import { NextResponse } from "next/server";
import clientPromise from "@/lib/dbconnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const products = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ products });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req) {
  const body = await req.json();
  if (!body.name || !body.description || !body.price || !body.image) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const products = db.collection("products");
    const result = await products.insertOne({
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
      user: body.user || null,
      createdAt: new Date()
    });
    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
