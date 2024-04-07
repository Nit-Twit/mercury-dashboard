import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-row h-auto mt-2 mx-2 items-center rounded-xl justify-center w-auto ">
        <div className="flex flex-row flex-1 items-center justify-start px-2 py-2 gap-8">
          <Image width={70} height={70} alt="logo" src={"/mercury_logo.png"} className="rounded-full"></Image>
          <Link href={"/docs"} className="text-lg hover:underline">Docs</Link>
          <Link href={"#about"} className="text-lg hover:underline">About</Link>
          <Link href={"/support"} className="text-lg hover:underline">Support</Link>
        </div>
        <div className="flex h-full flex-row items-center justify-center mx-2">
          <Link className="bg-primary w-auto text-xl rounded-sm px-4 py-2 mx-2 text-center" href={"/login"}>Login</Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center flex-1 w-full bg-background">
      </section>
    </main>
  );
}