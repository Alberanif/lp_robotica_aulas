import React from 'react';
import Image from 'next/image';
import { Instagram, MapPin } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="w-full bg-[#01a1e1] border-t-4 border-[#111111] pt-12 pb-8 px-4 relative z-20">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Logo Principal do Footer */}
                <div className="mb-8 p-6 md:p-8 bg-white rounded-3xl md:rounded-[2rem] border-[4px] border-[#111111] shadow-[8px_8px_0px_#111111] rotate-[-2deg] transition-transform hover:rotate-0 inline-flex items-center justify-center min-w-[140px] min-h-[140px] md:min-w-[180px] md:min-h-[180px]">
                    <Image
                        src="/images/Logo - Robótica BSB.svg"
                        alt="Robótica BSB"
                        width={300}
                        height={300}
                        className="w-24 md:w-32 h-auto"
                    />
                </div>

                {/* Grid de Informações: Redes e Endereço */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">

                    {/* Contato & Redes */}
                    <div className="flex flex-col items-center md:items-end md:pr-10 border-b-2 md:border-b-0 md:border-r-2 border-[#111111]/20 pb-8 md:pb-0 gap-4">
                        <h4 className="text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-wide mb-2" style={{ WebkitTextStroke: '1px #111111', paintOrder: 'stroke fill' }}>
                            Siga e Fale Conosco
                        </h4>
                        <div className="flex flex-col gap-4 w-full max-w-[220px]">
                            {/* Botão Instagram */}
                            <a
                                href="https://www.instagram.com/roboticabsb?igsh=ZmR1b2VodTBsMnc0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#E1306C] text-white px-6 py-3 rounded-full border-2 border-[#111111] font-bold text-lg hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_#111111] active:translate-y-1 active:shadow-none"
                            >
                                <Instagram size={24} />
                                <span>Instagram</span>
                            </a>

                            {/* Botão WhatsApp */}
                            <a
                                href="https://api.whatsapp.com/send/?phone=5561991864835&text=Ol%C3%A1%21+Eu+gostaria+de+agendar+uma+oficina+de+rob%C3%B3tica&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#45b227] text-white px-6 py-3 rounded-full border-2 border-[#111111] font-bold text-lg hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_#111111] active:translate-y-1 active:shadow-none"
                            >
                                <WhatsAppIcon />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Endereço */}
                    <div className="flex flex-col items-center md:items-start md:pl-10 text-center md:text-left">
                        <h4 className="flex items-center gap-2 text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-wide mb-4" style={{ WebkitTextStroke: '1px #111111', paintOrder: 'stroke fill' }}>
                            <MapPin fill="#f01600" color="#111111" strokeWidth={2} size={28} />
                            Onde Estamos
                        </h4>
                        <p className="text-white font-body font-medium text-lg md:text-xl leading-relaxed" style={{ WebkitTextStroke: '0.5px #111111', paintOrder: 'stroke fill', textShadow: '1px 1px 0px rgba(17,17,17,0.3)' }}>
                            CLN 302 Bloco B, Sala 113<br />
                            Asa Norte, Brasília DF
                        </p>
                    </div>

                </div>

                {/* Copyright Line */}
                <div className="w-full text-center mt-4 text-white/90 font-bold text-sm">
                    <p>© {new Date().getFullYear()} Robótica BSB. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
