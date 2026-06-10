import { useState } from "react";

const VIDEO_ID = "oC9XI4Ja5IE";

export default function HeroVideoArea() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-8 md:mt-10 lg:mt-12">
      <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[9/16] bg-black rounded-[2rem] overflow-hidden border-[6px] border-brand-dark shadow-[15px_15px_0px_#f01600] z-20">
        {loaded ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
            title="Robótica BSB - Condomínios"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="relative w-full h-full group cursor-pointer border-0 p-0 bg-transparent"
            aria-label="Assistir vídeo da Robótica BSB"
          >
            <img
              src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Thumbnail do vídeo Robótica BSB Condomínios"
              className="w-full h-full object-cover"
              loading="eager"
              width={320}
              height={568}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-200">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white ml-1" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[60%] bg-brand-yellow/20 -rotate-3 rounded-[3rem] -z-10 blur-xl md:blur-2xl" />
    </div>
  );
}
