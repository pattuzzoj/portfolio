"use client";

import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import Show from "@/components/flow/show";
import { useEffect, useState } from "react";

export default function MenuHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPathname(entry.target.id);
        }
      });
    }, {
      rootMargin: "-50% 0px -50% 0px"
    });

    const sections = ["inicio", "sobre", "tecnologias", "projetos", "contato"];
    sections.forEach((section) => observer.observe(document.getElementById(section) as Element));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <Show when={menuIsOpen} fallback={<MenuIcon />}>
          <XIcon />
        </Show>
      </button>
      <Show when={menuIsOpen}>
        <div className="absolute top-full left-0 w-full flex flex-col items-center gap-8 p-4 border-b-1 border-slate-800 bg-slate-950">
          <nav aria-label="navegação principal" className="w-full flex flex-col gap-4 lg:space-x-6">
            <a className={`${pathname === "inicio" ? "text-slate-50" : "text-slate-400"} hover:text-slate-50`} href="#">Início</a>
            <a className={`${pathname === "sobre" ? "text-slate-50" : "text-slate-400"} hover:text-slate-50`} href="#sobre">Sobre</a>
            <a className={`${pathname === "tecnologias" ? "text-slate-50" : "text-slate-400"} hover:text-slate-50`} href="#tecnologias">Tecnologias</a>
            <a className={`${pathname === "projetos" ? "text-slate-50" : "text-slate-400"} hover:text-slate-50`} href="#projetos">Projetos</a>
            <a className={`${pathname === "contato" ? "text-slate-50" : "text-slate-400"} hover:text-slate-50`} href="#contato">Contato</a>
          </nav>
          <a className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center" href="/curriculo.pdf" download>Download CV</a>
        </div>
      </Show>
    </div>
  )
}