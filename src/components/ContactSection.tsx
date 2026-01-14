'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, ReactNode } from "react";

// 1. DEFINIMOS O TIPO DOS DADOS
type SocialItem = {
  name: string;
  handle: string;
  link: string;
  color: string;
  icon: ReactNode; // O tipo correto para SVGs/Elementos React
};

const socials: SocialItem[] = [
  {
    name: "LinkedIn",
    handle: "@vinicius-saraiva",
    link: "https://www.linkedin.com/in/vinicius-saraiva-55255a199/",
    color: "#0077b5",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "@ViniciusSPDP",
    link: "https://github.com/ViniciusSPDP",
    color: "#6e5494",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+55 (17) 99612-1774",
    link: "https://wa.me/5517996121774?text=Ol%C3%A1%20Vinicius%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar!",
    color: "#25D366",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@_s4r41va",
    link: "https://www.instagram.com/_s4r41va/",
    color: "#E1306C",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 border-t border-white/10 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-125 bg-neutral-900/50 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
            Vamos <span className="text-neutral-500">Conversar?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Disponível para projetos freelance e consultoria em automação e desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {socials.map((social, i) => (
            <SocialCard key={i} data={social} index={i} />
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-sm uppercase tracking-widest pt-8 border-t border-white/5">
          <p>© 2026 S4R41VA. Todos os direitos reservados.</p>
          <p>Feito com Next.js & Paixão</p>
        </div>

      </div>
    </section>
  );
}

// 2. APLICAMOS O TIPO CORRETO AQUI
function SocialCard({ data, index }: { data: SocialItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link 
        href={data.link}
        target="_blank"
        className="group relative flex items-center justify-between p-8 h-32 md:h-40 w-full bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-transparent transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
          style={{ backgroundColor: data.color }}
        />

        <div className="relative z-10 flex items-center gap-6">
          <div className={`p-4 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300`}>
            {data.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">{data.name}</h3>
            <p className="text-sm text-neutral-400 group-hover:text-white/80 font-mono mt-1">{data.handle}</p>
          </div>
        </div>

        <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </Link>
    </motion.div>
  );
}