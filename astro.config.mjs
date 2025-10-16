// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import reactI18next from "astro-react-i18next";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [react(), reactI18next({
    defaultLocale: "pt",
    locales: ["en", "pt"],
    defaultNamespace: "common",
    namespaces: ["common", "home"]
  }), icon({
    include: {
      lucide: ["square-arrow-out-up-right", "monitor", "settings", "database", "flask-conical", "map-pin", "mail", "arrow-right"]
    }
  }), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://pattuzzoj.netlify.app"
});