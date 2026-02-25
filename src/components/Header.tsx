import Image from "next/image";

export default function Header() {
    return (
        <header className="relative flex items-center px-2 sm:px-5 py-3 lg:px-10 lg:py-[15px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] min-h-[60px] lg:min-h-[100px] flex-row justify-between w-full z-50 overflow-hidden gap-2 sm:gap-4">

            {/* Logo à esquerda */}
            <div className="z-10 flex-shrink-0">
                <Image
                    src="/images/Logo - Robótica BSB.svg"
                    alt="Logo Robótica BSB"
                    width={300}
                    height={100}
                    className="h-[32px] min-[375px]:h-[40px] sm:h-[48px] md:h-[56px] lg:h-[70px] w-auto block"
                    priority
                />
            </div>

            {/* Texto Central / Direita */}
            <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none w-full px-[10px] sm:px-[100px] md:px-[120px] lg:px-0 flex justify-center">
                <h1 className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-1 min-[375px]:gap-1.5 md:gap-2 lg:gap-[12px] text-[3.8vw] min-[375px]:text-[14px] min-[400px]:text-[16px] sm:text-[20px] md:text-[1.8rem] lg:text-[2.2rem] font-extrabold uppercase pointer-events-auto shiny-title-text font-display tracking-tight">

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

                    <div className="inline-flex items-center gap-1 min-[375px]:gap-1.5 md:gap-2 lg:gap-[12px]">
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
                        <div className="inline-flex items-center justify-center animate-rocket-land">
                            <Image
                                src="/images/Foguete.svg"
                                alt="Foguete"
                                width={42}
                                height={42}
                                className="w-[20px] h-[20px] min-[375px]:w-[24px] min-[375px]:h-[24px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px]"
                            />
                        </div>
                    </div>
                </h1>
            </div>

        </header>
    );
}
