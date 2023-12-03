import { cn } from "~/utils/class-name";
import { TypographyH1 } from "~/utils/typography";

export default function HomePage() {
  return (
    <section
      className={cn(
        "container mx-auto p-3 relative",
        "w-full h-full space-y-6"
      )}
    >
      <div className={cn("typewwcriter w-fit text-center mx-auto pt-12")}>
        <TypographyH1 className="">Hi, I&rsquo;m Shadrach Esin...</TypographyH1>
      </div>
      <div>Some Stuff here</div>
    </section>
  );
}
