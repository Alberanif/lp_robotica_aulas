import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const WhyNow = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
            <Clock className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-6">
            <span className="text-lego-red text-stroke">Por</span>{' '}
            <span className="text-lego-yellow text-stroke">que</span>{' '}
            <span className="text-lego-green text-stroke">agora</span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            Porque a infância não tem replay. Cada semana que passa é uma chance a menos 
            de treinar raciocínio, convivência e autonomia num ambiente seguro e estimulante.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="bg-card/80 backdrop-blur-md border-2 border-lego-blue rounded-xl p-6 text-center shadow-lg">
              <p className="font-semibold text-lg text-lego-blue">Brincar vira projeto</p>
            </div>
            <div className="text-4xl text-primary rotate-90 md:rotate-0">→</div>
            <div className="bg-card/80 backdrop-blur-md border-2 border-lego-green rounded-xl p-6 text-center shadow-lg">
              <p className="font-semibold text-lg text-lego-green">Projeto vira aprendizado</p>
            </div>
            <div className="text-4xl text-primary rotate-90 md:rotate-0">→</div>
            <div className="bg-card/80 backdrop-blur-md border-2 border-lego-red rounded-xl p-6 text-center shadow-lg">
              <p className="font-semibold text-lg text-lego-red">Aprendizado vira atitude</p>
            </div>
          </div>

          <Button 
            size="lg"
            onClick={scrollToForm}
            className="shadow-lg"
          >
            Reservar uma vaga agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
