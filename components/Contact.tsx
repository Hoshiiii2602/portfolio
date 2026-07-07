"use client";

import CvDownload from "@/components/CvDownload";
import RippleLink from "@/components/RippleLink";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-t from-cyan-500/10 via-violet-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll direction="scale">
          <SpotlightCard
            className="rounded-3xl"
            spotlightColor="rgba(34, 211, 238, 0.2)"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1020] to-[#111827] p-8 text-center sm:p-12 lg:p-16">
              <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
                {t.contact.label}
              </p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="shimmer-title">{t.contact.title}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
                {t.contact.description}
              </p>

              <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-center">
                <RippleLink
                  href={`mailto:${t.profile.email}`}
                  rippleColor="rgba(255, 255, 255, 0.45)"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 sm:w-auto sm:px-8"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.profile.email}
                </RippleLink>
                <RippleLink
                  href={`tel:${t.profile.phone}`}
                  rippleColor="rgba(34, 211, 238, 0.35)"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t.profile.phone}
                </RippleLink>
              </div>

              <div className="mt-8 flex justify-center">
                <CvDownload variant="secondary" />
              </div>

              <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t.profile.location}
              </p>
            </div>
          </SpotlightCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
