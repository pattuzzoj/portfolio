// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import reactI18next from "astro-react-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), reactI18next({
    defaultLocale: "pt",
    locales: ["en", "pt"],
    defaultNamespace: "common",
    namespaces: ["common", "home"]
  }), icon({
    include: {
      lucide: ["square-arrow-out-up-right", "monitor", "settings", "database", "flask-conical", "map-pin", "mail", "arrow-right"]
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  output: "server",
  adapter: vercel({})
});