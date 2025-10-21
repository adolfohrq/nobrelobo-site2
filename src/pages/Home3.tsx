import React, { useRef, useState, useEffect } from 'react'
import Layout from '../components/general/Layout'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { 
  ArrowRight, TrendingUp, Target, Zap, Shield, Users, Award, 
  Sparkles, Rocket, Eye, Heart, ChevronRight, Check, Star,
  BarChart3, Briefcase, Lightbulb, Code
} from 'lucide-react'
import OurProcessSection from '../components/sections/OurProcessSection'

// Componente de número animado que conta
const AnimatedNumber: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ 
  value, 
  suffix = '', 
  duration = 2 
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(value * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return <div ref={ref}>{count}{suffix}</div>
}

const Home3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Parallax suave com spring physics
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), { stiffness: 100, damping: 30 })
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), { stiffness: 100, damping: 30 })
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), { stiffness: 100, damping: 30 })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Mouse tracking para efeitos 3D
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Benefícios em Bento Grid (estilo Apple)
  const bentoFeatures = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Lançamento Estratégico",
      description: "Do planejamento à execução, guiamos seu projeto com precisão militar.",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      size: "large"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Crescimento 5x",
      description: "ROI médio multiplicado",
      gradient: "from-blue-500/20 to-cyan-500/20",
      size: "small"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visibilidade Total",
      description: "Monitore cada métrica",
      gradient: "from-purple-500/20 to-pink-500/20",
      size: "small"
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Inovação Contínua",
      description: "Sempre à frente das tendências digitais com soluções que definem o mercado.",
      gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
      size: "large"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tech de Ponta",
      description: "Stack moderna e escalável",
      gradient: "from-green-500/20 to-emerald-500/20",
      size: "small"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "98% Satisfação",
      description: "Clientes que voltam",
      gradient: "from-pink-500/20 to-rose-500/20",
      size: "small"
    }
  ]

  // Clientes/Logos para marquee
  const clientLogos = [
    "TechCorp", "Innovare", "EcoLife", "DataFlow", "CloudMax",
    "NextGen", "SmartHub", "FutureNow", "DigiPro", "WebSphere"
  ]


  // Depoimentos para carousel
  const testimonials = [
    {
      text: "Transformaram completamente nossa presença digital. Em 6 meses, triplicamos nosso faturamento online.",
      author: "Ana Costa",
      role: "CEO, TechFlow",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      text: "Profissionalismo excepcional. A equipe entende profundamente de growth marketing e entrega resultados.",
      author: "Roberto Lima",
      role: "CMO, Innovare",
      avatar: "https://i.pravatar.cc/150?img=13",
      rating: 5
    },
    {
      text: "Parceria estratégica real. Eles não apenas executam, mas pensam junto e trazem insights valiosos.",
      author: "Carla Santos",
      role: "Founder, EcoLife",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    }
  ]

  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <Layout>
      <div ref={containerRef} className="relative">
        {/* HERO SECTION - 3D Multi-Layer Parallax */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background layers com parallax */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
            {/* Layer 1 - Mais lento */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute inset-0 opacity-30"
            >
              <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]"></div>
            </motion.div>

            {/* Layer 2 - Médio */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute inset-0 opacity-20"
            >
              <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[120px]"></div>
            </motion.div>

            {/* Layer 3 - Mais rápido */}
            <motion.div 
              style={{ y: y3 }}
              className="absolute inset-0 opacity-10"
            >
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"></div>
            </motion.div>

            {/* Particle grid animado */}
            <div className="absolute inset-0 opacity-20">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #ECC80B 1px, transparent 0)`,
                  backgroundSize: '100px 100px',
                  animation: 'particle-float 20s linear infinite'
                }}
              ></div>
            </div>
          </div>

          {/* Conteúdo Hero com 3D tilt */}
          <motion.div
            style={{ 
              opacity, 
              scale,
              rotateX: mousePosition.y * 0.02,
              rotateY: mousePosition.x * 0.02,
            }}
            className="container mx-auto px-4 relative z-10 text-center"
          >
            {/* Badge flutuante */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-300 to-primary blur-lg opacity-50"></div>
                <div className="relative px-6 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-primary/30 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    A Evolução do Marketing Digital
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Título com gradiente animado */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-gilroy font-bold mb-8"
            >
              <span className="block text-white leading-tight">
                MAIS QUE
              </span>
              <span className="block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent animate-gradient-x leading-tight">
                RESULTADOS
              </span>
            </motion.h1>

            {/* Subtítulo com efeito typewriter */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-12 font-light"
            >
              Criamos <strong className="text-primary font-bold">experiências digitais</strong> que 
              convertem visitantes em clientes apaixonados pela sua marca.
            </motion.p>

            {/* CTAs com efeito magnético */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-full group overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Iniciar Projeto
                      <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/portfolio">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-primary/50 text-white font-bold text-lg px-10 py-7 rounded-full"
                  >
                    Ver Portfolio Épico
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats animados */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {[
                { value: 350, suffix: '+', label: 'Projetos de Sucesso' },
                { value: 98, suffix: '%', label: 'Clientes Satisfeitos' },
                { value: 5, suffix: 'x', label: 'ROI Médio' },
                { value: 24, suffix: '/7', label: 'Suporte Sempre Ativo' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-primary/30 transition-all">
                    <div className="text-5xl font-gilroy font-bold text-primary mb-2">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/50 text-xs uppercase tracking-widest">Explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [2, 16, 2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-primary rounded-full mt-2"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                Por Que Somos Diferentes
              </span>
              <h2 className="text-5xl md:text-7xl font-gilroy font-bold text-white mb-6">
                Excelência em <span className="text-primary">Cada Detalhe</span>
              </h2>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {bentoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group ${
                    feature.size === 'large' ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1'
                  }`}
                >
                  <div className={`relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-500 ${
                    feature.size === 'large' ? 'p-12' : 'p-8'
                  }`}>
                    {/* Gradiente de fundo */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Conteúdo */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        {feature.icon}
                      </div>
                      
                      <h3 className={`font-gilroy font-bold text-white mb-3 ${
                        feature.size === 'large' ? 'text-3xl' : 'text-2xl'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      <p className={`text-white/70 ${
                        feature.size === 'large' ? 'text-lg' : 'text-base'
                      }`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE DE LOGOS */}
        <section className="py-20 relative overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="text-center text-white/50 text-sm uppercase tracking-widest mb-12">
              Marcas que Confiam em Nós
            </p>
            
            <div className="relative">
              <div className="flex overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '0%'] }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="flex gap-16 pr-16"
                >
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 text-white/30 hover:text-primary text-2xl font-bold transition-colors duration-300 whitespace-nowrap"
                    >
                      {logo}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Seção Nosso Processo */}
        <OurProcessSection />

        {/* DEPOIMENTOS - Carousel Elegante */}
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
                Vozes de Sucesso
              </span>
              <h2 className="text-5xl md:text-7xl font-gilroy font-bold text-white mb-6">
                Histórias <span className="text-primary">Reais</span>
              </h2>
            </motion.div>

            {/* Carousel */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 relative"
              >
                {/* Avatar grande */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <img 
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].author}
                    className="w-24 h-24 rounded-full border-4 border-primary/30"
                  />
                  
                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-gilroy font-bold text-white mb-2">
                      {testimonials[activeTestimonial].author}
                    </h4>
                    <p className="text-white/60 mb-3">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <div className="flex gap-1 justify-center md:justify-start">
                      {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Texto */}
                <p className="text-white/90 text-xl leading-relaxed mb-8 text-center md:text-left">
                  "{testimonials[activeTestimonial].text}"
                </p>

                {/* Aspas decorativas */}
                <div className="absolute top-8 right-8 text-primary/10 text-9xl font-serif leading-none">
                  "
                </div>
              </motion.div>

              {/* Dots de navegação */}
              <div className="flex gap-3 justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-primary w-12' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL - Com Particles Effect */}
        <section className="py-40 relative overflow-hidden">
          {/* Background com particles */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20"></div>
            
            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
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
              className="max-w-5xl mx-auto text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-primary/30">
                  <Rocket className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    Seu Próximo Projeto Começa Aqui
                  </span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-gilroy font-bold text-white mb-8"
              >
                Pronto Para
                <br />
                <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                  Dominar?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
              >
                Agende uma consultoria estratégica gratuita e descubra como 
                podemos transformar sua presença digital.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              >
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-8 rounded-full group overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Começar Agora
                        <Sparkles className="ml-3 h-6 w-6" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      ></motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Consultoria Gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Sem Compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Resposta em 24h</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* CSS para animações customizadas */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes particle-float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </Layout>
  )
}

export default Home3

