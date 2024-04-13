import { changeBotNickname, fetchGuildFromID } from "@/app/lib/actions"
import { Guild as DiscordServer } from "discord.js"
import HomeBtn from "@/components/homeButton"
import Sidebar from "@/components/sidebar"

export default async function Page({ params }: { params: { GUILDID: string } }) {
    const guild = await fetchGuildFromID(params.GUILDID) as DiscordServer

    async function changeNickname(formData: FormData) {
        'use server'

        const rawFormData = {
          nickname: formData.get('nickname'),
        }

        await changeBotNickname(guild.id, rawFormData.nickname as string)
      }

    return (
        <main>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <h1 className="text-3xl">{guild.name} - Config</h1>
                <p className="text-xl">Comming Soon :D</p>
                <HomeBtn />
                <form action={changeNickname}>
                    <input type="text" name="nickname" placeholder="nickname" className="text-black" />
                    <button type="submit">Change nick</button>
                </form>
            </div>
            {/* <Sidebar GuildID={guild.id}/> */}
        </main>
    )
}