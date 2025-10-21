import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaqItem } from './FaqSection';
import { Plus, ChevronDown } from 'lucide-react';

// Interface para categorias de FAQ
export interface FaqCategory {
  id: string;
  name: string;
}

// Interface estendida para itens de FAQ com categoria
export interface FaqItemWithCategory extends FaqItem {
  category?: string;
}

// Interface para as props do componente
interface FaqAccordionProps {
  title?: React.ReactNode;
  subtitle?: string;
  badge?: string;
  items: FaqItemWithCategory[];
  categories?: FaqCategory[];
  className?: string;
  showIcon?: boolean;
  maxInitialVisible?: number;
  floatingTitleText?: string;
}

/**
 * Componente de FAQ aprimorado com funcionalidade de acordeão, categorias e pesquisa
 * @param {FaqAccordionProps} props - Propriedades do componente
 * @returns {JSX.Element} - Componente de FAQ com acordeão
 */
const FaqAccordion: React.FC<FaqAccordionProps> = ({
  title = <>Perguntas <span className="text-primary">Frequentes</span></>,
  subtitle = "Respostas para as dúvidas mais comuns sobre nossos serviços.",
  badge = "FAQ",
  items,
  categories = [],
  className = "",
  showIcon = true,
  maxInitialVisible = 5,
  floatingTitleText = "FAQ"
}) => {
  // Estado para controlar qual item está expandido
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // Estado para categoria selecionada
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Estado para mostrar todos os itens
  const [showAll, setShowAll] = useState(false);
  
  // Referências para os elementos de FAQ
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Filtrar itens com base na categoria
  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === null || item.category === selectedCategory;
    return matchesCategory;
  });
  
  // Limitar itens visíveis se não estiver mostrando todos
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, maxInitialVisible);
  
  // Função para alternar a expansão de um item
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  // Efeito para rolar para o item expandido
  useEffect(() => {
    if (expandedIndex !== null && faqRefs.current[expandedIndex]) {
      const yOffset = -100; // Ajuste para compensar elementos fixos no topo
      const element = faqRefs.current[expandedIndex];
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [expandedIndex]);
  
  // Ícone padrão para o cabeçalho da seção
  const defaultIcon = (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91894 12.4272 7.03872C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17H12.01" stroke="#ECC80B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className={`py-20 relative z-10 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        {(title || subtitle) && (
          <SectionHeader 
            title={title}
            subtitle={subtitle}
            badge={badge}
            iconComponent={showIcon ? defaultIcon : undefined}
            floatingTitleText={floatingTitleText}
          />
        )}
        
        {/* Filtro de categorias */}
        {categories.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mt-12 mb-8"
          >
            <div className="flex justify-center flex-wrap gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-4 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === null 
                    ? 'bg-primary text-black shadow-lg shadow-primary/20' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                Todas
              </motion.button>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-4 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-primary text-black shadow-lg shadow-primary/20' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Lista de perguntas e respostas em formato de acordeão */}
        <div className="max-w-3xl mx-auto mt-8">
          {visibleItems.length > 0 ? (
            <>
              {visibleItems.map((faq, index) => (
                <motion.div
                  key={index}
                  ref={el => faqRefs.current[index] = el}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`mb-5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                    expandedIndex === index 
                      ? 'border-primary/30 shadow-lg shadow-primary/5 bg-gradient-to-br from-primary/5 to-transparent' 
                      : 'hover:border-white/20'
                  }`}
                >
                  {/* Cabeçalho da pergunta (clicável) */}
                  <div 
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      expandedIndex === index 
                        ? 'bg-white/5' 
                        : 'bg-white/[0.02] hover:bg-white/[0.03]'
                    }`}
                    onClick={() => toggleExpand(index)}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start flex-1 gap-4">
                        <motion.span 
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                            expandedIndex === index 
                              ? 'bg-primary text-black' 
                              : 'bg-primary/10 text-primary'
                          }`}
                          animate={{ 
                            scale: expandedIndex === index ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          Q
                        </motion.span>
                        <h3 className={`text-xl font-gilroy font-bold transition-all duration-300 ${
                          expandedIndex === index ? 'text-primary' : 'text-white'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ 
                          rotate: expandedIndex === index ? 45 : 0,
                          backgroundColor: expandedIndex === index ? 'rgba(236, 200, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <Plus size={18} className="text-primary" />
                      </motion.div>
                    </div>
                    
                    {/* Badge de categoria se existir */}
                    {faq.category && categories.length > 0 && (
                      <div className="mt-2 ml-14">
                        <span className="inline-block px-4 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {categories.find(c => c.id === faq.category)?.name || faq.category}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Conteúdo da resposta (expansível) */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        id={`faq-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0">
                          <div className="flex items-start ml-14">
                            <div className="prose prose-invert prose-primary max-w-none">
                              <p className="text-white/80 leading-relaxed pt-6">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              {/* Botão "Ver mais" se houver mais itens para mostrar */}
              {filteredItems.length > maxInitialVisible && !showAll && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 border border-white/10 hover:border-primary/30"
                  >
                    Ver mais {filteredItems.length - maxInitialVisible} perguntas
                    <ChevronDown size={18} className="ml-2" />
                  </motion.button>
                </motion.div>
              )}
              
              {/* Botão "Ver menos" se estiver mostrando todos os itens */}
              {showAll && filteredItems.length > maxInitialVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(false)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 border border-white/10 hover:border-primary/30"
                  >
                    Ver menos
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 rotate-180">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white/5 rounded-2xl border border-white/10"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 text-primary/50">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-gilroy font-bold text-white mb-2">Nenhuma pergunta encontrada</h3>
              <p className="text-white/60">Tente selecionar outra categoria para encontrar o que procura.</p>
            </motion.div>
          )}
        </div>
        
        {/* Seção de contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center"
        >
          <h3 className="text-2xl font-gilroy font-bold text-white mb-3">Não encontrou o que procurava?</h3>
          <p className="text-white/70 mb-6">
            Entre em contato conosco e teremos prazer em responder suas perguntas.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Fale Conosco
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqAccordion; 