"use client";

import React, { useEffect, useState } from "react";
import { RstyRafe } from "~/components/icons/rsty_rafe";
import NavbarContainer from "./navbar-container";

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
        className={`fixed flex text-white bg-black z-[100]  max-w-fit group transition-all duration-300 ${isScrolled ? "m-5 md:ml-0 md:mt-20 gap-0" : "md:mt-20 mt-10"}`}
      >
        <div
          className={`relative flex flex-col items-center justify-center w-20 h-20 gap-2 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 active:scale-95 cursor-pointer overflow-hidden 
            ${isMenuOpen ? "bg-black border-white/20 border-x border-t" : "bg-white border-black border"}
            ${isScrolled ? "border-b" : isMenuOpen ? "border-b-white/20" : "border-b-transparent"}
            `}
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
          className={`flex items-center justify-center transition-all duration-300 text-3xl font-semibold border-l-0 border-white/20
            ${isMenuOpen ? "border-b-white/20 border-t" : "border border-transparent"}
            ${isMenuOpen && !isScrolled ? "border-r" : "border-r-0"}
            ${isScrolled ? "w-0 pr-0" : "pr-6"}
            `}
        >
          <RstyRafe />
        </h2>
      </header>

      <NavbarContainer isMenuOpen={isMenuOpen} isContainerVisible={isContainerVisible} />
    </>
  );
}
