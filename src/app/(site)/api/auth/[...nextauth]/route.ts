import NextAuth from "next-auth/next";
import VkProvider from "next-auth/providers/vk";
import GoogleProvider from "next-auth/providers/google";

const apiVersion = "5.131";
export const authOptions = {
  providers: [
    VkProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
