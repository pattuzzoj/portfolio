import nodemailer from 'nodemailer';
import { getSecret } from 'astro:env/server';

interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST({ request }: { request: Request } ) {
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
    return new Response(null, 
      {
        status: 500
      }
    );
  }
}