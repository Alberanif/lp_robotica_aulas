import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
import Footer from "@/components/landing/Footer";
import { CheckCircle2, X, Gift, Shield, Quote, Lightbulb, Zap, Rocket } from "lucide-react";
const AulaExperimental = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Quero garantir a vaga do meu filho na Semana da Robótica na Prática!");
    window.open(`https://wa.me/5561999999999?text=${message}`, '_blank');
  };
  return <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* SEÇÃO 1: HERO + PROMESSA + CTA */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8 px-2 sm:px-4">
            <h1 className="font-fredoka font-bold leading-tight sm:leading-snug md:leading-normal">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5">
                Seu filho vai terminar o ano
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5">
                só consumindo tecnologia...
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                ou criando com ela?
              </span>
            </h1>

            {/* Subheadline e contexto */}
            <div className="space-y-6 max-w-3xl mx-auto">
              
              
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Na Semana da Robótica na Prática, seu filho vai construir projetos incríveis, desenvolver raciocínio lógico e criatividade, e levar pra casa um diário de conquistas visíveis.
              </p>

              {/* Placeholder para imagem */}
              <div className="rounded-2xl overflow-hidden bg-muted/50 backdrop-blur-sm border border-border">
                <div className="aspect-video flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">
                    [Imagem: crianças montando robôs, sorrindo, ambiente acolhedor]
                  </p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Nada de teoria ou proibição: aqui é mão na massa, com acompanhamento individual e resultados que você consegue ver
              </p>
            </div>

            {/* Caixa destacada */}
            <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Última edição do ano • Só 20 vagas • Inscrições até 1/12
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" onClick={handleWhatsApp} className="text-base md:text-lg lg:text-xl px-6 md:px-8 py-4 md:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                QUERO UMA VAGA
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 2: ÚLTIMA CHANCE & CONTRASTE */}
      <section className="py-20 px-4 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8 px-2 sm:px-4">
            <h2 className="font-fredoka font-bold leading-tight sm:leading-snug md:leading-normal">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5 my-px">
                Essa é a
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5 mx-px my-0">
                última oportunidade
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent my-0">
                do ano
              </span>
            </h2>

            {/* Parágrafo introdutório */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/5 backdrop-blur-md border-2 border-green-500 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-fredoka font-semibold text-center">
                Para o seu filho  ter uma experiência que vai muito além da diversão
              </p>
            </div>

            {/* Texto de urgência */}
            <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
              <div className="border-t-2 border-border/70 pt-6">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-normal">
                  Se você deixar pra depois, as férias vão começar…
                </p>
              </div>

              <div className="border-b-2 border-border/70 pb-6">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-normal">
                  E seu filho pode passar semanas viciado em vídeos, jogos e redes sociais, consumindo tecnologia de forma passiva.
                </p>
              </div>

              <p className="font-fredoka md:text-xl leading-relaxed font-semibold bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent text-2xl">
                Ou você pode aproveitar agora e ver ele:
              </p>
            </div>

            {/* Bullets de benefícios com cores individuais */}
            <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto py-8 md:py-12">
              {/* Bullet 1 - Verde - Resolver Problemas */}
              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-green-500/20 to-emerald-600/10 backdrop-blur-md border-2 border-green-500/50 rounded-lg p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-lg">
                <Lightbulb className="h-10 w-10 text-green-600" />
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
                  Aprendendo a construir e resolver problemas de verdade
                </p>
              </div>
              
              {/* Bullet 2 - Azul - Tecnologia */}
              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-md border-2 border-blue-500/50 rounded-lg p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-lg">
                <Zap className="h-10 w-10 text-blue-600" />
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
                  Usando a tecnologia como ferramenta ao invés de distração
                </p>
              </div>
              
              {/* Bullet 3 - Roxo - Futuro */}
              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-md border-2 border-purple-500/50 rounded-lg p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-lg">
                <Rocket className="h-10 w-10 text-purple-600" />
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
                  Desenvolvendo habilidades para a vida toda
                </p>
              </div>
            </div>

            {/* Texto de urgência final */}
            <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto pt-6">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-semibold">
                Não existe "depois" quando o assunto é preparar seu filho pro futuro
              </p>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                As vagas são limitadas e, depois dessa edição, só no ano que vem (e com valor maior)
              </p>
            </div>

            {/* Placeholder para imagem de contraste */}
            <div className="mt-12 rounded-2xl overflow-hidden max-w-4xl mx-auto bg-muted/50 backdrop-blur-sm border border-border">
              <div className="aspect-video flex items-center justify-center">
                <p className="text-muted-foreground text-sm text-center px-4">
                  [Imagem: à esquerda, criança olhando para tela de celular/tablet; à direita, criança montando robô, sorrindo]
                </p>
              </div>
            </div>

            {/* CTA repetido */}
            <div className="pt-8">
              <Button size="lg" onClick={handleWhatsApp} className="text-base md:text-lg lg:text-xl px-6 md:px-8 py-4 md:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-[#c3ce23]">
                QUERO SABER MAIS!  
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: BENEFÍCIOS, BÔNUS E GARANTIA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16 px-2 sm:px-4">
            <h2 className="font-fredoka font-bold leading-tight sm:leading-snug md:leading-normal">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5 mx-0 my-0">
                O que seu filho vai viver
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  nessa{" "}
                </span>
                <span className="bg-gradient-to-r from-red-500 to-rose-700 bg-clip-text text-transparent">
                  experiência única
                </span>
              </span>
            </h2>
          </div>
          <div className="mb-16 md:mb-20" />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Coluna esquerda: Benefícios e Bônus */}
            <div className="space-y-8">
              {/* Lista de benefícios principais */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90">
                    <strong>4 aulas presenciais, semanais</strong>, com turmas reduzidas e atenção individual
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90">
                    <strong>Cada encontro:</strong> um novo projeto construído com as próprias mãos
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90">
                    Desenvolvimento de <strong>criatividade, raciocínio lógico e trabalho em equipe</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90">
                    <strong>Diário de Aula</strong> com fotos dos projetos pra registrar cada conquista
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90">
                    <strong>Certificado de Conquista + Medalha</strong> de "Jovem Inventor(a)" pra celebrar o avanço
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90">
                    <strong>Sessão de feedback individual</strong> pra você acompanhar o desenvolvimento do seu filho
                  </p>
                </div>
              </div>

              {/* Bônus exclusivos */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-xl p-6 space-y-4">
                <div className="flex flex-col items-center gap-3 mb-4">
                  <Gift className="h-12 w-12 text-primary" />
                  <h3 className="font-fredoka text-xl md:text-2xl font-bold text-primary text-center">
                    Bônus exclusivos pra quem garantir a vaga agora:
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground/90">Diário de Aula Personalizado (com fotos de cada projeto)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground/90">Certificado + Medalha de Jovem Inventor(a)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground/90">Sessão de feedback individual para os pais</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Coluna direita: Imagem */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden bg-muted/50 backdrop-blur-sm border border-border">
                <div className="aspect-square flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">
                    [Imagem: medalha de jovem inventor, diário de aula com fotos, projeto de robótica pronto]
                  </p>
                </div>
              </div>

              {/* Garantia destacada */}
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <p className="text-lg md:text-xl text-center font-semibold text-foreground leading-relaxed">
                  Se, após a primeira aula, seu filho não sair querendo voltar, <span className="text-accent">nós devolvemos 100% do valor investido!</span>
                </p>
                
              </div>

              {/* Investimento */}
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary rounded-xl p-6 text-center space-y-3">
                <h3 className="font-fredoka text-xl md:text-2xl font-bold text-foreground">
                  Investimento promocional exclusivo desta edição:
                </h3>
                <div className="space-y-2">
                  <p className="text-base md:text-lg text-foreground/70 line-through">De R$ 547 por apenas</p>
                  <p className="font-fredoka text-5xl md:text-6xl font-bold text-secondary">
                    R$ 297
                  </p>
                </div>
                <p className="text-sm text-foreground/70 font-semibold">
                  Essa condição só vale até 1/12 ou enquanto durarem as vagas
                </p>
              </div>
            </div>
          </div>

          {/* CTA repetido */}
          <div className="text-center mt-12">
            <Button size="lg" onClick={handleWhatsApp} className="text-base md:text-lg lg:text-xl px-6 md:px-8 py-4 md:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-[#12b212]">
              QUERO FAZER PARTE  
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: DEPOIMENTOS E REFORÇO FINAL DE URGÊNCIA */}
      <section className="py-20 px-4 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16 px-2 sm:px-4">
            <h2 className="font-fredoka font-bold leading-tight sm:leading-snug md:leading-normal">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-4 md:mb-5">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Nada melhor{" "}
                </span>
                <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  do que ouvir
                </span>
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  de quem já viveu{" "}
                </span>
                <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
                  essa transformação
                </span>
              </span>
            </h2>
          </div>
          <div className="mb-16 md:mb-20" />

          {/* Grid de depoimentos */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
            {/* Depoimento 1 */}
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 space-y-4 relative">
              <Quote className="h-10 w-10 text-primary/30 absolute top-4 right-4" />
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-sm text-center px-4">
                  [Espaço para vídeo/áudio/<br />texto de depoimento 1]
                </p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-foreground">Nome do Pai/Mãe</p>
                <p className="text-sm text-foreground/70">Pai/Mãe do(a) [Nome da criança]</p>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 space-y-4 relative">
              <Quote className="h-10 w-10 text-primary/30 absolute top-4 right-4" />
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-sm text-center px-4">
                  [Espaço para vídeo/áudio/<br />texto de depoimento 2]
                </p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-foreground">Nome do Pai/Mãe</p>
                <p className="text-sm text-foreground/70">Pai/Mãe do(a) [Nome da criança]</p>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 space-y-4 relative">
              <Quote className="h-10 w-10 text-primary/30 absolute top-4 right-4" />
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-sm text-center px-4">
                  [Espaço para vídeo/áudio/<br />texto de depoimento 3]
                </p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-foreground">Nome do Pai/Mãe</p>
                <p className="text-sm text-foreground/70">Pai/Mãe do(a) [Nome da criança]</p>
              </div>
            </div>
          </div>

          {/* Reforço após depoimentos */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              Esses pais investiram no futuro dos filhos e viram o quanto a tecnologia pode ser uma aliada no crescimento dos filhos    
            </p>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-md border-2 border-blue-500 rounded-xl p-6 space-y-3 mt-4">
              <p className="text-xl md:text-2xl font-fredoka font-semibold text-foreground">
                Não deixe pra depois:
              </p>
              <p className="text-lg md:text-xl text-foreground/90">
                As vagas são limitadas e essa é a última chance do ano para o seu filho participar          
              </p>
            </div>

            {/* CTA final */}
            <div className="pt-8">
              <Button size="lg" onClick={handleWhatsApp} className="text-base md:text-lg lg:text-xl px-6 md:px-8 py-4 md:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                ENTRAR EM CONTATO  
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AulaExperimental;