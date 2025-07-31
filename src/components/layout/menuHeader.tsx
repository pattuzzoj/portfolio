"use client";

import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import Show from "../flow/show";
import { useState } from "react";

export default function MenuHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
            <a className="block w-full text-slate-400 hover:text-slate-50" href="#">Início</a>
            <a className="block w-full text-slate-400 hover:text-slate-50" href="#sobre">Sobre</a>
            <a className="block w-full text-slate-400 hover:text-slate-50" href="#tecnologias">Tecnologias</a>
            <a className="block w-full text-slate-400 hover:text-slate-50" href="#projetos">Projetos</a>
            <a className="block w-full text-slate-400 hover:text-slate-50" href="#contato">Contato</a>
          </nav>
          <a href="/currículo.pdf" download className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center">Download CV</a>
        </div>
      </Show>
    </div>
  )
}