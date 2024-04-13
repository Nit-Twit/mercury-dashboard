"use client"

import { signIn } from "next-auth/react";
import {HeadingText} from "./text";

import Link from "next/link";

export default function SupportButton() {
  return (
    <Link
    className="bg-secondary w-auto text-xl rounded-sm px-4 py-2 my-4 mx-2 text-center"
    href={"/support"}
  >
    <HeadingText>
      <h1 className="tracking-wider">Support</h1>
    </HeadingText>
  </Link>
  );
}
