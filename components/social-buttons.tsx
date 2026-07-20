"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function SocialButtons({ flip }: { flip?: boolean }) {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    idx: number,
  ) => {
    const el = tileRefs.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = Math.max(-8, Math.min(8, (e.clientX - centerX) * 0.1));
    const offsetY = Math.max(-8, Math.min(8, (e.clientY - centerY) * 0.1));
    el.style.transform = `translate(${12 + offsetX}px, ${-12 + offsetY}px)`;
  };

  const handleMouseLeave = (idx: number) => {
    const el = tileRefs.current[idx];
    if (el) el.style.transform = "";
    setHoveredSocial(null);
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/EsinShadrach",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shadrach-rafe-esin-163125271/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "X",
      href: "https://x.com/rsty_rafe",
      icon: <Twitter className="w-6 h-6" />,
    },
    {
      name: "Email",
      href: "mailto:esinshadrachrafe@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex items-center justify-center">
      {socials.map((social, idx) => (
        <div
          key={idx}
          ref={(el) => {
            tileRefs.current[idx] = el;
          }}
          className={`w-full ${flip ? "bg-black" : "bg-white-bg"} will-change-transform ${
            hoveredSocial === idx ? "z-10" : "z-0"
          }`}
          onMouseEnter={() => setHoveredSocial(idx)}
          onMouseMove={(e) => handleMouseMove(e, idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          <Link href={social.href} target="_blank" rel="noopener noreferrer">
            <div
              className={`px-0 py-10 overflow-hidden border group transition-all duration-150 ${flip ? "border-black" : "border-white-bg/20"} ${
                hoveredSocial !== idx
                  ? "hover:-translate-y-3 hover:translate-x-3"
                  : ""
              } ${
                idx === socials.length - 1
                  ? "border-r bg"
                  : hoveredSocial === idx
                    ? "border-r"
                    : "border-r-0"
              } ${
                idx === 0 ? "border-l" : ""
              } ${flip ? "bg-white-bg" : "bg-black"}`}
            >
              <div
                className={`flex items-center justify-center gap-2 text-2xl relative ${
                  flip ? "text-black" : "text-white-bg/50"
                }`}
              >
                <div className="md:-translate-x-12 transition-all duration-300 group-hover:translate-x-0">
                  {social.icon}
                </div>
                <div className="hidden group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap md:block">
                  {social.name}
                </div>
                <div className="absolute w-6 h-6 right-6 top-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full">
                    <ArrowRight
                      className={`absolute inset-0 w-6 h-6 -rotate-45 transition-transform duration-500 ease-in-out delay-500 group-hover:translate-x-32 group-hover:-translate-y-32 group-hover:delay-0 ${flip ? "text-black" : "text-white-bg/70"}`}
                    />
                    <ArrowRight
                      className={`absolute inset-0 w-6 h-6 -rotate-45 -translate-x-32 translate-y-32 transition-transform duration-500 ease-in-out delay-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:delay-500 ${flip ? "text-black" : "text-white-bg/70"}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
