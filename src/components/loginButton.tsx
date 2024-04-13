"use client"

import { signIn } from "next-auth/react";
import {HeadingText} from "./text";

export default function LoginButton() {
  return (
    <button
      className="bg-primary w-auto text-xl rounded-sm px-4 py-2 mx-2 text-center"
      onClick={() => signIn("discord")}
    >
      <HeadingText>
        <h1 className="tracking-wider font-thin">Login</h1>
      </HeadingText>
    </button>
  );
}
