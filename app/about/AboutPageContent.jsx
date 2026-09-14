"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AboutBlock, CTABand, PageHero, WhyApex } from "@/components/Sections";

export default function AboutPageContent() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.pages.about.eyebrow}
        title={t.pages.about.title}
        intro={t.pages.about.intro}
      />
      <AboutBlock withPillars />
      <WhyApex />
      <CTABand />
    </>
  );
}
