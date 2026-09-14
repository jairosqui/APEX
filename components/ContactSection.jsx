"use client";

import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/data/company";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Sections";
import { GridBackdrop } from "@/components/Visuals";
import { IconClock, IconPhone, IconPin } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";

export default function ContactSection({ showEyebrow = true }) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy px-5 py-20 text-white sm:px-6 sm:py-24">
      <GridBackdrop />
      <div className="relative mx-auto grid max-w-shell items-start gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex min-w-0 flex-col gap-6">
          {showEyebrow && <Eyebrow tone="dark">{t.contact.eyebrow}</Eyebrow>}
          <h2 className="text-balance text-[clamp(28px,3.8vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            {t.contact.title}
          </h2>
          <p className="max-w-[420px] text-pretty text-[16px] leading-relaxed text-sky-pale">
            {t.contact.intro}
          </p>

          <ul className="mt-2 flex flex-col gap-5">
            <li className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-sky-bright">
                <IconPin className="h-[18px] w-[18px]" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10.5px] tracking-[0.18em] text-sky-bright">
                  {t.contact.addressLabel}
                </span>
                <address className="text-[15.5px] not-italic leading-relaxed">
                  {COMPANY.street}
                  <br />
                  {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
                </address>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[13.5px] font-semibold text-sky-bright underline-offset-4 hover:underline"
                >
                  {t.contact.directions}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-sky-bright">
                <IconPhone className="h-[18px] w-[18px]" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10.5px] tracking-[0.18em] text-sky-bright">
                  {t.contact.phoneLabel}
                </span>
                <a href={COMPANY.phoneHref} className="text-[15.5px] hover:text-sky-bright">
                  {COMPANY.phone}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-sky-bright">
                <IconClock className="h-[18px] w-[18px]" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10.5px] tracking-[0.18em] text-sky-bright">
                  {t.contact.hoursLabel}
                </span>
                <span className="text-[15.5px]">{t.contact.hours}</span>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
