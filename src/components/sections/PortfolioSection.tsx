import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useDragControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../general/SectionHeader';

// Keyframes para animação de brilho
const shimmerKeyframes = `
@keyframes shimmerEffect {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0% 0;
  }
}
`;

// Tipos para os projetos do portfólio
interface PortfolioItem {
  id: number;
  title: string;
  category: 'branding' | 'social-media' | 'websites' | 'videos';
  image: string;
  client: string;
  description: string;
  year: string;
}

// Dados de exemplo para o portfólio
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Identidade Visual Moderna",
    category: "branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000",
    client: "Café Aroma",
    description: "Redesenho completo da marca com foco em sustentabilidade e modernidade",
    year: "2023"
  },
  {
    id: 2,
    title: "Campanha de Lançamento",
    category: "branding",
    image: "https://images.unsplash.com/photo-1600775508114-5c30cf911a40?q=80&w=1000",
    client: "Tech Solutions",
    description: "Identidade visual para lançamento de produto inovador no mercado",
    year: "2023"
  },
  {
    id: 3,
    title: "Estratégia de Conteúdo",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000",
    client: "Moda Express",
    description: "Planejamento e produção de conteúdo para Instagram e TikTok",
    year: "2023"
  },
  {
    id: 4,
    title: "Campanha Sazonal",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
    client: "Beleza Natural",
    description: "Estratégia de conteúdo para campanha de verão com influenciadores",
    year: "2022"
  },
  {
    id: 5,
    title: "E-commerce Responsivo",
    category: "websites",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000",
    client: "Moda Sustentável",
    description: "Desenvolvimento de loja online com foco em experiência do usuário",
    year: "2023"
  },
  {
    id: 6,
    title: "Portal Corporativo",
    category: "websites",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000",
    client: "Construtora Horizonte",
    description: "Website institucional com área de cliente e integração com CRM",
    year: "2022"
  }
];

const PortfolioSection: React.FC = () => {
  // Estado para controlar a categoria ativa
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Ref para a largura da janela
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Refs para animações baseadas em scroll
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  
  // Estado para navegação do carrossel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  
  // Estados para controle de arrastar com mouse
  const dragControls = useDragControls();
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Filtra os itens com base na categoria selecionada
  const filteredItems = activeCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  // Categorias para as abas
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'branding', label: 'Branding' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'websites', label: 'Websites' },
    { id: 'videos', label: 'Vídeos' }
  ];

  // Função para avançar no carrossel com transição suave para o início
  const nextSlide = () => {
    if (currentSlide < filteredItems.length * 2 - 1) {
      setCurrentSlide(prev => prev + 1);
      // Se chegamos ao final do segundo conjunto, voltar ao primeiro conjunto após a animação
      if (currentSlide >= filteredItems.length * 2 - 2) {
        setTimeout(() => {
          const carousel = document.querySelector('.carousel-inner') as HTMLElement;
          if (carousel) {
            carousel.style.transition = 'none';
            setCurrentSlide(currentSlide % filteredItems.length + 1);
            setTimeout(() => {
              if (carousel) carousel.style.transition = '';
            }, 50);
          }
        }, 500);
      }
    } else {
      // Voltar ao início
      setCurrentSlide(0);
    }
  };
  
  // Função para voltar no carrossel com transição suave para o final
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      // Se chegamos ao início, voltar ao final após a animação
      if (currentSlide <= 1) {
        setTimeout(() => {
          const carousel = document.querySelector('.carousel-inner') as HTMLElement;
          if (carousel) {
            carousel.style.transition = 'none';
            setCurrentSlide(filteredItems.length + (currentSlide - 1));
            setTimeout(() => {
              if (carousel) carousel.style.transition = '';
            }, 50);
          }
        }, 500);
      }
    } else {
      // Ir para o final
      setCurrentSlide(filteredItems.length - 1);
    }
  };
  
  // Função para ir para um slide específico
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Verificar quantos itens mostrar por vez com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      if (window.innerWidth < 480) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    // Inicializar
    handleResize();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Limpar listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Autoplay do carrossel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused && isInView) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    
    return () => clearInterval(interval);
  }, [isPaused, currentSlide, filteredItems.length, isInView, itemsPerView]);
  
  // Resetar o slide quando a categoria mudar
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);
  
  // Efeito para lidar com o final da transição do carrossel
  useEffect(() => {
    const handleTransitionEnd = () => {
      // Se chegamos ao final, resetamos para o início
      if (currentSlide >= filteredItems.length) {
        const carousel = document.querySelector('.carousel-inner') as HTMLElement;
        if (carousel) {
          carousel.style.transition = 'none';
          setCurrentSlide(0);
          
          setTimeout(() => {
            if (carousel) carousel.style.transition = '';
          }, 50);
        }
      }
    };
    
    const carousel = document.querySelector('.carousel-inner');
    if (carousel) {
      carousel.addEventListener('transitionend', handleTransitionEnd);
    }
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentSlide, filteredItems.length]);
  
  // Eventos de toque para dispositivos móveis
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    
    if (diff > 50) {
      nextSlide();
      setIsTouching(false);
    } else if (diff < -50) {
      prevSlide();
      setIsTouching(false);
    }
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    setTimeout(() => setIsPaused(false), 1000);
  };
  
  // Função para iniciar o arraste do mouse
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
    setIsDragging(true);
    
    if ('touches' in e) {
      setDragStartX(e.touches[0].clientX);
    } else {
      setDragStartX(e.clientX);
    }
  };
  
  // Função para controlar o arraste do mouse
  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = dragStartX - currentX;
    
    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };
  
  // Função para finalizar o arraste do mouse
  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };
  
  return (
    <section ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden">
      {/* Injetar os keyframes de animação */}
      <style dangerouslySetInnerHTML={{ __html: shimmerKeyframes }} />
      
      <div className="relative z-10">
        {/* Cabeçalho da seção usando SectionHeader */}
        <div className="container mx-auto px-4 mb-10">
          <SectionHeader 
            title={<>Projetos que <span className="text-primary">transformam</span></>}
            subtitle="Soluções criativas que destacam nossos clientes no mercado, com foco em resultados reais e inovação."
            badge="Nosso Portfólio"
            floatingTitleText="PORTFÓLIO"
            iconComponent={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
              </svg>
            }
          />
        </div>
        
        {/* Filtro de categorias - Redesenhado para ser mais sutil */}
        <div className="container mx-auto px-4 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((category) => (
            <button
              key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentSlide(0); // Reset slide ao mudar categoria
                }}
                className={`group relative px-4 py-2 sm:px-3 sm:py-1.5 text-xs font-medium transition-all duration-300 overflow-hidden ${
                activeCategory === category.id
                    ? 'text-primary'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {/* Indicador de ativo */}
                {activeCategory === category.id && (
                  <motion.div 
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Efeito hover */}
                <span className="relative z-10">{category.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </motion.div>
        </div>
        
        {/* Carrossel de projetos - Largura total */}
        <div className="relative w-full">
          <motion.div 
            ref={carouselRef}
            className="overflow-visible relative w-full cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleDragEnd();
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            style={{ 
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              WebkitPerspective: 1000,
              perspective: 1000,
              WebkitTransform: "translate3d(0, 0, 0)",
              transform: "translate3d(0, 0, 0)"
            }}
          >
            <motion.div
              className="flex carousel-inner" 
              initial={false}
              animate={{
                x: `calc(-${(currentSlide % filteredItems.length) * 100}% / ${itemsPerView})`
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
                mass: 1
              }}
            >
              {/* Itens do carrossel principal */}
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 relative z-10 pr-3 md:pr-4"
                  style={{ 
                    width: itemsPerView === 1 
                      ? 'min(85vw, 320px)' 
                      : itemsPerView === 2 
                        ? 'calc((100vw - 64px) / 2 - 12px)' 
                        : 'calc((100vw - 96px) / 3 - 12px)',
                    maxWidth: itemsPerView === 1 ? "340px" : "360px",
                    minWidth: itemsPerView === 1 ? "280px" : "220px",
                    willChange: "transform",
                    transform: "translate3d(0, 0, 0)"
                  }}
                >
                  <div className="group relative rounded-lg overflow-visible aspect-[4/5] bg-white/5 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]">
                    {/* Efeito de brilho amarelo nos cantos */}
                    <motion.div 
                      className="absolute -inset-[1px] rounded-lg z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        background: "linear-gradient(90deg, transparent, transparent, transparent, rgba(236,200,11,0.08))",
                        backgroundSize: "400% 100%",
                        animation: "shimmerEffect 3s infinite"
                      }}
                    />
                    
                    {/* Brilhos nos cantos */}
                    <motion.div 
                      className="absolute -top-1 -right-1 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 z-0"
                      style={{
                        background: "radial-gradient(circle, rgba(236,200,11,0.15) 0%, transparent 70%)",
                      }}
                    />
                    
                    <motion.div 
                      className="absolute -bottom-1 -left-1 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-0"
                      style={{
                        background: "radial-gradient(circle, rgba(236,200,11,0.1) 0%, transparent 70%)",
                      }}
                    />
                    
                    {/* Card com conteúdo */}
                    <motion.div 
                      className="w-full h-full relative z-10 bg-black/30 rounded-lg"
                      whileHover={{
                        boxShadow: "0 0 25px 2px rgba(236,200,11,0.1)",
                        transition: { duration: 0.5 }
                      }}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <motion.img 
                  src={item.image} 
                  alt={item.title} 
                          className="w-full h-full object-cover transition-all duration-700"
                          whileHover={{ 
                            scale: 1.05,
                            filter: "brightness(1.05)",
                            transition: { duration: 0.7, ease: "easeOut" }
                          }}
                />
              </div>
              
                      {/* Gradiente overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 from-10% via-black/75 via-30% to-black/10 to-90% opacity-90 rounded-lg group-hover:from-black/95 group-hover:via-black/85 group-hover:via-60% group-hover:to-black/40 transition-all duration-700 ease-in-out" />
                  
                      {/* Borda melhorada */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg overflow-hidden z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute inset-px rounded-lg border-2 border-transparent bg-clip-padding" 
                          style={{
                            background: "linear-gradient(135deg, rgba(236,200,11,0.2), transparent 50%, rgba(236,200,11,0.1))",
                          }}
                        />
                      </motion.div>
                      
                      {/* Borda padrão */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-primary/20 transition-colors duration-500 z-10"
                      />
                      
                      {/* Conteúdo */}
                      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end z-20 overflow-visible">
                        <motion.div 
                          initial={{ y: 5 }}
                          whileHover={{ y: 0, transition: { duration: 0.3 } }}
                          className="transform transition-transform duration-300 ease-out"
                        >
                          {/* Tag de categoria */}
                          <div className="flex items-center mb-2 transform transition-transform duration-300 ease-out">
                            <span className="text-primary font-medium uppercase tracking-wider text-[10px] px-2 py-0.5 bg-primary/10 rounded-sm">
                      {item.category.replace('-', ' ')}
                    </span>
                          </div>
                          
                          {/* Título do projeto */}
                          <h3 className="text-white text-base sm:text-lg font-gilroy font-bold mb-1.5 group-hover:text-primary transition-all duration-300 drop-shadow-sm">
                            {item.title}
                          </h3>
                          
                          {/* Cliente */}
                          <p className="text-white/80 text-xs mb-2 transition-all duration-300 group-hover:text-white/95">{item.client}</p>
                          
                          {/* Linha decorativa amarela */}
                          <motion.div 
                            className="h-px bg-primary/30 w-0 group-hover:w-1/2 transition-all duration-500 mb-2"
                          />
                          
                          {/* Descrição com animação de entrada */}
                          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out overflow-visible transform translate-y-2 group-hover:translate-y-0">
                            <p className="text-white/90 text-xs mb-3 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          
                          {/* Link para detalhes */}
                          <div className="inline-flex items-center overflow-visible">
                            <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-primary text-black text-xs font-medium rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out"
                            >
                              Ver projeto
                              <span className="ml-1.5 inline-block text-xs">→</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicar os primeiros cards para criar o efeito de loop contínuo */}
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`duplicate-${item.id}-${index}`}
                  className="flex-shrink-0 relative z-10 pr-3 md:pr-4"
                  style={{ 
                    width: itemsPerView === 1 
                      ? 'min(85vw, 320px)' 
                      : itemsPerView === 2 
                        ? 'calc((100vw - 64px) / 2 - 12px)' 
                        : 'calc((100vw - 96px) / 3 - 12px)',
                    maxWidth: itemsPerView === 1 ? "340px" : "360px",
                    minWidth: itemsPerView === 1 ? "280px" : "220px",
                    willChange: "transform",
                    transform: "translate3d(0, 0, 0)"
                  }}
                >
                  <div className="group relative rounded-lg overflow-visible aspect-[4/5] bg-white/5 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]">
                    {/* Efeito de brilho amarelo nos cantos */}
                    <motion.div 
                      className="absolute -inset-[1px] rounded-lg z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        background: "linear-gradient(90deg, transparent, transparent, transparent, rgba(236,200,11,0.08))",
                        backgroundSize: "400% 100%",
                        animation: "shimmerEffect 3s infinite"
                      }}
                    />
                    
                    {/* Brilhos nos cantos */}
                    <motion.div 
                      className="absolute -top-1 -right-1 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 z-0"
                      style={{
                        background: "radial-gradient(circle, rgba(236,200,11,0.15) 0%, transparent 70%)",
                      }}
                    />
                    
                    <motion.div 
                      className="absolute -bottom-1 -left-1 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-0"
                      style={{
                        background: "radial-gradient(circle, rgba(236,200,11,0.1) 0%, transparent 70%)",
                      }}
                    />
                    
                    {/* Card com conteúdo */}
                    <motion.div 
                      className="w-full h-full relative z-10 bg-black/30 rounded-lg"
                      whileHover={{
                        boxShadow: "0 0 25px 2px rgba(236,200,11,0.1)",
                        transition: { duration: 0.5 }
                      }}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <motion.img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-all duration-700"
                          whileHover={{ 
                            scale: 1.05,
                            filter: "brightness(1.05)",
                            transition: { duration: 0.7, ease: "easeOut" }
                          }}
                        />
                      </div>
                      
                      {/* Gradiente overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 from-10% via-black/75 via-30% to-black/10 to-90% opacity-90 rounded-lg group-hover:from-black/95 group-hover:via-black/85 group-hover:via-60% group-hover:to-black/40 transition-all duration-700 ease-in-out" />
                  
                      {/* Borda melhorada */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg overflow-hidden z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute inset-px rounded-lg border-2 border-transparent bg-clip-padding" 
                          style={{
                            background: "linear-gradient(135deg, rgba(236,200,11,0.2), transparent 50%, rgba(236,200,11,0.1))",
                          }}
                        />
                      </motion.div>
                      
                      {/* Borda padrão */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-primary/20 transition-colors duration-500 z-10"
                      />
                      
                      {/* Conteúdo */}
                      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end z-20 overflow-visible">
                        <motion.div 
                          initial={{ y: 5 }}
                          whileHover={{ y: 0, transition: { duration: 0.3 } }}
                          className="transform transition-transform duration-300 ease-out"
                        >
                          {/* Tag de categoria */}
                          <div className="flex items-center mb-2 transform transition-transform duration-300 ease-out">
                            <span className="text-primary font-medium uppercase tracking-wider text-[10px] px-2 py-0.5 bg-primary/10 rounded-sm">
                              {item.category.replace('-', ' ')}
                            </span>
                          </div>
                          
                          {/* Título do projeto */}
                          <h3 className="text-white text-base sm:text-lg font-gilroy font-bold mb-1.5 group-hover:text-primary transition-all duration-300 drop-shadow-sm">
                            {item.title}
                          </h3>
                          
                          {/* Cliente */}
                          <p className="text-white/80 text-xs mb-2 transition-all duration-300 group-hover:text-white/95">{item.client}</p>
                          
                          {/* Linha decorativa amarela */}
                          <motion.div 
                            className="h-px bg-primary/30 w-0 group-hover:w-1/2 transition-all duration-500 mb-2"
                          />
                          
                          {/* Descrição com animação de entrada */}
                          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out overflow-visible transform translate-y-2 group-hover:translate-y-0">
                            <p className="text-white/90 text-xs mb-3 leading-relaxed">
                    {item.description}
                  </p>
                          </div>
                  
                          {/* Link para detalhes */}
                          <div className="inline-flex items-center overflow-visible">
                  <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-primary text-black text-xs font-medium rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out"
                            >
                              Ver projeto
                              <span className="ml-1.5 inline-block text-xs">→</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Botões grandes laterais para navegação - Ocultos em mobile */}
            {filteredItems.length > itemsPerView && (
              <div className="hidden md:block">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-24 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-start pl-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  aria-label="Slide anterior"
                >
                  <svg 
                    className="w-6 h-6 text-white/80" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-24 bg-gradient-to-l from-black/50 to-transparent flex items-center justify-end pr-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  aria-label="Próximo slide"
                >
                  <svg 
                    className="w-6 h-6 text-white/80" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>

          {/* Botões de navegação do carrossel */}
          {filteredItems.length > itemsPerView && (
            <div className="container mx-auto px-4">
              <div className="flex justify-between mt-6">
                <motion.button
                  onClick={prevSlide}
                  className="group w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <svg 
                    className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                {/* Controle de autoplay */}
                <motion.button
                  onClick={() => setIsPaused(!isPaused)}
                  className={`group w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-white/10 ${isPaused ? 'bg-primary/20 border-primary/30' : 'bg-white/5'} backdrop-blur-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {isPaused ? (
                    <svg 
                      className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg 
                      className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </motion.button>
                
                <motion.button
                  onClick={nextSlide}
                  className="group w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <svg 
                    className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          )}
        </div>
        
        {/* Indicadores do slide (bolhas) */}
        {filteredItems.length > itemsPerView && (
          <div className="container mx-auto px-4">
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: filteredItems.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    currentSlide % filteredItems.length === index ? 'bg-primary w-8 sm:w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para o slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Botão de ação - Mais minimalista */}
        <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link to="/portfolio" className="group inline-flex items-center">
              <span className="relative text-white text-lg font-medium overflow-hidden">
                Ver todos os projetos
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
              <motion.svg 
                className="ml-3 w-5 h-5 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 1.5,
                  repeatDelay: 1
                }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </Link>
        </motion.div>
        </div>
      </div>
      
      {/* Divisor com gradiente */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default PortfolioSection; 