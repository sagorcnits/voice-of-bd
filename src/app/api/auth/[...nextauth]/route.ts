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
        if (!credentials) {
          return null as any;
        }
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, user, token }: any) {
      session.user.id = token.id;
      session.user.name = token.name;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
