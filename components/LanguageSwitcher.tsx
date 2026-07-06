"use client";

import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-full border border-white/10 bg-white/5 p-1 ${
        compact ? "text-xs" : "text-sm"
      }`}
      role="group"
      aria-label="Language selector"
    >
      {locales.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`relative rounded-full px-3 py-1.5 font-medium transition-all duration-300 ${
            locale === lang
              ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/25"
              : "text-slate-400 hover:text-white"
          }`}
          aria-pressed={locale === lang}
        >
          {localeLabels[lang]}
        </button>
      ))}
    </div>
  );
}

export function useOtherLocale(): Locale {
  const { locale } = useLanguage();
  return locale === "vi" ? "en" : "vi";
}
