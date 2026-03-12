export default function HeroVideoArea() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-8 md:mt-10 lg:mt-12">
      {/* Video Container - Vertical Ratio 9:16 */}
      <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[9/16] bg-black rounded-[2rem] overflow-hidden border-[6px] border-brand-dark shadow-[15px_15px_0px_#f01600] z-20">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0&modestbranding=1"
          title="Vídeo de Robótica BSB"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[60%] bg-brand-yellow/20 -rotate-3 rounded-[3rem] -z-10 blur-xl md:blur-2xl" />
    </div>
  );
}
