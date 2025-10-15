import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cvb7UTS2.mjs';
import 'kleur/colors';
import './chunks/astro/server_1mv0en1U.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_glQiV7GV.mjs';
import i18n from 'i18next';

// src/middleware-static.ts
function getLocaleConfig() {
  return JSON.parse(
    JSON.stringify(i18n.options.astroReactI18next)
  );
}

// src/middleware-static.ts
async function onRequest$1(context, next) {
  const { defaultLocale, locales } = getLocaleConfig();
  const localeFromPathname = context.url.pathname.split("/")[1];
  const nextLocale = [localeFromPathname, defaultLocale].find(
    (locale) => locale && locales.includes(locale)
  );
  await i18n.changeLanguage(nextLocale);
  return next();
}

const onRequest = sequence(
	
	
	onRequest$1
);

export { onRequest };
