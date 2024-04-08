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
};
