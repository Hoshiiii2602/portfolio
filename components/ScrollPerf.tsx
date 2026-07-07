"use client";

import { useEffect } from "react";

let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

export default function ScrollPerf() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          root.classList.add("is-scrolling");
          if (scrollTimeout) clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            root.classList.remove("is-scrolling");
          }, 120);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      root.classList.remove("is-scrolling");
    };
  }, []);

  return null;
}
