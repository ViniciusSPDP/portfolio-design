import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Vamos usar uma fonte clean
import "./globals.css";
import { ReactLenis } from "@/utils/lenis"; // Vamos criar esse utilitário já já

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
        {/* Envolvemos tudo no Smooth Scroll */}
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}