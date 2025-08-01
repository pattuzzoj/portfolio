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
        description="Uma biblioteca de funções utilitárias com tipagem segura para o ecossistema JavaScript, fornecendo uma coleção de ferramentas e funções úteis"
        techs={["VitePress", "TypeScript", "Vitest"]}
        live="https://utilify.js.org/"
        github="https://github.com/pattuzzoj/utilify"
      />
      <CardProject
        banner={NexonUtilis}
        title="Nexon Utilis"
        description="Um site repositório abrangente para recursos de desenvolvedores, incluindo documentação, tutoriais e materiais úteis"
        techs={["Solid.js", "Tailwind CSS"]}
        live="https://nexonutilis.vercel.app"
        github="https://github.com/pattuzzoj/nexonutilis"
      />
      <CardProject
        banner={Nowted}
        title="Nowted"
        description="Um aplicativo completo para anotações com integração backend, permitindo que os usuários criem e gerenciem suas notas"
        techs={["Nest.js", "Node.js", "Solid.js", "Tailwind CSS"]}
        live="https://nowted.vercel.app"
        github="https://github.com/pattuzzoj/nowted"
      />
      <CardProject
        banner={Futuresphere}
        title="Futuresphere"
        description="Um site de demonstração completo apresentando design web moderno e capacidades frontend"
        techs={["Solid.js", "Tailwind CSS"]}
        live="https://futuresphere.vercel.app"
        github="https://github.com/pattuzzoj/futuresphere"
      />
    </div>
  )
}