import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/general/Layout';
import PageHero from '../../components/general/PageHero';
import SectionHeader from '../../components/general/SectionHeader';
import FaqAccordion from '../../components/general/FaqAccordion';
import KnowledgeBaseSection from '../../components/sections/seo-estrategico/KnowledgeBaseSection';
import { 
  ArrowRight, 
  Search, 
  BarChart2, 
  Globe, 
  TrendingUp, 
  Award, 
  Layers, 
  Zap, 
  FileText, 
  Code, 
  Shuffle, 
  Hexagon, 
  Compass, 
  Target, 
  LineChart, 
  Cpu, 
  Users, 
  Smartphone, 
  Link2, 
  CheckCircle, 
  AlertCircle,
  Bookmark,
  Mail
} from 'lucide-react';

// Adicionar estilo para o gradiente radial
const gradientRadialStyle = {
  background: 'radial-gradient(circle, rgba(236, 200, 11, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
};

// Componente Hero para a página de SEO Estratégico
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de dados e métricas */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Elementos decorativos de SEO */}
        <motion.div 
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full border border-primary/20"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Linhas de conexão simulando links */}
        <motion.div 
          className="absolute top-1/3 left-1/2 w-[40%] h-px bg-gradient-to-r from-primary/30 to-transparent"
          animate={{ 
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-2/3 right-1/3 w-[30%] h-px bg-gradient-to-l from-primary/30 to-transparent"
          animate={{ 
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Search size={16} className="mr-2" /> SEO Estratégico
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Conquiste <span className="text-primary">visibilidade</span> e atraia <span className="text-primary">tráfego qualificado</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Estratégias avançadas de SEO para posicionar seu negócio nos primeiros resultados de busca e converter visitantes em clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Análise Gratuita
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                Explorar Serviços
              </motion.a>
            </div>
            
            {/* Estatísticas de SEO */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+78%</div>
                <div className="text-white/70 text-sm">Aumento em tráfego orgânico</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+65%</div>
                <div className="text-white/70 text-sm">Melhoria em conversões</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">TOP 3</div>
                <div className="text-white/70 text-sm">Posições para palavras-chave</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Elemento visual de SEO */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Gráfico de crescimento */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-white/5 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="relative h-full flex flex-col">
                    <div className="text-center mb-4">
                      <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h3 className="text-xl font-bold">Crescimento Orgânico</h3>
                    </div>
                    
                    {/* Gráfico simulado */}
                    <div className="flex-1 flex items-end">
                      <div className="w-full h-full relative">
                        {/* Linha de base */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
                        
                        {/* Barras de crescimento */}
                        {[15, 25, 20, 35, 30, 45, 60, 55, 70, 85].map((height, index) => (
                          <motion.div
                            key={index}
                            className="absolute bottom-0 bg-gradient-to-t from-primary/80 to-primary/30 rounded-t-sm"
                            style={{ 
                              left: `${index * 10}%`, 
                              width: '6%',
                              height: '0%'
                            }}
                            animate={{ height: `${height}%` }}
                            transition={{ 
                              duration: 1.5,
                              delay: 0.1 * index,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                        
                        {/* Linha de tendência */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.2 }}
                        >
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path 
                              d="M0,85 Q10,75 20,80 T40,65 T60,45 T80,30 T100,15" 
                              fill="none" 
                              stroke="url(#gradient)" 
                              strokeWidth="2"
                              strokeDasharray="1000"
                              strokeDashoffset="1000"
                              style={{
                                animation: "dash 2s ease-out forwards 1.5s"
                              }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ECC80B" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#ECC80B" stopOpacity="1" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <style dangerouslySetInnerHTML={{ __html: `
                            @keyframes dash {
                              to {
                                stroke-dashoffset: 0;
                              }
                            }
                          `}} />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Legenda */}
                    <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-white/60">
                      <div>Mês 1-3</div>
                      <div className="text-center">Mês 4-7</div>
                      <div className="text-right">Mês 8-12</div>
                    </div>
                  </div>
                </div>
                
                {/* Métricas de SEO */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Search className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="text-xs">Palavras-chave</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <BarChart2 className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-xs">Análise</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Globe className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <span className="text-xs">Ranking</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Link2 className="h-6 w-6 text-red-400 mx-auto mb-2" />
                    <span className="text-xs">Backlinks</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Smartphone className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <span className="text-xs">Mobile</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Cpu className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                    <span className="text-xs">Técnico</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de Serviços para a página de SEO Estratégico
const ServicesSection: React.FC = () => {
  // Array de serviços de SEO
  const services = [
    {
      id: 1,
      title: "Auditoria SEO Completa",
      description: "Análise detalhada do seu site para identificar problemas técnicos, oportunidades de otimização e estratégias para melhorar seu ranking.",
      icon: <Search className="h-8 w-8 text-primary" />,
      features: ["Análise técnica", "Avaliação de conteúdo", "Análise de backlinks", "Relatório detalhado"],
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 2,
      title: "Pesquisa de Palavras-chave",
      description: "Identificação das palavras-chave mais relevantes e com maior potencial para seu negócio, baseada em volume de busca e intenção do usuário.",
      icon: <Target className="h-8 w-8 text-blue-400" />,
      features: ["Análise de concorrentes", "Mapeamento de intenção", "Palavras-chave de cauda longa", "Oportunidades de nicho"],
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      id: 3,
      title: "Otimização On-page",
      description: "Implementação de melhorias técnicas e de conteúdo em seu site para aumentar a relevância para os mecanismos de busca.",
      icon: <FileText className="h-8 w-8 text-purple-400" />,
      features: ["Otimização de meta tags", "Estrutura de URLs", "Otimização de imagens", "Estrutura de conteúdo"],
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      id: 4,
      title: "SEO Técnico",
      description: "Correção de problemas técnicos que afetam a indexação e o ranking do seu site nos mecanismos de busca.",
      icon: <Code className="h-8 w-8 text-amber-400" />,
      features: ["Velocidade de carregamento", "Mobile-friendly", "Estrutura de dados", "Correção de erros"],
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      id: 5,
      title: "Construção de Backlinks",
      description: "Estratégias para obter links de qualidade de sites relevantes, aumentando a autoridade do seu domínio.",
      icon: <Link2 className="h-8 w-8 text-green-400" />,
      features: ["Guest posting", "Digital PR", "Recuperação de links", "Análise de concorrentes"],
      color: "from-green-500/20 to-green-500/5"
    },
    {
      id: 6,
      title: "SEO Local",
      description: "Otimização para buscas locais, ideal para negócios que atendem clientes em regiões específicas.",
      icon: <Compass className="h-8 w-8 text-red-400" />,
      features: ["Google My Business", "Citações locais", "Otimização para 'near me'", "Reputação online"],
      color: "from-red-500/20 to-red-500/5"
    },
    {
      id: 7,
      title: "Conteúdo Otimizado para SEO",
      description: "Criação de conteúdo estratégico que atende às necessidades dos usuários e é otimizado para os mecanismos de busca.",
      icon: <FileText className="h-8 w-8 text-indigo-400" />,
      features: ["Blog posts", "Landing pages", "Conteúdo rico", "Otimização semântica"],
      color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
      id: 8,
      title: "Monitoramento e Relatórios",
      description: "Acompanhamento contínuo do desempenho do seu site nos mecanismos de busca, com relatórios detalhados e insights acionáveis.",
      icon: <BarChart2 className="h-8 w-8 text-cyan-400" />,
      features: ["Tracking de posições", "Análise de tráfego", "Métricas de conversão", "Relatórios personalizados"],
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      id: 9,
      title: "SEO para E-commerce",
      description: "Estratégias específicas para lojas online, focadas em aumentar a visibilidade dos produtos e melhorar as taxas de conversão.",
      icon: <Globe className="h-8 w-8 text-rose-400" />,
      features: ["Otimização de produtos", "Rich snippets", "Experiência do usuário", "Estratégia de categorias"],
      color: "from-rose-500/20 to-rose-500/5"
    },
  ];

  return (
    <section id="servicos" className="relative py-24 overflow-hidden">
      {/* Divisor no topo da seção */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Layers size={16} className="mr-2" /> Nossos Serviços
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Estratégias <span className="text-primary">completas</span> para dominar os <span className="text-primary">resultados de busca</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Oferecemos soluções personalizadas de SEO que combinam técnicas avançadas, análise de dados e criação de conteúdo estratégico para impulsionar seu negócio nos mecanismos de busca.
          </motion.p>
        </div>
        
        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300 z-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Ferramentas Utilizadas para a página de SEO Estratégico
const ToolsSection: React.FC = () => {
  // Interfaces para tipagem
  interface Tool {
    name: string;
    description: string;
    logo: string;
    alt: string;
    isOfficial?: boolean;
    keyFeature: string;
    benefits: string[];
    color: string;
    icon: React.ReactNode;
  }

  // Array com as ferramentas utilizadas
  const seoTools: Tool[] = [
    {
      name: "Google Analytics",
      description: "Análise completa do comportamento dos usuários e métricas de desempenho do site.",
      logo: "/images/tools/google-analytics-logo.svg",
      alt: "Logo do Google Analytics",
      isOfficial: true,
      keyFeature: "Comportamento do usuário",
      benefits: ["Análise de tráfego", "Conversões", "Segmentação", "Relatórios personalizados"],
      color: "blue",
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      name: "SEMrush",
      description: "Plataforma completa para pesquisa de palavras-chave, análise de concorrentes e monitoramento de posições.",
      logo: "/images/tools/semrush-logo.svg",
      alt: "Logo do SEMrush",
      keyFeature: "Análise competitiva",
      benefits: ["Pesquisa de palavras-chave", "Análise de concorrentes", "Auditoria de SEO", "Monitoramento de posições"],
      color: "green",
      icon: <Search className="h-6 w-6" />
    },
    {
      name: "Ubersuggest",
      description: "Ferramenta para descoberta de palavras-chave, análise de backlinks e auditoria de SEO.",
      logo: "/images/tools/ubersuggest-logo.svg",
      alt: "Logo do Ubersuggest",
      keyFeature: "Palavras-chave",
      benefits: ["Sugestões de palavras-chave", "Análise de dificuldade", "Ideias de conteúdo", "Auditoria básica"],
      color: "orange",
      icon: <Target className="h-6 w-6" />
    },
    {
      name: "Ahrefs",
      description: "Plataforma avançada para análise de backlinks, pesquisa de palavras-chave e auditoria técnica.",
      logo: "/images/tools/ahrefs-logo.svg",
      alt: "Logo do Ahrefs",
      keyFeature: "Perfil de links",
      benefits: ["Análise de backlinks", "Explorador de conteúdo", "Auditoria técnica", "Análise de concorrentes"],
      color: "red",
      icon: <Link2 className="h-6 w-6" />
    },
    {
      name: "Google Search Console",
      description: "Ferramenta oficial do Google para monitorar e otimizar a presença do seu site nos resultados de pesquisa.",
      logo: "/images/tools/google-search-console-logo.svg",
      alt: "Logo do Google Search Console",
      isOfficial: true,
      keyFeature: "Indexação",
      benefits: ["Monitoramento de desempenho", "Erros de rastreamento", "Índice de cobertura", "Melhorias de pesquisa"],
      color: "primary",
      icon: <Globe className="h-6 w-6" />
    },
    {
      name: "Moz",
      description: "Plataforma completa de SEO com ferramentas para análise de autoridade de domínio, pesquisa de palavras-chave e auditoria técnica.",
      logo: "/images/tools/moz-logo.svg",
      alt: "Logo do Moz",
      keyFeature: "Autoridade de domínio",
      benefits: ["Domain Authority", "Page Authority", "Análise de links", "Auditoria técnica"],
      color: "purple",
      icon: <Award className="h-6 w-6" />
    },
    {
      name: "Rank Math",
      description: "Plugin de SEO para WordPress que ajuda a otimizar conteúdo e melhorar o ranqueamento nos buscadores.",
      logo: "/images/tools/rank-math-logo.svg",
      alt: "Logo do Rank Math",
      keyFeature: "Conteúdo on-page",
      benefits: ["Otimização de conteúdo", "Schema markup", "Análise de readability", "Sugestões de SEO"],
      color: "cyan",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  // Estado para controlar a ferramenta ativa
  const [activeToolIndex, setActiveToolIndex] = useState(0);

  // Função para obter a cor baseada no nome da cor
  const getColorClass = (color: string, opacity: string = "20") => {
    switch (color) {
      case "blue": return `from-blue-500/${opacity} to-blue-500/5`;
      case "green": return `from-green-500/${opacity} to-green-500/5`;
      case "orange": return `from-orange-500/${opacity} to-orange-500/5`;
      case "red": return `from-red-500/${opacity} to-red-500/5`;
      case "primary": return `from-primary/${opacity} to-primary/5`;
      case "purple": return `from-purple-500/${opacity} to-purple-500/5`;
      case "cyan": return `from-cyan-500/${opacity} to-cyan-500/5`;
      default: return `from-gray-500/${opacity} to-gray-500/5`;
    }
  };

  const getTextColorClass = (color: string) => {
    switch (color) {
      case "blue": return "text-blue-400";
      case "green": return "text-green-400";
      case "orange": return "text-orange-400";
      case "red": return "text-red-400";
      case "primary": return "text-primary";
      case "purple": return "text-purple-400";
      case "cyan": return "text-cyan-400";
      default: return "text-gray-400";
    }
  };

  const getBgColorClass = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-500";
      case "green": return "bg-green-500";
      case "orange": return "bg-orange-500";
      case "red": return "bg-red-500";
      case "primary": return "bg-primary";
      case "purple": return "bg-purple-500";
      case "cyan": return "bg-cyan-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Divisor no topo da seção */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Hexagon size={16} className="mr-2" /> Arsenal Tecnológico
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-primary">Ferramentas poderosas</span> para resultados extraordinários
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Combinamos as tecnologias mais avançadas do mercado em um ecossistema integrado para maximizar seus resultados de SEO.
          </motion.p>
        </div>
        
        {/* Visualização das ferramentas - Versão simplificada e mais estável */}
        <div className="relative mb-20">
          <div className="max-w-6xl mx-auto">
            {/* Ferramenta ativa em destaque */}
            <motion.div
              key={activeToolIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-12 shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className={`w-20 h-20 rounded-full ${getBgColorClass(seoTools[activeToolIndex].color)} flex items-center justify-center mb-4`}>
                    <div className="text-black text-3xl">
                      {seoTools[activeToolIndex].icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{seoTools[activeToolIndex].name}</h3>
                  
                  <p className="text-white/70 mb-4">{seoTools[activeToolIndex].description}</p>
                </div>
                
                <div className="md:w-2/3">
                  <div className="bg-white/5 rounded-xl p-6 h-full">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <span className={getTextColorClass(seoTools[activeToolIndex].color)}>Principais benefícios</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {seoTools[activeToolIndex].benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 ${getTextColorClass(seoTools[activeToolIndex].color)} mr-3 flex-shrink-0 mt-0.5`} />
                          <div>
                            <span className="text-white/90 font-medium">{benefit}</span>
                            <p className="text-white/60 text-sm mt-1">
                              {[
                                "Análise detalhada para tomada de decisões baseadas em dados.",
                                "Identificação de oportunidades para melhorar seu posicionamento.",
                                "Estratégias personalizadas para seu nicho de mercado.",
                                "Relatórios completos com métricas relevantes para seu negócio."
                              ][i]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Seletor de ferramentas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {seoTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeToolIndex === index 
                      ? `bg-gradient-to-br ${getColorClass(tool.color, "30")} border-${tool.color === "primary" ? "primary" : getBgColorClass(tool.color).replace("bg-", "")}/30` 
                      : 'bg-white/5 hover:bg-white/10'
                  } rounded-xl border border-white/10 p-5 flex flex-col items-center justify-between text-center h-40`}
                  onClick={() => setActiveToolIndex(index)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className={`w-16 h-16 rounded-full ${
                      activeToolIndex === index 
                        ? getBgColorClass(tool.color) 
                        : `bg-white/10`
                    } flex items-center justify-center mb-3`}>
                      <div className={activeToolIndex === index ? "text-black text-xl" : `${getTextColorClass(tool.color)} text-xl`}>
                        {tool.icon}
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${activeToolIndex === index ? getTextColorClass(tool.color) : 'text-white/80'} line-clamp-2 text-center px-1`}>
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Seção de integração */}
            <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <Shuffle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Ecossistema Integrado</h3>
                  <p className="text-white/70 text-center md:text-left">
                    Nossas ferramentas trabalham em conjunto, compartilhando dados e insights para uma estratégia coesa.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <BarChart2 className="h-5 w-5 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold">Análise Unificada</h4>
                  </div>
                  <p className="text-white/70 text-sm">
                    Dados de todas as ferramentas consolidados em um único dashboard para tomada de decisões.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <Zap className="h-5 w-5 text-green-400" />
                    </div>
                    <h4 className="text-lg font-bold">Automação</h4>
                  </div>
                  <p className="text-white/70 text-sm">
                    Processos automatizados que conectam ferramentas e eliminam tarefas manuais repetitivas.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <Target className="h-5 w-5 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-bold">Insights Acionáveis</h4>
                  </div>
                  <p className="text-white/70 text-sm">
                    Recomendações práticas baseadas na análise cruzada de dados de múltiplas ferramentas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>
  );
};


// Página principal de SEO Estratégico
const SEOEstrategicoPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section Personalizada */}
      <HeroSection />
      
      {/* Serviços Section */}
      <ServicesSection />
      
      {/* Ferramentas Section */}
      <ToolsSection />
      
      {/* Base de Conhecimentos Section */}
      <KnowledgeBaseSection />
      
      {/* Seção de Contato (componente reutilizável) */}
    </Layout>
  );
};

export default SEOEstrategicoPage; 