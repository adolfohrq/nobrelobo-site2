import React from 'react';
import { motion } from 'framer-motion';

interface GradientHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  align?: 'left' | 'center' | 'right';
}

const GradientHero: React.FC<GradientHeroProps> = ({
  title,
  subtitle,
  ctaText = "Explorar",
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
    <div className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      {/* Gradiente animado de fundo */}
      <div className="absolute inset-0 bg-[#111] -z-20"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-primary via-purple-600 to-blue-500 animate-gradient-slow"></div>
      </div>
      
      {/* Elementos geométricos */}
      <motion.div 
        className="absolute right-[10%] top-[20%] w-64 h-64 rounded-full border border-white/10 -z-10"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute left-[5%] bottom-[15%] w-40 h-40 rounded-full border border-primary/20 -z-10"
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute left-[20%] top-[30%] w-20 h-20 bg-primary/5 backdrop-blur-xl rounded-full -z-10"
        animate={{ 
          y: [0, 30, 0]
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      ></motion.div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-10">
        <div className={`flex flex-col ${getTextAlignment()} max-w-3xl`}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-6">
              {/* Efeito de texto gradiente */}
              <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text font-medium">
                Novo Design
              </span>
            </span>
          </motion.div>
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-primary to-purple-500 text-transparent bg-clip-text">{title}</span>
            </h1>
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
          
          {/* Botão CTA com efeito de brilho */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 200, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center px-8 py-4 overflow-hidden bg-gradient-to-r from-primary to-amber-400 rounded-full text-black font-medium group"
            >
              <span className="relative z-10 flex items-center">
                {ctaText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GradientHero; 