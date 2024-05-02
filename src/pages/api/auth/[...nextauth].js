import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
       GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    //    Add more providers here
    ],
    secret: '7ff53137d5138244e6a9d4c64b7b1879b118a1d5a0443f7fbcc6fd66cccc02cc',
}

export default NextAuth(authOptions)