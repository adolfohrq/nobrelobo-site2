import React from 'react';
import Layout from './Layout';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
}

/**
 * Componente de layout para páginas internas
 * @param {PageLayoutProps} props - Propriedades do componente
 * @returns {JSX.Element} - Componente de layout
 */
const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle = '', 
  badge = '' 
}) => {
  return (
    <Layout>
      {/* Header da página */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Imagem de fundo do lobo com efeito de overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/90 to-[#111]/80 z-10"></div>
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <img 
              src="/animals-wolves-78751.jpg" 
              alt="Nobre Lobo" 
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 items-center">
            <div className="text-center lg:text-left pb-10 lg:pb-0">
              {badge && (
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-gilroy font-medium mb-6">
                  <span className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B"/>
                    </svg>
                    {badge}
                  </span>
                </div>
              )}
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-gilroy font-bold text-white leading-tight mb-6">
                {title.split(' ').map((word, index) => (
                  <span 
                    key={index}
                    className={`block ${index === 1 ? 'text-primary' : ''}`}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              
              {subtitle && (
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Simbolo do lobo estilizado */}
        <div className="absolute bottom-10 right-10 opacity-10 w-32 h-32 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L70 30 L90 20 L80 40 L90 60 L70 70 L50 90 L30 70 L10 60 L20 40 L10 20 L30 30 Z" 
                  fill="none" 
                  stroke="#ECC80B" 
                  strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* Conteúdo da página */}
      {children}
    </Layout>
  );
};

export default PageLayout; 