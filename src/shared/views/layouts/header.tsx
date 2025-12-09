import { useEffect, useState } from "react";
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { useTranslation } from "@/shared/i18n";
import LanguagePicker from "@/shared/components/language-picker";
import { isArray } from "@utilify/core";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const menuLinks = t("header.menu", { returnObjects: true });

  useEffect(() => {
    const menuLinks = document.querySelectorAll("[data-header-menu-id]");

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            menuLinks.forEach((link) => {
              if (link.getAttribute("data-header-menu-id") === id) {
                link.setAttribute("data-header-menu-active", "true");
              } else {
                link.setAttribute("data-header-menu-active", "false");
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

      if (!element) return;

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 flex items-center justify-between lg:grid lg:grid-cols-3 lg:gap-8 py-2 px-8 border-b-1 border-b-slate-800 bg-slate-950"
    >
      <a className="text-2xl md:text-3xl font-semibold! text-blue-400" href="/">{t("header.logo")}</a>
      <nav aria-label="navegação principal" className="hidden lg:flex justify-center items-center gap-6">
        {isArray(menuLinks) && menuLinks.map(({ id, label, href }) => (
          <a 
            key={id} 
            data-header-menu-id={id}
            data-header-menu-active="false"
            className="text-slate-400 data-[header-menu-active=true]:text-slate-50 hover:text-slate-50"
            href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="hidden md:flex items-center justify-end gap-4">
        <nav aria-label="navegação principal" className="lg:hidden flex items-center gap-6">
          {isArray(menuLinks) && menuLinks.map(({ id, label, href }) => (
            <a 
              key={id}
              data-header-menu-id={id}
              data-header-menu-active="false"
              className="text-slate-400 data-[header-menu-active=true]:text-slate-50 hover:text-slate-50"
              href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex justify-end items-center gap-4">
          <a className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl" href={t("header.blog.href")}>{t("header.blog.label")}</a>
          {/* <a className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl" href="/curriculo.pdf" download>{t("header.curriculum")}</a> */}
          <span className="text-slate-500">|</span>
          <LanguagePicker />
        </div>
      </div>
      <div className="md:hidden">
        <button className="flex items-center gap-2" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <XIcon data-header-menu-active={menuIsOpen} className="data-[menu-active=false]:hidden w-8 h-8 p-1 rounded-xl hover:bg-slate-700" />
          <MenuIcon data-header-menu-active={menuIsOpen} className="data-[header-menu-active=true]:hidden w-8 h-8 p-1 rounded-xl hover:bg-slate-700" />
        </button>
        <div data-header-menu-active={menuIsOpen} className="absolute top-full left-0 w-full hidden data-[header-menu-active=true]:flex flex-col items-center gap-8 p-4 border-b-1 border-slate-800 bg-slate-950">
          <nav aria-label="navegação principal" className="w-full flex flex-col gap-4">
            {isArray(menuLinks) && menuLinks.map(({ id, label, href }) => (
              <a
                key={id}
                data-header-menu-id={id}
                data-header-menu-active="false"
                className="text-slate-400 data-[header-menu-active=true]:text-slate-50 hover:text-slate-50"
                href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="w-full flex flex-col gap-2">
            <a className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-center" href={t("header.blog.href")}>{t("header.blog.label")}</a>
            {/* <a className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-center" href="/curriculo.pdf" download>{t("header.curriculum")}</a> */}
            <hr className="text-slate-500" />
            <LanguagePicker />
          </div>
        </div>
      </div>
    </header>
  );
}