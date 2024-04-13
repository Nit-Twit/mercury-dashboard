"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

interface Prop {
    GuildID: string
}

const Sidebar: React.FC<Prop> = ({GuildID}) => {
  const router = usePathname();
  const path = router

  const currentDirectory = router.split("/").pop();

  return (
    <div className="sidebar">
      <Link
        href={`${path}/customization`}
        passHref={true}
        className={clsx(
          "inline-flex items-center rounded-full px-2 py-1 text-sm",
          {
            "bg-primary": currentDirectory === "customization",
            "bg-secondary": currentDirectory !== "customization",
          }
        )}
      >
        Customization
      </Link>
      <Link
        href={`/dashboard/[GUILDID]/config/moderation`}
        as={`/dashboard/${GuildID}/config/moderation`}
        passHref={true}
        className={clsx(
          "inline-flex items-center rounded-full px-2 py-1 text-sm",
          {
            "bg-primary": currentDirectory === "moderation",
            "bg-secondary": currentDirectory !== "moderation",
          }
        )}
      >
        Moderation
      </Link>
    </div>
  );
};

export default Sidebar;
