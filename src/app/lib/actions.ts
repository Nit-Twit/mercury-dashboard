import { sql } from "@vercel/postgres";
import { Guild as DiscordServer } from "discord.js";
import { getServerSession } from "next-auth";

export type User = {
  username: string;
  id: string;
  premium: boolean;
  reftoken: string;
  acctoken: string;
};

export async function createNewUser(data: User) {
  const { username, id, premium, reftoken, acctoken } = data;

  try {
    const user = await sql`
            INSERT INTO users (username, id, Premium, RefToken, AccToken)
            VALUES (${username}, ${id}, ${premium}, ${reftoken}, ${acctoken})
            RETURNING *;
        `;

    return user;
  } catch (error) {
    // Handle error
    console.error("Error creating new user:", error);
    throw error;
  }
}

export async function refreshAccessToken(refToken: string) {
  const refreshToken = refToken; // Assuming you have the refresh token in an environment variable

  const requestBody = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };

  try {
    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // You may also need to include client ID and client secret in the headers
        Authorization: `Basic ${Buffer.from(
          `${process.env.id}:${process.env.DISCORD_SECRET}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams(requestBody),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to refresh access token: ${response.status} ${response.statusText}`
      );
    }

    const responseData = await response.json();
    const newAccessToken = responseData.access_token;
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
}

export async function fetchUserFromID(id: string) {
  const result = await sql`
        SELECT * FROM users WHERE id = ${id}
    `;

  if (result.rows.length > 1) {
    return result.rows[0] as User;
  } else {
    return false;
  }
}

export async function fetchUserFromUsername(username: string) {
  const result = await sql`
        SELECT * FROM users WHERE username = ${username}
    `;

  if (result.rows.length > 1) {
    return result.rows[0] as User;
  } else {
    return false;
  }
}

export async function updateTokenSet(data: User) {
  const { id, reftoken, acctoken } = data;

  try {
    const user = await sql`
        UPDATE users
        SET 
            reftoken = ${reftoken},
            acctoken = ${acctoken}
        WHERE id = ${id};
        `;

    console.log(user);

    return user;
  } catch (error) {
    // Handle error
    console.error("Error creating new user:", error);
    throw error;
  }
}

export async function fetchUserGuilds() {
  const session = await getServerSession();
  if (!session) return false;
  const user = (await fetchUserFromUsername(
    session?.user?.name as string
  )) as User;
  const accessToken = user.acctoken;
  try {
    const response = await fetch(
      "https://discord.com/api/v10/users/@me/guilds",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch user guilds: ${response.status} ${response.statusText}`
      );
    }

    const guilds = await response.json();
    return filterGuildsByPermission(guilds) as any[1];
  } catch (error) {
    console.error("Error fetching user guilds:", error);
    throw error;
  }
}

export function filterGuildsByPermission(guilds: any[]) {
  const filteredGuilds = guilds.filter((guild) => {
    const member = guild.permissions & 0x00000002;
    return member === 0x00000002;
  });
  return filteredGuilds;
}

export async function fetchGuildFromID(id: string) {
  const session = await getServerSession();
  if (!session) return false;
  try {
    const guilds = (await fetchUserGuilds()) as DiscordServer[];
    let g: boolean | DiscordServer = false;
    guilds.map((guild) => {
      if (guild.id == id) {
        g = guild as DiscordServer;
      }
    });

    if (g) {
      return g as DiscordServer;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching guild:", error);
    throw error;
  }
}

export async function changeBotNickname(guildId: string, nick: string) {
  const guild = await fetchGuildFromID(guildId);
  if (guild) {
    const response = await fetch(
      `https://discord.com/api/v10/guilds/${guild.id}/members/@me`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bot ${process.env.BOT_TOKEN}`,
          "Content-Type": "application/json",
          "X-Audit-Log-Reason": "Change bot nickname from dashboard",
        },
        body: JSON.stringify({ nick }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error setting username: ${response.status} ${response.statusText}`
      );
    }

    const res = await response.json();
    console.log(res);
    return res;
  }
}

export async function totalBotGuilds() {
  try {
    const response = await fetch(
      "https://discord.com/api/v10/users/@me/guilds?with_counts=true",
      {
        headers: {
          Authorization: `Bot ${process.env.BOT_TOKEN}`,
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch bot guilds: ${response.status} ${response.statusText}`
      );
    }

    const guilds = await response.json() as DiscordServer[];
    let totalmem = 0;
    guilds.map((guild) => {
      totalmem += Number((guild as unknown as { approximate_member_count: string }).approximate_member_count ?? 0);
    })
    return {
      totalGuilds: guilds.length,
      totalMembers: totalmem
    };
  } catch (error) {
    console.error("Error fetching user guilds:", error);
    throw error;
  }
}