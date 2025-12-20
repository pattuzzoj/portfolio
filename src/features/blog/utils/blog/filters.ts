import type { Post } from '@/features/blog/types/blog';
import { adjustDate } from '@utilify/core';
import FuzzySearch from 'fuzzy-search';

const categoryLabels = {
  en: {
    frontend: "Front-end",
    backend: "Back-end",
    fullstack: "Full Stack",
    ai: "Artificial Intelligence",
    tips: "Tips & Best Practices",
    "webdevelopment": "Web Development"
  },
  pt: {
    frontend: "Front-end",
    backend: "Back-end",
    fullstack: "Full Stack",
    ai: "Inteligência Artificial",
    tips: "Dicas e Boas Práticas",
    "webdevelopment": "Desenvolvimento Web"
  }
};

const tagLabels = {
  "javascript": "JavaScript",
  "react": "React",
  "astro": "Astro",
  "nextjs": "Next.js",
  "sql": "SQL"
}

const comparisonDates = {
  week: adjustDate(new Date(), { days: -7 }),
  month: adjustDate(new Date(), { months: -1 }),
  year: adjustDate(new Date(), { years: -1 })
}

function filterPostsBySearch(posts: Post[], search: string) {
  if (!search) return posts;

  const searcher = new FuzzySearch(posts, ["data.title"]);
  return searcher.search(search);
}

function filterPostsByCategory(posts: Post[], category: string, locale: "pt" | "en") {
  const categories = categoryLabels[locale];

  if (!Object.hasOwn(categories, category)) {
    return posts;
  }

  category = categories[category];

  return posts.filter((post) => post.data.category === category);
}

function filterPostsByTags(posts: Post[], tags: string[]) {
  if (tags.length === 0) return posts;

  return posts.filter((post) => {
    const postTags = post.data.tags.replace(/\s*/g, "").split(",");
    return tags.some((tag) => postTags.includes(tagLabels[tag]));
  });
}

function filterPostsByTime(posts: Post[], time: string) {
  if (!Object.hasOwn(comparisonDates, time)) return posts;

  const timeAgo = comparisonDates[time];

  return posts.filter((post) => {
    const publishedAt = new Date(post.data.date);
    return (publishedAt > timeAgo);
  })
}

export {
  filterPostsBySearch,
  filterPostsByCategory,
  filterPostsByTags,
  filterPostsByTime,
}