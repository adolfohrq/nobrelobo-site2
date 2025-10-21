import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/general/Layout';
import HeroPages from '../components/general/HeroPages';
import SearchBar from '../components/knowledge-base/SearchBar';
import KnowledgeBaseCard from '../components/knowledge-base/KnowledgeBaseCard';
import Sidebar from '../components/knowledge-base/Sidebar';
import { articles, categories, getFilteredArticles } from '../data/knowledge-base-data';
import { Article } from '../types/knowledge-base';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  
  // Artigos populares para a barra lateral
  const popularArticles = articles
    .filter(article => article.popular)
    .map(article => ({
      id: article.id,
      title: article.title,
      category: article.category
    }));
  
  // Verifica se a categoria existe
  useEffect(() => {
    const categoryExists = categories.some(
      cat => cat.name.toLowerCase() === categoryName?.toLowerCase()
    );
    
    if (!categoryExists && categoryName) {
      navigate('/knowledge-base');
    }
  }, [categoryName, navigate]);
  
  // Atualiza os artigos filtrados quando os filtros mudam
  useEffect(() => {
    if (categoryName) {
      const category = categories.find(
        cat => cat.name.toLowerCase() === categoryName.toLowerCase()
      );
      
      if (category) {
        const filtered = getFilteredArticles(articles, category.name, searchQuery);
        setFilteredArticles(filtered);
      }
    }
  }, [categoryName, searchQuery]);
  
  // Manipulador de evento de busca
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Manipulador para limpar a busca
  const handleClearSearch = () => {
    setSearchQuery('');
  };
  
  // Formata o nome da categoria para exibição
  const formattedCategoryName = categoryName 
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) 
    : '';
  
  return (
    <Layout>
      <HeroPages 
        title={`Artigos sobre <br/>${formattedCategoryName}<span class='text-primary'>.</span>`}
        subtitle={`Explore nossa coleção de artigos, tutoriais e guias sobre ${formattedCategoryName}.`}
        badge="Categoria"
        backgroundImage="/lobo-hero-knowledge.jpg"
        height="h-[40vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "70",
          contrast: "120",
          scale: 1.05
        }}
      />
      
      <section className="py-16 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Layout principal com barra lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Conteúdo principal */}
            <div className="lg:col-span-8">
              {/* Barra de pesquisa */}
              <SearchBar onSearch={handleSearch} />
              
              {/* Resultados */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => (
                    <KnowledgeBaseCard
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      category={article.category}
                      readTime={article.readTime}
                      date={article.date}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-gilroy font-bold text-white mb-2">Nenhum resultado encontrado</h3>
                  <p className="text-white/70 mb-4">
                    Não encontramos artigos que correspondam aos seus critérios de busca.
                  </p>
                  <div 
                    onClick={handleClearSearch}
                    className="text-primary flex items-center justify-center mx-auto cursor-pointer"
                  >
                    Limpar busca
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Barra lateral */}
            <div className="lg:col-span-4">
              <Sidebar 
                categories={categories} 
                popularArticles={popularArticles} 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage; 