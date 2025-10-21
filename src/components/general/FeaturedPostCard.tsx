import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}

interface FeaturedPostCardProps {
  post: Post;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  // Função para gerar o slug do artigo baseado no título
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\sáàâãéèêíïóôõöúçñ]/gi, '')
      .replace(/\s+/g, '-');
  };

  // Gera o slug para o artigo do post em destaque
  const articleSlug = generateSlug(post.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-2xl overflow-hidden group bg-white/5 backdrop-blur-sm border border-white/10"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/80 to-[#111]/70 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            loading="lazy"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Informações do post */}
        <div className="md:w-2/3">
          {/* Badge da categoria */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-primary/20 px-4 py-2 rounded-full text-primary text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="flex items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B"/>
              </svg>
              Post em Destaque
            </span>
          </motion.div>
          
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-gilroy font-bold text-white leading-tight mb-6 group-hover:text-primary transition-colors duration-300"
          >
            {post.title}
          </motion.h2>
          
          {/* Resumo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/70 text-lg mb-8 max-w-2xl"
          >
            {post.excerpt}
          </motion.p>
          
          {/* Autor e data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center mb-6"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/30">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-medium">{post.author}</div>
              <div className="text-white/50 text-sm flex items-center">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {post.tags.map((tag, index) => (
              <div 
                key={index} 
                className="text-white/70 text-sm border border-white/20 px-3 py-1 rounded-full hover:border-primary/30 hover:text-primary/80 transition-colors cursor-pointer"
              >
                #{tag}
              </div>
            ))}
          </motion.div>
          
          {/* Botão "Ler artigo" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to={`/blog/${articleSlug}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-black font-medium rounded-full hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                Ler artigo completo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Mantemos o elemento decorativo apenas neste componente porque ele faz parte do design visual do card */}
        <div className="hidden md:block md:w-1/3 relative">
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/30 rounded-full z-0 opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/20 z-0 opacity-30"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPostCard; 