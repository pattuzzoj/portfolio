import i18n from "@/shared/i18n";
import { Menu as MenuIcon, X as CloseMenuIcon } from 'lucide-react';
import LanguagePicker from "@/shared/components/language-picker";
import { Menu } from "@ark-ui/react";
import Form from "../form/form";
import SwitchLanguage from "@/shared/components/switch-theme";


export default function MenuMobile() {
  const { t } = i18n;
  
  return (
    <Menu.Root>
      <Menu.Trigger className="group w-fit flex items-center gap-1 md:w-auto p-2 rounded-xl bg-surface-subtle hover:bg-hover border border-border">
        <MenuIcon className="block group-data-[state=open]:hidden w-8 h-8 p-1 rounded-xl hover:bg-hover" />
        <CloseMenuIcon className="hidden group-data-[state=open]:block w-8 h-8 p-1 rounded-xl hover:bg-hover" />
      </Menu.Trigger>
      <Menu.Content className="absolute top-full left-0 z-50 isolate w-full">
        <div
          className="flex flex-col items-center gap-4 p-4 border-b border-border bg-background">
          <Form />
          <hr className="w-full text-content-muted" />
          <div className="w-full flex flex-col gap-2">
            <a className="w-full bg-accent hover:bg-accent-hover text-content-inverse px-4 py-2 rounded-xl text-center"
              href={t("blog:header.portfolio.href")}>{t("blog:header.portfolio.label")}</a>
            <div className="flex items-center gap-2">
              <SwitchLanguage />
              <LanguagePicker />
            </div>
          </div>
        </div>
      </Menu.Content>
    </Menu.Root>
  )
}
