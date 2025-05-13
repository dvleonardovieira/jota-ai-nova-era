
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-jota-dark/80 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-jota-neon opacity-10 blur-[120px] animate-pulse-glow"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          <span className="text-white">Inteligência que se adapta</span> <br />
          <span className="text-jota-neon">ao seu negócio</span>
        </h2>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Esteja à frente da revolução da IA. Entre em contato hoje e descubra como 
          nossos agentes inteligentes podem transformar sua empresa.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-jota-neon hover:bg-opacity-90 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 text-lg">
            Fale com um Agente de IA
          </button>
          <button className="bg-transparent hover:bg-jota-neon/10 text-white border border-jota-neon font-semibold py-3 px-8 rounded-md transition-all duration-300 text-lg border-glow">
            Conheça Nossas Soluções
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
