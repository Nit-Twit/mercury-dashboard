import { NextAuthOptions } from 'next-auth';
import Discord from 'next-auth/providers/discord';
import {updateTokenSet, createNewUser, fetchUserFromID, fetchUserFromUsername, refreshAccessToken } from './actions';

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
  callbacks: {
    async signIn({user, account}) {
      const usr = await fetchUserFromUsername(user.name as string)
      if (!usr) {
        const prof = await createNewUser({
          username: user?.name as string,
          id: account?.providerAccountId as string,
          premium: false as boolean,
          reftoken: account?.refresh_token as string,
          acctoken: account?.access_token as string,
        })
  
        console.log(prof)
      } else {
        const aT = await refreshAccessToken(account?.refresh_token as string)
        console.log(aT);
        
        await updateTokenSet({
          username: "",
          id: user.id as string,
          premium: false,
          reftoken: account?.refresh_token as string,
          acctoken: aT as string,
        })
        console.log(`User already exists!\n${usr}`)
      }

      return true
    },
  }
};
