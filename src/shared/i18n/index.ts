import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from "./locales/en";
import { pt } from "./locales/pt";

export const DEFAULT_LOCALE = "pt";
export const SUPPORTED_LOCALES = ["pt", "en"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      pt
    },
    fallbackLng: DEFAULT_LOCALE,
    load: "languageOnly",
    supportedLngs: SUPPORTED_LOCALES,
    nonExplicitSupportedLngs: true,
    ns: ["common", "home", "blog"],
    defaultNS: "common",
    fallbackNS: "common",
    debug: import.meta.env.DEV,
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export { useTranslation };