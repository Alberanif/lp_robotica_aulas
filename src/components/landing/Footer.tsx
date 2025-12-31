import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5561991864835?text=Olá%21%20Eu%20quero%20saber%20mais%20sobre%20as%20aulas%20presenciais%20de%20robótica%21', '_blank');
  };
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToSchedule = () => {
    document.getElementById('formulario')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <footer className="bg-lego-yellow backdrop-blur-sm text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-8">
            <span className="text-white text-stroke-sm">Robótica</span>{' '}
            <span className="text-white text-stroke-sm">BSB</span>{' '}
            <span className="text-white text-stroke-sm">—</span>{' '}
            <span className="text-white text-stroke-sm">Formando</span>{' '}
            <span className="text-white text-stroke-sm">a</span>{' '}
            <span className="text-white text-stroke-sm">próxima</span>{' '}
            <span className="text-white text-stroke-sm">geração.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            
            
            

            
          </div>

          <p className="text-white/80 text-sm">
            © 2025 Robótica BSB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;