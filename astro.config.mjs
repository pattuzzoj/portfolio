// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    imageService: true,
  }),
  output: "server",
  integrations: [react(), icon({
    include: {
      lucide: ["square-arrow-out-up-right", "monitor", "settings", "database", "flask-conical", "map-pin", "mail", "arrow-right", "languages", "book-open"]
    }
  }), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://pattuzzoj.vercel.app"
});