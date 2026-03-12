import React from 'react';
import Image from 'next/image';




export default function ContactCondo() {
    return (
        <section className="w-full py-16 px-4 flex flex-col items-center justify-center relative z-10">
            <div className="relative w-full max-w-[450px]">
                {/* Prof. Emanuel Avatar with Yellow Border */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-[6px] border-[#ffd900] overflow-hidden bg-brand-bg shadow-xl">
                        <Image
                            src="/images/Emanuel.png"
                            alt="Prof. Emanuel"
                            fill
                            className="object-cover object-[center_top] scale-110"
                        />
                    </div>
                </div>

                {/* Main Card with Blue Border */}
                <div className="bg-white border-[12px] border-[#01a1e1] rounded-[3rem] pt-12 md:pt-14 pb-6 px-6 flex flex-col items-center shadow-[0_30px_60px_rgba(1,161,225,0.25)]">
                    <div className="text-center mb-4">
                        <h2 className="font-display font-black text-[#111111] text-2xl md:text-3xl leading-[1.1] mb-1">
                            Robótica BSB | Prof. Emanuel
                        </h2>
                        <p className="font-body text-gray-500 text-xs md:text-sm">
                            WhatsApp business account
                        </p>
                    </div>

                    <div className="w-full bg-white rounded-3xl p-1 flex items-center justify-center">
                        <a 
                          href="https://wa.me/5561991864835?text=Ol%C3%A1!%20Represento%20um%20condom%C3%ADnio%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20rob%C3%B3tica" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full max-w-[380px] hover:scale-[1.03] transition-transform duration-300 relative aspect-square"
                        >
                          <Image
                            src="/images/Aulas de Robótica (1920 x 1080).svg"
                            alt="QR Code WhatsApp"
                            fill
                            className="object-contain"
                          />
                        </a>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                        Aponte a câmera para iniciar conversa
                      </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
