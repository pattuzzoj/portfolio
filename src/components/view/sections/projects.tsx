import CardProject from "@/components/card/card-project";
import Utilify from "@/assets/images/projects/utilify-banner.png";
import NexonUtilis from "@/assets/images/projects/nexonutilis-banner.png";
import Futuresphere from "@/assets/images/projects/futuresphere-banner.png";
import Nowted from "@/assets/images/projects/nowted-banner.png";

export default function Projects() {
  return (
    <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-self-center items-stretch gap-6">
      <CardProject
        banner={Utilify}
        title="Utilify"
        description="Conjunto de utilitários tipados, seguros e leves para acelerar o desenvolvimento em JavaScript e TypeScript. Possui API intuitiva, documentação objetiva, testes completos e suporte nativo a Node.js, Deno, Bun e navegadores modernos."
        techs={["VitePress", "Vitest"]}
        live="https://utilify.js.org/"
        github="https://github.com/pattuzzoj/utilify"
      />
      <CardProject
        banner={NexonUtilis}
        title="Nexon Utilis"
        description="Hub centralizado de recursos para desenvolvedores e profissionais de tecnologia. Organizado por categorias, reúne tutoriais, cursos, ferramentas e conteúdos técnicos para diversas áreas do desenvolvimento, com foco em acessibilidade e praticidade."
        techs={["Solid.js", "Tailwind CSS"]}
        live="https://nexonutilis.vercel.app"
        github="https://github.com/pattuzzoj/nexonutilis"
      />
      <CardProject
        banner={Nowted}
        title="Nowted"
        description="Um aplicativo completo para anotações com integração backend, permitindo que os usuários criem e gerenciem suas notas."
        techs={["Solid.js", "Tailwind CSS", "IndexedDB", "Nest.js", "Node.js", "Drizzle ORM", "PostgreSQL"]}
        live="https://nowted.vercel.app"
        github="https://github.com/pattuzzoj/nowted"
      />
      <CardProject
        banner={Futuresphere}
        title="Futuresphere"
        description="Um site de demonstração completo apresentando design web moderno e capacidades frontend."
        techs={["Solid.js", "Tailwind CSS", "i18n"]}
        live="https://futuresphere.vercel.app"
        github="https://github.com/pattuzzoj/futuresphere"
      />
    </div>
  )
}