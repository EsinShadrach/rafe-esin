"use client";
import { SimplexNoise } from "@paper-design/shaders-react";
import { ArrowRight, DownloadCloud, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HeroSection } from "~/components/hero-section";
import { NavBar } from "~/components/nav-bar";
import ExpertiseSection from "./_components/expertise-section";

export default function Home() {
  return (
    <main className="container mx-auto">
      <NavBar />

      <HeroSection />
      <div className="flex">
        <div className="w-full" />
        <div className="w-full md:w-0" />
        <div className="w-full bg-black">
          <div className="px-0 py-6 overflow-hidden bg-white border border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black">
            <div className="flex px-6 text-lg font-semibold gap-1">
              <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
              <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                View My Works
              </div>
              <div className="ml-auto">
                <Sparkles className="group-hover:animate-bounce" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full" />
        <div className="w-full" />
      </div>
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-36 border border-black border-x-black/60 lg:h-[50rem] p-2 flex flex-col items-center justify-center font-black text-9xl text-center"
      >
        <div className="w-full h-full overflow-hidden">
          <PoliceTapeDiagonal />
        </div>
      </motion.section>
      <ExpertiseSection />
    </main>
  );
}

function PoliceTapeDiagonal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Calculate perfect corner-to-corner angle dynamically
  const angle =
    dimensions.width > 0
      ? Math.atan2(dimensions.height, dimensions.width) * (180 / Math.PI)
      : 35; // Fallback for initial render

  // Pythagorean theorem for the length, plus 200px padding to hide the edges safely
  const diagLength =
    dimensions.width > 0
      ? Math.sqrt(dimensions.width ** 2 + dimensions.height ** 2) + 200
      : 3000;

  const text1 =
    "🚧 UNDER CONSTRUCTION 🚧 DO NOT CROSS 🚧 CRACKED ENGINEER AT WORK ";
  const text2 =
    "⚡ DESIGN MEETS ENGINEERING ⚡ FULLSTACK WIZARDRY ⚡ PERFORMANCE FIRST ";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black"
    >
      <SimplexNoise
        className="absolute"
        width={2280}
        height={1020}
        colors={["#000000", "#ffffff", "#000000", "#ffffff", "#ffffff"]}
        stepsPerColor={2}
        softness={0}
        speed={0.5}
        scale={0.6}
      />

      {/* Tape 1 (Top-Left to Bottom-Right) */}
      <div
        className="absolute flex items-center justify-center border-black shadow-2xl top-1/2 left-1/2 border-y-4"
        style={{
          width: `${diagLength}px`,
          height: "90px",
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          background:
            "repeating-linear-gradient(45deg, #facc15 0 28px, #000 28px 42px)",
          zIndex: 10,
        }}
      >
        {/* The Solid Black Track for Text */}
        <div className="w-full bg-black h-[52px] flex items-center border-y-[3px] border-black overflow-hidden">
          <Marquee text={text1} direction={1} />
        </div>
      </div>

      {/* Tape 2 (Bottom-Left to Top-Right) */}
      <div
        className="absolute flex items-center justify-center border-black shadow-2xl top-1/2 left-1/2 border-y-4"
        style={{
          width: `${diagLength}px`,
          height: "90px",
          transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
          // Invert the stripe angle for perfect mirroring
          background:
            "repeating-linear-gradient(-45deg, #facc15 0 28px, #000 28px 42px)",
          zIndex: 5,
        }}
      >
        {/* The Solid Black Track for Text */}
        <div className="w-full bg-black h-[52px] flex items-center border-y-[3px] border-black overflow-hidden">
          <Marquee text={text2} direction={-1} />
        </div>
      </div>
    </div>
  );
}

function Marquee({
  text,
  direction = 1,
}: {
  text: string;
  direction?: number;
}) {
  const content = text.repeat(4);
  return (
    <div className="flex w-max">
      <motion.div
        animate={{ x: direction === 1 ? [0, "-50%"] : ["-50%", 0] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex whitespace-nowrap text-2xl font-black text-[#facc15] tracking-widest uppercase"
      >
        <span className="pr-4">{content}</span>
        <span className="pr-4">{content}</span>
      </motion.div>
    </div>
  );
}

function DownloadResumeButton() {
  return (
    <Link href={"/resume.pdf"} rel="noopener noreferrer">
      <div className="flex">
        <div className="w-full" />
        <div className="w-full md:w-0" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full bg-black"
        >
          <div className="px-0 py-6 overflow-hidden bg-white border border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black">
            <div className="flex px-6 text-lg font-semibold gap-1">
              <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
              <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                Download my Resume
              </div>
              <div className="ml-auto">
                <DownloadCloud className="group-hover:animate-bounce" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="w-full" />
        <div className="w-full" />
      </div>
    </Link>
  );
}
