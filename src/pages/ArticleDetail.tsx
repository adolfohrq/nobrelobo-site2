import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/general/Layout';
import HeroPages from '../components/general/HeroPages';
import ArticleContent from '../components/knowledge-base/ArticleContent';
import Sidebar from '../components/knowledge-base/Sidebar';
import { articles, categories, getRelatedArticles } from '../data/knowledge-base-data';
import { Article } from '../types/knowledge-base';

const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  
  // Artigos populares para a barra lateral
  const popularArticles = articles
    .filter(article => article.popular)
    .map(article => ({
      id: article.id,
      title: article.title,
      category: article.category
    }));
  
  useEffect(() => {
    // Encontra o artigo pelo ID
    const foundArticle = articles.find(a => a.id === articleId);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Obtém artigos relacionados
      const related = getRelatedArticles(articleId as string, articles);
      setRelatedArticles(related);

      // Rola para o topo da página quando o artigo muda
      window.scrollTo(0, 0);
    } else {
      // Redireciona para a página principal se o artigo não for encontrado
      navigate('/knowledge-base');
    }
  }, [articleId, navigate]);
  
  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <HeroPages 
        title={article.title + "<span class='text-primary'>.</span>"}
        subtitle={article.excerpt}
        badge={article.category}
        backgroundImage="/lobo-hero-knowledge.jpg"
        height="h-[60vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "80",
          contrast: "120",
          scale: 1.0
        }}
      />
      
      <section className="py-16 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center text-sm text-white/60">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/knowledge-base" className="hover:text-primary transition-colors">
                Base de Conhecimentos
              </Link>
              <span className="mx-2">/</span>
              <Link 
                to={`/knowledge-base/category/${article.category.toLowerCase()}`} 
                className="hover:text-primary transition-colors"
              >
                {article.category}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary font-medium truncate max-w-[200px]">
                {article.title}
              </span>
            </nav>
          </div>
          
          {/* Layout principal com barra lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Conteúdo principal */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArticleContent
                id={article.id}
                title={article.title}
                content={article.content}
                category={article.category}
                readTime={article.readTime}
                date={article.date}
                author={article.author}
                tags={article.tags}
                relatedArticles={relatedArticles.map(a => ({
                  id: a.id,
                  title: a.title,
                  category: a.category
                }))}
              />
            </motion.div>
            
            {/* Barra lateral */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-24">
                <Sidebar 
                  categories={categories} 
                  popularArticles={popularArticles} 
                />
              </div>
            </motion.div>
          </div>
          
          {/* Navegação entre artigos */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.findIndex(a => a.id === articleId) > 0 && (
              <Link 
                to={`/knowledge-base/${articles[articles.findIndex(a => a.id === articleId) - 1].id}`}
                className="group"
              >
                <motion.div 
                  whileHover={{ x: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center text-primary mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm font-medium">Artigo Anterior</span>
                  </div>
                  <h4 className="text-white group-hover:text-primary transition-colors font-medium">
                    {articles[articles.findIndex(a => a.id === articleId) - 1].title}
                  </h4>
                </motion.div>
              </Link>
            )}
            
            {articles.findIndex(a => a.id === articleId) < articles.length - 1 && (
              <Link 
                to={`/knowledge-base/${articles[articles.findIndex(a => a.id === articleId) + 1].id}`}
                className="group md:ml-auto"
              >
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-end text-primary mb-2">
                    <span className="text-sm font-medium">Próximo Artigo</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="text-white group-hover:text-primary transition-colors font-medium text-right">
                    {articles[articles.findIndex(a => a.id === articleId) + 1].title}
                  </h4>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleDetailPage; 