import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown, Sparkles, Brain, GraduationCap, Users, Cpu, Award } from "lucide-react";
import { useState } from "react";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
import Footer from "@/components/landing/Footer";
import professorLego from "@/assets/professor-lego.png";
import LegoArrow from "@/components/landing/LegoArrow";
import metodologiaEvolucao from "@/assets/metodologia-evolucao-recortada.png";
import metodologiaAulas from "@/assets/metodologia-aulas.png";
import acompanhamentoIndividualizado from "@/assets/acompanhamento-individualizado.png";
import formacaoIntegral from "@/assets/formacao-integral.png";
import professoresApaixonados from "@/assets/professores-apaixonados.png";
import parceriasFlexiveis from "@/assets/parcerias-flexiveis.png";
import materiaisLegoEducation from "@/assets/materiais-lego-education.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Institucional = () => {
  const [openDoor, setOpenDoor] = useState<number | null>(null);
  const [currentDifferential, setCurrentDifferential] = useState(0);
  const valores = [{
    title: "Respeito",
    description: "Aprender a ouvir, considerar o outro e valorizar as diferenças.",
    colorClass: "text-lego-blue"
  }, {
    title: "Responsabilidade",
    description: "Cumprir o que promete, terminar o que começa e sentir orgulho disso.",
    colorClass: "text-lego-red"
  }, {
    title: "Honestidade",
    description: "Agir com verdade, reconhecer erros e valorizar conquistas reais.",
    colorClass: "text-lego-yellow"
  }, {
    title: "Resiliência",
    description: "Encarar desafios como parte do processo e não como o fim da linha.",
    colorClass: "text-lego-green"
  }, {
    title: "Colaboração",
    description: "Trabalhar em dupla, dividir ideias e celebrar resultados juntos.",
    colorClass: "text-lego-blue"
  }, {
    title: "Organização",
    description: "Planejar o caminho antes de agir, porque até a criatividade precisa de estrutura.",
    colorClass: "text-lego-red"
  }, {
    title: "Companheirismo",
    description: "Ajudar, apoiar e crescer junto. Nenhum projeto é feito sozinho.",
    colorClass: "text-lego-yellow"
  }, {
    title: "Zelo",
    description: "Cuidar dos materiais, do espaço e do que é compartilhado.",
    colorClass: "text-lego-green"
  }];
  const diferenciais = [{
    title: "Metodologia própria e progressiva",
    description: "Aqui, o aprendizado acontece em etapas. A criança evolui degrau por degrau, ganhando autonomia, confiança e curiosidade a cada fase. Nada é decorado, tudo é vivido, construído e compreendido.",
    color: "bg-lego-blue"
  }, {
    title: "Materiais LEGO® Education",
    description: "Trabalhamos com os kits oficiais LEGO® Education, referência mundial em educação tecnológica. Aprender com o que há de melhor é o primeiro passo para formar mentes que pensam grande.",
    color: "bg-lego-red"
  }, {
    title: "Acompanhamento individualizado",
    description: "Cada criança tem seu tempo. Por isso, nossas turmas são reduzidas e o professor acompanha de perto cada avanço, celebrando conquistas e ajustando o ritmo de forma personalizada.",
    color: "bg-lego-yellow"
  }, {
    title: "Formação integral",
    description: "Mais do que robôs, formamos pessoas. Nossa metodologia integra tecnologia, valores e propósito, desenvolvendo habilidades cognitivas, emocionais e sociais.",
    color: "bg-lego-green"
  }, {
    title: "Parcerias flexíveis para cada tipo de ensino",
    description: "Nos adaptamos à rotina e ao modelo pedagógico de cada instituição. Podemos atuar dentro da grade, em projetos after school ou como oficinas complementares, sempre levando o DNA da Robótica BSB.",
    color: "bg-lego-blue"
  }, {
    title: "Professores apaixonados pelo que fazem",
    description: "Nosso time é formado por educadores que vivem o propósito da Robótica BSB. Eles não apenas ensinam, inspiram, motivam e acreditam no potencial de cada aluno.",
    color: "bg-lego-red"
  }];
  const handleCTA = () => {
    // Scroll to next section or handle CTA action
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-16 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-lego-blue text-stroke">Mais</span>{' '}
              <span className="text-lego-red text-stroke">do</span>{' '}
              <span className="text-lego-yellow text-stroke">que</span>{' '}
              <span className="text-lego-green text-stroke">robótica...</span>
              <br />
              <span className="text-lego-red text-stroke">Construímos</span>{' '}
              <span className="text-lego-blue text-stroke">mentes</span>{' '}
              <span className="text-lego-yellow text-stroke">criativas.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-medium">
              Na Robótica BSB, cada aula é uma experiência prática, divertida e desafiadora, onde a criança aprende a pensar, criar e resolver problemas de verdade.
            </p>
            
            <div className="max-w-2xl mx-auto mb-8 bg-muted/30 rounded-lg p-8 border border-border/40">
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Espaço para imagem</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
              Com a nossa metodologia própria baseada em valores humanos, nós ajudamos as escolas a formar alunos curiosos, confiantes e preparados para o futuro, ajudando-os a enxergar o mundo fora da caixa
            </p>

            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all animate-pulse" onClick={handleCTA}>
              Conheça Melhor a Robótica BSB
            </Button>
          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-lego-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lego-yellow/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-lego-green/10 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Nosso Propósito Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#fffef5] pt-16 pb-12 px-12 md:pt-20 md:pb-16 md:px-16 rounded-lg shadow-xl relative" style={{
          backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 31px,
                #e3d5c1 31px,
                #e3d5c1 32px
              )`,
          backgroundSize: '100% 32px',
          backgroundPosition: '0 48px'
        }}>
            {/* Red margin line */}
            <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-red-300/50" />
            
            {/* Professor LEGO no canto superior direito */}
            <img src={professorLego} alt="Professor de Robótica" className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 object-contain" />
            
            <div className="relative pl-8">
              <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-[32px] pt-0">
                <span className="text-lego-blue text-stroke-sm">Nosso</span>{' '}
                <span className="text-lego-red text-stroke-sm">Propósito</span>
              </h2>
              
              <div className="font-handwriting text-2xl md:text-3xl space-y-6" style={{
              color: '#2c5aa0',
              lineHeight: '32px'
            }}>
                <p>
                  Na Robótica BSB, acreditamos que educar é muito mais do que ensinar conteúdo, é despertar o desejo de aprender.
                  E esse desejo nasce quando a criança coloca a mão na massa, erra, tenta de novo e descobre que é capaz.
                </p>
                
                <p>
                  A robótica é o nosso meio.
                  O verdadeiro fim é formar crianças curiosas, criativas e confiantes, preparadas para resolver problemas reais, colaborar e pensar com autonomia.
                </p>
                
                <p>
                  Cada projeto, cada desafio, cada montagem é uma oportunidade de exercitar algo que vai além da tecnologia: o caráter, a paciência, o raciocínio e a imaginação.
                  É nesse equilíbrio entre mente e atitude que o aprendizado se transforma em construção de futuro.
                </p>
                
                <p>
                  Aqui, ensinamos robótica.
                  Mas, no fundo, o que construímos mesmo são pessoas capazes de transformar o mundo.
                </p>
              </div>
            </div>
          </div>
          
          {/* Seta LEGO de transição */}
          <div className="flex justify-center mt-4">
            <LegoArrow />
          </div>
        </div>
      </section>

      {/* A Metodologia que Evolui com a Criança Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
              <span className="text-lego-red text-stroke">A</span>{' '}
              <span className="text-lego-blue text-stroke">Metodologia</span>{' '}
              <span className="text-lego-yellow text-stroke">que</span>{' '}
              <span className="text-lego-green text-stroke">Evolui</span>
              <br />
              <span className="text-lego-blue text-stroke">com</span>{' '}
              <span className="text-lego-red text-stroke">a</span>{' '}
              <span className="text-lego-yellow text-stroke">Criança</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium leading-relaxed text-left">
              Aprender robótica na Robótica BSB é como subir uma escada de descobertas.
              Cada degrau representa um novo desafio, uma nova conquista e, acima de tudo, um novo aprendizado sobre si mesmo.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12 text-left">
              Nossas aulas são estruturadas para que cada criança avance no seu ritmo, com orientação próxima do professor e um ambiente que valoriza a curiosidade, o erro e o recomeço.
              A cada nível, ela desenvolve novas habilidades técnicas e emocionais, fortalecendo a confiança para continuar subindo.
            </p>

            {/* Imagem da metodologia */}
            <div className="flex justify-center">
              <img src={metodologiaEvolucao} alt="Metodologia que evolui com a criança" className="w-full max-w-4xl h-auto" />
            </div>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-12 text-center max-w-4xl mx-auto">
              Cada degrau prepara o próximo. E quando a criança olha para trás, percebe o quanto cresceu, não só em conhecimento, mas em autonomia, criatividade e confiança.
            </p>

            <div className="flex justify-center mt-12">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('valores-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Conheça Nossos Valores
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 right-10 w-80 h-80 bg-lego-yellow/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-lego-green/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Valores Section */}
      <section id="valores-section" className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
              <span className="text-lego-blue text-stroke">Mais</span>{' '}
              <span className="text-lego-red text-stroke">do</span>{' '}
              <span className="text-lego-yellow text-stroke">que</span>{' '}
              <span className="text-lego-green text-stroke">robótica,</span>
              <br />
              <span className="text-lego-blue text-stroke">valores</span>{' '}
              <span className="text-lego-red text-stroke">para</span>{' '}
              <span className="text-lego-yellow text-stroke">a</span>{' '}
              <span className="text-lego-green text-stroke">vida</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 font-medium leading-relaxed text-center max-w-4xl mx-auto">
              Porque cada projeto ensina muito mais do que tecnologia, ensina a ser humano.
            </p>

            {/* Accordion de Valores */}
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {valores.map((valor, index) => <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center justify-between w-full">
                        <h3 className={`font-fredoka text-2xl md:text-3xl font-bold ${valor.colorClass} text-stroke-sm transition-colors`}>
                          {valor.title}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {valor.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" className="text-base md:text-lg px-4 py-4 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all" onClick={handleCTA}>
                Veja os Valores na Prática
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-lego-red/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lego-blue/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Nossos Diferenciais Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
              <span className="text-lego-blue text-stroke">Nossos</span>{' '}
              <span className="text-lego-red text-stroke">Diferenciais</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 font-medium leading-relaxed text-center max-w-4xl mx-auto">
              Cada detalhe da nossa metodologia foi pensado para tornar o aprendizado mais humano, criativo e significativo.
            </p>

            {/* Carousel de Cards */}
              <div className="relative">
              {/* Card Atual */}
              <div className="bg-gradient-to-br from-background to-muted/50 rounded-2xl shadow-[0_20px_60px_-5px_rgba(0,0,0,0.3)] p-8 md:p-12 min-h-[520px] flex flex-col border-4 border-border/20">
                {/* Imagem do Diferencial */}
                <div className="rounded-xl mb-6 w-full aspect-[4/3] overflow-hidden bg-background flex items-center justify-center">
                  {currentDifferential === 0 ? (
                    <img src={metodologiaAulas} alt="Metodologia de ensino progressiva" className="w-full h-full object-contain" />
                  ) : currentDifferential === 1 ? (
                    <img src={materiaisLegoEducation} alt="Materiais LEGO® Education" className="w-full h-full object-contain" />
                  ) : currentDifferential === 2 ? (
                    <img src={acompanhamentoIndividualizado} alt="Acompanhamento individualizado" className="w-full h-full object-contain" />
                  ) : currentDifferential === 3 ? (
                    <img src={formacaoIntegral} alt="Formação integral" className="w-full h-full object-contain" />
                  ) : currentDifferential === 4 ? (
                    <img src={parceriasFlexiveis} alt="Parcerias flexíveis para cada tipo de ensino" className="w-full h-full object-contain" />
                  ) : currentDifferential === 5 ? (
                    <img src={professoresApaixonados} alt="Professores apaixonados" className="w-full h-full object-contain" />
                  ) : (
                    <div className={`${diferenciais[currentDifferential].color} w-full h-full flex items-center justify-center`}>
                      <p className="text-white/70 text-lg font-medium">Espaço para imagem</p>
                    </div>
                  )}
                </div>

                {/* Título e Descrição */}
                <div className="flex-1">
                  <h3 className="font-fredoka text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    {diferenciais[currentDifferential].title}
                  </h3>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                    {diferenciais[currentDifferential].description}
                  </p>
                </div>

                {/* Indicadores de Página */}
                <div className="flex justify-center gap-2 mt-8">
                  {diferenciais.map((_, index) => <button key={index} onClick={() => setCurrentDifferential(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentDifferential ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} aria-label={`Ir para diferencial ${index + 1}`} />)}
                </div>
              </div>

              {/* Botões de Navegação */}
              <button onClick={() => setCurrentDifferential(prev => (prev - 1 + diferenciais.length) % diferenciais.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-background shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)] rounded-full p-3 md:p-4 transition-all hover:scale-110 border-2 border-border/20" aria-label="Anterior">
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-foreground" />
              </button>

              <button onClick={() => setCurrentDifferential(prev => (prev + 1) % diferenciais.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-background shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)] rounded-full p-3 md:p-4 transition-all hover:scale-110 border-2 border-border/20" aria-label="Próximo">
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-foreground" />
              </button>
            </div>

            <div className="flex justify-center mt-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white" 
                onClick={() => window.open('https://wa.me/5561991864835?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Rob%C3%B3tica%20BSB', '_blank')}
              >
                Agende Uma Apresentação
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 right-10 w-80 h-80 bg-lego-yellow/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-lego-green/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* O impacto nas escolas Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
              <span className="text-lego-blue text-stroke">O</span>{' '}
              <span className="text-lego-red text-stroke">impacto</span>{' '}
              <span className="text-lego-yellow text-stroke">nas</span>{' '}
              <span className="text-lego-green text-stroke">escolas</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 font-medium leading-relaxed text-center max-w-4xl mx-auto">
              Quando a robótica deixa de ser uma atividade e se torna parte da cultura da escola, tudo muda.
            </p>

            <h3 className="font-fredoka text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              Como a Robótica BSB transforma o ambiente escolar
            </h3>

            {/* Lista de Impactos */}
            <div className="space-y-8 mb-12">
              {/* Item 1 */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-6 md:p-8 border-l-4 border-lego-blue shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-lego-blue/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-lego-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-fredoka text-xl md:text-2xl font-bold mb-4 text-lego-blue">
                      1. Aumento do engajamento dos alunos
                    </h4>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-2">
                      Nossas aulas despertam curiosidade e vontade de aprender.
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Os alunos se envolvem, participam, discutem soluções e constroem juntos — e isso se reflete nas demais disciplinas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-6 md:p-8 border-l-4 border-lego-red shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-lego-red/10 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 md:w-8 md:h-8 text-lego-red" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-fredoka text-xl md:text-2xl font-bold mb-4 text-lego-red">
                      2. Desenvolvimento real de competências do século XXI
                    </h4>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-3">
                      Nada de teoria solta.
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-3">
                      As crianças aprendem na prática habilidades que fazem diferença agora e no futuro:
                    </p>
                    <ul className="list-disc list-inside text-lg text-foreground/80 leading-relaxed space-y-1 ml-4">
                      <li>pensamento crítico</li>
                      <li>criatividade</li>
                      <li>autonomia</li>
                      <li>resolução de problemas</li>
                      <li>colaboração</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-6 md:p-8 border-l-4 border-lego-yellow shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-lego-yellow/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-lego-yellow" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-fredoka text-xl md:text-2xl font-bold mb-4 text-lego-yellow">
                      3. Fortalecimento do projeto pedagógico da escola
                    </h4>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-2">
                      A Robótica BSB se integra ao que a escola já faz, reforçando pilares como inovação, criatividade e formação integral.
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      A escola passa a oferecer uma experiência educacional mais completa, atual e alinhada às novas demandas da educação.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-6 md:p-8 border-l-4 border-lego-green shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-lego-green/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-lego-green" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-fredoka text-xl md:text-2xl font-bold mb-4 text-lego-green">
                      4. Melhoria no clima escolar e nas relações entre os alunos
                    </h4>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-2">
                      Trabalhar em dupla e construir projetos juntos faz nascer algo simples, mas essencial:
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      respeito, diálogo, parceria e empatia.
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed mt-2">
                      A convivência melhora — e a escola sente isso no dia a dia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-6 md:p-8 border-l-4 border-lego-blue shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-lego-blue/10 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 md:w-8 md:h-8 text-lego-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-fredoka text-xl md:text-2xl font-bold mb-4 text-lego-blue">
                      5. Tecnologia com propósito (e não só por tendência)
                    </h4>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      A robótica deixa de ser "só um diferencial" para se tornar uma experiência transformadora, que faz sentido para as crianças e adiciona valor real para a escola.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-6 md:p-8 border-l-4 border-lego-red shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-lego-red/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-lego-red" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-fredoka text-xl md:text-2xl font-bold mb-4 text-lego-red">
                      6. Reconhecimento dos pais e da comunidade escolar
                    </h4>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-2">
                      Os pais enxergam a evolução dos filhos — na postura, no raciocínio, na criatividade — e isso reforça a imagem da escola como um espaço que prepara para a vida.
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Mais do que uma atividade extra, as famílias veem um investimento que realmente entrega crescimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-xl p-8 md:p-10 mb-12 border-2 border-border/40 shadow-lg">
              <p className="font-fredoka text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
                O resultado é simples:
              </p>
              <div className="space-y-3 text-lg md:text-xl text-foreground/80 leading-relaxed">
                <p>✓ Alunos mais confiantes.</p>
                <p>✓ Professores com uma metodologia que funciona.</p>
                <p>✓ Pais que sentem orgulho.</p>
                <p>✓ E uma escola que se posiciona como referência em inovação e formação integral.</p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-80 h-80 bg-lego-green/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-lego-yellow/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Vamos construir o próximo passo juntos Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-lego-blue text-stroke">Vamos</span>{' '}
              <span className="text-lego-red text-stroke">construir</span>{' '}
              <span className="text-lego-yellow text-stroke">o</span>{' '}
              <span className="text-lego-green text-stroke">próximo</span>{' '}
              <span className="text-lego-blue text-stroke">passo</span>{' '}
              <span className="text-lego-red text-stroke">juntos?</span>
            </h2>
            
            
            
            <div className="space-y-6 mb-12">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                A Robótica BSB está pronta para levar sua metodologia, seus valores e sua didática para dentro da sua instituição, de um jeito simples, organizado e totalmente integrado ao projeto pedagógico da escola.
              </p>
              
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Se você acredita em uma educação que prepara para a vida, que desperta curiosidade e desenvolve pensamento criativo, então o próximo movimento é natural: vamos caminhar lado a lado.
              </p>
              
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Porque quando a tecnologia encontra propósito, e quando a escola encontra parceiros que acreditam no mesmo futuro, tudo cresce: as ideias, os alunos e a comunidade inteira.
              </p>
            </div>

            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all animate-pulse" 
              onClick={() => window.open('https://wa.me/5561991864835?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Rob%C3%B3tica%20BSB', '_blank')}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
        
        <div className="absolute top-20 right-10 w-96 h-96 bg-lego-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-lego-red/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-lego-yellow/10 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
      </section>

      <Footer />
    </div>;
};
export default Institucional;