"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

/**
 * COMPONENTE: Calendário Animado (Páginas Passando)
 */
export const AnimatedCalendar = () => {
    const [page, setPage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prev) => prev + 1);
        }, 1500); // Muda a página a cada 1.5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-14 h-16 bg-white rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center overflow-hidden shrink-0">
            {/* Argolas do calendário */}
            <div className="absolute top-1 w-full flex justify-evenly px-2 z-20">
                <div className="w-1.5 h-3.5 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="w-1.5 h-3.5 bg-gray-400 rounded-full shadow-inner"></div>
            </div>

            {/* Cabeçalho vermelho do calendário */}
            <div className="w-full h-4 bg-brand-red z-10"></div>

            {/* Container das páginas numéricas */}
            <div className="relative w-full h-full flex items-center justify-center bg-gray-50 perspective-[1000px]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={page}
                        initial={{ rotateX: -90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: 90, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                        className="absolute inset-0 flex items-center justify-center pt-2"
                    >
                        <span className="text-gray-800 font-bold text-2xl font-display">
                            {(page % 31) + 1}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
