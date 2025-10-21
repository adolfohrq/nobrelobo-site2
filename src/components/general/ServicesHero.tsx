import React from 'react'
import HeroPages from './HeroPages'

const ServicesHero = () => {
  return (
    <HeroPages
      title="NOSSOS <br />SERVIÇOS<span class='text-primary'>.</span>"
      subtitle="Soluções estratégicas e inovadoras para impulsionar sua presença digital e transformar resultados."
      badge="Soluções Personalizadas"
      backgroundImage="/lobo-hero-services.jpg"
      height="h-[50vh] sm:h-[55vh] md:h-[60vh]"
      imageStyle={{
        objectFit: "cover",
        objectPosition: "center",
        brightness: "110",
        contrast: "20",
        scale: 1
      }}
    />
  )
}

export default ServicesHero 