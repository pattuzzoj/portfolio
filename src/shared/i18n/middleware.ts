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

  await i18n.changeLanguage(locale);
  context.cookies.set("i18next", locale, { path: "/" });

  // Redirecionar se idioma estiver na URL mas for o padrão
  // if (isValidLocale && locale === DEFAULT_LOCALE) {
  //   const newPath = "/" + segments.slice(2).join("/");
  //   return context.redirect(newPath || "/");
  // }

  // Redirecionar se idioma estiver ausente e não for o padrão
  // if (!isValidLocale && locale !== DEFAULT_LOCALE) {
  //   const newPath = `/${locale}${pathname}`;
  //   return context.redirect(newPath);
  // }

  if (!isValidLocale) {
    const newPath = `/${locale}/${segments.slice(2).join("/")}${search}${hash}`;
    return context.redirect(newPath);
  }

  return next();
});