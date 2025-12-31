import { Button } from "@/components/ui/button";
import { Brain, Users, Sparkles, Heart, Target } from "lucide-react";

const Benefits = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Brain,
      title: "Pensar e resolver problemas",
      description: "Raciocínio lógico, atenção e foco, flexibilidade pra tentar de novo sem drama."
    },
    {
      icon: Users,
      title: "Comunicação e trabalho em equipe",
      description: "Se expressar, ouvir, negociar ideias e chegar a soluções juntos."
    },
    {
      icon: Sparkles,
      title: "Criatividade e autonomia",
      description: "Imaginar, testar, melhorar o próprio projeto — orgulho de dizer 'eu fiz'."
    },
    {
      icon: Heart,
      title: "Crescimento emocional",
      description: "Lidar com erros, manter a calma diante de desafios, celebrar conquistas."
    },
    {
      icon: Target,
      title: "Organização e coordenação",
      description: "Motricidade fina, planejar etapas, disciplina pra concluir o que começou."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-lego-blue text-stroke">O</span>{' '}
            <span className="text-lego-red text-stroke">que</span>{' '}
            <span className="text-lego-yellow text-stroke">seu</span>{' '}
            <span className="text-lego-green text-stroke">filho</span>{' '}
            <span className="text-lego-blue text-stroke">desenvolve</span>{' '}
            <span className="text-lego-red text-stroke-sm">(na prática)</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-secondary/10 backdrop-blur-sm border-l-4 border-secondary rounded-lg p-6 mb-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              <strong>Em resumo:</strong> seu filho ganha confiança, aprende a planejar, 
              colabora de verdade e se prepara para um mundo em que tecnologia e trabalho 
              em equipe andam juntos.
            </p>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={scrollToForm}
              className="shadow-lg"
            >
              Quero meu filho nessa turma
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
