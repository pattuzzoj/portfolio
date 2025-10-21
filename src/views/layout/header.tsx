import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import Show from '@/components/flow/show';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { on } from "@utilify/core";
import { useTranslation } from "@/i18n";
import LanguagePicker from "@/components/language-picker";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    setIsMobile(() => window.matchMedia("(max-width: 768px").matches);
  }, []);

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
    <header
      className="sticky top-0 flex items-center justify-between lg:grid lg:grid-cols-3 lg:gap-8 py-4 px-8 border-b-1 border-b-slate-800 bg-slate-950"
    >
      <a className="text-2xl md:text-3xl font-semibold! text-blue-400" href="/">{t("header.logo")}</a>
      <nav aria-label="navegação principal" className="hidden lg:flex justify-center items-center gap-6">
        <a
          data-menu-id="home"
          data-menu-active="false"
          className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
          href={`${t("header.menu.home.href")}`}>{t("header.menu.home.label")}</a>
        <a
          data-menu-id="about"
          data-menu-active="false"
          className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50 text-nowrap"
          href={`${t("header.menu.about.href")}`}>{t("header.menu.about.label")}</a>
        <a
          data-menu-id="technologies"
          data-menu-active="false"
          className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
          href={`${t("header.menu.technologies.href")}`}>{t("header.menu.technologies.label")}</a>
        <a
          data-menu-id="projects"
          data-menu-active="false"
          className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
          href={`${t("header.menu.projects.href")}`}>{t("header.menu.projects.label")}</a>
        <a
          data-menu-id="contact"
          data-menu-active="false"
          className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
          href={`${t("header.menu.contact.href")}`}>{t("header.menu.contact.label")}</a>
      </nav>
      <div className="hidden md:flex items-center justify-end gap-4">
        <nav aria-label="navegação principal" className="lg:hidden flex items-center gap-6">
          <a
            data-menu-id="home"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`${t("header.menu.home.href")}`}>{t("header.menu.home.label")}</a>
          <a
            data-menu-id="about"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`${t("header.menu.about.href")}`}>{t("header.menu.about.label")}</a>
          <a
            data-menu-id="technologies"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`${t("header.menu.technologies.href")}`}>{t("header.menu.technologies.label")}</a>
          <a
            data-menu-id="projects"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`${t("header.menu.projects.href")}`}>{t("header.menu.projects.label")}</a>
          <a
            data-menu-id="contact"
            data-menu-active="false"
            className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
            href={`${t("header.menu.contact.href")}`}>{t("header.menu.contact.label")}</a>
        </nav>
        <div className="flex justify-end items-center gap-4">
          <a className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md" href="/curriculo.pdf" download>{t("header.curriculum")}</a>
          <span className="text-slate-500">|</span>
          <LanguagePicker />
        </div>
      </div>
      <div className="md:hidden">
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
              href={`${t("header.menu.home.href")}`}>{t("header.menu.home.label")}</a>
            <a
              data-menu-id="about"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`${t("header.menu.about.href")}`}>{t("header.menu.about.label")}</a>
            <a
              data-menu-id="technologies"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`${t("header.menu.technologies.href")}`}>{t("header.menu.technologies.label")}</a>
            <a
              data-menu-id="projects"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`${t("header.menu.projects.href")}`}>{t("header.menu.projects.label")}</a>
            <a
              data-menu-id="contact"
              data-menu-active="false"
              className="text-slate-400 data-[menu-active=true]:text-slate-50 hover:text-slate-50"
              href={`${t("header.menu.contact.href")}`}>{t("header.menu.contact.label")}</a>
          </nav>
          <div className="w-full flex flex-col gap-2">
            <a className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center" href="/curriculo.pdf" download>{t("header.curriculum")}</a>
            <hr className="text-slate-500" />
            <LanguagePicker />
          </div>
        </div>
      </div>
    </header>
  );
}