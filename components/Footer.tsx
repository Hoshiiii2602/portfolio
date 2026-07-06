"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { locale, t } = useLanguage();
  const year = new Date().getFullYear();
  const displayName = locale === "vi" ? t.profile.name : t.profile.nameEn;

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-600">
          © {year} {displayName}. {t.footer.rights}
        </p>
        <p className="text-sm text-slate-600">
          {t.footer.builtWith}{" "}
          <span className="text-slate-500">Next.js</span> &amp;{" "}
          <span className="text-slate-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
