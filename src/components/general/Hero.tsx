import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const imageAnimControls = useAnimation();
  const [isMouseActive, setIsMouseActive] = useState(false);
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Detectar dispositivos móveis
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Função para animação automática
  const autoAnimate = async () => {
    // Início da animação automática
    try {
      while (!isMouseActive) {
        // Movimento para a direita e para baixo
        await imageAnimControls.start({
          x: 10,
          y: 5,
          transition: { duration: 15, ease: "easeInOut" }
        });
        
        if (isMouseActive) break;
        
        // Movimento para a esquerda e para cima
        await imageAnimControls.start({
          x: -10,
          y: -5,
          transition: { duration: 15, ease: "easeInOut" }
        });
        
        if (isMouseActive) break;
        
        // Movimento para a direita e para cima
        await imageAnimControls.start({
          x: 10,
          y: -5,
          transition: { duration: 15, ease: "easeInOut" }
        });
        
        if (isMouseActive) break;
        
        // Movimento para a esquerda e para baixo
        await imageAnimControls.start({
          x: -10,
          y: 5,
          transition: { duration: 15, ease: "easeInOut" }
        });
      }
    } catch (error) {
      // Tratamento de erro se a animação for interrompida
      console.log("Animação interrompida");
    }
  };
  
  // Iniciar a animação automática do paralax
  useEffect(() => {
    if (!isMobile && !isMouseActive) {
      autoAnimate();
    }
    
    return () => {
      // Limpar timeout se existir
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, [isMobile, isMouseActive]);
  
  // Efeito de paralaxe do mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      
      // Ativar modo de mouse
      setIsMouseActive(true);
      
      // Limpar qualquer timeout existente
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
      
      const { clientX, clientY } = e;
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;
      
      const offsetX = ((clientX - middleX) / middleX) * 15;
      const offsetY = ((clientY - middleY) / middleY) * 15;
      
      setMousePosition({ x: offsetX, y: offsetY });
      
      // Aplicar o movimento do mouse diretamente
      imageAnimControls.start({
        x: offsetX * -0.5,
        y: offsetY * -0.5,
        transition: { duration: 0.3 }
      });
      
      // Configurar timeout para retornar à animação automática após 4 segundos sem movimento do mouse
      mouseTimeoutRef.current = setTimeout(() => {
        setIsMouseActive(false);
      }, 4000);
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, [isMobile, imageAnimControls]);
  
  const revealText = {
    initial: { 
      opacity: 0,
    },
    animate: (i: number) => ({
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }),
  };
  
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
  
  // Valores para efeitos de máscara e sombra de texto
  const maskX = isMobile ? 0 : mousePosition.x * 0.8;
  const maskY = isMobile ? 0 : mousePosition.y * 0.8;
  const textShadowX = isMobile ? 0 : mousePosition.x * 0.1;
  const textShadowY = isMobile ? 0 : mousePosition.y * 0.1;
  
  // Calcular escala com base no scroll para evitar espaços vazios
  // Aumentamos a escala inicial para 1.2 e diminuímos a taxa de redução com o scroll
  const imageScale = 1.2 - (scrollY * 0.0001);
  
  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-background">
      {/* Máscara e gradiente com efeito de paralaxe */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ 
          background: `radial-gradient(circle at calc(50% + ${maskX}px) calc(50% + ${maskY}px), transparent 1%, rgba(14,14,14,0.7) 90%, rgba(14,14,14,0.95) 100%)`,
        }}
      />
      
      {/* Revelação da imagem com efeito de clip-path */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial="initial"
        animate="animate"
        variants={clipPath}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ 
            scale: imageScale, // Usamos a nova variável de escala
          }}
          animate={imageAnimControls}
          initial={{ x: 0, y: 0 }}
        >
          {/* Imagem do lobo - Ajustamos para inset-0 e aumentamos a escala */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/lobo-home2.jpg" 
              alt="Lobo Branco" 
              className="absolute w-full h-full object-cover object-center filter brightness-100 contrast-110"
              style={{ 
                transform: `scale(1)`, // Pequeno aumento na escala base da imagem
                transformOrigin: 'center' // Definimos a origem da transformação para a parte inferior central
              }}
            />
            
            {/* Camadas de sobreposição para escurecer a imagem */}
            <div className="absolute inset-0 bg-background opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            
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
              <span className="text-primary text-xs font-medium tracking-wider uppercase">Agência Estratégica</span>
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
              style={{ 
                textShadow: !isMobile ? `${textShadowX * 2}px ${textShadowY * 2}px 8px rgba(0,0,0,0.2)` : '',
              }}
            >
              ESTRATÉGIA, <br />FORÇA, <br />
              IMPACTO 
              <span className="text-primary">.</span>
            </motion.h1>
          </div>
          
          {/* Descrição */}
          <motion.p 
            className="text-white/70 max-w-2xl text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Criamos estratégias digitais que destacam sua marca no mercado, com a 
            força e determinação de um lobo alfa. Nossa abordagem gera resultados concretos.
          </motion.p>
        </div>
      </div>
    
      {/* Divisor com gradiente - exatamente igual ao da página de desenvolvimento web */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>    </section>
  )
}

export default Hero 