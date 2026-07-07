"use client";

import { cvFiles } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { useOtherLocale } from "@/components/LanguageSwitcher";
import RippleLink from "@/components/RippleLink";

type CvDownloadProps = {
  variant?: "primary" | "secondary" | "compact" | "hero" | "tabbar";
  className?: string;
};

export default function CvDownload({ variant = "primary", className = "" }: CvDownloadProps) {
  const { locale, t } = useLanguage();
  const otherLocale = useOtherLocale();
  const primaryCv = cvFiles[locale];
  const secondaryCv = cvFiles[otherLocale];

  if (variant === "tabbar") {
    return (
      <div
        className={`flex items-center gap-1 ${className}`}
        role="group"
        aria-label="Download CV"
      >
        {(Object.keys(cvFiles) as Array<keyof typeof cvFiles>).map((lang) => (
          <RippleLink
            key={lang}
            href={cvFiles[lang].href}
            download
            rippleColor="rgba(255,255,255,0.45)"
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-1.5 shadow-sm ${
              locale === lang
                ? "border-emerald-400/50 bg-gradient-to-r from-emerald-500/30 to-cyan-500/20 text-emerald-100 shadow-emerald-500/15"
                : "border-white/15 bg-white/[0.06] text-slate-300"
            }`}
            aria-label={cvFiles[lang].label}
          >
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                locale === lang ? "bg-emerald-400/25" : "bg-white/10"
              }`}
            >
              <svg
                className={`h-2.5 w-2.5 ${locale === lang ? "text-emerald-200" : "text-emerald-400"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </span>
            <span className="text-[10px] font-bold tracking-wide">{lang.toUpperCase()}</span>
          </RippleLink>
        ))}
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 ${className}`}>
        <RippleLink
          href={primaryCv.href}
          download
          rippleColor="rgba(255, 255, 255, 0.4)"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 sm:w-auto sm:px-7 sm:py-3.5"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {t.hero.downloadCv}
        </RippleLink>
        <RippleLink
          href={secondaryCv.href}
          download
          rippleColor="rgba(34, 211, 238, 0.3)"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 sm:w-auto sm:px-5"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          <span className="truncate">{t.hero.downloadCvOther}</span>
        </RippleLink>
      </div>
    );
  }

  const primaryClass =
    variant === "primary"
      ? "flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 sm:w-auto"
      : variant === "compact"
        ? "inline-flex items-center justify-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-semibold"
        : "flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 sm:w-auto";

  if (variant === "compact") {
    return (
      <div
        className={`flex items-center overflow-hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 ${className}`}
        role="group"
        aria-label="Download CV"
      >
        {(Object.keys(cvFiles) as Array<keyof typeof cvFiles>).map((lang, i) => (
          <RippleLink
            key={lang}
            href={cvFiles[lang].href}
            download
            rippleColor="rgba(255,255,255,0.4)"
            className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold ${
              locale === lang ? "text-emerald-200" : "text-emerald-400/80"
            } ${i > 0 ? "border-l border-emerald-500/20" : ""}`}
            aria-label={cvFiles[lang].label}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {lang.toUpperCase()}
          </RippleLink>
        ))}
      </div>
    );
  }

  const secondaryClass =
    "flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 sm:w-auto";

  return (
    <div className={`flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center ${className}`}>
      <RippleLink
        href={primaryCv.href}
        download
        rippleColor="rgba(255, 255, 255, 0.4)"
        className={primaryClass}
      >
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {t.hero.downloadCv}
      </RippleLink>
      {variant === "secondary" || variant === "primary" ? (
        <RippleLink
          href={secondaryCv.href}
          download
          rippleColor="rgba(34, 211, 238, 0.3)"
          className={secondaryClass}
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          {t.hero.downloadCvOther}
        </RippleLink>
      ) : null}
    </div>
  );
}
