import React, { useState } from 'react';
import Layout from '../components/general/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/general/ServiceCard';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';
import ContactSection from '../components/sections/ContactSection';
import ServicesHero from '../components/general/ServicesHero';
import { 
  SeoIcon, 
  DesignIcon, 
  AutomationIcon, 
  AIIcon, 
  PaidTrafficIcon, 
  ProjectManagementIcon,
  MarketingIcon,
  WebDevIcon,
  SocialMediaIcon,
  BrandingIcon
} from '../components/icons/ServiceIcons';
import SectionHeader from '@/components/general/SectionHeader';

const ServicesPage: React.FC = () => {
  // Estado para controlar qual serviço está expandido
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // Toggle para expandir/colapsar serviço
  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  // Dados dos serviços
  const services = [
    {
      id: 1,
      title: "SEO Estratégico",
      slug: "seo-estrategico",
      description: "Aprimoramos seu site para melhorar a posição nos motores de busca. Utilizamos técnicas avançadas de SEO on-page e off-page para aumentar a visibilidade e atrair tráfego qualificado.",
      icon: <SeoIcon />,
      features: [
        "Análise técnica de SEO",
        "Otimização de palavras-chave",
        "Estratégia de link building",
        "Otimização de conteúdo",
        "Acompanhamento de métricas e posicionamento"
      ]
    },
    {
      id: 2,
      title: "Design Gráfico",
      slug: "design-grafico",
      description: "Criamos materiais digitais e impressos que comunicam de forma clara e atraente. Nosso design é estratégico, voltado para fortalecer a identidade da sua marca e gerar impacto visual.",
      icon: <DesignIcon />,
      features: [
        "Identidade visual",
        "Material impresso",
        "Peças para mídias sociais",
        "Banners e apresentações",
        "Infográficos e ilustrações"
      ]
    },
    {
      id: 3,
      title: "Automação de Marketing",
      slug: "automacao-de-marketing",
      description: "Implementamos soluções inteligentes para automatizar processos, reduzir tarefas repetitivas e otimizar campanhas, permitindo decisões mais eficazes baseadas em dados.",
      icon: <AutomationIcon />,
      features: [
        "Configuração de fluxos automatizados",
        "Segmentação avançada de público",
        "Nutrição de leads personalizada",
        "Integração de plataformas",
        "Relatórios automáticos de performance"
      ]
    },
    {
      id: 4,
      title: "Inteligência Artificial",
      slug: "inteligencia-artificial",
      description: "Aplicamos IA para otimizar estratégias, personalizar conteúdos e aprimorar a análise de dados, tornando sua comunicação mais eficiente e direcionada.",
      icon: <AIIcon />,
      features: [
        "Chatbots e assistentes virtuais",
        "Recomendação de conteúdo personalizado",
        "Análise preditiva de marketing",
        "Geração de conteúdo otimizado",
        "Segmentação avançada de clientes"
      ]
    },
    {
      id: 5,
      title: "Tráfego Pago",
      slug: "trafego-pago",
      description: "Gerenciamos campanhas de anúncios pagos em diversas plataformas, aumentando conversões e maximizando o ROI. Criamos estratégias personalizadas para atingir o público certo no momento certo.",
      icon: <PaidTrafficIcon />,
      features: [
        "Google Ads e Meta Ads",
        "LinkedIn Ads",
        "Remarketing estratégico",
        "Landing pages otimizadas",
        "Análise de performance e ROI"
      ]
    },
    {
      id: 7,
      title: "Marketing Digital",
      slug: "marketing-digital",
      description: "Desenvolvemos estratégias digitais personalizadas para aumentar a presença online da sua marca, gerar engajamento e converter oportunidades em resultados reais. Focamos em métricas mensuráveis para garantir o sucesso das campanhas.",
      icon: <MarketingIcon />,
      features: [
        "Estratégia Digital Integrada",
        "Inbound Marketing",
        "Campanhas de Conversão",
        "Marketing de Conteúdo",
        "Análise de Métricas e KPIs"
      ]
    },
    {
      id: 8,
      title: "Desenvolvimento Web",
      slug: "desenvolvimento-web",
      description: "Criamos sites responsivos, dinâmicos e otimizados para performance e usabilidade. Utilizamos CMS WordPress para flexibilidade e tecnologias como HTML, CSS, React e JavaScript para soluções sob medida.",
      icon: <WebDevIcon />,
      features: [
        "Sites Responsivos",
        "E-commerce e Lojas Virtuais",
        "Sistemas Web Personalizados",
        "Desenvolvimento WordPress",
        "Aplicações React e JavaScript"
      ]
    },
    {
      id: 9,
      title: "Social Media",
      slug: "social-media",
      description: "Planejamos e produzimos conteúdos estratégicos para fortalecer a presença digital da sua marca, aumentar o engajamento e criar conexões genuínas com seu público.",
      icon: <SocialMediaIcon />,
      features: [
        "Gestão de Redes Sociais",
        "Calendário Editorial",
        "Produção de Conteúdo",
        "Estratégia de Engajamento",
        "Relatórios de Performance"
      ]
    },
    {
      id: 10,
      title: "Branding",
      slug: "branding",
      description: "Construímos identidades visuais impactantes que traduzem a essência do seu negócio, alinhadas com os valores e objetivos da sua empresa para gerar reconhecimento e diferenciação no mercado.",
      icon: <BrandingIcon />,
      features: [
        "Desenvolvimento de Marca",
        "Identidade Visual",
        "Manual de Marca",
        "Posicionamento Estratégico",
        "Design de Experiência"
      ]
    }
  ];

  return (
    <Layout>
      {/* Novo ServicesHero substitui o PageLayout header */}
      <ServicesHero />
      

      {/* Seção de detalhes dos serviços */}
      <section className="py-24 relative overflow-hidden">
        {/* Padrão de grade decorativo removido */}
        {/* Efeitos de luz removidos */}

        <div className="container mx-auto px-4 relative z-10">
          {/* Título e subtítulo da seção usando SectionHeader */}
          <SectionHeader
            title="Entregamos Resultados Reais"
            subtitle="Explore cada serviço em detalhes e descubra como podemos ajudar sua empresa a alcançar o próximo nível com soluções personalizadas e orientadas por dados."
            badge="Conheça em Detalhes"
            iconComponent={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B"/>
              </svg>
            }
            floatingTitleText="RESULTADOS"
          />
        
          {/* Layout responsivo: Desktop com sidebar, Mobile com accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Barra de navegação de serviços (tabs) - Desktop */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="sticky top-24 space-y-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      expandedService === service.id 
                        ? 'bg-white/5 border-l-4 border-primary shadow-lg shadow-primary/10'
                        : 'hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      expandedService === service.id 
                        ? 'bg-primary/20 text-primary border-2 border-primary' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-lg font-gilroy font-bold flex-1 ${
                      expandedService === service.id ? 'text-primary' : 'text-white'
                    }`}>{service.title}</h3>
                    <motion.div
                      animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/50">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Área de conteúdo detalhado do serviço - Desktop */}
            <div className="lg:col-span-8 hidden lg:block">
              <AnimatePresence mode="wait">
                {expandedService ? (
                  <motion.div
                    key={expandedService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden"
                  >
                    {/* Elementos decorativos de fundo */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
                    
                    {services
                      .filter(service => service.id === expandedService)
                      .map(service => (
                        <div key={service.id}>
                          <div className="flex items-center mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mr-6 text-primary">
                              {service.icon}
                            </div>
                            <h3 className="text-3xl font-gilroy font-bold text-white">{service.title}</h3>
                          </div>
                          
                          <p className="text-white/80 text-lg mb-10 leading-relaxed border-l-4 border-primary/30 pl-4 py-2">
                            {service.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                              <h4 className="text-primary text-xl font-gilroy font-bold mb-4 flex items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Recursos Inclusos
                              </h4>
                              <ul className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                  <li 
                                    key={featureIndex}
                                    className="flex items-start text-base"
                                  >
                                    <div className="bg-primary/10 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </div>
                                    <span className="text-white/90">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="border border-white/10 rounded-xl p-6 bg-gradient-to-br from-primary/5 to-transparent">
                              <h4 className="text-primary text-xl font-gilroy font-bold mb-4 flex items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                  <path d="M9.663 17H6.75V10.75M13.5 6.25L15.75 10.75L18 6.25M3.75 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V5.25C21.75 4.00736 20.7426 3 19.5 3H3.75C2.50736 3 1.5 4.00736 1.5 5.25V17.25C1.5 18.4926 2.50736 19.5 3.75 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Por que escolher este serviço?
                              </h4>
                              <p className="text-white/70 mb-6">
                                Nossa abordagem é totalmente personalizada e baseada em dados. 
                                Aplicamos as melhores práticas do mercado adaptadas às necessidades 
                                específicas da sua empresa.
                              </p>
                              <div className="flex flex-col space-y-4">
                                <div className="flex items-center">
                                  <div className="w-10 h-1 bg-primary rounded-full mr-3"></div>
                                  <span className="text-white/80">Resultados mensuráveis</span>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-10 h-1 bg-primary rounded-full mr-3"></div>
                                  <span className="text-white/80">Implementação ágil</span>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-10 h-1 bg-primary rounded-full mr-3"></div>
                                  <span className="text-white/80">Suporte dedicado</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Link Saiba Mais */}
                          <div className="mt-8 pt-6 border-t border-white/10">
                            <Link to={`/services/${service.slug}`}>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-primary text-primary-foreground font-gilroy font-bold py-4 px-8 rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center group"
                              >
                                <span className="mr-2">Saiba Mais</span>
                                <svg 
                                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl p-8 border border-white/10 h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                        <path d="M8 3H9C9.55228 3 10 3.44772 10 4V4C10 4.55228 9.55228 5 9 5H5C4.44772 5 4 4.55228 4 4V4C4 3.44772 4.44772 3 5 3H6M8 3V4M8 3H6M6 3V4M14 3H15C15.5523 3 16 3.44772 16 4V4C16 4.55228 15.5523 5 15 5H11C10.4477 5 10 4.55228 10 4V4C10 3.44772 10.4477 3 11 3H12M14 3V4M14 3H12M12 3V4M20 3H21C21.5523 3 22 3.44772 22 4V4C22 4.55228 21.5523 5 21 5H17C16.4477 5 16 4.55228 16 4V4C16 3.44772 16.4477 3 17 3H18M20 3V4M20 3H18M18 3V4M20 15L4 15M5 11H4C3.44772 11 3 10.5523 3 10V4C3 3.44772 3.44772 3 4 3H9M9 21H4C3.44772 21 3 20.5523 3 20V10M5 21V15M5 15V11M15 21H9M9 21V15M9 15V11M9 11H15M9 15H15M21 11H15M15 21V15M15 15V11M15 11H21M15 15H21M21 21H15M21 21V15M21 15V11C21 10.4477 20.5523 10 20 10H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-gilroy font-bold text-white mb-4">Selecione um serviço</h3>
                    <p className="text-white/70 mb-8 max-w-md">
                      Escolha um dos nossos serviços no menu lateral para visualizar todos os detalhes 
                      e descobrir como podemos ajudar sua empresa a crescer.
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/50 animate-bounce">
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Layout Mobile - Accordion */}
            <div className="lg:hidden space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border border-white/10 rounded-xl overflow-hidden"
                >
                  {/* Header do serviço */}
                  <motion.div
                    className={`flex items-center p-4 cursor-pointer transition-all duration-300 ${
                      expandedService === service.id 
                        ? 'bg-white/5 border-b border-white/10'
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      expandedService === service.id 
                        ? 'bg-primary/20 text-primary border-2 border-primary' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-gilroy font-bold ${
                        expandedService === service.id ? 'text-primary' : 'text-white'
                      }`}>{service.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{service.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/50">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Conteúdo expandido */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-gradient-to-br from-white/5 to-transparent">
                          <div className="mb-6">
                            <h4 className="text-primary text-lg font-gilroy font-bold mb-3 flex items-center">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Recursos Inclusos
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li 
                                  key={featureIndex}
                                  className="flex items-start text-sm"
                                >
                                  <div className="bg-primary/10 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </div>
                                  <span className="text-white/90">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="border-t border-white/10 pt-4">
                            <h4 className="text-primary text-lg font-gilroy font-bold mb-3 flex items-center">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M9.663 17H6.75V10.75M13.5 6.25L15.75 10.75L18 6.25M3.75 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V5.25C21.75 4.00736 20.7426 3 19.5 3H3.75C2.50736 3 1.5 4.00736 1.5 5.25V17.25C1.5 18.4926 2.50736 19.5 3.75 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Por que escolher este serviço?
                            </h4>
                            <p className="text-white/70 text-sm mb-4">
                              Nossa abordagem é totalmente personalizada e baseada em dados. 
                              Aplicamos as melhores práticas do mercado adaptadas às necessidades 
                              específicas da sua empresa.
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
                                <span className="text-white/80 text-sm">Resultados mensuráveis</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
                                <span className="text-white/80 text-sm">Implementação ágil</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
                                <span className="text-white/80 text-sm">Suporte dedicado</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Link Saiba Mais - Mobile */}
                          <div className="mt-6 pt-4 border-t border-white/10">
                            <Link to={`/services/${service.slug}`}>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary text-primary-foreground font-gilroy font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center group text-sm"
                              >
                                <span className="mr-2">Saiba Mais</span>
                                <svg 
                                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </section>
      
      {/* Seção de CTA */}
      <CtaSection />
      
    </Layout>
  );
};

export default ServicesPage; 