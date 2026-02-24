import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroHeadline from "./HeroHeadline";
import HeroImageArea from "./HeroImageArea";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto bg-brand-bg rounded-hero p-8 md:p-16 flex flex-col gap-6 overflow-visible z-20">
      {/* Inner dashed border */}
      <div className="absolute inset-3 border border-dashed border-brand-dark/15 rounded-[1.6rem] pointer-events-none" />

      <HeroTitle />
      <HeroSubtitle />
      <HeroHeadline />
      <HeroImageArea />
    </section>
  );
}
