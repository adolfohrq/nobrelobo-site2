import React from 'react'
import Layout from '../components/general/Layout'
import Hero from '../components/general/Hero'
import PortfolioSection from '../components/sections/PortfolioSection'
import ContactSection from '../components/sections/ContactSection'
import CtaSection from '../components/sections/CtaSection'
import ServicesSection from '../components/sections/ServicesSection'
import IntroductionSection from '../components/sections/IntroductionSection'
import JourneySplitScreen from '../components/sections/JourneySplitScreen'
import SectionDivider from '../components/general/SectionDivider'

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />


      {/* Journey Section - Component */}
      <JourneySplitScreen
        badge="A Jornada"
        title="Cada Marca tem"
        titleHighlight="uma História"
        description="A sua começa aqui. Com a Nobre Lobo, você não contrata apenas uma agência — você ganha um parceiro estratégico comprometido com seu sucesso."
        image="/lobo-hero-about.jpg"
        imageAlt="Nossa Jornada"
        floatingBadgeText="10+ Anos de Experiência"
        steps={[
          {
            number: '01',
            title: 'Estratégia Personalizada',
            text: 'Cada negócio é único. Criamos soluções sob medida para seus desafios específicos.'
          },
          {
            number: '02',
            title: 'Execução Impecável',
            text: 'Da ideia à implementação, garantimos qualidade em cada detalhe do projeto.'
          },
          {
            number: '03',
            title: 'Resultados Mensuráveis',
            text: 'Acompanhamos métricas reais e ajustamos estratégias para maximizar seu ROI.'
          }
        ]}
      />  

      <SectionDivider />

      <ServicesSection />

      <SectionDivider />

      <PortfolioSection />

      <SectionDivider />

      <ContactSection />
    </Layout>
  )
}

export default HomePage 