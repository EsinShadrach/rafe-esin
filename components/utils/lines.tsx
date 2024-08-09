import React from "react";

export function GridLines() {
  return (
    <div className="container fixed inset-0 flex min-h-screen mx-auto border-x border-black/20">
      <div className="w-full h-full border-r animate-height border-black/20" />
      <div className="w-full h-full border-r animate-height border-black/20" />
      <div className="w-full h-full border-r animate-height border-black/20" />
      <div className="w-full h-full" />
    </div>
  );
}
