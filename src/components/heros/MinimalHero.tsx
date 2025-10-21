import React from 'react';
import { motion } from 'framer-motion';

interface MinimalHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  align?: 'left' | 'center' | 'right';
}

const MinimalHero: React.FC<MinimalHeroProps> = ({
  title,
  subtitle,
  ctaText = "Saiba mais",
  ctaLink = "#",
  align = 'left',
}) => {
  // Determinar o alinhamento do texto
  const getTextAlignment = () => {
    switch (align) {
      case 'right': return 'text-right items-end';
      case 'center': return 'text-center items-center';
      default: return 'text-left items-start';
    }
  };
  
  return (
    <div className="relative min-h-[90vh] w-full flex items-center bg-gradient-to-br from-black/40 to-black/20 p-8 md:p-16 lg:p-24 overflow-hidden group">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full border border-primary/10 -z-10"></div>
      
      {/* Linhas de grade decorativas */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 -z-10">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/3"></div>
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent left-1/3"></div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className={`flex flex-col ${getTextAlignment()} max-w-3xl mx-auto`}>
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              {title}
            </h2>
          </motion.div>
          
          {/* Subtítulo */}
          {subtitle && (
            <motion.p 
              className="text-white/70 text-xl lg:text-2xl mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Botão CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary rounded-lg transition-colors text-lg"
            >
              {ctaText}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MinimalHero; 