import React from 'react';
import Layout from '../../components/general/Layout';

// Importando os componentes específicos da página de Design Gráfico
import HeroSection from '../../components/sections/design-grafico/HeroSection';
import ServicesSection from '../../components/sections/design-grafico/ServicesSection';
import ToolsSection from '../../components/sections/design-grafico/ToolsSection';

const DesignGraficoPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section Personalizada */}
      <HeroSection />
      
      {/* Serviços Section */}
      <ServicesSection />
      
      {/* Ferramentas Section */}
      <ToolsSection />
      
    </Layout>
  );
};

export default DesignGraficoPage; 