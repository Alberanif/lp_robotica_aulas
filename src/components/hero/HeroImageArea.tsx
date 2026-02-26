import Image from "next/image";
import HeroForm from "./HeroForm";

export default function HeroImageArea() {
  return (
    <div className="relative w-full mt-8 md:mt-12 lg:mt-16">
      {/* Image Container */}
      <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9] bg-[#faefd9] rounded-image flex items-center justify-center overflow-hidden border-4 border-brand-dark shadow-[10px_10px_0px_#f01600]">
        <Image
          src="/images/hero-bg.png"
          alt="Alunos da Robótica BSB"
          fill
          priority
          className="object-cover object-left"
        />
        {/* Overlay sutil se necessário para leitura de algo, mas como o form flutua com background sólido não precisa obrigatoriamente */}
      </div>

      {/* Form floating over image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[400px] translate-y-[40%] z-10 px-4 md:px-0">
        <HeroForm />
      </div>

      {/* Spacer so the form bleed doesn't get clipped */}
      <div className="h-44" />
    </div>
  );
}
