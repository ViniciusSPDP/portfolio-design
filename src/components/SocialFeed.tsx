// src/components/SocialFeed.tsx
'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  { src: "/social/Janeiro.jpg", alt: "Saldão Condor" },
  { src: "/social/30.jpg", alt: "Inoar 30% OFF" }, // Verifique se o nome do arquivo na pasta é 30%.jpg ou 30.jpg
  { src: "/social/1.jpg", alt: "Novex Entrega" },
  { src: "/social/2.jpg", alt: "Arraiá DaBelle" },
  { src: "/social/3.jpg", alt: "Salon Line Promo" },
];

// Duplicamos a lista para criar o loop infinito
const repeatedPosts = [...posts, ...posts, ...posts, ...posts];

export default function SocialFeed() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden relative border-y border-white/5">
      
      {/* Título da Seção */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
          Social Media <span className="text-yellow-500">&</span> Varejo
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Artes de alta performance para Feed e Stories. Foco em leitura rápida e conversão imediata.
        </p>
      </div>

      {/* Sombras laterais (Fade) */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-linear-to-r from-neutral-900 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-linear-to-l from-neutral-900 to-transparent z-10" />

      {/* --- FILEIRA 1 (Move para a ESQUERDA) --- */}
      <div className="flex mb-12">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, // Um pouco mais suave para dar tempo de ler
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {repeatedPosts.map((post, index) => (
            <div 
              key={`row1-${index}`} 
              // AQUI ESTÁ A CORREÇÃO:
              // Mudamos de quadrado (300x300) para Retângulo Wide (500x280)
              className="relative w-75 md:w-125 h-45 md:h-70 shrink-0 rounded-xl overflow-hidden border border-white/10 group cursor-pointer bg-black"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                // object-contain garante que o banner apareça INTEIRO, sem cortar texto
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- FILEIRA 2 (Move para a DIREITA) --- */}
      <div className="flex">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 35, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {repeatedPosts.map((post, index) => (
            <div 
              key={`row2-${index}`} 
              // Mesma correção de tamanho aqui
              className="relative w-75 md:w-125 h-45 md:h-70 shrink-0 rounded-xl overflow-hidden border border-white/10 group cursor-pointer bg-black grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-contain" // Garante leitura total
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}