import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Layers, PenTool, Crop, Image as ImageIcon, Scissors, Grid, Figma, Feather } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Estado para controlar a posição do mouse para efeitos interativos
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Efeito para rastrear a posição do mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Variantes para animações de partículas
  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      x: [0, i % 2 === 0 ? 10 : -10, 0],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 3 + (i % 4),
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: i * 0.2
      }
    })
  };
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de elementos de design */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        {/* Gradiente de fundo com cores vibrantes */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 41, 190, 0.15), rgba(5, 5, 5, 0) 60%)`,
            transition: 'background 0.3s ease'
          }}
        ></div>
        
        {/* Grade de fundo */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        {/* Gradiente de sobreposição */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Partículas flutuantes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'bg-primary/30' : 
              i % 5 === 1 ? 'bg-blue-500/30' : 
              i % 5 === 2 ? 'bg-purple-500/30' : 
              i % 5 === 3 ? 'bg-amber-500/30' : 'bg-green-500/30'
            }`}
            style={{
              width: `${8 + (i % 4) * 4}px`,
              height: `${8 + (i % 4) * 4}px`,
              left: `${10 + (i * 5) % 90}%`,
              top: `${5 + (i * 7) % 90}%`,
              filter: 'blur(1px)'
            }}
          />
        ))}
        
        {/* Linhas de conexão */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M0,100 Q400,300 800,100 T1600,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
              pathOffset: [0, 1]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M0,500 Q600,200 1200,500 T1600,200"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
              pathOffset: [0, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333EA" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Elementos decorativos de design gráfico com animações melhoradas */}
        <motion.div 
          className="absolute top-1/4 left-1/5 w-32 h-32 rounded-md border-2 border-primary/20 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(120, 41, 190, 0.1), rgba(120, 41, 190, 0.02))'
          }}
          animate={{ 
            rotate: [12, 24, 12],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full border-2 border-blue-500/20 backdrop-blur-sm"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.02))'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/5 w-24 h-24 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(45deg, rgba(120, 41, 190, 0.1), rgba(59, 130, 246, 0.1))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
          }}
          animate={{ 
            rotate: [45, 90, 45],
            opacity: [0.15, 0.35, 0.15],
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '50% 50% 50% 50% / 50% 50% 50% 50%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 h-3 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))',
            borderRadius: '4px'
          }}
          animate={{ 
            width: ['12rem', '20rem', '12rem'],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5
          }}
        />
        
        {/* Círculos concêntricos pulsantes */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div 
            key={`circle-${i}`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05 - (i * 0.01), 0.1 - (i * 0.02), 0.05 - (i * 0.01)]
            }}
            transition={{ 
              duration: 8 + i * 4, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2
            }}
          />
        ))}
        
        {/* Efeito de luz dinâmico */}
        <motion.div
          className="absolute rounded-full filter blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(120, 41, 190, 0.3), rgba(59, 130, 246, 0.1))',
            width: '40vw',
            height: '40vw',
            top: '30%',
            left: '60%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <PenTool size={16} className="mr-2" /> Design Gráfico
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforme <span className="text-primary">ideias</span> em comunicação <span className="text-primary">visual</span> impactante
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Criamos designs que comunicam sua mensagem de forma clara, memorável e alinhada com a identidade da sua marca.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Iniciar Projeto
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                Explorar Serviços
              </motion.a>
            </div>
            
            {/* Estatísticas de Design */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+90%</div>
                <div className="text-white/70 text-sm">Aumento em engajamento visual</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+75%</div>
                <div className="text-white/70 text-sm">Melhoria na percepção da marca</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+60%</div>
                <div className="text-white/70 text-sm">Aumento em conversões</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Elemento visual de design gráfico */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Grade de design */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <PenTool className="h-10 w-10 text-primary" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-lg flex items-center justify-center">
                    <Crop className="h-10 w-10 text-blue-400" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg flex items-center justify-center">
                    <Palette className="h-10 w-10 text-purple-400" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-amber-500/5 rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-amber-400" />
                  </div>
                </div>
                
                {/* Régua de design */}
                <div className="w-full h-8 bg-white/5 rounded-md mb-6 relative">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-primary/20 rounded-l-md"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="w-px h-4 bg-white/30"></div>
                    ))}
                  </div>
                </div>
                
                {/* Paleta de cores */}
                <div className="flex space-x-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                  <div className="w-8 h-8 rounded-full bg-amber-500"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  <div className="w-8 h-8 rounded-full bg-red-500"></div>
                </div>
                
                {/* Texto de design */}
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  <div className="h-4 bg-white/10 rounded w-2/3"></div>
                </div>
                
                {/* Ferramentas de design */}
                <div className="mt-6 flex justify-between">
                  <Figma className="h-6 w-6 text-white/40" />
                  <Scissors className="h-6 w-6 text-white/40" />
                  <Grid className="h-6 w-6 text-white/40" />
                  <Feather className="h-6 w-6 text-white/40" />
                  <Layers className="h-6 w-6 text-white/40" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 