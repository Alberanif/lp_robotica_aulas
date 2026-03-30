import { ChevronLeft, ChevronRight, Sparkles, Brain, GraduationCap, Users, Cpu, Award } from "lucide-react";
import { useState, useCallback, lazy, Suspense } from "react";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
const Footer = lazy(() => import("@/components/landing/Footer"));
import professorLego from "@/assets/professor-lego.webp";
import LegoArrow from "@/components/landing/LegoArrow";
import metodologiaEvolucao from "@/assets/metodologia-evolucao-recortada.webp";
import metodologiaAulas from "@/assets/metodologia-aulas.webp";
import acompanhamentoIndividualizado from "@/assets/acompanhamento-individualizado.webp";
import formacaoIntegral from "@/assets/formacao-integral.webp";
import professoresApaixonados from "@/assets/professores-apaixonados.webp";
import parceriasFlexiveis from "@/assets/parcerias-flexiveis.webp";
import materiaisLegoEducation from "@/assets/materiais-lego-education.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NEO_BTN = "uppercase font-bold border-[3px] border-[#111111] rounded-2xl shadow-[4px_4px_0px_#111111] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#111111] transition-[transform,box-shadow] duration-150 cursor-pointer";

const propositoParagraphs = [
  "Na Robótica BSB, acreditamos que educar é muito mais do que ensinar conteúdo, é despertar o desejo de aprender. E esse desejo nasce quando a criança coloca a mão na massa, erra, tenta de novo e descobre que é capaz.",
  "A robótica é o nosso meio. O verdadeiro fim é formar crianças curiosas, criativas e confiantes, preparadas para resolver problemas reais, colaborar e pensar com autonomia.",
  "Cada projeto, cada desafio, cada montagem é uma oportunidade de exercitar algo que vai além da tecnologia: o caráter, a paciência, o raciocínio e a imaginação. É nesse equilíbrio entre mente e atitude que o aprendizado se transforma em construção de futuro.",
  "Aqui, ensinamos robótica. Mas, no fundo, o que construímos mesmo são pessoas capazes de transformar o mundo.",
];

const propositoColors = ['#01a1e1', '#f01600', '#ffd900', '#45b227'];

const Institucional = () => {
  const [currentDifferential, setCurrentDifferential] = useState(0);
  const [propositoIdx, setPropositoIdx] = useState(0);

  const scrollDown = useCallback(() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }), []);
  const scrollToValores = useCallback(() => document.getElementById('valores-section')?.scrollIntoView({ behavior: 'smooth' }), []);
  const openWhatsApp = useCallback(() => window.open('https://wa.me/5561991864835?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Rob%C3%B3tica%20BSB', '_blank'), []);
  const prevPropósito = useCallback(() => setPropositoIdx(i => Math.max(0, i - 1)), []);
  const nextPropósito = useCallback(() => setPropositoIdx(i => Math.min(propositoParagraphs.length - 1, i + 1)), []);
  const prevDifferential = useCallback(() => setCurrentDifferential(prev => (prev - 1 + 6) % 6), []);
  const nextDifferential = useCallback(() => setCurrentDifferential(prev => (prev + 1) % 6), []);

  const valores = [{
    title: "Respeito",
    description: "Aprender a ouvir, considerar o outro e valorizar as diferenças.",
    colorClass: "text-[#01a1e1]",
    shadowColor: "#01a1e1",
  }, {
    title: "Responsabilidade",
    description: "Cumprir o que promete, terminar o que começa e sentir orgulho disso.",
    colorClass: "text-[#f01600]",
    shadowColor: "#f01600",
  }, {
    title: "Honestidade",
    description: "Agir com verdade, reconhecer erros e valorizar conquistas reais.",
    colorClass: "text-[#ffd900]",
    shadowColor: "#ffd900",
  }, {
    title: "Resiliência",
    description: "Encarar desafios como parte do processo e não como o fim da linha.",
    colorClass: "text-[#45b227]",
    shadowColor: "#45b227",
  }, {
    title: "Colaboração",
    description: "Trabalhar em dupla, dividir ideias e celebrar resultados juntos.",
    colorClass: "text-[#01a1e1]",
    shadowColor: "#01a1e1",
  }, {
    title: "Organização",
    description: "Planejar o caminho antes de agir, porque até a criatividade precisa de estrutura.",
    colorClass: "text-[#f01600]",
    shadowColor: "#f01600",
  }, {
    title: "Companheirismo",
    description: "Ajudar, apoiar e crescer junto. Nenhum projeto é feito sozinho.",
    colorClass: "text-[#ffd900]",
    shadowColor: "#ffd900",
  }, {
    title: "Zelo",
    description: "Cuidar dos materiais, do espaço e do que é compartilhado.",
    colorClass: "text-[#45b227]",
    shadowColor: "#45b227",
  }];

  const diferenciais = [{
    title: "Metodologia própria e progressiva",
    description: "Aqui, o aprendizado acontece em etapas. A criança evolui degrau por degrau, ganhando autonomia, confiança e curiosidade a cada fase. Nada é decorado, tudo é vivido, construído e compreendido.",
    dotColor: "#01a1e1",
  }, {
    title: "Materiais LEGO® Education",
    description: "Trabalhamos com os kits oficiais LEGO® Education, referência mundial em educação tecnológica. Aprender com o que há de melhor é o primeiro passo para formar mentes que pensam grande.",
    dotColor: "#f01600",
  }, {
    title: "Acompanhamento individualizado",
    description: "Cada criança tem seu tempo. Por isso, nossas turmas são reduzidas e o professor acompanha de perto cada avanço, celebrando conquistas e ajustando o ritmo de forma personalizada.",
    dotColor: "#ffd900",
  }, {
    title: "Formação integral",
    description: "Mais do que robôs, formamos pessoas. Nossa metodologia integra tecnologia, valores e propósito, desenvolvendo habilidades cognitivas, emocionais e sociais.",
    dotColor: "#45b227",
  }, {
    title: "Parcerias flexíveis para cada tipo de ensino",
    description: "Nos adaptamos à rotina e ao modelo pedagógico de cada instituição. Podemos atuar dentro da grade, em projetos after school ou como oficinas complementares, sempre levando o DNA da Robótica BSB.",
    dotColor: "#01a1e1",
  }, {
    title: "Professores apaixonados pelo que fazem",
    description: "Nosso time é formado por educadores que vivem o propósito da Robótica BSB. Eles não apenas ensinam, inspiram, motivam e acreditam no potencial de cada aluno.",
    dotColor: "#f01600",
  }];

  const impactos = [{
    icon: Sparkles,
    color: "#01a1e1",
    title: "1. Aumento do engajamento dos alunos",
    content: (<>
      <p className="text-lg text-[#111111]/80 leading-relaxed mb-2">Nossas aulas despertam curiosidade e vontade de aprender.</p>
      <p className="text-lg text-[#111111]/80 leading-relaxed">Os alunos se envolvem, participam, discutem soluções e constroem juntos — e isso se reflete nas demais disciplinas.</p>
    </>),
  }, {
    icon: Brain,
    color: "#f01600",
    title: "2. Desenvolvimento real de competências do século XXI",
    content: (<>
      <p className="text-lg text-[#111111]/80 leading-relaxed mb-2">Nada de teoria solta. As crianças aprendem na prática habilidades que fazem diferença agora e no futuro:</p>
      <ul className="space-y-1 ml-4">
        {["pensamento crítico", "criatividade", "autonomia", "resolução de problemas", "colaboração"].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="highlight-badge text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </>),
  }, {
    icon: GraduationCap,
    color: "#ffd900",
    title: "3. Fortalecimento do projeto pedagógico da escola",
    content: (<>
      <p className="text-lg text-[#111111]/80 leading-relaxed mb-2">A Robótica BSB se integra ao que a escola já faz, reforçando pilares como inovação, criatividade e formação integral.</p>
      <p className="text-lg text-[#111111]/80 leading-relaxed">A escola passa a oferecer uma experiência educacional mais completa, atual e alinhada às novas demandas da educação.</p>
    </>),
  }, {
    icon: Users,
    color: "#45b227",
    title: "4. Melhoria no clima escolar e nas relações entre os alunos",
    content: (<>
      <p className="text-lg text-[#111111]/80 leading-relaxed mb-2">Trabalhar em dupla e construir projetos juntos faz nascer algo simples, mas essencial:</p>
      <p className="text-lg text-[#111111]/80 leading-relaxed font-semibold">respeito, diálogo, parceria e empatia.</p>
      <p className="text-lg text-[#111111]/80 leading-relaxed mt-2">A convivência melhora — e a escola sente isso no dia a dia.</p>
    </>),
  }, {
    icon: Cpu,
    color: "#01a1e1",
    title: "5. Tecnologia com propósito (e não só por tendência)",
    content: (<p className="text-lg text-[#111111]/80 leading-relaxed">A robótica deixa de ser "só um diferencial" para se tornar uma experiência transformadora, que faz sentido para as crianças e adiciona valor real para a escola.</p>),
  }, {
    icon: Award,
    color: "#f01600",
    title: "6. Reconhecimento dos pais e da comunidade escolar",
    content: (<>
      <p className="text-lg text-[#111111]/80 leading-relaxed mb-2">Os pais enxergam a evolução dos filhos — na postura, no raciocínio, na criatividade — e isso reforça a imagem da escola como um espaço que prepara para a vida.</p>
      <p className="text-lg text-[#111111]/80 leading-relaxed">Mais do que uma atividade extra, as famílias veem um investimento que realmente entrega crescimento.</p>
    </>),
  }];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#faefd9] pt-12 pb-16 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            {/* ROBÓTICA BSB — letras coloridas */}
            <h1 className="flex flex-wrap justify-center gap-0 mb-2" aria-label="Robótica BSB">
              {[
                { char: "R", color: "#00A8FF" },
                { char: "O", color: "#FBC531" },
                { char: "B", color: "#E84118" },
                { char: "Ó", color: "#4CD137" },
                { char: "T", color: "#00A8FF" },
                { char: "I", color: "#FBC531" },
                { char: "C", color: "#E84118" },
                { char: "A", color: "#4CD137" },
                { char: " ", color: "" },
                { char: "B", color: "#00A8FF" },
                { char: "S", color: "#FBC531" },
                { char: "B", color: "#E84118" },
              ].map((l, i) =>
                l.char === " " ? (
                  <span key={i} className="inline-block w-3 sm:w-5 md:w-7" />
                ) : (
                  <span
                    key={i}
                    className="font-fredoka font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-stroke"
                    style={{ color: l.color }}
                  >
                    {l.char}
                  </span>
                )
              )}
            </h1>

            {/* NOS CONDOMÍNIOS — efeito carimbo */}
            <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-8">
              <div className="animate-stamp inline-block border-[5px] border-[#01a1e1] rounded-2xl md:rounded-3xl px-6 md:px-10 py-2 md:py-3 bg-white/50 backdrop-blur-sm">
                <span className="font-fredoka font-bold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  <span style={{ color: "#FBC531" }}>Nos </span>
                  <span style={{ color: "#4CD137" }}>Condomínios</span>
                </span>
              </div>
            </div>

            {/* 3 destaques */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {[
                { text: "+ 500 Alunos",      border: "#01a1e1", dot: "#01a1e1" },
                { text: "Metodologia Única", border: "#f01600", dot: "#f01600" },
                { text: "Desde 2022",        border: "#45b227", dot: "#45b227" },
              ].map((h) => (
                <div
                  key={h.text}
                  className="bg-white rounded-full px-4 sm:px-5 py-2 flex items-center gap-2 font-semibold text-sm sm:text-base text-[#111] border-2"
                  style={{ borderColor: h.border }}
                >
                  <span style={{ color: h.dot }}>✦</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>

            {/* Vídeo YouTube — estilo Shorts (9:16) */}
            <div className="relative mx-auto mb-8 w-full max-w-[320px] sm:max-w-[360px]">
              <div className="border-[4px] border-[#111111] rounded-[2rem] shadow-[12px_12px_0px_#01a1e1] overflow-hidden aspect-[9/16]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/oC9XI4Ja5IE"
                  title="Robótica BSB - Condomínios"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Card de contato */}
            <div className="relative w-full max-w-[360px] mx-auto mt-16 mb-4">
              {/* Avatar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 rounded-full border-[4px] border-[#ffd900] overflow-hidden bg-[#faefd9] shadow-lg">
                  <img
                    src="/images/Emanuel.png"
                    alt="Prof. Emanuel"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
              {/* Card body */}
              <div className="bg-white border-[6px] border-[#01a1e1] rounded-[1.5rem] pt-12 pb-6 px-6 text-center shadow-md">
                <p className="font-bold text-[#111111] text-lg leading-tight mb-1">
                  Robótica BSB | Prof. Emanuel
                </p>
                <p className="text-gray-400 text-sm">WhatsApp business account</p>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=5561991864835&text=Ol%C3%A1%21+Eu+gostaria+de+saber+mais+sobre+as+aulas+de+rob%C3%B3tica&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1a4731] hover:bg-[#1f5a3d] text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors duration-200 mt-2 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Nosso Propósito ── */}
      <section className="relative pt-20 pb-8 bg-[#faefd9]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">

            {/* Moldura fixa */}
            <div
              className="border-[3px] border-[#111111] rounded-2xl bg-[#fffef5] transition-shadow duration-500"
              style={{ boxShadow: `8px 8px 0px ${propositoColors[propositoIdx]}` }}
            >
              {/* Header fixo */}
              <div className="flex items-center justify-between px-8 py-6 md:px-10 md:py-7 border-b-[3px] border-[#111111]">
                <h2 className="font-fredoka text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-[#01a1e1] text-stroke-sm">Nosso</span>{' '}
                  <span className="text-[#f01600] text-stroke-sm">Propósito</span>
                </h2>
                <img
                  src={professorLego}
                  alt="Professor de Robótica"
                  className="w-20 h-20 md:w-28 md:h-28 object-contain"
                  loading="lazy"
                  width={112}
                  height={112}
                />
              </div>

              {/* Área dos cards — grid para altura automática */}
              <div className="grid overflow-hidden">
                {propositoParagraphs.map((text, i) => {
                  const offset = i - propositoIdx;
                  const isPast = offset < 0;
                  const isCurrent = offset === 0;

                  return (
                    <div
                      key={i}
                      className="[grid-area:1/1] px-8 py-8 md:px-10 md:py-10"
                      style={{
                        transform: isPast ? 'translateX(-24px)' : isCurrent ? 'translateX(0)' : 'translateX(24px)',
                        opacity: isCurrent ? 1 : 0,
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s',
                        pointerEvents: isCurrent ? 'auto' : 'none',
                      }}
                    >
                      <p className="font-body text-lg md:text-xl text-[#111111]/90 leading-relaxed">{text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Navegação fixa */}
              <div className="flex items-center justify-between px-8 py-5 md:px-10 border-t-[3px] border-[#111111]">
                <button
                  onClick={prevPropósito}
                  disabled={propositoIdx === 0}
                  className={`${NEO_BTN} w-11 h-11 flex items-center justify-center bg-white disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0`}
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                  {propositoParagraphs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPropositoIdx(i)}
                      className="w-3 h-3 rounded-full border-2 border-[#111111] transition-all duration-300"
                      style={i === propositoIdx ? { backgroundColor: propositoColors[i], transform: 'scale(1.3)' } : {}}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPropósito}
                  disabled={propositoIdx === propositoParagraphs.length - 1}
                  className={`${NEO_BTN} w-11 h-11 flex items-center justify-center bg-white disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Metodologia ── */}
      <section className="relative pt-8 pb-20 bg-[#faefd9]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
              <span className="text-[#f01600] text-stroke">A</span>{' '}
              <span className="text-[#01a1e1] text-stroke">Metodologia</span>{' '}
              <span className="text-[#ffd900] text-stroke">que</span>{' '}
              <span className="text-[#45b227] text-stroke">Evolui</span>
              <br />
              <span className="text-[#01a1e1] text-stroke">com</span>{' '}
              <span className="text-[#f01600] text-stroke">a</span>{' '}
              <span className="text-[#ffd900] text-stroke">Criança</span>
            </h2>

            <p className="text-xl md:text-2xl text-[#111111]/90 mb-8 font-medium leading-relaxed text-left">
              Aprender robótica na Robótica BSB é como subir uma escada de descobertas.
              Cada degrau representa um novo desafio, uma nova conquista e, acima de tudo, um novo aprendizado sobre si mesmo.
            </p>

            <p className="text-lg md:text-xl text-[#111111]/80 leading-relaxed mb-12 text-left">
              Nossas aulas são estruturadas para que cada criança avance no seu ritmo, com orientação próxima do professor e um ambiente que valoriza a curiosidade, o erro e o recomeço.
              A cada nível, ela desenvolve novas habilidades técnicas e emocionais, fortalecendo a confiança para continuar subindo.
            </p>

            <div className="flex justify-center">
              <img
                src={metodologiaEvolucao}
                alt="Metodologia que evolui com a criança"
                className="w-full max-w-4xl h-auto border-[4px] border-[#111111] rounded-2xl shadow-[12px_12px_0px_#45b227] aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-lg md:text-xl text-[#111111]/80 leading-relaxed mt-12 text-center max-w-4xl mx-auto">
              Cada degrau prepara o próximo. E quando a criança olha para trás, percebe o quanto cresceu, não só em conhecimento, mas em autonomia, criatividade e confiança.
            </p>

            <div className="flex justify-center mt-12">
              <button
                className={`${NEO_BTN} bg-[#01a1e1] text-white text-lg px-8 py-4`}
                onClick={scrollToValores}
              >
                Conheça Nossos Valores
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section id="valores-section" className="relative py-20 bg-[#faefd9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
              <span className="text-[#01a1e1] text-stroke">Mais</span>{' '}
              <span className="text-[#f01600] text-stroke">do</span>{' '}
              <span className="text-[#ffd900] text-stroke">que</span>{' '}
              <span className="text-[#45b227] text-stroke">robótica,</span>
              <br />
              <span className="text-[#01a1e1] text-stroke">valores</span>{' '}
              <span className="text-[#f01600] text-stroke">para</span>{' '}
              <span className="text-[#ffd900] text-stroke">a</span>{' '}
              <span className="text-[#45b227] text-stroke">vida</span>
            </h2>

            <p className="text-xl md:text-2xl text-[#111111]/90 mb-12 font-medium leading-relaxed text-center max-w-4xl mx-auto">
              Porque cada projeto ensina muito mais do que tecnologia, ensina a ser humano.
            </p>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {valores.map((valor, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-[3px] border-[#111111] rounded-2xl overflow-hidden bg-[#fffef5]"
                    style={{ boxShadow: `4px 4px 0px #111111` }}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className={`font-fredoka text-2xl md:text-3xl font-bold ${valor.colorClass} text-stroke-sm`}>
                        {valor.title}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-lg text-[#111111]/80 leading-relaxed">
                        {valor.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="flex justify-center mt-12">
              <button
                className={`${NEO_BTN} bg-[#ffd900] text-[#111111] text-base md:text-lg px-4 py-4 md:px-8`}
                onClick={scrollDown}
              >
                Veja os Valores na Prática
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="relative py-20 bg-[#faefd9]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-8 leading-tight text-center">
              <span className="text-[#01a1e1] text-stroke">Nossos</span>{' '}
              <span className="text-[#f01600] text-stroke">Diferenciais</span>
            </h2>

            <p className="text-xl md:text-2xl text-[#111111]/90 mb-12 font-medium leading-relaxed text-center max-w-4xl mx-auto">
              Cada detalhe da nossa metodologia foi pensado para tornar o aprendizado mais humano, criativo e significativo.
            </p>

            {/* Carousel */}
            <div className="relative">
              {/* Card */}
              <div className="border-[4px] border-[#111111] rounded-2xl shadow-[14px_14px_0px_#01a1e1] bg-white p-8 md:p-12 min-h-[520px] flex flex-col">
                {/* Imagem */}
                <div className="relative rounded-xl mb-6 w-full aspect-[4/3] overflow-hidden border-[3px] border-[#111111] flex items-center justify-center bg-[#faefd9]">
                  {currentDifferential === 0 ? (
                    <img src={metodologiaAulas} alt="Metodologia de ensino progressiva" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  ) : currentDifferential === 1 ? (
                    <img src={materiaisLegoEducation} alt="Materiais LEGO® Education" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  ) : currentDifferential === 2 ? (
                    <img src={acompanhamentoIndividualizado} alt="Acompanhamento individualizado" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  ) : currentDifferential === 3 ? (
                    <img src={formacaoIntegral} alt="Formação integral" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  ) : currentDifferential === 4 ? (
                    <img src={parceriasFlexiveis} alt="Parcerias flexíveis" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  ) : (
                    <img src={professoresApaixonados} alt="Professores apaixonados" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  )}

                  {/* Botão Prev */}
                  <button
                    onClick={prevDifferential}
                    className="absolute left-2 top-1/2 -translate-y-1/2 border-[3px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] rounded-full p-3 bg-[#ffd900] transition-all"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-6 w-6 text-[#111111]" />
                  </button>

                  {/* Botão Next */}
                  <button
                    onClick={nextDifferential}
                    className="absolute right-2 top-1/2 -translate-y-1/2 border-[3px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] rounded-full p-3 bg-[#ffd900] transition-all"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="h-6 w-6 text-[#111111]" />
                  </button>
                </div>

                <div className="flex-1">
                  <h3 className="font-fredoka text-2xl md:text-3xl font-bold mb-6 text-[#111111]">
                    {diferenciais[currentDifferential].title}
                  </h3>
                  <p className="text-lg md:text-xl text-[#111111]/80 leading-relaxed">
                    {diferenciais[currentDifferential].description}
                  </p>
                </div>

                {/* Indicadores LEGO coloridos */}
                <div className="flex justify-center gap-3 mt-8">
                  {diferenciais.map((d, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDifferential(index)}
                      className="w-4 h-4 rounded-full border-[2px] border-[#111111] transition-all duration-300"
                      style={{
                        backgroundColor: index === currentDifferential ? d.dotColor : '#ccc',
                        boxShadow: index === currentDifferential ? `2px 2px 0px #111111` : 'none',
                        transform: index === currentDifferential ? 'scale(1.2)' : 'scale(1)',
                      }}
                      aria-label={`Ir para diferencial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

            <div className="flex justify-center mt-12">
              <button
                className={`${NEO_BTN} bg-[#45b227] text-white text-lg px-8 py-4`}
                onClick={openWhatsApp}
              >
                Agende Uma Apresentação
              </button>
            </div>
          </div>
        </div>
      </section>



      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Institucional;
