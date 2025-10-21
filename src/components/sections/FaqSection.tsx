import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
};

const FaqSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'Quais serviços a Nobre Lobo oferece?',
      answer: 'A Nobre Lobo oferece uma ampla gama de serviços de marketing digital e design, incluindo desenvolvimento de sites, branding, marketing de conteúdo, SEO, gestão de mídias sociais, e-mail marketing, design gráfico e consultoria estratégica.'
    },
    {
      question: 'Qual é o prazo médio para a conclusão de um projeto?',
      answer: 'O prazo varia conforme a complexidade e escopo do projeto. Websites simples podem levar 2-3 semanas, enquanto projetos mais complexos como e-commerces ou rebrandings completos podem levar 2-3 meses. Fornecemos um cronograma detalhado no início de cada projeto.'
    },
    {
      question: 'Vocês trabalham com empresas de pequeno porte?',
      answer: 'Sim, atendemos empresas de todos os portes. Temos pacotes e soluções personalizadas para pequenas empresas, startups e profissionais autônomos, além de atendermos médias e grandes empresas.'
    },
    {
      question: 'Como funciona o processo de início de um novo projeto?',
      answer: 'Nosso processo começa com uma reunião de briefing para entender suas necessidades. Em seguida, desenvolvemos uma proposta detalhada com escopo, prazos e orçamento. Após aprovação, iniciamos o planejamento estratégico e a execução do projeto, mantendo comunicação constante durante todo o processo.'
    },
    {
      question: 'Quais métricas vocês utilizam para medir resultados?',
      answer: 'Utilizamos diversas métricas dependendo dos objetivos do projeto, incluindo tráfego orgânico, taxas de conversão, engajamento nas redes sociais, posições no Google, retorno sobre investimento (ROI), geração de leads e taxa de abertura de e-mails. Fornecemos relatórios periódicos detalhando o desempenho.'
    },
    {
      question: 'Vocês oferecem suporte após a conclusão do projeto?',
      answer: 'Sim, oferecemos suporte contínuo após a conclusão dos projetos. Temos pacotes de manutenção mensal para websites, suporte técnico para plataformas implementadas e consultoria estratégica contínua para garantir que sua presença digital continue evoluindo.'
    }
  ];

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-gilroy font-bold text-white mb-4">Perguntas Frequentes</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos de trabalho.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left p-6 border rounded-xl flex justify-between items-center ${
                expandedIndex === index ? 'bg-white/5 border-primary/30' : 'border-white/10 hover:bg-white/5'
              } transition-colors duration-300`}
            >
              <span className="font-gilroy font-bold text-white text-lg">{faq.question}</span>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/70"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-2 text-white/70 border-b border-l border-r border-white/10 rounded-b-xl">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection; 