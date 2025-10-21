import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeader from '../general/SectionHeader'
import { Target, Sparkles, Zap, TrendingUp, ChevronRight, CheckCircle } from 'lucide-react'

interface OurProcessSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

const OurProcessSection: React.FC<OurProcessSectionProps> = ({
  id,
  title = "Nosso Processo",
  subtitle = "Uma metodologia testada e comprovada que transforma ideias em resultados excepcionais. Cada etapa é cuidadosamente planejada para maximizar o sucesso do seu projeto."
}) => {
  // Referência para animação de scroll
  const sectionRef = useRef<HTMLElement>(null);
  
  // Efeitos de scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);

  // Etapas do processo
  const processSteps = [
    {
      step: "01",
      icon: <Target className="w-8 h-8" />,
      title: "Descoberta & Análise",
      description: "Mergulhamos profundamente no seu negócio, mercado e objetivos para criar uma estratégia sólida e personalizada.",
      color: "from-blue-500/20 to-blue-500/5",
      features: [
        "Análise completa do mercado",
        "Auditoria da presença digital atual",
        "Identificação de oportunidades",
        "Definição de objetivos SMART"
      ],
      duration: "1-2 semanas",
      deliverables: ["Relatório de análise", "Roadmap estratégico", "Benchmarking competitivo"]
    },
    {
      step: "02",
      icon: <Sparkles className="w-8 h-8" />,
      title: "Estratégia & Planejamento",
      description: "Desenvolvemos um plano personalizado com métricas claras, cronograma detalhado e estratégias específicas.",
      color: "from-purple-500/20 to-purple-500/5",
      features: [
        "Estratégia de marca personalizada",
        "Plano de conteúdo estratégico",
        "Cronograma de execução",
        "Definição de KPIs"
      ],
      duration: "1 semana",
      deliverables: ["Estratégia completa", "Cronograma detalhado", "Plano de conteúdo"]
    },
    {
      step: "03",
      icon: <Zap className="w-8 h-8" />,
      title: "Execução & Implementação",
      description: "Implementamos com precisão, utilizando as melhores práticas e tecnologias do mercado para entregar resultados.",
      color: "from-yellow-500/20 to-yellow-500/5",
      features: [
        "Desenvolvimento de campanhas",
        "Criação de conteúdo premium",
        "Implementação técnica",
        "Configuração de ferramentas"
      ],
      duration: "2-4 semanas",
      deliverables: ["Campanhas ativas", "Conteúdo publicado", "Sistemas configurados"]
    },
    {
      step: "04",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Otimização & Crescimento",
      description: "Monitoramos, analisamos e refinamos continuamente para maximizar resultados e garantir crescimento sustentável.",
      color: "from-green-500/20 to-green-500/5",
      features: [
        "Monitoramento contínuo",
        "Análise de performance",
        "Otimizações baseadas em dados",
        "Relatórios detalhados"
      ],
      duration: "Contínuo",
      deliverables: ["Relatórios mensais", "Otimizações implementadas", "ROI comprovado"]
    }
  ];


  // Benefícios da metodologia
  const methodologyBenefits = [
    {
      title: "Metodologia Comprovada",
      description: "Processo testado em mais de 350 projetos com resultados consistentes e mensuráveis."
    },
    {
      title: "Transparência Total",
      description: "Comunicação clara em cada etapa, com relatórios detalhados e acompanhamento próximo."
    },
    {
      title: "Flexibilidade Adaptativa",
      description: "Metodologia que se adapta às necessidades específicas de cada cliente e mercado."
    },
    {
      title: "Resultados Garantidos",
      description: "Comprometemo-nos com resultados mensuráveis e crescimento sustentável do seu negócio."
    }
  ];

  return (
    <section ref={sectionRef} id={id} className="py-28 relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
        {/* Cabeçalho da seção */}
        <SectionHeader
          title={title}
          subtitle={subtitle}
          badge="Nossa Metodologia"
          floatingTitleText="Processo"
          iconComponent={
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />


        {/* Timeline do processo */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Card do processo */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-primary/30 transition-all duration-500 h-full">
                    {/* Gradiente de fundo */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Conteúdo */}
                    <div className="relative z-10">
                      {/* Cabeçalho do step */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-primary text-sm font-bold">{step.step}</span>
                            <span className="text-white/50 text-sm">{step.duration}</span>
                          </div>
                          <h3 className="text-2xl font-gilroy font-bold text-white mb-3">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-white/70 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          Principais Atividades
                        </h4>
                        <ul className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-white/60 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <Target className="w-4 h-4 text-primary mr-2" />
                          Entregas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <span key={deliverableIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seta de conexão (exceto no último) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <ChevronRight className="w-8 h-8 text-primary/30 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefícios da metodologia */}
   


      </motion.div>
    </section>
  )
}

export default OurProcessSection
