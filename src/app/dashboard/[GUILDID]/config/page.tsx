import { changeBotNickname, checkForBotInGuild, fetchGuildFromID } from "@/app/lib/actions"
import { Guild as DiscordServer, GuildMember as ServerMember } from "discord.js"
import HomeBtn from "@/components/homeButton"
import Sidebar from "@/components/sidebar"
import { redirect } from "next/navigation"
import DashBtn from "@/components/backButtonDash"

export default async function Page({ params }: { params: { GUILDID: string } }) {
    const check = await checkForBotInGuild(params.GUILDID)
    if (!check) {
        redirect(`https://discord.com/oauth2/authorize?client_id=1083899830323118080&permissions=8&scope=bot+applications.commands&guild_id=${params.GUILDID}`)
    }
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
                <div className="flex flex-row justify-center items-center gap-1">
                    <HomeBtn />
                    <DashBtn />
                </div>
                <form action={changeNickname}>
                    <input type="text" name="nickname" placeholder="nickname" className="text-black" />
                    <button type="submit">Change nick</button>
                </form>
            </div>
            {/* <Sidebar GuildID={guild.id}/> */}
        </main>
    )
}