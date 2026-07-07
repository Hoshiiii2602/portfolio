"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getNavLinks } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CvDownload from "@/components/CvDownload";
import RippleLink from "@/components/RippleLink";

export default function Navbar() {
  const { locale, t } = useLanguage();
  const navLinks = getNavLinks(locale);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "border-b border-white/5 bg-[#040810]/85 backdrop-blur-2xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="#"
          className="group flex shrink-0 items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white"
          onClick={closeMenu}
        >
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-xl ring-2 ring-white/10 transition-transform group-hover:scale-110">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={36}
              height={36}
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="hidden sm:inline">{t.profile.nameEn.split(" ").slice(-1)[0]}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-transform group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher compact />
          <CvDownload variant="compact" />
          <RippleLink
            href="#contact"
            rippleColor="rgba(255, 255, 255, 0.45)"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            {t.nav.getInTouch}
          </RippleLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#040810]/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="w-full rounded-xl px-6 py-4 text-center text-xl font-medium text-slate-300 transition-all hover:bg-white/5 hover:text-white"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <CvDownload />
          </div>
          <RippleLink
            href="#contact"
            onClick={closeMenu}
            rippleColor="rgba(255, 255, 255, 0.45)"
            className="mt-4 w-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-4 text-center text-lg font-medium text-white"
          >
            {t.nav.getInTouch}
          </RippleLink>
        </div>
      </div>
    </header>
  );
}
