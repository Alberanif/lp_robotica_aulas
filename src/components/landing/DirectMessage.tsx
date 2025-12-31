const DirectMessage = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-6">
            <span className="text-lego-green text-stroke">Um</span>{' '}
            <span className="text-lego-blue text-stroke">recado</span>{' '}
            <span className="text-lego-red text-stroke">direto</span>{' '}
            <span className="text-lego-yellow text-stroke">aos</span>{' '}
            <span className="text-lego-green text-stroke">pais</span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
            Eu não vou te prometer "gênio aos 12". Eu prefiro te prometer trabalho 
            sério toda semana: projeto novo, desafio novo, aprendizado de verdade. 
            Seu filho vai suar a camisa do cérebro — e vai curtir o processo.
          </p>

          <p className="text-2xl font-fredoka font-bold">
            <span className="text-lego-blue text-stroke-sm">Robótica</span>{' '}
            <span className="text-lego-red text-stroke-sm">BSB</span>{' '}
            <span className="text-lego-yellow text-stroke-sm">—</span>{' '}
            <span className="text-lego-green text-stroke-sm">Formando</span>{' '}
            <span className="text-lego-blue text-stroke-sm">a</span>{' '}
            <span className="text-lego-red text-stroke-sm">próxima</span>{' '}
            <span className="text-lego-yellow text-stroke-sm">geração.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectMessage;
