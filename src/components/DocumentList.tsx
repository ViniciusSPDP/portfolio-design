// src/components/DocumentList.tsx
'use client';

const docs = [
  { title: "Catálogo Natural Mix", year: "2024", file: "/docs/NATURAL MIX.pdf", type: "Editorial" },
  { title: "Campanha Fenzza", year: "2023", file: "/docs/Fenzza.pdf", type: "Comercial" },
  { title: "Coleção de Natal", year: "2023", file: "/docs/Catalogo Natal.pdf", type: "Lookbook" },
];

export default function DocumentList() {
  return (
    <section className="py-32 bg-white text-black rounded-t-[3rem] -mt-10 relative z-10">
      <div className="container mx-auto px-6 md:px-20">
        
        <div className="flex justify-between items-end mb-20 border-b border-black/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Arquivo
          </h2>
          <p className="text-right text-sm uppercase tracking-widest hidden md:block">
            Selecione para visualizar<br/>o PDF completo
          </p>
        </div>

        <div className="flex flex-col">
          {docs.map((doc, index) => (
            <a 
              key={index}
              href={doc.file}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-12 border-b border-black/10 hover:border-black transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-8 md:gap-20">
                <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase group-hover:translate-x-4 transition-transform duration-300">
                    {doc.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 block md:hidden">
                    {doc.type} — {doc.year}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-20">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-bold uppercase">{doc.type}</p>
                  <p className="text-xs text-gray-500">{doc.year}</p>
                </div>
                
                {/* Ícone de Seta Animado */}
                <div className="bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <line x1="7" y1="17" x2="17" y2="7"></line>
                     <polyline points="7 7 17 7 17 17"></polyline>
                   </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-32 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-400">Design Portfolio © 2024</p>
            <h1 className="text-[15vw] leading-none font-bold text-black/5 mt-10 select-none">
              SARAIVA
            </h1>
        </div>

      </div>
    </section>
  );
}