import React from 'react';
import Layout from '../components/general/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroPages from '../components/general/HeroPages';
import { Heart, Users, Lightbulb, Target, TrendingUp, Award, Sparkles, Zap, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About2: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Timeline da jornada
  const journeyTimeline = [
    {
      year: '2018',
      title: 'O Início',
      description: 'Nascemos de um sonho: democratizar o acesso ao marketing digital de excelência. Começamos com 3 pessoas apaixonadas e uma missão clara.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2019',
      title: 'Primeiras Conquistas',
      description: 'Nosso primeiro cliente viu 300% de crescimento. A partir daí, cada projeto se tornou uma prova de que estratégia + criatividade = resultados.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2020',
      title: 'Transformação Digital',
      description: 'O mundo mudou, e nós evoluímos. Ajudamos dezenas de empresas a pivotarem para o digital durante a pandemia. Salvamos negócios.',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2021',
      title: 'Reconhecimento',
      description: 'Prêmios, certificações e, mais importante: o reconhecimento dos nossos clientes. 98% de satisfação não é acidente, é dedicação.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2023',
      title: 'Expansão',
      description: 'De 3 para 32 profissionais. De sonho para realidade. Mas mantemos o mesmo coração: fazer diferença na vida de quem confia em nós.',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2024',
      title: 'O Futuro',
      description: 'Não paramos. A cada dia, uma nova tecnologia, uma nova estratégia, um novo jeito de superar expectativas. O melhor ainda está por vir.',
      icon: <Star className="w-6 h-6" />,
      color: 'from-primary to-yellow-300'
    }
  ];

  // Valores core (mais emocionais)
  const coreValues = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Paixão',
      quote: '"Não fazemos apenas um trabalho. Criamos legados."',
      description: 'Cada projeto recebe nosso coração. Não medimos horas, medimos impacto. Seu sucesso é nossa vitória.',
      gradient: 'from-pink-500/20 to-red-500/20'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Humanidade',
      quote: '"Por trás de cada projeto, há pessoas com sonhos."',
      description: 'Não trabalhamos para empresas. Trabalhamos para pessoas que querem fazer diferença no mundo.',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Criatividade',
      quote: '"Copiamos ninguém. Criamos história."',
      description: 'Cada solução é única como uma impressão digital. Sua marca merece originalidade absoluta.',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Propósito',
      quote: '"Resultados são consequência de trabalho com alma."',
      description: 'Não corremos atrás de números vazios. Construímos bases sólidas para crescimento sustentável.',
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  // Impacto real
  const impactStories = [
    {
      metric: '350+',
      label: 'Negócios Transformados',
      story: 'Cada número é uma história de superação, uma família que prospera, um sonho realizado.'
    },
    {
      metric: '5M+',
      label: 'Vidas Impactadas',
      story: 'Não são apenas cliques. São pessoas reais que descobriram produtos e serviços que mudaram suas vidas.'
    },
    {
      metric: '98%',
      label: 'Voltam por Mais',
      story: 'Não é retenção. É confiança. É amizade. É parceria que transcende contratos.'
    },
    {
      metric: 'R$ 50M+',
      label: 'Gerados aos Clientes',
      story: 'Cada real representa emprego criado, família sustentada, economia que gira.'
    }
  ];

  // Nossa cultura
  const culturePillars = [
    {
      title: 'Liberdade Criativa',
      description: 'Aqui, ideias loucas são bem-vindas. As melhores soluções vêm de mentes livres.',
      emoji: '🎨'
    },
    {
      title: 'Growth Mindset',
      description: 'Erramos, aprendemos, evoluímos. Cada fracasso é uma lição disfarçada.',
      emoji: '📈'
    },
    {
      title: 'Work-Life Balance',
      description: 'Produtividade vem de mentes descansadas. Qualidade > Quantidade.',
      emoji: '⚖️'
    },
    {
      title: 'Transparência Radical',
      description: 'Sem politicagem, sem jogo de cintura. Verdade na cara, sempre.',
      emoji: '💎'
    },
    {
      title: 'Celebramos Vitórias',
      description: 'Cada conquista merece reconhecimento. Sucesso compartilhado é sucesso multiplicado.',
      emoji: '🎉'
    },
    {
      title: 'Impacto Social',
      description: 'Lucro é importante, mas impacto positivo no mundo é essencial.',
      emoji: '🌍'
    }
  ];

  return (
    <Layout>
      {/* Hero Section - IGUAL DA ABOUT */}
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

      {/* Manifesto / Declaração Inspiradora */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 backdrop-blur-xl rounded-full border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  Nosso Manifesto
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-gilroy font-bold text-white mb-8 leading-tight">
              Não Somos Uma Agência.
              <br />
              Somos <span className="text-primary">Arquitetos de Sonhos</span>.
            </h2>

            <div className="space-y-6 text-xl md:text-2xl text-white/80 leading-relaxed">
              <p>
                Acreditamos que <strong className="text-primary">marketing digital não é sobre vender</strong>. 
                É sobre <strong className="text-white">conectar</strong>, <strong className="text-white">inspirar</strong> e <strong className="text-white">transformar</strong>.
              </p>
              <p>
                Cada marca tem uma história única. Cada negócio, um propósito maior. 
                Nossa missão é <strong className="text-primary">amplificar essa voz</strong> até que o mundo inteiro ouça.
              </p>
              <p>
                Não prometemos milagres. Prometemos <strong className="text-white">trabalho árduo</strong>, 
                <strong className="text-white"> estratégia impecável</strong> e 
                <strong className="text-white"> dedicação absoluta</strong> ao seu sucesso.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <div className="text-primary text-lg font-bold mb-2">Porque acreditamos que</div>
              <div className="text-3xl md:text-4xl font-gilroy font-bold text-white">
                "Seu Sucesso É Nosso Legado."
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nossa Jornada - Timeline Visual */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Nossa História
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              A Jornada do <span className="text-primary">Lobo</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              De 3 sonhadores a 32 transformadores de negócios. Esta é nossa história.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto relative">
            {/* Linha vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-primary opacity-20 hidden md:block"></div>

            {journeyTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Conteúdo */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-primary/30 transition-all duration-500 group">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <div className="text-3xl font-gilroy font-bold text-primary">{item.year}</div>
                    </div>
                    <h3 className="text-2xl font-gilroy font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Ponto central */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50"></div>
                </div>

                {/* Espaço vazio do outro lado */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Core - Emocionais */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Nossa Essência
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              O Que Nos <span className="text-primary">Move</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Estes não são apenas valores corporativos. São a alma do que fazemos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 hover:border-primary/30 transition-all duration-500 h-full">
                  {/* Gradiente de fundo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Conteúdo */}
                  <div className="relative z-10">
                    <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      {value.icon}
                    </div>
                    <h3 className="text-3xl font-gilroy font-bold text-white mb-4">{value.title}</h3>
                    <div className="text-primary/80 italic text-lg mb-4 font-medium">{value.quote}</div>
                    <p className="text-white/70 text-lg leading-relaxed">{value.description}</p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Real */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Nosso Impacto
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              Números Que <span className="text-primary">Contam Histórias</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Por trás de cada métrica, há vidas reais sendo transformadas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {impactStories.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-5xl md:text-6xl font-gilroy font-bold text-primary mb-3">
                        {impact.metric}
                      </div>
                      <div className="text-xl font-bold text-white mb-4">{impact.label}</div>
                    </div>
                    <p className="text-white/60 text-sm italic leading-relaxed">{impact.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Cultura */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              Trabalhe Conosco
            </span>
            <h2 className="text-4xl md:text-6xl font-gilroy font-bold text-white mb-6">
              Nossa <span className="text-primary">Cultura</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Mais do que um lugar de trabalho. Uma comunidade de sonhadores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {culturePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{pillar.emoji}</div>
                <h3 className="text-xl font-gilroy font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/70">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full transition-colors"
              >
                Junte-se ao Time
                <Users className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Emocional */}
      <section className="py-40 relative overflow-hidden">
        {/* Particles effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10"></div>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

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
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-primary/30">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  Faça Parte da História
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-gilroy font-bold text-white mb-8">
              Seu Projeto. <br />
              Nossa <span className="text-primary">Paixão</span>.
            </h2>

            <p className="text-2xl text-white/80 mb-12 leading-relaxed">
              Não somos apenas uma escolha de negócios. <br className="hidden md:block" />
              Somos parceiros na construção do seu legado.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl rounded-full transition-colors flex items-center gap-3"
                >
                  Vamos Conversar
                  <Sparkles className="w-6 h-6" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-white/50 text-sm italic"
            >
              "A melhor hora para começar foi ontem. A segunda melhor é agora."
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About2;

