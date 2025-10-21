import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/general/Layout';
import { ArrowRight, Palette, Layers, Target, Sparkles, PenTool, Eye, Lightbulb, Compass, Zap, FileType, Users, BarChart, Briefcase, Globe, Award, Search, Presentation, Shuffle, Rocket, CheckCircle, Type, Image as ImageIcon, Grid, MessageSquare, Hexagon } from 'lucide-react';

// Componente Hero para a página de Branding
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de formas abstratas */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Elementos decorativos de branding */}
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
        
        <motion.div 
          className="absolute top-1/3 right-1/5 w-80 h-80 rounded-full border border-blue-500/20"
          animate={{ 
            scale: [1, 0.9, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-blue-500/5"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5
          }}
        />
        
        {/* Formas geométricas */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rotate-45"
          animate={{ 
            rotate: [45, 90, 45],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
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
              <Palette size={16} className="mr-2" /> Branding
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Construa uma <span className="text-primary">identidade</span> que conecta e inspira
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Desenvolvemos estratégias de branding que transformam negócios em marcas memoráveis, autênticas e com propósito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Iniciar Projeto
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
            
            {/* Estatísticas de Branding */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+85%</div>
                <div className="text-white/70 text-sm">Aumento em reconhecimento de marca</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+64%</div>
                <div className="text-white/70 text-sm">Crescimento em valor percebido</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+72%</div>
                <div className="text-white/70 text-sm">Aumento em fidelidade do cliente</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Elemento visual de branding */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Círculo de cores */}
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-spin-slow"></div>
                  <div className="absolute inset-[15%] bg-background rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <Palette className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h3 className="text-xl font-bold">Identidade Visual</h3>
                      <p className="text-white/60 text-sm mt-2">Cores, tipografia, formas e elementos que representam sua marca</p>
                    </div>
                  </div>
                </div>
                
                {/* Elementos de branding */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="text-xs">Posicionamento</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Lightbulb className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-xs">Propósito</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Compass className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <span className="text-xs">Valores</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <PenTool className="h-6 w-6 text-red-400 mx-auto mb-2" />
                    <span className="text-xs">Design</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Eye className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <span className="text-xs">Percepção</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <Sparkles className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                    <span className="text-xs">Experiência</span>
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

// Componente de Serviços para a página de Branding
const ServicesSection: React.FC = () => {
  // Array de serviços de branding
  const services = [
    {
      id: 1,
      title: "Identidade Visual",
      description: "Desenvolvimento de logotipos, paletas de cores, tipografia e elementos visuais que representam a essência da sua marca.",
      icon: <Palette className="h-8 w-8 text-primary" />,
      features: ["Logotipos", "Paletas de cores", "Tipografia", "Elementos visuais"],
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 2,
      title: "Brand Guidelines",
      description: "Criação de manuais completos com regras e diretrizes para aplicação consistente da identidade visual em todos os pontos de contato.",
      icon: <FileType className="h-8 w-8 text-blue-400" />,
      features: ["Manual de marca", "Regras de aplicação", "Exemplos de uso", "Versões do logotipo"],
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      id: 3,
      title: "Posicionamento de Marca",
      description: "Definição estratégica do lugar que sua marca ocupa na mente do consumidor, diferenciando-a da concorrência.",
      icon: <Target className="h-8 w-8 text-purple-400" />,
      features: ["Análise de mercado", "Diferenciação", "Proposta de valor", "Mensagem-chave"],
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      id: 4,
      title: "Propósito e Valores",
      description: "Identificação e articulação do propósito, missão, visão e valores que guiam sua marca e conectam com seu público.",
      icon: <Lightbulb className="h-8 w-8 text-amber-400" />,
      features: ["Missão", "Visão", "Valores", "Propósito"],
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      id: 5,
      title: "Persona e Público-alvo",
      description: "Pesquisa e definição detalhada do seu público ideal, seus comportamentos, necessidades e pontos de contato.",
      icon: <Users className="h-8 w-8 text-green-400" />,
      features: ["Perfil demográfico", "Comportamentos", "Necessidades", "Pontos de contato"],
      color: "from-green-500/20 to-green-500/5"
    },
    {
      id: 6,
      title: "Estratégia de Marca",
      description: "Planejamento abrangente para construção e fortalecimento da marca ao longo do tempo, alinhado aos objetivos de negócio.",
      icon: <BarChart className="h-8 w-8 text-red-400" />,
      features: ["Plano de ação", "KPIs", "Cronograma", "Análise de resultados"],
      color: "from-red-500/20 to-red-500/5"
    },
    {
      id: 7,
      title: "Naming e Verbal Identity",
      description: "Criação de nomes, slogans, tom de voz e linguagem verbal que expressam a personalidade da sua marca.",
      icon: <Briefcase className="h-8 w-8 text-indigo-400" />,
      features: ["Naming", "Slogan", "Tom de voz", "Linguagem verbal"],
      color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
      id: 8,
      title: "Presença Digital",
      description: "Adaptação e aplicação da identidade de marca em websites, redes sociais e outras plataformas digitais.",
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      features: ["Redes sociais", "Website", "E-mail marketing", "Conteúdo digital"],
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      id: 9,
      title: "Rebranding",
      description: "Renovação estratégica da identidade visual e posicionamento para marcas que precisam se reinventar ou evoluir.",
      icon: <Award className="h-8 w-8 text-rose-400" />,
      features: ["Diagnóstico", "Reposicionamento", "Nova identidade", "Plano de transição"],
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
            Soluções completas para <span className="text-primary">construir</span> e <span className="text-primary">fortalecer</span> sua marca
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Oferecemos um conjunto abrangente de serviços de branding para criar uma identidade de marca autêntica, memorável e estrategicamente alinhada com seus objetivos de negócio.
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

// Componente de Processo para a página de Branding
const ProcessSection: React.FC = () => {
  // Array com as etapas do processo
  const processSteps = [
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Descoberta",
      description: "Imersão profunda no seu negócio, mercado e concorrência para identificar oportunidades.",
      deliverables: ["Relatório de insights", "Mapa de oportunidades"]
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Estratégia",
      description: "Definição do posicionamento, propósito e valores que guiarão sua marca.",
      deliverables: ["Plataforma de marca", "Diretrizes estratégicas"]
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Conceituação",
      description: "Desenvolvimento de conceitos visuais e verbais alinhados à estratégia.",
      deliverables: ["Conceitos visuais", "Direção criativa"]
    },
    {
      icon: <PenTool className="h-6 w-6 text-primary" />,
      title: "Design",
      description: "Criação do sistema de identidade visual completo para sua marca.",
      deliverables: ["Logotipo", "Sistema visual", "Aplicações"]
    },
    {
      icon: <FileType className="h-6 w-6 text-primary" />,
      title: "Implementação",
      description: "Aplicação da identidade em todos os pontos de contato com o cliente.",
      deliverables: ["Manual de marca", "Arquivos finais", "Suporte"]
    }
  ];

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
            <Shuffle size={16} className="mr-2" /> Nosso Processo
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Como transformamos <span className="text-primary">ideias</span> em <span className="text-primary">marcas</span> poderosas
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg mb-8"
          >
            Nosso processo estruturado garante resultados excepcionais, combinando estratégia, criatividade e execução meticulosa.
          </motion.p>
        </div>
        
        {/* Processo Simplificado */}
        <div className="max-w-4xl mx-auto">
          {/* Lista de etapas do processo */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all hover:border-primary/20"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Número e ícone da etapa */}
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex flex-col items-center justify-center md:w-32 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  
                  {/* Conteúdo da etapa */}
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      {step.title}
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent ml-4"></div>
                    </h3>
                    
                    <p className="text-white/70 mb-4">{step.description}</p>
                    
                    {/* Entregáveis */}
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center text-sm px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10"
                        >
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mensagem de colaboração */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
          >
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Colaboração contínua</h3>
            <p className="text-white/70">
              Em cada etapa do processo, trabalhamos em estreita colaboração com você, garantindo que sua visão e objetivos estejam refletidos em todos os aspectos da sua marca.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de Elementos de Branding
const ElementsSection: React.FC = () => {
  // Array com os elementos de branding
  const brandingElements = [
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Logotipo",
      description: "O símbolo visual principal que representa sua marca e é o elemento mais reconhecível da sua identidade visual.",
      color: "from-primary/20 to-primary/5",
      hoverColor: "from-primary/30 to-primary/10"
    },
    {
      icon: <Type className="h-12 w-12 text-blue-400" />,
      title: "Tipografia",
      description: "As fontes e estilos de texto que comunicam a personalidade da sua marca e garantem legibilidade em todos os materiais.",
      color: "from-blue-500/20 to-blue-500/5",
      hoverColor: "from-blue-500/30 to-blue-500/10"
    },
    {
      icon: <Palette className="h-12 w-12 text-purple-400" />,
      title: "Paleta de Cores",
      description: "O conjunto de cores primárias e secundárias que evocam emoções específicas e criam reconhecimento visual.",
      color: "from-purple-500/20 to-purple-500/5",
      hoverColor: "from-purple-500/30 to-purple-500/10"
    },
    {
      icon: <ImageIcon className="h-12 w-12 text-amber-400" />,
      title: "Elementos Gráficos",
      description: "Padrões, texturas, ícones e ilustrações que complementam o logotipo e enriquecem a linguagem visual da marca.",
      color: "from-amber-500/20 to-amber-500/5",
      hoverColor: "from-amber-500/30 to-amber-500/10"
    },
    {
      icon: <Grid className="h-12 w-12 text-green-400" />,
      title: "Sistema de Grid",
      description: "Estrutura que organiza os elementos visuais de forma consistente em diferentes formatos e aplicações.",
      color: "from-green-500/20 to-green-500/5",
      hoverColor: "from-green-500/30 to-green-500/10"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-red-400" />,
      title: "Tom de Voz",
      description: "A maneira como sua marca se comunica verbalmente, refletindo sua personalidade e valores em todos os textos.",
      color: "from-red-500/20 to-red-500/5",
      hoverColor: "from-red-500/30 to-red-500/10"
    }
  ];

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
            <Hexagon size={16} className="mr-2" /> Elementos Essenciais
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Os <span className="text-primary">pilares</span> de uma identidade visual <span className="text-primary">impactante</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Uma identidade de marca completa é composta por diversos elementos que trabalham em harmonia para criar uma experiência coesa e memorável.
          </motion.p>
        </div>
        
        {/* Grid de elementos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandingElements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${element.color} hover:bg-gradient-to-br hover:${element.hoverColor} p-8 h-full border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300`}>
                <div className="relative z-10">
                  <div className="bg-white/10 rounded-xl p-4 inline-block mb-6">
                    {element.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{element.title}</h3>
                  <p className="text-white/70">{element.description}</p>
                  
                  <div className="mt-6 flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors duration-300">
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Página principal de Branding
const BrandingPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section Personalizada */}
      <HeroSection />
      
      {/* Serviços Section */}
      <ServicesSection />
      
      {/* Processo Section */}
      <ProcessSection />
      
      {/* Elementos Section */}
      <ElementsSection />
      
    </Layout>
  );
};

export default BrandingPage; 