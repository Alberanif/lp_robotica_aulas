"use client";

import React, { useState } from "react";

const LETTERS = [
  { char: "R", color: "#00A8FF" },
  { char: "O", color: "#FBC531" },
  { char: "B", color: "#E84118" },
  { char: "Ó", color: "#4CD137" },
  { char: "T", color: "#00A8FF" },
  { char: "I", color: "#FBC531" },
  { char: "C", color: "#E84118" },
  { char: "A", color: "#4CD137" },
  { char: " ", color: "" },
  { char: "B", color: "#00A8FF" },
  { char: "S", color: "#FBC531" },
  { char: "B", color: "#E84118" },
];

const HIGHLIGHTS = [
  { text: "+ 500 Alunos",      border: "#01a1e1", dot: "#01a1e1" },
  { text: "Metodologia Única", border: "#f01600", dot: "#f01600" },
  { text: "Desde 2022",        border: "#45b227", dot: "#45b227" },
];

export default function HeroCondoHeader() {
  const [key, setKey] = useState(0);

  return (
    <div
      className="w-full flex flex-col items-center text-center select-none cursor-pointer"
      onClick={() => setKey((k) => k + 1)}
    >
      <style jsx>{`
        .letter {
          font-family: var(--font-fredoka), sans-serif;
          font-weight: 700;
          line-height: 1;
          -webkit-text-stroke: 3px #111111;
          paint-order: stroke fill;
          display: inline-block;
        }

        @media (min-width: 640px) {
          .letter { -webkit-text-stroke: 4px #111111; }
        }
        @media (min-width: 1024px) {
          .letter { -webkit-text-stroke: 5px #111111; }
        }

        .stamp-wrap {
          animation: stamp-in ${key >= 0 ? "0.45s" : "0s"} cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
        }

        @keyframes stamp-in {
          0%   { opacity: 0; transform: scale(3.5) rotate(-20deg); }
          80%  { opacity: 1; transform: scale(0.95) rotate(-10deg); }
          100% { opacity: 1; transform: scale(1) rotate(-10deg); }
        }

        .highlight-pill {
          background: white;
          border-radius: 9999px;
          border-width: 2px;
          border-style: solid;
          padding: 0.4rem 1.1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          font-size: 0.85rem;
          white-space: nowrap;
          color: #111;
        }

        @media (min-width: 640px) {
          .highlight-pill { font-size: 1rem; padding: 0.5rem 1.4rem; }
        }
      `}</style>

      {/* ROBÓTICA BSB — letras coloridas */}
      <div className="flex flex-wrap justify-center gap-0 mb-2">
        {LETTERS.map((l, i) =>
          l.char === " " ? (
            <span key={`${key}-sp`} className="inline-block w-3 sm:w-5 md:w-7" />
          ) : (
            <span
              key={`${key}-${i}`}
              className="letter text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
              style={{ color: l.color }}
            >
              {l.char}
            </span>
          )
        )}
      </div>

      {/* NOS CONDOMÍNIOS — efeito carimbo */}
      <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-6 md:mb-10">
        <div
          key={key}
          className="stamp-wrap inline-block border-[5px] md:border-[6px] border-[#01a1e1] rounded-2xl md:rounded-3xl px-6 md:px-10 py-2 md:py-3 bg-white/50 backdrop-blur-sm"
        >
          <span
            className="font-bold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-fredoka), sans-serif",
            }}
          >
            <span style={{ color: "#FBC531" }}>Nos </span>
            <span style={{ color: "#4CD137" }}>Condomínios</span>
          </span>
        </div>
      </div>

      {/* 3 destaques */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 w-full">
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.text}
            className="highlight-pill"
            style={{ borderColor: h.border }}
          >
            <span style={{ color: h.dot }}>✦</span>
            <span>{h.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
