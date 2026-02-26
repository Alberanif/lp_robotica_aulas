import Image from "next/image";

export default function Header() {
    return (
        <header className="relative flex items-center justify-between px-2 sm:px-5 py-3 lg:px-10 lg:py-[15px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] min-h-[70px] lg:min-h-[110px] w-full z-50 overflow-hidden">

            {/* Logo à esquerda */}
            <div className="z-10 flex-1 flex justify-start items-center">
                <div className="animate-rocket-land">
                    <Image
                        src="/images/Logo - Robótica BSB.svg"
                        alt="Logo Robótica BSB"
                        width={300}
                        height={100}
                        className="h-[40px] min-[375px]:h-[48px] sm:h-[56px] md:h-[64px] lg:h-[84px] w-auto block"
                        priority
                    />
                </div>
            </div>

            {/* Texto Central */}
            <div className="z-10 flex-shrink-0 flex justify-center items-center pointer-events-none">
                <h1 className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-1 min-[375px]:gap-1.5 md:gap-2 lg:gap-[12px] text-[4.2vw] min-[375px]:text-[16px] min-[400px]:text-[18px] sm:text-[24px] md:text-[2.2rem] lg:text-[2.6rem] font-extrabold uppercase pointer-events-auto shiny-title-text font-display tracking-tight">
                    <span
                        className="text-transparent bg-clip-text animate-shine bg-[length:200%_auto]"
                        style={{
                            backgroundImage: "linear-gradient(110deg, #01a1e1 0%, #01a1e1 40%, #ffffff 50%, #01a1e1 60%, #01a1e1 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            WebkitTextStroke: "0",
                        }}
                    >
                        Formando
                    </span>
                    <span
                        className="text-transparent bg-clip-text animate-shine bg-[length:200%_auto]"
                        style={{
                            backgroundImage: "linear-gradient(110deg, #f01600 0%, #f01600 40%, #ffffff 50%, #f01600 60%, #f01600 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            WebkitTextStroke: "0",
                        }}
                    >
                        a
                    </span>
                    <span
                        className="text-transparent bg-clip-text animate-shine bg-[length:200%_auto]"
                        style={{
                            backgroundImage: "linear-gradient(110deg, #45b227 0%, #45b227 40%, #ffffff 50%, #45b227 60%, #45b227 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            WebkitTextStroke: "0",
                        }}
                    >
                        Próxima
                    </span>
                    <span
                        className="text-transparent bg-clip-text animate-shine bg-[length:200%_auto]"
                        style={{
                            backgroundImage: "linear-gradient(110deg, #ffd900 0%, #ffd900 40%, #ffffff 50%, #ffd900 60%, #ffd900 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            WebkitTextStroke: "0",
                        }}
                    >
                        Geração
                    </span>
                </h1>
            </div>

            {/* Robô à direita */}
            <div className="z-10 flex-1 flex justify-end items-center">
                <div className="animate-rocket-land">
                    <Image
                        src="/images/Robo.svg"
                        alt="Robô"
                        width={50}
                        height={50}
                        className="w-[26px] h-[26px] min-[375px]:w-[30px] min-[375px]:h-[30px] sm:w-[38px] sm:h-[38px] md:w-[44px] md:h-[44px] lg:w-[50px] lg:h-[50px]"
                    />
                </div>
            </div>

        </header>
    );
}
