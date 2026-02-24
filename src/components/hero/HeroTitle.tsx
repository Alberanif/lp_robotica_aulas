"use client";

import SplitText from "@/components/ui/SplitText";

export default function HeroTitle() {
  return (
    <div className="text-center">
      <SplitText
        text="Robótica BSB"
        tag="h1"
        className="hero-title-colored font-display font-bold text-[9vw] sm:text-[8vw] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] whitespace-nowrap uppercase leading-none tracking-tight"
        delay={80}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 60 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-50px"
        textAlign="center"
      />
    </div>
  );
}
