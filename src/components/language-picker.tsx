import { Menu } from "@ark-ui/react";
import { changeLocale } from "astro-react-i18next/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguagePicker() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language);

  useEffect(() => {
    changeLocale(language, false);
  }, [language]);

  return (
    <Menu.Root onSelect={(details) => setLanguage(details.value)}>
      <Menu.Trigger className="w-full flex justify-center md:w-auto p-2 rounded-md bg-slate-800 hover:bg-slate-700 border-1 border-slate-700">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"></path></svg>
      </Menu.Trigger>
      <Menu.Positioner className="w-fit">
        <Menu.Content className="flex flex-col p-1 border-1 rounded-md border-slate-700 bg-slate-800">
          <Menu.Item value="en" className="max-md:text-center rounded-md p-2 text-center hover:bg-slate-700">🇺🇸 {t("header.languages.english")}</Menu.Item>
          <Menu.Item value="pt" className="max-md:text-center rounded-md p-2 text-center hover:bg-slate-700">🇵🇹 {t("header.languages.portuguese")}</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}