import React from 'react';
import { motion } from 'framer-motion';

interface ModernHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  align?: 'left' | 'center' | 'right';
}

const ModernHero: React.FC<ModernHeroProps> = ({
  title,
  subtitle,
  badge,
  backgroundImage,
  align = 'center',
}) => {
  
  // Determinar o alinhamento do texto
  const getTextAlignment = () => {
    switch (align) {
      case 'left': return 'text-left items-start';
      case 'right': return 'text-right items-end';
      default: return 'text-center items-center';
    }
  };
  
  return (
    <div className="relative min-h-[35vh] flex items-center pt-24">
      {/* Background com efeito de paralaxe */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={backgroundImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/70 via-[#0E0E0E]/80 to-[#0E0E0E]"></div>
        </div>
      )}
      
      {/* Efeito de camada de design */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute h-40 w-40 rounded-full bg-primary/30 blur-[80px] -left-10 top-0"></div>
        <div className="absolute h-40 w-40 rounded-full bg-primary/20 blur-[60px] -right-10 top-10"></div>
      </div>
      
      {/* Grade decorativa */}
      <div className="absolute inset-0 z-[1] opacity-5 overflow-hidden">
        <div className="absolute w-full h-px bg-white/20 top-1/3"></div>
        <div className="absolute w-full h-px bg-white/20 top-2/3"></div>
        <div className="absolute h-full w-px bg-white/20 left-1/3"></div>
        <div className="absolute h-full w-px bg-white/20 right-1/3"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-16 relative z-[2]">
        <motion.div 
          className={`flex flex-col ${getTextAlignment()} max-w-4xl mx-auto`}
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-5"
            >
              <span className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B" fillOpacity="0.8"/>
                </svg>
                {badge}
              </span>
            </motion.div>
          )}
          
          {/* Título com efeito de destaque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-5"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white relative z-[2] tracking-tight">
              {title.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {i === arr.length - 1 ? (
                    <span className="relative inline-block">
                      <span className="absolute -inset-1 bg-primary/10 blur-lg rounded-lg -z-[1]"></span>
                      <span className="text-primary relative">{word}</span>
                    </span>
                  ) : (
                    <span>{word} </span>
                  )}
                </React.Fragment>
              ))}
            </h1>
          </motion.div>
          
          {/* Subtítulo */}
          {subtitle && (
            <motion.p 
              className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Elementos gráficos de design */}
      <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0E0E] to-transparent z-[1]"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-0 bottom-0 w-32 h-32 overflow-hidden z-[1] opacity-10 hidden md:block"
      >
        <div className="absolute -bottom-16 -right-16 w-32 h-32 border-2 border-primary/30 rounded-full"></div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute left-0 top-0 w-48 h-48 overflow-hidden z-[1] opacity-10 hidden md:block"
      >
        <div className="absolute -top-24 -left-24 w-48 h-48 border border-primary/30 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default ModernHero; 