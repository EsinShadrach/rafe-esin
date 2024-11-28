export function HeroSection() {
  return (
    <div className="pt-40">
      <div className="relative flex w-full py-12 text-center h-96 bg-white/80">
        <div className="absolute inset-x-0 top-0 h-px bg-black animate-width" />
        <div className="absolute inset-y-0 left-0 w-px h-full bg-black animate-height" />
        <div className="absolute inset-y-0 right-0 w-px h-full bg-black animate-height" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-black animate-width" />
        <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-3xl font-semibold text-white bg-black">
          <div className="rotate-90 whitespace-nowrap">
            {new Date().getFullYear() - 2020} Years
          </div>
        </div>

        <div>
          <h2 className="text-9xl">Hi,I&apos;m</h2>

          <div className="flex w-full max-w-md bg-red-300 justify-evenly -ml-[4.5rem]">
            <TextsStackedOnEachOther letter="R" />
            <TextsStackedOnEachOther letter="A" />
            <TextsStackedOnEachOther letter="F" />
            <div className="-ml-3">
              <TextsStackedOnEachOther letter="E" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextsStackedOnEachOther({ letter }: { letter: string }) {
  return (
    <div className="relative font-bold cursor-pointer text-9xl group max-w-min">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          style={{
            top: `calc(-1 * ${index} * var(--offset))`,
            left: `calc(${index} * var(--offset))`,
          }}
          className={`absolute transition-all duration-300 group-hover:z-20 ${
            index < 8 ? "[--offset:0.02rem] group-hover:[--offset:0.05rem]" : ""
          } ${
            index === 8
              ? "[--offset:0.04rem] group-hover:[--offset:0.1rem]"
              : ""
          } ${
            index === 9
              ? "[--offset:0.02rem] group-hover:[--offset:0.05rem]"
              : ""
          } ${index === 9 ? "text-white" : "text-black"}
          `}
          key={index}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
