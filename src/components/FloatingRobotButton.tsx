
import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FloatingRobotButton: React.FC = () => {
  const { toast } = useToast();
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Função para lidar com o clique no botão
  const handleClick = () => {
    console.log('Open AI agent chat');
    setIsAnimating(true);
    
    toast({
      title: "Assistente IA",
      description: "O chat com IA será integrado com n8n em breve.",
      duration: 3000,
    });
    
    // Desativar a animação após 2 segundos
    setTimeout(() => setIsAnimating(false), 2000);
  };

  useEffect(() => {
    // Ativar animação do robô a cada 5 segundos
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black border border-jota-neon text-jota-neon hover:bg-jota-neon/20 transition-all duration-300 shadow-lg"
      aria-label="Fale com um Agente de IA"
    >
      <div className="relative">
        <Bot 
          size={24} 
          className={`${isAnimating ? 'animate-bounce' : ''}`}
        />
        
        {/* Olhos do robô */}
        <div className={`absolute top-[6px] left-[7px] w-1.5 h-1.5 rounded-full bg-jota-neon ${isAnimating ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute top-[6px] right-[7px] w-1.5 h-1.5 rounded-full bg-jota-neon ${isAnimating ? 'animate-pulse' : ''}`}></div>
        
        {/* Antena do robô */}
        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-jota-neon ${isAnimating ? 'animate-[wiggle_0.5s_ease-in-out_infinite]' : ''}`}>
          <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-jota-neon ${isAnimating ? 'animate-pulse' : ''}`}></div>
        </div>
        
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-jota-neon rounded-full animate-pulse"></span>
      </div>
    </button>
  );
};

export default FloatingRobotButton;
