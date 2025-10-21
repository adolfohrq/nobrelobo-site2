import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeader from '../general/SectionHeader'
import { Target, Award, Users, TrendingUp } from 'lucide-react'

interface MissionMetric {
  number: string
  label: string
  icon?: React.ReactNode
}

interface MissionSectionProps {
  badge?: string
  title: string
  titleHighlight: string
  description: string
  image: string
  imageAlt?: string
  metrics?: MissionMetric[]
  className?: string
}

const MissionSection: React.FC<MissionSectionProps> = ({
  badge = "Nossa Missão",
  title,
  titleHighlight,
  description,
  image,
  imageAlt = "Nossa Missão",
  metrics = [
    { number: '8+', label: 'Anos de Experiência', icon: <Award className="w-6 h-6" /> },
    { number: '200+', label: 'Projetos Entregues', icon: <Target className="w-6 h-6" /> }
  ],
  className = ""
}) => {
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
      className={`relative py-32 overflow-hidden ${className}`}
      id="missao"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full filter blur-[120px]"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
         {/* Header da seção usando SectionHeader */}
         <SectionHeader
           title={
             <>
               {title}
               <span className="text-primary block">{titleHighlight}</span>
             </>
           }
           subtitle={description}
           badge={badge}
           floatingTitleText="MISSÃO"
           iconComponent={
             <Target className="w-8 h-8 text-primary" />
           }
         />

        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute top-8 left-8 bg-primary/90 backdrop-blur-xl px-6 py-3 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-black font-bold text-sm">Nossa Missão</span>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Mission Card melhorado */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                  {/* Elementos decorativos de fundo */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 text-primary">
                        <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-gilroy font-bold text-white">
                        Nossa Missão
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg border-l-4 border-primary/30 pl-4 py-2">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid melhorado */}
                <div className="grid grid-cols-2 gap-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group-hover:bg-white/10">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          {metric.icon}
                        </div>
                        <div className="text-4xl font-gilroy font-bold text-primary mb-2">
                          {metric.number}
                        </div>
                        <div className="text-white/70 text-sm font-medium">
                          {metric.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="pt-6"
                >
                  <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl p-6">
                    <h4 className="text-primary text-lg font-gilroy font-bold mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Resultados Comprovados
                    </h4>
                    <p className="text-white/70 text-sm mb-4">
                      Nossa missão é traduzida em números reais e resultados mensuráveis 
                      que impactam positivamente o crescimento dos nossos clientes.
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span className="mr-2">Conheça nossos cases</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MissionSection
