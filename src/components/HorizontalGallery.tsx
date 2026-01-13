// src/components/HorizontalGallery.tsx
'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Lista atualizada com seus banners de E-commerce
const images = [
  { src: "/banners/17.png", title: "Verão de Ofertas" },
  { src: "/banners/18.png", title: "Impala (Im)previsível" },
  { src: "/banners/19(2).png", title: "Linha Cereja Labotrat" },
  { src: "/banners/21 (2).png", title: "Stitch Impala Infantil" },
  { src: "/banners/24 (2).png", title: "Arraiá de Ofertas" },
  { src: "/banners/25 (2).png", title: "Definição Natural" },
  { src: "/banners/27.png", title: "Promoção 7.7" },
  { src: "/banners/28.png", title: "Oferta de Temporada" },
  { src: "/banners/29 (2).png", title: "Dia dos Pais" },
  { src: "/banners/Dia Dos Namorados.png", title: "Dia dos Namorados" },
];

export default function HorizontalGallery() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Ajustei o scroll horizontal para lidar com mais itens (vai até -90% agora)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    // Aumentei a altura para 400vh para dar mais tempo de rolagem já que temos muitas imagens
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-900">
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-12 pl-10 md:pl-20">
          
          {/* Título da Seção com o Dado de Impacto */}
          <div className="flex flex-col justify-center min-w-[40vw] md:min-w-[30vw] text-white z-10 pr-10">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight uppercase text-yellow-500">
              Impacto <br/> Real
            </h2>
            <div className="mt-8 border-l-4 border-white pl-6">
              <p className="text-4xl font-bold text-white">+90%</p>
              <p className="text-lg text-gray-400 uppercase tracking-widest">
                Crescimento de Faturamento
              </p>
            </div>
            <p className="mt-6 text-lg text-gray-300 max-w-sm">
              Banners de alta conversão criados estrategicamente para campanhas de e-commerce.
            </p>
          </div>

          {/* Renderiza as imagens */}
          {images.map((img, index) => (
            // Mudei o aspect ratio do container para ser mais "Wide" (cinema)
            // h-[50vh] e w-[80vw] garante que o banner tenha espaço lateral
            <div key={index} className="relative h-[40vh] md:h-[50vh] w-[85vw] md:w-[65vw] overflow-hidden rounded-2xl bg-black border border-neutral-800 shadow-2xl shrink-0 flex items-center justify-center group">
               
               {/* Efeito de hover na imagem */}
               <motion.div 
                 className="w-full h-full relative"
                 whileHover={{ scale: 1.02 }}
                 transition={{ duration: 0.5 }}
               >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    // MUDEI AQUI: object-contain garante que a imagem NUNCA seja cortada
                    className="object-contain p-2 md:p-4" 
                    sizes="(max-width: 768px) 90vw, 65vw"
                  />
               </motion.div>
               
               {/* Legenda (agora aparece só no hover para não poluir o banner) */}
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                 <h3 className="text-2xl md:text-4xl font-bold text-white uppercase text-center px-4">{img.title}</h3>
                 <p className="text-yellow-400 mt-2 font-mono">Case de Sucesso</p>
               </div>

               {/* Número do Slide discreto no canto */}
               <div className="absolute bottom-4 right-6 text-neutral-600 font-mono text-sm">
                 {String(index + 1).padStart(2, '0')} / {images.length}
               </div>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}