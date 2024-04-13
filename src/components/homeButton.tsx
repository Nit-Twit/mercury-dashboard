"use client";

import { HeadingText } from "./text";
import { useRouter } from "next/navigation";

export default function HomeBtn() {
    const router = useRouter()
  const handleClick = () => {
    router.replace("/")
  };
  return (
    <button
      className="bg-secondary w-auto text-xl rounded-sm px-4 py-2 my-4 mx-2 text-center"
      onClick={handleClick}
    >
      <HeadingText>
        <h1 className="tracking-wider">Home</h1>
      </HeadingText>
    </button>
  );
}
