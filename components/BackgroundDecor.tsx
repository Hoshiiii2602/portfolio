"use client";

import dynamic from "next/dynamic";
import { useCoarsePointer, useIsMobile, usePageVisible, usePrefersReducedMotion } from "@/lib/hooks";

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });
const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });

const AURORA_COLORS = ["#06b6d4", "#8b5cf6", "#ec4899"];
const PARTICLE_COLORS = ["#22d3ee", "#a78bfa", "#f472b6"];

export default function BackgroundDecor() {
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useCoarsePointer();
  const isMobile = useIsMobile();
  const pageVisible = usePageVisible();

  const showWebGL = !reducedMotion && pageVisible;
  const showParticles = showWebGL && !isMobile && !coarsePointer;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {showWebGL && (
        <div className="absolute inset-x-0 top-0 h-[60vh] opacity-40 md:h-[70vh] md:opacity-50">
          <Aurora
            colorStops={AURORA_COLORS}
            amplitude={0.85}
            blend={0.5}
            speed={0.6}
          />
        </div>
      )}

      {showParticles && (
        <div className="absolute inset-0 opacity-30 lg:opacity-40">
          <Particles
            particleCount={60}
            particleColors={PARTICLE_COLORS}
            alphaParticles
            moveParticlesOnHover
            particleHoverFactor={0.6}
            particleBaseSize={60}
            speed={0.06}
            className="h-full w-full"
          />
        </div>
      )}

      <div className="diagonal-lines absolute inset-0" />
      <div className="diagonal-lines-alt absolute inset-0" />
      <div className="diagonal-accent absolute -right-[30%] top-[10%] h-[50vh] w-[70vw] rotate-[-18deg] bg-gradient-to-b from-cyan-500/[0.04] via-transparent to-violet-500/[0.03] md:-right-[20%] md:h-[60vh] md:w-[50vw]" />
      <div className="diagonal-accent absolute -left-[25%] bottom-[15%] h-[40vh] w-[60vw] rotate-[12deg] bg-gradient-to-t from-rose-500/[0.03] via-transparent to-transparent md:-left-[15%] md:h-[50vh] md:w-[45vw]" />
      <div className="absolute left-[5%] top-[30%] hidden h-px w-[35vw] rotate-[-25deg] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent sm:block" />
      <div className="absolute right-[5%] top-[55%] hidden h-px w-[40vw] rotate-[20deg] bg-gradient-to-r from-transparent via-violet-500/15 to-transparent sm:block" />
    </div>
  );
}
