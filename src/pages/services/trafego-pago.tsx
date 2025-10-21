import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/general/Layout';
import SectionHeader from '../../components/general/SectionHeader';
import FaqAccordion from '../../components/general/FaqAccordion';
import { ArrowRight, Target, TrendingUp, BarChart, DollarSign, Users, MousePointer, Zap, Globe, Smartphone, Monitor, CreditCard, PieChart, Activity, Eye } from 'lucide-react';

// Componente Hero personalizado para Tráfego Pago
const HeroSection: React.FC = () => {
  const [activeCampaign, setActiveCampaign] = useState(0);
  const [campaignMetrics, setCampaignMetrics] = useState({
    impressions: 0,
    clicks: 0,
    conversions: 0,
    spend: 0
  });
  
  // Dados das campanhas para animação
  const campaigns = [
    { id: 0, name: 'Google Ads', icon: Globe, color: "text-blue-400", delay: 0 },
    { id: 1, name: 'Facebook Ads', icon: Users, color: "text-blue-500", delay: 0.5 },
    { id: 2, name: 'Instagram Ads', icon: Smartphone, color: "text-pink-400", delay: 1 },
    { id: 3, name: 'LinkedIn Ads', icon: Monitor, color: "text-blue-600", delay: 1.5 },
    { id: 4, name: 'TikTok Ads', icon: Zap, color: "text-purple-400", delay: 2 },
    { id: 5, name: 'YouTube Ads', icon: Activity, color: "text-red-400", delay: 2.5 }
  ];

  // Simulação de métricas em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setCampaignMetrics(prev => ({
        impressions: prev.impressions + Math.floor(Math.random() * 50) + 100,
        clicks: prev.clicks + Math.floor(Math.random() * 5) + 10,
        conversions: prev.conversions + Math.floor(Math.random() * 2) + 1,
        spend: prev.spend + Math.floor(Math.random() * 20) + 50
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Rotação automática das campanhas
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCampaign((prev) => (prev + 1) % campaigns.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [campaigns.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de campanhas */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Elementos flutuantes de plataformas */}
        {campaigns.map((campaign, index) => {
          const Icon = campaign.icon;
          const positions = [
            { top: '15%', left: '10%' },
            { top: '25%', right: '15%' },
            { bottom: '30%', left: '20%' },
            { bottom: '40%', right: '10%' },
            { top: '65%', left: '15%' },
            { top: '75%', right: '20%' }
          ];
          
          return (
            <motion.div
              key={campaign.id}
              className="absolute"
              style={positions[index]}
              animate={{
                scale: activeCampaign === index ? [1, 1.3, 1] : 1,
                opacity: activeCampaign === index ? [0.3, 0.6, 0.3] : 0.1,
                y: activeCampaign === index ? [0, -10, 0] : 0
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: campaign.delay
              }}
            >
              <div className={`w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center ${campaign.color}`}>
                <Icon size={28} />
              </div>
            </motion.div>
          );
        })}
        
        {/* Linhas de conexão simulando fluxo de dados */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          {campaigns.map((campaign, index) => {
            if (index === campaigns.length - 1) return null;
            const positions = [
              { x1: '10%', y1: '15%', x2: '85%', y2: '25%' },
              { x1: '85%', y1: '25%', x2: '20%', y2: '70%' },
              { x1: '20%', y1: '70%', x2: '90%', y2: '60%' },
              { x1: '90%', y1: '60%', x2: '15%', y2: '65%' },
              { x1: '15%', y1: '65%', x2: '80%', y2: '75%' }
            ];
            
            return (
              <motion.line
                key={`connection-${index}`}
                x1={positions[index]?.x1 || '50%'}
                y1={positions[index]?.y1 || '50%'}
                x2={positions[index]?.x2 || '50%'}
                y2={positions[index]?.y2 || '50%'}
                stroke="url(#campaignGradient)"
                strokeWidth="2"
                opacity="0.3"
                animate={{
                  opacity: activeCampaign === index ? [0.3, 0.7, 0.3] : 0.1,
                  strokeDasharray: activeCampaign === index ? ["0,100", "100,0", "0,100"] : "0,100"
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: campaign.delay
                }}
              />
            );
          })}
          
          <defs>
            <linearGradient id="campaignGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECC80B" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ECC80B" stopOpacity="1" />
              <stop offset="100%" stopColor="#ECC80B" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Elementos decorativos */}
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
              <Target size={16} className="mr-2" /> Tráfego Pago
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Atraia <span className="text-primary">clientes qualificados</span> e <span className="text-primary">maximize</span> seu ROI
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Estratégias avançadas de tráfego pago que conectam sua marca ao público certo, aumentam conversões e geram resultados mensuráveis desde o primeiro dia.
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
                Ver Campanhas
              </motion.a>
            </div>
            
            {/* Métricas de Tráfego Pago */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">-37%</div>
                <div className="text-white/70 text-sm">Redução no CPA</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+145%</div>
                <div className="text-white/70 text-sm">Aumento de conversões</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">380%</div>
                <div className="text-white/70 text-sm">ROI médio</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Dashboard de Campanhas Interativo */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Dashboard de Campanhas */}
                <div className="space-y-4">
                  {/* Cabeçalho do dashboard */}
                  <div className="text-center mb-6">
                    <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-bold">Campanhas Ativas</h3>
                    <p className="text-white/60 text-sm">Monitoramento em tempo real</p>
                  </div>
                  
                  {/* Métricas em tempo real */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <Eye className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-400 text-xs">+{campaignMetrics.impressions}</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Impressões</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <MousePointer className="h-5 w-5 text-green-400" />
                        <span className="text-green-400 text-xs">+{campaignMetrics.clicks}</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Cliques</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '72%' }}
                          transition={{ duration: 2, delay: 0.7 }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                        <span className="text-purple-400 text-xs">+{campaignMetrics.conversions}</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Conversões</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '68%' }}
                          transition={{ duration: 2, delay: 0.9 }}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <DollarSign className="h-5 w-5 text-amber-400" />
                        <span className="text-amber-400 text-xs">R$ {campaignMetrics.spend}</span>
                      </div>
                      <div className="text-sm font-medium mb-1">Investimento</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '45%' }}
                          transition={{ duration: 2, delay: 1.1 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Campanha ativa */}
                  <div className="bg-white/5 rounded-lg p-3 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Campanha Ativa</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                        <span className="text-green-400 text-xs">Ativa</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {React.createElement(campaigns[activeCampaign].icon, { 
                        size: 16, 
                        className: `${campaigns[activeCampaign].color} mr-2` 
                      })}
                      <span className="text-sm">{campaigns[activeCampaign].name}</span>
                    </div>
                  </div>
                  
                  {/* ROI em destaque */}
                  <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg p-3 text-center">
                    <div className="text-primary text-2xl font-bold">380%</div>
                    <div className="text-white/70 text-xs">ROI Médio</div>
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

const TrafegoPagoPage: React.FC = () => {
  // Itens do processo de Tráfego Pago
  const trafegoProcess = [
    {
      icon: '🎯',
      title: 'Análise de Mercado',
      description: 'Estudo detalhado do seu mercado, concorrentes e público-alvo para definir a melhor estratégia de anúncios.',
      delay: 0.1,
    },
    {
      icon: '🔍',
      title: 'Pesquisa de Palavras-chave',
      description: 'Identificação das palavras-chave mais relevantes e com melhor custo-benefício para suas campanhas.',
      delay: 0.2,
    },
    {
      icon: '📊',
      title: 'Criação de Campanhas',
      description: 'Desenvolvimento de campanhas segmentadas por objetivo, público e estágio do funil de vendas.',
      delay: 0.3,
    },
    {
      icon: '✏️',
      title: 'Criação de Anúncios',
      description: 'Elaboração de anúncios persuasivos com títulos e descrições otimizados para maximizar cliques e conversões.',
      delay: 0.4,
    },
    {
      icon: '📱',
      title: 'Landing Pages Otimizadas',
      description: 'Criação ou otimização de páginas de destino focadas em conversão para maximizar o retorno dos anúncios.',
      delay: 0.5,
    },
    {
      icon: '📈',
      title: 'Otimização Contínua',
      description: 'Monitoramento diário e ajustes constantes para melhorar o desempenho e reduzir o custo por aquisição.',
      delay: 0.6,
    },
  ];

  // Benefícios do Tráfego Pago
  const trafegoBenefits = [
    {
      title: 'Resultados Imediatos',
      description: 'Diferente do SEO, o tráfego pago gera resultados desde o primeiro dia de campanha.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Alta Segmentação',
      description: 'Direcione seus anúncios exatamente para quem tem maior probabilidade de se tornar cliente.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Controle de Orçamento',
      description: 'Defina exatamente quanto deseja investir e ajuste seu orçamento conforme os resultados.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Métricas Detalhadas',
      description: 'Acesso a dados precisos sobre o desempenho das campanhas para tomada de decisões baseadas em dados.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16V18M12 12V18M16 8V18M21 21H3C2.44772 21 2 20.5523 2 20V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V20C22 20.5523 21.5523 21 21 21Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Escalabilidade',
      description: 'Amplie facilmente suas campanhas à medida que seu negócio cresce e expande para novos mercados.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Remarketing',
      description: 'Reconquiste visitantes que não converteram na primeira visita, aumentando as chances de conversão.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 2L21 6M21 6L17 10M21 6H7C5.93913 6 4.92172 6.42143 4.17157 7.17157C3.42143 7.92172 3 8.93913 3 10C3 11.0609 3.42143 12.0783 4.17157 12.8284C4.92172 13.5786 5.93913 14 7 14H17C18.0609 14 19.0783 14.4214 19.8284 15.1716C20.5786 15.9217 21 16.9391 21 18C21 19.0609 20.5786 20.0783 19.8284 20.8284C19.0783 21.5786 18.0609 22 17 22H3" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  // Dados de métricas e resultados
  const metricsData = [
    { label: 'Redução no CPA', value: '37%', suffix: 'em média' },
    { label: 'Aumento de conversões', value: '145%', suffix: 'em 3 meses' },
    { label: 'ROI médio', value: '380%', suffix: 'para nossos clientes' },
    { label: 'Taxa de cliques', value: '4.8%', suffix: 'acima da média do mercado' }
  ];

  // Perguntas frequentes sobre Tráfego Pago
  const faqItems = [
    {
      question: 'Qual o investimento mínimo recomendado para tráfego pago?',
      answer: 'O investimento mínimo varia conforme o setor, concorrência e objetivos. Geralmente, recomendamos começar com pelo menos R$ 1.500 a R$ 3.000 mensais para obter dados significativos e resultados iniciais. Para mercados mais competitivos, o valor pode ser maior. Trabalhamos com você para definir um orçamento que faça sentido para seu negócio e objetivos específicos.'
    },
    {
      question: 'Quais plataformas de anúncios vocês trabalham?',
      answer: 'Trabalhamos com todas as principais plataformas de anúncios, incluindo Google Ads (Search, Display, Shopping e YouTube), Meta Ads (Facebook e Instagram), LinkedIn Ads, TikTok Ads, Twitter Ads e Amazon Ads. A escolha das plataformas depende do seu público-alvo, tipo de negócio e objetivos de marketing. Desenvolvemos uma estratégia multicanal personalizada para maximizar seus resultados.'
    },
    {
      question: 'Quanto tempo leva para ver resultados com tráfego pago?',
      answer: 'Uma das grandes vantagens do tráfego pago é a rapidez dos resultados. Você começará a ver tráfego e dados de desempenho imediatamente após o lançamento das campanhas. No entanto, o processo de otimização para maximizar o ROI geralmente leva de 1 a 3 meses, pois precisamos coletar dados suficientes para refinar as campanhas. Os resultados melhoram continuamente à medida que otimizamos com base nos dados coletados.'
    },
    {
      question: 'Como vocês medem o sucesso das campanhas de tráfego pago?',
      answer: 'Medimos o sucesso com base nos objetivos específicos do seu negócio, que podem incluir: custo por aquisição (CPA), retorno sobre o investimento (ROI), taxa de conversão, volume de leads qualificados, aumento nas vendas, entre outros. Utilizamos ferramentas avançadas de análise e atribuição para rastrear todo o funil de conversão e fornecer relatórios transparentes e detalhados sobre o desempenho das campanhas.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section Personalizada */}
      <HeroSection />

      {/* Introdução ao Tráfego Pago */}
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
              <h2 className="text-3xl md:text-4xl font-gilroy font-bold text-white mb-6">O que é <span className="text-primary">Tráfego Pago</span> e como ele pode impulsionar seu negócio?</h2>
              <p className="text-white/70 mb-6">
                Tráfego pago refere-se às estratégias de marketing digital que envolvem o pagamento para exibir anúncios em plataformas como Google, Facebook, Instagram e LinkedIn, direcionando visitantes qualificados para o seu site.
              </p>
              <p className="text-white/70 mb-6">
                Diferente do tráfego orgânico, o tráfego pago oferece resultados imediatos, alta capacidade de segmentação e controle total sobre o investimento, permitindo direcionar seus anúncios exatamente para quem tem maior probabilidade de se tornar cliente.
              </p>
              <p className="text-white/70">
                Nossa abordagem combina estratégia, criatividade e análise de dados para criar campanhas de alta performance que maximizam seu retorno sobre investimento e impulsionam o crescimento do seu negócio.
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
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670" 
                  alt="Tráfego Pago" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-primary font-bold text-sm mb-2">MARKETING DIGITAL</div>
                  <div className="text-white text-xl font-bold">Campanhas de alta performance para resultados reais</div>
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

      {/* Processo de Tráfego Pago */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<>Nosso <span className="text-primary">Processo</span> de Tráfego Pago</>}
            subtitle="Seguimos uma metodologia estruturada para criar, gerenciar e otimizar campanhas de tráfego pago que geram resultados consistentes e escaláveis."
            badge="Metodologia"
            floatingTitleText="PROCESSO"
            iconComponent={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 21V8.6C20 8.26863 19.7314 8 19.4 8H14.6C14.2686 8 14 8.26863 14 8.6V21" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 21V4.6C10 4.26863 9.73137 4 9.4 4H4.6C4.26863 4 4 4.26863 4 4.6V21" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 21H22" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {trafegoProcess.map((item, index) => (
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

      {/* Benefícios do Tráfego Pago */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<>Por que investir em <span className="text-primary">Tráfego Pago</span>?</>}
            subtitle="Conheça os principais benefícios que campanhas de tráfego pago bem executadas podem trazer para o seu negócio."
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
            {trafegoBenefits.map((benefit, index) => (
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
        subtitle="Respostas para as dúvidas mais comuns sobre tráfego pago e como podemos ajudar seu negócio a crescer com anúncios online."
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
              Pronto para <span className="text-primary">impulsionar</span> seu negócio com tráfego pago?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 relative z-10">
              Entre em contato hoje mesmo para uma consultoria gratuita e descubra como podemos 
              criar campanhas de tráfego pago que geram resultados reais para o seu negócio.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors relative z-10"
            >
              Solicitar consultoria gratuita
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

export default TrafegoPagoPage; 