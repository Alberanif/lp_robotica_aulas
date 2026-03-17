'use client';

import React, { useState, useEffect, useRef } from 'react';

// Para trocar as fotos, substitua os valores de `image` pelos caminhos reais:
// Ex: image: "/images/galeria-aula-1.png"
const cards = [
  {
    id: 1,
    bg: 'bg-[#29ABE2]',
    image: '/images/WhatsApp Image 2026-03-13 at 14.47.18 (1).jpeg',
    alt: 'Crianças montando robótica com LEGO e tablet',
    objectPosition: '50% 25%',
  },
  {
    id: 2,
    bg: 'bg-[#39B54A]',
    image: '/images/WhatsApp Image 2026-03-13 at 14.47.18 (2).jpeg',
    alt: 'Crianças explorando peças coloridas de LEGO',
    objectPosition: '50% 25%',
  },
  {
    id: 3,
    bg: 'bg-[#FBB03B]',
    image: '/images/WhatsApp Image 2026-03-13 at 14.47.18 (3).jpeg',
    alt: 'Grupo de meninos construindo projeto de robótica',
    objectPosition: '50% 25%',
  },
  {
    id: 4,
    bg: 'bg-[#ED1C24]',
    image: '/images/WhatsApp Image 2026-03-13 at 14.47.18.jpeg',
    alt: 'Grupo de crianças com kit de robótica motorizado',
    objectPosition: '50% 25%',
  },
];

export default function GaleriaAulasSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isStacked, setIsStacked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setIsStacked(true);
          }, 1500);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isStacked) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isStacked, activeIndex]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % cards.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const getCardStyle = (index: number): React.CSSProperties => {
    if (!isVisible) {
      return {
        transform: `translateY(150px) scale(0.6) rotate(${(index - 1.5) * 20}deg)`,
        opacity: 0,
        zIndex: cards.length - index,
        transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
      };
    }

    if (!isStacked) {
      const messyTransforms = [
        'translate(-15px, -10px) rotate(-6deg)',
        'translate(20px, 15px) rotate(8deg)',
        'translate(-5px, 25px) rotate(-4deg)',
        'translate(15px, -5px) rotate(10deg)',
      ];
      return {
        transform: messyTransforms[index],
        opacity: 1,
        zIndex: cards.length - index,
        transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
      };
    }

    const relativeIndex = (index - activeIndex + cards.length) % cards.length;

    if (relativeIndex === 0) {
      return {
        transform: 'translateY(0px) scale(1) rotate(0deg)',
        opacity: 1,
        zIndex: 4,
        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s',
      };
    } else if (relativeIndex === 1) {
      return {
        transform: 'translateY(24px) scale(0.95) rotate(0deg)',
        opacity: 1,
        zIndex: 3,
        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s',
      };
    } else if (relativeIndex === 2) {
      return {
        transform: 'translateY(48px) scale(0.90) rotate(0deg)',
        opacity: 1,
        zIndex: 2,
        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s',
      };
    } else {
      return {
        transform: 'translateX(110%) translateY(-20px) scale(0.85) rotate(12deg)',
        opacity: 0,
        zIndex: 1,
        transition: 'transform 0.6s ease-in-out, opacity 0.4s ease-in-out 0.1s, z-index 0s 0.4s',
      };
    }
  };

  return (
    <section className="w-full py-8 md:py-12 flex flex-col items-center overflow-hidden relative z-10">
      {/* Título da Sessão */}
      <div className="text-center mb-6 relative z-10 w-full max-w-[400px] px-4">
        <h2 className="font-display font-black text-4xl md:text-5xl leading-tight tracking-wide flex flex-wrap justify-center gap-x-3 gap-y-1 uppercase">
          <span className="text-[#29ABE2]" style={{ WebkitTextStroke: '2px #111111', paintOrder: 'stroke fill' }}>CONHEÇA</span>
          <span className="text-[#FBB03B]" style={{ WebkitTextStroke: '2px #111111', paintOrder: 'stroke fill' }}>UM POUCO</span>
          <span className="text-[#ED1C24]" style={{ WebkitTextStroke: '2px #111111', paintOrder: 'stroke fill' }}>DAS NOSSAS</span>
          <span className="text-[#39B54A]" style={{ WebkitTextStroke: '2px #111111', paintOrder: 'stroke fill' }}>AULAS</span>
        </h2>
      </div>

      {/* Área dos Cards Animados */}
      <div
        ref={sectionRef}
        className="relative w-full max-w-[340px] h-[360px] mt-4 mb-6"
        style={{ perspective: '1000px' }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 border-4 border-[#111111] rounded-[2rem] overflow-hidden ${card.bg}`}
            style={{
              ...getCardStyle(index),
              boxShadow: '8px 8px 0px 0px #111111',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: card.objectPosition }}
            />
          </div>
        ))}
      </div>

      {/* Controles de Navegação */}
      <div
        className={`flex items-center gap-6 mt-8 z-10 transition-opacity duration-500 ${
          isStacked ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={handlePrev}
          className="w-12 h-12 bg-white border-[3px] border-[#111111] rounded-full flex items-center justify-center active:translate-y-1 transition-all touch-manipulation"
          style={{ boxShadow: '3px 3px 0px 0px #111111' }}
          aria-label="Anterior"
        >
          <svg className="w-6 h-6 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-3">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full border-2 border-[#111111] transition-colors ${
                activeIndex === i ? 'bg-[#29ABE2]' : 'bg-[#d1d5db]'
              }`}
              aria-label={`Ir para o card ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 bg-white border-[3px] border-[#111111] rounded-full flex items-center justify-center active:translate-y-1 transition-all touch-manipulation"
          style={{ boxShadow: '3px 3px 0px 0px #111111' }}
          aria-label="Próximo"
        >
          <svg className="w-6 h-6 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
