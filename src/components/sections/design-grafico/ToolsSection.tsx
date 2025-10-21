import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Figma as FigmaIcon,
  Image as ImageIcon
} from 'lucide-react';

const ToolsSection: React.FC = () => {
  // Ferramentas de design
  const designTools = [
    {
      name: "Adobe Photoshop",
      description: "Software de edição de imagens para manipulação fotográfica, composições e efeitos visuais.",
      logo: "/images/tools/photoshop.svg",
      alt: "Logo Adobe Photoshop",
      keyFeature: "Manipulação de imagens",
      benefits: ["Edição profissional", "Composições avançadas", "Efeitos visuais"],
      color: "blue"
    },
    {
      name: "Adobe Illustrator",
      description: "Software de design vetorial para criação de logotipos, ilustrações e gráficos escaláveis.",
      logo: "/images/tools/illustrator.svg",
      alt: "Logo Adobe Illustrator",
      keyFeature: "Design vetorial",
      benefits: ["Gráficos escaláveis", "Precisão", "Versatilidade"],
      color: "orange"
    },
    {
      name: "Adobe InDesign",
      description: "Software de layout para diagramação de publicações impressas e digitais.",
      logo: "/images/tools/indesign.svg",
      alt: "Logo Adobe InDesign",
      keyFeature: "Layout e diagramação",
      benefits: ["Publicações profissionais", "Controle tipográfico", "Exportação para múltiplos formatos"],
      color: "pink"
    },
    {
      name: "Figma",
      description: "Plataforma colaborativa de design de interface para prototipagem e design de produtos digitais.",
      logo: "/images/tools/figma.svg",
      alt: "Logo Figma",
      keyFeature: "Design colaborativo",
      benefits: ["Colaboração em tempo real", "Prototipagem", "Design systems"],
      color: "purple"
    },
    {
      name: "Procreate",
      description: "Aplicativo de ilustração digital para iPad com ferramentas de pintura e desenho avançadas.",
      logo: "/images/tools/procreate.svg",
      alt: "Logo Procreate",
      keyFeature: "Ilustração digital",
      benefits: ["Pincéis personalizáveis", "Camadas avançadas", "Portabilidade"],
      color: "indigo"
    },
    {
      name: "Affinity Designer",
      description: "Software de design vetorial e bitmap com foco em performance e fluxo de trabalho eficiente.",
      logo: "/images/tools/affinity.svg",
      alt: "Logo Affinity Designer",
      keyFeature: "Design híbrido",
      benefits: ["Vetorial e bitmap", "Performance", "Preço acessível"],
      color: "cyan"
    }
  ];

  // Função para obter classes de cores com base no nome da cor
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string, border: string, gradient: string }> = {
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
        gradient: "from-blue-500/20 to-blue-500/5"
      },
      orange: {
        bg: "bg-orange-500/10",
        text: "text-orange-400",
        border: "border-orange-500/20",
        gradient: "from-orange-500/20 to-orange-500/5"
      },
      pink: {
        bg: "bg-pink-500/10",
        text: "text-pink-400",
        border: "border-pink-500/20",
        gradient: "from-pink-500/20 to-pink-500/5"
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20",
        gradient: "from-purple-500/20 to-purple-500/5"
      },
      indigo: {
        bg: "bg-indigo-500/10",
        text: "text-indigo-400",
        border: "border-indigo-500/20",
        gradient: "from-indigo-500/20 to-indigo-500/5"
      },
      cyan: {
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
        border: "border-cyan-500/20",
        gradient: "from-cyan-500/20 to-cyan-500/5"
      }
    };

    return colorMap[color] || {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      gradient: "from-primary/20 to-primary/5"
    };
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Divisor no topo da seção */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute -left-20 bottom-1/3 w-40 h-40 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute -right-20 top-1/3 w-40 h-40 rounded-full bg-blue-500/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Zap size={16} className="mr-2" /> Ferramentas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Tecnologias que <span className="text-primary">potencializam</span> nossos designs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Utilizamos as ferramentas mais avançadas do mercado para criar designs de alta qualidade, 
            combinando tecnologia e criatividade para resultados excepcionais.
          </motion.p>
        </div>
        
        {/* Grid de ferramentas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designTools.map((tool, index) => {
            const colorClasses = getColorClasses(tool.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300 z-10">
                  {/* Logo da ferramenta (placeholder) */}
                  <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-6`}>
                    <FigmaIcon className={`h-6 w-6 ${colorClasses.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full ${colorClasses.bg} ${colorClasses.text} text-xs font-medium mb-4`}>
                    {tool.keyFeature}
                  </div>
                  <p className="text-white/70 mb-6">{tool.description}</p>
                  
                  <div className="space-y-2">
                    {tool.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-white/80">
                        <CheckCircle className={`h-4 w-4 ${colorClasses.text} mr-2`} />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Seção de dispositivos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Design para todos os <span className="text-primary">dispositivos</span></h3>
              <p className="text-white/70 mb-6">
                Nossos designs são criados para funcionar perfeitamente em qualquer dispositivo, garantindo uma experiência visual consistente em todas as plataformas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Desktop</h4>
                    <p className="text-white/70">Designs otimizados para visualização em telas grandes com alta resolução.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4 mt-1">
                    <Tablet className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Tablet</h4>
                    <p className="text-white/70">Layouts adaptados para proporcionar uma experiência ideal em dispositivos de médio porte.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4 mt-1">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Mobile</h4>
                    <p className="text-white/70">Designs responsivos que garantem funcionalidade e estética em telas pequenas.</p>
                  </div>
                </div>
              </div>
              
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-primary font-medium"
              >
                Saiba mais sobre nosso processo
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-xl filter blur-xl opacity-50"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                {/* Representação visual de design responsivo */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    {/* Desktop */}
                    <div className="bg-white/10 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="h-40 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-md flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-white/40" />
                      </div>
                    </div>
                    
                    {/* Tablet e Mobile */}
                    <div className="flex space-x-4">
                      <div className="w-1/2 bg-white/10 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-white/40" />
                        </div>
                      </div>
                      
                      <div className="w-1/3 bg-white/10 rounded-lg p-2">
                        <div className="flex items-center mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="h-28 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-md flex items-center justify-center">
                          <ImageIcon className="h-6 w-6 text-white/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection; 