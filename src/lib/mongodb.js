import { MongoClient, ServerApiVersion } from "mongodb"
export const collectionNameObj = {
  productsCollection: 'products',
  userCollection: 'users',
}

export default async function dbConnect(collectionName) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  return client.db(process.env.DB_NAME).collection(collectionName)
}