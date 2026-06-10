import metodologiaAulas from "@/assets/metodologia-aulas.webp";
import materiaisLegoEducation from "@/assets/materiais-lego-education.webp";
import acompanhamentoIndividualizado from "@/assets/acompanhamento-individualizado.webp";
import formacaoIntegral from "@/assets/formacao-integral.webp";
import parceriasFlexiveis from "@/assets/parcerias-flexiveis.webp";
import professoresApaixonados from "@/assets/professores-apaixonados.webp";

const IMAGENS_DIFERENCIAIS: Record<number, string> = {
  0: metodologiaAulas,
  1: materiaisLegoEducation,
  2: acompanhamentoIndividualizado,
  3: formacaoIntegral,
  4: parceriasFlexiveis,
  5: professoresApaixonados,
};

const NOMES_DIFERENCIAIS: Record<number, string> = {
  0: "Metodologia de ensino progressiva",
  1: "Materiais LEGO® Education",
  2: "Acompanhamento individualizado",
  3: "Formação integral",
  4: "Parcerias flexíveis para escolas e condomínios",
  5: "Professores apaixonados por educação",
};

interface Props {
  currentDifferential: number;
}

export default function DiferenciaisSection({ currentDifferential }: Props) {
  const src = IMAGENS_DIFERENCIAIS[currentDifferential];
  const alt = NOMES_DIFERENCIAIS[currentDifferential];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}
