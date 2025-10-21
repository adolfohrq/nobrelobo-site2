import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Layers, 
  Image as ImageIcon, 
  FileText, 
  Package, 
  Printer, 
  Monitor, 
  Smartphone, 
  BookOpen, 
  Layout, 
  Aperture, 
  Type 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  // Dados dos serviços
  const services = [
    {
      id: 1,
      title: "Identidade Visual",
      description: "Criação de logotipos, paletas de cores e elementos visuais que representam a essência da sua marca.",
      icon: <PenTool className="h-8 w-8 text-primary" />,
      features: ["Logotipos", "Paletas de cores", "Elementos gráficos", "Guia de marca"],
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 2,
      title: "Material Impresso",
      description: "Design de cartões de visita, folhetos, catálogos, banners e outros materiais impressos para sua empresa.",
      icon: <Printer className="h-8 w-8 text-blue-400" />,
      features: ["Cartões de visita", "Folhetos", "Catálogos", "Banners"],
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      id: 3,
      title: "Design Editorial",
      description: "Criação de layouts para livros, revistas, jornais e outras publicações impressas ou digitais.",
      icon: <BookOpen className="h-8 w-8 text-purple-400" />,
      features: ["Livros", "Revistas", "Relatórios", "E-books"],
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      id: 4,
      title: "Design para Redes Sociais",
      description: "Criação de posts, stories, capas e outros conteúdos visuais otimizados para plataformas sociais.",
      icon: <Layout className="h-8 w-8 text-green-400" />,
      features: ["Posts", "Stories", "Capas", "Templates"],
      color: "from-green-500/20 to-green-500/5"
    },
    {
      id: 5,
      title: "Design de Embalagens",
      description: "Desenvolvimento de embalagens funcionais e atrativas que destacam seu produto no mercado.",
      icon: <Package className="h-8 w-8 text-red-400" />,
      features: ["Caixas", "Rótulos", "Sacolas", "Mockups"],
      color: "from-red-500/20 to-red-500/5"
    },
    {
      id: 6,
      title: "Design de Interface (UI)",
      description: "Criação de interfaces visuais para websites, aplicativos e outros produtos digitais.",
      icon: <Monitor className="h-8 w-8 text-amber-400" />,
      features: ["Websites", "Aplicativos", "Dashboards", "Protótipos"],
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      id: 7,
      title: "Ilustração",
      description: "Criação de ilustrações personalizadas para diversos fins, desde publicações até campanhas publicitárias.",
      icon: <Aperture className="h-8 w-8 text-indigo-400" />,
      features: ["Ilustrações digitais", "Personagens", "Infográficos", "Ícones"],
      color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
      id: 8,
      title: "Tipografia",
      description: "Seleção e customização de fontes para criar uma identidade tipográfica única para sua marca.",
      icon: <Type className="h-8 w-8 text-cyan-400" />,
      features: ["Seleção de fontes", "Lettering", "Hierarquia visual", "Customização"],
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      id: 9,
      title: "Design Responsivo",
      description: "Adaptação de designs para diferentes dispositivos, garantindo uma experiência visual consistente.",
      icon: <Smartphone className="h-8 w-8 text-rose-400" />,
      features: ["Mobile", "Tablet", "Desktop", "Adaptabilidade"],
      color: "from-rose-500/20 to-rose-500/5"
    },
  ];

  return (
    <section id="servicos" className="py-24 relative">
      {/* Divisor no topo da seção */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Layers size={16} className="mr-2" /> Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Soluções <span className="text-primary">Criativas</span> em Design Gráfico
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Oferecemos uma ampla gama de serviços de design gráfico para atender às necessidades específicas do seu negócio, 
            desde identidade visual até materiais impressos e digitais.
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300 z-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 