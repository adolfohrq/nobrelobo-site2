import React from 'react';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  videoSrc?: string;
  align?: 'left' | 'center' | 'right';
}

const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  ctaText = "Assista agora",
  ctaLink = "#",
  videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4", // Vídeo padrão
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
    <div className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-0"></div>
      </div>
      
      {/* Textura grain */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Linhas decorativas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-full h-px bg-white/10 top-1/3"></div>
        <div className="absolute w-full h-px bg-white/10 top-2/3"></div>
        <div className="absolute h-full w-px bg-white/10 left-1/3"></div>
        <div className="absolute h-full w-px bg-white/10 left-2/3"></div>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-10">
        <div className={`flex flex-col ${getTextAlignment()} max-w-3xl`}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 9V15L15 12L10 9Z" fill="currentColor" className="text-primary" />
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" className="text-primary" />
                </svg>
              </div>
              <span className="text-sm uppercase tracking-widest text-white/80">Vídeo Imersivo</span>
            </div>
          </motion.div>
          
          {/* Título com efeito de divisão */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              {title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-2 mb-2">
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>
          
          {/* Linha divisória */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mb-8"
          />
          
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
          
          {/* Botão CTA com ícone de play */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary text-black font-medium rounded-lg group"
            >
              <span className="mr-2 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                </svg>
              </span>
              {ctaText}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero; 