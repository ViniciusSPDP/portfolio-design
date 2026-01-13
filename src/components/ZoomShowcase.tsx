// src/components/ZoomShowcase.tsx
'use client';
import { useState, useRef } from "react";
import Image from "next/image";

// 1. AQUI CRIAMOS A DEFINIÇÃO DO TIPO
type CatalogItem = {
  src: string;
  title: string;
  desc: string;
};

const catalogs: CatalogItem[] = [
  { src: "/showcase/19.png", title: "Natal Mágico", desc: "Capa do catálogo de Dezembro 2024. Foco em presentes e celebração natalina." },
  { src: "/showcase/21.png", title: "Ano Novo", desc: "Janeiro 2025. Estética clean e renovadora para iniciar o ciclo de vendas." },
  { src: "/showcase/22.png", title: "Vibe Anos 80", desc: "Fevereiro. Uma viagem retrô com cores neon e tipografia nostálgica." },
  { src: "/showcase/23.png", title: "Mulher & IA", desc: "Conceito futurista: Mulher gerada por Inteligência Artificial remetendo aos 25 anos da marca." },
  { src: "/showcase/24.png", title: "Dia da Mulher", desc: "Edição Especial. Homenagem à força e elegância feminina." },
  { src: "/showcase/25.png", title: "Floral Roxo", desc: "Abril. Composição artística com flores e perfumes em tons de roxo profundo." },
  { src: "/showcase/29.png", title: "Dia das Mães", desc: "Maio. A delicadeza e o amor materno traduzidos em design visual." },
  { src: "/showcase/JUNHO.png", title: "Dia dos Namorados", desc: "Junho. Romantismo e sugestões de presentes para casais." },
  { src: "/showcase/34.png", title: "Festa Junina", desc: "Junho. Elementos típicos brasileiros com uma roupagem moderna de design." },
  { src: "/showcase/35.png", title: "Black Edition IA", desc: "Julho. Casal gerado por IA em tons pretos, transmitindo luxo e sofisticação." },
  { src: "/showcase/36.png", title: "Dia dos Pais", desc: "Agosto. Sobriedade e elegância para a campanha masculina." },
];

export default function ZoomShowcase() {
  return (
    <section className="py-20 md:py-32 bg-neutral-950 text-white">
      <div className="container mx-auto px-6 md:px-20 mb-20">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
          Catálogos <span className="text-neutral-600">Comerciais</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Capas desenvolvidas estrategicamente para apoiar a força de vendas. 
          Passe o mouse para ver os detalhes da arte em alta resolução (4000x3000px).
        </p>
      </div>

      <div className="flex flex-col gap-24 md:gap-40">
        {catalogs.map((item, i) => (
          <ZoomItem key={i} item={item} alignRight={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

// 2. AQUI SUBSTITUÍMOS 'any' POR 'CatalogItem'
function ZoomItem({ item, alignRight }: { item: CatalogItem, alignRight: boolean }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 px-4 md:px-20 ${alignRight ? 'md:flex-row-reverse' : ''}`}>
      
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-bold uppercase leading-none">{item.title}</h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          {item.desc}
        </p>
        <div className={`h-px w-20 bg-neutral-700 mt-6 hidden md:block ${alignRight ? 'ml-auto' : ''}`} />
      </div>

      <div className="flex-[1.5] w-full max-w-4xl">
        <div 
          ref={ref}
          onMouseMove={handleMouseMove}
          // Corrigi também o 'aspect-4/3' para 'aspect-[4/3]' para o Tailwind entender direito
          className="relative w-full aspect-4/3 overflow-hidden rounded-xl cursor-crosshair group bg-neutral-900 border border-neutral-800 shadow-2xl"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain transition-opacity duration-500 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          
          <div 
            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: '200%',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase rounded-full text-white pointer-events-none border border-white/10">
            Zoom 4K
          </div>
        </div>
      </div>

    </div>
  );
}