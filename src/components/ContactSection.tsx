
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black" id="contact-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Entre em <span className="text-jota-neon">Contato</span>
            </h2>
            <p className="text-gray-300 mb-12 max-w-lg">
              Estamos prontos para discutir como podemos transformar sua empresa
              com soluções de IA inteligentes e personalizadas. Deixe sua mensagem e
              nossa equipe entrará em contato em breve.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-jota-neon/40 flex items-center justify-center text-jota-neon">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">contato@jotasystems.ai</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-jota-neon/40 flex items-center justify-center text-jota-neon">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Telefone</h3>
                  <p className="text-gray-400">+55 (11) 3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-jota-neon/40 flex items-center justify-center text-jota-neon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Endereço</h3>
                  <p className="text-gray-400">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-black/70 backdrop-blur-sm border border-jota-neon/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Nome</label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    className="bg-black/60 border-jota-neon/30 focus:border-jota-neon text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-black/60 border-jota-neon/30 focus:border-jota-neon text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2">Empresa</label>
                <Input 
                  id="company" 
                  placeholder="Nome da sua empresa" 
                  className="bg-black/60 border-jota-neon/30 focus:border-jota-neon text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Como podemos ajudar?" 
                  className="w-full rounded-md bg-black/60 border border-jota-neon/30 focus:border-jota-neon text-white px-3 py-2 focus-visible:outline-none"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-jota-neon hover:bg-jota-neon/90 text-black font-semibold py-3 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
