import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from "./locales/en";
import { pt } from "./locales/pt";

export const DEFAULT_LOCALE = "pt";
export const SUPPORTED_LOCALES = ["pt", "en"];

await i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      pt
    },
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES,
    nonExplicitSupportedLngs: true,
    preload: SUPPORTED_LOCALES,
    ns: ["common", "home"],
    fallbackNS: "common",
    debug: false, // ativa debug em modo desenvolvimento
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  })

export default i18n;
export { useTranslation };