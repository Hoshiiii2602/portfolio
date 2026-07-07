"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <RevealOnScroll>
      <div className="mb-12 sm:mb-16">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
          <span className="mr-2 inline-block h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent align-middle" />
          {label}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="shimmer-title">{title}</span>
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
}
