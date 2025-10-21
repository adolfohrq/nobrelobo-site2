import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../general/SectionHeader';

// Ícones simplificados para os serviços
const ServiceIcon: React.FC<{ name: string }> = ({ name }) => {
  // Classe comum para todos os ícones
  const iconClass = "w-6 h-6 text-primary";
  
  switch (name) {
    case 'seo':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
        </svg>
      );
    case 'design':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 3H9C7.05 5.17 6 8.02 6 11C6 13.98 7.05 16.83 9 19H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3H15C16.95 5.17 18 8.02 18 11C18 13.98 16.95 16.83 15 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16V15C5.17 16.95 8.02 18 11 18C13.98 18 16.83 16.95 19 15V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 8.00001V9.00001C5.17 7.05001 8.02 6.00001 11 6.00001C13.98 6.00001 16.83 7.05001 19 9.00001V8.00001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'automation':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'marketing':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'web':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 8H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'ai':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'branding':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M12 20L9 17H7C5.93913 17 4.92172 16.5786 4.17157 15.8284C3.42143 15.0783 3 14.0609 3 13V7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V13C21 14.0609 20.5786 15.0783 19.8284 15.8284C19.0783 16.5786 18.0609 17 17 17H15L12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'social':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'ads':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 16H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

// Categoria dos serviços
const categories = [
  { id: "todos", name: "Todos" },
  { id: "marketing", name: "Marketing" },
  { id: "design", name: "Design" },
  { id: "tech", name: "Tecnologia" }
];

// Definições do serviço com categorias
const serviceData = [
  {
    id: 1,
    title: "SEO Estratégico",
    icon: "seo",
    slug: "seo-estrategico",
    category: "marketing",
    description: "Estratégias para melhorar seu posicionamento nos buscadores."
  },
  {
    id: 2,
    title: "Design Gráfico",
    icon: "design",
    slug: "design-grafico",
    category: "design",
    description: "Criações visuais que comunicam a essência da sua marca."
  },
  {
    id: 3,
    title: "Automação de Marketing",
    icon: "automation",
    slug: "automacao-de-marketing",
    category: "marketing",
    description: "Ganhe eficiência com fluxos automatizados de comunicação."
  },
  {
    id: 4,
    title: "Inteligência Artificial",
    icon: "ai",
    slug: "inteligencia-artificial",
    category: "tech",
    description: "Soluções avançadas para impulsionar seu negócio."
  },
  {
    id: 5,
    title: "Tráfego Pago",
    icon: "ads",
    slug: "trafego-pago",
    category: "marketing",
    description: "Maximize seus resultados com campanhas otimizadas."
  },
  {
    id: 7,
    title: "Marketing Digital",
    icon: "marketing",
    slug: "marketing-digital",
    category: "marketing",
    description: "Estratégias integradas para sua presença online."
  },
  {
    id: 8,
    title: "Desenvolvimento Web",
    icon: "web",
    slug: "desenvolvimento-web",
    category: "tech",
    description: "Sites e plataformas com foco em conversão e experiência."
  },
  {
    id: 9,
    title: "Social Media",
    icon: "social",
    slug: "social-media",
    category: "marketing",
    description: "Gestão estratégica das suas redes sociais."
  },
  {
    id: 10,
    title: "Branding",
    icon: "branding",
    slug: "branding",
    category: "design",
    description: "Construção e fortalecimento da identidade da sua marca."
  }
];

const ServicesSection: React.FC = () => {
  // Estado para filtrar serviços por categoria
  const [activeCategory, setActiveCategory] = useState("todos");
  
  // Filtrar serviços baseado na categoria selecionada
  const filteredServices = activeCategory === "todos" 
    ? serviceData 
    : serviceData.filter(service => service.category === activeCategory);

  // Referência para animação de scroll
  const sectionRef = useRef<HTMLElement>(null);
  
  // Efeitos de scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [50, 0, 0]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-28"
      id="servicos"
    >
      {/* Removidos elementos decorativos e background */}
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
        <SectionHeader
          title="Transformamos visão em resultados"
          subtitle="Conheça nosso portfólio completo de serviços especializados para impulsionar sua marca no universo digital."
          badge="Nossos Serviços"
          floatingTitleText="Serviços"
          iconComponent={
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        
        {/* Filtro de categorias */}
        <div className="flex justify-center mt-12 mb-14">
          <div className="p-1 bg-white/5 rounded-full border border-white/10 flex">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-white/70 hover:text-white"
                }`}
                whileHover={{ scale: activeCategory !== category.id ? 1.05 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Grid de serviços com animação de transição */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <div className="relative bg-white/5 rounded-2xl border border-white/10 p-6 h-full 
                                hover:border-primary/40 transition-all duration-500 flex flex-col">
                    {/* Ícone do serviço */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 
                                  group-hover:bg-primary/20 transition-all duration-500 z-10 relative">
                      <div className="relative z-10 transform group-hover:scale-125 transition-transform duration-500">
                        <ServiceIcon name={service.icon} />
                      </div>
                    </div>
                    
                    {/* Conteúdo do serviço */}
                    <div className="z-10 flex-grow">
                      <h3 className="text-xl font-unbounded font-bold text-white mb-3 
                                    group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/70 mb-6 text-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Botão de ação */}
                    <div className="flex items-center text-primary font-medium text-sm z-10 mt-auto">
                      <span className="mr-2 group-hover:mr-4 transition-all duration-300">Conhecer</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" 
                          className="transform group-hover:translate-x-2 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Botão "Ver todos os serviços" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-primary text-primary-foreground font-unbounded font-bold py-4 px-10 rounded-xl 
                      transition-all duration-300 relative"
            >
              <span className="relative z-10">Explorar Todos os Serviços</span>
              <svg 
                className="ml-3 w-5 h-5 relative z-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Removidos efeitos decorativos do fundo */}
    </section>
  );
};

export default ServicesSection; 