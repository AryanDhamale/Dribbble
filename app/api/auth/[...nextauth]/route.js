"use server";
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


const authoptions = NextAuth({
    providers:  [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),
    ],
    secret : process.env.NEXTAUTH_SECRET ,
})

export {authoptions as GET , authoptions as POST};