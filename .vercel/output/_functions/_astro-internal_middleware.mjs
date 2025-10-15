import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cvb7UTS2.mjs';
import 'kleur/colors';
import './chunks/astro/server_1mv0en1U.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_glQiV7GV.mjs';
import i18n from 'i18next';

// src/middleware-server.ts
function getLocaleConfig() {
  return JSON.parse(
    JSON.stringify(i18n.options.astroReactI18next)
  );
}
function getLocalizedPathname(pathname = "", locale = "") {
  const { defaultLocale, locales, prefixDefaultLocale } = getLocaleConfig();
  const localeFromPathname = pathname.split("/")[1];
  let localizedPathname = pathname;
  if (locales.includes(localeFromPathname)) {
    localizedPathname = localizedPathname.replace("/" + localeFromPathname, "") || "/";
  }
  if (locales.includes(locale) && (locale !== defaultLocale || prefixDefaultLocale)) {
    localizedPathname = "/" + locale + localizedPathname.replace(/^\/$/, "");
  }
  return localizedPathname;
}

// src/middleware-server.ts
var ASTRO_RESERVED_ROUTES = ["/_astro", "/_actions", "/_server-islands"];
async function onRequest$1(context, next) {
  const { defaultLocale, locales, domains, reservedRoutes } = getLocaleConfig();
  if ([...ASTRO_RESERVED_ROUTES, ...reservedRoutes].some(
    (route) => context.url.pathname === route || context.url.pathname.startsWith(route + "/")
  )) {
    return next();
  }
  const localesByDomain = Object.fromEntries(
    domains.map((domain) => [domain.domain, domain.defaultLocale])
  );
  const localeFromDomain = localesByDomain[context.url.host];
  const localeFromPathname = context.url.pathname.split("/")[1];
  const localeFromCookie = context.cookies.get("i18next")?.value;
  const localeFromHeader = context.preferredLocale;
  const nextLocale = [
    localeFromDomain,
    localeFromPathname,
    localeFromCookie,
    localeFromHeader,
    defaultLocale
  ].find((locale) => locale && locales.includes(locale));
  await i18n.changeLanguage(nextLocale);
  context.cookies.set("i18next", nextLocale || "", { path: "/" });
  const { hash, pathname, search } = context.url;
  const nextPathname = getLocalizedPathname(pathname, nextLocale);
  if (nextPathname !== pathname && domains.length === 0) {
    const nextUrl = nextPathname + search + hash;
    return context.redirect(nextUrl);
  }
  return next();
}

const onRequest = sequence(
	
	
	onRequest$1
);

export { onRequest };
