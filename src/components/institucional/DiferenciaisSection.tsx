import metodologiaAulas400 from "@/assets/metodologia-aulas.webp?w=400&format=webp&as=url";
import metodologiaAulas800 from "@/assets/metodologia-aulas.webp?w=800&format=webp&as=url";
import materiaisLegoEducation400 from "@/assets/materiais-lego-education.webp?w=400&format=webp&as=url";
import materiaisLegoEducation800 from "@/assets/materiais-lego-education.webp?w=800&format=webp&as=url";
import acompanhamentoIndividualizado400 from "@/assets/acompanhamento-individualizado.webp?w=400&format=webp&as=url";
import acompanhamentoIndividualizado800 from "@/assets/acompanhamento-individualizado.webp?w=800&format=webp&as=url";
import formacaoIntegral400 from "@/assets/formacao-integral.webp?w=400&format=webp&as=url";
import formacaoIntegral800 from "@/assets/formacao-integral.webp?w=800&format=webp&as=url";
import parceriasFlexiveis400 from "@/assets/parcerias-flexiveis.webp?w=400&format=webp&as=url";
import parceriasFlexiveis800 from "@/assets/parcerias-flexiveis.webp?w=800&format=webp&as=url";
import professoresApaixonados400 from "@/assets/professores-apaixonados.webp?w=400&format=webp&as=url";
import professoresApaixonados800 from "@/assets/professores-apaixonados.webp?w=800&format=webp&as=url";

interface ImageVariant {
  src400: string;
  src800: string;
  alt: string;
}

const IMAGENS_DIFERENCIAIS: Record<number, ImageVariant> = {
  0: { src400: metodologiaAulas400, src800: metodologiaAulas800, alt: "Metodologia de ensino progressiva" },
  1: { src400: materiaisLegoEducation400, src800: materiaisLegoEducation800, alt: "Materiais LEGO® Education" },
  2: { src400: acompanhamentoIndividualizado400, src800: acompanhamentoIndividualizado800, alt: "Acompanhamento individualizado" },
  3: { src400: formacaoIntegral400, src800: formacaoIntegral800, alt: "Formação integral" },
  4: { src400: parceriasFlexiveis400, src800: parceriasFlexiveis800, alt: "Parcerias flexíveis para escolas e condomínios" },
  5: { src400: professoresApaixonados400, src800: professoresApaixonados800, alt: "Professores apaixonados por educação" },
};

interface Props {
  currentDifferential: number;
}

export default function DiferenciaisSection({ currentDifferential }: Props) {
  const img = IMAGENS_DIFERENCIAIS[currentDifferential];
  if (!img) return null;
  return (
    <img
      srcSet={`${img.src400} 400w, ${img.src800} 800w`}
      sizes="(max-width: 640px) 400px, 800px"
      src={img.src800}
      alt={img.alt}
      className="w-full h-full object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}
