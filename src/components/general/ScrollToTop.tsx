import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Detecta quando o usuário rolou o suficiente para mostrar o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar suavemente até o topo
  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset o estado de clique após a animação
    setTimeout(() => {
      setIsClicked(false);
    }, 700);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: isClicked ? 0.95 : 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors duration-300 group"
          aria-label="Rolar para o topo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Efeito de luz no hover */}
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
          
          {/* Efeito de pulso */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-primary/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.3, 0],
              opacity: [0, 0.2, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          {/* Efeito de ripple ao clicar */}
          {isClicked && (
            <motion.div 
              className="absolute inset-0 rounded-full bg-white/30"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            />
          )}
          
          {/* Ícone de seta para cima */}
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="relative z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 1 }}
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
