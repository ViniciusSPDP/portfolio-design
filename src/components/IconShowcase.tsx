// src/components/IconShowcase.tsx
'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  { 
    id: 1, 
    src: "/icons/4.png", //
    title: "S4R41VA", 
    category: "Personal Branding", 
    desc: "Identidade visual própria.",
    // Removi as cores específicas pois a imagem vai cobrir tudo
  },
  { 
    id: 2, 
    src: "/icons/2.png", //
    title: "PrevFlow", 
    category: "SaaS Logo Concept", 
    desc: "Fusão tipográfica entre 'P' e 'F'.",
  },
  { 
    id: 3, 
    src: "/icons/3.png", //
    title: "MsgFlow", 
    category: "Automação & SaaS", 
    desc: "Identidade para plataforma de mensagens.",
  },
  { 
    id: 4, 
    src: "/icons/1.png", //
    title: "App Flutter", 
    category: "Mobile UI • FATEC", 
    desc: "Projeto acadêmico de carrinho de compras.",
  },
];

export default function IconShowcase() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            Logofolio <span className="text-neutral-600">&</span> UI
          </h2>
          <p className="text-gray-400">Símbolos criados para marcas e interfaces digitais.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {icons.map((icon, index) => (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-87.5 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer shadow-xl hover:shadow-2xl hover:border-white/30 transition-all duration-500"
            >
              
              {/* CAMADA DA IMAGEM (Agora ocupa tudo: inset-0) */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={icon.src}
                  alt={icon.title}
                  fill
                  // 'object-cover' faz a imagem cobrir o card inteiro, cortando sobras se necessário
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY ESCURO (Gradiente) */}
              {/* Essencial para ler o texto branco em cima de logos brancos (como o do carrinho) */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

              {/* CONTEÚDO DE TEXTO */}
              <div className="absolute bottom-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-2xl uppercase drop-shadow-md">{icon.title}</h3>
                <p className="text-xs text-yellow-500 uppercase tracking-widest mt-1 font-bold mb-2">{icon.category}</p>
                
                {/* A descrição aparece suavemente no hover */}
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                   <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-white/20 pt-2 mt-2">
                     {icon.desc}
                   </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}