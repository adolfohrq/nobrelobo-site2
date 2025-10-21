import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

// Interface para os itens de FAQ
export interface FaqItem {
  question: string;
  answer: string;
}

// Interface para as props do componente
interface FaqSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  badge?: string;
  items: FaqItem[];
  className?: string;
}

/**
 * Componente reutilizável de FAQ
 * @param {FaqSectionProps} props - Propriedades do componente
 * @returns {JSX.Element} - Componente de FAQ
 */
const FaqSection: React.FC<FaqSectionProps> = ({
  title = <>Perguntas <span className="text-primary">Frequentes</span></>,
  subtitle = "Respostas para as dúvidas mais comuns sobre nossos serviços.",
  badge = "FAQ",
  items,
  className = ""
}) => {
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
        <SectionHeader 
          title={title}
          subtitle={subtitle}
          badge={badge}
          iconComponent={defaultIcon}
        />
        
        {/* Lista de perguntas e respostas */}
        <div className="max-w-3xl mx-auto mt-16">
          {items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="p-6 bg-white/5">
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-4">Q:</span>
                  <h3 className="text-xl font-gilroy font-bold text-white">{faq.question}</h3>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-4">A:</span>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 