import Image from "next/image";
import HeroForm from "./HeroForm";

export default function HeroImageArea() {
  return (
    <div className="relative w-full mt-8 md:mt-10 lg:mt-12">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[21/9] bg-[#faefd9] rounded-image flex items-center justify-center overflow-hidden border-4 border-brand-dark shadow-[10px_10px_0px_#f01600]">
        <Image
          src="/images/hero-bg.png"
          alt="Alunos da Robótica BSB"
          fill
          priority
          className="object-cover object-left md:object-top"
        />
        {/* Overlay sutil se necessário para leitura de algo, mas como o form flutua com background sólido não precisa obrigatoriamente */}
      </div>

      {/* Form floating over image and creating dynamic spacing */}
      <div className="relative w-full md:w-[450px] mx-auto z-10 px-4 md:px-0 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 -mb-32 md:-mb-44 lg:-mb-48">
        <HeroForm />
      </div>
    </div>
  );
}
