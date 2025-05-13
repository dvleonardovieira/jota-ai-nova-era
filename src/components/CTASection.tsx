
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          <span className="text-white">Inteligência que se adapta</span> <br />
          <span className="text-jota-neon">ao seu negócio</span>
        </h2>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Prepare sua empresa para a nova era da automação inteligente.
          Desenvolvemos agentes que pensam, aprendem e evoluem com o seu negócio.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
