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
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "~/utils/typography";
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
      <div>
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
                <b className="text-red-500">
                  {new Date().getFullYear() - 2021}
                </b>{" "}
                <b>years</b> of comprehensive full-stack development, navigating
                the ever-evolving landscape of web and app development.
              </TypographyP>
            </div>
            <div className="space-y-2">
              <TypographyH4>
                Want to <b>connect</b> with me..?
              </TypographyH4>
              <div className="flex items-center gap-3">
                <ConnectIcon
                  href="https://twitter.com/RafeEsin"
                  title="RafeEsin"
                >
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
      </div>
      <div className="what_i_do group space-y-8">
        <TypographyH2 className="relative border-none text-emerald-400 w-fit">
          <QuestionMark className="absolute -top-7 -rotate-12 transition-all duration-300 group-hover:scale-150" />
          <QuestionMark className="absolute text-red-400 right-12 -bottom-7 rotate-12 transition-all duration-300 group-hover:scale-150" />
          <QuestionMark className="absolute text-fuchsia-400 right-20 -top-7 rotate-12 transition-all duration-700 group-hover:scale-150" />
          <QuestionMark className="absolute text-purple-400 left-12 -bottom-4 -rotate-12 transition-all duration-700 group-hover:scale-150" />
          <QuestionMark className="absolute text-blue-400 right-2 -top-7 -rotate-12 transition-all duration-200 group-hover:scale-150" />
          What do I do...?
        </TypographyH2>
        <div className="flex flex-col justify-center gap-3 md:divide-x-2 divide-orange-300 md:flex-row divide-y-2">
          <div className="w-full max-w-md space-y-3">
            <div className="relative max-w-md p-3 bg-orange-300 border-t-2 border-r-2 border-blue-400 rounded-md md:border-t-0">
              <div className="absolute w-full h-1 bg-blue-400 rounded-full -right-3 top-1/2 -z-10" />
              <div className="w-full h-full flip-card min-h-[10rem]">
                <div className="w-full h-full flip-card-inner">
                  <div className="w-full h-full flip-card-front">
                    <TypographyH3>Frontend Web development</TypographyH3>
                  </div>
                  <div className="flip-card-back">Frontend web dev details</div>
                </div>
              </div>
            </div>
            <div className="relative max-w-md p-3 bg-orange-300 border-t-2 border-r-2 border-red-400 rounded-md md:border-t-0">
              <div className="absolute w-full h-1 bg-red-400 rounded-full -right-3 top-1/2 -z-10" />
              <div className="w-full h-full flip-card min-h-[10rem]">
                <div className="w-full h-full flip-card-inner">
                  <div className="w-full h-full flip-card-front">
                    <TypographyH3>Cross Platfrom app dev stuff</TypographyH3>
                  </div>
                  <div className="flip-card-back">
                    cross platform app dev details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md pt-2 md:pl-2 md:-mt-6 space-y-3 md:pt-0">
            <div className="relative max-w-md p-3 bg-orange-300 border-t-2 border-l-2 rounded-md border-emerald-400 md:border-t-0">
              <div className="absolute w-full h-1 rounded-full bg-emerald-400 -left-3 top-1/2 -z-10" />
              <div className="w-full h-full flip-card min-h-[10rem]">
                <div className="w-full h-full flip-card-inner">
                  <div className="w-full h-full flip-card-front">
                    <TypographyH3>Backend Web dev stuff</TypographyH3>
                  </div>
                  <div className="flip-card-back">Backend Web dev details</div>
                </div>
              </div>
            </div>
            <div className="relative max-w-md p-3 bg-orange-300 border-t-2 border-l-2 border-purple-400 rounded-md md:border-t-0">
              <div className="absolute w-full h-1 bg-purple-400 rounded-full -left-3 top-1/2 -z-10" />
              <div className="w-full h-full flip-card min-h-[10rem]">
                <div className="w-full h-full flip-card-inner">
                  <div className="w-full h-full flip-card-front">
                    <TypographyH3>Version control..?</TypographyH3>
                  </div>
                  <div className="flip-card-back">Version Control details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestionMark({ className }: { className?: string }) {
  return <b className={className}>?</b>;
}
