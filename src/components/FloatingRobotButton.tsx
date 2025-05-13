
import React from 'react';
import { Bot } from 'lucide-react';

const FloatingRobotButton: React.FC = () => {
  const handleClick = () => {
    console.log('Open AI agent chat');
    // This will be integrated with n8n in the future
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black border border-jota-neon text-jota-neon hover:bg-jota-neon/20 transition-all duration-300 shadow-lg"
      aria-label="Fale com um Agente de IA"
    >
      <div className="relative">
        <Bot size={24} />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-jota-neon rounded-full animate-pulse"></span>
      </div>
    </button>
  );
};

export default FloatingRobotButton;
