import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const ServiceProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Descoberta",
      description: "Realizamos uma análise profunda do seu negócio, objetivos e público-alvo para entender suas necessidades específicas."
    },
    {
      number: "02",
      title: "Estratégia",
      description: "Desenvolvemos um plano estratégico personalizado com base nos insights coletados, definindo metas claras e mensuráveis."
    },
    {
      number: "03",
      title: "Criação",
      description: "Nossa equipe de especialistas trabalha na criação e desenvolvimento das soluções definidas na estratégia."
    },
    {
      number: "04",
      title: "Implementação",
      description: "Colocamos em prática todas as estratégias e soluções desenvolvidas, garantindo uma execução impecável."
    },
    {
      number: "05",
      title: "Análise",
      description: "Monitoramos constantemente os resultados, analisando métricas e KPIs para avaliar o desempenho das estratégias."
    },
    {
      number: "06",
      title: "Otimização",
      description: "Com base nos dados coletados, realizamos ajustes e melhorias contínuas para maximizar os resultados."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] transform -translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-gilroy font-medium mb-6"
          >
            <span className="flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B"/>
              </svg>
              Nosso Processo
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-gilroy font-bold text-white mb-6"
          >
            Como <span className="text-primary">Trabalhamos</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Nosso processo estruturado garante resultados consistentes e de alta qualidade para cada projeto que desenvolvemos.
          </motion.p>
        </div>
        
        {/* Timeline do processo */}
        <div className="relative">
          {/* Linha do tempo */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
          
          {/* Etapas do processo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative cursor-pointer ${
                  activeStep === index 
                    ? 'z-10' 
                    : 'z-0'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Indicador da etapa na linha do tempo (visível apenas em telas médias e grandes) */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-primary text-black scale-125' 
                      : 'bg-white/10 text-white'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Card da etapa */}
                <div className={`mt-8 md:mt-16 p-6 rounded-xl transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-primary/20 border border-primary/30' 
                    : 'bg-white/5 border border-white/10 hover:border-primary/20'
                }`}>
                  {/* Número da etapa (visível apenas em telas pequenas) */}
                  <div className="md:hidden flex items-center mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      activeStep === index 
                        ? 'bg-primary text-black' 
                        : 'bg-white/10 text-white'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-sm text-white/50">Etapa {index + 1}</span>
                  </div>
                  
                  {/* Número estilizado */}
                  <div className="text-4xl font-gilroy font-bold opacity-20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Título da etapa */}
                  <h3 className={`text-xl font-gilroy font-bold mb-3 ${
                    activeStep === index ? 'text-primary' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Descrição da etapa */}
                  <p className="text-white/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess; 