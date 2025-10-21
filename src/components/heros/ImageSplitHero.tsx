import React from 'react';
import { motion } from 'framer-motion';

interface ImageSplitHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc: string;
  imagePosition?: 'left' | 'right';
}

const ImageSplitHero: React.FC<ImageSplitHeroProps> = ({
  title,
  subtitle,
  ctaText = "Saiba mais",
  ctaLink = "#",
  imageSrc,
  imagePosition = 'right',
}) => {
  const isImageRight = imagePosition === 'right';
  
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Grid layout */}
      <div className={`grid md:grid-cols-2 min-h-[90vh] ${isImageRight ? '' : 'md:rtl'}`}>
        {/* Conteúdo textual */}
        <div className={`flex flex-col justify-center p-8 md:p-16 lg:p-24 relative ${isImageRight ? '' : 'md:ltr'}`}>
          <div className="relative z-10 max-w-2xl">
            {/* Badge opcional */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-8"
            >
              Nova Abordagem
            </motion.div>
            
            {/* Título */}
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {i === arr.length - 1 ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    <span>{word} </span>
                  )}
                </React.Fragment>
              ))}
            </motion.h2>
            
            {/* Subtítulo */}
            {subtitle && (
              <motion.p 
                className="text-white/80 text-xl lg:text-2xl mb-12 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
            
            {/* Botão CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href={ctaLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-primary text-black font-bold rounded-lg transition-colors text-lg"
              >
                {ctaText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 h-px w-2/3 bg-gradient-to-r from-primary/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-primary/30 to-transparent"></div>
          
          {/* Background de contraste para o texto */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-5"></div>
        </div>
        
        {/* Parte da imagem */}
        <motion.div 
          className="relative h-full overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay com gradiente na direção correta - versão mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 md:opacity-0"></div>
          
          {/* Overlay com gradiente na direção correta - versão desktop */}
          <div 
            className={`absolute inset-0 opacity-70 ${
              isImageRight 
                ? 'bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent' 
                : 'bg-gradient-to-l from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent'
            }`}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSplitHero; 