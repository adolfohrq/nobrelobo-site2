import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  FileText, 
  Link2, 
  BarChart2, 
  Bookmark, 
  Award, 
  CheckCircle 
} from 'lucide-react';

// Componente de Base de Conhecimentos para a página de SEO Estratégico
const KnowledgeBaseSection: React.FC = () => {
  // Array com artigos sobre SEO
  const articles = [
    {
      title: "SEO Técnico: O que você precisa saber",
      excerpt: "Aprenda os fundamentos técnicos que impactam diretamente o ranking do seu site nos mecanismos de busca.",
      category: "Guia",
      icon: <Code className="h-5 w-5" />,
      color: "primary"
    },
    {
      title: "Como criar conteúdo que rankeia",
      excerpt: "Descubra as técnicas para criar conteúdo otimizado que atrai tráfego orgânico e converte visitantes.",
      category: "Tutorial",
      icon: <FileText className="h-5 w-5" />,
      color: "blue-400"
    },
    {
      title: "Estratégias de link building em 2023",
      excerpt: "Conheça as estratégias mais eficientes para construir backlinks de qualidade e aumentar a autoridade do seu domínio.",
      category: "Estratégia",
      icon: <Link2 className="h-5 w-5" />,
      color: "purple-400"
    },
    {
      title: "Métricas de SEO que realmente importam",
      excerpt: "Saiba quais métricas acompanhar para medir o sucesso real das suas estratégias de SEO e tomar decisões baseadas em dados.",
      category: "Análise",
      icon: <BarChart2 className="h-5 w-5" />,
      color: "green-400"
    }
  ];

  // Função para obter a classe de borda correta para o hover
  const getHoverBorderClass = (color: string) => {
    switch (color) {
      case "primary": return "hover:border-primary/30";
      case "blue-400": return "hover:border-blue-400/30";
      case "purple-400": return "hover:border-purple-400/30";
      case "green-400": return "hover:border-green-400/30";
      default: return "hover:border-white/20";
    }
  };

  // Função para obter a classe de cor de fundo para a barra superior
  const getBarColorClass = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary";
      case "blue-400": return "bg-blue-400";
      case "purple-400": return "bg-purple-400";
      case "green-400": return "bg-green-400";
      default: return "bg-gray-400";
    }
  };

  // Função para obter a classe de cor de texto
  const getTextColorClass = (color: string) => {
    switch (color) {
      case "primary": return "text-primary";
      case "blue-400": return "text-blue-400";
      case "purple-400": return "text-purple-400";
      case "green-400": return "text-green-400";
      default: return "text-gray-400";
    }
  };

  // Função para obter a classe de cor de fundo para ícones
  const getBgColorClass = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary/10";
      case "blue-400": return "bg-blue-400/10";
      case "purple-400": return "bg-purple-400/10";
      case "green-400": return "bg-green-400/10";
      default: return "bg-gray-400/10";
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Divisor no topo da seção */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              >
                <Bookmark size={16} className="mr-2" /> Recursos Exclusivos
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Base de <span className="text-primary">Conhecimentos</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/70 text-lg max-w-xl"
              >
                Conteúdo especializado para impulsionar sua estratégia de SEO e dominar os resultados de busca.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="/knowledge-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Ver Biblioteca Completa
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Cards de artigos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href="/knowledge-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group ${getHoverBorderClass(article.color)} transition-all h-full flex flex-col`}
                whileHover={{ 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Removendo a linha colorida do primeiro card */}
                {index !== 0 && <div className={getBarColorClass(article.color)}></div>}
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full ${getBgColorClass(article.color)} flex items-center justify-center mr-3 ${getTextColorClass(article.color)}`}>
                      {article.icon}
                    </div>
                    <span className={`text-xs font-medium ${getTextColorClass(article.color)} ${getBgColorClass(article.color)} px-2 py-1 rounded-full`}>
                      {article.category}
                    </span>
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-bold mb-3 transition-colors"
                    initial={{ opacity: 0.9 }}
                  >
                    {article.title}
                  </motion.h3>
                  
                  <p className="text-white/60 text-sm mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <motion.div 
                    className="flex items-center text-primary text-sm font-medium mt-auto"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Ler artigo
                    <motion.div
                      className="ml-1 inline-flex"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ 
                        duration: 0.3, 
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                    >
                      <ArrowRight size={14} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
          
          {/* Banner de destaque */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-pattern opacity-5"></div>
            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Conteúdo Premium de SEO</h3>
                </div>
                
                <p className="text-white/70 mb-6">
                  Acesse nossa biblioteca completa com dezenas de artigos, guias e tutoriais sobre SEO e marketing digital. Conteúdo atualizado semanalmente por especialistas do mercado.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/80">Guias técnicos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/80">Tutoriais práticos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/80">Estudos de caso</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/80">Templates</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="relative w-48 h-48"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
                  <div className="absolute inset-4 rounded-full border border-primary/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center">
                      <Bookmark className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  
                  {/* Pontos orbitando */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-primary"
                      style={{
                        top: `calc(50% - 8px)`,
                        left: `calc(50% - 8px)`,
                        transform: `rotate(${angle}deg) translateX(96px)`
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBaseSection;
