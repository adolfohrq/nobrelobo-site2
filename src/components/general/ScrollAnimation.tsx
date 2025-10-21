import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionStyle, TargetAndTransition } from 'framer-motion';

// Definindo tipos para os offsets de scroll
type ScrollOffset = 
  | "start end" 
  | "end start" 
  | "start start" 
  | "end end" 
  | "center center" 
  | "center end" 
  | "center start" 
  | "start center" 
  | "end center"
  | [number, number]
  | number;

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  style?: MotionStyle;
  
  // Configurações de animação
  yRange?: [number, number];
  opacityRange?: [number, number, number?];
  scaleRange?: [number, number];
  
  // Configurações de offset do scroll
  offsetStart?: ScrollOffset;
  offsetEnd?: ScrollOffset;
  
  // Configurações adicionais
  once?: boolean;
  disabled?: boolean;
}

/**
 * Componente reutilizável para animação baseada em scroll
 * 
 * @example
 * <ScrollAnimation>
 *   <div>Conteúdo que será animado durante o scroll</div>
 * </ScrollAnimation>
 * 
 * @example Com configurações personalizadas
 * <ScrollAnimation 
 *   yRange={[100, -100]} 
 *   opacityRange={[0, 1, 0.8]} 
 *   scaleRange={[0.8, 1.1]}
 * >
 *   <div>Conteúdo com animação personalizada</div>
 * </ScrollAnimation>
 */
const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  style = {},
  yRange = [50, -50],
  opacityRange = [0, 1, 1],
  scaleRange = [0.9, 1],
  offsetStart = "start end",
  offsetEnd = "end start",
  once = false,
  disabled = false,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Se a animação estiver desativada, apenas renderiza o conteúdo
  if (disabled) {
    return (
      <div className={className} style={style as React.CSSProperties}>
        {children}
      </div>
    );
  }
  
  // Configuração da animação baseada no scroll
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: [offsetStart, offsetEnd]
  });

  // Transformações baseadas no progresso do scroll
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  
  // Configuração de opacidade com 2 ou 3 pontos
  const opacity = opacityRange.length === 2
    ? useTransform(scrollYProgress, [0, 1], opacityRange)
    : useTransform(
        scrollYProgress, 
        [0, opacityRange.length > 2 ? 0.3 : 0.5, opacityRange.length > 2 ? 0.6 : 1], 
        [opacityRange[0], opacityRange[1], opacityRange[2] || opacityRange[1]]
      );
  
  const scale = useTransform(scrollYProgress, [0, 0.3], scaleRange);
  
  return (
    <motion.div 
      ref={elementRef}
      className={className}
      style={{ 
        ...style,
        y, 
        opacity, 
        scale 
      }}
      viewport={once ? { once: true } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 