/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { ReactLenis } from "@/utils/lenis"; 

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Portfolio Design",
  description: "Uma jornada visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* AQUI ESTÁ A CORREÇÃO: */}
        <ReactLenis root>
          
          {children as any}
        </ReactLenis>
      </body>
    </html>
  );
}