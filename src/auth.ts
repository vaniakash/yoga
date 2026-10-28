import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/mongodb";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // ---------------------------------------------------------------
  // MongoDB adapter — stores Users, Accounts, Sessions, VerificationTokens
  // in your MongoDB database automatically.
  // ---------------------------------------------------------------
  adapter: MongoDBAdapter(client),

  // Use database sessions (stored in MongoDB) instead of JWT cookies
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,    // 30 days
    updateAge: 24 * 60 * 60,       // refresh every 24 h
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // Request email + profile from Google
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",           // redirect auth errors back to login
  },

  callbacks: {
    // Attach userId + role to every session object so client code can use it
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },

  events: {
    // Log new users being created (optional — remove if not needed)
    async createUser({ user }) {
      console.log("[Auth] New user created:", user.email);
    },
  },
});
