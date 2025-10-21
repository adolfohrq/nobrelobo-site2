import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large';
  showPattern?: boolean;
  showGradient?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge,
  backgroundImage,
  align = 'center',
  size = 'medium',
  showPattern = true,
  showGradient = true
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  // Determinar a altura do hero com base no tamanho
  const getHeroHeight = () => {
    switch (size) {
      case 'small': return 'min-h-[40vh]';
      case 'large': return 'min-h-[80vh]';
      default: return 'min-h-[60vh]';
    }
  };
  
  // Determinar o alinhamento do texto
  const getTextAlignment = () => {
    switch (align) {
      case 'left': return 'text-left items-start';
      case 'right': return 'text-right items-end';
      default: return 'text-center items-center';
    }
  };
  
  return (
    <motion.div 
      ref={heroRef}
      className={`relative ${getHeroHeight()} flex items-center justify-center overflow-hidden pt-24`}
      style={{ opacity, scale }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <div className="absolute inset-0">
            <img 
              src={backgroundImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            {showGradient && (
              <div className="absolute inset-0 bg-gradient-to-b from-[#111]/90 via-[#111]/80 to-[#111]/90"></div>
            )}
          </div>
        )}
        
        {/* Padrão de fundo */}
        {showPattern && (
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ECC80B" strokeWidth="0.5" opacity="0.3" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        )}
        
        {/* Elementos de gradiente */}
        <div className="absolute w-1/3 h-1/3 top-0 right-0 bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute w-1/4 h-1/4 bottom-0 left-1/4 bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className={`flex flex-col ${getTextAlignment()} max-w-4xl mx-auto`}
          style={{ y }}
        >
          {/* Título flutuante de fundo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-5">
            <h2 className="text-[120px] font-bold text-white uppercase tracking-tight leading-none">
              {title}
            </h2>
          </div>
          
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-bold mb-6"
            >
              <span className="flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B"/>
                </svg>
                {badge}
              </span>
            </motion.div>
          )}
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  <span>{word} </span>
                )}
              </React.Fragment>
            ))}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-white/70 text-base max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PageHero