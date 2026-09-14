"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PageHero } from "@/components/Sections";
import { Reveal } from "@/components/Reveal";
import { COMPANY } from "@/data/company";

export default function LegalPage({ docKey }) {
  const { t } = useLanguage();
  const doc = t.legal[docKey];

  return (
    <>
      <PageHero eyebrow={doc.updated} title={doc.title} />
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8">
          {doc.sections.map((s) => (
            <Reveal key={s.h} className="flex flex-col gap-2.5">
              <h2 className="text-[20px] font-bold tracking-[-0.01em] text-navy">{s.h}</h2>
              <p className="text-pretty text-[16px] leading-[1.7] text-navy-soft">{s.p}</p>
            </Reveal>
          ))}
          <Reveal className="mt-2 rounded-[14px] border border-line bg-mist p-6">
            <p className="font-mono text-[11px] tracking-[0.18em] text-slate-muted">
              {COMPANY.legalName}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-navy">
              {COMPANY.street}
              <br />
              {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
              <br />
              <a href={COMPANY.phoneHref} className="text-electric hover:underline">
                {COMPANY.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
