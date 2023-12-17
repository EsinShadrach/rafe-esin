import {
  Braces,
  Bug,
  Code2,
  CopyIcon,
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
import { MyNameIs } from "./MyNameIs";
import { Navigation } from "./Navigation";

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
            <TypographyP>
              Want to <b>connect</b> with me?
            </TypographyP>
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
    </section>
  );
}

function DiscordIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14391 4.13067C8.99457 3.77866 8.77056 3.33067 8.58922 3C7.05325 3.256 5.59191 3.71467 4.22552 4.34399C1.46286 8.41865 0.716188 12.3973 1.08952 16.3226C2.92418 17.6559 4.69486 18.4666 6.4346 19C6.86126 18.424 7.24527 17.8053 7.57594 17.1546C6.9466 16.92 6.34927 16.632 5.77327 16.2906C5.9226 16.184 6.07194 16.0667 6.21061 15.9493C9.68793 17.5387 13.4543 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5236 17.1546C15.8543 17.8053 16.2383 18.424 16.665 19C18.4036 18.4666 20.185 17.6559 22.01 16.3226C22.4687 11.7787 21.2836 7.83202 18.8943 4.34399ZM8.05593 13.9013C7.01058 13.9013 6.15725 12.952 6.15725 11.7893C6.15725 10.6267 6.98925 9.67731 8.05593 9.67731C9.11191 9.67731 9.97588 10.6267 9.95454 11.7893C9.95454 12.952 9.11191 13.9013 8.05593 13.9013ZM15.065 13.9013C14.0196 13.9013 13.1652 12.952 13.1652 11.7893C13.1652 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9636 11.7893C16.9636 12.952 16.1317 13.9013 15.065 13.9013Z"
          stroke="#000000"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
