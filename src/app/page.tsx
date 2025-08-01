import { ArrowRight } from "lucide-react";
import TechsMenu from "@/components/view/sections/techs-menu";
import Projects from "@/components/view/sections/projects";
import Contact from "@/components/view/sections/contact";
import Section from "@/components/view/layout/section";
import TechLabel from "@/components/tech-label";
import AboutSection from "@/components/view/sections/about";
import SocialMedia from "@/components/social-media";

export default function Main() {
  return (
    <>
      <section id="inicio" className="flex flex-col justify-center items-center gap-4 text-center">
        <h2 className="text-4xl! md:text-5xl! lg:text-6xl!">Olá, eu sou <span className="text-blue-400">Júlio Pattuzzo</span></h2>
        <h3 className="text-2xl! text-slate-300">Desenvolvedor Full Stack especializado em criar experiências web modernas e responsivas</h3>
        <div className="space-x-4">
          <TechLabel>TypeScript</TechLabel>
          <TechLabel>NestJS</TechLabel>
        </div>
        <nav aria-label="navegação principal" className="flex items-center gap-4">
          <a className="flex justify-center items-center gap-2 rounded-md py-2 px-8 bg-blue-600 hover:bg-blue-700" href="#projetos">Ver Projetos <ArrowRight className="h-5"/></a>
          <a className="rounded-md py-2 px-8 bg-slate-800 hover:bg-slate-700 border-1 border-slate-700" href="/curriculo.pdf" download>Download Currículo</a>
        </nav>
        <SocialMedia />
      </section>
      <Section id="sobre" title="Sobre Mim" description="Desenvolvedor apaixonado por criar soluções web inovadoras e funcionais">
        <AboutSection />
      </Section>
      <Section id="tecnologias" title="Stack Tecnológica" description="Tecnologias e Ferramentas">
        <TechsMenu />
      </Section>
      <Section id="projetos" title="Projetos" description="Uma seleção dos meus trabalhos mais recentes e relevantes">
        <Projects />
      </Section>
      <Section id="contato" title="Entre em Contato" description="Vamos conversar sobre seu próximo projeto">
        <Contact />
      </Section>
    </>
  )
}