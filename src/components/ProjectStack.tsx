"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// --- LOGO DO FIGMA (SVG Inline) ---
const FigmaLogo = () => (
  <svg
    width="100%"
    height="50"
    viewBox="0 0 400 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 500C0 444.772 44.772 400 100 400H200V500C200 555.228 155.228 600 100 600C44.772 600 0 555.228 0 500Z"
      fill="#24CB71"
    />
    <path
      d="M200 0V200H300C355.228 200 400 155.228 400 100C400 44.772 355.228 0 300 0H200Z"
      fill="#FF7237"
    />
    <path
      d="M299.167 400C354.395 400 399.167 355.228 399.167 300C399.167 244.772 354.395 200 299.167 200C243.939 200 199.167 244.772 199.167 300C199.167 355.228 243.939 400 299.167 400Z"
      fill="#00B6FF"
    />
    <path
      d="M0 100C0 155.228 44.772 200 100 200H200V0H100C44.772 0 0 44.772 0 100Z"
      fill="#FF3737"
    />
    <path
      d="M0 300C0 355.228 44.772 400 100 400H200V200H100C44.772 200 0 244.772 0 300Z"
      fill="#874FFF"
    />
  </svg>
);

// --- DADOS DOS PROJETOS ---
const projects = [
  {
    title: "MsgFlow",
    category: "SaaS • Automação",
    description:
      "Plataforma robusta de disparo em massa para WhatsApp. Meu maior projeto, focado em escala e estabilidade para marketing.",
    link: "https://msgflowapp.com.br/",
    color: "#25D366",
    image: "/projects/msgflow.png",
  },
  {
    title: "Conexão RH",
    category: "SaaS • Enterprise",
    description:
      "Sistema completo de Recrutamento e Seleção. Dashboard administrativo para gestão de candidatos e vagas.",
    link: "https://conexaorh.s4r41va.com/",
    color: "#0056D2",
    image: "/projects/conexaorh.png",
  },
  {
    title: "PrevFlow",
    category: "SaaS • Jurídico",
    description:
      "Ferramenta inteligente para análise de layout e cálculos previdenciários. Conta com sistema de trial e assinaturas.",
    link: "https://prevflow.com.br/",
    color: "#7C3AED",
    image: "/projects/prevflow.png",
  },
  {
    title: "Bem Casados",
    category: "Web App • Eventos",
    description:
      "Aplicação para gestão de listas de presentes e confirmação de presença. Focado na experiência mobile dos convidados.",
    link: "https://app-bem-casados.v1dvzt.easypanel.host/",
    color: "#EC4899",
    image: "/projects/bemcasados.png",
  },
  {
    title: "Lenovo LP",
    category: "Landing Page • Vendas",
    description:
      "Página de alta conversão para venda de fones Lenovo Think. Design focado em performance e copywriting.",
    link: "https://lenovothink.s4r41va.com/",
    color: "#E11D48",
    image: "/projects/lenovo.png",
  },
];

// --- DADOS DOS PROTÓTIPOS ---
const prototypes = [
  {
    title: "Protótipo site Conexão",
    link: "https://www.figma.com/proto/ENqMh334Znr4TJ9a8nIGYn/Prototipo-Home-Conexão?node-id=14-14&t=Bq4X102YAX8QI0ru-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Conceito Site Faca",
    link: "https://www.figma.com/proto/fpPtCptQzBgDAqZwl6IOld/Untitled?node-id=1-2",
  },
  {
    title: "UI Kit S4R41VA",
    link: "https://www.figma.com/proto/iK9m7fFCkGapmoDMeE1CTU/Untitled?node-id=19-26&t=U1Y0Q6rbJ1MbyMCq-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A2",
  },
];

export default function ProjectStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="bg-black text-white relative">
      {/* TÍTULO DA SEÇÃO */}
      <div className="pt-20 pb-10 px-4 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
          Projetos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Selecionados
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Uma coleção de aplicações SaaS, sistemas complexos e páginas de alta
          performance desenvolvidos com Next.js e tecnologias modernas.
        </p>
      </div>

      {/* STACK DE PROJETOS */}
      <div className="flex flex-col items-center gap-10 pb-40 px-4">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* SEÇÃO FIGMA / LAB */}
      <div className="container mx-auto px-6 py-24 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h3 className="text-3xl font-bold uppercase tracking-tight">
            Design Lab{" "}
            <span className="text-neutral-600 text-xl block md:inline md:ml-4">
              Protótipos & UI
            </span>
          </h3>
          <Link
            href="https://design.s4r41va.com/"
            target="_blank"
            className="mt-4 md:mt-0 text-sm border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Ver Portfolio Design Completo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prototypes.map((proto, i) => (
            <Link
              key={i}
              href={proto.link}
              target="_blank"
              className="group relative h-48 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-600 transition-colors"
            >
              <div className="absolute top-6 right-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* LOGO FIGMA ADICIONADO AQUI */}
                <FigmaLogo />
              </div>
              <span className="text-xs font-mono text-purple-400">
                FIGMA PROTO
              </span>
              <h4 className="text-2xl font-bold text-gray-300 group-hover:text-white leading-tight max-w-[80%]">
                {proto.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-white mt-auto">
                Ver Protótipo <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// SUB-COMPONENTE CARD
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({
  i,
  title,
  category,
  description,
  link,
  color,
  image,
  progress,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 w-full max-w-full"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex flex-col w-full md:w-[1200px] max-w-[95vw] h-[75vh] md:h-[650px] rounded-3xl p-6 md:p-10 origin-top border border-white/10 overflow-hidden bg-[#090909]"
      >
        <div className="relative z-10 flex flex-col md:flex-row h-full gap-8 md:gap-12">
          {/* Coluna de Texto */}
          <div className="w-full md:w-[35%] flex flex-col justify-center pt-2 md:pl-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-3 h-3 rounded-full shadow-[0_0_10px]"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}`,
                  }}
                ></span>
                <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                  {category}
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                {title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <Link
              href={link}
              target="_blank"
              className="inline-flex items-center gap-2 text-white font-medium group mt-10 md:mt-12 w-fit px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              <span>Visitar Projeto</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Coluna da Imagem (CORRIGIDA: Aspect Ratio de Monitor) */}
          <div className="w-full md:w-[65%] h-full flex items-center justify-center relative">
            <div className="w-full relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl group">
              {/* Header do Navegador */}
              <div className="h-8 w-full bg-[#1a1a1a] flex items-center px-4 gap-2 border-b border-white/5 absolute top-0 z-20">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>

              {/* TRUQUE PARA NÃO CORTAR: aspect-video 
                  Isso força o container a ter o formato 16:9, igual a um monitor.
              */}
              <div className="w-full aspect-video mt-8 relative bg-black">
                <motion.div
                  style={{ scale: imageScale }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    // 'object-cover' + 'aspect-video' = preenchimento perfeito sem distorção
                    // 'object-top' = foca no início do site
                    className="object-cover object-top hover:object-center transition-all duration-[2s] ease-in-out"
                    sizes="(max-width: 1200px) 100vw, 800px"
                    priority={i === 0} // Carrega a primeira imagem mais rápido
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
