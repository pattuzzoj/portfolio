import { defineMiddleware } from "astro:middleware";
import i18n, { DEFAULT_LOCALE, SUPPORTED_LOCALES } from ".";

export const i18nMiddleware = defineMiddleware(async (context, next) => {
  const { pathname, search, hash } = context.url;

  if (pathname.startsWith("/api/")) {
    return next();
  }
  
  const segments = pathname.split("/");
  let locale = segments[1];
  const isValidLocale = SUPPORTED_LOCALES.includes(locale);
  locale = isValidLocale ? locale : DEFAULT_LOCALE;

  if (!isValidLocale) {
    const newPath = `/${locale}/${segments.slice(2).join("/")}${search}${hash}`;
    return context.redirect(newPath);
  }

  await i18n.changeLanguage(locale);
  context.cookies.set("i18next", locale, { path: "/" });
  
  return next();
});