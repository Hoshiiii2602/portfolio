"use client";

import SectionTitle from "@/components/SectionTitle";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-14 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label={t.experience.label}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[15px] top-2 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent sm:left-[1.125rem]" />

          <div className="flex flex-col gap-8 sm:gap-0">
            {t.experiences.map((exp, index) => (
              <RevealOnScroll key={exp.company} delay={index * 100}>
                <article className="relative sm:grid sm:grid-cols-[12rem_1fr] sm:gap-8 sm:pb-16 last:sm:pb-0">
                  <div className="mb-4 flex items-start gap-3 pl-0 sm:mb-0 sm:block sm:pl-0">
                    <div className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/40 bg-[#040810] shadow-md shadow-cyan-500/10 sm:mt-1 sm:h-[2.25rem] sm:w-[2.25rem] sm:shadow-lg">
                      <div className="h-2 w-2 rounded-full bg-cyan-400 shadow shadow-cyan-400/50" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-mono text-xs font-medium leading-snug text-cyan-400 sm:text-sm">
                        {exp.period}
                      </p>
                      {index === 0 && (
                        <span className="mt-2 inline-block rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-300 ring-1 ring-cyan-500/20">
                          {t.experience.current}
                        </span>
                      )}
                    </div>
                  </div>

                  <SpotlightCard
                    className="rounded-2xl sm:ml-0"
                    spotlightColor="rgba(6, 182, 212, 0.15)"
                  >
                    <div className="glass-card rounded-2xl border-0 bg-transparent p-5 sm:p-8">
                      <h3 className="font-display text-lg font-semibold text-white sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-violet-300 sm:text-base">{exp.company}</p>

                      <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                        {exp.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400 sm:gap-3 sm:text-base"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500/70"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
