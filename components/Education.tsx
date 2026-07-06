"use client";

import SectionTitle from "@/components/SectionTitle";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/components/LanguageProvider";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle label={t.educationMeta.label} title={t.educationMeta.title} />

        <RevealOnScroll>
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {t.education.school}
                </h3>
                <p className="mt-2 text-base text-violet-300">{t.education.degree}</p>
                <p className="mt-1 text-sm text-slate-500">{t.education.major}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  {t.education.description}
                </p>
              </div>

              <div className="flex shrink-0 flex-row gap-4 sm:flex-col sm:items-end sm:gap-3">
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-3 text-center transition-transform hover:scale-105">
                  <p className="font-mono text-xs text-slate-500">{t.educationMeta.gpaLabel}</p>
                  <p className="font-display text-2xl font-bold text-cyan-400">{t.education.gpa}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center">
                  <p className="font-mono text-xs text-slate-500">{t.educationMeta.periodLabel}</p>
                  <p className="text-sm font-medium text-slate-300">{t.education.period}</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
