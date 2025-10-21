import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroPagesProps {
  title: string;
  subtitle: string;
  badge?: string;
  backgroundImage: string;
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
  imageStyle = {
    objectFit: "cover",
    objectPosition: "center",
    brightness: "75",
    contrast: "110",
    scale: 1.1
  }
}) => {
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
  
  
  return (
    <section ref={heroRef} className="relative overflow-hidden bg-background w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh]">
      {/* Máscara e gradiente - sem efeito de paralaxe */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-background/60 sm:via-background/70 to-background/90 sm:to-background/95"></div>
      
      {/* Imagem de fundo sem animações */}
      <div className="absolute inset-0 z-0 w-full">
        <div className="absolute inset-0 overflow-hidden w-full">
          <img 
            src={backgroundImage} 
            alt="Hero Background" 
            className={`absolute w-full h-full object-${imageStyle.objectFit} object-center sm:object-right md:object-${imageStyle.objectPosition} filter brightness-${imageStyle.brightness} contrast-${imageStyle.contrast}`}
            style={{ 
              transform: `scale(${imageStyle.scale})`, 
              width: '100%', 
              height: '100%',
              objectPosition: isMobile ? 'center' : imageStyle.objectPosition
            }}
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
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-50 flex flex-col justify-center h-full container mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-24 sm:pb-28 md:pb-32 lg:pb-36">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          {/* Badge minimalista */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-3 sm:mb-4"
          >
            <div className="inline-flex items-center">
              <div className="h-4 sm:h-5 w-[2px] bg-primary mr-2 sm:mr-2.5"></div>
              <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">{badge}</span>
            </div>
          </motion.div>
          
          {/* Títulos com revelação e efeito de máscara */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          
          {/* Descrição */}
          <motion.p 
            className="text-white/70 max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Divisor com gradiente - exatamente igual ao da página de desenvolvimento web */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-30"></div>
    </section>
  )
}

export default HeroPages 