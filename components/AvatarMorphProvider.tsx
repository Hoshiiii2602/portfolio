"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

type AvatarMorphContextValue = {
  heroRef: RefObject<HTMLDivElement | null>;
  navRef: RefObject<HTMLSpanElement | null>;
};

const AvatarMorphContext = createContext<AvatarMorphContextValue | null>(null);

const SCROLL_THRESHOLD = 180;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useAvatarMorph() {
  return useContext(AvatarMorphContext);
}

export default function AvatarMorphProvider({ children }: { children: ReactNode }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLSpanElement>(null);
  const morphRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(640);
  const reducedMotion = usePrefersReducedMotion();
  const enabled = isMobile && !reducedMotion;

  const update = useCallback(() => {
    const root = document.documentElement;
    const morph = morphRef.current;
    const hero = heroRef.current;
    const nav = navRef.current;

    if (!enabled || !hero || !nav || !morph) {
      root.classList.remove("avatar-morph-active", "avatar-morph-complete");
      root.style.removeProperty("--avatar-scroll-progress");
      morph?.style.setProperty("display", "none");
      return;
    }

    const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_THRESHOLD));
    root.classList.add("avatar-morph-active");
    root.style.setProperty("--avatar-scroll-progress", String(p));
    root.classList.toggle("avatar-morph-complete", p >= 0.98);

    if (p <= 0.001) {
      morph.style.display = "none";
      return;
    }

    const t = p >= 1 ? 1 : easeOutCubic(p);
    const heroRect = hero.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const left = heroRect.left + (navRect.left - heroRect.left) * t;
    const top = heroRect.top + (navRect.top - heroRect.top) * t;
    const width = heroRect.width + (navRect.width - heroRect.width) * t;
    const height = heroRect.height + (navRect.height - heroRect.height) * t;
    const startRadius = heroRect.width / 2;
    const endRadius = 8;
    const radius = startRadius + (endRadius - startRadius) * t;

    morph.style.display = "block";
    morph.style.left = `${left}px`;
    morph.style.top = `${top}px`;
    morph.style.width = `${width}px`;
    morph.style.height = `${height}px`;
    morph.style.borderRadius = `${radius}px`;
    morph.style.zIndex = p >= 0.98 ? "51" : "55";
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("avatar-morph-active", "avatar-morph-complete");
      document.documentElement.style.removeProperty("--avatar-scroll-progress");
      morphRef.current?.style.setProperty("display", "none");
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.documentElement.classList.remove("avatar-morph-active", "avatar-morph-complete");
      document.documentElement.style.removeProperty("--avatar-scroll-progress");
    };
  }, [enabled, update]);

  return (
    <AvatarMorphContext.Provider value={{ heroRef, navRef }}>
      {children}
      <div
        ref={morphRef}
        className="avatar-morph-layer pointer-events-none fixed hidden overflow-hidden border-2 border-white/20 shadow-lg shadow-cyan-500/10"
        aria-hidden="true"
      >
        <Image
          src="/images/profile.png"
          alt=""
          fill
          className="object-cover object-[center_15%]"
          sizes="96px"
          priority
        />
      </div>
    </AvatarMorphContext.Provider>
  );
}
