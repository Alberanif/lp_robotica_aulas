"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSubtitle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.8, rotate: -15 },
        {
          opacity: 1,
          scale: 1,
          rotate: -6,
          duration: 0.8,
          delay: 0.8,
          ease: "back.out(1.7)"
        }
      );
    }
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center -mt-2 sm:-mt-4 md:-mt-8 mb-4 md:mb-6 z-30 pointer-events-none">
      <div ref={containerRef} className="ml-0 sm:ml-0 md:ml-[40%] opacity-0">
        <span
          style={{
            color: "#f01600",
            border: "4px solid #f01600",
            padding: "6px 20px",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.2,
            borderRadius: "10px",
            mixBlendMode: "normal",
            textShadow: "2px 2px 0px rgba(240, 22, 0, 0.2)",
            boxShadow: "inset 0 0 8px rgba(240, 22, 0, 0.1), 0 0 8px rgba(240, 22, 0, 0.1)",
            display: "inline-block",
            fontFamily: "var(--font-body), sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          Inscrições
          <br />
          Abertas
        </span>
      </div>
    </div>
  );
}
