import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "shinego123"
        ) {
          return {
            id: "1",
            name: "Admin",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});