import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "É só brincar de LEGO?",
      answer: "Não. A gente usa LEGO como ferramenta para ensinar lógica, programação por blocos, construção de mecanismos e colaboração. Brincar é o meio; aprender é o fim."
    },
    {
      question: "Meu filho vai ficar só no computador?",
      answer: "Não. As aulas são mãos‑na‑massa, com montagem, testes, ajustes e apresentações. Tela é ferramenta, não babá eletrônica."
    },
    {
      question: "E se ele errar?",
      answer: "Perfeito. Aqui o erro vira degrau. A regra é: tentou, ajustou, melhorou — e apresentou."
    },
    {
      question: "Precisa ter experiência?",
      answer: "Não. A metodologia é progressiva e respeita o ritmo de cada criança."
    },
    {
      question: "Funciona pra tímidos?",
      answer: "Sim. Trabalhar em dupla com mediação do professor ajuda a desenvolver comunicação com segurança."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-lego-blue text-stroke">Perguntas</span>{' '}
            <span className="text-lego-yellow text-stroke">que</span>{' '}
            <span className="text-lego-green text-stroke">todo</span>{' '}
            <span className="text-lego-red text-stroke">pai</span>{' '}
            <span className="text-lego-blue text-stroke">faz</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4 mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
