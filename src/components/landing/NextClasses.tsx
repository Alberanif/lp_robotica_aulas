import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const NextClasses = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const items = [
    "Unidade presencial",
    "Aulas de 1 hora",
    "Inscrições por ordem de chegada",
    "Vagas limitadas por turma (pra que todos sejam vistos e ouvidos)"
  ];

  return (
    <section className="py-12 md:py-20 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-lego-blue text-stroke">Próximas</span>{' '}
            <span className="text-lego-green text-stroke">turmas</span>{' '}
            <span className="text-lego-yellow text-stroke">—</span>{' '}
            <span className="text-lego-red text-stroke">inscrições</span>{' '}
            <span className="text-lego-blue text-stroke">abertas</span>
          </h2>

          <div className="space-y-3 mb-10">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <p className="text-lg text-foreground/90">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={scrollToForm}
              className="text-lg shadow-lg"
            >
              Garantir a vaga do meu filho
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextClasses;
