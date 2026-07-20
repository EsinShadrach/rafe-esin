"use client";
import {
  ArrowRight,
  ArrowRightIcon,
  CodeIcon,
  Globe,
  PaletteIcon,
  ServerIcon,
  SmartphoneIcon,
  SparkleIcon,
  Sparkles,
} from "lucide-react";
import React from "react";
import { TextGenerateEffect } from "~/components/ui/text-generate";
import { motion } from "motion/react";
import Image from "next/image";
import puntrrWeb from "~/public/projects/puntrr-web.png";
import Link from "next/link";
import playcopeWeb from "~/public/projects/playcope-web.png";
import saveCircleWeb from "~/public/projects/savecircle-web.png";

const skills = [
  {
    name: "Mobile Development",
    description:
      "Building high-performance, cross-platform mobile apps with Flutter — smooth animations, offline support, and real-world scalability included.",
    icon: <SmartphoneIcon className="w-10 h-10" />,
    initialTranslateY: "lg:translate-y-12",
    hoverTranslateY: "lg:hover:translate-y-4",
  },
  {
    name: "Backend Development",
    description:
      "Designing scalable APIs and robust backend systems, with clean architecture and real-time data where it matters.",
    icon: <ServerIcon className="w-10 h-10" />,
    initialTranslateY: "lg:translate-y-28",
    hoverTranslateY: "lg:hover:translate-y-20",
  },
  {
    name: "UI/UX Design",
    description:
      "Creating interfaces that feel intuitive and look stunning — balancing motion, clarity, and responsiveness for modern users.",
    icon: <PaletteIcon className="w-10 h-10" />,
    initialTranslateY: "lg:translate-y-14",
    hoverTranslateY: "lg:hover:translate-y-6",
  },
  {
    name: "Full Stack Development",
    description:
      "From frontend polish to backend logic — architecting full products with seamless integration between design, code, and deployment.",
    icon: <CodeIcon className="w-10 h-10" />,
    initialTranslateY: "lg:translate-y-0",
    hoverTranslateY: "lg:hover:-translate-y-6",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="mt-36 expertise-section">
      <div className="flex max-w-fit gap-4">
        <TextGenerateEffect
          words="Expertise"
          className="font-black uppercase text-7xl"
        />
        <div className="relative opacity-75 -translate-x-6 -translate-y-2">
          <SparkleIcon
            className="absolute top-0 left-0 w-10 h-10 sparkle-animate"
            style={{ animationDelay: "0s" }}
            strokeWidth={1}
          />
          <SparkleIcon
            className="absolute w-8 h-8 -top-2 left-8 sparkle-animate"
            style={{ animationDelay: "0.6s" }}
            strokeWidth={1}
          />
          <SparkleIcon
            className="absolute w-6 h-6 top-6 left-8 sparkle-animate"
            style={{ animationDelay: "1.2s" }}
            strokeWidth={1}
          />
        </div>
      </div>
      <div>
        <TextGenerateEffect
          words="What I bring to the table — from concept to code, and polish to performance."
          className="max-w-xl text-2xl italic font-medium opacity-75"
        />
      </div>
      <div className="mt-36">
        <div className="w-full h-auto lg:h-[31rem] flex flex-wrap lg:flex-nowrap gap-0">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="w-1/2 lg:flex-1"
            >
              <div
                className={`${skill.initialTranslateY} ${skill.hoverTranslateY} h-[18rem] lg:h-[24rem] cursor-pointer transition-all duration-300 skill-card group overflow-hidden bg-white`}
                style={{
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderTop: "1px solid rgba(0,0,0,0.4)",
                  borderBottom: "1px solid rgba(0,0,0,0.4)",
                }}
              >
                <div className="relative w-full h-full p-2">
                  <div className="flex flex-col justify-between w-full h-full text-black rounded-lg transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <div className="flex items-center justify-center mt-6 max-w-fit gap-3">
                      <div className="opacity-0 -translate-x-16 group-hover:translate-x-5 group-hover:opacity-100 transition-all duration-300">
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
                      <div className="mt-2 overflow-hidden text-base opacity-0 max-h-0 translate-y-4 group-hover:max-h-32 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {skill.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="main-class-project">
        <div className="mt-48 group lg:w-3/4">
          <Link href={"/projects/playcope-web"}>
            <div className="w-full overflow-hidden bg-black">
              <Image
                placeholder="blur"
                alt="playcope-web"
                src={puntrrWeb}
                className="hover:scale-[1.03] transition-all duration-300 w-full"
              />
            </div>
          </Link>
          <div className="relative p-6 py-4 overflow-hidden bg-white border border-t-0 border-black lg:w-2/3">
            <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            <div className="relative z-10 group-hover:selection:bg-white group-hover:selection:text-black">
              <TextGenerateEffect
                words="Puntrr"
                className="text-5xl font-bold lg:text-7xl transition-all duration-300 group-hover:text-white"
              />
              <div className="flex items-center mt-2 text-sm font-bold tracking-widest uppercase gap-3 opacity-80 group-hover:text-white transition-colors duration-300">
                <span>Sports</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>AI Predictions</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>Machine Learning</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>Analysis</span>
              </div>
            </div>
          </div>
          <div className="flex bg-white lg:w-1/3">
            <div className="w-full bg-black">
              <div className="px-0 py-6 overflow-hidden bg-white border border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black">
                <div className="flex px-6 text-lg font-semibold gap-1">
                  <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
                  <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                    Web
                  </div>
                  <div className="ml-auto">
                    <Globe className="group-hover:animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-black">
              <div className="px-0 py-6 overflow-hidden bg-white border border-l-0 border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black hover:border-l">
                <div className="flex px-6 text-lg font-semibold gap-1">
                  <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
                  <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                    Mobile
                  </div>
                  <div className="ml-auto">
                    <SmartphoneIcon className="group-hover:animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Playcope */}
        <div className="lg:w-1/2 lg:-translate-y-48 lg:ml-auto group">
          <div className="overflow-hidden bg-black">
            <Image
              alt="Playcope"
              placeholder="blur"
              src={playcopeWeb}
              className="hover:scale-[1.03] transition-all duration-300 w-full"
            />
          </div>

          <div className="relative p-6 py-4 overflow-hidden bg-white border border-t-0 border-black">
            <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1] " />
            <div className="relative z-10 group-hover:selection:bg-white group-hover:selection:text-black">
              <TextGenerateEffect
                words="Playcope"
                className="text-5xl font-bold lg:text-7xl transition-all duration-300 group-hover:text-white"
              />
              <div className="flex items-center mt-2 text-sm font-bold tracking-widest uppercase gap-3 opacity-80 group-hover:text-white transition-colors duration-300">
                <span>Sports</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>Data Ecosystem</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>Data Aggregation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>Data Labeling</span>
              </div>
            </div>
          </div>

          <div className="flex w-1/2 bg-white max-lg:mx-auto lg:ml-auto">
            <div className="w-full bg-black">
              <div className="px-0 py-6 overflow-hidden bg-white border border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black">
                <div className="flex px-6 text-lg font-semibold gap-1">
                  <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
                  <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                    Web
                  </div>
                  <div className="ml-auto">
                    <Globe className="group-hover:animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SaveCircle */}
        <div className="lg:w-1/2 lg:-translate-y-96 group">
          <div className="overflow-hidden">
            <Image
              alt="SaveCircle"
              src={saveCircleWeb}
              className="hover:scale-[1.03] transition-all duration-300 w-full"
            />
          </div>

          <div className="relative p-3 py-3 overflow-hidden bg-white border border-t-0 border-black">
            <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            <div className="relative z-10 group-hover:selection:bg-white group-hover:selection:text-black">
              <TextGenerateEffect
                words="SaveCircle"
                className="text-5xl font-bold lg:text-7xl transition-all duration-300 group-hover:text-white"
              />
              <div className="flex items-center mt-2 text-sm font-bold tracking-widest uppercase gap-3 opacity-80 group-hover:text-white transition-colors duration-300">
                <span>Finance</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>FinTech</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                <span>Investment & Planning</span>
              </div>
            </div>
          </div>

          <div className="flex bg-white lg:w-1/2">
            <div className="w-full bg-black">
              <div className="px-0 py-6 overflow-hidden bg-white border border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black">
                <div className="flex px-6 text-lg font-semibold gap-1">
                  <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
                  <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                    Web
                  </div>
                  <div className="ml-auto">
                    <Globe className="group-hover:animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-black">
              <div className="px-0 py-6 overflow-hidden bg-white border border-l-0 border-black hover:-translate-y-3 border-t-transparent group transition-all duration-300 hover:translate-x-3 hover:border-t-black hover:border-l">
                <div className="flex px-6 text-lg font-semibold gap-1">
                  <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
                  <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                    Mobile
                  </div>
                  <div className="ml-auto">
                    <SmartphoneIcon className="group-hover:animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
