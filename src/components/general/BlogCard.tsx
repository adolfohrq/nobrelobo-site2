import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  category: string;
  image: string;
  readTime: string;
  excerpt: string;
}

interface BlogCardProps {
  post: Post;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  // Função para gerar o slug do artigo baseado no título
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\sáàâãéèêíïóôõöúçñ]/gi, '')
      .replace(/\s+/g, '-');
  };

  // Gera o slug para o artigo
  const articleSlug = post.id === 2 
    ? 'a-importancia-do-branding-para-pequenas-empresas' // Slug fixo para o artigo específico
    : generateSlug(post.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary/20 transition-colors duration-300"
    >
      {/* Imagem do post */}
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Conteúdo do post */}
      <div className="p-6">
        {/* Categoria e tempo de leitura */}
        <div className="flex justify-between items-center mb-3">
          <div className="inline-block bg-primary/20 px-3 py-1 rounded-full text-primary text-xs font-medium">
            {post.category}
          </div>
          <div className="text-white/50 text-xs">
            {post.readTime}
          </div>
        </div>
        
        {/* Título do post */}
        <h3 className="text-xl font-gilroy font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        {/* Resumo do post */}
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Botão "Ler mais" com link para a página do artigo */}
        <Link
          to={`/blog/${articleSlug}`}
          className="mt-6 text-primary flex items-center text-sm font-medium"
        >
          <motion.span
            whileHover={{ x: 5 }}
            className="flex items-center"
          >
            Ler mais
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard; 