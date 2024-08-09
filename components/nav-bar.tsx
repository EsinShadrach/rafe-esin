import { RstyRafe } from "~/components/icons/rsty_rafe";

export function NavBar() {
  return (
    <header className="fixed z-20 flex mt-20 text-white bg-black gap-3 max-w-fit group">
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-white border border-black gap-2 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 active:scale-95 border-b-transparent">
        <div className="w-8 h-0.5 bg-black" />
        <div className="w-8 h-0.5 bg-black" />
        <div className="w-8 h-0.5 bg-black" />
      </div>
      <h2 className="flex items-center justify-center pr-6 text-3xl font-semibold">
        <RstyRafe />
      </h2>
    </header>
  );
}
