import { Mail, MapPin } from "lucide-react";
import Linkedin from "@/assets/icons/linkedin.svg";
import CardContact from "../card/card-contact";
import ContactForm from "../contactForm";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8">
      <div className="w-full lg:w-1/2 lg:max-w-xl flex flex-col justify-between gap-8">
        <div className="flex flex-col max-md:items-center gap-8">
          <h3 className="hidden lg:block">Informações de Contato</h3>
          <CardContact
            title="Email"
            content="pattuzzo@proton.me"
            icon={<Mail className="text-blue-400" />}
          />
          <CardContact
            title="Linkedin"
            content="https://www.linkedin.com/in/pattuzzoj"
            icon={<Linkedin className="text-blue-400" />}
          />
          <CardContact
            title="Localização"
            content="Vitória, ES"
            icon={<MapPin className="text-blue-400" />}
          />
        </div>
        <div className="w-full text-center rounded-md p-6 space-y-4 bg-slate-800">
          <h4>Disponível para Freelance</h4>
          <p>Vamos criar algo incrível juntos!</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:max-w-xl">
        <ContactForm />
      </div>
    </div>
  )
}