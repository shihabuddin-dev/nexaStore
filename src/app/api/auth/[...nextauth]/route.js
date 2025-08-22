import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/dbconnect";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Use default session strategy (database sessions)
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/products";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
