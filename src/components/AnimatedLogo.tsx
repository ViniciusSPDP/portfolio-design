// src/components/AnimatedLogo.tsx
'use client';
import { motion } from "framer-motion";
// O caminho que você forneceu no seu código
import S4Logo from "../../public/icons/S4Logo"; 

export default function AnimatedLogo() {
  return (
    <div className="w-full max-w-75 md:max-w-150 lg:max-w-200 mx-auto mb-4 md:mb-8 px-4 perspective-1000">
      <motion.div
        // 1. ESTADO INICIAL (Escondido, deslocado e borrado)
        initial={{ 
          clipPath: "inset(0 100% 0 0)",
          x: -50,                        
          filter: "blur(20px)",          
          opacity: 0 
        }}
        
        // 2. ANIMAÇÃO DE ENTRADA (Revela, centraliza e foca)
        animate={{ 
          clipPath: "inset(0 0% 0 0)",
          x: 0, 
          filter: "blur(0px)",
          opacity: 1 
        }}
        
        // 3. CONFIGURAÇÃO DO TEMPO (Suave cinematográfico)
        transition={{ 
          duration: 1.8, 
          ease: [0.22, 1, 0.36, 1], 
          delay: 0.5 
        }}
        
        className="relative z-10"
      >
        
        {/* 4. ANIMAÇÃO DE FLUTUAÇÃO (Sobe e desce levemente) */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          {/* Removi o drop-shadow daqui */}
          <S4Logo className="w-full h-auto" />
        </motion.div>

      </motion.div>
    </div>
  );
}