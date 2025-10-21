import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ArticleContentProps {
  id: string;
  title: string;
  content: string;
  category: string;
  readTime: number;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
  relatedArticles: {
    id: string;
    title: string;
    category: string;
  }[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  id,
  title,
  content,
  category,
  readTime,
  date,
  author,
  tags,
  relatedArticles
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
      {/* Informações do artigo */}
      <div className="px-8 pt-8 pb-4">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center text-white/50 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {readTime} min de leitura
          </span>
          
          <span className="text-white/50 text-sm">
            {date}
          </span>
        </div>
      </div>
      
      {/* Autor */}
      <div className="mx-8 flex items-center p-4 bg-white/5 rounded-xl border border-white/10 mb-8">
        <img 
          src={author.avatar} 
          alt={author.name} 
          className="w-12 h-12 rounded-full mr-4 border-2 border-primary/30"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(author.name) + '&background=ECC80B&color=000000';
          }}
        />
        <div>
          <h3 className="text-white font-medium">{author.name}</h3>
          <p className="text-white/50 text-sm">{author.role}</p>
        </div>
      </div>
      
      {/* Conteúdo do artigo */}
      <div className="px-8">
        <div 
          className="prose prose-invert prose-yellow max-w-none prose-headings:font-gilroy prose-headings:font-bold prose-headings:text-white prose-p:text-white/80 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:mx-auto prose-img:shadow-lg prose-strong:text-primary/90 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-primary prose-li:text-white/80 prose-ul:my-4 prose-ol:my-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      
      {/* Seção inferior */}
      <div className="mt-12 border-t border-white/10">
        {/* Tags */}
        <div className="p-8 pb-4">
          <h3 className="text-white font-medium mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} to={`/knowledge-base/tag/${tag.toLowerCase()}`}>
                <span className="bg-white/5 hover:bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full transition-colors">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Artigos relacionados */}
        {relatedArticles.length > 0 && (
          <div className="px-8 py-6 border-t border-white/10">
            <h3 className="text-white font-gilroy font-bold text-xl mb-4">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map((article) => (
                <Link key={article.id} to={`/knowledge-base/${article.id}`}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group h-full"
                  >
                    <h4 className="text-white group-hover:text-primary transition-colors font-medium mb-1">
                      {article.title}
                    </h4>
                    <span className="text-xs text-white/50">
                      {article.category}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Navegação e compartilhamento */}
        <div className="flex flex-wrap justify-between items-center p-8 border-t border-white/10 bg-white/5">
          <Link to="/knowledge-base">
            <motion.div
              whileHover={{ x: -5 }}
              className="text-primary flex items-center text-sm font-medium cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Voltar para Base de Conhecimentos
            </motion.div>
          </Link>
          
          <div className="flex items-center space-x-3">
            <span className="text-white/50 text-sm">Compartilhar:</span>
            <motion.div
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`, '_blank')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copiado para a área de transferência!');
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H16M12 8V16M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent; 