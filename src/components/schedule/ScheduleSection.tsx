"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCalendar } from "./AnimatedCalendar";

const stackCardsData = [
    {
        id: 1,
        title: "1 Encontro Semanal",
        description:
            "Toda semana o seu filho(a) terá a oportunidade de aprender uma nova habilidade e exercitar toda a imaginação e criatividade dele!",
        color: "#01a1e1",
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        alt: "Robô ilustrativo",
    },
    {
        id: 2,
        title: "Aulas de 1:00 hora de duração",
        description:
            "Aulas na medida certa! Cada aula tem a duração de 1:00 hora, para que todas as crianças consigam montar, programar e melhorar os seus projetos, sem ninguém ficar para trás.",
        color: "#f01600",
        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        alt: "Relógio e tempo de aula",
    },
    {
        id: 3,
        title: "Turmas com até 6 crianças",
        description:
            "Nossas turmas reduzidas permitem que cada criança tenha uma atenção individual do professor, para que seja possível trabalhar e exercitar todos os pontos de melhora em cada aluno(a).",
        color: "#45b227",
        img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
        alt: "Crianças trabalhando juntas",
    },
];

function NavButton({
    direction,
    onClick,
    disabled,
}: {
    direction: "prev" | "next";
    onClick: () => void;
    disabled: boolean;
}) {
    const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            style={{
                border: "4px solid #111111",
                boxShadow: "4px 4px 0 #111111",
            }}
            onMouseEnter={(e) => {
                if (!disabled) {
                    (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 #111111";
                }
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #111111";
            }}
        >
            <Icon size={22} strokeWidth={3} color="#111111" />
        </button>
    );
}

export default function ScheduleSection() {
    const [order, setOrder] = useState([0, 1, 2]);
    const [isAnimating, setIsAnimating] = useState(false);
    const n = stackCardsData.length;
    const activeColor = stackCardsData[order[0]].color;

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setOrder((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
        setTimeout(() => setIsAnimating(false), 450);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setOrder((prev) => {
            const last = prev[prev.length - 1];
            return [last, ...prev.slice(0, -1)];
        });
        setTimeout(() => setIsAnimating(false), 450);
    };

    return (
        <section className="w-full bg-brand-bg flex flex-col items-center pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-20 font-body text-gray-900 border-t border-brand-dark/5">

            {/* Cabeçalho da Seção */}
            <div className="max-w-4xl w-full mb-12 flex flex-col items-center text-center px-4 md:px-10">
                <h2 className="hero-title-colored text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.8rem] font-display font-black mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 uppercase tracking-wide leading-[1.1]">
                    <span className="split-char">Encontros</span>
                    <span className="split-char">Que</span>
                    <span className="split-char">Cabem</span>
                    <span className="split-char">Na</span>
                    <span className="split-char">Rotina</span>
                </h2>

                <div className="flex flex-col items-center justify-center gap-6 mt-2">
                    <div className="mb-2">
                        <AnimatedCalendar />
                    </div>
                    <p className="text-lg md:text-xl text-[#111111] max-w-3xl font-bold leading-relaxed">
                        Dia de semana, ou final de semana. Manhã ou Tarde.{" "}
                        <span className="text-white bg-[#45b227] px-3 py-1 rounded-md border-2 border-[#111111] shadow-[3px_3px_0px_#111111] inline-block -rotate-1 mx-1 lg:mx-2 whitespace-nowrap">
                            Você escolhe o melhor horário
                        </span>{" "}
                        que se encaixa na rotina.
                    </p>
                </div>
            </div>

            {/* Deck + Botões (desktop) */}
            <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-6xl px-4">

                {/* Botão ← (desktop) */}
                <div className="hidden md:block">
                    <NavButton direction="prev" onClick={handlePrev} disabled={isAnimating} />
                </div>

                {/* Stack de cards */}
                <div
                    className="relative flex-1 max-w-4xl"
                    style={{ height: "clamp(300px, 45vw, 460px)" }}
                >
                    {order.map((cardIndex, pos) => {
                        const card = stackCardsData[cardIndex];
                        return (
                            <motion.div
                                key={cardIndex}
                                animate={{
                                    y: pos * 14,
                                    x: pos * 6,
                                    scale: 1 - pos * 0.045,
                                    zIndex: (n - pos) * 10,
                                }}
                                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                                className="absolute inset-0"
                            >
                                <div
                                    className="w-full h-full flex flex-col md:flex-row rounded-[2rem] border-[4px] border-brand-dark overflow-hidden"
                                    style={{
                                        backgroundColor: card.color,
                                        boxShadow: "10px 10px 0px #111111",
                                    }}
                                >
                                    {/* Coluna de Texto */}
                                    <div className="w-full h-full p-6 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center">
                                        <h3
                                            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-display font-black text-white mb-4 md:mb-6 uppercase leading-tight"
                                            style={{ WebkitTextStroke: "1.5px #111111", paintOrder: "stroke fill" }}
                                        >
                                            {card.title}
                                        </h3>
                                        <p
                                            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed max-w-2xl"
                                            style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.4)" }}
                                        >
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Botão → (desktop) */}
                <div className="hidden md:block">
                    <NavButton direction="next" onClick={handleNext} disabled={isAnimating} />
                </div>
            </div>

            {/* Mobile: botões + dots */}
            <div className="flex md:hidden items-center gap-6 mt-6">
                <NavButton direction="prev" onClick={handlePrev} disabled={isAnimating} />

                {/* Dots */}
                <div className="flex items-center gap-2">
                    {order.map((cardIndex, pos) => (
                        <div
                            key={cardIndex}
                            className="w-3 h-3 rounded-full transition-colors duration-300"
                            style={{
                                backgroundColor: pos === 0 ? activeColor : "rgba(17,17,17,0.2)",
                            }}
                        />
                    ))}
                </div>

                <NavButton direction="next" onClick={handleNext} disabled={isAnimating} />
            </div>

            {/* Dots (desktop) */}
            <div className="hidden md:flex items-center gap-2 mt-8">
                {order.map((cardIndex, pos) => (
                    <div
                        key={cardIndex}
                        className="w-3 h-3 rounded-full transition-colors duration-300"
                        style={{
                            backgroundColor: pos === 0 ? activeColor : "rgba(17,17,17,0.2)",
                        }}
                    />
                ))}
            </div>

            {/* CTA */}
            <a
                href="#formulario-contato"
                className="mt-12 group relative inline-flex items-center justify-center px-6 md:px-10 py-4 bg-[#45b227] text-white font-display font-black text-lg md:text-xl uppercase tracking-widest rounded-xl transition-all duration-200 active:shadow-none active:translate-y-1"
                style={{
                    border: "4px solid #111111",
                    boxShadow: "4px 4px 0 #111111",
                    WebkitTextStroke: "0.5px #111111",
                    paintOrder: "stroke fill"
                }}
            >
                AGENDE UMA AULA<br className="block sm:hidden" /> EXPERIMENTAL
            </a>

        </section>
    );
}
