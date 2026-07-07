"use client";

import LogoLoop from "@/components/LogoLoop";

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

export default function TechMarquee() {
  return (
    <div className="relative overflow-x-clip border-y border-white/5 bg-white/[0.01] py-4 sm:py-6">
      <LogoLoop
        logos={TECH_STACK.map((tech) => ({
          node: (
            <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400 sm:px-5 sm:py-2 sm:text-sm">
              {tech}
            </span>
          ),
          title: tech,
        }))}
        speed={28}
        direction="left"
        pauseOnHover
        fadeOut
        fadeOutColor="#040810"
        logoHeight={40}
        gap={24}
        className="opacity-80"
      />
    </div>
  );
}
