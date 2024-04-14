import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { fetchUserGuilds } from "../lib/actions";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaInfoCircle, FaDiscord, FaAngleDown } from "react-icons/fa";
import { HeadingText } from "@/components/text";
import signIn from "next-auth/react";
import LoginButton from "@/components/loginButton";
import LogoutButton from "@/components/logoutButton";
import ProgressBar from "@/components/x";
import GuildsList from "@/components/guildsList";

export const metadata: Metadata = {
  title: "• Mercury | Dashboard",
  description: "The official dashboard for the mercury discord bot!",
  themeColor: "#e72e6b",
  openGraph: {
    title: "Mercury Dashboard",
    images: "/public/mercury_logo.png",
    description: "Easily manage Mercury with the official Dashboard",
    url: "https://mercury-bot.vercel.app"
  }
};

export default async function Dashboard() {
  const session = await getServerSession();
  session ? null : redirect("/");
  const guilds: any[] = await fetchUserGuilds();

  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center">
      <section className=" sticky w-full flex flex-col justify-center items-center content-center top-0 bg-background flex z-50 flex-row h-auto mx-2 items-center justify-center w-auto">
        <div className="w-full flex flex-row justify-center items-center">
          <div className="flex flex-row flex-1 items-center justify-start px-2 py-2 gap-8">
            <Image
              width={60}
              height={60}
              alt="logo"
              src={"/mercury_logo.png"}
              className="rounded-full"
            ></Image>
            <Link
              href={"/docs"}
              className="duration-500 transition ease-in-out text-lg hover:text-primary flex flex-row justify-center content-center items-center gap-2"
            >
              <FaBook></FaBook>Docs
            </Link>
            <Link
              href={"#about"}
              className="duration-500 transition ease-in-out text-lg hover:text-primary flex flex-row justify-center content-center items-center gap-2"
            >
              <FaInfoCircle></FaInfoCircle>About
            </Link>
            <Link
              href={"/support"}
              className="duration-500 transition ease-in-out text-lg hover:text-primary flex flex-row justify-center content-center items-center gap-2"
            >
              <FaDiscord size={25}></FaDiscord>Support
            </Link>
          </div>
          <div className="flex h-full flex-row items-center justify-center mx-2">
            <Link
              className="bg-secondary w-auto text-xl rounded-sm px-4 py-2 mx-2 text-center"
              href={"/invite"}
            >
              <HeadingText>
                <h1 className="tracking-wider">Add to server</h1>
              </HeadingText>
            </Link>
            {session ? (
              <LogoutButton></LogoutButton>
            ) : (
              <LoginButton></LoginButton>
            )}
          </div>
        </div>
        <ProgressBar></ProgressBar>
      </section>

      <div className="flex w-[60vw] flex-1 justify-center items-center">
        <GuildsList guilds={guilds} />
      </div>
    </main>
  );
}

