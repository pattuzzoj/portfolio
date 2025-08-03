import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import Header from "@/components/view/layout/header";
import Footer from "@/components/view/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Júlio Pattuzzo - Portfólio",
  description: "Desenvolvedor web apaixonado por criar experiências digitais inovadoras e funcionais. Confira meus projetos e habilidades.",
  authors: { name: "Júlio Pattuzzo" },
  robots: { index: true, follow: true },
  keywords: [
    "Desenvolvedor Full Stack",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "Desenvolvimento Web",
    "Desenvolvimento Frontend",
    "Desenvolvimento Backend",
    "Engenharia de Software",
    "API REST",
    "Banco de Dados",
    "SQL",
    "NoSQL",
    "Git",
    "DevOps",
    "Design Responsivo",
    "UI/UX",
    "Portfólio",
    "Desenvolvedor"
  ],
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 flex flex-col gap-16 md:gap-32`}>
        <Header />
        <main className="flex flex-col gap-32 mt-16 md:mt-24 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
