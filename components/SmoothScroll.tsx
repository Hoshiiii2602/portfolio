"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useCoarsePointer, usePrefersReducedMotion } from "@/lib/hooks";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useCoarsePointer();

  useEffect(() => {
    if (reducedMotion || coarsePointer) return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      autoRaf: true,
    });

    lenis.scrollTo(0, { immediate: true, force: true });
    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [reducedMotion, coarsePointer]);

  return children;
}
