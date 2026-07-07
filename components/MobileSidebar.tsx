"use client";

import { AnimatePresence, motion } from "motion/react";
import { cvFiles } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import RippleLink from "@/components/RippleLink";

type NavLink = { href: string; label: string };

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
};

const panelTransition = {
  type: "spring" as const,
  damping: 32,
  stiffness: 340,
  mass: 0.85,
};

const backdropTransition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function MobileSidebar({ isOpen, onClose, navLinks }: MobileSidebarProps) {
  const { locale, t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-black/65 backdrop-blur-[6px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={backdropTransition}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            key="panel"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100vw-2.5rem,320px)] flex-col bg-[#060d18]/98 shadow-2xl shadow-black/40 md:hidden"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={panelTransition}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <motion.div
              className="flex items-center justify-between border-b border-white/5 px-5 py-4"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.3 }}
            >
              <span className="font-display text-sm font-semibold text-white">Menu</span>
              <motion.button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                aria-label="Close menu"
                whileTap={{ scale: 0.92 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>

            <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{
                      type: "spring",
                      damping: 26,
                      stiffness: 320,
                      delay: 0.08 + i * 0.045,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-auto space-y-3 border-t border-white/5 pt-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.045 + 0.05, duration: 0.35 }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(cvFiles) as Array<keyof typeof cvFiles>).map((lang) => (
                    <RippleLink
                      key={lang}
                      href={cvFiles[lang].href}
                      download
                      rippleColor="rgba(255,255,255,0.4)"
                      className={`flex items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-xs font-semibold ${
                        locale === lang
                          ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20"
                          : "border border-white/10 bg-white/5 text-slate-300"
                      }`}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {lang.toUpperCase()}
                    </RippleLink>
                  ))}
                </div>
                <RippleLink
                  href="#contact"
                  onClick={onClose}
                  rippleColor="rgba(255, 255, 255, 0.45)"
                  className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
                >
                  {t.nav.getInTouch}
                </RippleLink>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
