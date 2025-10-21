import React, { useRef } from 'react';
import ScrollAnimation from '../general/ScrollAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Componente de exemplo que demonstra diferentes formas de usar o ScrollAnimation
 */
const ScrollAnimationExamples: React.FC = () => {
  // Referência para o exemplo de animação horizontal
  const horizontalAnimRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalAnimRef,
    offset: ["start end", "end start"]
  });
  
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Exemplos de Animação com Scroll</h2>
        
        {/* Exemplo 1: Animação básica */}
        <div className="mb-32">
          <h3 className="text-xl font-bold mb-8 text-center">Animação Básica</h3>
          <ScrollAnimation 
            className="bg-white/5 p-8 rounded-xl max-w-2xl mx-auto"
          >
            <h4 className="text-lg font-bold mb-4">Animação Padrão</h4>
            <p className="mb-4">
              Este é um exemplo da animação padrão do componente ScrollAnimation.
              Ele usa os valores padrão para yRange, opacityRange e scaleRange.
            </p>
            <p>
              À medida que você rola a página, este elemento se move para cima,
              aumenta sua opacidade e escala suavemente.
            </p>
          </ScrollAnimation>
        </div>
        
        {/* Exemplo 2: Animação personalizada */}
        <div className="mb-32">
          <h3 className="text-xl font-bold mb-8 text-center">Animação Personalizada</h3>
          <ScrollAnimation 
            className="bg-primary/10 p-8 rounded-xl max-w-2xl mx-auto"
            yRange={[100, -50]}
            opacityRange={[0, 1, 0.8]}
            scaleRange={[0.8, 1.1]}
          >
            <h4 className="text-lg font-bold mb-4">Valores Personalizados</h4>
            <p className="mb-4">
              Este exemplo usa valores personalizados para criar uma animação mais dramática.
              O elemento se move mais (de 100px para -50px), tem uma curva de opacidade personalizada,
              e escala de 0.8 para 1.1.
            </p>
            <p>
              Você pode ajustar esses valores para criar diferentes efeitos de animação.
            </p>
          </ScrollAnimation>
        </div>
        
        {/* Exemplo 3: Animação com conteúdo complexo */}
        <div className="mb-32">
          <h3 className="text-xl font-bold mb-8 text-center">Conteúdo Complexo</h3>
          <ScrollAnimation 
            className="bg-white/5 p-8 rounded-xl max-w-4xl mx-auto"
            yRange={[30, -20]}
            opacityRange={[0, 1]}
            scaleRange={[0.95, 1]}
          >
            <h4 className="text-lg font-bold mb-6">Animando Conteúdo Complexo</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  className="bg-white/10 p-6 rounded-lg"
                  whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-primary text-2xl font-bold mb-2">Item {item}</div>
                  <p className="text-white/70">
                    Você pode animar elementos complexos, incluindo grids e componentes interativos.
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Exemplo 4: Múltiplas animações em sequência */}
        <div className="mb-32">
          <h3 className="text-xl font-bold mb-8 text-center">Animações em Sequência</h3>
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <ScrollAnimation 
                key={item}
                className="bg-white/5 p-6 rounded-xl max-w-2xl mx-auto"
                yRange={[50, 0]}
                opacityRange={[0, 1]}
                scaleRange={[0.9, 1]}
                // Cada elemento tem seu próprio offset para criar um efeito em cascata
                offsetStart={[0, 0.85 - (item * 0.05)]}
                offsetEnd={[1, 0.5 - (item * 0.05)]}
              >
                <h4 className="text-lg font-bold mb-2">Elemento {item} em Sequência</h4>
                <p>
                  Este elemento faz parte de uma sequência de animações.
                  Cada elemento tem um offset ligeiramente diferente, criando um efeito em cascata.
                </p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
        
        {/* Exemplo 5: Animação horizontal */}
        <div className="mb-32" ref={horizontalAnimRef}>
          <h3 className="text-xl font-bold mb-8 text-center">Animação Horizontal</h3>
          <motion.div 
            className="bg-white/5 p-8 rounded-xl max-w-4xl mx-auto overflow-hidden"
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
            }}
          >
            <h4 className="text-lg font-bold mb-4">Movimento Horizontal</h4>
            <p>
              Este exemplo demonstra como você pode criar animações horizontais
              usando o componente motion.div com propriedades de estilo personalizadas.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationExamples; 