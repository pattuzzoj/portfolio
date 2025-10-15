export const prerender = false;

import nodemailer from 'nodemailer';
import { getSecret } from 'astro:env/server';
import type { APIRoute } from 'astro';

interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const POST: APIRoute = async({ request }) => {
  const body = await request.json();
  const { name, email, subject, message } = body as EmailForm;

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
    return new Response(null, 
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(String(error), 
      {
        status: 500
      }
    );
  }
}