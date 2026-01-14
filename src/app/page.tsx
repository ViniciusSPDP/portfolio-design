// src/app/page.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HorizontalGallery from "@/components/HorizontalGallery";
import ZoomShowcase from "@/components/ZoomShowcase"; // Novo
import DocumentList from "@/components/DocumentList"; // Novo
import SocialFeed from "@/components/SocialFeed";
import InternalComms from "@/components/InternalComms";
import IconShowcase from "@/components/IconShowcase";
import VerticalCatalog from "@/components/VerticalCatalog";
import AnimatedLogo from "@/components/AnimatedLogo";
import ProjectStack from "@/components/ProjectStack";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-neutral-950">
      {" "}
      {/* Fundo Geral Preto */}
      {/* 1. HERO SECTION */}
      <section
        ref={container}
        className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black"
      >
        {/* --- INICIO DO BACKGROUND NOVO --- */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Bola de luz roxa/azul movendo */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[120px]"
          />

          {/* Bola de luz ciano movendo no lado oposto */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              x: [-50, 50, -50],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px]"
          />

          {/* Textura de Granulação (Noise) para dar ar de cinema */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        {/* --- FIM DO BACKGROUND NOVO --- */}

        {/* O Texto continua o mesmo, mas agora brilha mais no fundo escuro */}
        <motion.div
          style={{ opacity }}
          className="z-10 relative text-center px-4 w-full"
        >
          {/* LOGO ANIMADO NOVO (S4R41VA) */}
          <AnimatedLogo />

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.8, ease: "easeOut" }} // Delay ajustado para aparecer logo depois do logo
            className="text-[12vw] font-bold tracking-tighter leading-none text-white mix-blend-difference uppercase"
          >
            Design
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
            className="text-xl md:text-3xl font-light tracking-widest mt-4 uppercase text-gray-400"
          >
            Vinicius Saraiva
          </motion.p>
        </motion.div>

        <div className="absolute bottom-10 text-white/30 text-xs uppercase tracking-[0.2em] animate-bounce">
          Role para descobrir
        </div>
      </section>
      <ProjectStack />
      {/* 2. GALERIA HORIZONTAL (Cases Wide) */}
      <HorizontalGallery />
      <IconShowcase />
      {/* 3. SHOWCASE ZOOM (Detalhes 4K) */}
      <ZoomShowcase />
      <SocialFeed />
      <InternalComms />
      <VerticalCatalog />
      {/* 4. LISTA DE DOCUMENTOS (PDFs) */}
      <DocumentList />
      {/* 5. SEÇÃO DE CONTATO */}
      <ContactSection />
    </main>
  );
}
