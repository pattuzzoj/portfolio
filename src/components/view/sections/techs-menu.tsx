import { Tabs } from "@ark-ui/react";
import CardTech from "@/components/card/card-tech";
import Astro from "@/assets/icons/Astro.svg";
import Nextjs from "@/assets/icons/Next.js.svg";
import ReactIcon from "@/assets/icons/React.svg";
import Solidjs from "@/assets/icons/Solid.js.svg";
import Tailwind from "@/assets/icons/Tailwind CSS.svg";
import Nestjs from "@/assets/icons/Nest.js.svg";
import Express from "@/assets/icons/Express.svg";
import Nodejs from "@/assets/icons/Node.js.svg";
import Prisma from "@/assets/icons/Prisma.svg";
import Drizzle from "@/assets/icons/Drizzle.svg";
import Postgres from "@/assets/icons/PostgresSQL.svg";
import MongoDB from "@/assets/icons/MongoDB.svg";
import Vitest from "@/assets/icons/Vitest.svg";
import Jest from "@/assets/icons/Jest.svg";
import Git from "@/assets/icons/Git.svg";
import Docker from "@/assets/icons/Docker.svg";
// import Deno from "@/assets/icons/Deno.svg";

export default function TechsMenu() {
  return (
    <div>
      <Tabs.Root className="flex flex-col items-center gap-6" defaultValue="front-end">
        <Tabs.List className="w-fit flex justify-evenly items-center gap-4 rounded-lg p-2 bg-slate-800">
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="front-end">Front-End</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="back-end">Back-End</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="database">Database</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="tests">Tests</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="tools">Tools</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="front-end" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech icon={<Astro className="h-8 w-8" />} title="Astro" description="Arquitetura moderna para sites estáticos. Zero JS por padrão e interatividade apenas onde importa." />
          <CardTech icon={<Solidjs className="h-8 w-8" />} title="Solid.js" description="Reatividade real sem virtual DOM. Compila para JS puro com alta performance." />
          <CardTech icon={<Nextjs className="h-8 w-8" />} title="Next.js" description="Framework React completo com SSR, SSG e roteamento integrado." />
          <CardTech icon={<ReactIcon className="h-8 w-8" />} title="React" description="Biblioteca de UI baseada em componentes. Popular, mas com reatividade indireta." />
          <CardTech icon={<Tailwind className="h-8 w-8" />} title="Tailwind CSS" description="CSS utilitário para construir interfaces rápidas e consistentes." />
        </Tabs.Content>
        <Tabs.Content value="back-end" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech icon={<Nestjs className="h-8 w-8" />} title="NestJS" description="Framework modular com TypeScript. Arquitetura sólida e escalável por padrão." />
          {/* <CardTech icon={<Deno className="h-8 w-8" />} title="Deno" description="Runtime moderno com segurança embutida, ES Modules e ferramentas nativas." /> */}
          <CardTech icon={<Express className="h-8 w-8" />} title="Express" description="Framework minimalista para Node.js. Flexível, mas sem estrutura opinativa." />
          <CardTech icon={<Nodejs className="h-8 w-8" />} title="Node.js" description="Runtime assíncrono baseado no V8. Base para servidores JS modernos." />
        </Tabs.Content>
        <Tabs.Content value="database" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech icon={<Drizzle className="h-8 w-8" />} title="DrizzleORM" description="ORM leve com tipagem forte e zero overhead. Ideal para controle total." />
          <CardTech icon={<Prisma className="h-8 w-8" />} title="Prisma" description="ORM moderno com foco em produtividade. Consultas seguras e geradas automaticamente." />
          <CardTech icon={<Postgres className="h-8 w-8" />} title="PostgreSQL" description="Banco relacional robusto e confiável. Suporte a JSON, ACID e extensibilidade." />
          <CardTech icon={<MongoDB className="h-8 w-8" />} title="MongoDB" description="Banco NoSQL orientado a documentos. Flexível, mas menos rígido que SQL." />
        </Tabs.Content>
        <Tabs.Content value="tests" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech icon={<Vitest className="h-8 w-8" />} title="Vitest" description="Test runner rápido com ESM, HMR e integração ao Vite." />
          <CardTech icon={<Jest className="h-8 w-8" />} title="Jest" description="Framework consolidado com suporte a snapshots e coverage." />
        </Tabs.Content>
        <Tabs.Content value="tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech icon={<Git className="h-8 w-8" />} title="Git" description="Controle de versão distribuído. Essencial para colaboração e histórico." />
          <CardTech icon={<Docker className="h-8 w-8" />} title="Docker" description="Contêineres para ambientes isolados. Padroniza dev e produção." />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}