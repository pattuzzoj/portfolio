'use server';
import nodemailer from 'nodemailer';

interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendMail({ name, email, subject, message }: EmailForm) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env['MAILER_EMAIL'],
      pass: process.env['MAILER_PASSWORD'],
    },
  });

  await transporter.sendMail({
    from: email,
    to: 'pattuzzo@protonmail.com',
    subject: subject,
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  });

  return { ok: true };
}

export async function formAction(data: EmailForm) {
  await sendMail(data);
}

