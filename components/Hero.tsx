"use client";

import Image from "next/image";
import { GradientText, NameGradient, TypewriterText } from "@/components/AnimatedText";
import CvDownload from "@/components/CvDownload";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { locale, t } = useLanguage();
  const displayName = locale === "vi" ? t.profile.name : t.profile.nameEn;

  return (
    <section className="relative flex min-h-screen items-center overflow-x-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb -left-32 top-1/4 h-[32rem] w-[32rem] bg-cyan-500/10 animate-float" />
        <div className="orb -right-32 top-1/3 h-[28rem] w-[28rem] bg-violet-500/10 animate-float-delayed" />
        <div className="absolute bottom-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left — text */}
          <div className="animate-fade-up min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-sm text-cyan-300">{t.hero.badge}</span>
            </div>

            <p className="mb-3 text-lg text-slate-400 sm:text-xl">{t.hero.greeting}</p>

            <h1 className="font-display text-[2.5rem] font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <NameGradient as="span" className="inline-block pb-1">
                {displayName}
              </NameGradient>
            </h1>

            <div className="mt-5 space-y-2">
              <p className="text-xl font-medium sm:text-2xl">
                <GradientText as="span">{t.profile.title}</GradientText>
              </p>
              <p className="min-h-[2rem] text-lg sm:text-xl">
                <TypewriterText words={t.profile.roles} />
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {t.hero.tagline}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40"
              >
                {t.hero.viewWork}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={`mailto:${t.profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.hero.contactMe}
              </a>
              <CvDownload />
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <a href={`tel:${t.profile.phone}`} className="flex items-center gap-2 transition-colors hover:text-cyan-400">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.profile.phone}
              </a>
              <a href={`mailto:${t.profile.email}`} className="flex items-center gap-2 transition-colors hover:text-cyan-400">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.profile.email}
              </a>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t.profile.location}
              </span>
            </div>
          </div>

          {/* Right — photo + stats below (no overlap) */}
          <div className="animate-fade-up animation-delay-200 mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-5">
              <div className="relative w-full">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-rose-500/10 to-violet-500/15 blur-2xl" />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                  <Image
                    src="/images/profile.png"
                    alt={t.profile.name}
                    fill
                    className="object-cover object-[center_15%]"
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority
                  />
                </div>
              </div>

              <div className="grid w-full grid-cols-3 gap-3">
                {[
                  { value: "3+", label: t.hero.yearsExp, color: "text-cyan-400", border: "border-cyan-500/20" },
                  { value: "6+", label: t.hero.projectsDelivered, color: "text-violet-400", border: "border-violet-500/20" },
                  { value: "3.18", label: "GPA", color: "text-rose-300", border: "border-rose-500/20" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-xl border ${stat.border} bg-white/[0.03] px-3 py-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]`}
                  >
                    <p className={`text-xl font-bold sm:text-2xl ${stat.color}`}>{stat.value}</p>
                    <p className="mt-0.5 text-[10px] leading-tight text-slate-500 sm:text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 text-center backdrop-blur-sm">
                <p className="font-display font-semibold text-white">{t.hero.mobileDev}</p>
                <p className="mt-1 text-sm text-slate-500">Flutter · React Native</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {["Flutter", "RN", "Fintech"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition-colors hover:text-cyan-400 sm:flex"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
