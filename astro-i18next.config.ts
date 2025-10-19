import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "pt",
  locales: ["en", "pt"],
  load: ["server", "client"],
  namespaces: ["common", "home"],
  defaultNamespace: "common",
  i18nextServer: {
    debug: true,
    initImmediate: false,
    backend: {
      loadPath: `https://pattuzzoj.vercel.app/locales/{{lng}}/{{ns}}.json`,
    },
  },
  i18nextClient: {
    debug: true,
    initImmediate: false
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
    "Backend": "i18next-http-backend"
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
    "Backend": "i18next-http-backend"
  }
};

export default config;