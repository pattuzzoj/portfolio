export const prerender = false;

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { filterPostsByCategory, filterPostsBySearch, filterPostsByTags, filterPostsByTime } from '@/features/blog/utils/blog/filters';

export const GET: APIRoute = async({ request, cookies }) => {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const locale = cookies.get("i18next")?.value as "pt" | "en";
    const search = searchParams.get("search") ?? "";
    const tags = searchParams.get("tags")?.split(",") ?? [];
    const category = searchParams.get("category") ?? "";
    const time = searchParams.get("time") ?? "";
    let posts = (await getCollection("blog", (post) => post.data.lang === locale))?.map((post) => ({ id: post.id, data: post.data }));
    posts = filterPostsByCategory(posts, category, locale);
    posts = filterPostsByTags(posts, tags);
    posts = filterPostsByTime(posts, time);
    posts = filterPostsBySearch(posts, search);

    return new Response(JSON.stringify(posts), 
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(JSON.stringify(error), 
      {
        status: 500
      }
    );
  }
}