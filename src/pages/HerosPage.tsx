import React from 'react';
import Layout from '../components/general/Layout';
import { motion } from 'framer-motion';
import ModernHero from '../components/general/ModernHero';
import MinimalHero from '../components/heros/MinimalHero';
import GradientHero from '../components/heros/GradientHero';
import ParticlesHero from '../components/heros/ParticlesHero';
import VideoHero from '../components/heros/VideoHero';
import NeumorphicHero from '../components/heros/NeumorphicHero';
import GlassmorphismHero from '../components/heros/GlassmorphismHero';

const HerosPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero principal da página - ModernHero */}
      <ModernHero 
        title="Galeria de Heros"
        subtitle="Uma coleção de componentes hero para sua escolha"
        badge="Showcases"
        backgroundImage="https://images.unsplash.com/photo-1557682260-96773eb01377?q=80&w=2029"
        align="center"
      />
      
      {/* MinimalHero - em tela cheia */}
      <section className="w-full">
        <motion.div
          className="absolute left-6 top-[100vh] z-20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl text-white/60 text-sm border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <code className="font-mono">MinimalHero</code>
        </motion.div>
        
        <MinimalHero 
          title="Design Simples e Impactante"
          subtitle="Menos é mais. Este componente hero minimalista destaca sua mensagem com simplicidade e elegância, removendo tudo que é desnecessário."
          ctaText="Conheça o serviço"
          align="left"
        />
      </section>
      
      {/* GradientHero - em tela cheia */}
      <section className="w-full">
        <motion.div
          className="absolute left-6 z-20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl text-white/60 text-sm border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <code className="font-mono">GradientHero</code>
        </motion.div>
        
        <GradientHero 
          title="Experiência Visual em Gradiente"
          subtitle="Cores vibrantes que se movem e transformam, criando uma experiência visual dinâmica e moderna que atrai o olhar."
          ctaText="Explorar recursos"
          align="center"
        />
      </section>
      
      {/* ParticlesHero - em tela cheia */}
      <section className="w-full">
        <motion.div
          className="absolute left-6 z-20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl text-white/60 text-sm border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <code className="font-mono">ParticlesHero</code>
        </motion.div>
        
        <ParticlesHero 
          title="Inovação em Movimento"
          subtitle="Partículas interativas que criam conexões visuais, simbolizando as infinitas possibilidades e a natureza interconectada da tecnologia moderna."
          ctaText="Descubra mais"
          align="left"
        />
      </section>
      
      {/* VideoHero - em tela cheia */}
      <section className="w-full">
        <motion.div
          className="absolute left-6 z-20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl text-white/60 text-sm border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <code className="font-mono">VideoHero</code>
        </motion.div>
        
        <VideoHero 
          title="Contexto em Movimento"
          subtitle="Vídeos de fundo criam uma experiência imersiva e rica em contexto, permitindo contar histórias complexas em segundos."
          ctaText="Assista agora"
          align="right"
        />
      </section>
      
      {/* NeumorphicHero - em tela cheia */}
      <section className="w-full">
        <motion.div
          className="absolute left-6 z-20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl text-white/60 text-sm border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <code className="font-mono">NeumorphicHero</code>
        </motion.div>
        
        <NeumorphicHero 
          title="Tátil e Tridimensional"
          subtitle="O estilo neumórfico traz profundidade e uma sensação tátil à interface, com sombras suaves que criam uma experiência visual reconfortante."
          ctaText="Sinta a diferença"
          align="center"
        />
      </section>
      
      {/* GlassmorphismHero - em tela cheia */}
      <section className="w-full">
        <motion.div
          className="absolute left-6 z-20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl text-white/60 text-sm border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <code className="font-mono">GlassmorphismHero</code>
        </motion.div>
        
        <GlassmorphismHero 
          title="Transparência e Profundidade"
          subtitle="O efeito de vidro cria camadas de profundidade e uma sensação etérea, moderna e elegante que se adapta perfeitamente a qualquer conteúdo."
          ctaText="Comece agora"
          align="left"
        />
      </section>
      
      {/* Background global com efeitos */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Efeito de gradiente */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-primary/5 blur-[150px] rounded-full"></div>
        
        {/* Grade de fundo */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ECC80B" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Partículas flutuantes */}
        <div className="absolute w-20 h-20 rounded-full bg-primary/5 blur-xl top-1/4 left-1/4 animate-float-slow"></div>
        <div className="absolute w-16 h-16 rounded-full bg-primary/10 blur-xl bottom-1/3 right-1/3 animate-float-slower"></div>
        <div className="absolute w-12 h-12 rounded-full bg-primary/5 blur-lg top-1/2 right-1/4 animate-float"></div>
      </div>
    </Layout>
  );
};

export default HerosPage; 