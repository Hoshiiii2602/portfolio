"use client";

import LogoLoop from "@/components/LogoLoop";
import { useIsMobile } from "@/lib/hooks";

const TECH_STACK = [
  "Flutter",
  "Dart",
  "React Native",
  "ReactJS",
  "Next.js",
  "TypeScript",
  "WebSocket",
  "Bloc",
  "Riverpod",
  "Fintech",
  "eKYC",
  "Firebase",
  "REST API",
  "JWT",
];

const pillClass =
  "inline-flex h-8 items-center whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3.5 text-xs font-medium leading-none text-slate-300 sm:h-9 sm:px-5 sm:text-sm";

export default function TechMarquee() {
  const isMobile = useIsMobile(640);

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.01]">
      <div className="flex min-h-12 items-center py-3 sm:min-h-14 sm:py-4">
        <LogoLoop
          logos={TECH_STACK.map((tech) => ({
            node: <span className={pillClass}>{tech}</span>,
            title: tech,
          }))}
          speed={24}
          direction="left"
          pauseOnHover
          fadeOut={!isMobile}
          fadeOutColor="#040810"
          logoHeight={32}
          gap={12}
          className="w-full [&_li]:flex [&_li]:items-center"
          ariaLabel="Tech stack"
        />
      </div>
      {isMobile && (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#040810] to-transparent"
          aria-hidden
        />
      )}
      {isMobile && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-r from-transparent to-[#040810]"
          aria-hidden
        />
      )}
    </div>
  );
}
