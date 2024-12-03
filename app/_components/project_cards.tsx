import { ArrowRight, Sparkles } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  type: "Web" | "App";
};

export function ProjectCard({
  title,
  description,
  type,
  image,
}: ProjectCardProps) {
  return (
    <div className="relative w-full h-full p-3 overflow-hidden rounded-md group transition-all duration-300">
      <GradientTransparentToBlack />
      <Image
        src={image}
        alt={title}
        className="object-cover w-full h-full mx-auto"
      />

      <div className="absolute inset-0 bottom-0 flex flex-col justify-end h-full p-6 text-white">
        <h3 className="flex text-2xl font-semibold gap-3">
          {title}
          <Badge type={type} />
        </h3>
        <h4 className="mt-3 font-light">{description}</h4>
      </div>
    </div>
  );
}

import React from "react";

function Badge({ type }: { type: ProjectCardProps["type"] }) {
  return (
    <div className="flex items-center justify-center px-5 py-1 text-xs text-center text-white bg-black rounded-full w-fit">
      <div>{type}</div>
    </div>
  );
}

function GradientTransparentToBlack() {
  return (
    <div className="absolute inset-0 flex items-center justify-center m-3 bg-gradient-to-b from-transparent to-black/75 rounded-md">
      <Link
        href={"https://savecircle.app"}
        className="p-3 overflow-hidden bg-white border border-black opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <div className="flex pr-4 text-lg font-semibold gap-1">
          <ArrowRight className="-translate-x-12 transition-all duration-300 group-hover:translate-x-0" />
          <div className="group-hover:translate-x-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
            View
          </div>
        </div>
      </Link>
    </div>
  );
}
