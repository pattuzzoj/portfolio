"use client";

import { useEffect, useState } from "react";
import MenuHeader from "./menuHeader";

export default function Header() {
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
    <header className="sticky top-0 flex justify-between items-center py-4 px-8 border-b-1 border-b-slate-800 bg-slate-950">
      <h1 className="text-lg font-bold text-blue-400">Júlio Pattuzzo</h1>
      <div className="hidden md:flex items-center gap-8">
        <nav aria-label="navegação principal" className="space-x-6">
          <a className={`${pathname === "inicio" ? "text-slate-50" : "text-slate-400" } hover:text-slate-50`} href="#">Início</a>
          <a className={`${pathname === "sobre" ? "text-slate-50" : "text-slate-400" } hover:text-slate-50`} href="#sobre">Sobre</a>
          <a className={`${pathname === "tecnologias" ? "text-slate-50" : "text-slate-400" } hover:text-slate-50`} href="#tecnologias">Tecnologias</a>
          <a className={`${pathname === "projetos" ? "text-slate-50" : "text-slate-400" } hover:text-slate-50`} href="#projetos">Projetos</a>
          <a className={`${pathname === "contato" ? "text-slate-50" : "text-slate-400" } hover:text-slate-50`} href="#contato">Contato</a>
        </nav>
        <a className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md" href="/curriculo.pdf" download>Download CV</a>
      </div>
      <div className="md:hidden">
        <MenuHeader />
      </div>
    </header>
  )
}