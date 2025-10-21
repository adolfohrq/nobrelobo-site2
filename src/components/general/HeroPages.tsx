import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroPagesProps {
  title: string;
  subtitle: string;
  badge?: string;
  backgroundImage: string;
  height?: string;
  imageStyle?: {
    objectFit?: string;
    objectPosition?: string;
    brightness?: string;
    contrast?: string;
    scale?: number;
  };
}

const HeroPages: React.FC<HeroPagesProps> = ({
  title,
  subtitle,
  badge = "Soluções Personalizadas",
  backgroundImage,
  height = "h-[50vh]",
  imageStyle = {
    objectFit: "cover",
    objectPosition: "center",
    brightness: "75",
    contrast: "110",
    scale: 1.1
  }
}) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar dispositivos móveis
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Apenas efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    <section ref={heroRef} className={`relative ${height} overflow-hidden bg-background w-full`}>
      {/* Máscara e gradiente - sem efeito de paralaxe */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-background/70 to-background/95"></div>
      
      {/* Revelação da imagem com efeito de clip-path */}
      <motion.div 
        className="absolute inset-0 z-0 w-full"
        initial="initial"
        animate="animate"
        variants={clipPath}
      >
        <motion.div
          className="absolute inset-0 z-0 w-full"
          style={{ 
            scale: 1.02 - (scrollY * 0.0002),
          }}
        >
          {/* Imagem de fundo */}
          <div className="absolute inset-0 overflow-hidden w-full">
            <img 
              src={backgroundImage} 
              alt="Hero Background" 
              className={`absolute w-full h-full object-${imageStyle.objectFit} object-${imageStyle.objectPosition} filter brightness-${imageStyle.brightness} contrast-${imageStyle.contrast}`}
              style={{ transform: `scale(${imageStyle.scale})`, width: '100%', height: '100%' }}
            />
            
            {/* Camadas de sobreposição para escurecer a imagem */}
            <div className="absolute inset-0 bg-background opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
            
            {/* Textura granulada para dar profundidade */}
            <div 
              className="absolute inset-0 opacity-10 mix-blend-overlay" 
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                backgroundSize: 'cover'
              }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col justify-center h-full container mx-auto px-6 pt-16">
        <div className="max-w-5xl">
          {/* Badge minimalista */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="inline-flex items-center">
              <div className="h-5 w-[2px] bg-primary mr-2.5"></div>
              <span className="text-primary text-xs font-medium tracking-wider uppercase">{badge}</span>
            </div>
          </motion.div>
          
          {/* Títulos com revelação e efeito de máscara */}
          <div className="mb-6 md:mb-8">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          
          {/* Descrição */}
          <motion.p 
            className="text-white/70 max-w-2xl text-lg lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Divisor com gradiente - exatamente igual ao da página de desenvolvimento web */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-30"></div>
    </section>
  )
}

export default HeroPages 