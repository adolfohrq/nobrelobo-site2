import React from 'react'
import Layout from '../components/general/Layout'
import ContactSection from '../components/sections/ContactSection'
import MapSection from '../components/sections/MapSection'
import FaqSection from '../components/sections/FaqSection'
import HeroPages from '../components/general/HeroPages'

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <HeroPages 
        title="FALE <br />CONOSCO<span class='text-primary'>.</span>"
        subtitle="Entre em contato com a nossa equipe e vamos transformar suas ideias em soluções digitais impactantes."
        badge="Contato"
        backgroundImage="/lobo-hero-contato.jpg"
        height="h-[50vh]"
        imageStyle={{
          objectFit: "contain",
          objectPosition: "center",
          brightness: "100",
          contrast: "110",
          scale: 1.1
        }}    />

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Texto principal */}
          <div>
            <div className="inline-block bg-accent/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="text-primary text-sm uppercase font-medium tracking-wider flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-ping"></span>
                Fale Conosco
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-gilroy font-bold text-white mb-8 leading-tight">
              <span className="relative">
                Vamos conversar?
                <span className="cursor-blink absolute right-0 top-0 h-full w-1 bg-primary"></span>
              </span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              Sua visão + nossa expertise = <span className="text-primary font-medium">resultados extraordinários</span>. 
              Vamos construir algo incrível juntos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact-form" 
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-medium py-4 px-8 rounded-md transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Iniciar Conversa
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 bg-black/10"></div>
              </a>
              
              <a href="mailto:contato@nobrelobo.com.br" className="flex items-center text-white hover:text-primary transition-colors">
                <span className="mr-2">contato@nobrelobo.com.br</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Lado direito - Elementos visuais */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Círculos animados */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border border-white/10 rounded-full circle-spin-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 border border-primary/20 rounded-full circle-reverse-spin"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/5 h-3/5 border border-white/10 rounded-full circle-spin-slow"></div>
              </div>
              
              {/* Elemento central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center transform rotate-45 border border-primary/30">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary transform -rotate-45">
                    <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Pontos decorativos */}
              <div className="absolute top-0 left-1/4 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute bottom-1/4 right-0 w-6 h-6 bg-primary/30 rounded-full"></div>
              <div className="absolute bottom-0 left-1/3 w-3 h-3 bg-primary/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS adicional */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .cursor-blink {
          animation: blink 0.8s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .circle-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .circle-reverse-spin {
          animation: reverse-spin 12s linear infinite;
        }
        
        @keyframes reverse-spin {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
      `}} />
      
      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-20" id="contact-form">
            <ContactSection />
          </div>
          
          <MapSection />
          
          <FaqSection />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage 