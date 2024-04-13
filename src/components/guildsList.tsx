"use client";

import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { Guild as DiscordGuild } from "discord.js";

interface Props {
  guilds: DiscordGuild[];
}

const GuildsList: React.FC<Props> = ({ guilds }) => {
    const router = useRouter();
  const handleClick = (guildId: string | any) => {
    router.replace(`/dashboard/${guildId}/config`);
  };
  return (
    <div className="select-none grid grid-cols-3 gap-4 h-[60vh] w-[60vw] text-center flex justify-center items-center">
      {guilds.map((guild) => (
        <div
          key={guild.name}
          className="duration-250 transition ease-in-out cursor-pointer flex flex-col justify-center items-center w-auto bg-background border-secondary border-[0.5vh] py-4 rounded-md hover:border-primary"
          onClick={() => {
            handleClick(guild.id);
          }}
        >
          {guild.icon ? (
            <Image
              alt="server icon"
              key={guild.name + "- icon"}
              width={70}
              height={70}
              className="rounded-full"
              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
            />
          ) : (
            <Image
              alt="null icon"
              key={guild.name + "- icon"}
              width={70}
              height={70}
              className="rounded-full"
              src={`/unknown_icon.png`}
            />
          )}
          <h1 key={guild.id} className="text-center">
            {guild.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default GuildsList;
