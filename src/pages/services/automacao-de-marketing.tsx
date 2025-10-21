import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/general/Layout';
import SectionHeader from '../../components/general/SectionHeader';
import { Button } from '../../components/ui/button';
import { ArrowRight, CheckCircle, Zap, BarChart3, Clock, Target, Users, Workflow, Bot, Gauge, Layers, Repeat, TrendingUp, Globe, Smartphone, Cpu, Mail, MessageSquare, Settings } from 'lucide-react';

// Componente Hero para a página de Automação de Marketing
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de automação */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Elementos decorativos de automação */}
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
        
        {/* Linhas de conexão simulando fluxos */}
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
              <Zap size={16} className="mr-2" /> Automação de Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforme <span className="text-primary">processos repetitivos</span> em <span className="text-primary">resultados extraordinários</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Fluxos inteligentes que trabalham 24/7 para nutrir leads, personalizar experiências e converter visitantes em clientes fiéis.
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
                Ver Casos de Sucesso
              </motion.a>
            </div>
            
            {/* Estatísticas de Automação */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+73%</div>
                <div className="text-white/70 text-sm">Aumento de produtividade</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+210%</div>
                <div className="text-white/70 text-sm">Taxa de conversão</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">380%</div>
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
            {/* Elemento visual de Automação */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Dashboard de Automação */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-white/5 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="relative h-full flex flex-col">
                    <div className="text-center mb-4">
                      <Workflow className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h3 className="text-xl font-bold">Fluxos Automatizados</h3>
                    </div>
                    
                    {/* Fluxo simulado */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        {/* Nós do fluxo */}
                        {[
                          { x: 20, y: 20, icon: <Mail className="h-6 w-6" />, label: "Email" },
                          { x: 50, y: 15, icon: <MessageSquare className="h-6 w-6" />, label: "Chat" },
                          { x: 80, y: 25, icon: <Target className="h-6 w-6" />, label: "Lead" },
                          { x: 30, y: 60, icon: <Users className="h-6 w-6" />, label: "Segment" },
                          { x: 60, y: 70, icon: <BarChart3 className="h-6 w-6" />, label: "Analytics" },
                          { x: 85, y: 80, icon: <CheckCircle className="h-6 w-6" />, label: "Convert" }
                        ].map((node, index) => (
                          <motion.div
                            key={index}
                            className="absolute bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full p-3 flex flex-col items-center"
                            style={{ 
                              left: `${node.x}%`, 
                              top: `${node.y}%`,
                              transform: 'translate(-50%, -50%)'
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              duration: 0.5,
                              delay: 0.5 + index * 0.2,
                              ease: "easeOut"
                            }}
                          >
                            <div className="text-primary mb-1">{node.icon}</div>
                            <span className="text-xs text-white/80">{node.label}</span>
                          </motion.div>
                        ))}
                        
                        {/* Linhas conectando os nós */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <motion.path 
                            d="M20,20 L50,15 L80,25 M50,15 L30,60 L60,70 M80,25 L85,80" 
                            fill="none" 
                            stroke="url(#automationGradient)" 
                            strokeWidth="1"
                            strokeDasharray="1000"
                            strokeDashoffset="1000"
                            style={{
                              animation: "dash 3s ease-out forwards 1s"
                            }}
                          />
                          <defs>
                            <linearGradient id="automationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
                      </div>
                    </div>
                    
                    {/* Legenda */}
                    <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-white/60">
                      <div>Captura</div>
                      <div className="text-center">Nutrição</div>
                      <div className="text-right">Conversão</div>
                    </div>
                  </div>
                </div>
                
                {/* Métricas de Automação */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="text-xs">Automação</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-xs">Segmentação</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Target className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <span className="text-xs">Conversão</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <MessageSquare className="h-6 w-6 text-red-400 mx-auto mb-2" />
                    <span className="text-xs">Chatbot</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Mail className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <span className="text-xs">Email</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Settings className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                    <span className="text-xs">Integração</span>
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

const AutomacaoMarketingPage: React.FC = () => {
  // Itens do processo de automação
  const automationProcess = [
    {
      icon: <Workflow className="w-10 h-10 text-primary" />,
      title: 'Mapeamento de Jornada',
      description: 'Analisamos o percurso do cliente desde o primeiro contato até a conversão para identificar oportunidades de automação.',
      delay: 0.1,
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'Segmentação Avançada',
      description: 'Criamos segmentos precisos baseados em comportamento, interesses e estágio no funil para mensagens altamente personalizadas.',
      delay: 0.2,
    },
    {
      icon: <Workflow className="w-10 h-10 text-primary" />,
      title: 'Criação de Fluxos',
      description: 'Desenvolvemos fluxos automatizados inteligentes que nutrem leads e guiam clientes pela jornada de compra.',
      delay: 0.3,
    },
    {
      icon: <Bot className="w-10 h-10 text-primary" />,
      title: 'Implementação de Chatbots',
      description: 'Configuramos assistentes virtuais que respondem dúvidas, qualificam leads e direcionam usuários 24/7.',
      delay: 0.4,
    },
    {
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: 'Integração de Plataformas',
      description: 'Conectamos suas ferramentas de marketing, vendas e atendimento para um ecossistema digital unificado e eficiente.',
      delay: 0.5,
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: 'Análise e Otimização',
      description: 'Monitoramento contínuo de métricas com ajustes estratégicos para maximizar resultados e ROI.',
      delay: 0.6,
    },
  ];

  // Benefícios da automação de marketing
  const automationBenefits = [
    {
      title: 'Economia de Tempo',
      description: 'Reduza em até 80% o tempo gasto em tarefas repetitivas de marketing e vendas.',
      icon: <Clock className="w-6 h-6 text-primary" />
    },
    {
      title: 'Aumento de Conversões',
      description: 'Mensagens personalizadas no momento certo podem aumentar taxas de conversão em até 300%.',
      icon: <Target className="w-6 h-6 text-primary" />
    },
    {
      title: 'Escalabilidade',
      description: 'Atenda milhares de leads simultaneamente sem comprometer a qualidade da interação.',
      icon: <Gauge className="w-6 h-6 text-primary" />
    },
    {
      title: 'Personalização Avançada',
      description: 'Ofereça experiências únicas baseadas em comportamento, interesses e histórico do cliente.',
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: 'Dados Acionáveis',
      description: 'Obtenha insights valiosos sobre o comportamento do cliente para decisões estratégicas.',
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    },
    {
      title: 'Consistência na Comunicação',
      description: 'Mantenha uma presença constante e relevante em todos os pontos de contato com o cliente.',
      icon: <Repeat className="w-6 h-6 text-primary" />
    },
  ];

  // Dados de métricas e resultados
  const metricsData = [
    { label: 'Aumento de produtividade', value: '73%', suffix: 'em média' },
    { label: 'Taxa de conversão', value: '210%', suffix: 'de aumento' },
    { label: 'Redução de custos', value: '30%', suffix: 'em operações' },
    { label: 'ROI médio', value: '380%', suffix: 'em 12 meses' }
  ];

  // Casos de uso de automação
  const useCases = [
    {
      title: 'E-commerce',
      description: 'Recuperação de carrinhos abandonados, recomendações personalizadas de produtos e campanhas de recompra automatizadas.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070'
    },
    {
      title: 'B2B',
      description: 'Nutrição de leads complexos, qualificação automatizada e integração com CRM para alinhamento entre marketing e vendas.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070'
    },
    {
      title: 'Serviços',
      description: 'Agendamento automatizado, lembretes personalizados e programas de fidelidade com gatilhos comportamentais.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070'
    }
  ];


  return (
    <Layout>
      {/* Hero Section Personalizada */}
      <HeroSection />

      {/* Introdução à Automação de Marketing */}
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
              <h2 className="text-3xl md:text-4xl font-gilroy font-bold text-white mb-6">Revolucione seu marketing com <span className="text-primary">automação inteligente</span></h2>
              <p className="text-white/70 mb-6">
                A automação de marketing vai além de simples emails programados. É uma abordagem estratégica que utiliza tecnologia para criar experiências personalizadas em escala, nutrir relacionamentos e converter leads em clientes fiéis.
              </p>
              <p className="text-white/70 mb-6">
                Em um mercado onde 76% dos consumidores esperam interações personalizadas e 83% estão dispostos a compartilhar dados para experiências mais relevantes, a automação se torna essencial para empresas que desejam se manter competitivas.
              </p>
              <p className="text-white/70">
                Nossa abordagem combina estratégia, tecnologia e criatividade para desenvolver fluxos automatizados que funcionam 24/7, gerando resultados consistentes enquanto sua equipe foca no que realmente importa.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426" 
                  alt="Automação de Marketing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-primary font-bold text-sm mb-2">TRANSFORMAÇÃO DIGITAL</div>
                  <div className="text-white text-xl font-bold">Marketing inteligente que trabalha por você 24/7</div>
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

      {/* Processo de Automação */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<>Nossa <span className="text-primary">Metodologia</span> de Automação</>}
            subtitle="Desenvolvemos e implementamos estratégias de automação personalizadas que se integram perfeitamente ao seu funil de vendas e objetivos de negócio."
            badge="Processo"
            floatingTitleText="MÉTODO"
            iconComponent={<Zap className="w-8 h-8 text-primary" />}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {automationProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/20 transition-colors duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-gilroy font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios da Automação */}
      <section className="py-20 relative z-10 overflow-hidden">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<>Benefícios da <span className="text-primary">Automação</span> de Marketing</>}
            subtitle="Descubra como a automação de marketing pode transformar sua operação digital, aumentando eficiência e resultados."
            badge="Vantagens"
            floatingTitleText="BENEFÍCIOS"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {automationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="mt-1 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-gilroy font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 relative z-10 overflow-hidden">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={<>Casos de <span className="text-primary">Uso</span></>}
            subtitle="Veja como diferentes setores podem se beneficiar da automação de marketing para impulsionar resultados."
            badge="Aplicações"
            floatingTitleText="SOLUÇÕES"
          />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full hover:border-primary/30 transition-all duration-500">
                  {/* Imagem de fundo */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    
                    {/* Badge do setor */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-sm font-medium">
                        {useCase.title}
                      </span>
                    </div>
                    
                    {/* Ícone do setor */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                      {index === 0 && <Target className="w-6 h-6 text-primary" />}
                      {index === 1 && <Users className="w-6 h-6 text-blue-400" />}
                      {index === 2 && <Settings className="w-6 h-6 text-purple-400" />}
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    {/* Benefícios específicos */}
                    <div className="space-y-3">
                      {index === 0 && (
                        <>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            <span>Recuperação automática de carrinhos</span>
                          </div>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            <span>Recomendações personalizadas</span>
                          </div>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            <span>Campanhas de recompra</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                            <span>Nutrição de leads complexos</span>
                          </div>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                            <span>Qualificação automatizada</span>
                          </div>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                            <span>Integração com CRM</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                            <span>Agendamento automatizado</span>
                          </div>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                            <span>Lembretes personalizados</span>
                          </div>
                          <div className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                            <span>Programas de fidelidade</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Efeito de hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                
                {/* Elemento decorativo */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Seção de resultados */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Resultados <span className="text-primary">Comprovados</span> em Diferentes Setores
                </h3>
                <p className="text-white/70 text-lg max-w-3xl mx-auto">
                  Nossas estratégias de automação já transformaram centenas de negócios, gerando resultados mensuráveis e sustentáveis.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">+85%</div>
                  <div className="text-white/80 font-medium mb-1">Taxa de Conversão</div>
                  <div className="text-white/60 text-sm">E-commerce</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">+120%</div>
                  <div className="text-white/80 font-medium mb-1">Qualificação de Leads</div>
                  <div className="text-white/60 text-sm">B2B</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">+65%</div>
                  <div className="text-white/80 font-medium mb-1">Retenção de Clientes</div>
                  <div className="text-white/60 text-sm">Serviços</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        {/* Divisor no topo da seção */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary/20 to-background border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-gilroy font-bold text-white mb-6">
                Pronto para automatizar seu marketing e <span className="text-primary">multiplicar resultados</span>?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Agende uma consultoria gratuita e descubra como podemos criar uma estratégia de automação personalizada para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-6 rounded-full text-base">
                  Agendar Consultoria Gratuita
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium px-8 py-6 rounded-full text-base">
                  Ver Demonstração
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
    </Layout>
  );
};

export default AutomacaoMarketingPage; 