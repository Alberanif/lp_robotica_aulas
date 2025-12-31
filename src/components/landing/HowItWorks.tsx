import { Button } from "@/components/ui/button";
import { Clock, Lightbulb, Users, Sparkles, MessageSquare } from "lucide-react";
import legoRobot from "@/assets/lego-robot.png";

const HowItWorks = () => {
  const scrollToSchedule = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Clock,
      title: "Duração",
      description: "1 hora, começo–meio–fim."
    },
    {
      icon: Lightbulb,
      title: "Projeto novo a cada encontro",
      description: "um carro hoje, uma roda‑gigante amanhã, um semáforo semana que vem."
    },
    {
      icon: MessageSquare,
      title: "Mediação ativa",
      description: "professores provocam com perguntas ('e se colocar um sensor aqui?') para despertar raciocínio, não respostas decoradas."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "as crianças trabalham em duplas — aprendem robótica e convivência de verdade."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-lego-yellow text-stroke">Como</span>{' '}
            <span className="text-lego-green text-stroke">funcionam</span>{' '}
            <span className="text-lego-blue text-stroke">as</span>{' '}
            <span className="text-lego-red text-stroke">aulas</span>
          </h2>
          <p className="text-xl mb-12 text-center">
            (<span className="text-lego-blue text-stroke-sm">simples</span>{' '}
            <span className="text-lego-red text-stroke-sm">e</span>{' '}
            <span className="text-lego-green text-stroke-sm">objetivas</span>)
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex justify-center md:col-span-2">
              <img 
                src={legoRobot} 
                alt="Robô LEGO criativo" 
                className="max-w-md w-full h-auto"
              />
            </div>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
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
              Ver horários disponíveis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
