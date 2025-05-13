
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block relative px-8 py-2 mb-4">
          <div className="inline-block bg-gradient-to-r from-jota-neon to-jota-light bg-clip-text text-transparent">
            Agencia de IA • Automação • Inovação
          </div>
          <div className="absolute inset-0 border border-jota-neon/40 rounded-full"></div>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Transforme Seu <span className="text-white">Mundo</span><br />
          <span className="bg-gradient-to-r from-jota-light to-jota-neon bg-clip-text text-transparent">
            com Agentes de IA
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
          Automatize, Inove e Cresça com Soluções Inteligentes que 
          Elevam seu Negócio para a Era dos Agentes de Inteligência 
          Artificial
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={scrollToServices}
            className="bg-jota-neon hover:bg-opacity-90 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 text-lg hover:scale-105 transform"
          >
            Descubra Nossos Agentes
          </button>
        </div>
      </div>

      {/* Animated floating AI agent icon */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <div className="absolute inset-0 bg-jota-neon rounded-full opacity-20 blur-md"></div>
          <div className="absolute inset-0 flex items-center justify-center text-jota-neon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" 
                fill="currentColor"/>
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
