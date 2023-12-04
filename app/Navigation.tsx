"use client";
import { ArrowUp, FileIcon, MoreHorizontal, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "~/utils/class-name";

const navigations = [
  {
    icon: UserRound,
    href: "#about",
    title: "About Me",
  },
  {
    icon: FileIcon,
    href: "#resume",
    title: "Resume/CV",
  },
  {
    icon: ArrowUp,
    href: "#",
    title: "Top",
  },
];

export function Navigation() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="fixed rounded-full shadow-md bottom-5 right-5">
      <div
        className={cn(
          "grid transition-all duration-300 overflow-hidden",
          opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div
          className={cn(
            "flex flex-col-reverse items-center gap-3 overflow-hidden transition-all duration-300 min-h-0",
            opened && "py-3"
          )}
        >
          {navigations.map((NavationItem, index) => (
            <Link
              key={index}
              title={NavationItem.title}
              href={NavationItem.href}
              className="flex justify-center w-full p-1 rounded-full hover:bg-orange-800/20 transition-all duration-300"
            >
              <NavationItem.icon />
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={() => setOpened((prev) => !prev)}
        className="p-2 bg-orange-100 rounded-full active:scale-95 transition-all duration-300 hover:bg-orange-200"
      >
        <MoreHorizontal />
      </button>
    </div>
  );
}
