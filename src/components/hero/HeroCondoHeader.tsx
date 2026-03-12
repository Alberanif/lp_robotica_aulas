"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function HeroCondoHeader() {
  const [animationKey, setAnimationKey] = useState(0);

  const handleResetAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div 
      className="container mx-auto text-center flex flex-col items-center justify-center w-full max-w-5xl py-4 md:py-8 cursor-pointer select-none"
      onClick={handleResetAnimation}
    >
      <style jsx>{`
        .fredoka {
          font-family: var(--font-fredoka), sans-serif;
        }
        
        .liquid-glass-card::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 10%;
          width: 80%;
          height: 35%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), transparent);
          border-radius: 50%;
          pointer-events: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Main Title with Black Outline */}
      <div className="fredoka flex justify-center gap-1 md:gap-2 mb-2 md:mb-4">
        {[
          { char: "R", color: "text-[#00A8FF]" },
          { char: "O", color: "text-[#FBC531]" },
          { char: "B", color: "text-[#E84118]" },
          { char: "Ó", color: "text-[#4CD137]" },
          { char: "T", color: "text-[#00A8FF]" },
          { char: "I", color: "text-[#FBC531]" },
          { char: "C", color: "text-[#E84118]" },
          { char: "A", color: "text-[#4CD137]" },
          { char: " ", color: "" },
          { char: "B", color: "text-[#00A8FF]" },
          { char: "S", color: "text-[#FBC531]" },
          { char: "B", color: "text-[#E84118]" },
        ].map((item, index) => (
          <span
            key={`${animationKey}-${index}`}
            className={`
              ${item.color} 
              text-stroke-black 
              text-5xl sm:text-7xl md:text-8xl lg:text-9xl 
              font-black uppercase tracking-tighter
            `}
          >
            {item.char === " " ? <span className="inline-block w-4 md:w-8" /> : item.char}
          </span>
        ))}
      </div>

      {/* Stamp Animation Subtitle */}
      <div className="h-24 md:h-32 flex justify-center items-center w-full mb-8 md:mb-12">
        <div 
          key={animationKey}
          className="animate-stamp border-[6px] md:border-[8px] border-[#00A8FF] px-6 md:px-10 py-2 md:py-3 rounded-2xl md:rounded-3xl bg-white/40 backdrop-blur-sm whitespace-nowrap"
        >
          <span className="fredoka text-2xl md:text-4xl lg:text-5xl font-bold uppercase">
            <span className="text-[#FBC531]">Nos</span>{" "}
            <span className="text-[#4CD137]">Condomínios</span>
          </span>
        </div>
      </div>

      {/* Highlights Grid */}
      <div 
        key={`grid-${animationKey}`}
        className="animate-fade-in opacity-0 grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-6 w-full max-w-4xl"
        style={{ animationDelay: "1.2s" }}
      >
        {[
          { text: "+ 500 Alunos", border: "border-[#00A8FF]", dot: "text-[#00A8FF]" },
          { text: "Metodologia Única", border: "border-[#E84118]", dot: "text-[#E84118]" },
          { text: "Desde 2022", border: "border-[#4CD137]", dot: "text-[#4CD137]" },
        ].map((item, idx) => (
          <div 
            key={idx}
            className={`
              liquid-glass-card relative overflow-hidden bg-white/50 backdrop-blur-md 
              border-[1.5px] md:border-[2px] ${item.border} 
              rounded-[20px] sm:rounded-[40px] md:rounded-[50px] 
              py-2 md:py-4 px-2 md:px-8 
              text-slate-700 font-bold 
              text-[10px] sm:text-base md:text-xl 
              shadow-sm transition-all hover:-translate-y-1 hover:bg-white/70 hover:shadow-md 
              flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2
            `}
          >
            <span className={item.dot}>✦</span> 
            <span className="text-center sm:text-left leading-[1.1]">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
