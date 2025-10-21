import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogSidebarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  popularPosts: {
    id: number;
    title: string;
    image: string;
    date: string;
  }[];
  tags: string[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  popularPosts,
  tags
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para gerar o slug do artigo baseado no título
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\sáàâãéèêíïóôõöúçñ]/gi, '')
      .replace(/\s+/g, '-');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar a funcionalidade de busca
    console.log('Pesquisando por:', searchTerm);
  };

  return (
    <aside className="w-full lg:w-72 xl:w-80 space-y-8">
      {/* Campo de Busca */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
      >
        <h3 className="text-lg font-gilroy font-bold text-white mb-4">Pesquisar</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Buscar no blog..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/10 text-white border border-white/20 rounded-lg py-2 pl-4 pr-10 outline-none focus:border-primary transition-colors"
          />
          <button 
            type="submit" 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </motion.div>

      {/* Categorias */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
      >
        <h3 className="text-lg font-gilroy font-bold text-white mb-4">Categorias</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left py-2 px-3 rounded-lg transition-colors flex justify-between items-center ${
                  activeCategory === category
                    ? 'bg-primary/20 text-primary'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{category}</span>
                {activeCategory === category && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Posts Populares */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
      >
        <h3 className="text-lg font-gilroy font-bold text-white mb-4">Posts Populares</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${generateSlug(post.title)}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="text-white group-hover:text-primary transition-colors line-clamp-2 text-sm font-medium">
                  {post.title}
                </h4>
                <span className="text-white/50 text-xs">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
      >
        <h3 className="text-lg font-gilroy font-bold text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-white/70 text-sm border border-white/20 px-3 py-1 rounded-full hover:border-primary/30 hover:text-primary/80 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-5"
      >
        <h3 className="text-lg font-gilroy font-bold text-white mb-2">Newsletter</h3>
        <p className="text-white/70 text-sm mb-4">
          Assine nossa newsletter para receber atualizações e conteúdos exclusivos.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="w-full bg-white/10 text-white border border-white/20 rounded-lg py-2 px-4 outline-none focus:border-primary transition-colors"
          />
          <button 
            type="submit"
            className="w-full py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Inscrever-se
          </button>
        </form>
      </motion.div>
    </aside>
  );
};

export default BlogSidebar; 