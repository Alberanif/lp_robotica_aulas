"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * COMPONENTE: Marcador do Mapa Animado
 */
const MapPin = ({ top, left, color, delay }: { top: string, left: string, color: string, delay: number }) => (
    <motion.div
        className="absolute z-20 flex flex-col items-center pointer-events-auto"
        style={{ top, left, transform: 'translate(-50%, -100%)' }}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.6, delay }}
    >
        {/* Agrupamos o círculo e a ponta para animarem juntos */}
        <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        >
            <div
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-[#111111] flex items-center justify-center relative z-10"
                style={{ backgroundColor: color, boxShadow: '4px 4px 0px #111111' }}
            >
                <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full border-2 border-[#111111]" />
            </div>
            {/* Ponta do pino agora sobe e desce junto com o círculo */}
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#111111] -mt-1" />
        </motion.div>

        {/* Sombra do pino (fica no chão e apenas muda de escala/opacidade) */}
        <motion.div
            className="w-6 h-2 bg-black/30 rounded-full mt-1 blur-[2px]"
            animate={{ scale: [1, 0.6, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        />
    </motion.div>
);

export default function LocationSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#faefd9] font-body py-20 overflow-hidden">

            {/* 1. CABEÇALHO */}
            <div className="w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">

                {/* Título Estilizado */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="hero-title-colored text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.8rem] font-display font-black mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2 uppercase tracking-wide leading-[1.1]"
                >
                    <span className="split-char">Estamos</span>
                    <span className="split-char">mais</span>
                    <span className="split-char">perto</span>
                    <span className="split-char">de</span>
                    <span className="split-char">você</span>
                    <span className="split-char">do</span>
                    <span className="split-char">que</span>
                    <span className="split-char">imagina</span>
                </motion.h2>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl text-[#111111] font-bold max-w-3xl mx-auto leading-relaxed px-2"
                >
                    Acabamos de inaugurar a nossa nova unidade no centro de Brasília, pensando no seu conforto e na facilidade.
                </motion.p>
            </div>

            {/* 2. FOTO DA SALA (Moldura Neo-Brutalista) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, delay: 0.4 }}
                className="relative w-full max-w-4xl mx-auto mt-16 px-4"
            >
                <div className="bg-white p-4 md:p-6 border-[4px] border-[#111111] rounded-2xl md:rounded-[2rem] shadow-[12px_12px_0px_#01a1e1] md:shadow-[20px_20px_0px_#01a1e1] transition-transform duration-500 hover:rotate-0 hover:shadow-[10px_10px_0px_#01a1e1]">

                    {/* Fita adesiva decorativa */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 border-2 border-[#111111] rotate-[-2deg] z-10 backdrop-blur-sm" />

                    {/* Imagem */}
                    <div className="relative w-full aspect-video rounded-xl border-4 border-[#111111] overflow-hidden bg-gray-200">
                        <Image
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200"
                            alt="Nova sala de robótica em Brasília"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="mt-4 flex justify-between items-center px-2">
                        <span className="font-black text-xl text-[#111111] uppercase tracking-wider">Unidade Asa Norte</span>
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#f01600] border-2 border-[#111111]" />
                            <div className="w-4 h-4 rounded-full bg-[#ffd900] border-2 border-[#111111]" />
                            <div className="w-4 h-4 rounded-full bg-[#45b227] border-2 border-[#111111]" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. TEXTO DE TRANSIÇÃO */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl mx-auto mt-24 mb-12 px-4 text-center"
            >
                <p className="text-xl md:text-3xl text-[#111111] font-black leading-relaxed">
                    E estamos em uma <span className="text-white bg-[#45b227] px-3 py-1 rounded-md border-2 border-[#111111] shadow-[4px_4px_0px_#111111] inline-block -rotate-1 mx-1">localização estratégica</span> para garantir a máxima proximidade da sua casa ou do seu trabalho.
                </p>
            </motion.div>

            {/* 4. MAPA PERSONALIZADO (Layout exato do mapa de referência) */}
            <div className="w-full max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[500px] bg-[#eef8fc] border-[4px] border-[#111111] rounded-[2rem] shadow-[15px_15px_0px_#f01600] overflow-hidden"
                >
                    {/* Malha de fundo (Grid pontilhado) */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111111 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

                    {/* Wrapper centralizado (Mantém as proporções do mapa e o pino no lugar certo no Mobile) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none min-w-[1000px] left-1/2 -translate-x-[70.5%] md:-translate-x-1/2">
                        <div className="relative w-[1000px] h-[600px]">

                            {/* DESENHO DO MAPA EM SVG */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">

                                {/* Áreas Verdes (Parques/Gramados de fundo) */}
                                <path d="M 880 -50 Q 950 150 1050 200 L 1050 -50 Z" fill="#dcfce7" />
                                <path d="M -50 450 L 100 450 L 100 650 L -50 650 Z" fill="#dcfce7" />
                                <rect x="290" y="340" width="30" height="100" fill="#dcfce7" stroke="#111111" strokeWidth="3" />

                                {/* 1. Estrutura das Vias (Bordas Pretas) */}
                                <g stroke="#111111" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" fill="none">
                                    <line x1="120" y1="-50" x2="120" y2="650" /> {/* Via W3 Norte */}
                                    <line x1="280" y1="-50" x2="280" y2="650" /> {/* Via W2 Norte */}
                                    <path d="M -50 320 L 280 320 L 350 310 L 500 280 L 750 240" /> {/* CLN 303 */}
                                    <path d="M 900 -50 Q 820 220 920 650" /> {/* Via W1 Norte */}
                                    <circle cx="820" cy="230" r="45" /> {/* Balão / Rotatória */}
                                    <line x1="750" y1="240" x2="820" y2="230" />
                                </g>

                                {/* 2. Preenchimento Branco das Vias */}
                                <g stroke="#ffffff" strokeWidth="38" strokeLinecap="round" strokeLinejoin="round" fill="none">
                                    <line x1="120" y1="-50" x2="120" y2="650" />
                                    <line x1="280" y1="-50" x2="280" y2="650" />
                                    <path d="M -50 320 L 280 320 L 350 310 L 500 280 L 750 240" />
                                    <path d="M 900 -50 Q 820 220 920 650" />
                                    <circle cx="820" cy="230" r="45" />
                                    <line x1="750" y1="240" x2="820" y2="230" />
                                </g>

                                {/* 3. Faixas Tracejadas no Centro */}
                                <g stroke="#d1d5db" strokeWidth="4" strokeDasharray="15 15" strokeLinecap="round" strokeLinejoin="round" fill="none">
                                    <line x1="120" y1="-50" x2="120" y2="650" />
                                    <line x1="280" y1="-50" x2="280" y2="650" />
                                    <path d="M -50 320 L 280 320 L 350 310 L 500 280 L 750 240" />
                                    <path d="M 900 -50 Q 820 220 920 650" />
                                </g>

                                {/* 4. CONSTRUÇÕES / BLOCOS COMERCIAIS */}

                                {/* Fileira de Cima da CLN 303 */}
                                <rect x="366" y="166" width="100" height="90" fill="#111111" rx="4" /> {/* Sombra */}
                                <rect x="360" y="160" width="100" height="90" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />
                                <rect x="370" y="170" width="40" height="30" fill="#ffd900" stroke="#111111" strokeWidth="3" rx="2" /> {/* Detalhe */}

                                <rect x="496" y="146" width="90" height="90" fill="#111111" rx="4" />
                                <rect x="490" y="140" width="90" height="90" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />
                                <rect x="540" y="150" width="30" height="30" fill="#01a1e1" stroke="#111111" strokeWidth="3" rx="2" />

                                <rect x="616" y="116" width="100" height="90" fill="#111111" rx="4" />
                                <rect x="610" y="110" width="100" height="90" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />

                                {/* Fileira de Baixo da CLN 303 (Onde fica o marcador) */}
                                <rect x="336" y="386" width="120" height="80" fill="#111111" rx="4" />
                                <rect x="330" y="380" width="120" height="80" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />
                                <rect x="340" y="390" width="50" height="40" fill="#f01600" stroke="#111111" strokeWidth="3" rx="2" />

                                <rect x="486" y="356" width="100" height="80" fill="#111111" rx="4" />
                                <rect x="480" y="350" width="100" height="80" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />

                                {/* O Bloco Alvo (Coordenadas X=610, Y=320) */}
                                <rect x="616" y="326" width="130" height="90" fill="#111111" rx="4" />
                                <rect x="610" y="320" width="130" height="90" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />
                                <rect x="680" y="330" width="50" height="40" fill="#45b227" stroke="#111111" strokeWidth="3" rx="2" />

                                {/* Blocos da W2 / W3 (Esquerda) */}
                                <rect x="156" y="406" width="90" height="150" fill="#111111" rx="4" />
                                <rect x="150" y="400" width="90" height="150" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />

                                <rect x="156" y="146" width="90" height="150" fill="#111111" rx="4" />
                                <rect x="150" y="140" width="90" height="150" fill="#ffffff" stroke="#111111" strokeWidth="4" rx="4" />
                            </svg>

                            {/* PINO DO MAPA:
                  As coordenadas foram ajustadas para o centro do detalhe verde do bloco
              */}
                            <MapPin top="58.3%" left="70.5%" color="#f01600" delay={0.8} />

                        </div>
                    </div>

                    {/* Interface flutuante simulando um App de mapa (Pointer-events-auto permite clicar) */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white border-[3px] border-[#111111] p-4 rounded-xl shadow-[6px_6px_0px_#111111] max-w-[250px] z-30">
                        <h4 className="font-black text-[#111111] text-lg uppercase">Robótica BSB</h4>
                        <p className="font-bold text-[#111111] text-sm mt-1">CLN 302 Bloco B, Sala 113<br />Asa Norte, Brasília DF</p>
                        <a
                            href="https://www.google.com/maps/place/Green's+Restaurante+Natural/@-15.7809878,-47.8861639,18.29z/data=!4m6!3m5!1s0x935a3ae1fec97839:0x37055d03058c2a2a!8m2!3d-15.7809045!4d-47.8850786!16s%2Fg%2F11b6hq76th?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 w-full block text-center bg-[#01a1e1] text-white font-black py-2 border-2 border-[#111111] rounded-md hover:bg-[#018ac0] transition-colors shadow-[2px_2px_0px_#111111] active:translate-y-1 active:shadow-none"
                        >
                            COMO CHEGAR
                        </a>
                    </div>

                </motion.div>
            </div>

            {/* 5. OBSERVAÇÃO / INSTRUÇÕES DE CHEGADA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-3xl mx-auto mt-12 px-4"
            >
                <div className="bg-white border-[3px] border-[#111111] p-5 md:p-6 rounded-2xl shadow-[6px_6px_0px_#111111] flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 rotate-[-1deg] hover:rotate-0 transition-transform">
                    <div className="bg-[#ffd900] w-12 h-12 rounded-full border-2 border-[#111111] flex-shrink-0 flex items-center justify-center font-black text-[#111111] text-2xl shadow-[2px_2px_0px_#111111]">
                        !
                    </div>
                    <p className="font-bold text-gray-700 text-[15px] md:text-lg leading-relaxed text-center md:text-left mt-2 md:mt-0">
                        Nossa sala fica no mesmo prédio do restaurante Greens. A entrada é por uma porta de vidro que fica na parte de trás do prédio.
                    </p>
                </div>
            </motion.div>

        </section>
    );
}
