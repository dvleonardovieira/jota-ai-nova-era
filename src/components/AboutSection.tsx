
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-jota-neon opacity-5 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          Revolucionando Empresas com <br />
          <span className="text-jota-neon">Inteligência Artificial</span>
        </h2>
        
        <div className="max-w-3xl space-y-6 text-lg text-gray-300">
          <p>
            Na JOTA.AI, não apenas acompanhamos a revolução da IA – 
            nós a lideramos. Nossa missão é capacitar empresas com tecnologias
            inteligentes que transformam desafios em oportunidades e processos
            manuais em sistemas autônomos de alto desempenho.
          </p>
          
          <p>
            Com uma equipe de especialistas em tecnologias avançadas e
            experiência em diversos setores, desenvolvemos soluções personalizadas
            que elevam sua operação para um novo patamar de eficiência e
            inovação.
          </p>
          
          <p>
            Nossos agentes de IA são concebidos para aprender, adaptar e evoluir
            continuamente, garantindo que sua empresa esteja sempre à frente no
            mercado competitivo atual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
