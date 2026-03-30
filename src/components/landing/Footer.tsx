const Footer = () => {
  return (
    <footer className="bg-[#ffd900] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-8">
            <span className="text-[#01a1e1] text-stroke-sm">R</span>
            <span className="text-[#f01600] text-stroke-sm">o</span>
            <span className="text-[#45b227] text-stroke-sm">b</span>
            <span className="text-[#01a1e1] text-stroke-sm">ó</span>
            <span className="text-[#f01600] text-stroke-sm">t</span>
            <span className="text-[#45b227] text-stroke-sm">i</span>
            <span className="text-[#01a1e1] text-stroke-sm">c</span>
            <span className="text-[#f01600] text-stroke-sm">a</span>
            {' '}
            <span className="text-[#45b227] text-stroke-sm">B</span>
            <span className="text-[#01a1e1] text-stroke-sm">S</span>
            <span className="text-[#f01600] text-stroke-sm">B</span>
            {' '}
            <span className="text-white text-stroke-sm">— Formando a próxima geração.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              className="uppercase font-bold border-[3px] border-white rounded-2xl shadow-[4px_4px_0px_#45b227] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#45b227] transition-all duration-150 cursor-pointer bg-[#45b227] text-white text-base px-8 py-4"
              onClick={() => window.open('https://wa.me/5561991864835?text=Olá%21%20Eu%20quero%20saber%20mais%20sobre%20as%20aulas%20presenciais%20de%20robótica%21', '_blank')}
            >
              💬 Falar no WhatsApp
            </button>
          </div>

          <p className="text-white/80 text-sm" style={{ WebkitTextStroke: '0.5px #111111', paintOrder: 'stroke fill' }}>
            © 2025 Robótica BSB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
