"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/data/company";

// Clave pública de Web3Forms: está diseñada para vivir en el cliente.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

const FIELD =
  "w-full rounded-[10px] border border-line bg-mist px-3.5 py-3 text-[14.5px] text-navy outline-none transition-colors placeholder:text-slate-muted/70 focus:border-electric focus:bg-white";
const LABEL = "text-xs font-semibold tracking-[0.04em] text-slate-muted";

export default function ContactForm() {
  const { t, lang } = useLanguage();
  const f = t.contact.form;

  const [status, setStatus] = useState("idle"); // idle | sending | success | error | unconfigured
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const next = {};
    if (!data.name?.trim()) next.name = f.required;
    if (!data.email?.trim()) next.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) next.email = f.invalidEmail;
    if (!data.message?.trim()) next.message = f.required;
    return next;
  };

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    // Honeypot anti-spam de Web3Forms.
    if (data.botcheck) return;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!ACCESS_KEY) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Nueva solicitud de consulta — ${data.name}`,
          from_name: COMPANY.legalName,
          language: lang,
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const Err = ({ name }) =>
    errors[name] ? (
      <span className="text-[12px] font-medium text-[#C0392B]">{errors[name]}</span>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex min-w-0 flex-col gap-3.5 rounded-[20px] bg-white p-6 shadow-chip sm:p-7"
    >
      {/* Honeypot: invisible para personas, tentador para bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className="flex min-w-0 flex-col gap-1.5">
          <span className={LABEL}>
            {f.name} <span aria-hidden="true">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            aria-invalid={errors.name ? "true" : undefined}
            className={FIELD}
          />
          <Err name="name" />
        </label>

        <label className="flex min-w-0 flex-col gap-1.5">
          <span className={LABEL}>{f.company}</span>
          <input type="text" name="company" autoComplete="organization" className={FIELD} />
        </label>

        <label className="flex min-w-0 flex-col gap-1.5">
          <span className={LABEL}>
            {f.email} <span aria-hidden="true">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            className={FIELD}
          />
          <Err name="email" />
        </label>

        <label className="flex min-w-0 flex-col gap-1.5">
          <span className={LABEL}>{f.phone}</span>
          <input type="tel" name="phone" autoComplete="tel" className={FIELD} />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className={LABEL}>{f.service}</span>
        <select name="service" defaultValue="" className={FIELD}>
          <option value="" disabled>
            {f.servicePlaceholder}
          </option>
          {t.services.items.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={LABEL}>
          {f.message} <span aria-hidden="true">*</span>
        </span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder={f.messagePlaceholder}
          aria-invalid={errors.message ? "true" : undefined}
          className={`${FIELD} resize-y`}
        />
        <Err name="message" />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 rounded-[11px] bg-electric px-6 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.p
            key="ok"
            role="status"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-[10px] bg-mist px-4 py-3 text-[13.5px] font-semibold text-electric"
          >
            {f.success}
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            key="err"
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-[10px] bg-[#FDECEA] px-4 py-3 text-[13.5px] font-medium text-[#8E2D22]"
          >
            {f.error}{" "}
            <a href={COMPANY.phoneHref} className="font-semibold underline">
              {COMPANY.phone}
            </a>
            .
          </motion.p>
        )}
        {status === "unconfigured" && (
          <motion.p
            key="cfg"
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-[10px] bg-[#FFF6E5] px-4 py-3 text-[13.5px] font-medium text-[#8A6100]"
          >
            {f.notConfigured}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
