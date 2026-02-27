import React from 'react';

const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="mr-3"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

export default function ContactCTASection() {
    return (
        <section className="w-full py-16 md:py-20 flex justify-center items-center relative z-10">
            <style>{`
        .reflection-wrapper {
            position: relative;
            display: inline-block;
            -webkit-box-reflect: below 2px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
        }

        .botao-mvm {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 20px 60px;
            background: radial-gradient(67.54% 100.03% at 50% 0%, #a3f294 0%, #76db63 25.48%, #45b227 62.5%, #2a7e14 100%);
            border: 1.196px solid rgba(255, 255, 255, 0.3);
            border-radius: 15.623px;
            box-shadow: 0 5.98px 23.203px 0 rgba(69, 178, 39, 0.20), 0 14.352px 53.701px 0 rgba(69, 178, 39, 0.50);
            color: #FFFFFF;
            text-decoration: none;
            font-size: 18px;
            font-weight: 700;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            z-index: 1;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-family: var(--font-montserrat, 'Montserrat', sans-serif);
        }

        .botao-mvm::before {
            content: "";
            height: 100%;
            width: 100px;
            position: absolute;
            top: 0;
            left: -150px;
            opacity: 0;
            background: #ffffff;
            box-shadow: 0 0 30px 20px #ffffffaa;
            transform: skewX(-20deg);
            mix-blend-mode: plus-lighter;
            pointer-events: none;
            animation: brilho 3s linear infinite;
        }

        .botao-mvm .button-content {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.5s ease;
        }

        .botao-mvm:hover {
            filter: brightness(1.1) saturate(1.2);
            transform: translateY(-8px);
        }

        .botao-mvm:active {
            transform: scale(0.95) translateY(-2px);
        }

        .botao-mvm:hover .button-content {
            transform: scale(1.05);
        }

        @keyframes brilho {
            0% { opacity: 0; left: -150px; }
            20% { opacity: 0.4; }
            50% { opacity: 0.6; left: 50%; }
            80% { opacity: 0.4; }
            100% { opacity: 0; left: 150%; }
        }

        @media(max-width: 600px) {
            .botao-mvm {
                font-size: 16px;
                padding: 15px 30px;
            }
        }
      `}</style>

            <div className="reflection-wrapper group">
                <a href="https://wa.me/5561991864835?text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20rob%C3%B3tica" target="_blank" rel="noopener noreferrer" className="botao-mvm group">
                    <span className="button-content">
                        <WhatsAppIcon />
                        Entre em Contato
                    </span>
                </a>
            </div>
        </section>
    );
}
