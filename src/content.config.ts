import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/features/blog/content" }),
  schema: z.object({
    lang: z.string(),
    url: z.string(),
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.string(),
    date: z.string(),
    readingTime: z.string(),
    coverImage: z.string(),
  })
});

export const collections = {
  blog
}; 