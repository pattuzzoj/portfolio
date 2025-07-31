import SocialMedia from "../social-media";

export default function Footer() {
  return (
    <footer className="flex justify-center border-t-1 border-slate-700 py-8 px-8">
      <div className="w-full max-w-7xl space-y-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="md:w-1/3">
            <h3>Júlio Pattuzzo</h3>
            <p>Desenvolvedor Full Stack especializado em criar experiências web modernas e responsivas.</p>
          </div>
          <div className="md:w-1/3 space-y-2">
            <h4 id="menu">Links Rápidos</h4>
            <nav aria-labelledby="menu" className="flex flex-col gap-2">
              <a className="text-white/60 hover:text-white" href="#">Início</a>
              <a className="text-white/60 hover:text-white" href="#sobre">Sobre Mim</a>
              <a className="text-white/60 hover:text-white" href="#tecnologias">Tecnologias</a>
              <a className="text-white/60 hover:text-white" href="#projetos">Projetos</a>
              <a className="text-white/60 hover:text-white" href="#contato">Contato</a>
            </nav>
          </div>
          <div className="md:w-1/3">
            <h4 id="contact">Conecte-se</h4>
            <SocialMedia />
          </div>
        </div>
        <p className="text-center text-slate-300">© 2025 Júlio Pattuzzo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}