import React from 'react'
import { motion } from 'framer-motion'

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
    <section className="relative min-h-screen flex items-center py-32">
      <div className="container mx-auto px-4">
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
              {floatingBadgeText && (
                <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur-xl px-6 py-3 rounded-full">
                  <span className="text-black font-bold text-sm">{floatingBadgeText}</span>
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
            {badge && (
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                {badge}
              </span>
            )}
            
            <h2 className="text-5xl md:text-6xl font-gilroy font-bold mb-8 leading-tight">
              {title}
              <span className="text-primary block mt-2">{titleHighlight}</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-6">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <span className="text-primary group-hover:text-black font-bold text-xl transition-colors">
                        {item.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
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