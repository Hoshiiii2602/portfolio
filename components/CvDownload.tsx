"use client";

import { cvFiles } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { useOtherLocale } from "@/components/LanguageSwitcher";

type CvDownloadProps = {
  variant?: "primary" | "secondary" | "compact";
};

export default function CvDownload({ variant = "primary" }: CvDownloadProps) {
  const { locale, t } = useLanguage();
  const otherLocale = useOtherLocale();
  const primaryCv = cvFiles[locale];
  const secondaryCv = cvFiles[otherLocale];

  const primaryClass =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] hover:shadow-emerald-500/40"
      : variant === "compact"
        ? "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20"
        : "inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20";

  const secondaryClass =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={primaryCv.href}
        download
        className={primaryClass}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {t.hero.downloadCv}
      </a>
      {variant !== "compact" && (
        <a href={secondaryCv.href} download className={secondaryClass}>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          {t.hero.downloadCvOther}
        </a>
      )}
    </div>
  );
}
