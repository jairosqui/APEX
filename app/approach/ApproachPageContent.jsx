"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CTABand, Marquee, PageHero, SectionHeading, WhyApex } from "@/components/Sections";
import { Stagger, staggerItem } from "@/components/Reveal";

export default function ApproachPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pages.approach.eyebrow}
        title={t.pages.approach.title}
        intro={t.pages.approach.intro}
      />
      <Marquee />

      {/* Línea de tiempo vertical con los cinco pasos */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-shell flex-col gap-11">
          <SectionHeading eyebrow={t.approach.eyebrow} title={t.approach.title} />

          <Stagger className="relative flex flex-col gap-0">
            <span
              aria-hidden="true"
              className="absolute left-[19px] top-3 hidden h-[calc(100%-3rem)] w-px bg-line sm:block"
            />
            {t.approach.steps.map((st) => (
              <motion.div
                key={st.num}
                variants={staggerItem}
                className="relative flex gap-5 pb-8 last:pb-0 sm:gap-7"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white font-mono text-[13px] font-semibold text-electric">
                  {st.num}
                </span>
                <div className="flex min-w-0 flex-col gap-2 pt-1.5">
                  <h3 className="text-[19px] font-bold tracking-[-0.01em] text-navy">{st.title}</h3>
                  <p className="max-w-[640px] text-pretty text-[15.5px] leading-relaxed text-slate-muted">
                    {st.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <WhyApex />
      <CTABand />
    </>
  );
}
