import { SquareArrowOutUpRight } from "lucide-react";
import For from "../flow/for";
import Github from "@/assets/icons/GitHub.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import TechLabel from "../tech-label";

interface CardProjectProps {
  banner: StaticImport;
  title: string;
  description: string;
  techs: string[];
  live: string;
  github: string;
}

export default function CardProject(props: CardProjectProps) {
  return (
    <div className="flex flex-col justify-between gap-4 max-w-sm border-1 border-slate-700 rounded-md bg-slate-900 p-4">
      <Image className="aspect-video object-cover object-top-left rounded-md" width={500} height={200} src={props.banner} alt="" />
      <div className="h-full flex flex-col justify-between space-y-4">
        <h3>{props.title}</h3>
        <p className="text-sm text-slate-400">{props.description}</p>
        <div className="flex items-center gap-2">
          <For each={props.techs}>
            {(tech, index) => (<TechLabel key={index}>{tech}</TechLabel>)}
          </For>
        </div>
        <div className="flex justify-between items-center gap-2">
          <a className="flex justify-center items-center w-full gap-2 bg-blue-600 hover:bg-blue-700 rounded-lg p-2" href={props.live} target="_blank">
            <SquareArrowOutUpRight className="h-4" />
            Ver Projeto
          </a>
          <a className="group flex items-center h-full border-1 border-slate-700 rounded-lg p-2 bg-slate-800 hover:bg-slate-700" href={props.github} target="_blank">
            <Github className="w-6 h-6 group-hover:fill-white" />
          </a>
        </div>
      </div>
    </div>
  )
}