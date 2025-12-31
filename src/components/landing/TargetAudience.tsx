import { CheckCircle2 } from "lucide-react";

const TargetAudience = () => {
  const points = [
    "Iniciantes são bem‑vindos: começamos pelo básico e evoluímos a cada aula.",
    "Sem 'gênio da computação': o que importa é curiosidade. O resto a gente constrói, bloco a bloco."
  ];

  return (
    <section className="py-12 md:py-20 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-lego-green text-stroke">Para</span>{' '}
            <span className="text-lego-yellow text-stroke">quem</span>{' '}
            <span className="text-lego-blue text-stroke">é</span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 text-center">
            Pais de crianças <strong className="text-lego-blue text-stroke-sm">de 4 a 12 anos</strong> que 
            querem dar oportunidades reais de crescimento: tecnologia, pensamento crítico 
            e habilidades sociais — sem blá‑blá‑blá.
          </p>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
