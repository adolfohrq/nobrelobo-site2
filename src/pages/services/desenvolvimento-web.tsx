import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Layout from '../../components/general/Layout';
import { ArrowRight, Code, Zap, Shield, Smartphone, Database, Layers, Briefcase, MessageSquare, Star, User, HelpCircle, ChevronDown, Image as ImageIcon } from 'lucide-react';
import FaqAccordion from '../../components/general/FaqAccordion';

// Componentes específicos para a página de Desenvolvimento Web
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de código */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
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
              <Code size={16} className="mr-2" /> Desenvolvimento Web
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforme ideias em <span className="text-primary">experiências digitais</span> impactantes
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl hero-description">
              Criamos soluções web personalizadas que combinam design inovador, tecnologia avançada e estratégias orientadas a resultados.
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Elemento visual de código/design */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-blue-400">function <span className="text-green-400">createWebExperience</span>() {`{`}</div>
                  <div className="pl-4 text-white/70">const <span className="text-purple-400">design</span> = <span className="text-yellow-400">'inovador'</span>;</div>
                  <div className="pl-4 text-white/70">const <span className="text-purple-400">tecnologia</span> = <span className="text-yellow-400">'avançada'</span>;</div>
                  <div className="pl-4 text-white/70">const <span className="text-purple-400">resultado</span> = <span className="text-green-400">combinar</span>(design, tecnologia);</div>
                  <div className="pl-4 text-white/70">return <span className="text-purple-400">resultado</span>;</div>
                  <div className="text-blue-400">{`}`}</div>
                </div>
              </div>
            </div>
            
            {/* Imagem otimizada para SEO com dimensões fixas para CLS */}
            <img 
              src="/images/desenvolvimento-web-hero.jpg" 
              alt="Desenvolvimento web profissional com React, Next.js e tecnologias modernas - Sites responsivos e otimizados para SEO"
              className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-2xl"
              loading="lazy"
              width="800"
              height="600"
              style={{aspectRatio: "800/600"}}
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de Serviços
const ServicesSection: React.FC = () => {
  // Dados dos serviços
  const services = [
    {
      id: 1,
      title: "Websites Corporativos",
      description: "Criamos websites profissionais que representam a identidade da sua marca e comunicam sua proposta de valor de forma clara e impactante.",
      icon: <Layers className="h-8 w-8 text-primary" />,
      features: ["Design personalizado", "Otimizado para SEO", "Responsivo", "Painel administrativo"],
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 2,
      title: "E-commerce Avançado",
      description: "Desenvolvemos plataformas de e-commerce completas com foco em experiência do usuário e altas taxas de conversão.",
      icon: <Database className="h-8 w-8 text-blue-400" />,
      features: ["Integração com gateways de pagamento", "Gestão de estoque", "Checkout otimizado", "Relatórios de vendas"],
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      id: 3,
      title: "Aplicações Web",
      description: "Criamos aplicações web personalizadas que automatizam processos e resolvem problemas específicos do seu negócio.",
      icon: <Code className="h-8 w-8 text-purple-400" />,
      features: ["Arquitetura escalável", "APIs robustas", "Dashboards interativos", "Autenticação segura"],
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      id: 4,
      title: "Otimização de Performance",
      description: "Melhoramos a velocidade e performance do seu site existente para proporcionar uma experiência excepcional aos usuários.",
      icon: <Zap className="h-8 w-8 text-green-400" />,
      features: ["Otimização de código", "Compressão de imagens", "Caching avançado", "Análise de métricas"],
      color: "from-green-500/20 to-green-500/5"
    },
    {
      id: 5,
      title: "Design Responsivo",
      description: "Garantimos que seu site funcione perfeitamente em todos os dispositivos, de smartphones a desktops.",
      icon: <Smartphone className="h-8 w-8 text-red-400" />,
      features: ["Mobile-first design", "Testes em múltiplos dispositivos", "Adaptação de conteúdo", "Experiência consistente"],
      color: "from-red-500/20 to-red-500/5"
    },
    {
      id: 6,
      title: "Segurança Web",
      description: "Implementamos protocolos de segurança robustos para proteger seu site e os dados dos seus usuários.",
      icon: <Shield className="h-8 w-8 text-amber-400" />,
      features: ["Certificados SSL", "Proteção contra ataques", "Backups automáticos", "Atualizações de segurança"],
      color: "from-amber-500/20 to-amber-500/5"
    }
  ];

  return (
    <section id="servicos" className="py-24 relative">
      {/* Adicionando o divisor no topo da seção */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Code size={16} className="mr-2" /> Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Soluções <span className="text-primary">Personalizadas</span> para Web
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Oferecemos uma ampla gama de serviços de desenvolvimento web para atender às necessidades específicas do seu negócio, 
            desde websites corporativos até complexas aplicações web. Nossos sites são desenvolvidos com foco em 
            <a href="/services/seo-estrategico" className="text-primary hover:text-primary/80 transition-colors"> SEO</a>, 
            <a href="/services/marketing-digital" className="text-primary hover:text-primary/80 transition-colors"> marketing digital</a> e 
            <a href="/services/automacao-de-marketing" className="text-primary hover:text-primary/80 transition-colors"> automação</a>.
          </motion.p>
        </div>
        
        {/* Services Grid */}
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
                <p className="text-white/70 mb-6 service-description">{service.description}</p>
                
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

// Componente de Portfólio
const PortfolioSection: React.FC = () => {
  // Dados dos projetos
  const projects = [
    {
      id: 1,
      title: "E-commerce Premium",
      category: "E-commerce",
      image: "/images/portfolio/ecommerce.jpg",
      description: "Plataforma completa de e-commerce com integração de pagamentos, gestão de estoque e painel administrativo personalizado.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Dashboard Analítico",
      category: "Aplicação Web",
      image: "/images/portfolio/dashboard.jpg",
      description: "Dashboard interativo para visualização de dados em tempo real com gráficos personalizados e relatórios automatizados.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Portal Corporativo",
      category: "Website Corporativo",
      image: "/images/portfolio/corporate.jpg",
      description: "Website institucional com blog integrado, área de clientes e sistema de agendamento online.",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "Vercel"],
      link: "#"
    }
  ];

  // Estado para controlar o projeto em destaque
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Briefcase size={16} className="mr-2" /> Nossos Projetos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Portfólio de <span className="text-primary">Desenvolvimento Web</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Conheça alguns dos nossos projetos mais recentes e descubra como podemos criar soluções 
            personalizadas para o seu negócio.
          </motion.p>
        </div>
        
        {/* Portfolio Showcase */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2 relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
                      <ImageIcon size={36} className="text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {activeProject.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeProject.title}</h3>
                  <p className="text-white/70 mb-6">{activeProject.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm uppercase text-white/50 mb-3">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.a
                    href={activeProject.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-primary font-medium"
                  >
                    Ver projeto completo
                    <ArrowRight size={16} className="ml-2" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 mix-blend-overlay"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">Projeto #{project.id}</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary"
                    >
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            >
              Ver todos os projetos
              <ArrowRight size={18} className="ml-2" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente CTA personalizado
const CustomCTASection: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          >
            {/* Mantendo apenas os elementos decorativos dentro do card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-[100px] opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px] opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    Vamos <span className="text-primary">transformar</span> sua ideia em realidade
                  </h2>
                  <p className="text-white/70 text-lg mb-8">
                    Estamos prontos para criar a solução web perfeita para o seu negócio. Entre em contato hoje mesmo 
                    para uma consultoria gratuita e descubra como podemos ajudar. Nossos projetos incluem 
                    <a href="/services/seo-estrategico" className="text-primary hover:text-primary/80 transition-colors"> otimização para SEO</a>, 
                    <a href="/services/trafego-pago" className="text-primary hover:text-primary/80 transition-colors"> integração com tráfego pago</a> e 
                    <a href="/services/inteligencia-artificial" className="text-primary hover:text-primary/80 transition-colors"> soluções de IA</a>.
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
                      href="tel:+5511999999999"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                    >
                      (11) 99999-9999
                    </motion.a>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl filter blur-[20px] opacity-50"></div>
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <h3 className="text-xl font-bold mb-6 text-primary">Benefícios de trabalhar conosco</h3>
                      
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Equipe especializada</span>
                            <p className="text-white/70 text-sm">Profissionais com ampla experiência em desenvolvimento web</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Metodologia ágil</span>
                            <p className="text-white/70 text-sm">Processo transparente com entregas contínuas e feedback constante</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Suporte contínuo</span>
                            <p className="text-white/70 text-sm">Acompanhamento e suporte técnico após o lançamento do projeto</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Resultados mensuráveis</span>
                            <p className="text-white/70 text-sm">Foco em métricas e resultados reais para o seu negócio</p>
                          </div>
                        </li>
                      </ul>
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

// Dados das perguntas frequentes para o FaqAccordion
const faqItems = [
  {
    question: "Quanto tempo leva para desenvolver um site profissional?",
    answer: "O prazo varia conforme a complexidade do projeto. Um site institucional simples costuma levar de 2 a 4 semanas. Já projetos personalizados, como e-commerces e sistemas web, podem levar de 6 a 10 semanas. Tudo é alinhado logo no início, com cronograma definido."
  },
  {
    question: "Quais tecnologias vocês utilizam no desenvolvimento?",
    answer: "Trabalhamos com as stacks mais modernas do mercado — React, Next.js, Node.js, TypeScript, Tailwind CSS e Vite, além de bancos de dados como Supabase e PostgreSQL. Isso garante alta performance, segurança e escalabilidade para qualquer tipo de projeto."
  },
  {
    question: "O site será responsivo e rápido em dispositivos móveis?",
    answer: "Sim. Todos os sites são 100% responsivos, otimizados para telas de qualquer tamanho e com foco em velocidade e experiência do usuário. Nosso padrão de performance busca notas acima de 90 no Google PageSpeed."
  },
  {
    question: "Vocês também fazem a hospedagem e manutenção?",
    answer: "Sim. Oferecemos planos opcionais de hospedagem e manutenção, que incluem atualizações, backups automáticos, monitoramento de performance e suporte técnico contínuo."
  },
  {
    question: "Vocês otimizam o site para SEO?",
    answer: "Sim. Desde o início do projeto aplicamos boas práticas de SEO técnico, como estrutura semântica, meta tags, URLs otimizadas, sitemap, integração com Google Analytics e Search Console — tudo para ajudar seu site a se destacar nos resultados de busca."
  },
  {
    question: "Posso atualizar o conteúdo do meu site depois de pronto?",
    answer: "Claro. Entregamos o projeto com painel administrativo simples e intuitivo, para que você possa alterar textos, imagens, produtos ou páginas sem depender de suporte técnico."
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim. Após o lançamento, oferecemos período gratuito de suporte técnico, além de planos mensais de acompanhamento com monitoramento, otimizações contínuas e consultoria estratégica."
  },
  {
    question: "Quanto custa desenvolver um site?",
    answer: "O investimento depende do tipo de projeto, funcionalidades e prazo. Antes de enviar qualquer orçamento, fazemos uma análise personalizada para entender sua necessidade e propor a melhor solução custo-benefício."
  },
  {
    question: "Posso integrar o site com outras plataformas?",
    answer: "Sim. Fazemos integrações com APIs e sistemas externos, como CRMs, ERPs, gateways de pagamento, WhatsApp, ferramentas de automação e redes sociais."
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo é dividido em etapas claras: Briefing e planejamento, Design e prototipagem, Desenvolvimento, Testes e otimização, Lançamento e suporte. Você acompanha tudo de perto, com transparência total e entregas semanais."
  }
];

const DesenvolvimentoWebPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        {/* Meta Tags Básicas */}
        <title>Desenvolvimento Web Profissional | Sites e Aplicações Web | Nobre Lobo</title>
        <meta name="description" content="Desenvolvemos sites profissionais, e-commerces e aplicações web com React, Next.js e tecnologias modernas. Sites responsivos, rápidos e otimizados para SEO. Orçamento gratuito!" />
        <meta name="author" content="Nobre Lobo" />
        {/* Hreflang e Internacionalização */}
        <link rel="alternate" hrefLang="pt-BR" href="https://nobrelobo.com/services/desenvolvimento-web" />
        <link rel="alternate" hrefLang="pt-BR-SC" href="https://nobrelobo.com/services/desenvolvimento-web" />
        <link rel="alternate" hrefLang="x-default" href="https://nobrelobo.com/services/desenvolvimento-web" />
        <meta httpEquiv="Content-Language" content="pt-BR" />
        
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nobrelobo.com/services/desenvolvimento-web" />
        <meta property="og:title" content="Desenvolvimento Web Profissional | Sites e Aplicações Web | Nobre Lobo" />
        <meta property="og:description" content="Desenvolvemos sites profissionais, e-commerces e aplicações web com React, Next.js e tecnologias modernas. Sites responsivos, rápidos e otimizados para SEO." />
        <meta property="og:image" content="https://nobrelobo.com/images/og-desenvolvimento-web.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nobre Lobo" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nobrelobo.com/services/desenvolvimento-web" />
        <meta name="twitter:title" content="Desenvolvimento Web Profissional | Sites e Aplicações Web | Nobre Lobo" />
        <meta name="twitter:description" content="Desenvolvemos sites profissionais, e-commerces e aplicações web com React, Next.js e tecnologias modernas. Sites responsivos, rápidos e otimizados para SEO." />
        <meta name="twitter:image" content="https://nobrelobo.com/images/og-desenvolvimento-web.jpg" />
        
        {/* Meta Tags Adicionais */}
        <meta name="theme-color" content="#ECC80B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nobre Lobo" />
        
        {/* Core Web Vitals - Preload de Fonte Crítica */}
        <link rel="preload" as="font" type="font/woff2" href="/fonts/unbounded.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/poppins.woff2" crossOrigin="anonymous" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics 4 com Consent Mode */}
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        
        
        
        
        {/* Schema de Autor/Especialista (E-E-A-T) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Equipe Nobre Lobo",
            "jobTitle": "Desenvolvedores Web Sênior",
            "worksFor": {
              "@type": "Organization",
              "name": "Nobre Lobo",
              "url": "https://nobrelobo.com"
            },
            "knowsAbout": ["Desenvolvimento Web", "React", "Next.js", "SEO", "Marketing Digital"],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Certificação em React",
                "credentialCategory": "certification"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Certificação em SEO",
                "credentialCategory": "certification"
              }
            ],
            "alumniOf": {
              "@type": "Organization",
              "name": "Universidade de Tecnologia"
            },
            "award": "Melhor Agência Digital de Tijucas, SC 2024"
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Desenvolvimento Web Profissional",
            "description": "Desenvolvemos sites profissionais, e-commerces e aplicações web com React, Next.js e tecnologias modernas. Sites responsivos, rápidos e otimizados para SEO.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nobre Lobo",
              "url": "https://nobrelobo.com",
              "logo": "https://nobrelobo.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "SC",
                "addressLocality": "Tijucas"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-48-99999-9999",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              }
            },
            "serviceType": "Desenvolvimento Web",
            "areaServed": "Brasil",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Desenvolvimento Web",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Websites Corporativos",
                    "description": "Criamos websites profissionais que representam a identidade da sua marca"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Avançado",
                    "description": "Desenvolvemos plataformas de e-commerce completas com foco em conversão"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Aplicações Web",
                    "description": "Criamos aplicações web personalizadas que automatizam processos"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "description": "Desenvolvimento web profissional com tecnologias modernas",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
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
                "name": "Desenvolvimento Web",
                "item": "https://nobrelobo.com/services/desenvolvimento-web"
              }
            ]
          })}
        </script>
        
        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Desenvolvimento Web Profissional | Nobre Lobo",
            "description": "Desenvolvemos sites profissionais, e-commerces e aplicações web com React, Next.js e tecnologias modernas.",
            "url": "https://nobrelobo.com/services/desenvolvimento-web",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Nobre Lobo",
              "url": "https://nobrelobo.com"
            },
            "about": {
              "@type": "Service",
              "name": "Desenvolvimento Web"
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <nav className="py-4 bg-black/20" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-white/70">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li className="text-white/40">/</li>
            <li><a href="/services" className="hover:text-primary transition-colors">Serviços</a></li>
            <li className="text-white/40">/</li>
            <li className="text-primary font-medium">Desenvolvimento Web</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section Personalizada */}
      <HeroSection />
      
      {/* Serviços Section */}
      <ServicesSection />
      
      {/* Portfólio Section */}
      <PortfolioSection />
      
      {/* CTA Personalizado */}
      <CustomCTASection />
      
      {/* FAQ usando o componente FaqAccordion */}
      <FaqAccordion 
        title={<>Dúvidas sobre <span className="text-primary">Desenvolvimento Web</span></>}
        subtitle="Respondemos às perguntas mais comuns sobre nossos serviços de desenvolvimento web. Se você não encontrar a resposta que procura, entre em contato conosco."
        badge="FAQ"
        items={faqItems}
        floatingTitleText="Perguntas"
      />
      
      {/* Seção de Contato (mantida do layout original) */}
    </Layout>
  );
};

export default DesenvolvimentoWebPage; 