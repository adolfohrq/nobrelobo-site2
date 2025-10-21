import React, { useState, useRef } from 'react';
import Layout from '../components/general/Layout';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import HeroPages from '../components/general/HeroPages';
import { 
  Sparkles, Zap, Target, Users, Heart, TrendingUp, Award, 
  Eye, Lightbulb, Shield, Star, ArrowRight, Quote, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente de número interativo que revela história
const InteractiveNumber: React.FC<{ 
  value: string; 
  label: string; 
  story: string; 
  icon: React.ReactNode;
  gradient: string;
}> = ({ value, label, story, icon, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group cursor-pointer"
    >
      <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-hidden transition-all duration-500 ${isHovered ? 'border-primary/50' : ''}`}>
        {/* Gradiente de fundo */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Conteúdo */}
        <div className="relative z-10">
          <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          
          <motion.div
            animate={{ opacity: isHovered ? 0 : 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8"
          >
            <div className="text-6xl font-gilroy font-bold text-primary mb-3">
              {value}
            </div>
            <div className="text-white text-xl font-bold text-center">
              {label}
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="min-h-[200px] flex items-center"
          >
            <p className="text-white/90 text-lg leading-relaxed text-center">
              {story}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const About3: React.FC = () => {
  const [activeDNA, setActiveDNA] = useState(0);

  // DNA da empresa (não valores tradicionais, mas código genético)
  const companyDNA = [
    {
      code: 'DNA-01',
      name: 'Fome de Inovação',
      description: 'Não seguimos tendências. Nós as criamos. Cada projeto é um laboratório de experimentação onde ousamos ser diferentes.',
      icon: <Lightbulb className="w-12 h-12" />,
      color: 'from-yellow-500 to-orange-500',
      emoji: '🧬'
    },
    {
      code: 'DNA-02',
      name: 'Obsessão por Resultados',
      description: 'Bonito não basta. Precisa converter. Cada pixel, cada palavra, cada animação serve a um propósito: o seu sucesso.',
      icon: <Target className="w-12 h-12" />,
      color: 'from-red-500 to-pink-500',
      emoji: '🎯'
    },
    {
      code: 'DNA-03',
      name: 'Empatia Radical',
      description: 'Não fazemos campanhas para demografia. Fazemos para pessoas reais, com sonhos reais, problemas reais.',
      icon: <Heart className="w-12 h-12" />,
      color: 'from-pink-500 to-purple-500',
      emoji: '💗'
    },
    {
      code: 'DNA-04',
      name: 'Transparência Brutal',
      description: 'Sem enrolação. Sem promessas vazias. Se vai dar certo, dizemos. Se não vai, também. Respeito começa pela verdade.',
      icon: <Eye className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500',
      emoji: '👁️'
    },
    {
      code: 'DNA-05',
      name: 'Velocidade + Qualidade',
      description: 'Não escolhemos entre rápido ou bom. Fazemos ambos. Agilidade sem comprometer excelência é nossa assinatura.',
      icon: <Zap className="w-12 h-12" />,
      color: 'from-purple-500 to-indigo-500',
      emoji: '⚡'
    }
  ];

  // Momentos transformadores (não timeline, mas momentos específicos)
  const transformMoments = [
    {
      title: 'A Primeira Vitória',
      description: 'O cliente que cresceu 300% e provou que estávamos no caminho certo',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400',
      impact: '+300% crescimento'
    },
    {
      title: 'O Projeto Impossível',
      description: 'Disseram que não dava. Entregamos em 3 semanas. Viramos referência.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400',
      impact: '21 dias para o impossível'
    },
    {
      title: 'A Pandemia',
      description: 'Quando o mundo parou, nós aceleramos. Salvamos 47 negócios da falência.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400',
      impact: '47 empresas salvas'
    },
    {
      title: 'O Prêmio',
      description: 'Reconhecimento internacional. Mas o verdadeiro prêmio são os clientes felizes.',
      image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=400',
      impact: '1º lugar mundial'
    }
  ];

  // Depoimentos com vídeo fake
  const videoTestimonials = [
    {
      name: 'Marina Silva',
      role: 'CEO, TechStart Brasil',
      quote: 'Eles não são apenas fornecedores. São parte do nosso conselho estratégico.',
      thumbnail: 'https://i.pravatar.cc/400?img=5',
      duration: '2:34'
    },
    {
      name: 'Carlos Roberto',
      role: 'Founder, EcoSolutions',
      quote: 'De R$ 50k para R$ 2M em faturamento. Em 8 meses. Não é mágica, é estratégia.',
      thumbnail: 'https://i.pravatar.cc/400?img=12',
      duration: '3:12'
    },
    {
      name: 'Ana Paula',
      role: 'CMO, Innovare Tech',
      quote: 'Contratei uma agência. Ganhei mentores, amigos e uma família digital.',
      thumbnail: 'https://i.pravatar.cc/400?img=1',
      duration: '2:45'
    }
  ];

  return (
    <Layout>
      {/* Hero Section - MANTIDA */}
      <HeroPages 
        title="SOBRE <br />NÓS<span class='text-primary'>.</span>"
        subtitle="Conheça a história, valores e a equipe por trás da Nobre Lobo, uma agência digital comprometida com a excelência e resultados extraordinários."
        badge="Sobre Nós"
        backgroundImage="/lobo-hero-about.jpg"
        height="h-[50vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "70",
          contrast: "120",
          scale: 1.1
        }}
      />

      {/* A História do Lobo - Storytelling Visual */}
      <section className="py-32 relative overflow-hidden">
        {/* Background animado */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url("/lobo-hero-about.jpg")',
              backgroundSize: '150%',
              filter: 'blur(100px)'
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Ícone de aspas gigante */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="text-primary/20 text-9xl font-serif mb-8 text-center"
            >
              "
            </motion.div>

            {/* A História */}
            <div className="space-y-8 text-xl md:text-2xl text-white/90 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <span className="text-primary font-bold">Era uma vez um lobo</span> que se recusava a seguir a matilha. 
                Enquanto outros copiavam o que já existia, ele olhava para o horizonte e via possibilidades.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center md:text-right"
              >
                Esse lobo entendia algo que poucos sabiam: <span className="text-primary font-bold">na era digital, 
                não vence quem grita mais alto</span>. Vence quem conhece o território, quem rastreia cada movimento, 
                quem ataca com precisão cirúrgica.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center text-2xl md:text-3xl font-gilroy font-bold text-primary"
              >
                Nós somos esse lobo. E este é o nosso território.
              </motion.p>
            </div>

            {/* Badge final */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 backdrop-blur-xl rounded-full border border-primary/30">
                <span className="text-white/80 text-lg">Fundada em</span>
                <span className="text-primary font-bold text-2xl">2018</span>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DNA da Empresa - Sequenciador Genético Visual */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Nosso DNA
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              O Código Que Nos <span className="text-primary">Define</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Não são valores de parede. É o que corre em nossas veias digitais.
            </p>
          </motion.div>

          {/* DNA Visualizer */}
          <div className="max-w-6xl mx-auto">
            {/* DNA Helix visual */}
            <div className="relative mb-12">
              <div className="flex justify-between items-center">
                {companyDNA.map((dna, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActiveDNA(index)}
                    className={`cursor-pointer transition-all duration-500 ${
                      activeDNA === index ? 'scale-110' : 'scale-100 opacity-50'
                    }`}
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${dna.color} flex items-center justify-center text-4xl border-4 ${
                      activeDNA === index ? 'border-primary shadow-lg shadow-primary/50' : 'border-white/10'
                    }`}>
                      {dna.emoji}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Linha conectora */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-20 -z-10"></div>
            </div>

            {/* DNA Info Card */}
            <motion.div
              key={activeDNA}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${companyDNA[activeDNA].color} opacity-10`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${companyDNA[activeDNA].color}`}>
                    <div className="text-white">
                      {companyDNA[activeDNA].icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-primary/70 text-sm font-mono mb-1">{companyDNA[activeDNA].code}</div>
                    <h3 className="text-3xl font-gilroy font-bold text-white">{companyDNA[activeDNA].name}</h3>
                  </div>
                </div>
                <p className="text-white/80 text-xl leading-relaxed">
                  {companyDNA[activeDNA].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Números Interativos que Contam Histórias */}
      <section className="py-32 relative overflow-hidden bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Hover para Descobrir
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              Números Que <span className="text-primary">Respiram</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Passe o mouse e veja a história por trás de cada métrica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <InteractiveNumber
              value="350+"
              label="Projetos"
              story="Cada um começou com um 'talvez' e terminou com um 'uau'. Não fazemos campanhas. Criamos momentum."
              icon={<Sparkles className="w-8 h-8" />}
              gradient="from-yellow-500/20 to-orange-500/20"
            />
            <InteractiveNumber
              value="R$ 50M+"
              label="Gerados"
              story="Esse número representa 156 empregos criados, 47 negócios salvos, e incontáveis sonhos realizados."
              icon={<TrendingUp className="w-8 h-8" />}
              gradient="from-green-500/20 to-emerald-500/20"
            />
            <InteractiveNumber
              value="98%"
              label="Voltam"
              story="Não é retenção. É quando um cliente vira evangelista. Quando ele traz o amigo, o primo, o sócio."
              icon={<Heart className="w-8 h-8" />}
              gradient="from-pink-500/20 to-red-500/20"
            />
            <InteractiveNumber
              value="5.2s"
              label="Resposta Média"
              story="Sim, 5.2 segundos. Porque quando você precisa de nós, não pode esperar. Estamos sempre aqui."
              icon={<Zap className="w-8 h-8" />}
              gradient="from-blue-500/20 to-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Galeria de Momentos Transformadores */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Momentos Definitivos
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              Quando Tudo <span className="text-primary">Mudou</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {transformMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500">
                  {/* Imagem */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  
                  {/* Conteúdo */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-xl rounded-full border border-primary/30 text-primary text-sm font-bold mb-4">
                      {moment.impact}
                    </div>
                    <h3 className="text-2xl font-gilroy font-bold text-white mb-3">
                      {moment.title}
                    </h3>
                    <p className="text-white/80">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos em Vídeo (Fake) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Vozes Reais
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              Ouça de Quem <span className="text-primary">Viveu</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500">
                  {/* Thumbnail */}
                  <div className="relative aspect-square">
                    <img 
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Duração */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-xl rounded-full text-white text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6 bg-white/5 backdrop-blur-xl">
                    <h4 className="text-xl font-gilroy font-bold text-white mb-2">{video.name}</h4>
                    <p className="text-white/60 text-sm mb-3">{video.role}</p>
                    <p className="text-white/80 italic">"{video.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Visual - Não apenas texto */}
      <section className="py-40 relative overflow-hidden">
        {/* Background com efeito de luz */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10"></div>
        
        {/* Padrão de fundo */}
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ECC80B 0px, #ECC80B 2px, transparent 2px, transparent 10px)',
          }}
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Quote className="w-20 h-20 text-primary mx-auto mb-8" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-gilroy font-bold mb-12 leading-tight">
              <span className="text-white">Não Existe</span>
              <br />
              <span className="text-primary">Plano B</span>
            </h2>

            <div className="space-y-8 text-2xl md:text-3xl text-white/90 leading-relaxed mb-16">
              <p>
                Quando você nos escolhe, não está contratando uma agência.
              </p>
              <p className="text-primary font-bold">
                Está declarando guerra à mediocridade.
              </p>
              <p>
                E nós? Nós não lutamos pela vitória.
              </p>
              <p className="text-primary font-bold text-4xl md:text-5xl">
                Nós lutamos pela dominação.
              </p>
            </div>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl rounded-full transition-all duration-300 inline-flex items-center gap-4"
              >
                Declare Guerra
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About3;

