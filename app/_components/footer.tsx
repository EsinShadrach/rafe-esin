"use client";
import { ArrowRight, Mail, SendHorizontal, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SocialButtons from "~/components/social-buttons";

const routes = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

const skills = [
  "UI/UX Design",
  "Web Development",
  "Mobile Development",
  "Backend Development",
  "Frontend Development",
];

const HoverContext = React.createContext(false);

function NavItem({
  label,
  isActive,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  label: string;
  isActive: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const isAnythingHovered = React.useContext(HoverContext);
  const shouldDim = isAnythingHovered && !isHovered;

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center h-10 cursor-pointer"
    >
      <p
        className={`text-xl font-semibold transition-all duration-300 relative ml-7 group/link
          after:content-[''] after:bg-black after:w-1 after:h-10 after:absolute after:-left-7 after:top-1/2 after:-translate-y-1/2 after:transition-opacity after:duration-300
          ${shouldDim ? "opacity-50" : "opacity-100"}
          ${isHovered ? "after:opacity-100" : isActive && shouldDim ? "after:opacity-50" : isActive ? "after:opacity-100" : "after:opacity-0"}`}
      >
        <span className="flex items-center">
          <span className="w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/link:w-5">
            <ArrowRight className="w-5 h-5 shrink-0" />
          </span>
          <span className="transition-all duration-300 group-hover/link:translate-x-2 group-hover/link:scale-105 tracking-wide">
            {label}
          </span>
        </span>
      </p>
    </li>
  );
}

export function Footer() {
  const pathname = usePathname();
  const [routesHovered, setRoutesHovered] = React.useState<number | null>(null);
  const [skillsHovered, setSkillsHovered] = React.useState<number | null>(null);

  return (
    <div className="container flex flex-col items-end justify-center w-full mx-auto relative z-10">
      <div className="w-full grid grid-cols-2 items-end">
        <div>
          <div className="w-full h-24 flex items-center justify-end">
            <div className="w-[12.5%] h-full border-t border-l border-black grid place-items-center">
              <Star className="w-16 h-12" strokeWidth={1} />
            </div>
          </div>
          <div className="w-full h-72 grid grid-cols-2">
            <div className="w-full h-full border border-r-0 border-b-0 border-black grid grid-cols-1 place-content-center">
              <HoverContext.Provider value={routesHovered !== null}>
                <ul>
                  {routes.map((route, idx) => (
                    <NavItem
                      key={idx}
                      label={route.name}
                      isActive={pathname === route.href}
                      isHovered={routesHovered === idx}
                      onMouseEnter={() => setRoutesHovered(idx)}
                      onMouseLeave={() => setRoutesHovered(null)}
                    />
                  ))}
                </ul>
              </HoverContext.Provider>
            </div>
            <div className="w-full h-full border border-black border-b-0 grid grid-cols-1 place-content-center">
              <HoverContext.Provider value={skillsHovered !== null}>
                <ul>
                  {skills.map((skill, idx) => (
                    <NavItem
                      key={idx}
                      label={skill}
                      isActive={false}
                      isHovered={skillsHovered === idx}
                      onMouseEnter={() => setSkillsHovered(idx)}
                      onMouseLeave={() => setSkillsHovered(null)}
                    />
                  ))}
                </ul>
              </HoverContext.Provider>
            </div>
          </div>
        </div>
        <div className="w-full h-96 bg-black flex flex-col items-center justify-center p-12">
          <Mail className="w-8 h-8 mb-4 text-white-bg" strokeWidth={1.5} />
          <h2 className="text-7xl font-black tracking-tighter uppercase mb-2 text-white-bg">
            Get In Touch
          </h2>
          <p className="text-2xl mb-12 text-white-bg/90 tracking-wide font-medium">
            Let&apos;s work together!
          </p>
          <Link href="/contact" className="w-11/12 max-w-2xl">
            <div className="w-full bg-white-bg text-black px-8 py-6 flex items-center justify-between group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1">
              <span className="text-xl font-bold tracking-widest uppercase">
                Send a message
              </span>
              <SendHorizontal
                className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 motion-safe:group-hover:animate-spin"
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full bg-black">
        <SocialButtons flip />
      </div>
      <div className="w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 810 200"
          preserveAspectRatio="xMidYMax meet"
        >
          <text
            x="50%"
            y="85%"
            textAnchor="middle"
            className="font-black tracking-tighter uppercase"
            style={{ fontSize: "168px" }}
          >
            Rafe Esin
          </text>
        </svg>
      </div>
    </div>
  );
}
