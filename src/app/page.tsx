import Image from "next/image";
import Link from "next/link";
import { FaBook, FaInfoCircle, FaDiscord, FaAngleDown } from "react-icons/fa";
import { HeadingText } from "./components/text";
import signIn from "next-auth/react";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton"
import { getServerSession } from "next-auth";
import ProgressBar from "./components/x";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "• Mercury | Welcome",
  description: "Welcome!",
};

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="flex flex-col">
      <section className=" sticky flex flex-col justify-center items-center content-center top-0 bg-background flex z-50 flex-row h-auto mx-2 items-center justify-center w-auto">
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
            {session ? <LogoutButton></LogoutButton> : <LoginButton></LoginButton>}
          </div>
        </div>
        <ProgressBar></ProgressBar>
      </section>

      <section className="flex flex-col items-center justify-center h-[80vh] w-full bg-background">
        <HeadingText>
          <h1 className="text-6xl text-primary tracking-wider font-bold">
            Mercury
          </h1>
        </HeadingText>
        <h1 className="mt-2 text-2xl">The do-all discord bot</h1>
        <div className="w-1/3 mt-20 flex flex-row items-center justify-around">
          <h1 className="text-auto">Total Servers: N/A</h1>
          <h1 className="text-auto">Total Users: N/A</h1>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center h-[5vh] mb-40 w-full bg-background">
        <h1 className="text-secondary"><FaAngleDown className="hover-animation text-xl"></FaAngleDown></h1>
      </section>
      
      <section className="h-screen flex flex-col justify-center items-center gap-10 mb-40">
        <HeadingText>
          <h1 className="tracking-wider text-5xl mt-40 font-bold w-[75vw] text-left">Why Mercury?</h1>
        </HeadingText>
        <div className="flex flex-1 flex-col justify-center items-center gap-10 mb-20">
          <div className="flex flex-row items-center justify-around w-[75vw]">
            <Image src="https://placehold.co/300x150.png" width={350} height={200} alt="image"></Image>
            <h1 className="w-1/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorum corporis ducimus dicta expedita cumque. Suscipit cumque laborum ex, dolore aut cupiditate dolores expedita rerum quasi soluta vero ullam culpa.</h1>
          </div>
          <div className="flex flex-row items-center justify-around w-[75vw]">
            <h1 className="w-1/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorum corporis ducimus dicta expedita cumque. Suscipit cumque laborum ex, dolore aut cupiditate dolores expedita rerum quasi soluta vero ullam culpa.</h1>
            <Image src="https://placehold.co/300x150.png" width={350} height={200} alt="image"></Image>
          </div>
          <div className="flex flex-row items-center justify-around w-[75vw]">
            <Image src="https://placehold.co/300x150.png" width={350} height={200} alt="image"></Image>
            <h1 className="w-1/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorum corporis ducimus dicta expedita cumque. Suscipit cumque laborum ex, dolore aut cupiditate dolores expedita rerum quasi soluta vero ullam culpa.</h1>
          </div>
        </div> 
      </section>
      <section className="h-[25vh] bg-background border-t border-secondary">
        <div className="flex flex-row w-full h-full items-center justify-center">
          <div className="flex-1">
            <div className="px-4">
              <HeadingText>
                <h1 className="font-extra-bold text-xl tracking-wider">Mercury</h1>
              </HeadingText>
              <h1 className="font-thin">Bot created by ApolloActive<br></br>Dashboard maintained by NitTwit_<br></br>All rights reserved</h1>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-extra-bold"><HeadingText>Mercury</HeadingText></h1>
          </div>
        </div>
      </section>
    </main>
  );
}
