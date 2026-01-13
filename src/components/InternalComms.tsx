// src/components/InternalComms.tsx
'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const notices = [
  { 
    src: "/social/Recado Reuniao.png", 
    title: "Reunião de Alinhamento", 
    desc: "Janeiro: Estratégia de Início de Ano"
  },
  { 
    src: "/social/Recado.jpg", 
    title: "Encontro Oficial", 
    desc: "Cronograma de Sexta e Sábado"
  },
];

export default function InternalComms() {
  return (
    <section className="py-24 bg-neutral-950 text-white relative z-10">
      
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
              Endomarketing <br/> <span className="text-neutral-500">& Comunicados</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm md:text-base uppercase tracking-widest text-right">
            Design informativo para alinhar <br/> times e engajar colaboradores.
          </p>
        </div>

        {/* Grid de Posters (Apenas 2 itens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-6"
            >
              {/* Moldura do Poster */}
              <div 
                className="relative w-full h-150 md:h-200 bg-neutral-900 rounded-lg overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-white/5"
              >
                <Image
                  src={notice.src}
                  alt={notice.title}
                  fill
                  // 'object-contain' é vital aqui para ler os horários e datas sem cortar
                  className="object-contain p-2 md:p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay sutil apenas para dar brilho no hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Legenda */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold uppercase text-white group-hover:text-yellow-500 transition-colors">
                  {notice.title}
                </h3>
                <p className="text-gray-500 mt-2 font-mono text-sm">
                  {notice.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}