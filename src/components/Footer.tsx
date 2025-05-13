
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 max-w-md">
              Transformando o futuro dos negócios com soluções de inteligência artificial avançada, 
              agentes autônomos e automação de processos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-jota-neon transition-colors">Início</a></li>
                <li><a href="#services-section" className="text-gray-400 hover:text-jota-neon transition-colors">Serviços</a></li>
                <li><a href="#contact-section" className="text-gray-400 hover:text-jota-neon transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} JOTA SYSTEMS.AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
