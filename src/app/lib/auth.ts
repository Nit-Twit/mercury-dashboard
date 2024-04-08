import { NextAuthOptions } from 'next-auth';
import Discord from 'next-auth/providers/discord';

const scopes = ["identify", "guilds"];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Discord({
        clientId: "1083899830323118080",
        clientSecret: "11Q3M89lPAc3d_k-elg3p3dww32WH8PG",
        authorization: {params: {scope: scopes.join(" ")}},
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
        console.log(user, profile, account)
      return true;
    },
    async jwt({ token, user }) {
      if (!token.userId && user) {
        console.log(token, user)
        // token.userId = user.userId;
      }
      return token;
    },
    async session({ token, session, user }) {
      if (token) {
        if (session.user) {
          (session.user as any).userId = token.userId;
        } else {
          session.user = {
          };
        }
      }
      console.log(token, session, user)
      return session;
    },
  },
};
