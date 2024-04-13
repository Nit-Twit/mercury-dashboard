import { fetchGuildFromID } from "@/app/lib/actions"
import { Guild as DiscordServer } from "discord.js"
import HomeBtn from "@/components/homeButton"

export default async function Page({ params }: { params: { GUILDID: string } }) {
    const guild = await fetchGuildFromID(params.GUILDID) as DiscordServer
    return (
        <main>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <h1 className="text-3xl">{guild.name} - Config</h1>
                <p className="text-xl">Comming Soon :D</p>
                <HomeBtn />
            </div>
        </main>
    )
}