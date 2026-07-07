"use client";

import { GradientText, NameGradient, TypewriterText } from "@/components/AnimatedText";
import CvDownload from "@/components/CvDownload";
import ProfileAvatar from "@/components/ProfileAvatar";
import RippleLink from "@/components/RippleLink";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { locale, t } = useLanguage();
  const displayName = locale === "vi" ? t.profile.name : t.profile.nameEn;

  return (
    <section className="relative overflow-x-clip pt-[4.5rem] pb-10 sm:pt-24 sm:pb-16 lg:flex lg:min-h-[100dvh] lg:items-center lg:pb-0 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb -left-32 top-1/4 h-[20rem] w-[20rem] bg-cyan-500/10 animate-float sm:h-[32rem] sm:w-[32rem]" />
        <div className="orb -right-32 top-1/3 h-[18rem] w-[18rem] bg-violet-500/10 animate-float-delayed sm:h-[28rem] sm:w-[28rem]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:py-20">
        {/* Mobile — horizontal intro row */}
        <div className="mb-6 flex items-center gap-4 sm:hidden">
          <ProfileAvatar />
          <div className="min-w-0 flex-1">
            <p className="text-sm text-slate-400">{t.hero.greeting}</p>
            <h1 className="font-display text-xl font-bold leading-tight">
              <NameGradient as="span" className="inline-block">
                {displayName.split(" ").slice(-2).join(" ")}
              </NameGradient>
            </h1>
            <p className="mt-1 text-sm font-medium text-cyan-300/90">{t.profile.title}</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          {/* Photo column — hidden on mobile (shown above), visible sm+ */}
          <div className="order-1 hidden w-full sm:mx-auto sm:block sm:max-w-[280px] lg:order-2 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <SpotlightCard
                className="w-full rounded-2xl sm:rounded-[2rem]"
                spotlightColor="rgba(34, 211, 238, 0.18)"
              >
                <ProfileAvatar />
              </SpotlightCard>

              <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
                {[
                  { value: "3+", label: t.hero.yearsExp, color: "text-cyan-400", border: "border-cyan-500/20" },
                  { value: "6+", label: t.hero.projectsDelivered, color: "text-violet-400", border: "border-violet-500/20" },
                  { value: "3.18", label: "GPA", color: "text-rose-300", border: "border-rose-500/20" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-xl border ${stat.border} bg-white/[0.03] px-2 py-2.5 text-center backdrop-blur-sm sm:px-3 sm:py-3`}
                  >
                    <p className={`text-lg font-bold sm:text-2xl ${stat.color}`}>{stat.value}</p>
                    <p className="mt-0.5 text-[9px] leading-tight text-slate-500 sm:text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile stats row */}
          <div className="grid grid-cols-3 gap-2 sm:hidden">
            {[
              { value: "3+", label: t.hero.yearsExp, color: "text-cyan-400" },
              { value: "6+", label: t.hero.projectsDelivered, color: "text-violet-400" },
              { value: "3.18", label: "GPA", color: "text-rose-300" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-white/[0.03] px-2 py-2 text-center"
              >
                <p className={`text-base font-bold ${stat.color}`}>{stat.value}</p>
                <p className="mt-0.5 text-[9px] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Text content */}
          <div className="order-2 min-w-0 lg:order-1">
            <div className="hidden sm:block">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-xs text-cyan-300 sm:text-sm">{t.hero.badge}</span>
              </div>

              <p className="mb-2 text-base text-slate-400 sm:mb-3 sm:text-xl">{t.hero.greeting}</p>

              <h1 className="font-display text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-6xl xl:text-7xl">
                <NameGradient as="span" className="inline-block">
                  {displayName}
                </NameGradient>
              </h1>
            </div>

            <div className="mt-0 space-y-1.5 sm:mt-5 sm:space-y-2">
              <p className="hidden text-lg font-medium sm:block sm:text-2xl">
                <GradientText as="span">{t.profile.title}</GradientText>
              </p>
              <p className="min-h-[1.75rem] text-base sm:min-h-[2rem] sm:text-xl">
                <TypewriterText words={t.profile.roles} />
              </p>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
              {t.hero.tagline}
            </p>

            <div className="mt-5 grid w-full grid-cols-1 gap-2.5 sm:mt-8 sm:gap-3 md:grid-cols-2 lg:flex lg:flex-wrap">
              <RippleLink
                href="#projects"
                rippleColor="rgba(255, 255, 255, 0.45)"
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 sm:py-3.5 lg:w-auto"
              >
                {t.hero.viewWork}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </RippleLink>
              <RippleLink
                href={`mailto:${t.profile.email}`}
                rippleColor="rgba(34, 211, 238, 0.35)"
                className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm sm:py-3.5 lg:w-auto"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.hero.contactMe}
              </RippleLink>
            </div>

            {/* CV in hero — desktop only (mobile uses navbar) */}
            <div className="mt-3 hidden sm:mt-4 sm:block">
              <CvDownload variant="hero" />
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm text-slate-500 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <a href={`tel:${t.profile.phone}`} className="flex items-center gap-2 transition-colors hover:text-cyan-400">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.profile.phone}
              </a>
              <a href={`mailto:${t.profile.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-cyan-400">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{t.profile.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
