import LanguagePicker from "@/shared/components/language-picker";
import i18n from "@/shared/i18n";
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { isArray } from "@utilify/core";
import { Menu } from "@ark-ui/react";


export default function MenuMobile() {
  const { t } = i18n;
  const menuLinks = t("header.menu", { returnObjects: true });
  return (
    <Menu.Root>
      <Menu.Trigger className="w-fit flex items-center gap-1 md:w-auto p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
        <MenuIcon
          className="data-[header-menu-active=true]:hidden w-8 h-8 p-1 rounded-xl hover:bg-slate-700" />
      </Menu.Trigger>
      <Menu.Content className="absolute top-full left-0 z-10 w-full">
        <div
          className="flex flex-col items-center gap-8 p-4 border-b border-slate-800 bg-slate-950">
          <nav aria-label="navegação principal" className="w-full flex flex-col items-center gap-4">
            {isArray(menuLinks) && menuLinks.map(({ id, label, href }) => (
              <a
                key={id}
                data-header-menu-id={id}
                data-header-menu-active="false"
                className="w-full text-center text-slate-400 data-[header-menu-active=true]:text-slate-50 hover:text-slate-50"
                href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="w-full flex flex-col gap-2">
            <a className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-center"
              href={t("header.blog.href")}>{t("header.blog.label")}</a>
            <hr className="text-slate-500" />
            <LanguagePicker />
          </div>
        </div>
      </Menu.Content>
    </Menu.Root>
  )
}