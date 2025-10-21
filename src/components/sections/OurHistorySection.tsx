import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../general/SectionHeader';

const OurHistorySection: React.FC = () => {
  // Referência para animação de scroll
  const sectionRef = useRef<HTMLElement>(null);
  
  // Efeitos de scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [50, 0, 0]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-accent/10"
      id="nossa-historia"
    >
      {/* Elemento decorativo - linha horizontal */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
        <SectionHeader
          title="Nossa História"
          subtitle="De sonho à realidade: como uma paixão por criatividade se transformou em uma agência que revoluciona marcas."
          badge="Conheça-nos"
          floatingTitleText="História"
          iconComponent={
            <svg width="32" height="32" viewBox="0 0 100 100" className="text-primary">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" />
            </svg>
          }
        />
        
        <div className="grid md:grid-cols-12 gap-8 mt-16">
          {/* Linha do tempo simplificada */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
              <div>
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-unbounded font-bold text-white mb-2">2015</h3>
                <p className="text-white/80">Fundação da Nobre Lobo com foco em design gráfico e desenvolvimento web para pequenas empresas.</p>
              </div>
              
              <div>
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-unbounded font-bold text-white mb-2">2018</h3>
                <p className="text-white/80">Expansão para serviços completos de marketing digital e branding estratégico.</p>
              </div>
              
              <div>
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-unbounded font-bold text-white mb-2">Hoje</h3>
                <p className="text-white/80">Agência premiada com presença nacional, transformando a identidade digital de marcas de todos os portes.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Texto e botão de ação */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-7"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-white mb-6">Nossa Jornada</h3>
                <p className="text-white/80 mb-4">
                  Nascemos da vontade de criar conexões autênticas entre marcas e pessoas. 
                  O que começou como um estúdio de design se transformou em uma agência completa, 
                  guiada por uma filosofia clara: criatividade com propósito.
                </p>
                <p className="text-white/80 mb-6">
                  Nossa equipe é formada por especialistas apaixonados que buscam constantemente 
                  a inovação. Acreditamos que grandes ideias podem transformar negócios quando 
                  executadas com estratégia e precisão.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden"
                >
                  <Link 
                    to="/about" 
                    className="block bg-primary text-primary-foreground font-unbounded font-bold py-4 px-8 rounded-xl relative z-10"
                  >
                    <span className="relative z-10">Conheça Nossa Equipe</span>
                  </Link>
                  <motion.div 
                    className="absolute inset-0 bg-white origin-left hover:scale-x-100 scale-x-0 transition-transform duration-300"
                    style={{ zIndex: 5 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Elemento decorativo - círculos no fundo */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
      </motion.div>
      
      {/* Elemento decorativo - padrão de fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      ></div>
    </section>
  );
};

export default OurHistorySection; 