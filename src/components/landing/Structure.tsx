import { Button } from "@/components/ui/button";
import { Building2, Users, Lightbulb } from "lucide-react";

const Structure = () => {
  const scrollToSchedule = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const items = [
    {
      icon: Lightbulb,
      text: "Metodologia própria baseada em projetos do mundo real."
    },
    {
      icon: Users,
      text: "Turmas presenciais, orientação próxima dos professores."
    },
    {
      icon: Building2,
      text: "Ambiente pensado para curiosidade e autonomia."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-lego-red text-stroke">Estrutura</span>{' '}
            <span className="text-lego-yellow text-stroke">da</span>{' '}
            <span className="text-lego-green text-stroke">experiência</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
                >
                  <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToSchedule}
            >
              Quero ver os horários
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
