import {
  ArrowRightIcon,
  CodeIcon,
  Palette,
  PaletteIcon,
  ServerIcon,
  SmartphoneIcon,
  SparkleIcon,
} from "lucide-react";
import React from "react";
import { TextGenerateEffect } from "~/components/ui/text-generate";

const skills = [
  {
    name: "Mobile Development",
    description:
      "Building high-performance, cross-platform mobile apps with Flutter — smooth animations, offline support, and real-world scalability included.",
    icon: <SmartphoneIcon className="w-10 h-10" />,
    initialTranslateY: "translate-y-12",
    hoverTranslateY: "hover:translate-y-4",
  },
  {
    name: "Backend Development",
    description:
      "Designing scalable APIs and robust backend systems, with clean architecture and real-time data where it matters.",
    icon: <ServerIcon className="w-10 h-10" />,
    initialTranslateY: "translate-y-28",
    hoverTranslateY: "hover:translate-y-20",
  },
  {
    name: "UI/UX Design",
    description:
      "Creating interfaces that feel intuitive and look stunning — balancing motion, clarity, and responsiveness for modern users.",
    icon: <PaletteIcon className="w-10 h-10" />,
    initialTranslateY: "translate-y-14",
    hoverTranslateY: "hover:translate-y-6",
  },
  {
    name: "Full Stack Development",
    description:
      "From frontend polish to backend logic — architecting full products with seamless integration between design, code, and deployment.",
    icon: <CodeIcon className="w-10 h-10" />,
    initialTranslateY: "translate-y-0",
    hoverTranslateY: "hover:-translate-y-6",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="mt-36 expertise-section">
      <div className="max-w-fit flex gap-4">
        <TextGenerateEffect words="SERVICES" className="text-7xl font-black" />
        <div className="relative -translate-x-6 -translate-y-2 opacity-75">
          <SparkleIcon
            className="w-10 h-10 absolute top-0 left-0 sparkle-animate"
            style={{ animationDelay: "0s" }}
          />
          <SparkleIcon
            className="w-8 h-8 absolute -top-2 left-8 sparkle-animate"
            style={{ animationDelay: "0.6s" }}
          />
          <SparkleIcon
            className="w-6 h-6 absolute top-6 left-8 sparkle-animate"
            style={{ animationDelay: "1.2s" }}
          />
        </div>
      </div>
      <div>
        <TextGenerateEffect
          words="What I bring to the table — from concept to code, and polish to performance."
          className="text-2xl font-medium max-w-xl opacity-75 italic"
        />
      </div>
      <div className="mt-36">
        <div className="w-full h-[31rem] flex [&>*]:w-full [&>*]:h-[24rem] [&>*]:cursor-pointer [&>*]:transition-all [&>*]:duration-300">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.initialTranslateY} ${skill.hoverTranslateY} skill-card group overflow-hidden`}
              style={{ boxShadow: "0 0 0 1.0px rgba(0,0,0,0.8)" }}
            >
              <div className="relative w-full h-full p-2">
                <div className="flex flex-col justify-between h-full w-full text-black rounded-lg transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <div className="flex max-w-fit justify-center items-center gap-3 mt-6">
                    <div className="-translate-x-16 opacity-0 group-hover:translate-x-5 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRightIcon className="w-16 h-16" />
                    </div>
                    <div className="transition-all duration-300 -translate-x-16 group-hover:translate-x-5">
                      {skill.icon}
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <TextGenerateEffect
                      words={skill.name}
                      className="text-2xl font-medium"
                    />
                    <div className="max-h-0 overflow-hidden opacity-0 translate-y-4 group-hover:max-h-32 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-base mt-2">
                      {skill.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
