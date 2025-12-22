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
    <div className="relative w-full">
      <Menu.Root onSelect={(details) => setLanguage(details.value)}>
        <Menu.Trigger className="w-full flex justify-center md:w-auto p-2 rounded-xl hover:text-ink-accent-hover hover:bg-fill-accent/10">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"></path></svg>
        </Menu.Trigger>
        <Menu.Content className="absolute top-full left-0 w-full md:w-fit md:left-auto md:right-0 flex flex-col p-1 border rounded-md border-outline bg-fill-surface-soft text-nowrap">
          <Menu.Item value="en" className="max-md:text-center rounded-md p-2 text-center hover:bg-fill-surface-hover">🇺🇸 {t("header.languages.english")}</Menu.Item>
          <Menu.Item value="pt" className="max-md:text-center rounded-md p-2 text-center hover:bg-fill-surface-hover">🇵🇹 {t("header.languages.portuguese")}</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    </div>
  );
}