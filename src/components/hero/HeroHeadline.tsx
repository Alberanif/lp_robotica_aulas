import TextType from "@/components/ui/TextType";

export default function HeroHeadline() {
  return (
    <div className="font-body text-brand-dark text-sm md:text-base leading-relaxed max-w-xl mx-auto text-center h-[60px] md:h-[72px]">
      <TextType
        as="p"
        text="Mais do que uma aula de robótica, uma verdadeira experiência de aprendizado para que seu filho domine a tecnologia enquanto se diverte"
        typingSpeed={35}
        loop={false}
        showCursor={true}
        cursorCharacter="|"
        startOnVisible={true}
      />
    </div>
  );
}
