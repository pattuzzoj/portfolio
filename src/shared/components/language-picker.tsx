import { useEffect, useState } from "react";
import { Menu } from "@ark-ui/react";
import { navigate } from "astro:transitions/client";
import { useTranslation } from "@/shared/i18n";

export default function LanguagePicker() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string>();
  
  useEffect(() => {
    if (language) {
      const { pathname, search, hash } = window.location;
      const segments = pathname.split("/");
      const newPath = `/${language}/${segments.slice(2).join("/")}${search}${hash}`;
      navigate(newPath || "/");
    }
  }, [language]);

  return (
    <Menu.Root onSelect={(details) => setLanguage(details.value)}>
      <Menu.Trigger className="w-full flex justify-center md:w-auto p-2 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"></path></svg>
      </Menu.Trigger>
      <Menu.Positioner className=" md:w-fit">
        <Menu.Content className="flex flex-col p-1 border rounded-md border-slate-700 bg-slate-800">
          <Menu.Item value="en" className="max-md:text-center rounded-md p-2 text-center hover:bg-slate-700">🇺🇸 {t("header.languages.english")}</Menu.Item>
          <Menu.Item value="pt" className="max-md:text-center rounded-md p-2 text-center hover:bg-slate-700">🇵🇹 {t("header.languages.portuguese")}</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}