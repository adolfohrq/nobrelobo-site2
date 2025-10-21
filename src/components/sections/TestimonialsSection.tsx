import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import SectionHeader from '../general/SectionHeader';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  // Configuração do carrossel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  // Dados dos depoimentos
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      position: "Diretora de Marketing",
      company: "TechSolutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
      content: "A Nobre Lobo transformou completamente nossa presença digital. A estratégia de marketing implementada aumentou nosso tráfego orgânico em 150% e as conversões em 75% em apenas três meses.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Mendes",
      position: "CEO",
      company: "Startup Inovadora",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000",
      content: "Contratar a Nobre Lobo foi a melhor decisão que tomamos para nossa startup. O redesign da nossa marca e site nos posicionou como referência no mercado e atraiu investidores importantes.",
      rating: 5
    },
    {
      id: 3,
      name: "Juliana Costa",
      position: "Gerente de Produto",
      company: "E-commerce Fashion",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
      content: "A equipe da Nobre Lobo entendeu perfeitamente as necessidades do nosso e-commerce. O trabalho de branding e social media aumentou nosso engajamento e vendas de forma impressionante.",
      rating: 4
    },
    {
      id: 4,
      name: "Roberto Almeida",
      position: "Diretor Executivo",
      company: "Construtora Horizonte",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000",
      content: "Mesmo em um setor tradicional como o da construção civil, a Nobre Lobo conseguiu criar uma identidade digital moderna e eficiente, que nos diferenciou da concorrência.",
      rating: 5
    }
  ];
  
  // Renderiza as estrelas de avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill={index < rating ? "#ECC80B" : "none"} 
        stroke={index < rating ? "none" : "#ECC80B"} 
        strokeWidth="2" 
        className="mr-1"
      >
        <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 relative">
      {/* Elementos decorativos removidos para integração com o background global */}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção com SectionHeader para manter consistência */}
        <SectionHeader
          title="O que nossos clientes dizem"
          subtitle="Conheça as experiências de quem já transformou sua presença digital com nossas soluções personalizadas."
          badge="Depoimentos"
          iconComponent={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B"/>
            </svg>
          }
        />
        
        {/* Carrossel de depoimentos */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full"
                  >
                    {/* Aspas decorativas */}
                    <div className="text-primary/20 text-6xl font-serif mb-4">"</div>
                    
                    {/* Conteúdo do depoimento */}
                    <p className="text-white/80 mb-6">
                      {testimonial.content}
                    </p>
                    
                    {/* Avaliação em estrelas */}
                    <div className="flex mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Informações do cliente */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-white/50 text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controles do carrossel */}
          <div className="flex justify-center mt-12 gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Depoimento anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-primary hover:bg-primary/90 transition-colors"
              aria-label="Próximo depoimento"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 