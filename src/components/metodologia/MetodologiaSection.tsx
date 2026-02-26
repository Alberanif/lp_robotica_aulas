"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useInView, AnimatePresence, motion } from 'framer-motion';

/**
 * TIPOS
 */
type BalloonData = {
  id: number;
  label: string;
  color: string;
  description: string;
  gridPosDesktop: { left: string; top: string };
  gridPosMobile: { left: string; top: string };
  orbitPos: { left: string; top: string };
  animClass: string;
};

/**
 * DADOS: Configuração dos Balões de Aprendizado
 */
const balloonsData: BalloonData[] = [
  {
    id: 1,
    label: "Starter",
    color: "#01a1e1", // Azul
    description: "Os primeiros contatos com a montagem dos projetos e conceitos básicos da programação utilizando blocos.",
    gridPosDesktop: { left: '15%', top: '80%' },
    gridPosMobile: { left: '20%', top: '85%' },
    orbitPos: { left: '20%', top: '35%' },
    animClass: 'animate-float-orb-1',
  },
  {
    id: 2,
    label: "Builder",
    color: "#f01600", // Vermelho
    description: "Projetos de montagem mais complexa e a introdução da programação com palavras.",
    gridPosDesktop: { left: '38.3%', top: '60%' },
    gridPosMobile: { left: '40%', top: '65%' },
    orbitPos: { left: '75%', top: '80%' },
    animClass: 'animate-float-orb-2',
  },
  {
    id: 3,
    label: "Programmer",
    color: "#45b227", // Verde
    description: "Aprendizados de conceitos avançados de programação, como: variáveis e loops. E a montagem de projetos muito mais complexos.",
    gridPosDesktop: { left: '61.6%', top: '40%' },
    gridPosMobile: { left: '60%', top: '45%' },
    orbitPos: { left: '85%', top: '25%' },
    animClass: 'animate-float-orb-3',
  },
  {
    id: 4,
    label: "Designer",
    color: "#ffd900", // Amarelo
    description: "Introdução à programação na linguagem Python e montagem de projetos a nível de competição de robótica.",
    gridPosDesktop: { left: '85%', top: '20%' },
    gridPosMobile: { left: '80%', top: '25%' },
    orbitPos: { left: '30%', top: '75%' },
    animClass: 'animate-float-orb-2',
  },
];

/**
 * COMPONENTE: Balão Individual
 */
const BalloonNode = ({ data, isOrganized, onClick }: { data: BalloonData, isOrganized: boolean, onClick: () => void }) => {
  return (
    <div
      className={`absolute z-20 balloon-pos cursor-pointer ${isOrganized ? 'organized' : 'disorganized'}`}
      onClick={onClick}
      style={{
        '--desk-x': data.gridPosDesktop.left,
        '--desk-y': data.gridPosDesktop.top,
        '--mob-x': data.gridPosMobile.left,
        '--mob-y': data.gridPosMobile.top,
        '--orbit-x': data.orbitPos.left,
        '--orbit-y': data.orbitPos.top,
      } as React.CSSProperties}
    >
      <div className={`${data.animClass} transition-transform duration-500`}>
        <div
          className="relative flex items-center justify-center rounded-full transition-all duration-300 hover:scale-[1.12] hover:brightness-110 active:scale-95 cursor-pointer"
          style={{
            backgroundColor: 'transparent',
            border: `4px solid ${data.color}`,
            boxShadow: `0 0 20px 8px ${data.color}90, inset 0 0 20px 8px ${data.color}90`,
            width: 'clamp(90px, 18vw, 150px)',
            height: 'clamp(90px, 18vw, 150px)',
            backdropFilter: 'blur(2px)' // leve efeito de vidro
          }}
        >
          <span
            className="text-white font-black uppercase text-center font-display leading-none select-none"
            style={{
              WebkitTextStroke: '1.2px #111111',
              paintOrder: 'stroke fill',
              fontSize: 'clamp(0.8rem, 2vw, 1.4rem)',
              letterSpacing: '0.05em',
              textShadow: '0px 3px 6px rgba(0,0,0,0.8)',
              padding: '0 4px',
              wordBreak: 'keep-all'
            }}
          >
            {data.label}
          </span>
        </div>
      </div>
    </div>
  );
};

// COMPONENTE PRINCIPAL
export default function MetodologiaSection() {
  const containerRef = useRef(null);
  const [isOrganized, setIsOrganized] = useState(false);
  const [selectedNode, setSelectedNode] = useState<BalloonData | null>(null);

  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsOrganized(true);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const reset = setTimeout(() => setIsOrganized(false), 0);
      return () => clearTimeout(reset);
    }
  }, [isInView]);

  return (
    <section className="min-h-screen bg-brand-bg py-20 md:py-32 px-4 md:px-10 flex flex-col items-center border-t border-brand-dark/5 font-body relative overflow-hidden">

      {/* Estilos CSS Nativos */}
      <style>{`
        /* Lógica de Transição Mobile vs Desktop */
        .balloon-pos {
          transform: translate(-50%, -50%);
          /* Animação super suave para formarem a escravinha */
          transition: left 2.5s cubic-bezier(0.25, 1, 0.5, 1), top 2.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .balloon-pos.disorganized {
          left: var(--orbit-x);
          top: var(--orbit-y);
        }
        .balloon-pos.organized {
          left: var(--mob-x);
          top: var(--mob-y);
        }
        
        /* Breakpoint para Desktop */
        @media (min-width: 768px) {
          .balloon-pos.organized {
            left: var(--desk-x);
            top: var(--desk-y);
          }
        }

        /* Animações de Flutuação */
        @keyframes float-orb-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(12px, -15px) rotate(5deg); }
          66% { transform: translate(-12px, 12px) rotate(-3deg); }
        }
        @keyframes float-orb-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15px, 12px) rotate(-4deg); }
          66% { transform: translate(15px, -8px) rotate(3deg); }
        }
        @keyframes float-orb-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(18px, 15px) rotate(4deg); }
          66% { transform: translate(-15px, -18px) rotate(-5deg); }
        }
        .animate-float-orb-1 { animation: float-orb-1 8s ease-in-out infinite; }
        .animate-float-orb-2 { animation: float-orb-2 9s ease-in-out infinite; }
        .animate-float-orb-3 { animation: float-orb-3 10s ease-in-out infinite; }
      `}</style>

      {/* Cabeçalho da Seção */}
      <div className="max-w-5xl w-full text-center mb-12 md:mb-16 space-y-6 md:space-y-8 relative z-30">
        <h2 className="hero-title-colored text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.8rem] font-display font-black leading-[1.1] flex flex-wrap justify-center gap-x-3 gap-y-2 uppercase tracking-wide">
          <span className="split-char">Evolução</span>
          <span className="split-char">Pensada</span>
          <span className="split-char">No</span>
          <span className="split-char">Futuro</span>
          <span className="split-char">da</span>
          <span className="split-char">Nova</span>
          <span className="split-char">Geração</span>
        </h2>

        <p className="text-xl md:text-2xl text-[#111111] font-bold max-w-4xl mx-auto leading-relaxed px-2">
          A nossa metodologia de ensino é composta por <span className="text-white bg-[#f01600] px-3 py-1 rounded-md border-2 border-[#111111] shadow-[3px_3px_0px_#111111] inline-block -rotate-1 mx-1 lg:mx-2 whitespace-nowrap">4 níveis de aprendizado</span>
        </p>

        <p className="text-[#111111] font-medium italic animate-pulse">
          (Clique nos níveis abaixo para ver detalhes)
        </p>
      </div>

      {/* Área Interativa da Escada de Balões */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl h-[550px] mx-auto rounded-[3rem] bg-gradient-to-tr from-white/30 to-brand-bg/5 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-visible flex-shrink-0"
      >
        {balloonsData.map((node) => (
          <BalloonNode
            key={node.id}
            data={node}
            isOrganized={isOrganized}
            onClick={() => setSelectedNode(node)}
          />
        ))}

        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 15 80 L 38 60 L 61 40 L 85 20" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" className="text-gray-400" />
        </svg>
      </div>

      {/* Texto de Conclusão da Seção */}
      <div className="max-w-4xl w-full text-center mt-12 md:mt-16 relative z-30 px-4">
        <p className="text-lg md:text-2xl text-[#111111] font-medium leading-relaxed italic">
          Cada etapa é como se fosse o degrau de uma escada, que a cada passo prepara o seu filho ainda mais para superar os desafios do futuro com segurança e inteligência.
        </p>
      </div>

      {/* POPUP (MODAL) DE EXPLICAÇÃO */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay para escurecer o fundo e permitir fechar clicando fora */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 p-8 md:p-10 border-t-8"
              style={{ borderColor: selectedNode.color }}
            >
              {/* Botão de Fechar */}
              <button
                onClick={() => setSelectedNode(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Fechar popup"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>

              <div className="flex flex-col items-center text-center gap-6">
                {/* Ícone ou Esfera da cor */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: selectedNode.color }}
                >
                  <span className="text-white font-black text-3xl font-display">{selectedNode.id}</span>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-display font-black uppercase tracking-wide"
                  style={{ color: selectedNode.color, WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
                >
                  Nível {selectedNode.label}
                </h3>

                <p className="text-lg md:text-xl text-[#111111] font-medium leading-relaxed">
                  {selectedNode.description}
                </p>

                <button
                  onClick={() => setSelectedNode(null)}
                  className="mt-4 px-8 py-3 bg-gray-900 text-white rounded-xl font-bold uppercase tracking-wide hover:bg-black transition-colors"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
