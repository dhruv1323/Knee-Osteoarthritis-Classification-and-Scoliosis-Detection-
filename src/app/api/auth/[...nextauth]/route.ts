import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import { compare } from 'bcryptjs';
import { sql } from '@vercel/postgres';


const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/pages/login',
  },
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),

    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),

    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials){
        const response = await sql`SELECT * FROM users WHERE email= ${credentials.email}`;
        const user = response.rows[0];
        const passwordCorrect = await compare(
          credentials?.password || '',
          user.password
        );
        console.log({ passwordCorrect });

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };