import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Desenvolvedor web apaixonado por criar experiências digitais inovadoras e funcionais. Confira meus projetos e habilidades.",
  authors: { name: "Júlio" },
  robots: { index: true, follow: true },
  keywords: []
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
        <main className="flex flex-col gap-32 mt-32 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
