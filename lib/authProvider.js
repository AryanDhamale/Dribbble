import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import connetDb from '@/lib/connetDb';
import User from '@/models/User';

const authProviders = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'text' },
            },
            async authorize(credentials) {
                if (!credentials.username || !credentials.password) {
                    return null;
                }
                // Simulate user lookup for credentials provider
                return { name: credentials.username, email: `${credentials.username}@example.com` };
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                await connetDb();
                const existingUser = await User.findOne({ email: user.email });
                if (!existingUser) {
                    await User.create({
                        name: user.name,
                        email: user.email,
                        email_verified: account.provider === 'google',
                    });
                }
                return true;
            } catch (err) {
                console.error("Error in signIn callback:", err);
                return false;
            }
        },
        async jwt({ token, user }) {
            try {
                if (user) {
                    await connetDb();
                    const existingUser = await User.findOne({ email: user.email });
                    if (existingUser) {
                        token.id = existingUser._id.toString();
                        token.email = existingUser.email;
                    }
                }
            } catch (err) {
                console.error("Error in jwt callback:", err);
            }
            return token;
        },
        async session({ session, token }) {
            if (session) {
                session.user.id = token.id;
                session.user.email = token.email;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60,
    },
};

export default authProviders;