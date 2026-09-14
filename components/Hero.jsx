"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { GlowOrb, GridBackdrop, HeroVisual } from "@/components/Visuals";
import { IconArrowRight, IconChart } from "@/components/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useLanguage();
  const [before, accent, after] = t.hero.title;

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <GridBackdrop />
      <GlowOrb className="right-[-180px] top-[-200px] h-[620px] w-[620px] animate-pulseGlow" />

      <div className="relative mx-auto grid max-w-shell items-center gap-14 px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09 }}
          className="flex min-w-0 flex-col gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="flex w-fit items-center gap-2.5 rounded-full border border-white/20 px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-sky-mid"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-azure" />
            {t.hero.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-[clamp(34px,5.4vw,70px)] font-extrabold leading-[1.02] tracking-[-0.025em]"
          >
            {before}
            <span className="text-azure">{accent}</span>
            {after}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-[560px] text-pretty text-[17px] leading-[1.65] text-sky-pale"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-electric px-6 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-navy"
            >
              {t.hero.ctaPrimary}
              <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-[460px] lg:mx-0"
        >
          <div className="animate-floaty motion-reduce:animate-none">
            <HeroVisual className="h-auto w-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mx-auto flex w-fit items-center gap-3.5 rounded-2xl bg-white px-5 py-4 text-navy shadow-chip sm:absolute sm:-bottom-4 sm:left-0 sm:mx-0"
          >
            <IconChart className="h-7 w-7 text-electric" />
            <span className="flex flex-col gap-0.5">
              <span className="text-sm font-bold">{t.hero.cardTitle}</span>
              <span className="font-mono text-[10.5px] text-slate-muted">{t.hero.cardMeta}</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
