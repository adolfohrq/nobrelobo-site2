import React from 'react';
import { motion } from 'framer-motion';

interface CompactHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  backgroundOverlayColor?: string;
  align?: 'left' | 'center' | 'right';
}

const CompactHero: React.FC<CompactHeroProps> = ({
  title,
  subtitle,
  badge,
  backgroundImage,
  backgroundOverlayColor = 'rgba(14, 14, 14, 0.85)',
  align = 'center',
}) => {
  
  // Determinar o alinhamento do texto
  const getTextAlignment = () => {
    switch (align) {
      case 'left': return 'text-left items-start justify-start';
      case 'right': return 'text-right items-end justify-end';
      default: return 'text-center items-center justify-center';
    }
  };
  
  return (
    <div className="relative min-h-[30vh] flex items-end overflow-hidden border-b border-white/5">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: backgroundOverlayColor }}
          ></div>
        </div>
      )}
      
      {/* Efeito de partículas sutis */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-20 h-20 rounded-full bg-primary/20 blur-xl top-1/4 left-1/4 animate-float-slow"></div>
        <div className="absolute w-16 h-16 rounded-full bg-primary/30 blur-xl bottom-1/3 right-1/3 animate-float-slower"></div>
        <div className="absolute w-12 h-12 rounded-full bg-primary/10 blur-lg top-1/2 right-1/4 animate-float"></div>
      </div>
      
      {/* Linhas decorativas */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/3"></div>
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent top-2/3"></div>
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent left-1/3"></div>
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent right-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div 
          className={`flex flex-col ${getTextAlignment()} max-w-4xl mx-auto`}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-4"
            >
              <span className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B" fillOpacity="0.8"/>
                </svg>
                {badge}
              </span>
            </motion.div>
          )}
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {title.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 ? (
                  <span className="text-primary">{word} </span>
                ) : (
                  <span>{word} </span>
                )}
              </React.Fragment>
            ))}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-white/70 text-base md:text-lg max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0E0E0E] to-transparent z-[1]"></div>
    </div>
  );
};

export default CompactHero; 