import { SparkleIcon } from "lucide-react"

export function HeroSection() {
  return (
    <div className="pt-[7.5rem] md:pt-40 text-zinc-900">
      <div className="relative flex w-full py-12 items-center justify-center text-center bg-white/90 min-h-[35rem]">
        <div className="absolute inset-x-0 top-0 h-px bg-black animate-width" />
        <div className="absolute inset-y-0 left-0 w-px h-full bg-black animate-height" />
        <div className="absolute inset-y-0 right-0 w-px h-full bg-black animate-height" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-black animate-width" />

        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <div className="short-desc flex mx-auto w-fit gap-2 text-sm md:text-lg font-medium items-center justify-center pr-5">
            <div>MOBILE APP DEVELOPER</div>
            <SparkleIcon className="w-4 h-4 animate-pulse" />
            <div>FULLSTACK DEVELOPER</div>
            <SparkleIcon className="w-4 h-4 animate-pulse" />
            <div>SOFTWARE ENGINEER</div>
          </div>
          {/* // Who you are, {e.g Cracked Developer with a } */}
          <div className="space-y-2">
            <div className="relative text-4xl md:text-7xl font-black uppercase mx-auto max-w-5xl">
              {[
                {
                  textGray: "text-gray-400",
                  translateX: "-translate-x-1",
                  translateY: "translate-y-1",
                  z: "-z-10",
                  wowColor: "text-red-300",
                },
                {
                  textGray: "text-gray-500",
                  translateX: "-translate-x-0.5",
                  translateY: "translate-y-0.5",
                  z: "-z-20",
                  wowColor: "text-red-400",
                },
                {
                  textGray: "text-gray-600",
                  translateX: "-translate-x-1.5",
                  translateY: "translate-y-1.5",
                  z: "-z-30",
                  wowColor: "text-red-500",
                },
                {
                  textGray: "text-gray-700",
                  translateX: "-translate-x-2",
                  translateY: "translate-y-2",
                  z: "-z-40",
                  wowColor: "text-red-600",
                },
              ].map((layer, idx) => (
                <div
                  key={idx}
                  className={`absolute top-0 left-0 ${layer.textGray} ${layer.translateX} ${layer.translateY} ${layer.z}`}
                >
                  I build cross-platform apps that don&apos;t just work, they{" "}
                  <span className={layer.wowColor}>wow</span>.
                </div>
              ))}
              <div className="relative z-10 text-zinc-900">
                I build cross-platform apps that don&apos;t just work, they <Text3d text="Wow" />
              </div>
            </div>
            <i className="text-base md:text-2xl font-semibold mt-3">— Everytime</i>.
          </div>
          <div className="text-lg md:text-2xl font-medium text-zinc-900">
            Blending design, performance, and <br /> architecture into something you&apos;ll love.
          </div>
        </div>
      </div>
    </div >
  );
}


export default function Text3d({ text }: { text: string }) {
  const length = 10;

  return (
    <div className="relative inline-block">
      {Array.from({ length }).map((_, index) => (
        <span
          key={index}
          className="absolute text-black"
          style={{
            left: `-${index}px`,
            top: `${index}px`,
          }}
        >
          {text}
        </span>
      ))}
      {/* Top layer: the actual text in a different color */}
      <span className="relative text-white outlined-text">{text}</span>
    </div>
  );
}
