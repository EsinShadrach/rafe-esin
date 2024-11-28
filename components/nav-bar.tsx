"use client";

import { useEffect, useState } from "react";
import { RstyRafe } from "~/components/icons/rsty_rafe";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed flex text-white bg-black z-[100]  max-w-fit group transition-all duration-300 ${
        isScrolled ? "m-5 md:ml-0 md:mt-20 gap-0" : "mt-20 gap-3"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center w-20 h-20 bg-white border border-black gap-2 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 active:scale-95 ${
          isScrolled ? "border-b" : "border-b-transparent"
        }`}
      >
        <div className="w-8 h-0.5 bg-black" />
        <div className="w-8 h-0.5 bg-black" />
        <div className="w-8 h-0.5 bg-black" />
      </div>
      <h2
        className={`flex items-center justify-center transition-all duration-300 text-3xl font-semibold ${
          isScrolled ? "w-0 pr-0" : "pr-6"
        }`}
      >
        <RstyRafe />
      </h2>
    </header>
  );
}
