import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Show from "@/components/flow/show";
import { LoaderCircle, MessageCircle, Send } from "lucide-react";
import Input from "./input";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  
  const formSchema = z.object({
    name: z.string().nonempty(t("home:contact.form.fields.name.error")),
    email: z.string().email(t("home:contact.form.fields.email.error")),
    subject: z.string().nonempty(t("home:contact.form.fields.subject.error")),
    message: z.string().nonempty(t("home:contact.form.fields.message.error"))
  });
  
  type FormSchema = z.infer<typeof formSchema>;
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormSchema>({
    defaultValues: {
      name: '',
      email: '',
      subject: t("home:contact.form.fields.subject.default"),
      message: t("home:contact.form.fields.message.default")
    },
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(data: any) {
    try {
      const response = await fetch("/mail.json", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error();
      } 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="w-full flex flex-col gap-2 rounded-md p-4 bg-slate-900" action="/mail" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row justify-between md:gap-4">
        <label className="md:w-1/2 flex flex-col gap-1">
          {t("home:contact.form.fields.name.label")}
          <Input placeholder={t("home:contact.form.fields.name.label")} {...register("name")} />
          <Show when={Boolean(errors.name?.message)}>
            <p className="text-red-400">{errors.name?.message}</p>
          </Show>
        </label>
        <label className="md:w-1/2 flex flex-col gap-1">
          {t("home:contact.form.fields.email.label")}
          <Input placeholder={t("home:contact.form.fields.email.label")} {...register("email")} />
          <Show when={Boolean(errors.email?.message)}>
            <p className="text-red-400">{errors.email?.message}</p>
          </Show>
        </label>
      </div>
      <label className="flex flex-col gap-1">
        {t("home:contact.form.fields.subject.label")}
        <Input placeholder={t("home:contact.form.fields.subject.label")} {...register("subject")} />
        <Show when={Boolean(errors.subject?.message)}>
          <p className="text-red-400">{errors.subject?.message}</p>
        </Show>
      </label>
      <label className="flex flex-col gap-1">
        {t("home:contact.form.fields.message.label")}
        <textarea className="rounded-md border-1 border-slate-600 p-2 bg-slate-800" placeholder={t("home:contact.form.fields.message.label")} rows={5} {...register("message")} />
        <Show when={Boolean(errors.message?.message)}>
          <p className="text-red-400">{errors.message?.message}</p>
        </Show>
      </label>
      <button className="flex justify-center items-center gap-2 rounded-md p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600" disabled={isSubmitting} type="submit">
        <Show when={isSubmitting} fallback={<><Send/>{t("home:contact.form.send")}</>}>
          <LoaderCircle className="animate-spin" />
        </Show>
      </button>
      <a className="flex justify-center items-center gap-2 rounded-md border-1 border-green-400 p-2 text-green-400 hover:text-black hover:bg-green-400" href="https://wa.me/5527997991592" target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        {t("home:contact.form.whatsapp")}
      </a>
    </form>
  )
}