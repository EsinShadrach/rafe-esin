"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function scroll() {
  const lenis = new Lenis({
    duration: 1.8,
    easing: function (t) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    },
    infinite: false,
    smoothWheel: true,
    smoothTouch: true,
    // smooth: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export function ScrollProvider({ children }: React.PropsWithChildren) {
  useEffect(() => {
    scroll();
  }, []);
  return <>{children}</>;
}
