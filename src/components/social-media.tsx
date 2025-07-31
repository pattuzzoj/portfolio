import Github from "@/assets/icons/GitHub.svg";
import Linkedin from "@/assets/icons/linkedin.svg";

export default function SocialMedia() {
  return (
    <nav aria-label="redes sociais" className="flex items-center gap-2">
      <a className="group flex items-center justify-center rounded-md p-2 hover:bg-slate-800" href="https://github.com/pattuzzoj">
        <Github className="group-hover:fill-white"/>
      </a>
      <a className="group flex items-center justify-center rounded-md p-2 hover:bg-slate-800" href="https://www.linkedin.com/in/patrick-eduardo-oliveira-junior-3a7323198/">
        <Linkedin className="group-hover:fill-blue-500"/>
      </a>
    </nav>
  );
}