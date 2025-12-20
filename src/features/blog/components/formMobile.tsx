import For from "@/shared/components/flow/for";
import Show from "@/shared/components/flow/show";
import { useTranslation } from "react-i18next";
import { isArray, isBrowser } from "@utilify/core";
import { useEffect, useRef, useState } from "react";
import CardPostResult from "./card-post-result";
import type { Post } from "../types/blog";
import { Menu, Toggle } from "@ark-ui/react";
import { Calendar, Tag } from "lucide-react";
import { onClickOutside } from "@/shared/utils/onClickOutside";

export default function FormMobile() {
  const [isFocused, setIsFocused] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>();
  const [category, setCategory] = useState<string>("all");
  const [time, setTime] = useState<string>("all");
  const [tags, setTags] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("");
  const { t } = useTranslation();
  const categoriesMenu = t("blog:form.categoryMenu.items", { returnObjects: true }) as { value: string, label: string }[];
  const timeMenu = t("blog:form.timeMenu.items", { returnObjects: true }) as { value: string, label: string }[];
  const tagsList = t("blog:form.tagsMenu.items", { returnObjects: true }) as { value: string, label: string }[];
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let closeEvent = () => {};

    if (isFocused) {
      closeEvent = onClickOutside(menuRef.current, () => {
        console.log("teste")
        setIsFocused(false);
      });
    }

    return closeEvent;
  }, [isFocused]);

  useEffect(() => {
    async function getPosts() {
      try {
        const url = new URL(window.location.href.split("/").slice(0, -1).join("/"));
        const searchParams = url.searchParams;

        if (search) {
          searchParams.set("search", search);
        }

        if (category) {
          searchParams.set("category", category);
        }

        if (tags.length > 0) {
          searchParams.set("tags", tags.join(","));
        }

        if (time) {
          searchParams.set("time", time);
        }

        const response = await fetch(`/api/posts?${searchParams.toString()}`, {
          credentials: "include"
        });

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setPosts(data);
        setUrl(url.toString());
      } catch (error) {
        console.log(error);
      }
    }

    if (isBrowser()) {
      getPosts();
    }
  }, [search, category, time, tags]);

  return (
    <form ref={menuRef} action="" className="group min-w-md" onFocus={() => setIsFocused(true)}>
      <input type="text" data-form-open={isFocused} className="w-full rounded-xl data-[form-open=true]:rounded-b-none p-2 bg-slate-800 data-[form-open=true]:bg-slate-900 outline-none" placeholder={t("blog:form.search.placeholder")} value={search} onChange={e => setSearch(e.target.value)} />
      <div data-form-open={isFocused} className="w-full hidden data-[form-open=true]:flex flex-col gap-2 rounded-t-none rounded-b-xl bg-slate-900">
        <div className="flex flex-col gap-2 p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
            <Menu.Root onSelect={(details) => setCategory(details.value)}>
              <Menu.Trigger className="w-full flex justify-center items-center gap-1 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
                <Tag className="h-5" />
                <span className="max-sm:hidden">
                  {category && categoriesMenu.find(({ value }) => value === category)?.label}
                </span>
              </Menu.Trigger>
              <Menu.Positioner className="w-full">
                <Menu.Content className="w-1/2 z-10 flex flex-col p-1 border rounded-xl border-slate-700 bg-slate-800">
                  {isArray(categoriesMenu) && categoriesMenu.map((category) => <Menu.Item key={category.value} value={category.value} className="max-md:text-center rounded-xl p-2 text-center hover:bg-slate-700">{category.label}</Menu.Item>)}
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Root onSelect={(details) => setTime(details.value)}>
              <Menu.Trigger className="w-full flex justify-center items-center gap-1 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
                <Calendar className="h-5" />
                <span className="max-sm:hidden">
                  {time && timeMenu.find(({ value }) => value === time)?.label}
                </span>
              </Menu.Trigger>
              <Menu.Positioner className="w-full">
                <Menu.Content className="w-1/2 z-10 flex flex-col p-1 border rounded-xl border-slate-700 bg-slate-800">
                  {isArray(timeMenu) && timeMenu.map((time) => <Menu.Item key={time.value} value={time.value} className="max-md:text-center rounded-xl p-2 text-center hover:bg-slate-700">{time.label}</Menu.Item>)}
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          </div>
          <span className="flex flex-wrap items-center gap-2">
            {tagsList.map((tag) => (
              <Toggle.Root
                key={tag.value}
                defaultPressed={tags.includes(tag.value)}
                onPressedChange={(pressed) => pressed ? setTags((tags) => [...tags, tag.value]) : setTags((tags) => [...tags.filter((value) => value !== tag.value)])}
                className="border border-slate-700 bg-slate-800 hover:bg-slate-700 data-[state=on]:bg-blue-600 data-[state=on]:hover:bg-blue-700 rounded-full px-2 py-1">
                {tag.label}
              </Toggle.Root>
            ))}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center min-h-32">
          <Show when={posts.length > 0} fallback={(
            <span className="text-lg p-2">
              {t("blog:messages.emptySearch")}
            </span>
          )}>
            <div className="w-full max-h-[600px] overflow-y-scroll">
              <For each={posts}>
                {(post, index) => (
                  <CardPostResult key={index} {...post} />
                )}
              </For>
            </div>
            <a className="w-full p-2 hover:bg-blue-600 text-center" href={url}>Ver todos os resultados</a>
          </Show>
        </div>
      </div>
    </form >
  );
}