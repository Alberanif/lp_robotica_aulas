import React from 'react';

export default function ContactCondo() {
    const whatsappLink =
        'https://api.whatsapp.com/send/?phone=5561991864835&text=Ol%C3%A1%21+Eu+gostaria+de+saber+mais+sobre+as+aulas+de+rob%C3%B3tica&type=phone_number&app_absent=0';

    return (
        <section className="w-full py-16 px-4 flex flex-col items-center justify-center relative z-10">
            <div className="relative w-full max-w-[380px] flex flex-col items-center gap-6">

                {/* WhatsApp Shiny Button */}
                <div className="inline-block bg-transparent">
                    <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

                        @property --wa-gradient-angle {
                            syntax: "<angle>";
                            initial-value: 0deg;
                            inherits: false;
                        }

                        @property --wa-gradient-angle-offset {
                            syntax: "<angle>";
                            initial-value: 0deg;
                            inherits: false;
                        }

                        @property --wa-gradient-percent {
                            syntax: "<percentage>";
                            initial-value: 20%;
                            inherits: false;
                        }

                        @property --wa-gradient-shine {
                            syntax: "<color>";
                            initial-value: #a7f3d0;
                            inherits: false;
                        }

                        .shiny-cta-wa {
                            --wa-gradient-angle: 0deg;
                            --wa-gradient-angle-offset: 0deg;
                            --wa-gradient-percent: 20%;
                            --wa-gradient-shine: #a7f3d0;
                            --shadow-size: 2px;
                            position: relative;
                            overflow: hidden;
                            border-radius: 9999px;
                            padding: 1.1rem 2.2rem;
                            font-size: 1.05rem;
                            line-height: 1.2;
                            font-weight: 500;
                            color: #ffffff;
                            background: linear-gradient(#0d3320, #0d3320) padding-box,
                                conic-gradient(
                                    from calc(var(--wa-gradient-angle) - var(--wa-gradient-angle-offset)),
                                    transparent 0%,
                                    #25D366 5%,
                                    var(--wa-gradient-shine) 15%,
                                    #25D366 30%,
                                    transparent 40%,
                                    transparent 100%
                                ) border-box;
                            border: 2px solid transparent;
                            box-shadow: inset 0 0 0 1px #1a5c35;
                            outline: none;
                            transition:
                                --wa-gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1),
                                --wa-gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1),
                                --wa-gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1),
                                box-shadow 0.3s;
                            cursor: pointer;
                            isolation: isolate;
                            outline-offset: 4px;
                            font-family: 'Inter', 'Helvetica Neue', sans-serif;
                            z-index: 0;
                            animation: wa-border-spin 2.5s linear infinite;
                            text-decoration: none;
                            display: inline-flex;
                            align-items: center;
                            gap: 0.6rem;
                        }

                        @keyframes wa-border-spin {
                            to {
                                --wa-gradient-angle: 360deg;
                            }
                        }

                        .shiny-cta-wa:active {
                            transform: translateY(1px);
                        }

                        .shiny-cta-wa::before {
                            content: '';
                            pointer-events: none;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            z-index: 0;
                            --size: calc(100% - 6px);
                            --position: 2px;
                            --space: 4px;
                            width: var(--size);
                            height: var(--size);
                            background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box;
                            background-size: var(--space) var(--space);
                            background-repeat: space;
                            mask-image: conic-gradient(from calc(var(--wa-gradient-angle) + 45deg), black, transparent 10% 90%, black);
                            border-radius: inherit;
                            opacity: 0.4;
                            pointer-events: none;
                        }

                        .shiny-cta-wa::after {
                            content: '';
                            pointer-events: none;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            z-index: 1;
                            width: 100%;
                            aspect-ratio: 1;
                            background: linear-gradient(-50deg, transparent, #6effa8, transparent);
                            mask-image: radial-gradient(circle at bottom, transparent 40%, black);
                            opacity: 0.75;
                            animation: wa-shimmer 4s linear infinite;
                        }

                        .shiny-cta-wa span {
                            position: relative;
                            z-index: 2;
                            display: inline-flex;
                            align-items: center;
                            gap: 0.5rem;
                        }

                        .shiny-cta-wa span::before {
                            content: '';
                            pointer-events: none;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            z-index: -1;
                            --size: calc(100% + 1rem);
                            width: var(--size);
                            height: var(--size);
                            box-shadow: inset 0 -1ex 2rem 4px #25D366;
                            opacity: 0;
                            border-radius: inherit;
                            transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1);
                            animation: wa-breathe 4.5s linear infinite;
                        }

                        @keyframes wa-shimmer {
                            to {
                                transform: translate(-50%, -50%) rotate(360deg);
                            }
                        }

                        @keyframes wa-breathe {
                            0%, 100% { transform: translate(-50%, -50%) scale(1); }
                            50% { transform: translate(-50%, -50%) scale(1.20); }
                        }
                    `}</style>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shiny-cta-wa focus:outline-none"
                    >
                        <span>
                            {/* WhatsApp SVG Logo */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width="22"
                                height="22"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Falar no WhatsApp
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
