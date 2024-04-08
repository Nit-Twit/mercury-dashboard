import Image from "next/image";
import Link from "next/link";
import { FaBook, FaInfoCircle, FaDiscord } from "react-icons/fa";
import { HeadingText } from "./components/text";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className=" sticky top-0 bg-background flex flex-row h-auto mx-2 items-center justify-center w-auto border-b border-secondary">
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
            <FaDiscord></FaDiscord>Support
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
          <Link
            className="bg-primary w-auto text-xl rounded-sm px-4 py-2 mx-2 text-center"
            href={"/login"}
          >
            <HeadingText>
              <h1 className="tracking-wider font-thin">Login</h1>
            </HeadingText>
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center h-[90vh] w-full bg-background">
        <HeadingText>
          <h1 className="text-6xl text-primary tracking-wider font-bold">
            Mercury
          </h1>
        </HeadingText>
        <h1 className="mt-2 text-2xl">The do-all discord bot</h1>
        <div className="w-1/3 mt-20 flex flex-row items-center justify-around">
          <h1 className="text-auto">Serving N/A servers</h1>
          <h1 className="text-auto">Total Users: N/A</h1>
        </div>
      </section>
      <section className="h-screen flex flex-col justify-center items-center gap-10">
        <HeadingText>
          <h1 className="tracking-wider text-5xl mt-40 font-bold w-[75vw] text-left">Why Mercury?</h1>
        </HeadingText>
        <div className="flex flex-1 flex-col justify-center items-center gap-10">
          <div className="flex flex-row items-center justify-around w-[70vw]">
            <Image src="https://placehold.co/350x200.png" width={350} height={200} alt="image"></Image>
            <h1 className="w-1/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorum corporis ducimus dicta expedita cumque. Suscipit cumque laborum ex, dolore aut cupiditate dolores expedita rerum quasi soluta vero ullam culpa.</h1>
          </div>
          <div className="flex flex-row items-center justify-around w-[75vw]">
            <h1 className="w-1/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorum corporis ducimus dicta expedita cumque. Suscipit cumque laborum ex, dolore aut cupiditate dolores expedita rerum quasi soluta vero ullam culpa.</h1>
            <Image src="https://placehold.co/350x200.png" width={350} height={200} alt="image"></Image>
          </div>
        </div> 
      </section>
    </main>
  );
}
