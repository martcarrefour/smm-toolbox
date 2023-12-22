import NextAuth from "next-auth/next";
import VkProvider from "next-auth/providers/vk";
import { Account, AuthOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

type MyUser = {
  id: number;
  name: string;
  email?: string | undefined;
  image: string;
  vk_token?: string;
};

type MySessionCallbackParams = {
  session: Session;
  token: JWT;
};

const authOptions: AuthOptions = {
  providers: [
    VkProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: false,
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        console.log(user);
        return {
          ...token,
          vk_token: account?.access_token,
        };
      }

      return token;
    },
    async session({ session, token }: MySessionCallbackParams) {
      return {
        ...session,
        user: {
          ...session.user,
          vk_token: token?.vk_token,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
