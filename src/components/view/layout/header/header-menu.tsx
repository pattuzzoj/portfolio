import { useEffect, useState } from "react";
import Show from '@/components/flow/show';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { on } from "@utilify/core";
import { useTranslation } from "react-i18next";
import LanguagePicker from "@/components/language-picker";


export default function MobileHeader() {
  const [isMobile, setIsMobile] = useState<boolean>(() => window.matchMedia("(max-width: 768px").matches);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    function onMediaQuery(query: string, listener: (matches: boolean) => void): () => void {
      const mediaQuery = window.matchMedia(query);
      return on(mediaQuery, 'change', (e) => listener((e as MediaQueryListEvent).matches));
    }

    onMediaQuery("(max-width: 768px", (matches) => setIsMobile(matches));

    const menuLinks = document.querySelectorAll("[data-menu-id]");

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            menuLinks.forEach((link) => {
              if (link.getAttribute("data-menu-id") === id) {
                link.setAttribute("data-menu-active", "true");
              } else {
                link.setAttribute("data-menu-active", "false");
              }
            });
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    const sectionsID = ["home", "about", "technologies", "projects", "contact"];
    sectionsID.forEach((sectionID) => {
      const element = document.getElementById(sectionID) as Element;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Show when={isMobile} fallback={(
      <div className="flex items-center gap-8">
        <nav aria-label="navegação principal" className="space-x-6">
          <a
            data-menu-id="home"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`#${t("header.menu.home.href")}`}>{t("header.menu.home.label")}</a>
          <a
            data-menu-id="about"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`#${t("header.menu.about.href")}`}>{t("header.menu.about.label")}</a>
          <a
            data-menu-id="technologies"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`#${t("header.menu.technologies.href")}`}>{t("header.menu.technologies.label")}</a>
          <a
            data-menu-id="projects"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`#${t("header.menu.projects.href")}`}>{t("header.menu.projects.label")}</a>
          <a
            data-menu-id="contact"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`#${t("header.menu.contact.href")}`}>{t("header.menu.contact.label")}</a>
        </nav>
        <a className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md" href="/curriculo.pdf" download>{t("header.curriculum")}</a>
        <LanguagePicker />
      </div>
    )}>
      <div>
        <button className="flex items-center gap-2" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <XIcon data-menu-active={menuIsOpen} className="data-[menu-active=false]:hidden w-8 h-8 p-1 rounded-md hover:bg-slate-700" />
          <MenuIcon data-menu-active={menuIsOpen} className="data-[menu-active=true]:hidden w-8 h-8 p-1 rounded-md hover:bg-slate-700" />
        </button>
        <div data-menu-active={menuIsOpen} className="absolute top-full left-0 w-full hidden data-[menu-active=true]:flex flex-col items-center gap-8 p-4 border-b-1 border-slate-800 bg-slate-950">
          <nav aria-label="navegação principal" className="w-full flex flex-col gap-4">
            <a
              data-menu-id="home"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`#${t("header.menu.home.href")}`}>{t("header.menu.home.label")}</a>
            <a
              data-menu-id="about"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`#${t("header.menu.about.href")}`}>{t("header.menu.about.label")}</a>
            <a
              data-menu-id="technologies"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`#${t("header.menu.technologies.href")}`}>{t("header.menu.technologies.label")}</a>
            <a
              data-menu-id="projects"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`#${t("header.menu.projects.href")}`}>{t("header.menu.projects.label")}</a>
            <a
              data-menu-id="contact"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`#${t("header.menu.contact.href")}`}>{t("header.menu.contact.label")}</a>
          </nav>
          <div className="w-full flex flex-col gap-2">
            <a className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center" href="/curriculo.pdf" download>{t("header.curriculum")}</a>
            <LanguagePicker />
          </div>
        </div>
      </div>
    </Show>
  );
}