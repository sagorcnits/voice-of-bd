import dbConnect from "@/lib/dbConnect";
import users from "@/models/users_schema";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt" as "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await dbConnect();
        // check if credentials are empty
        if (!credentials) {
          return null as any;
        }
        const { email, password } = credentials;
        // check if all fields are filled
        if (!email || !password) {
          return null;
        }
        // check if email is valid
        const currentUser = await users.findOne({ email: email });
        // email not found
        if (!currentUser) {
          return null;
        }

        return currentUser;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.type = user.type;
      }
      return token;
    },

    async session({ session, token }: any) {
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.type = token.type;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
