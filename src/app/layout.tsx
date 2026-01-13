/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { ReactLenis } from "@/utils/lenis"; 

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600"] });

// Configuração de Viewport separada (padrão do Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // O URL base é essencial para as imagens do WhatsApp funcionarem
  // Troque pelo seu domínio final, ex: https://vinicius-design.com
  metadataBase: new URL("https://design.s4r41va.com"), 

  title: {
    default: "S4R41VA | Design & Tecnologia",
    template: "%s | S4R41VA"
  },
  description: "Portfolio de Vinicius Saraiva. Design estratégico, desenvolvimento Fullstack e automação de marketing. Transformando ideias em experiências digitais.",
  
  keywords: ["Design", "Next.js", "Desenvolvedor", "Automação", "Vinicius Saraiva", "S4R41VA", "Portfolio"],
  authors: [{ name: "Vinicius Saraiva" }],
  creator: "Vinicius Saraiva",

  // Configuração para WhatsApp, LinkedIn, Facebook
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "S4R41VA | Design & Tecnologia",
    description: "Visual de alto impacto e tecnologia de ponta. Confira os projetos de Vinicius Saraiva.",
    siteName: "S4R41VA Portfolio",
    // O Next.js busca automaticamente a imagem se você seguir o passo 2 abaixo
  },

  // Configuração para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "S4R41VA | Design & Tecnologia",
    description: "Design estratégico e desenvolvimento Next.js.",
    creator: "@s4r41va", // Se tiver twitter
  },

  icons: {
    icon: "/icon.svg", // Aquele favicon que fizemos
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-white selection:text-black`}>
        <ReactLenis root>
          {children as any}
        </ReactLenis>
      </body>
    </html>
  );
}