"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getNavLinks } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { useAvatarMorph } from "@/components/AvatarMorphProvider";
import CvDownload from "@/components/CvDownload";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileSidebar from "@/components/MobileSidebar";
import RippleLink from "@/components/RippleLink";

export default function Navbar() {
  const { locale, t } = useLanguage();
  const navLinks = getNavLinks(locale);
  const morph = useAvatarMorph();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollTicking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (scrollTicking.current) return;
      scrollTicking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        scrollTicking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-[#040810]/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            : isOpen
              ? "bg-[#040810]/95 backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-5 sm:h-16 sm:gap-3 sm:px-8">
          <a
            href="#"
            className="group flex min-w-0 shrink items-center gap-2 font-display text-base font-bold tracking-tight text-white sm:gap-2.5 sm:text-lg"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMenu();
            }}
          >
            {/* Mobile — empty slot; hero image morphs here on scroll */}
            <span
              ref={morph?.navRef}
              className="nav-avatar-slot relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-white/15 bg-white/[0.03] sm:hidden"
              aria-hidden="true"
            />

            {/* Tablet+ — static logo */}
            <span className="relative hidden h-9 w-9 shrink-0 overflow-hidden rounded-xl ring-2 ring-white/10 sm:flex">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={36}
                height={36}
                className="h-full w-full object-cover object-top"
              />
            </span>
            <span className="hidden truncate sm:inline">{t.profile.nameEn.split(" ").slice(-1)[0]}</span>
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
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20"
            >
              {t.nav.getInTouch}
            </RippleLink>
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <LanguageSwitcher compact />
            <CvDownload variant="tabbar" />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors active:bg-white/10"
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <MobileSidebar isOpen={isOpen} onClose={closeMenu} navLinks={navLinks} />
    </>
  );
}
