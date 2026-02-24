---
trigger: manual
---

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/**
 * IMPLEMENTAÇÃO DO COMPONENTE UI: StickyScroll
 * (Baseado na Aceternity UI)
 */
const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
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
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[35rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 no-scrollbar scroll-smooth"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={`hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden ${contentClassName}`}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

/**
 * CONTEÚDO ATUALIZADO: Raiam Santos
 */
const content = [
  {
    title: "Raiam Santos McArn",
    description:
      "Considerado um dos gurus do mundo digital, Raiam Santos tem 31 anos, é multimilionário, escritor de best-sellers e formado na Ivy League, liga das faculdades mais tradicionais dos Estados Unidos. Mas se engana quem acha que ele teve sempre tudo de mão beijada. Sua história de vida é emocionante e inspiradora, coisa que ele tem muito orgulho e fala sobre sua trajetória em suas redes sociais.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://i.postimg.cc/vZN2fmxY/Whats-App-Image-2025-12-22-at-14-34-28.jpg"
          className="h-full w-full object-cover"
          alt="Raiam Santos"
        />
      </div>
    ),
  },
  {
    title: "O começo",
    description:
      "Nascido na Vila da Penha, na Zona Norte do Rio de Janeiro, Raiam Santos sempre foi disciplinado e ótimo na escola. Seu QI era considerado altíssimo para sua idade, sempre ficava entre os melhores da escola, mas devido ao bullying que sofria repetiu um dos anos do fundamental.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://i.postimg.cc/1tPGqxBf/Whats-App-Image-2025-12-22-at-14-36-12.jpg"
          className="h-full w-full object-cover"
          alt="O começo"
        />
      </div>
    ),
  },
  {
    title: "San Diego",
    description:
      "Aos quinze anos, passou em um concurso nacional da World Study e se mudou para San Diego, na Califórnia, se tornando melhor aluno de sua sala e jogador de futebol americano.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://i.postimg.cc/bNK2ncY7/Whats-App-Image-2025-12-22-at-14-37-37.jpg"
          className="h-full w-full object-cover"
          alt="San Diego"
        />
      </div>
    ),
  },
  {
    title: "Pennsylvania",
    description:
      "Decidido a se formar por lá, se tornou imigrante ilegal, o que lhe rendeu seu primeiro livro Imigrante Ilegal, e recebeu uma bolsa de estudos de 200 mil dólares para estudar na Wharton Business School, escola de negócios da University of Pennsylvania, uma das maiores faculdades do mundo.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://i.postimg.cc/SKVsDw4w/Whats-App-Image-2025-12-22-at-14-39-06.jpg"
          className="h-full w-full object-cover"
          alt="Pennsylvania"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

// Componente principal para exportação padrão
export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-10 font-sans text-white">
      <div className="max-w-5xl w-full">
        <StickyScrollRevealDemo />
        <p className="text-slate-500 text-center mt-8 text-sm italic">
          Role para baixo dentro do quadro para ver as fotos e textos mudarem.
        </p>
      </div>
    </div>
  );
}