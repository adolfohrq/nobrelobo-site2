import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import SectionHeader from '../general/SectionHeader';
import ScrollAnimation from '../general/ScrollAnimation';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Pronto para elevar sua marca",
  subtitle = "Junte-se a centenas de empresas que transformaram sua presença digital com nossas estratégias criativas e resultados expressivos.",
  ctaText = "Iniciar Projeto",
  ctaLink = "#contato"
}) => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation 
          className="max-w-4xl mx-auto text-center"
          yRange={[50, -50]}
          opacityRange={[0, 1, 1]}
          scaleRange={[0.9, 1]}
          offsetStart="start end"
          offsetEnd="end start"
        >
          <SectionHeader
            title={title}
            subtitle={subtitle}
            badge="Transforme sua presença digital"
            iconComponent={
              <svg width="32" height="32" viewBox="0 0 100 100" className="text-primary">
                <path d="M50 10 L70 30 L90 20 L80 40 L90 60 L70 70 L50 90 L30 70 L10 60 L20 40 L10 20 L30 30 Z" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4" />
              </svg>
            }
          />
          
          {/* Estatísticas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:bg-white/10">
              <div className="text-primary text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80 font-medium">Taxa de satisfação dos clientes</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:bg-white/10">
              <div className="text-primary text-4xl font-bold mb-2">+150</div>
              <div className="text-white/80 font-medium">Projetos entregues com sucesso</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:bg-white/10">
              <div className="text-primary text-4xl font-bold mb-2">+45%</div>
              <div className="text-white/80 font-medium">Aumento médio em conversões</div>
            </div>
          </motion.div>
          
          {/* Botões de ação */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground font-gilroy font-bold py-4 px-8 rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10">{ctaText}</span>
              <motion.div 
                className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"
                style={{ zIndex: 5 }}
              />
            </motion.button>
            
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/20 text-white font-gilroy font-bold py-4 px-8 rounded-full hover:bg-white/5 transition-colors duration-300"
            >
              Fale Conosco
            </motion.a>
          </motion.div>
        </ScrollAnimation>
    </div>
    </section>
  );
};

export default CtaSection; 