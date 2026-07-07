"use client";

import SectionTitle from "@/components/SectionTitle";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-3" delay={100}>
            <SpotlightCard className="rounded-2xl" spotlightColor="rgba(34, 211, 238, 0.12)">
              <div className="glass-card rounded-2xl border-0 bg-transparent p-6 sm:p-8">
                <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                  {t.profile.objective}
                </p>
              </div>
            </SpotlightCard>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-2" delay={200} direction="right">
            <SpotlightCard className="rounded-2xl" spotlightColor="rgba(167, 139, 250, 0.12)">
              <div className="glass-card rounded-2xl border-0 bg-transparent p-6 sm:p-8">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">
                {t.about.interests}
              </h3>
              <ul className="space-y-3">
                {t.hobbies.map((hobby, i) => (
                  <li
                    key={hobby}
                    className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-300 sm:text-base"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                    {hobby}
                  </li>
                ))}
              </ul>
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
