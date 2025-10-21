import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface KnowledgeBaseCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  index: number;
}

const KnowledgeBaseCard: React.FC<KnowledgeBaseCardProps> = ({ 
  id, 
  title, 
  excerpt, 
  category, 
  readTime, 
  date, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/20 transition-all duration-300 group h-full flex flex-col"
    >
      {/* Categoria do artigo */}
      <div className="mb-4">
        <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      {/* Título do artigo */}
      <h3 className="text-xl font-gilroy font-bold text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      {/* Resumo do artigo */}
      <p className="text-white/70 mb-6 flex-grow">
        {excerpt}
      </p>
      
      {/* Metadados e link */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center text-white/50 text-sm">
          <span className="flex items-center mr-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {readTime} min
          </span>
          <span>{date}</span>
        </div>
        
        <Link to={`/knowledge-base/${id}`}>
          <motion.div
            whileHover={{ x: 5 }}
            className="text-primary flex items-center text-sm font-medium cursor-pointer"
          >
            Ler artigo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default KnowledgeBaseCard; 