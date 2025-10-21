import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticlesHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  align?: 'left' | 'center' | 'right';
}

const ParticlesHero: React.FC<ParticlesHeroProps> = ({
  title,
  subtitle,
  ctaText = "Descobrir",
  ctaLink = "#",
  align = 'left',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Efeito de partículas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Configuração de tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Partículas
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    
    // Classe de partícula
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(236, 200, 11, ${Math.random() * 0.5})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }
      
      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }
    
    // Criar partículas
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    // Animar partículas
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Desenhar linhas entre partículas próximas
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    // Conectar partículas com linhas
    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx!.strokeStyle = `rgba(236, 200, 11, ${0.1 * (1 - distance/100)})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }
    
    // Redimensionar canvas ao redimensionar janela
    function handleResize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      particlesArray.length = 0;
      init();
    }
    
    window.addEventListener('resize', handleResize);
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Determinar o alinhamento do texto
  const getTextAlignment = () => {
    switch (align) {
      case 'right': return 'text-right items-end';
      case 'center': return 'text-center items-center';
      default: return 'text-left items-start';
    }
  };
  
  return (
    <div className="relative min-h-[90vh] w-full flex items-center bg-black overflow-hidden">
      {/* Canvas para partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
      
      {/* Overlay com grade digital */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 -z-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-5"></div>
      
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ECC80B" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>
      
      {/* Elementos de interface futurista */}
      <div className="absolute top-20 right-20 w-32 h-32 border-t border-l border-primary/30 rounded-tl-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border-b border-r border-primary/30 rounded-br-3xl"></div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-10">
        <div className={`flex flex-col ${getTextAlignment()} max-w-3xl`}>
          {/* Indicador tecnológico */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary/80 font-mono text-sm uppercase tracking-widest">Tecnologia Avançada</span>
            </div>
          </motion.div>
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="relative mb-2">
              <div className="absolute left-0 top-1/2 w-12 h-px bg-primary transform -translate-y-1/2"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {title}
              <span className="text-primary">.</span>
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
          
          {/* Botão CTA com efeito de highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-black border border-primary text-primary rounded-md relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center font-mono uppercase tracking-wider text-sm group-hover:text-black transition-colors duration-300">
                {ctaText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </motion.a>
            
            {/* Efeito de foco no botão */}
            <motion.div 
              className="absolute -inset-4 border border-primary/20 rounded-lg opacity-0 group-hover:opacity-100"
              initial={false}
              whileHover={{ opacity: 1 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParticlesHero; 