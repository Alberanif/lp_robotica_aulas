import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image-real.png";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5561991864835?text=Olá%21%20Eu%20quero%20saber%20mais%20sobre%20as%20aulas%20presenciais%20de%20robótica%21', '_blank');
  };

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-16 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-fredoka text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-lego-blue text-stroke">Robótica</span>{' '}
            <span className="text-lego-red text-stroke">BSB</span>
          </h1>
          
          <div className="w-48 h-0.5 bg-border/60 mx-auto mb-4"></div>
          
          <p className="font-fredoka text-2xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="text-lego-green text-stroke">Formando</span>{' '}
            <span className="text-lego-blue text-stroke">a</span>{' '}
            <span className="text-lego-red text-stroke">próxima</span>{' '}
            <span className="text-lego-yellow text-stroke">geração</span>
          </p>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-medium">
            Seu filho monta, testa, erra, acerta e volta pra casa contando a história.
          </p>
          
          <div className="max-w-4xl mx-auto mb-6">
            <img 
              src={heroImage} 
              alt="Robótica BSB - Crianças aprendendo robótica com LEGO"
              className="w-full h-auto"
              loading="eager"
              width="1920"
              height="1080"
              decoding="async"
            />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Aulas presenciais de robótica com LEGO para crianças de 4 a 12 anos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToForm}
            >
              Quero uma vaga
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-lego-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lego-yellow/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-lego-green/10 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default Hero;
