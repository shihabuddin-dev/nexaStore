import { NextResponse } from "next/server";
import clientPromise from "@/lib/dbconnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const products = db.collection("products");
    const count = await products.countDocuments();
    return NextResponse.json({ count });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
