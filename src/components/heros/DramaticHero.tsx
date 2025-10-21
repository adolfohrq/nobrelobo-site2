import React from 'react';
import { motion } from 'framer-motion';

interface DramaticHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
}

const DramaticHero: React.FC<DramaticHeroProps> = ({
  title,
  subtitle,
  ctaText = "Explorar",
  ctaLink = "#",
  backgroundImage,
}) => {
  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden group">
      {/* Background com efeito de zoom */}
      <motion.div 
        className="absolute inset-0 w-full h-full -z-10"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        
        {/* Textura granulada para dar profundidade */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: 'cover'
          }}
        ></div>
      </motion.div>
      
      {/* Container do Conteúdo */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Título com efeito de recorte */}
          <div className="mb-6 overflow-hidden">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight relative"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-10 rounded-xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              {title.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {i === Math.floor(arr.length / 2) ? (
                    <span className="text-primary block mb-1">{word}</span>
                  ) : (
                    <span>{word} </span>
                  )}
                </React.Fragment>
              ))}
            </motion.h2>
          </div>
          
          {/* Linha separadora animada */}
          <motion.div 
            className="w-32 h-1 bg-primary mx-auto mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          ></motion.div>
          
          {/* Subtítulo */}
          {subtitle && (
            <motion.p 
              className="text-white/80 text-xl md:text-2xl mb-14 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Botão CTA com efeito de brilho */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-12 py-5 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-full hover:bg-primary hover:text-black transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{ctaText}</span>
              <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <motion.span 
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                animate={{ 
                  opacity: [0, 0.5, 0], 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              ></motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Elementos de fundo flutuantes */}
      <div className="absolute -bottom-20 -left-20 w-[30%] h-[30%] border border-primary/20 rounded-full -z-5 opacity-30"></div>
      <div className="absolute top-20 right-20 w-[20%] h-[20%] border border-primary/10 rounded-full -z-5 opacity-20"></div>
    </div>
  );
};

export default DramaticHero; 