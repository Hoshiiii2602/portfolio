"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  duration?: number;
};

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 800,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const visible = reducedMotion || intersected;

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const directionClass = {
    up: "reveal-up",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[direction];

  const blurClass = isMobile ? "reveal-no-blur" : "";

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${blurClass} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{
        transitionDelay: reducedMotion ? "0ms" : `${delay}ms`,
        transitionDuration: reducedMotion ? "0ms" : `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
