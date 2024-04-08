"use client"

import { redirect } from 'next/navigation'

export default function Invite() {
    return redirect("https://discord.com/oauth2/authorize?client_id=1083899830323118080&permissions=8&scope=bot+applications.commands")
}