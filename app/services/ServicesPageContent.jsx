"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Challenges, CTABand, Marquee, PageHero, ServicesGrid } from "@/components/Sections";

export default function ServicesPageContent() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.pages.services.eyebrow}
        title={t.pages.services.title}
        intro={t.pages.services.intro}
      />
      <Marquee />
      <ServicesGrid withDetail showIntro={false} />
      <Challenges />
      <CTABand />
    </>
  );
}
