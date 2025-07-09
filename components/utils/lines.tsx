import React from "react";

export function GridLines({ isWhite }: { isWhite?: boolean }) {
  return (
    <div className={`container fixed inset-0 flex min-h-screen mx-auto border-x ${isWhite ? "border-white/20" : "border-black/20"}`}>
      <div className={`w-full h-full border-r animate-height md:mr-0 mr-32 ${isWhite ? "border-white/20" : "border-black/20"}`} />
      <div className={`w-full h-full border-r animate-height md:block hidden ${isWhite ? "border-white/20" : "border-black/20"}`} />
      <div className={`w-full h-full border-r animate-height ${isWhite ? "border-white/20" : "border-black/20"}`} />
      <div className="w-full h-full" />
    </div>
  );
}
