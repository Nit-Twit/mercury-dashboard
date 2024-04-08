import Image from "next/image";
import Link from "next/link";
import {FaBook, FaInfoCircle, FaDiscord} from "react-icons/fa"
import { HeadingText } from "./components/text";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <section className="flex flex-row h-auto my-2 mx-2 items-center justify-center w-auto border-b border-secondary">
        <div className="flex flex-row flex-1 items-center justify-start px-2 py-2 gap-8">
          <Image width={70} height={70} alt="logo" src={"/mercury_logo.png"} className="rounded-full"></Image>
          <Link href={"/docs"} className="duration-500 transition ease-in-out text-lg hover:text-primary flex flex-row justify-center content-center items-center gap-2"><FaBook></FaBook>Docs</Link>
          <Link href={"#about"} className="duration-500 transition ease-in-out text-lg hover:text-primary flex flex-row justify-center content-center items-center gap-2"><FaInfoCircle></FaInfoCircle>About</Link>
          <Link href={"/support"} className="duration-500 transition ease-in-out text-lg hover:text-primary flex flex-row justify-center content-center items-center gap-2"><FaDiscord></FaDiscord>Support</Link>
        </div>
        <div className="flex h-full flex-row items-center justify-center mx-2">
          <Link className="bg-secondary w-auto text-xl rounded-sm px-4 py-2 mx-2 text-center" href={"/invite"}>Add to server</Link>
          <Link className="bg-primary w-auto text-xl rounded-sm px-4 py-2 mx-2 text-center" href={"/login"}>Login</Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center flex-1 w-full bg-background">
        <HeadingText><h1 className="text-6xl text-primary">Mercury</h1></HeadingText>
        <h1 className="mt-2 text-2xl">The do-all discord bot</h1>
        <div className="w-1/3 mt-20 flex flex-row items-center justify-around">
          <h1>Serving N/A servers</h1>
          <h1>Total Users: N/A</h1>
        </div>
      </section>
    </main>
  );
}