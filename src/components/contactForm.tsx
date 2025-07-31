"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Show from "./flow/show";
import { MessageCircle, Send } from "lucide-react";
import { formAction } from '@/app/actions/sendMail';

const formSchema = z.object({
  name: z.string().nonempty("Nome obrigatório"),
  email: z.email("Email inválido"),
  subject: z.string().nonempty("Assunto obrigatório").min(5, "Assunto é muito curto"),
  message: z.string().nonempty("Mensagem obrigatória").min(10, "Mensagem é muito curta")
});

type FormSchema = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormSchema>({
    defaultValues: {
      name: '',
      email: '',
      subject: 'Oportunidade de Freelance ou Emprego',
      message: 'Olá! Gostaria de discutir uma possível oportunidade de freelance ou emprego com você.'
    },
    resolver: zodResolver(formSchema)
  });

  return (
    <form className="w-full flex flex-col gap-2 rounded-md p-4 bg-slate-900" onSubmit={handleSubmit(formAction)}>
      <div className="flex flex-col md:flex-row justify-between md:gap-4">
        <label className="md:w-1/2 flex flex-col gap-1">
          Nome
          <input className="rounded-md border-1 border-slate-600 p-2 bg-slate-800" type="text" placeholder="Nome" {...register("name")} />
          <Show when={Boolean(errors.name?.message)}>
            <p>{errors.name?.message}</p>
          </Show>
        </label>
        <label className="md:w-1/2 flex flex-col gap-1">
          Email
          <input className="rounded-md border-1 border-slate-600 p-2 bg-slate-800" type="text" placeholder="Email" {...register("email")} />
          <Show when={Boolean(errors.email?.message)}>
            <p>{errors.email?.message}</p>
          </Show>
        </label>
      </div>
      <label className="flex flex-col gap-1">
        Assunto
        <input className="rounded-md border-1 border-slate-600 p-2 bg-slate-800" type="text" placeholder="Assunto" {...register("subject")} />
        <Show when={Boolean(errors.subject?.message)}>
          <p>{errors.subject?.message}</p>
        </Show>
      </label>
      <label className="flex flex-col gap-1">
        Mensagem
        <textarea className="rounded-md border-1 border-slate-600 p-2 bg-slate-800" placeholder="Mensagem" rows={5} {...register("message")} />
        <Show when={Boolean(errors.message?.message)}>
          <p>{errors.message?.message}</p>
        </Show>
      </label>
      <button className="flex justify-center items-center gap-2 rounded-md p-2 bg-blue-600 hover:bg-blue-700" disabled={isSubmitting} type="submit">
        <Send/>
        Enviar Mensagem
      </button>
      <a className="flex justify-center items-center gap-2 rounded-md border-1 border-green-400 p-2 text-green-400 hover:text-black hover:bg-green-400" href="https://wa.me/5527997991592" target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        Conversar no Whatsapp
      </a>
    </form>
  )
}