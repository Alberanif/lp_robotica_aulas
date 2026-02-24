import React from "react";
import { AnimatedCalendar } from "./AnimatedCalendar";
import { StickyScroll } from "./StickyScroll";
import Image from "next/image";

/**
 * DADOS: Conteúdo dos Cards
 */
const content = [
    {
        title: "1 Encontro Semanal",
        description:
            "Toda semana o seu filho(a) terá a oportunidade de aprender uma nova habilidade e exercitar toda a imaginação e criatividade dele!",
        content: (
            <div className="h-full w-full relative">
                <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                    fill
                    className="object-cover"
                    alt="Robô ilustrativo"
                />
            </div>
        ),
    },
    {
        title: "Aulas de 1:00 hora de duração",
        description:
            "Aulas na medida certa! Cada aula tem a duração de 1:00 hora, para que todas as crianças consigam montar, programar e melhorar os seus projetos, sem ninguém ficar para trás.",
        content: (
            <div className="h-full w-full relative">
                <Image
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                    fill
                    className="object-cover"
                    alt="Relógio e tempo de aula"
                />
            </div>
        ),
    },
    {
        title: "Turmas com até 6 crianças",
        description:
            "Nossas turmas reduzidas permitem que cada criança tenha uma atenção individual do professor, para que seja possível trabalhar e exercitar todos os pontos de melhora em cada aluno(a).",
        content: (
            <div className="h-full w-full relative">
                <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                    fill
                    className="object-cover"
                    alt="Crianças trabalhando juntas"
                />
            </div>
        ),
    },
];

export default function ScheduleSection() {
    return (
        <section className="w-full bg-brand-bg flex flex-col items-center pt-64 md:pt-[22rem] pb-20 px-4 md:px-10 font-body text-gray-900 border-t border-brand-dark/5 -mt-16">

            {/* Cabeçalho da Seção */}
            <div className="max-w-4xl w-full mb-16 flex flex-col items-center text-center">

                {/* Título Estilizado seguindo a paleta do Design System (hero-title-colored) */}
                <h2
                    className="hero-title-colored text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-black mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 uppercase tracking-wide leading-none"
                >
                    <span className="split-char">Encontros</span>
                    <span className="split-char">Que</span>
                    <span className="split-char">Cabem</span>
                    <span className="split-char">Na</span>
                    <span className="split-char">Rotina</span>
                </h2>

                <div className="flex flex-col items-center justify-center gap-6 mt-2">
                    {/* Animação do Calendário entre título e texto */}
                    <div className="mb-2">
                        <AnimatedCalendar />
                    </div>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl font-medium leading-relaxed">
                        Dia de semana, ou final de semana. Manhã ou Tarde. <span className="underline decoration-2 underline-offset-4 decoration-brand-blue/50 font-bold break-words">Você escolhe o melhor horário</span> que se encaixa na rotina.
                    </p>
                </div>
            </div>

            {/* Seção do Scroll Reveal */}
            <div className="max-w-6xl w-full flex flex-col items-center">
                <StickyScroll content={content} />
                <p className="text-gray-500 text-center mt-8 text-sm italic font-medium">
                    Role a área acima para baixo para ver imagens mudarem.
                </p>

                <a
                    href="#formulario-contato"
                    className="mt-8 bg-[#45b227] hover:bg-green-600 text-white font-display font-bold text-center uppercase py-4 px-6 md:px-10 rounded-lg tracking-wide text-lg md:text-xl transition-all shadow-lg shadow-[#45b227]/30 hover:shadow-[#45b227]/50 hover:-translate-y-1"
                >
                    AGENDE UMA AULA<br className="block sm:hidden" /> EXPERIMENTAL
                </a>
            </div>

        </section>
    );
}
