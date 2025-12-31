import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainPoint = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const messages = [
    { sender: "Pai", text: "Será que meu filho vai gostar das aulas?", isParent: true },
    {
      sender: "Robótica BSB",
      text: "Assim que ele montar o primeiro projeto sozinho, eu duvido ele não querer vir mais. Ver o próprio robô funcionando é o tipo de coisa que brilha o olho de qualquer criança.",
      isParent: false,
    },
    { sender: "Pai", text: "Mas ele nunca teve contato com lógica ou programação...", isParent: true },
    {
      sender: "Robótica BSB",
      text: "É exatamente pra isso que a gente existe. As aulas começam do zero e o acompanhamento é individual. Cada criança aprende no seu ritmo, e o progresso vem rápido.",
      isParent: false,
    },
    { sender: "Pai", text: "Tenho medo de ele achar difícil e desanimar.", isParent: true },
    {
      sender: "Robótica BSB",
      text: "Pode ficar tranquilo. A gente trabalha com LEGO, e o aprendizado acontece de forma natural, brincando. Eles nem percebem que estão aprendendo enquanto constroem e testam.",
      isParent: false,
    },
    { sender: "Pai", text: "E se ele não se adaptar?", isParent: true },
    {
      sender: "Robótica BSB",
      text: "Nossas primeiras aulas são pensadas pra acolher e despertar curiosidade. A maioria das crianças sai da primeira aula perguntando quando é a próxima.",
      isParent: false,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-3 text-center">
            <span className="text-lego-blue text-stroke">Será</span>{" "}
            <span className="text-lego-red text-stroke">que</span>{" "}
            <span className="text-lego-yellow text-stroke">a</span>{" "}
            <span className="text-lego-green text-stroke">robótica</span>{" "}
            <span className="text-lego-blue text-stroke">é</span>{" "}
            <span className="text-lego-red text-stroke">para</span>{" "}
            <span className="text-lego-yellow text-stroke">o</span>{" "}
            <span className="text-lego-green text-stroke">meu</span>{" "}
            <span className="text-lego-blue text-stroke">filho?</span>
          </h2>

          <p className="text-center text-muted-foreground mb-8 text-lg">
            Todos pais têm essa dúvida, até verem o primeiro projeto dos filhos
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`animate-fade-in flex ${message.isParent ? "justify-end" : "justify-start"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`max-w-[75%] ${message.isParent ? "ml-auto" : "mr-auto"}`}>
                  <p className="text-xs font-medium mb-1 px-3 opacity-60">{message.sender}</p>
                  <div
                    className={`rounded-2xl px-4 py-3 shadow-md ${
                      message.isParent
                        ? "bg-[#DCF8C6] text-gray-800 rounded-tr-none"
                        : "bg-white text-gray-800 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={scrollToForm} className="shadow-lg">
              Quero garantir uma vaga
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;
