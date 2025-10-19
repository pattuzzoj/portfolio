// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    imageService: true
  }),
  output: "server",
  integrations: [react(), astroI18next({
    defaultLocale: "pt",
    locales: ["en", "pt"],
    namespaces: ["common", "home"],
    defaultNamespace: "common"
  }), icon({
    include: {
      lucide: ["square-arrow-out-up-right", "monitor", "settings", "database", "flask-conical", "map-pin", "mail", "arrow-right"]
    }
  }), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://pattuzzoj.vercel.app"
});