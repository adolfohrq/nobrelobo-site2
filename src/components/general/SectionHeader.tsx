import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  badge?: string;
  iconComponent?: React.ReactNode;
  floatingTitleText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  iconComponent,
  floatingTitleText,
}) => {
  return (
    <div className="text-center mb-16 relative">
      {/* Texto flutuante de fundo */}
      {floatingTitleText && (
        <motion.div 
          className="absolute -top-20 left-0 right-0 text-center pointer-events-none select-none z-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[120px] md:text-[180px] lg:text-[220px] font-bold font-gilroy text-white uppercase tracking-tighter">
            {floatingTitleText}
          </span>
        </motion.div>
      )}
      
      {/* Ícone estilizado */}
      {iconComponent && (
        <motion.div 
          className="mx-auto mb-4 w-16 h-16 relative"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center">
              {iconComponent}
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-6"
        >
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            <span className="text-primary font-gilroy font-medium text-sm uppercase tracking-widest">
              {badge}
            </span>
          </div>
        </motion.div>
      )}
      
      {/* Título principal */}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-gilroy font-bold text-white mb-6 tracking-tighter leading-tight relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      
      {/* Linha decorativa */}
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "auto" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </motion.div>
      
      {/* Subtítulo */}
      {subtitle && (
        <motion.p 
          className="text-white/70 text-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader; 