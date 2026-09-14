"use client";

import { useLanguage } from "@/context/LanguageContext";
import ContactSection from "@/components/ContactSection";
import { PageHero } from "@/components/Sections";

export default function ContactPageContent() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.pages.contact.eyebrow}
        title={t.pages.contact.title}
        intro={t.pages.contact.intro}
      />
      <ContactSection showEyebrow={false} />
    </>
  );
}
