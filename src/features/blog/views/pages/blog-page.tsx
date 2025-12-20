import { useEffect, useState } from "react";
import { Menu, Toggle } from "@ark-ui/react";
import { Calendar, Tag } from "lucide-react";
import For from "@/shared/components/flow/for";
import CardPost from "../../components/card-post";
import type { Post } from "@/features/blog/types/blog";
import { useTranslation } from "react-i18next";
import { isArray, isBrowser } from "@utilify/core";
import Show from "@/shared/components/flow/show";

interface BlogPageProps {
  posts: Post[];
  search: string;
  category: string;
  tags: string[];
  time: string;
}

export default function BlogPage(props: BlogPageProps) {
  const [posts, setPosts] = useState<Post[]>(props.posts);
  const [search, setSearch] = useState<string>(props.search);
  const [category, setCategory] = useState<string>(props.category);
  const [time, setTime] = useState<string>(props.time);
  const [tags, setTags] = useState<string[]>(props.tags);
  const { t } = useTranslation();
  const categoriesMenu = t("blog:form.categoryMenu.items", { returnObjects: true }) as { value: string, label: string }[];
  const timeMenu = t("blog:form.timeMenu.items", { returnObjects: true }) as { value: string, label: string }[];
  const tagsList = t("blog:form.tagsMenu.items", { returnObjects: true }) as { value: string, label: string }[];

  useEffect(() => {
    async function getPosts() {
      try {
        const url = new URL(window.location.href.replace(/\?.+/, ""));
        const searchParams = url.searchParams;

        if (search) {
          searchParams.set("search", search);
        } else {
          searchParams.delete("search");
        }

        if (category) {
          searchParams.set("category", category);
        } else {
          searchParams.delete("category");
        }

        if (tags.length > 0) {
          searchParams.set("tags", tags.join(","));
        } else {
          searchParams.delete("tags");
        }

        if (time) {
          searchParams.set("time", time);
        } else {
          searchParams.delete("time");
        }

        window.history.replaceState({}, "", url);
        
        const response = await fetch(`/api/posts?${searchParams.toString()}`, {
          credentials: "include"
        });

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (isBrowser()) {
      getPosts();
    }
  }, [search, category, time, tags]);

  return (
    <div className="flex flex-col gap-16 mt-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl! md:text-5xl! lg:text-6xl!">
          {t("blog:page.title")}
        </h1>
        <h2 className="text-xl! text-slate-300">
          {t("blog:page.subtitle")}
        </h2>
      </div>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900">
          <input className="flex-1 rounded-xl border border-slate-600 p-2 bg-slate-800" type="text" placeholder={t("blog:form.search.placeholder")} value={search} onChange={e => setSearch(e.target.value)} />
          <Menu.Root onSelect={(details) => setCategory(details.value)}>
            <Menu.Trigger className="w-56 flex justify-center items-center gap-1 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
              <Tag className="h-5" />
              <span className="max-sm:hidden">
                {category && categoriesMenu?.find(({ value }) => value === category)?.label}
              </span>
            </Menu.Trigger>
            <Menu.Positioner className="relative w-fit">
              <Menu.Content className="w-56 z-10 flex flex-col p-1 border rounded-xl border-slate-700 bg-slate-800">
                {isArray(categoriesMenu) && categoriesMenu?.map((category) => <Menu.Item key={category.value} value={category.value} className="max-md:text-center rounded-xl p-2 text-center hover:bg-slate-700">{category.label}</Menu.Item>)}
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
          <Menu.Root onSelect={(details) => setTime(details.value)}>
            <Menu.Trigger className="w-40 flex justify-center items-center gap-1 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
              <Calendar className="h-5" />
              <span className="max-sm:hidden">
                {time && timeMenu?.find(({ value }) => value === time)?.label}
              </span>
            </Menu.Trigger>
            <Menu.Positioner className="relative w-fit">
              <Menu.Content className="w-40 z-10 flex flex-col p-1 border rounded-xl border-slate-700 bg-slate-800">
                {isArray(timeMenu) && timeMenu?.map((time) => <Menu.Item key={time.value} value={time.value} className="max-md:text-center rounded-xl p-2 text-center hover:bg-slate-700">{time.label}</Menu.Item>)}
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        </div>
        <span className="flex flex-wrap items-center gap-2">
          {tagsList?.map((tag) => (
            <Toggle.Root 
            key={tag.value} 
            defaultPressed={tags.includes(tag.value)} 
            onPressedChange={(pressed) => pressed ? setTags((tags) => [...tags, tag.value]) : setTags((tags) => [...tags.filter((value) => value !== tag.value)])} 
            className="border border-slate-700 bg-slate-800 hover:bg-slate-700 data-[state=on]:bg-blue-600 data-[state=on]:hover:bg-blue-700 rounded-full px-4 py-2">
              {tag.label}
            </Toggle.Root>
          ))}
        </span>
      </form>
      <div className="min-h-96 flex justify-center items-center">
        <Show when={posts.length > 0} fallback={(
          <span className="text-lg">
            {t("blog:messages.emptySearch")}
          </span>
        )}>
          <div className="min-h-96 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <For each={posts}>
              {(post) => (
                <CardPost key={post.id} {...post}/>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
}