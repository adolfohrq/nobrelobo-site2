import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  description: string;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm border border-white/5 hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efeito de gradiente na borda quando hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Ícone de mais info no canto */}
      <motion.div 
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-primary border border-white/10 group-hover:border-primary/40"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.5,
          rotate: isHovered ? 0 : -90
        }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </motion.div>

      {/* Imagem do projeto */}
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter group-hover:brightness-110"
        />
      </div>

      {/* Overlay com informações */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 flex flex-col justify-end">
        {/* Badge da categoria com efeito brilhante */}
        <div className="inline-block bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-primary text-xs font-medium mb-3 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 shadow-sm shadow-primary/20 group-hover:shadow-primary/30">
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
            {project.category}
          </div>
        </div>
        
        {/* Título do projeto */}
        <motion.h3 
          className="text-xl font-gilroy font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        {/* Informações do cliente e ano */}
        <motion.div 
          className="flex justify-between text-white/70 text-sm mb-3"
          animate={{ y: isHovered ? -5 : 0, opacity: isHovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {project.client}
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {project.year}
          </span>
        </motion.div>
        
        {/* Descrição do projeto - visível apenas no hover */}
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 'auto' : 0
          }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          {/* Linha divisória com animação */}
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.4 }}
          ></motion.div>
          
          <p className="text-white/70 text-sm">{project.description}</p>
          
          {/* Botão "Ver Detalhes" */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 px-5 py-2 bg-primary text-black text-sm font-medium rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 flex items-center group/btn"
          >
            Ver Detalhes
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard; 