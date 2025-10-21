import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from "./locales/en";
import { pt } from "./locales/pt";
import { defineMiddleware } from "astro:middleware";

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
    debug: true,
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  })

export const i18nMiddleware = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  const isValidLocale = SUPPORTED_LOCALES.includes(maybeLocale);
  const locale = isValidLocale ? maybeLocale : DEFAULT_LOCALE;

  await i18n.changeLanguage(locale);
  context.cookies.set("i18next", locale, { path: "/" });

  // Redirecionar se idioma estiver na URL mas for o padrão
  if (isValidLocale && locale === DEFAULT_LOCALE) {
    const newPath = "/" + segments.slice(2).join("/");
    return context.redirect(newPath || "/");
  }

  // Redirecionar se idioma estiver ausente e não for o padrão
  if (!isValidLocale && locale !== DEFAULT_LOCALE) {
    const newPath = `/${locale}${pathname}`;
    return context.redirect(newPath);
  }

  return next();
});
export default i18n;
export { useTranslation };