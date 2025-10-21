import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Detectar scroll para mudar a aparência do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Verificar se o link está ativo
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Itens de navegação
  const navItems = [
    { name: 'Home', path: '/', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )},
    { name: 'Sobre', path: '/about', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    )},
    { name: 'Serviços', path: '/services', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )},
    { name: 'Portfólio', path: '/portfolio', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    )},
    { name: 'Blog', path: '/blog', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )},
    { name: 'Contato', path: '/contact', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )}
  ];

  return (
    <motion.header 
      ref={headerRef}
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-md' 
          : 'py-5 backdrop-blur-sm'
      }`}
    >
      {/* Background simples com blur e transparência */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/70' 
            : 'bg-background/30'
        }`}
      />
      
      {/* Linha simples abaixo do header */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo com efeito de hover */}
          <Link to="/" className="relative group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <motion.img 
                  src="/logo.png" 
                  alt="Nobre Lobo" 
                  className="h-12 object-contain relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
            </div>
          </Link>
          
          {/* Menu de navegação com efeitos avançados */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => {
                const isItemActive = isActive(item.path);
                return (
                  <motion.li 
                    key={item.name}
                    onHoverStart={() => setActiveIndex(index)}
                    onHoverEnd={() => setActiveIndex(null)}
                    className="relative"
                  >
                    <Link 
                      to={item.path} 
                      className={`relative flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 overflow-hidden ${
                        isItemActive 
                          ? 'text-primary font-medium' 
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {/* Fundo de hover */}
                      <AnimatePresence>
                        {(activeIndex === index || isItemActive) && (
                          <motion.div 
                            className={`absolute inset-0 rounded-full ${isItemActive ? 'bg-primary/10' : 'bg-white/5'}`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Ícone */}
                      <motion.span 
                        className={`relative ${isItemActive ? 'text-primary' : 'text-white/60'}`}
                        animate={{ scale: activeIndex === index ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.icon}
                      </motion.span>
                      
                      {/* Texto */}
                      <span className="relative uppercase text-sm tracking-wider font-medium">
                        {item.name}
                      </span>
                      
                      {/* Indicador ativo */}
                      {isItemActive && (
                        <motion.div 
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
          
          {/* Botão de contato com efeitos avançados */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+5511999999999" 
                className="text-white/80 hover:text-primary transition-colors duration-300 flex items-center group"
              >
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="mr-2 text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </motion.div>
                <span className="text-sm relative">
                  (11) 99999-9999
                  <span className="absolute left-0 right-0 bottom-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
            </div>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 group"
              >
                {/* Efeito de brilho */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700"></span>
                
                {/* Texto */}
                <span className="relative flex items-center">
                  <span>Fale Conosco</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </motion.svg>
                </span>
              </motion.button>
            </Link>
            
            {/* Menu mobile - Botão com animação */}
            <div className="lg:hidden">
              <motion.button 
                className="text-white p-1 relative"
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <motion.div 
                  className="absolute -inset-1 rounded-full bg-white/10 z-0 opacity-0"
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 