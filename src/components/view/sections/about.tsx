import { Database, FlaskConical, Monitor, Settings } from "lucide-react";
import CardStack from "@/components/card/card-stack";

export default function AboutSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <p className="text-slate-300 max-w-4xl text-center">Sou desenvolvedor Full Stack, formado em Análise e Desenvolvimento de Sistemas. Tenho uma abordagem prática e direta no desenvolvimento de software, com foco em escrever código limpo, modular e fácil de manter.</p>
      <p className="text-slate-300 max-w-4xl text-center">Estou em constante evolução, buscando aprimoramento técnico por meio do estudo contínuo de novas tecnologias, ferramentas e padrões de arquitetura.</p>
      <p className="text-slate-300 max-w-4xl text-center"><strong>Aprender faz parte do processo — evoluir é parte do trabalho.</strong></p>
      <div className="w-fit place-self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardStack
          icon={<Monitor className="h-12 w-12" />}
          title="Front-End"
          description="Desenvolvimento interfaces modernas e responsivas com Solid.js, Astro, React e Next.js, focando em desempenho e experiência do usuário"
        />
        <CardStack
          icon={<Settings className="h-12 w-12" />}
          title="Back-End"
          description="Construção de APIs eficientes e escaláveis utilizando Node.js, NestJS e Express, com foco em arquitetura modular e alta performance"
        />
        <CardStack
          icon={<Database className="h-12 w-12" />}
          title="Banco de Dados"
          description="Gerenciamento e manipulação de dados em PostgreSQL e MongoDB, com consultas claras e seguras via Drizzle ORM e Prisma"
        />
        <CardStack
          icon={<FlaskConical className="h-12 w-12" />}
          title="Testes"
          description="Implementação de testes unitários usando Vitest e Jest para garantir qualidade e estabilidade"
        />
      </div>
    </div>
  )
}