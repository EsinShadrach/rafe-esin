"use client";

import React, { useEffect, useState } from "react";
import { RstyRafe } from "~/components/icons/rsty_rafe";
import { GridLines } from "./utils/lines";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Delay GridLines until container animation finishes (500ms)
      const timer = setTimeout(() => {
        setIsContainerVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsContainerVisible(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Disable/enable body scroll when menu is open/closed
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed flex text-white bg-black z-[100]  max-w-fit group transition-all duration-300 ${isScrolled ? "m-5 md:ml-0 md:mt-20 gap-0" : "md:mt-20 mt-10"
          }`}
      >
        <div
          className={`relative flex flex-col items-center justify-center w-20 h-20 gap-2 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 active:scale-95 cursor-pointer overflow-hidden 
            ${isMenuOpen ? "bg-black border-white/20 border-x border-t" : "bg-white border-black border"}
            ${isScrolled ? "border-b" : isMenuOpen ? "border-b-white/20" : "border-b-transparent"
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger lines */}
          <div className={`w-8 h-0.5 transition-all duration-300 origin-center ${isMenuOpen ? 'bg-white rotate-45 translate-y-[10px]' : 'bg-black'
            }`} />
          <div className={`w-8 h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-white opacity-0' : 'bg-black opacity-100'
            }`} />
          <div className={`w-8 h-0.5 transition-all duration-300 origin-center ${isMenuOpen ? 'bg-white -rotate-45 -translate-y-[10px]' : 'bg-black'
            }`} />
        </div>
        <h2
          className={`flex items-center justify-center transition-all duration-300 text-3xl font-semibold border-l-0  border-white/20
            ${isMenuOpen ? "border-b-white/20 border-r border-t" : "border border-transparent"}
            ${isScrolled ? "w-0 pr-0" : "pr-6"
            }`}
        >
          <RstyRafe />
        </h2>
      </header>

      <NavbarContainer isMenuOpen={isMenuOpen} isContainerVisible={isContainerVisible} />
    </>
  );
}


export default function NavbarContainer({ isMenuOpen, isContainerVisible }: { isMenuOpen: boolean; isContainerVisible: boolean }) {
  const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);
  const [routeDirections, setRouteDirections] = useState<{ [key: number]: 'top' | 'bottom' }>({});

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseY = event.clientY;
    const centerY = rect.top + rect.height / 2;

    // Determine if mouse entered from top or bottom
    const direction = mouseY < centerY ? 'top' : 'bottom';
    setRouteDirections(prev => ({ ...prev, [idx]: direction }));
    setHoveredRoute(idx);
  };

  const handleMouseLeave = () => {
    setHoveredRoute(null);
  };

  const routes = [
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    }
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/EsinShadrach",
      icon: <Github className="w-6 h-6" />
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shadrach-rafe-esin-163125271/",
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      name: "X",
      href: "https://x.com/rsty_rafe",
      icon: <Twitter className="w-6 h-6" />
    },
    {
      name: "Email",
      href: "mailto:esinshadrachrafe@gmail.com",
      icon: <Mail className="w-6 h-6" />
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 text-white w-full h-full bg-black z-[90] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {isContainerVisible && <GridLines isWhite />}
      <div className="container mx-auto md:mt-40 mt-[7.5rem] h-full w-full divide-y relative divide-white/20 border-t border-white/20">

        {routes.map((route, idx) => (
          <div
            key={idx}
            className="relative bg-black/70 md:py-10 py-8 font-black text-center md:text-7xl text-5xl border-x border-white/20 overflow-hidden group cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(e, idx)}
            onMouseLeave={handleMouseLeave}
          >
            {/* White background that slides in from detected direction */}
            <div
              className={`absolute inset-0 bg-white transition-transform duration-300 ease-out ${hoveredRoute === idx
                ? 'scale-y-100'
                : 'scale-y-0'
                } ${(routeDirections[idx] || 'bottom') === 'top'
                  ? 'origin-top'
                  : 'origin-bottom'
                }`}
            />

            {/* Route text */}
            <div className={`relative z-10 transition-colors duration-300 ${hoveredRoute === idx ? 'text-black' : 'text-white'
              }`}>
              {route.name.toUpperCase()}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center">
          {socials.map((social, idx) => (
            <div key={idx} className="w-full bg-white">
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <div className="px-0 py-10 overflow-hidden bg-black border border-l-white/20 border-transparent hover:border-white/20 hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-white/20">
                  <div className="flex items-center justify-center gap-2 text-white/50 text-2xl relative">
                    <div className="md:-translate-x-12 transition-all duration-300 group-hover:translate-x-0">
                      {social.icon}
                    </div>
                    <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap md:block hidden">
                      {social.name}
                    </div>
                    <div className="absolute top-2 right-4 opacity-0 -translate-x-4 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowRight className="w-4 h-4 text-white/70 -rotate-45" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div />
      </div>

    </div>
  )
}
