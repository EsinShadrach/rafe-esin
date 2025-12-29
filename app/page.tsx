"use client";
import { HeroSection } from "~/components/hero-section";
import { ArrowRight, DownloadCloud, Sparkles } from "lucide-react";
import { NavBar } from "~/components/nav-bar";
import Link from "next/link";
import { TextGenerateEffect } from "~/components/ui/text-generate";
import underConstruction from "~/public/under-construction.png";
import Image from "next/image";
import ExpertiseSection from "./_components/expertise-section";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="container pb-96 mx-auto">
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
        <div className="rounded-xl overflow-hidden w-full h-full">
          <Image
            src={underConstruction}
            placeholder="blur"
            alt="Under Construction"
            className="w-full h-full lg:object-cover"
          />
        </div>
      </motion.section>
      <ExpertiseSection />
    </main>
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
