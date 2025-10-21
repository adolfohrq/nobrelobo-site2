import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphismHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  align?: 'left' | 'center' | 'right';
}

const GlassmorphismHero: React.FC<GlassmorphismHeroProps> = ({
  title,
  subtitle,
  ctaText = "Comece agora",
  ctaLink = "#",
  backgroundImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
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
    <div 
      className="relative min-h-[90vh] w-full flex items-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
      
      {/* Efeito de brilho */}
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-purple-500/10 via-transparent to-primary/20"></div>
      
      {/* Elementos flutuantes em vidro */}
      <motion.div 
        className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/5 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Formas geométricas */}
      <div className="absolute right-1/4 top-1/4 w-32 h-32 rounded-xl bg-white/5 backdrop-blur-sm rotate-12"></div>
      <div className="absolute left-1/4 bottom-1/3 w-24 h-24 rounded-lg bg-primary/10 backdrop-blur-sm -rotate-12"></div>
      
      {/* Container principal */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-10">
        {/* Card de vidro */}
        <motion.div
          className={`flex flex-col ${getTextAlignment()} max-w-3xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Efeito de brilho no card */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Glassmorphism Design
            </span>
          </motion.div>
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {title}
            </h1>
          </motion.div>
          
          {/* Subtítulo */}
          {subtitle && (
            <motion.p 
              className="text-white/80 text-xl mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Botões CTA com efeito de vidro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/30 transition-colors"
            >
              {ctaText}
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Saiba mais
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Partículas flutuantes (pontos de luz) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-white animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
      </div>
      
      {/* Efeito de luz radial */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(236, 200, 11, 0.2) 0%, transparent 70%)'
        }}
      ></div>
      
      {/* Ícone flutuante no estilo glass */}
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white z-10"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
};

export default GlassmorphismHero; 