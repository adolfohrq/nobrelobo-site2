import React, { useState } from 'react';
import Layout from '../components/general/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/general/SectionHeader';
import HeroPages from '../components/general/HeroPages'
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  Calculator, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Tag
} from 'lucide-react';

const RecursosGratuitos: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Categorias de recursos
  const categories = [
    { id: 'todos', name: 'Todos', icon: <FileText className="w-5 h-5" /> },
    { id: 'ebooks', name: 'E-books', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'calculadoras', name: 'Calculadoras', icon: <Calculator className="w-5 h-5" /> },
    { id: 'templates', name: 'Templates', icon: <FileText className="w-5 h-5" /> },
    { id: 'guias', name: 'Guias', icon: <BookOpen className="w-5 h-5" /> }
  ];

   // Recursos disponíveis
   const recursos = [
     {
       id: 1,
       title: "Guia Completo de SEO para Pequenas Empresas",
       description: "Aprenda as estratégias essenciais de SEO para aumentar sua visibilidade online sem grandes investimentos.",
       category: "ebooks",
       type: "E-book",
       pages: 45,
       downloads: 1250,
       rating: 4.8,
       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
       tags: ["SEO", "Marketing Digital", "Pequenas Empresas"],
       downloadUrl: "#"
     },
     {
       id: 2,
       title: "Calculadora de ROI de Marketing Digital",
       description: "Calcule o retorno sobre investimento das suas campanhas de marketing digital de forma precisa.",
       category: "calculadoras",
       type: "Ferramenta",
       pages: null,
       downloads: 890,
       rating: 4.9,
       image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
       tags: ["ROI", "Marketing Digital", "Calculadora"],
       downloadUrl: "#"
     },
     {
       id: 3,
       title: "Template de Plano de Marketing Digital",
       description: "Template completo e editável para criar seu plano de marketing digital estratégico.",
       category: "templates",
       type: "Template",
       pages: 12,
       downloads: 2100,
       rating: 4.7,
       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
       tags: ["Planejamento", "Marketing Digital", "Template"],
       downloadUrl: "#"
     },
     {
       id: 4,
       title: "Guia de Branding para Startups",
       description: "Como construir uma identidade de marca forte desde o início, mesmo com orçamento limitado.",
       category: "guias",
       type: "Guia",
       pages: 32,
       downloads: 980,
       rating: 4.6,
       image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
       tags: ["Branding", "Startups", "Identidade Visual"],
       downloadUrl: "#"
     },
     {
       id: 5,
       title: "Calculadora de Custo por Aquisição (CAC)",
       description: "Determine o custo real de aquisição de clientes para otimizar seus investimentos em marketing.",
       category: "calculadoras",
       type: "Ferramenta",
       pages: null,
       downloads: 750,
       rating: 4.8,
       image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
       tags: ["CAC", "Métricas", "Calculadora"],
       downloadUrl: "#"
     },
     {
       id: 6,
       title: "E-book: Automação de Marketing para PMEs",
       description: "Como implementar automação de marketing de forma eficiente e econômica para pequenas e médias empresas.",
       category: "ebooks",
       type: "E-book",
       pages: 38,
       downloads: 1450,
       rating: 4.9,
       image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
       tags: ["Automação", "Marketing", "PMEs"],
       downloadUrl: "#"
     }
   ];

  // Filtrar recursos por categoria
  const filteredRecursos = activeCategory === 'todos' 
    ? recursos 
    : recursos.filter(recurso => recurso.category === activeCategory);

  return (
    <Layout>

<HeroPages 
        title="RECURSOS <br />GRATUITOS<span class='text-primary'>.</span>"
        subtitle="Ferramentas, guias e templates profissionais para acelerar o crescimento do seu negócio. Tudo gratuito."
        badge="Conteúdo Exclusivo"
        backgroundImage="/lobo-hero-portfolio.jpg"
        height="h-[50vh] sm:h-[55vh] md:h-[60vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "75",
          contrast: "110",
          scale: 1.05
        }}
      />



      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full filter blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Recursos Gratuitos"
            subtitle="Ferramentas, guias e templates profissionais para acelerar o crescimento do seu negócio. Tudo gratuito, tudo pensado para você."
            badge="Recursos"
            floatingTitleText="RECURSOS"
            iconComponent={
              <Download className="w-8 h-8 text-primary" />
            }
          />

          {/* Stats rápidas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            {[
              { value: "6+", label: "Recursos Disponíveis" },
              { value: "7.5K+", label: "Downloads Totais" },
              { value: "4.8", label: "Avaliação Média" },
              { value: "100%", label: "Gratuito" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-gilroy font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Filtro de categorias */}
          <div className="flex justify-center mb-16">
            <div className="p-1 bg-white/5 rounded-full border border-white/10 flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id 
                      ? "bg-primary text-primary-foreground" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: activeCategory !== category.id ? 1.05 : 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.icon}
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Grid de recursos */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredRecursos.map((recurso, index) => (
                <motion.div
                  key={recurso.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                     {/* Imagem do recurso */}
                     <div className="relative aspect-[16/10] overflow-hidden">
                       <img 
                         src={recurso.image} 
                         alt={recurso.title}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                      
                      {/* Badge de categoria */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-xl rounded-full text-white text-xs font-medium">
                          {recurso.type}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-white text-sm font-medium">{recurso.rating}</span>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-gilroy font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {recurso.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4 text-sm flex-grow">
                        {recurso.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {recurso.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-white/5 rounded-lg text-white/60 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-white/50 text-sm mb-6">
                        <div className="flex items-center gap-4">
                          {recurso.pages && (
                            <div className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              <span>{recurso.pages} páginas</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{recurso.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Botão de download */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary text-primary-foreground font-gilroy font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center group"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Baixar Gratuitamente
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

   
    </Layout>
  );
};

export default RecursosGratuitos;
