"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { GlowOrb, GridBackdrop, MethodVisual } from "@/components/Visuals";
import { ApexMark, Icon, IconArrowRight, IconCheck } from "@/components/Icons";

/* ---------- primitivas ---------- */

export function Eyebrow({ children, tone = "light" }) {
  return (
    <p
      className={`font-mono text-[11.5px] tracking-[0.2em] ${
        tone === "dark" ? "text-sky-bright" : "text-electric"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, tone = "light", align = "left" }) {
  return (
    <Reveal
      className={`flex flex-col gap-3.5 ${align === "center" ? "items-center text-center" : ""}`}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`max-w-[680px] text-balance text-[clamp(26px,3.4vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] ${
          tone === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`max-w-[560px] text-pretty text-[15.5px] leading-relaxed ${
            tone === "dark" ? "text-sky-pale" : "text-slate-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-16 text-white sm:px-6 sm:py-20">
      <GridBackdrop />
      <GlowOrb className="right-[-160px] top-[-200px] h-[480px] w-[480px] animate-pulseGlow" />
      <div className="relative mx-auto flex max-w-shell flex-col gap-4">
        <Reveal>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="max-w-[820px] text-balance text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.04] tracking-[-0.025em]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="max-w-[620px] text-pretty text-[16.5px] leading-relaxed text-sky-pale">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------- bloques ---------- */

export function Marquee() {
  const { t } = useLanguage();
  const row = (
    <div className="flex shrink-0 gap-11 pr-11 font-mono text-[12.5px] tracking-[0.2em] text-white">
      {t.marquee.map((item) => (
        <span key={item} className="flex shrink-0 items-center gap-11 whitespace-nowrap">
          {item}
          <span aria-hidden="true">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-electric py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row}
        {row}
      </div>
    </div>
  );
}

export function Challenges() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-shell flex-col gap-11">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t.challenges.eyebrow} title={t.challenges.title} />
          <Reveal delay={0.08}>
            <p className="max-w-[400px] text-pretty text-[15.5px] leading-relaxed text-slate-muted">
              {t.challenges.intro}
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {t.challenges.items.map((c) => (
            <motion.article
              key={c.num}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex min-w-0 flex-col gap-4 rounded-[18px] border border-line bg-mist p-7 transition-colors hover:border-[#C7D3F5] hover:bg-white hover:shadow-card sm:p-8"
            >
              <span className="font-mono text-xs text-azure">{c.num}</span>
              <h3 className="text-[19px] font-bold leading-snug tracking-[-0.01em] text-navy">
                {c.title}
              </h3>
              <p className="text-pretty text-[15px] leading-relaxed text-slate-muted">{c.body}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ServicesGrid({ withDetail = false, showIntro = true }) {
  const { t } = useLanguage();
  return (
    <section className="bg-mist px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-shell flex-col gap-11">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          intro={showIntro ? t.services.intro : undefined}
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s) => (
            <motion.article
              key={s.slug}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex min-w-0 flex-col gap-4 rounded-[18px] border border-line bg-white p-7 hover:border-[#C7D3F5] hover:shadow-cardLift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={s.icon} className="h-[22px] w-[22px]" />
              </span>
              <h3 className="text-[18px] font-bold leading-snug tracking-[-0.01em] text-navy">
                {s.title}
              </h3>
              <p className="text-pretty text-[14.5px] leading-relaxed text-slate-muted">{s.body}</p>

              {withDetail && (
                <ul className="mt-1 flex flex-col gap-2.5 border-t border-line pt-4">
                  {s.detail.map((d) => (
                    <li key={d} className="flex gap-2.5 text-[14px] leading-relaxed text-navy-soft">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      <span className="text-pretty">{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ApproachSteps({ showLink = true }) {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-20 text-white sm:px-6 sm:py-24">
      <GlowOrb className="bottom-[-260px] left-[-220px] h-[560px] w-[560px]" />
      <div className="relative mx-auto flex max-w-shell flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t.approach.eyebrow}
            title={t.approach.title}
            intro={t.approach.intro}
            tone="dark"
          />
          {showLink && (
            <Reveal delay={0.08}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[14.5px] font-semibold text-white transition-colors hover:border-sky-bright hover:text-sky-bright"
              >
                {t.approach.link}
              </Link>
            </Reveal>
          )}
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.approach.steps.map((st) => (
            <motion.div
              key={st.num}
              variants={staggerItem}
              className="group flex min-w-0 flex-col gap-3 border-t-2 border-white/20 pt-5 transition-colors hover:border-azure"
            >
              <span className="text-[30px] font-extrabold tracking-[-0.02em] text-azure">
                {st.num}
              </span>
              <h3 className="text-[17px] font-bold text-white">{st.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-sky-pale">{st.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function WhyApex() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-shell items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[22px] border border-line bg-mist p-4 sm:p-6">
            <MethodVisual className="h-auto w-full" />
          </div>
          <span className="absolute -right-2 -top-3 rounded-[14px] bg-electric px-4 py-3 font-mono text-[11px] tracking-[0.16em] text-white shadow-chip sm:-right-3">
            {t.why.badge}
          </span>
        </Reveal>

        <div className="order-1 flex flex-col gap-7 lg:order-2">
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
          <Stagger className="flex flex-col gap-3.5">
            {t.why.items.map((r) => (
              <motion.div
                key={r.title}
                variants={staggerItem}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="flex min-w-0 items-start gap-4 rounded-[14px] border border-line p-5 transition-colors hover:border-[#C7D3F5]"
              >
                <ApexMark className="mt-1 h-5 w-5 shrink-0" top="#173CFF" bottom="#3468FF" />
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-[16px] font-bold text-navy">{r.title}</p>
                  <p className="text-pretty text-[14.5px] leading-relaxed text-slate-muted">
                    {r.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function AboutBlock({ withPillars = false }) {
  const { t } = useLanguage();
  return (
    <section className="bg-mist px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-shell flex-col gap-12">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className="text-balance text-[clamp(26px,3.4vw,42px)] font-bold leading-[1.08] tracking-[-0.02em] text-navy">
              {t.about.title}
            </h2>
            <div className="mt-1 flex items-center gap-3">
              <ApexMark className="h-8 w-8" />
              <span className="font-mono text-[11px] text-slate-muted">APEX FACILITY CONSULTING LLC</span>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-5">
            {t.about.paragraphs.map((p) => (
              <p key={p} className="text-pretty text-[16.5px] leading-[1.7] text-navy-soft">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        {withPillars && (
          <Stagger className="grid gap-5 md:grid-cols-3">
            {t.about.pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="flex min-w-0 flex-col gap-4 rounded-[18px] border border-line bg-white p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-electric">
                  <Icon name={p.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="text-[17px] font-bold text-navy">{p.title}</h3>
                <p className="text-pretty text-[14.5px] leading-relaxed text-slate-muted">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}

export function CTABand() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-electric px-5 py-16 sm:px-6">
      <GridBackdrop className="opacity-[0.12]" />
      <Reveal className="relative mx-auto flex max-w-shell flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-balance text-[clamp(24px,3vw,34px)] font-extrabold leading-tight tracking-[-0.02em] text-white">
            {t.cta.title}
          </h2>
          <p className="max-w-[520px] text-pretty text-[15.5px] leading-relaxed text-white/85">
            {t.cta.body}
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-white px-6 py-4 text-[15px] font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:text-white"
        >
          {t.cta.button}
          <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
