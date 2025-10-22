import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../general/SectionHeader'
import { TrendingUp } from 'lucide-react'

interface JourneyStep {
  number: string
  title: string
  text: string
}

interface JourneySplitScreenProps {
  badge?: string
  title: string
  titleHighlight: string
  description: string
  image: string
  imageAlt?: string
  floatingBadgeText?: string
  steps: JourneyStep[]
}

const JourneySplitScreen: React.FC<JourneySplitScreenProps> = ({
  badge = 'A Jornada',
  title = 'Cada Marca tem',
  titleHighlight = 'uma Historia',
  description,
  image,
  imageAlt = 'Nossa Jornada',
  floatingBadgeText = '10+ Anos de Experiência',
  steps
}) => {
  return (
    <section className="relative flex items-center py-24 md:py-40 lg:min-h-screen">
      <div className="container mx-auto px-4">
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
          floatingTitleText="JORNADA"
          iconComponent={
            <TrendingUp className="w-8 h-8 text-primary" />
          }
        />
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mt-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Floating Badge */}
              {floatingBadgeText && (
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-primary/90 backdrop-blur-xl px-4 sm:px-5 py-1.5 sm:py-2 rounded-full">
                  <span className="text-black font-bold text-[10px] sm:text-xs">{floatingBadgeText}</span>
                </div>
              )}
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
            <div className="space-y-4">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <span className="text-primary group-hover:text-black font-bold text-base sm:text-lg transition-colors">
                        {item.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default JourneySplitScreen