import { Database, FlaskConical, Monitor, Settings } from "lucide-react";
import CardStack from "../card/card-stack";

export default function AboutSection() {
  return (
    <div className="w-fit place-self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CardStack
        icon={<Monitor className="h-12 w-12" />}
        title="Front-End"
        description="Desenvolvimento de interfaces modernas, responsivas e acessíveis com foco na experiência do usuário"
      />
      <CardStack
        icon={<Settings className="h-12 w-12" />}
        title="Back-End"
        description="Construção de APIs RESTful seguras e escaláveis utilizando as melhores práticas de desenvolvimento"
      />
      <CardStack
        icon={<Database className="h-12 w-12" />}
        title="Banco de Dados"
        description="Modelagem eficiente de dados, otimização de consultas e implementação de soluções escaláveis"
      />
      <CardStack
        icon={<FlaskConical className="h-12 w-12" />}
        title="Testes"
        description="Implementação de testes unitários, de integração e end-to-end para garantir qualidade e confiabilidade"
      />
    </div>
  )
}