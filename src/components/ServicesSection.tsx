
import React from 'react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-jota-neon/20 rounded-xl p-6 hover:border-jota-neon/50 transition-all duration-300 group">
      <div className="w-20 h-20 flex items-center justify-center mb-6 text-jota-neon rounded-full bg-jota-neon/10 group-hover:bg-jota-neon/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-black/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
          Transformando Desafios em <span className="text-jota-neon">Soluções Inteligentes</span>
        </h2>
        
        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-16">
          Nossas soluções de IA são projetadas para resolver problemas reais e gerar
          resultados mensuráveis, impulsionando seu negócio para o futuro.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                <circle cx="12" cy="12" r="4" fill="currentColor" />
              </svg>
            }
            title="Agentes de IA Personalizados"
            description="Assistentes virtuais inteligentes treinados especificamente para sua área de negócio, capazes de automatizar decisões e interagir naturalmente com clientes e equipe."
          />
          
          <ServiceCard 
            icon={
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 17.0001H17L21 13.0001V10.0001H17V13.0001H14V17.0001H13L9 13.0001V10.0001H5V13.0001L13 17.0001Z" fill="currentColor"/>
                <path d="M3 5V19L13 12L3 5Z" fill="currentColor"/>
              </svg>
            }
            title="Automação de Processos"
            description="Transforme fluxos de trabalho repetitivos em sistemas autônomos que operam 24/7 com precisão inigualável, liberando seu time para tarefas estratégicas."
          />
          
          <ServiceCard 
            icon={
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C13.5 22 15 21.5 16.4 20.5L12 13.5L7.6 20.5C9 21.5 10.5 22 12 22Z" fill="currentColor"/>
                <path d="M8 8L12 13.5L16 8H8Z" fill="currentColor"/>
                <path d="M12 2C10.5 2 9.00001 2.5 7.60001 3.5L12 10.5L16.4 3.5C15 2.5 13.5 2 12 2Z" fill="currentColor"/>
              </svg>
            }
            title="Consultoria em IA"
            description="Nossa equipe especializada identifica oportunidades únicas para implementar inteligência artificial na sua operação, com planos estratégicos para resultados imediatos."
          />
          
          <ServiceCard 
            icon={
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor"/>
                <path d="M12 15H14V13H12V15ZM12 5H14V11H12V5Z" fill="currentColor"/>
              </svg>
            }
            title="Desenvolvimento de Chatbots"
            description="Chatbots avançados que vão além do básico, aprendendo continuamente e oferecendo experiências de conversação naturais que encantam seus clientes."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
