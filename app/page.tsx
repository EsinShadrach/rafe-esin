import { HeroSection } from "~/components/hero-section";
import { ArrowRight, Sparkles } from "lucide-react";
import { NavBar } from "~/components/nav-bar";

export default function Home() {
  return (
    <main className="container pb-3 mx-auto">
      <NavBar />

      <HeroSection />
      <div className="flex">
        <div className="w-full" />
        <div className="w-full bg-black">
          <div className="px-0 py-6 overflow-hidden bg-white border border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black">
            <div className="flex px-6 text-lg font-semibold gap-1">
              <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
              <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105">
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
      <SlideShowOfWork />
    </main>
  );
}

import React from "react";

function SlideShowOfWork() {
  return (
    <div className="mt-32 space-y-4">
      <h2 className="text-5xl font-semibold">Recent Projects:</h2>
      <div className="w-full border border-black aspect-square h-[40rem] flex justify-center items-center">
        A Slide Show Of Recent Projects Here
      </div>
    </div>
  );
}
