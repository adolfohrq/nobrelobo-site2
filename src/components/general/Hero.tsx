import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar dispositivos móveis
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window;
      const isSmallScreen = window.innerWidth < 640;
      setIsMobile(isTouchDevice && isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const clipPath = {
    initial: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
    animate: { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        duration: 1.3,
        delay: 0.3,
      }
    }
  };
  
  return (
    <section ref={heroRef} className="relative min-h-[300px] sm:min-h-[700px] md:min-h-[100svh] overflow-hidden bg-background">
      {/* Máscara e gradiente */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle at 50% 40%, transparent 5%, rgba(14,14,14,0.6) 80%, rgba(14,14,14,0.95) 100%)'
        }}
      />
      
      {/* Revelação da imagem com efeito de clip-path */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial="initial"
        animate="animate"
        variants={clipPath}
      >
        <div className="absolute inset-0 z-0">
          {/* Imagem do lobo */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/a2.jpg" 
              alt="Lobo Branco - Nobre Lobo Agência Digital" 
              loading="eager"
              decoding="async"
              className="absolute w-full h-full object-cover object-center md:object-center filter brightness-75 contrast-110"
              style={{ 
                transform: `scale(${isMobile ? 1.1 : 1.2})`,
                transformOrigin: 'center',
                objectPosition: isMobile ? 'center 40%' : 'center'
              }}
            />
            
            {/* Camadas de sobreposição para escurecer a imagem */}
            <div className="absolute inset-0 bg-background opacity-0 sm:opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent sm:from-black/60 sm:via-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/25 sm:from-black/50"></div>
            <div className="absolute inset-0 bg-primary/3 sm:bg-primary/10 mix-blend-overlay"></div>
            
            {/* Textura granulada para dar profundidade - Reduzida em mobile */}
            <div 
              className="absolute inset-0 opacity-5 sm:opacity-10 mix-blend-overlay" 
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                backgroundSize: 'cover'
              }}
            ></div>
          </div>
        </div>
      </motion.div>
      
      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col justify-start pt-24 pb-16 sm:pt-32 sm:pb-20 md:justify-center md:min-h-[100svh] md:pb-0 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl w-full relative">
          {/* Backdrop aprimorado para garantir legibilidade em mobile */}
          <div className="absolute inset-0 -inset-x-6 -inset-y-10 bg-gradient-to-r from-black/60 via-black/50 to-black/30 md:hidden rounded-3xl blur-3xl"></div>
          
          {/* Conteúdo com z-index relativo */}
          <div className="relative z-10">
          {/* Badge minimalista */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-2.5 sm:mb-6"
          >
            <div className="inline-flex items-center">
              <div className="h-3.5 sm:h-5 w-[2px] bg-primary mr-2 sm:mr-2.5"></div>
              <span className="text-primary text-[9px] sm:text-xs font-medium tracking-wider uppercase">Agência Estratégica</span>
            </div>
          </motion.div>
          
          {/* Títulos com revelação e efeito de máscara - OTIMIZADO MOBILE */}
          <div className="mb-3.5 sm:mb-6 md:mb-8">
            <motion.h1 
              className="text-[1.65rem] leading-[1.1] xs:text-[1.85rem] sm:text-6xl md:text-7xl sm:leading-tight font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ 
                textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,1), 0 1px 3px rgba(0,0,0,1)'
              }}
            >
              <span className="block mb-0 sm:mb-0">ESTRATÉGIA,</span>
              <span className="block mb-0 sm:mb-0">FORÇA,</span>
              <span className="block">IMPACTO<span className="text-primary">.</span></span>
            </motion.h1>
          </div>
          
          {/* Descrição - OTIMIZADA MOBILE */}
          <motion.p 
            className="text-white/90 max-w-lg sm:max-w-2xl text-[0.875rem] sm:text-base md:text-lg lg:text-xl leading-[1.5] sm:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              textShadow: '0 3px 12px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,1), 0 1px 3px rgba(0,0,0,1)'
            }}
          >
            Criamos estratégias digitais que destacam sua marca no mercado, com a 
            força e determinação de um lobo alfa. Nossa abordagem gera resultados concretos.
          </motion.p>
          </div>
        </div>
      </div>
    
      {/* Divisor com gradiente - exatamente igual ao da página de desenvolvimento web */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>    </section>
  )
}

export default Hero 