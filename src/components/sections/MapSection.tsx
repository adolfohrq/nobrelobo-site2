import React from 'react';
import { motion } from 'framer-motion';

const MapSection: React.FC = () => {
  return (
    <section className="py-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-gilroy font-bold text-white mb-4">Nossa Localização</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Estamos localizados em um ponto estratégico da cidade, com fácil acesso e estacionamento.
          Venha nos visitar para conversarmos pessoalmente sobre seu projeto.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl overflow-hidden border border-white/10 relative h-[400px]"
      >
        {/* Iframe do Google Maps */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098373344233!2d-46.65644282356176!3d-23.564609060726554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689097077872!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da Nobre Lobo"
          className="invert-[.90] brightness-90 contrast-90 grayscale"
        ></iframe>
        
        {/* Sobreposição estilizada para combinar com o tema */}
        <div className="absolute inset-0 pointer-events-none border-[16px] border-[#111] opacity-30"></div>
      </motion.div>
    </section>
  );
};

export default MapSection; 