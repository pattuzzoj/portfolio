import i18n from "@/shared/i18n";
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { isArray } from "@utilify/core";
import LanguagePicker from "@/shared/components/language-picker";
import { Menu } from "@ark-ui/react";
import FormMobile from "../formMobile";


export default function MenuMobile() {
  const { t } = i18n;
  
  return (
    <Menu.Root>
      <Menu.Trigger className="w-fit flex items-center gap-1 md:w-auto p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
        <MenuIcon
          className="data-[header-menu-active=true]:hidden w-8 h-8 p-1 rounded-xl hover:bg-slate-700" />
      </Menu.Trigger>
      <Menu.Content className="absolute top-full left-0 z-50 isolate w-full">
        <div
          className="flex flex-col items-center gap-8 p-4 border-b border-slate-800 bg-slate-950">
          <FormMobile />
          <div className="w-full flex flex-col gap-2">
            <a className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-center"
              href={t("blog:header.portfolio.href")}>{t("blog:header.portfolio.label")}</a>
            <hr className="text-slate-500" />
            <LanguagePicker />
          </div>
        </div>
      </Menu.Content>
    </Menu.Root>
  )
}