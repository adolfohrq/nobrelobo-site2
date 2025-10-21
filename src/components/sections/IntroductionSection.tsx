import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-24 relative">
      {/* Removidos elementos decorativos de fundo */}
      
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-medium mb-4 inline-flex items-center"
          >
            <span className="bg-primary/20 px-4 py-2 rounded-full">
              SOBRE NÓS
            </span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-gilroy font-bold text-white mb-6"
          >
            Conheça a <span className="text-primary">Nobre Lobo</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            A força e determinação de um lobo alfa transformadas em estratégias digitais que impulsionam sua marca.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-gilroy font-bold text-white mb-6">Transformando <span className="text-primary">Ideias</span> em Resultados Extraordinários</h3>
              
              <p className="text-white/70 mb-6">
                Desde 2018, a Nobre Lobo tem sido pioneira em estratégias digitais inovadoras, 
                combinando criatividade e tecnologia para impulsionar o crescimento de marcas 
                em todo o Brasil.
              </p>
              
              <p className="text-white/70 mb-6">
                Nossa jornada é marcada por desafios superados, soluções criativas e, acima de tudo, 
                resultados extraordinários para nossos clientes. Acreditamos que o sucesso digital 
                vem da combinação perfeita entre estratégia, criatividade e tecnologia.
              </p>
              
              <p className="text-white/70 mb-8">
                Com uma equipe multidisciplinar de especialistas apaixonados pelo que fazem, 
                estamos comprometidos em oferecer soluções personalizadas que não apenas atendem, 
                mas superam as expectativas dos nossos clientes.
              </p>
              
              <motion.a
                href="/sobre"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-primary/20 hover:bg-primary hover:text-primary-foreground text-primary font-bold py-3 px-8 rounded-lg group transition-all duration-300"
              >
                <span>Saiba mais sobre nós</span>
                <svg 
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Imagem e elementos visuais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/rabstol_net_wolf_03.jpg" 
                  alt="Lobo - Símbolo da Nobre Lobo" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-primary font-bold text-sm mb-2">NOSSA FILOSOFIA</div>
                <div className="text-white text-xl font-bold">Força, estratégia e determinação como um lobo alfa</div>
              </div>
            </div>
            
            {/* Componente de estatísticas */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#141414] border border-white/5 rounded-xl p-6 mt-6 grid grid-cols-3 gap-4"
            >
              <div className="text-center">
                <div className="text-primary text-3xl font-bold mb-1">5+</div>
                <div className="text-white/60 text-sm">Anos de experiência</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-primary text-3xl font-bold mb-1">100+</div>
                <div className="text-white/60 text-sm">Projetos realizados</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-3xl font-bold mb-1">98%</div>
                <div className="text-white/60 text-sm">Clientes satisfeitos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Divisor com gradiente */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default IntroductionSection; 