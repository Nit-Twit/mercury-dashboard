"use client"

import { signOut } from "next-auth/react";
import {HeadingText} from "./text";

export default function LogoutButton() {
  return (
    <button
      className="bg-primary w-auto text-xl rounded-sm px-4 py-2 mx-2 text-center"
      onClick={() => signOut()}
    >
      <HeadingText>
        <h1 className="tracking-wider font-thin">Logout</h1>
      </HeadingText>
    </button>
  );
}
