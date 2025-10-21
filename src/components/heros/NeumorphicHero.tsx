import React from 'react';
import { motion } from 'framer-motion';

interface NeumorphicHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  align?: 'left' | 'center' | 'right';
}

const NeumorphicHero: React.FC<NeumorphicHeroProps> = ({
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
    <div className="relative min-h-[90vh] w-full flex items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Elementos decorativos neumórficos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Formas neumórficas */}
        <motion.div 
          className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ 
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.5)'
          }}
        />
        
        <motion.div 
          className="absolute -left-32 bottom-20 w-96 h-96 rounded-full bg-gray-200 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ 
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.5)'
          }}
        />
        
        {/* Círculos de fundo */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-primary/5" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-primary/10" />
      </div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-10">
        <div className={`flex flex-col ${getTextAlignment()} max-w-3xl`}>
          {/* Badge neumórfico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div 
              className="inline-block px-6 py-3 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium mb-4"
              style={{ 
                background: 'var(--neumorph-bg, #f0f0f0)', 
                boxShadow: 'var(--neumorph-shadow, 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.8))'
              }}
            >
              Estilo Neumórfico
            </div>
          </motion.div>
          
          {/* Título com efeito de entrada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}
            >
              {title}
            </h1>
          </motion.div>
          
          {/* Subtítulo */}
          {subtitle && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <p 
                className="text-gray-600 dark:text-gray-400 text-xl lg:text-2xl max-w-2xl"
                style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.1)' }}
              >
                {subtitle}
              </p>
            </motion.div>
          )}
          
          {/* Botões CTA neumórficos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {/* Botão principal */}
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl text-primary font-medium relative overflow-hidden"
              style={{ 
                background: 'var(--neumorph-bg, #f0f0f0)',
                boxShadow: 'var(--neumorph-shadow, 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.8))'
              }}
            >
              {ctaText}
            </motion.a>
            
            {/* Botão secundário */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium relative overflow-hidden"
              style={{ 
                boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
              }}
            >
              Saiba mais
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Elemento flutuante */}
      <motion.div
        className="absolute bottom-12 right-12 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          opacity: { duration: 0.6 },
          y: { duration: 0.6 },
          rotate: { 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        }}
        style={{ 
          boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.5)'
        }}
      >
        <div className="h-full w-full flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <path d="M12 8V16M16 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" />
          </svg>
        </div>
      </motion.div>
      
      {/* Script para definir variáveis CSS baseadas no tema */}
      <div dangerouslySetInnerHTML={{ __html: `
        <script>
          (function() {
            const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.style.setProperty(
              '--neumorph-bg', 
              isDark ? '#2d3748' : '#f0f0f0'
            );
            document.documentElement.style.setProperty(
              '--neumorph-shadow', 
              isDark 
                ? '5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.05)'
                : '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.8)'
            );
          })();
        </script>
      ` }} />
    </div>
  );
};

export default NeumorphicHero; 