import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Layout from '../../components/general/Layout';
import SectionHeader from '../../components/general/SectionHeader';
import FaqAccordion from '../../components/general/FaqAccordion';
import { ArrowRight, Target, TrendingUp, BarChart, Users, Globe, Smartphone, Mail, Search, DollarSign, PieChart, Activity, Zap, Layers, Share2, MessageSquare, Monitor, Brain, Settings, Users2, BarChart3, Cpu, Rocket } from 'lucide-react';

// Componente Hero personalizado para Marketing Digital
const HeroSection: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  const [marketingMetrics, setMarketingMetrics] = useState({
    reach: 0,
    engagement: 0,
    conversions: 0,
    revenue: 0
  });
  
  // Dados dos canais de marketing para animação
  const marketingChannels = [
    { id: 0, name: 'SEO', icon: Search, color: "text-green-400", delay: 0 },
    { id: 1, name: 'Social Media', icon: Share2, color: "text-blue-400", delay: 0.5 },
    { id: 2, name: 'Email Marketing', icon: Mail, color: "text-purple-400", delay: 1 },
    { id: 3, name: 'Google Ads', icon: Globe, color: "text-blue-500", delay: 1.5 },
    { id: 4, name: 'Content Marketing', icon: MessageSquare, color: "text-pink-400", delay: 2 },
    { id: 5, name: 'Analytics', icon: BarChart, color: "text-amber-400", delay: 2.5 }
  ];

  // Simulação de métricas em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketingMetrics(prev => ({
        reach: prev.reach + Math.floor(Math.random() * 100) + 200,
        engagement: prev.engagement + Math.floor(Math.random() * 20) + 50,
        conversions: prev.conversions + Math.floor(Math.random() * 5) + 10,
        revenue: prev.revenue + Math.floor(Math.random() * 1000) + 5000
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotação automática dos canais
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChannel((prev) => (prev + 1) % marketingChannels.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [marketingChannels.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de marketing digital */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        {/* Imagem de fundo otimizada para SEO */}
        <img 
          src="/lobo-hero-services.jpg" 
          alt="Agência de Marketing Digital Nobre Lobo - Estratégias digitais para crescimento empresarial, SEO, tráfego pago, redes sociais e automação"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
          loading="eager"
        />
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Elementos flutuantes de canais de marketing */}
        {marketingChannels.map((channel, index) => {
          const Icon = channel.icon;
          const positions = [
            { top: '20%', left: '12%' },
            { top: '35%', right: '18%' },
            { bottom: '40%', left: '22%' },
            { bottom: '25%', right: '12%' },
            { top: '70%', left: '18%' },
            { top: '80%', right: '22%' }
          ];
          
          return (
            <motion.div
              key={channel.id}
              className="absolute"
              style={positions[index]}
              animate={{
                scale: activeChannel === index ? [1, 1.4, 1] : 1,
                opacity: activeChannel === index ? [0.4, 0.7, 0.4] : 0.1,
                y: activeChannel === index ? [0, -15, 0] : 0,
                rotate: activeChannel === index ? [0, 5, 0] : 0
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: channel.delay
              }}
            >
              <div className={`w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center ${channel.color}`}>
                <Icon size={32} />
              </div>
            </motion.div>
          );
        })}
        
        {/* Conexões entre canais simulando integração */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          {marketingChannels.map((channel, index) => {
            if (index === marketingChannels.length - 1) return null;
            const positions = [
              { x1: '12%', y1: '20%', x2: '82%', y2: '35%' },
              { x1: '82%', y1: '35%', x2: '22%', y2: '60%' },
              { x1: '22%', y1: '60%', x2: '88%', y2: '75%' },
              { x1: '88%', y1: '75%', x2: '18%', y2: '70%' },
              { x1: '18%', y1: '70%', x2: '78%', y2: '80%' }
            ];
            
            return (
              <motion.line
                key={`connection-${index}`}
                x1={positions[index]?.x1 || '50%'}
                y1={positions[index]?.y1 || '50%'}
                x2={positions[index]?.x2 || '50%'}
                y2={positions[index]?.y2 || '50%'}
                stroke="url(#marketingGradient)"
                strokeWidth="2"
                opacity="0.3"
                animate={{
                  opacity: activeChannel === index ? [0.3, 0.8, 0.3] : 0.1,
                  strokeDasharray: activeChannel === index ? ["0,100", "100,0", "0,100"] : "0,100"
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: channel.delay
                }}
              />
            );
          })}
          
          <defs>
            <linearGradient id="marketingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECC80B" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ECC80B" stopOpacity="1" />
              <stop offset="100%" stopColor="#ECC80B" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Elementos decorativos */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full border border-primary/20"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
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
              <Target size={16} className="mr-2" /> Marketing Digital
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforme sua <span className="text-primary">presença digital</span> em <span className="text-primary">crescimento real</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl hero-description">
              Estratégias integradas de marketing digital que conectam sua marca ao público certo, geram conversões mensuráveis e constroem relacionamentos duradouros.
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
                Ver Estratégias
              </motion.a>
            </div>
            
            {/* Métricas de Marketing Digital */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+170%</div>
                <div className="text-white/70 text-sm">Crescimento de conversões</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">380%</div>
                <div className="text-white/70 text-sm">ROI médio</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+215%</div>
                <div className="text-white/70 text-sm">Aumento de receita</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Funil de Marketing Digital Interativo */}
            <div className="relative w-full h-[600px] bg-gradient-to-br from-white/5 to-white/2 rounded-3xl p-8 overflow-hidden">
              {/* Fundo com padrão de rede */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ECC80B" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Título do Funil */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Funil de Marketing Digital</h3>
                <p className="text-white/60 text-sm">Jornada completa do cliente</p>
              </div>
              
              {/* Etapas do Funil */}
              <div className="space-y-6">
                {/* Etapa 1: Consciência */}
                <motion.div 
                  className="relative bg-gradient-to-r from-blue-500/20 to-blue-400/10 rounded-2xl p-6 border border-blue-400/30"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Consciência</h4>
                        <p className="text-white/70 text-sm">Atrair atenção do público</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">+{marketingMetrics.reach}</div>
                      <div className="text-white/60 text-xs">Pessoas alcançadas</div>
                    </div>
                  </div>
                  
                  {/* Barra de progresso */}
                  <motion.div 
                    className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 2, delay: 0.8 }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Etapa 2: Interesse */}
                <motion.div 
                  className="relative bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-2xl p-6 border border-green-400/30"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Interesse</h4>
                        <p className="text-white/70 text-sm">Gerar engajamento</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">+{marketingMetrics.engagement}</div>
                      <div className="text-white/60 text-xs">Interações</div>
                    </div>
                  </div>
                  
                  {/* Barra de progresso */}
                  <motion.div 
                    className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Etapa 3: Consideração */}
                <motion.div 
                  className="relative bg-gradient-to-r from-purple-500/20 to-purple-400/10 rounded-2xl p-6 border border-purple-400/30"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center">
                        <Search className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Consideração</h4>
                        <p className="text-white/70 text-sm">Avaliar opções</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">+{Math.floor(marketingMetrics.engagement * 0.3)}</div>
                      <div className="text-white/60 text-xs">Leads qualificados</div>
                    </div>
                  </div>
                  
                  {/* Barra de progresso */}
                  <motion.div 
                    className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '58%' }}
                      transition={{ duration: 2, delay: 1.2 }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Etapa 4: Conversão */}
                <motion.div 
                  className="relative bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-6 border border-primary/30"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Conversão</h4>
                        <p className="text-white/70 text-sm">Fechar negócio</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">+{marketingMetrics.conversions}</div>
                      <div className="text-white/60 text-xs">Vendas realizadas</div>
                    </div>
                  </div>
                  
                  {/* Barra de progresso */}
                  <motion.div 
                    className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.1 }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-yellow-300 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '42%' }}
                      transition={{ duration: 2, delay: 1.4 }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Etapa 5: Fidelização */}
                <motion.div 
                  className="relative bg-gradient-to-r from-amber-500/20 to-amber-400/10 rounded-2xl p-6 border border-amber-400/30"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500/30 flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Fidelização</h4>
                        <p className="text-white/70 text-sm">Manter relacionamento</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-400">R$ {marketingMetrics.revenue.toLocaleString()}</div>
                      <div className="text-white/60 text-xs">Receita gerada</div>
                    </div>
                  </div>
                  
                  {/* Barra de progresso */}
                  <motion.div 
                    className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.3 }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '68%' }}
                      transition={{ duration: 2, delay: 1.6 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* ROI Total */}
              <motion.div 
                className="absolute bottom-4 right-4 bg-gradient-to-r from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-xl p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div className="text-primary text-2xl font-bold">380%</div>
                <div className="text-white/70 text-xs">ROI Médio</div>
              </motion.div>
              
              {/* Canal Ativo */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Canal Ativo</span>
                </div>
                <div className="flex items-center">
                  {React.createElement(marketingChannels[activeChannel].icon, { 
                    size: 16, 
                    className: `${marketingChannels[activeChannel].color} mr-2` 
                  })}
                  <span className="text-sm font-medium">{marketingChannels[activeChannel].name}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MarketingDigitalPage: React.FC = () => {
  // Soluções de Marketing Digital
  const marketingSolutions = [
    {
      category: 'Planejamento e Estratégia de Marketing',
      description: 'Planejamos com base em dados e objetivos reais. Definimos as ações certas para atrair, engajar e converter o público ideal.',
      services: [
        'Diagnóstico completo da presença digital',
        'Planejamento estratégico (anual, trimestral ou por campanha)',
        'Definição de público, personas e jornada do cliente',
        'Estratégias de Inbound e Outbound Marketing',
        'Posicionamento de marca e diferenciação competitiva',
        'Alinhamento entre marketing e vendas',
        'Consultoria de performance e crescimento'
      ],
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      category: 'Inbound Marketing',
      description: 'Atraia e conquiste clientes de forma natural e duradoura, criando valor antes da venda.',
      services: [
        'Criação de funis de atração, nutrição e conversão',
        'Produção de conteúdo estratégico (blog, e-books, vídeos, newsletters)',
        'SEO e marketing de conteúdo',
        'Automação de e-mails e nutrição de leads',
        'Integração com CRM e análise de conversões',
        'Estratégias de retenção e fidelização'
      ],
      icon: TrendingUp,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      category: 'Outbound Marketing',
      description: 'Aborde o público certo com mensagens diretas e campanhas de impacto.',
      services: [
        'Campanhas de prospecção ativa e remarketing',
        'Estratégias de tráfego pago (Meta Ads, Google Ads, LinkedIn Ads)',
        'E-mails frios (cold e-mails) com segmentação inteligente',
        'Scripts de abordagem comercial e copy de conversão',
        'Integração entre marketing e equipe de vendas',
        'Geração de leads qualificados para o time comercial'
      ],
      icon: Share2,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      category: 'Gestão de Mídias Sociais',
      description: 'Crie presença digital consistente e fortaleça o relacionamento com seu público.',
      services: [
        'Criação e gestão de perfis sociais (Instagram, Facebook, LinkedIn, TikTok)',
        'Planejamento de conteúdo com base em dados e sazonalidade',
        'Produção de artes, textos e vídeos otimizados para engajamento',
        'Estratégias de storytelling e posicionamento de marca',
        'Monitoramento de resultados e relatórios mensais'
      ],
      icon: MessageSquare,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    },
    {
      category: 'SEO e Crescimento Orgânico',
      description: 'Apareça quando e onde seus clientes estão procurando.',
      services: [
        'SEO técnico (estrutura, performance e indexação)',
        'SEO on-page e off-page',
        'Estratégia de conteúdo e link building',
        'Pesquisa de palavras-chave e intenções de busca',
        'Criação de glossários e artigos otimizados',
        'Relatórios de posição e evolução no Google'
      ],
      icon: Search,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10'
    },
    {
      category: 'Branding e Posicionamento',
      description: 'Construa uma marca sólida e coerente em todos os pontos de contato.',
      services: [
        'Criação de logotipo e identidade visual',
        'Posicionamento de marca e propósito',
        'Manual de identidade visual e tom de voz',
        'Naming e storytelling institucional',
        'Estratégias de autoridade e reputação online'
      ],
      icon: Layers,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
    {
      category: 'Websites e Landing Pages',
      description: 'Sites e páginas de conversão desenvolvidos com foco em performance e experiência.',
      services: [
        'Criação de sites institucionais, blogs e portfólios',
        'Desenvolvimento de landing pages otimizadas',
        'Integrações com CRM, automações e APIs',
        'Otimização de performance e SEO técnico',
        'Acompanhamento e manutenção técnica'
      ],
      icon: Globe,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      category: 'E-mail Marketing e Automação',
      description: 'Automatize relacionamentos e transforme leads em clientes fiéis.',
      services: [
        'Criação de fluxos automatizados e campanhas segmentadas',
        'Sequências de nutrição e follow-up',
        'Segmentação avançada de listas e personas',
        'Testes A/B e análise de resultados',
        'Integração com RD Station, Mailchimp, ActiveCampaign'
      ],
      icon: Mail,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      category: 'Análise e Inteligência de Dados',
      description: 'Tome decisões baseadas em números, não em achismos.',
      services: [
        'Dashboards personalizados (Google Data Studio, Looker, Power BI)',
        'Acompanhamento de KPIs: ROI, CAC, LTV, CTR, etc.',
        'Análises de comportamento e conversão',
        'Auditoria de campanhas e funis',
        'Relatórios mensais e insights estratégicos'
      ],
      icon: BarChart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      category: 'Marketing com Inteligência Artificial',
      description: 'Inove na criação, automação e análise com o poder da IA.',
      services: [
        'Criação de textos, imagens e vídeos com IA',
        'Chatbots inteligentes (WhatsApp, site, redes sociais)',
        'Análise automática de leads e dados de campanhas',
        'IA para otimização de anúncios e segmentação',
        'Produção de vídeos com ferramentas como Higgsfield, Runway e Pika'
      ],
      icon: Zap,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      category: 'Marketing Local e Google Meu Negócio',
      description: 'Conquiste destaque nas buscas locais e aumente o fluxo de clientes.',
      services: [
        'Criação e otimização do perfil no Google Business',
        'Gestão de avaliações e reputação',
        'SEO local e presença em diretórios regionais',
        'Campanhas de alcance geolocalizado',
        'Relatórios de desempenho local'
      ],
      icon: Monitor,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10'
    },
    {
      category: 'Produção de Conteúdo e Mídia',
      description: 'Conte histórias visuais que geram conexão e fortalecem sua marca.',
      services: [
        'Fotografia e filmagem profissional',
        'Roteiros e vídeos para redes sociais',
        'Edição e pós-produção com identidade de marca',
        'Criação de materiais ricos (carrosséis, e-books, catálogos)',
        'Imagens personalizadas com inteligência artificial'
      ],
      icon: Activity,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10'
    }
  ];

  // Benefícios do Marketing Digital
  const marketingBenefits = [
    {
      title: 'Alcance Global',
      description: 'Atinja sua audiência em qualquer lugar do mundo, expandindo o alcance do seu negócio para além das fronteiras físicas.',
      icon: Globe,
      color: 'text-blue-400'
    },
    {
      title: 'Segmentação Precisa',
      description: 'Direcione suas mensagens exatamente para quem tem interesse em seus produtos ou serviços, aumentando a eficiência dos investimentos.',
      icon: Target,
      color: 'text-green-400'
    },
    {
      title: 'Resultados Mensuráveis',
      description: 'Acompanhe em tempo real o desempenho de suas campanhas, permitindo ajustes rápidos e otimização contínua para melhores resultados.',
      icon: BarChart,
      color: 'text-purple-400'
    },
    {
      title: 'Custo-Benefício',
      description: 'Invista apenas no que funciona, com orçamentos flexíveis e estratégias ajustáveis que se adaptam às necessidades e possibilidades do seu negócio.',
      icon: DollarSign,
      color: 'text-amber-400'
    },
    {
      title: 'Interatividade e Engajamento',
      description: 'Construa relacionamentos mais próximos com sua audiência através de interações em tempo real e comunicação bidirecional.',
      icon: MessageSquare,
      color: 'text-pink-400'
    },
    {
      title: 'Automação e Escalabilidade',
      description: 'Implemente processos automatizados que crescem junto com seu negócio, mantendo a personalização e relevância para cada cliente.',
      icon: Zap,
      color: 'text-red-400'
    }
  ];

  // Dados de métricas e resultados
  const metricsData = [
    { label: 'Crescimento de conversões', value: '170%', suffix: 'em média' },
    { label: 'ROI médio', value: '380%', suffix: 'em campanhas' },
    { label: 'Redução CAC', value: '42%', suffix: 'em 6 meses' },
    { label: 'Aumento de receita', value: '215%', suffix: 'anual' }
  ];

  // Perguntas frequentes sobre Marketing Digital
  const faqItems = [
    {
      question: 'O que exatamente faz uma agência de marketing digital?',
      answer: 'Uma agência de marketing digital planeja e executa estratégias para aumentar a visibilidade da sua marca na internet. Isso envolve gestão de redes sociais, anúncios pagos, SEO, criação de sites, e muito mais — tudo com foco em gerar resultados reais como leads, vendas e autoridade de marca.'
    },
    {
      question: 'Qual a diferença entre inbound e outbound marketing?',
      answer: 'Inbound marketing atrai clientes de forma natural, por meio de conteúdo relevante, SEO e nutrição de leads. Outbound marketing, por outro lado, é mais direto: envolve anúncios pagos, prospecção ativa e abordagens comerciais. As duas estratégias podem (e devem) se complementar para resultados mais previsíveis.'
    },
    {
      question: 'Em quanto tempo começo a ver resultados?',
      answer: 'Depende do tipo de estratégia. Campanhas de tráfego pago podem gerar resultados imediatos, enquanto ações de SEO e inbound marketing constroem resultados sólidos e sustentáveis ao longo de alguns meses. Durante todo o processo, você recebe relatórios com a evolução dos principais indicadores.'
    },
    {
      question: 'Quanto custa contratar marketing digital?',
      answer: 'O investimento varia conforme os objetivos, canais usados e volume de trabalho. Oferecemos planos personalizados — desde projetos pontuais até gestão completa de marketing. O ideal é solicitar um diagnóstico gratuito para definirmos o melhor formato para o seu negócio.'
    },
    {
      question: 'Vocês trabalham com contratos mensais ou por projeto?',
      answer: 'Ambos. Para gestão contínua (como redes sociais, tráfego pago e SEO), recomendamos contratos mensais. Mas também realizamos projetos pontuais — como criação de sites, landing pages, campanhas específicas ou consultorias estratégicas.'
    },
    {
      question: 'Como funciona o processo de trabalho com vocês?',
      answer: 'Nosso processo é estruturado em 5 etapas: 1) Análise e Diagnóstico - estudamos seu negócio e mercado; 2) Planejamento Estratégico - criamos um plano personalizado; 3) Implementação e Execução - colocamos tudo em ação; 4) Monitoramento e Otimização - acompanhamos resultados e ajustamos; 5) Relatórios e Evolução - fornecemos insights e refinamos estratégias continuamente.'
    }
  ];

  return (
    <Layout>
      <Helmet>
        {/* Meta Tags Básicas */}
        <title>Marketing Digital Completo | Agência Nobre Lobo - Estratégias que Geram Resultados</title>
        <meta name="description" content="Estratégias integradas de marketing digital que conectam sua marca ao público certo. SEO, tráfego pago, redes sociais, inbound marketing e muito mais. Consultoria gratuita!" />
        <meta name="keywords" content="marketing digital, agência marketing digital, SEO, tráfego pago, redes sociais, inbound marketing, outbound marketing, branding, automação marketing, Google Ads, Facebook Ads, LinkedIn Ads, email marketing, content marketing, social media marketing, digital marketing agency, marketing strategy, lead generation, conversion optimization, ROI marketing" />
        <meta name="author" content="Nobre Lobo - Agência de Marketing Digital" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nobrelobo.com/services/marketing-digital" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="service" />
        <meta property="og:title" content="Marketing Digital Completo | Agência Nobre Lobo" />
        <meta property="og:description" content="Estratégias integradas de marketing digital que conectam sua marca ao público certo. SEO, tráfego pago, redes sociais e muito mais. Consultoria gratuita!" />
        <meta property="og:url" content="https://nobrelobo.com/services/marketing-digital" />
        <meta property="og:image" content="https://nobrelobo.com/lobo-hero-services.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Agência de Marketing Digital Nobre Lobo - Estratégias digitais para crescimento empresarial" />
        <meta property="og:site_name" content="Nobre Lobo" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Digital Completo | Agência Nobre Lobo" />
        <meta name="twitter:description" content="Estratégias integradas de marketing digital que conectam sua marca ao público certo. Consultoria gratuita!" />
        <meta name="twitter:image" content="https://nobrelobo.com/lobo-hero-services.jpg" />
        <meta name="twitter:image:alt" content="Agência de Marketing Digital Nobre Lobo" />
        <meta name="twitter:site" content="@nobrelobo" />
        <meta name="twitter:creator" content="@nobrelobo" />
        
        {/* Meta Tags Técnicas */}
        <meta name="theme-color" content="#ECC80B" />
        <meta name="msapplication-TileColor" content="#ECC80B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nobre Lobo" />
        
        {/* Performance e Core Web Vitals */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Nobre Lobo" />
        
        {/* Meta Tags Adicionais para SEO */}
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="cache-control" content="public, max-age=31536000" />
        
        {/* Meta Tags para Redes Sociais Adicionais */}
        <meta property="article:author" content="Nobre Lobo" />
        <meta property="article:publisher" content="https://nobrelobo.com" />
        <meta property="article:section" content="Marketing Digital" />
        <meta property="article:tag" content="marketing digital, SEO, tráfego pago, redes sociais" />
        
        {/* Meta Tags para LinkedIn */}
        <meta property="linkedin:owner" content="nobrelobo" />
        
        {/* Meta Tags para WhatsApp */}
        <meta property="whatsapp:phone" content="+5511999999999" />
        
        {/* Preconnect para Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Schema Markup - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marketing Digital",
            "description": "Estratégias integradas de marketing digital que conectam sua marca ao público certo, geram conversões mensuráveis e constroem relacionamentos duradouros",
            "provider": {
              "@type": "Organization",
              "name": "Nobre Lobo",
              "url": "https://nobrelobo.com",
              "logo": "https://nobrelobo.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.instagram.com/nobrelobo",
                "https://www.linkedin.com/company/nobrelobo",
                "https://www.facebook.com/nobrelobo"
              ]
            },
            "offers": {
              "@type": "Offer",
              "description": "Consultoria gratuita em marketing digital",
              "price": "0",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            },
            "serviceType": "Marketing Digital",
            "areaServed": {
              "@type": "Country",
              "name": "Brazil"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Marketing Digital",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Estratégico"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tráfego Pago"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Redes Sociais"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Email Marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Branding"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Schema Markup - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        
        {/* Schema Markup - Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://nobrelobo.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Serviços",
                "item": "https://nobrelobo.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Marketing Digital",
                "item": "https://nobrelobo.com/services/marketing-digital"
              }
            ]
          })}
        </script>
        
        {/* Schema Markup - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nobre Lobo",
            "description": "Agência de Marketing Digital especializada em estratégias integradas para crescimento empresarial",
            "url": "https://nobrelobo.com",
            "logo": "https://nobrelobo.com/logo.png",
            "image": "https://nobrelobo.com/lobo-hero-services.jpg",
            "telephone": "+55-11-99999-9999",
            "email": "contato@nobrelobo.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressRegion": "São Paulo"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-23.5505",
              "longitude": "-46.6333"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$",
            "paymentAccepted": "Cash, Credit Card",
            "currenciesAccepted": "BRL",
            "sameAs": [
              "https://www.instagram.com/nobrelobo",
              "https://www.linkedin.com/company/nobrelobo",
              "https://www.facebook.com/nobrelobo"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Marketing Digital",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marketing Digital Completo"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Schema Markup - WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Marketing Digital Completo | Agência Nobre Lobo",
            "description": "Estratégias integradas de marketing digital que conectam sua marca ao público certo. SEO, tráfego pago, redes sociais e muito mais.",
            "url": "https://nobrelobo.com/services/marketing-digital",
            "mainEntity": {
              "@type": "Service",
              "name": "Marketing Digital",
              "description": "Estratégias integradas de marketing digital"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Início",
                  "item": "https://nobrelobo.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Serviços",
                  "item": "https://nobrelobo.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Marketing Digital",
                  "item": "https://nobrelobo.com/services/marketing-digital"
                }
              ]
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "Nobre Lobo",
              "url": "https://nobrelobo.com"
            },
            "about": {
              "@type": "Organization",
              "name": "Nobre Lobo"
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".hero-description"]
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="py-4 bg-black/20">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-white/70 hover:text-primary transition-colors">Início</a>
            </li>
            <li className="text-white/40">/</li>
            <li>
              <a href="/services" className="text-white/70 hover:text-primary transition-colors">Serviços</a>
            </li>
            <li className="text-white/40">/</li>
            <li className="text-primary font-medium">Marketing Digital</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section Personalizada */}
      <HeroSection />


      {/* Soluções de Marketing Digital */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<h2>Nossas <span className="text-primary">Soluções</span> de Marketing Digital</h2>}
            subtitle="Oferecemos serviços completos e especializados em todas as áreas do marketing digital, desde estratégia até execução e análise."
            badge="Serviços"
            floatingTitleText="SOLUÇÕES"
            iconComponent={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 4.5H16.5M7.5 9.5H12M7.5 14.5H10M7 19.5H17C19.2091 19.5 21 17.7091 21 15.5V8.5C21 6.29086 19.2091 4.5 17 4.5H7C4.79086 4.5 3 6.29086 3 8.5V15.5C3 17.7091 4.79086 19.5 7 19.5Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {marketingSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:bg-white/10"
                >
                  <div className={`w-16 h-16 rounded-xl ${solution.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${solution.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-gilroy font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {solution.category}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {solution.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-white/70 text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios do Marketing Digital */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<h2>Por que investir em <span className="text-primary">Marketing Digital</span>?</h2>}
            subtitle="Descubra os principais benefícios que uma estratégia completa de marketing digital pode trazer para o seu negócio."
            badge="Vantagens"
            floatingTitleText="BENEFÍCIOS"
            iconComponent={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 8.5L18.2 6.8C18.3888 6.61112 18.5 6.3056 18.5 6C18.5 5.17157 17.8284 4.5 17 4.5C16.6944 4.5 16.3889 4.61112 16.2 4.8L14.5 6.5M16.5 8.5L10.5 14.5L7.5 15.5L8.5 12.5L14.5 6.5M16.5 8.5L14.5 6.5M18.5 19.5H5.5C5.5 18.6716 5.5 18.0261 5.54665 17.4895C5.63584 16.4164 5.88645 15.427 6.6967 14.6967C7.5 13.9635 8.00001 13.5 10 13.5" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {marketingBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group hover:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300"
              >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-gilroy font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<h2>Nossos <span className="text-primary">Diferenciais</span></h2>}
            subtitle="O que nos diferencia não é apenas o que fazemos, mas como fazemos. Cada estratégia é construída com base em dados, propósito e autenticidade."
            badge="Diferenciais"
            floatingTitleText="DIFERENCIAIS"
            iconComponent={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <div className="mt-16">
            {/* Introdução */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Trabalhamos lado a lado com nossos clientes para transformar marketing em resultado real.
              </p>
            </motion.div>

            {/* Grid de Diferenciais */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Diferencial 1: Estratégia antes da execução */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  Estratégia antes da execução
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  Não começamos campanhas às cegas. Cada projeto parte de uma análise detalhada do mercado, público e concorrência para que cada ação tenha um objetivo claro e mensurável.
                </p>
              </motion.div>

              {/* Diferencial 2: Personalização em cada entrega */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-green-400" />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  Personalização em cada entrega
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  Nada de pacotes prontos. Cada negócio tem um contexto, um público e um ritmo — por isso, cada plano é desenvolvido sob medida para as metas e desafios de cada cliente.
                </p>
              </motion.div>

              {/* Diferencial 3: Integração entre branding e performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="h-8 w-8 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  Integração entre branding e performance
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  Acreditamos que resultado e posicionamento caminham juntos. Criamos estratégias que unem a força da marca com a eficiência das campanhas de performance.
                </p>
              </motion.div>

              {/* Diferencial 4: Decisões guiadas por dados */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-amber-400" />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  Decisões guiadas por dados
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  Todas as escolhas são baseadas em números, não em suposições. Monitoramos métricas, interpretamos resultados e ajustamos estratégias continuamente para maximizar o retorno de cada investimento.
                </p>
              </motion.div>

              {/* Diferencial 5: Tecnologia e inteligência artificial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-8 w-8 text-emerald-400" />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  Tecnologia e inteligência artificial
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  Usamos automação e IA para acelerar processos, gerar insights e otimizar campanhas, mantendo o olhar humano na análise e a estratégia no centro das decisões.
                </p>
              </motion.div>

              {/* Diferencial 6: Foco em resultado e crescimento real */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:bg-white/10 md:col-span-2 lg:col-span-1"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-gilroy font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  Foco em resultado e crescimento real
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  Mais do que entregas, buscamos evolução. Nosso compromisso é gerar impacto mensurável, fortalecer sua presença digital e construir bases sólidas para o crescimento do seu negócio.
                </p>
              </motion.div>
            </div>

            {/* Conclusão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-gilroy font-bold text-white mb-4">
                  Trabalhamos com propósito, método e clareza.
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  Nosso diferencial está em transformar marketing em estratégia, e estratégia em crescimento.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion 
        title={<h2>Perguntas <span className="text-primary">Frequentes</span></h2>}
        subtitle="Respostas para as dúvidas mais comuns sobre Marketing Digital e como podemos ajudar seu negócio a crescer online."
        badge="FAQ"
        items={faqItems}
      />


      {/* Seção de Contato */}
    </Layout>
  );
};

export default MarketingDigitalPage; 