import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import Layout from '../../components/general/Layout';
import SectionHeader from '../../components/general/SectionHeader';
import FaqAccordion from '../../components/general/FaqAccordion';
import { ArrowRight, Brain, Cpu, Zap, Database, Network, Bot, Sparkles, TrendingUp, BarChart, Target, Users, Globe, Shield, Code, Layers } from 'lucide-react';

// Componente Hero personalizado para IA
const HeroSection: React.FC = () => {
  const [activeNeuralNode, setActiveNeuralNode] = useState(0);
  
  // Dados dos nós neurais para animação
  const neuralNodes = [
    { id: 0, icon: Brain, color: "text-primary", delay: 0 },
    { id: 1, icon: Cpu, color: "text-blue-400", delay: 0.5 },
    { id: 2, icon: Database, color: "text-purple-400", delay: 1 },
    { id: 3, icon: Network, color: "text-green-400", delay: 1.5 },
    { id: 4, icon: Bot, color: "text-red-400", delay: 2 },
    { id: 5, icon: Zap, color: "text-amber-400", delay: 2.5 }
  ];

  // Rotação automática dos nós neurais
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNeuralNode((prev) => (prev + 1) % neuralNodes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [neuralNodes.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de rede neural */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Rede neural animada */}
        <div className="absolute inset-0">
          {/* Nós neurais */}
          {neuralNodes.map((node, index) => {
            const Icon = node.icon;
            const positions = [
              { top: '20%', left: '15%' },
              { top: '30%', right: '20%' },
              { bottom: '25%', left: '25%' },
              { bottom: '35%', right: '15%' },
              { top: '60%', left: '10%' },
              { top: '70%', right: '25%' }
            ];
            
            return (
              <motion.div
                key={node.id}
                className="absolute"
                style={positions[index]}
                animate={{
                  scale: activeNeuralNode === index ? [1, 1.2, 1] : 1,
                  opacity: activeNeuralNode === index ? [0.3, 0.6, 0.3] : 0.1
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay
                }}
              >
                <div className={`w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center ${node.color}`}>
                  <Icon size={24} />
                </div>
              </motion.div>
            );
          })}
          
          {/* Conexões da rede neural */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            {neuralNodes.map((node, index) => {
              if (index === neuralNodes.length - 1) return null;
              const nextIndex = (index + 1) % neuralNodes.length;
              const positions = [
                { x1: '15%', y1: '20%', x2: '80%', y2: '30%' },
                { x1: '80%', y1: '30%', x2: '25%', y2: '75%' },
                { x1: '25%', y1: '75%', x2: '85%', y2: '65%' },
                { x1: '85%', y1: '65%', x2: '10%', y2: '60%' },
                { x1: '10%', y1: '60%', x2: '75%', y2: '70%' }
              ];
              
              return (
                <motion.line
                  key={`connection-${index}`}
                  x1={positions[index]?.x1 || '50%'}
                  y1={positions[index]?.y1 || '50%'}
                  x2={positions[index]?.x2 || '50%'}
                  y2={positions[index]?.y2 || '50%'}
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  opacity="0.3"
                  animate={{
                    opacity: activeNeuralNode === index ? [0.3, 0.6, 0.3] : 0.1,
                    strokeDasharray: activeNeuralNode === index ? ["0,100", "100,0", "0,100"] : "0,100"
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: node.delay
                  }}
                />
              );
            })}
            
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ECC80B" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ECC80B" stopOpacity="1" />
                <stop offset="100%" stopColor="#ECC80B" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Elementos decorativos de IA */}
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
              <Brain size={16} className="mr-2" /> Inteligência Artificial
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforme seu negócio com <span className="text-primary">IA</span> que <span className="text-primary">pensa</span> e <span className="text-primary">aprende</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Soluções avançadas de inteligência artificial que automatizam processos, geram insights valiosos e criam experiências personalizadas para seus clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Consultoria Gratuita
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                Explorar Soluções
              </motion.a>
            </div>
            
            {/* Métricas de IA */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+78%</div>
                <div className="text-white/70 text-sm">Aumento de produtividade</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+42%</div>
                <div className="text-white/70 text-sm">Redução de custos</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+289%</div>
                <div className="text-white/70 text-sm">ROI médio em 12 meses</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Dashboard de IA interativo */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Dashboard de IA */}
                <div className="space-y-4">
                  {/* Cabeçalho do dashboard */}
                  <div className="text-center mb-6">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-bold">Sistema de IA Ativo</h3>
                    <p className="text-white/60 text-sm">Monitoramento em tempo real</p>
                  </div>
                  
                  {/* Métricas animadas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                        <span className="text-green-400 text-xs">+24.8%</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Eficiência</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <BarChart className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-400 text-xs">+18.3%</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Precisão</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ duration: 2, delay: 0.7 }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <Zap className="h-5 w-5 text-purple-400" />
                        <span className="text-purple-400 text-xs">+32.1%</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Velocidade</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 2, delay: 0.9 }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <Target className="h-5 w-5 text-amber-400" />
                        <span className="text-amber-400 text-xs">+15.7%</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Automação</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '73%' }}
                          transition={{ duration: 2, delay: 1.1 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Status do sistema */}
                  <div className="bg-white/5 rounded-lg p-3 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Status do Sistema</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                        <span className="text-green-400 text-xs">Operacional</span>
                      </div>
                    </div>
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

const InteligenciaArtificialPage: React.FC = () => {
  // Serviços de IA oferecidos
  const iaServices = [
    {
      icon: '🤖',
      title: 'Automação de Processos',
      description: 'Automatize tarefas repetitivas e fluxos de trabalho complexos com soluções de IA personalizadas para aumentar a eficiência operacional.',
      delay: 0.1,
    },
    {
      icon: '🎨',
      title: 'Geração de Imagens',
      description: 'Crie imagens impressionantes, ilustrações e designs únicos com nossa tecnologia de IA generativa de última geração.',
      delay: 0.2,
    },
    {
      icon: '📝',
      title: 'Criação de Conteúdo',
      description: 'Produza textos, artigos e conteúdos de marketing de alta qualidade com assistência de IA, mantendo sua identidade de marca.',
      delay: 0.3,
    },
    {
      icon: '💻',
      title: 'Desenvolvimento com IA',
      description: 'Acelere seu desenvolvimento de software com ferramentas de IA que geram código, detectam bugs e otimizam performance.',
      delay: 0.4,
    },
    {
      icon: '🔍',
      title: 'Análise de Dados',
      description: 'Extraia insights valiosos de seus dados com algoritmos avançados de machine learning e visualizações inteligentes.',
      delay: 0.5,
    },
    {
      icon: '🗣️',
      title: 'Chatbots e Assistentes',
      description: 'Implemente assistentes virtuais inteligentes que interagem naturalmente com seus clientes e automatizam o atendimento.',
      delay: 0.6,
    },
  ];

  // Benefícios da IA
  const iaBenefits = [
    {
      title: 'Aumento de Produtividade',
      description: 'Automatize tarefas repetitivas e libere sua equipe para focar em trabalhos estratégicos e criativos.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Redução de Custos',
      description: 'Diminua custos operacionais com processos mais eficientes e automatizados, gerando economia significativa.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Inovação Acelerada',
      description: 'Desenvolva produtos e serviços inovadores mais rapidamente com o poder da inteligência artificial.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Personalização Avançada',
      description: 'Ofereça experiências altamente personalizadas para seus clientes com base em análise de dados e comportamento.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 9C14 9 15 8 15 6C15 4 14 3 12 3C10 3 9 5 9 7M17 8C18.5 8 19 9 19 11C19 13 17 14 16 14M7 8C5.5 8 5 9 5 11C5 13 7 14 8 14M12 9C10 9 8 10 8 13C8 16 10 18 12 21C14 18 16 16 16 13C16 10 14 9 12 9Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Decisões Baseadas em Dados',
      description: 'Tome decisões mais inteligentes e estratégicas com insights extraídos de grandes volumes de dados.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12L16 7M21 12H9" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Vantagem Competitiva',
      description: 'Destaque-se no mercado com soluções inovadoras de IA que seus concorrentes ainda não implementaram.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  // Dados de métricas e resultados
  const metricsData = [
    { label: 'Aumento de produtividade', value: '78%', suffix: 'em média' },
    { label: 'Redução de custos', value: '42%', suffix: 'operacionais' },
    { label: 'Satisfação do cliente', value: '93%', suffix: 'de aprovação' },
    { label: 'ROI médio', value: '289%', suffix: 'em 12 meses' }
  ];

  // Perguntas frequentes sobre IA
  const faqItems = [
    {
      question: 'Como a inteligência artificial pode beneficiar meu negócio?',
      answer: 'A IA pode beneficiar seu negócio de diversas formas, como automação de tarefas repetitivas, análise de grandes volumes de dados para insights valiosos, personalização da experiência do cliente, otimização de processos operacionais, previsão de tendências de mercado e desenvolvimento de produtos inovadores. O impacto específico dependerá do seu setor e das necessidades particulares da sua empresa.'
    },
    {
      question: 'Quanto tempo leva para implementar uma solução de IA?',
      answer: 'O tempo de implementação varia conforme a complexidade do projeto. Soluções mais simples, como chatbots básicos ou automações de processos específicos, podem ser implementadas em algumas semanas. Projetos mais complexos, que envolvem análise de grandes volumes de dados ou desenvolvimento de algoritmos personalizados, podem levar de 3 a 6 meses. Trabalhamos com uma abordagem ágil, entregando valor incrementalmente ao longo do projeto.'
    },
    {
      question: 'Preciso de uma grande quantidade de dados para utilizar IA?',
      answer: 'Embora a qualidade e quantidade de dados possam influenciar a eficácia de soluções de IA, existem abordagens para empresas com conjuntos de dados limitados. Podemos utilizar técnicas como transfer learning (aprendizado por transferência), modelos pré-treinados e dados sintéticos para superar limitações de dados. Além disso, podemos ajudar a implementar estratégias de coleta de dados para melhorar gradualmente seus modelos de IA ao longo do tempo.'
    },
    {
      question: 'Como garantir que as soluções de IA sejam éticas e responsáveis?',
      answer: 'Priorizamos a ética em todas as nossas implementações de IA. Isso inclui garantir a transparência dos algoritmos, evitar vieses nos dados de treinamento, proteger a privacidade dos usuários, implementar medidas de segurança robustas e seguir regulamentações como LGPD. Realizamos auditorias regulares em nossos sistemas de IA e mantemos humanos no processo de tomada de decisões críticas. Nosso compromisso é desenvolver IA que beneficie as pessoas e respeite valores humanos fundamentais.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section Personalizada */}
      <HeroSection />

      {/* Introdução à IA */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-gilroy font-bold text-white mb-6">O poder da <span className="text-primary">Inteligência Artificial</span> ao seu alcance</h2>
              <p className="text-white/70 mb-6">
                A Inteligência Artificial (IA) está revolucionando a forma como as empresas operam, inovam e se conectam com seus clientes. Não se trata apenas de uma tecnologia futurista, mas de uma realidade presente que está transformando todos os setores.
              </p>
              <p className="text-white/70 mb-6">
                Nossa abordagem combina algoritmos avançados de machine learning, processamento de linguagem natural e visão computacional para criar soluções que automatizam tarefas, geram conteúdo criativo e extraem insights valiosos dos seus dados.
              </p>
              <p className="text-white/70">
                Trabalhamos em estreita colaboração com sua equipe para identificar oportunidades onde a IA pode gerar o maior impacto, desenvolvendo soluções personalizadas que se integram perfeitamente aos seus sistemas existentes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1677442135136-760c813a7542?q=80&w=2070" 
                  alt="Inteligência Artificial" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-primary font-bold text-sm mb-2">TECNOLOGIA AVANÇADA</div>
                  <div className="text-white text-xl font-bold">Soluções de IA para desafios reais de negócios</div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full z-0 opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 z-0 opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Métricas e Resultados */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metricsData.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-gilroy font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-white mb-1">{metric.label}</div>
                <div className="text-white/50 text-sm">{metric.suffix}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços de IA */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<>Nossos <span className="text-primary">Serviços</span> de IA</>}
            subtitle="Oferecemos uma ampla gama de soluções de inteligência artificial para impulsionar a inovação e eficiência do seu negócio."
            badge="Soluções"
            floatingTitleText="SERVIÇOS"
            iconComponent={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L19 7" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L5 7" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {iaServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-gilroy font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios da IA */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<>Por que investir em <span className="text-primary">IA</span>?</>}
            subtitle="Conheça os principais benefícios que a inteligência artificial pode trazer para o seu negócio."
            badge="Benefícios"
            floatingTitleText="VANTAGENS"
            iconComponent={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.00001L20 12M20 12L16 16M20 12H10.5M13.5 8.00001H6.5C5.39543 8.00001 4.5 8.89544 4.5 10V19C4.5 20.1046 5.39543 21 6.5 21H17.5C18.6046 21 19.5 20.1046 19.5 19V17.25" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 8.00001C13.5 5.79087 11.7091 4 9.5 4C7.29086 4 5.5 5.79087 5.5 8.00001C5.5 8.00001 6.25 8.50001 6.5 8.00001C7 7.00001 8 6.00001 9.5 6.00001C11 6.00001 12 6.50001 12.5 7.50001C12.5416 7.58324 12.9 8.00001 13.5 8.00001Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {iaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group hover:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-gilroy font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion 
        title={<>Perguntas <span className="text-primary">Frequentes</span></>}
        subtitle="Respostas para as dúvidas mais comuns sobre inteligência artificial e como podemos ajudar seu negócio a implementá-la."
        badge="FAQ"
        items={faqItems}
      />

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Elementos decorativos */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full filter blur-[50px]"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full filter blur-[50px]"></div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-gilroy font-bold text-white mb-6 relative z-10">
              Pronto para transformar seu negócio com <span className="text-primary">Inteligência Artificial</span>?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 relative z-10">
              Entre em contato hoje mesmo para uma consultoria gratuita e descubra como podemos 
              implementar soluções de IA personalizadas para impulsionar seu crescimento.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors relative z-10"
            >
              Agendar consultoria gratuita
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Seção de Contato */}
    </Layout>
  );
};

export default InteligenciaArtificialPage; 