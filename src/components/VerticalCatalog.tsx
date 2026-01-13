// src/components/VerticalCatalog.tsx
'use client';
import { motion } from "framer-motion";
import Image from "next/image";

// Mantendo as mesmas imagens que você já separou (Mix e Pais)
// COLUNA 1
const col1 = [
  "/editorial/mix/3.png", "/editorial/mix/5.png", "/editorial/mix/7.png", 
  "/editorial/mix/8.png", "/editorial/mix/9.png", "/editorial/mix/10.png",
  "/editorial/pais/1.png", "/editorial/pais/3.png", "/editorial/pais/5.png",
  "/editorial/mix/25.png", "/editorial/mix/26.png"
];

// COLUNA 2
const col2 = [
  "/editorial/mix/11.png", "/editorial/mix/12.png", "/editorial/mix/13.png",
  "/editorial/mix/14.png", "/editorial/mix/15.png", "/editorial/mix/16.png",
  "/editorial/pais/7.png", "/editorial/pais/9.png", "/editorial/pais/11.png",
  "/editorial/pais/14.png", "/editorial/pais/17.png"
];

// COLUNA 3
const col3 = [
  "/editorial/mix/17.png", "/editorial/mix/18.png", "/editorial/mix/19.png",
  "/editorial/mix/20.png", "/editorial/mix/21.png", "/editorial/mix/22.png",
  "/editorial/pais/19.png", "/editorial/pais/20.png", "/editorial/pais/21.png",
  "/editorial/pais/22.png", "/editorial/pais/23.png", "/editorial/pais/24.png"
];

export default function VerticalCatalog() {
  return (
    <section className="relative h-[120vh] bg-neutral-950 overflow-hidden flex flex-col justify-center border-t border-white/10">
      
      {/* --- ALTERAÇÃO AQUI: Título Focado em IA --- */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="text-center bg-black/70 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl max-w-3xl mx-4">
          
          {/* Badge brilhante */}
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur text-purple-300 text-xs font-mono tracking-widest uppercase">
            Generative AI • Midjourney • Stable Diffusion
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none">
            Inteligência <br/> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400">
              Artificial
            </span>
          </h2>
          
          <p className="text-gray-300 mt-6 text-lg font-light leading-relaxed">
            Todas as imagens de fundo e modelos humanos destes catálogos foram <strong className="text-white">geradas por IA</strong>. 
            <br className="hidden md:block"/>
            Do zero à realidade, sem necessidade de estúdio fotográfico.
          </p>
        </div>
      </div>

      {/* Gradientes (Fade) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-neutral-950 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-neutral-950 to-transparent z-10" />

      {/* Grid de Colunas (Imagens) */}
      {/* Adicionei 'mix-blend-overlay' ou opacidade se quiser que o fundo fique mais discreto, mas deixei normal para verem a qualidade */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 px-4 md:px-20 h-[150%] -mt-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
        
        <ParallaxColumn images={col1} duration={60} />
        <ParallaxColumn images={col2} duration={45} />
        <ParallaxColumn images={col3} duration={70} />
        
      </div>

    </section>
  );
}

// Sub-componente de Animação (Mantido igual, pois funciona bem)
function ParallaxColumn({ images, duration }: { images: string[], duration: number }) {
  const infiniteImages = [...images, ...images, ...images]; 

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        animate={{ y: ["0%", "-33.33%"] }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex flex-col gap-6"
      >
        {infiniteImages.map((src, idx) => (
          <div key={idx} className="relative w-full aspect-[1/1.4] rounded-lg overflow-hidden border border-white/5 bg-neutral-900 shadow-2xl">
            <Image
              src={src}
              alt="AI Generated Page"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}