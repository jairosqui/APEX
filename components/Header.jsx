"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY, NAV } from "@/data/company";
import { ApexMark, IconGlobe } from "@/components/Icons";

function Wordmark({ dark = false }) {
  return (
    <span className="flex items-center gap-3">
      <ApexMark
        className="h-8 w-8 shrink-0"
        top={dark ? "#FFFFFF" : "#071B46"}
        bottom={dark ? "#3468FF" : "#173CFF"}
      />
      <span className="flex flex-col gap-[3px]">
        <span
          className={`text-[18px] font-extrabold leading-none tracking-[0.06em] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {COMPANY.shortName}
        </span>
        <span className="text-[7px] font-semibold tracking-[0.28em] text-azure">
          {COMPANY.tagline}
        </span>
      </span>
    </span>
  );
}

export { Wordmark };

export default function Header() {
  const pathname = usePathname();
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al navegar.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <Link href="/" aria-label={COMPANY.legalName} className="shrink-0">
          <Wordmark />
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label={t.nav.menu}>
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-electric" : "text-navy hover:text-electric"
                    }`}
                  >
                    {t.nav[item.key]}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-electric"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.switchTo}
            title={t.switchTo}
            className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-2 text-xs font-semibold tracking-wide text-navy transition-colors hover:border-azure hover:text-electric"
          >
            <IconGlobe className="h-4 w-4" />
            {lang === "en" ? "ES" : "EN"}
          </button>

          <Link
            href="/contact"
            className="rounded-xl bg-electric px-5 py-3 text-[13.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy"
          >
            {t.nav.cta}
          </Link>
        </nav>

        {/* Controles móvil */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.switchTo}
            className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-2 text-xs font-semibold text-navy"
          >
            <IconGlobe className="h-4 w-4" />
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy"
          >
            <span className="relative block h-3.5 w-5">
              <motion.span
                className="absolute left-0 block h-0.5 w-5 rounded bg-current"
                animate={open ? { top: 6, rotate: 45 } : { top: 0, rotate: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-[6px] block h-0.5 w-5 rounded bg-current"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 block h-0.5 w-5 rounded bg-current"
                animate={open ? { top: 6, rotate: -45 } : { top: 12, rotate: 0 }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            key="mobile-nav"
            aria-label={t.nav.menu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <ul className="mx-auto flex max-w-shell flex-col gap-1 px-5 py-4 sm:px-6">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                        active ? "bg-mist text-electric" : "text-navy hover:bg-mist"
                      }`}
                    >
                      {t.nav[item.key]}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block rounded-xl bg-electric px-5 py-3.5 text-center text-[15px] font-semibold text-white"
                >
                  {t.nav.cta}
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href={COMPANY.phoneHref}
                  className="block px-3 py-2 text-center font-mono text-[13px] text-slate-muted"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
