import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import nodemailer from 'nodemailer';
import { getSecret } from 'astro:env/server';

export const server = {
  sendEmail: defineAction({
    input: z.object({
      name: z.string().nonempty("Name required"),
      email: z.string().email("Invalid email"),
      subject: z.string().nonempty("Subject required"),
      message: z.string().nonempty("Message required")
    }),
    handler: async ({ name, email, subject, message }) => {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: getSecret('MAILER_EMAIL'),
          pass: getSecret('MAILER_PASSWORD'),
        },
      });

      try {
        await transporter.sendMail({
          from: email,
          to: 'pattuzzo@protonmail.com',
          subject: subject,
          text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
        });
      } catch (error) {
        throw new ActionError({code: "INTERNAL_SERVER_ERROR", message: "Internal Server Error"})
      }
    }
  })
}