
import React from 'react';
import robotImage from '../assets/robot-assistant.png';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
            Revolucionando Empresas com <br />
            <span className="text-jota-neon">Inteligência Artificial</span>
          </h2>
          
          <div className="max-w-xl space-y-6 text-lg text-gray-300">
            <p>
              Na JOTA SYSTEMS.AI, não apenas acompanhamos a revolução da IA – 
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
        
        <div className="relative">
          <div className="absolute -inset-4 bg-jota-neon/5 rounded-full blur-3xl animate-pulse-glow"></div>
          <img 
            src="/lovable-uploads/1ad918e0-a482-46d5-8624-c7e88c3085ab.png" 
            alt="AI Robot Assistant" 
            className="relative z-10 w-full max-w-md mx-auto rounded-lg object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
