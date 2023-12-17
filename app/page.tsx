import {
  Braces,
  Bug,
  Code2,
  FileJson2,
  Github,
  Globe,
  Mail,
  Terminal,
  Twitter,
} from "lucide-react";

import Link from "next/link";
import { cn } from "~/utils/class-name";
import { TypographyH1, TypographyH4, TypographyP } from "~/utils/typography";
import { ConnectIcon } from "./ConnectIcon";
import { CopyToClipboard } from "./CopyToClipboard";
import { DiscordIcon } from "./DiscordIcon";
import { MyNameIs } from "./MyNameIs";
import { Navigation } from "./Navigation";
import { RenderBugs } from "./RenderBugs";

export default function HomePage() {
  return (
    <section
      className={cn(
        "container mx-auto p-3 relative scroll-smooth text-slate-800",
        "w-full h-full space-y-6"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          <TypographyH4>Rafe</TypographyH4>⚡
        </div>
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href={"https://github.com/EsinShadrach"}
          className="flex items-center p-3 bg-orange-100/50 gap-3 rounded-md hover:bg-orange-100 transition-all duration-300"
        >
          <Github />
          <p className="hidden sm:block">EsinShadrach</p>
        </Link>
      </div>
      <MyNameIs />
      <div className="flex flex-col items-center justify-between md:flex-row gap-3">
        <div className="max-w-xl space-y-4">
          <div>
            <TypographyH1 className="w-fit">
              Full Stack <span className="text-orange-500">Web</span> &&{" "}
              <span className="text-blue-400">App</span> Developer
            </TypographyH1>
            <TypographyP>
              Guiding the digital journey through{" "}
              <b className="text-red-500">{new Date().getFullYear() - 2021}</b>{" "}
              <b>years</b> of comprehensive full-stack development, navigating
              the ever-evolving landscape of web and app development.
            </TypographyP>
          </div>
          <div className="space-y-2">
            <TypographyH4>
              Want to <b>connect</b> with me..?
            </TypographyH4>
            <div className="flex items-center gap-3">
              <ConnectIcon href="https://twitter.com/RafeEsin" title="RafeEsin">
                <Twitter className="group-hover:scale-110 transition-all duration-300 group-hover:animate-bounce" />
              </ConnectIcon>
              <ConnectIcon
                href="https://github.com/EsinShadrach"
                title="EsinShadrach"
              >
                <Github className="group-hover:scale-110 transition-all duration-300 group-hover:animate-bounce" />
              </ConnectIcon>
              <ConnectIcon
                href="mailto:esinshadrachrafe@gmail.com"
                title="esinshadrachrafe@gmail.com"
              >
                <Mail className="group-hover:scale-110 transition-all duration-300 group-hover:animate-bounce" />
              </ConnectIcon>
              <CopyToClipboard text="@overflow_why">
                <DiscordIcon />
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Bug className="-rotate-[20deg] bug-animation translate-y-20 opacity-0 text-red-500" />
          <Braces className="absolute left-0 rotate-[20deg] h-10 w-10 text-yellow-500 top-10 z-10 shake-animation" />
          <div className="absolute right-0 rotate-[20deg] text-purple-400 border-2 border-purple-400 rounded-md p-2 shake-animation">
            <Terminal className="z-10 text-purple-500 top-10" />
          </div>
          <FileJson2 className="absolute left-0 rotate-[20deg] h-10 w-10 text-blue-500 bottom-16 z-10 shake-animation" />
          <Code2 className="absolute right-0 rotate-[20deg] h-10 w-10 text-emerald-400 bottom-10 z-10 shake-animation" />
          <Globe className="-rotate-[20deg] sm:h-96 sm:w-96 h-60 w-60 globe-animation" />
        </div>
      </div>
      <Navigation />
      <RenderBugs />
    </section>
  );
}
