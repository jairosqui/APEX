"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANG, LANGS, translations } from "@/data/translations";

const STORAGE_KEY = "apex-lang";

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  toggleLang: () => {},
  t: translations[DEFAULT_LANG],
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Restaura la preferencia guardada (o la del navegador) tras la hidratación.
  useEffect(() => {
    let next = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.includes(stored)) next = stored;
    } catch {
      /* localStorage bloqueado: seguimos con el idioma por defecto */
    }
    if (!next && typeof navigator !== "undefined") {
      const browser = (navigator.language || "").slice(0, 2).toLowerCase();
      if (LANGS.includes(browser)) next = browser;
    }
    if (next && next !== DEFAULT_LANG) setLangState(next);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* sin persistencia disponible */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (LANGS.includes(next)) setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang, setLang, toggleLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
