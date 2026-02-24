"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

/**
 * COMPONENTE: StickyScroll
 */
export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);

    // Agora ele acompanha o scroll natural (target: ref)
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#ffffff",
        "#ffffff",
        "#ffffff",
    ];

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] md:h-[35rem] overflow-y-auto flex justify-center relative gap-10 rounded-2xl p-6 md:p-10 shadow-xl border border-black/5"
            ref={ref}
            style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none'  /* IE/Edge */
            }}
        >
            <style>{`
        /* Esconde a scrollbar no Chrome/Safari/Edge */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

            <div className="relative flex items-start px-0 md:px-4 w-full lg:w-auto no-scrollbar">
                <div className="max-w-2xl w-full">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-12 md:my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4"
                            >
                                {item.title}
                            </motion.h2>

                            {/* IMAGEM PARA MOBILE */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="block lg:hidden my-6 h-56 sm:h-64 w-full rounded-xl overflow-hidden shadow-md"
                            >
                                {item.content}
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="text-base md:text-lg text-gray-600 max-w-sm leading-relaxed"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            {/* IMAGEM PARA DESKTOP */}
            <div
                className={`hidden lg:flex h-80 w-[450px] rounded-xl bg-gray-100 sticky top-10 overflow-hidden shadow-xl items-center justify-center ${contentClassName}`}
            >
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeCard}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full h-full"
                    >
                        {content[activeCard].content ?? null}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
