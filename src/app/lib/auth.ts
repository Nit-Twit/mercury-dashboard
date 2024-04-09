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
        clientSecret: process.env.DISCORD_SECRET as string,
        authorization: {params: {scope: scopes.join(" ")}},
    })
  ],
};
