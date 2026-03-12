import HeroCondoHeader from "./HeroCondoHeader";
import HeroVideoArea from "./HeroVideoArea";

export default function HeroCondoSection() {
  return (
    <section className="relative w-full max-w-5xl mx-auto bg-transparent p-4 md:p-8 flex flex-col gap-6 overflow-visible z-20">
      <HeroCondoHeader />
      
      {/* Vertical Video Area instead of Image+Form */}
      <HeroVideoArea />
    </section>
  );
}
