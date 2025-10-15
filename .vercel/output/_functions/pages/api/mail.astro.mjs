import nodemailer from 'nodemailer';
import { g as getEnv$1, s as setOnSetGetEnv } from '../../chunks/runtime_1tkDUGik.mjs';
export { renderers } from '../../renderers.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const getSecret = (key) => {
	return getEnv(key);
};

setOnSetGetEnv(() => {
	
});

const POST = async ({ request }) => {
  const body = await request.json();
  const { name, email, subject, message } = body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: getSecret("MAILER_EMAIL"),
      pass: getSecret("MAILER_PASSWORD")
    }
  });
  try {
    await transporter.sendMail({
      from: email,
      to: "pattuzzo@protonmail.com",
      subject,
      text: `Nome: ${name}
Email: ${email}
Mensagem: ${message}`
    });
    return new Response(
      null,
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(
      String(error),
      {
        status: 500
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
