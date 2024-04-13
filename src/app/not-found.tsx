import Image from "next/image";
import Link from "next/link";
import { FaBook, FaInfoCircle, FaDiscord, FaAngleDown } from "react-icons/fa";
import { HeadingText } from "@/components/text";
import signIn from "next-auth/react";
import LoginButton from "@/components/loginButton";
import LogoutButton from "@/components/logoutButton"
import { getServerSession } from "next-auth";
import DashboardButton from "@/components/dashboardButton";
import SupportButton from "@/components/supportButton";
import HomeBtn from "@/components/homeButton";

import type { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "• Mercury | Not Found",
  description: "Welcome!",
};

export default async function NotFound() {
    const session = await getServerSession()

    return (
        <main className="flex flex-col h-screen">
      <section className=" sticky top-0 bg-background flex z-50 flex-row h-auto mx-2 items-center justify-center w-auto border-b border-secondary">
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
          {session ? <LogoutButton></LogoutButton> : <LoginButton></LoginButton>}
        </div>
      </section>

      <section className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-primary"><HeadingText>Not Found</HeadingText></h1>
        <div className="flex flex-row w-full items-center justify-center">
              <HomeBtn />
              {session ? <DashboardButton></DashboardButton> : <SupportButton></SupportButton>}
        </div>
      </section>
    </main>
    )
}