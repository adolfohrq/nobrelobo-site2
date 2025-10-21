import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
}

interface FeaturedArticlesProps {
  articles: Article[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-gilroy font-bold text-white">Artigos em Destaque</h2>
        <Link to="/knowledge-base/all">
          <motion.div
            whileHover={{ x: 5 }}
            className="text-primary flex items-center text-sm font-medium cursor-pointer"
          >
            Ver todos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="mb-4">
              <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            
            <h3 className="text-xl font-gilroy font-bold text-white mb-3 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            
            <p className="text-white/70 mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white/50 text-sm">
                <span className="flex items-center mr-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {article.readTime} min
                </span>
                <span>{article.date}</span>
              </div>
              
              <Link to={`/knowledge-base/${article.id}`}>
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
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles; 