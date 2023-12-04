"use client";
import { useState } from "react";
import { cn } from "~/utils/class-name";
import { TypographyH1, TypographyH2, TypographyP } from "~/utils/typography";

export function MyNameIs() {
  const [hide, setHide] = useState(false);
  return (
    <div
      onClick={() => setHide(true)}
      className={cn(
        "fixed -inset-10 bg-orange-100 z-20 flex justify-center items-center transform-all duration-300 flex-col",
        hide ? "opacity-0 h-0" : "fixed"
      )}
    >
      <div
        className={cn(
          "typewriter w-fit text-center mx-auto pt-12 transition-all sm:duration-1000 duration-300"
        )}
      >
        <TypographyH1
          onAnimationEnd={() => setHide(true)}
          className="hidden sm:block"
        >
          Hi, I&rsquo;m Shadrach Esin...
        </TypographyH1>
        <TypographyH2
          className="block sm:hidden"
          onAnimationEnd={() => setHide(true)}
        >
          Hi, I&rsquo;m Shadrach Esin...
        </TypographyH2>
      </div>
      <button>
        <TypographyP>
          <b>Tip</b>: Click to Skip
        </TypographyP>
      </button>
    </div>
  );
}
