"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY, NAV } from "@/data/company";
import { ApexMark } from "@/components/Icons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-deep px-5 pb-8 pt-14 text-sky-pale sm:px-6 sm:pt-16">
      <div className="mx-auto flex max-w-shell flex-col gap-10">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <ApexMark className="h-8 w-8" top="#FFFFFF" bottom="#3468FF" />
              <div className="flex flex-col gap-[3px]">
                <span className="text-[18px] font-extrabold leading-none tracking-[0.06em] text-white">
                  {COMPANY.shortName}
                </span>
                <span className="text-[7px] font-semibold tracking-[0.28em] text-azure">
                  {COMPANY.tagline}
                </span>
              </div>
            </div>
            <p className="max-w-[280px] text-[13.5px] leading-relaxed">{t.footer.blurb}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10.5px] tracking-[0.18em] text-white">
              {t.footer.navTitle}
            </p>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-sky-pale transition-colors hover:text-white"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10.5px] tracking-[0.18em] text-white">
              {t.footer.servicesTitle}
            </p>
            {t.services.items.slice(0, 5).map((s) => (
              <Link
                key={s.slug}
                href="/services"
                className="text-sm text-sky-pale transition-colors hover:text-white"
              >
                {s.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10.5px] tracking-[0.18em] text-white">
              {t.footer.contactTitle}
            </p>
            <address className="text-sm not-italic leading-relaxed">
              {COMPANY.street}
              <br />
              {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
            </address>
            <a
              href={COMPANY.phoneHref}
              className="text-sm text-sky-pale transition-colors hover:text-white"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[12.5px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COMPANY.year} {COMPANY.legalName}. {t.footer.rights}
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              {t.footer.terms}
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              {t.footer.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
