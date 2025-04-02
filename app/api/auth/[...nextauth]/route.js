"use server";
import NextAuth from 'next-auth';
import authProviders from '@/lib/authProvider';


const authoptions = NextAuth(authProviders);

export {authoptions as GET , authoptions as POST};