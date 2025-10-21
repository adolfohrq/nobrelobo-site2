import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  
  // Animação baseada no scroll
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  // Links do rodapé
  const footerLinks = {
    empresa: [
      { nome: 'Sobre Nós', url: '/sobre' },
      { nome: 'Nosso Time', url: '/time' },
      { nome: 'Carreiras', url: '/carreiras' },
      { nome: 'Contato', url: '/contato' }
    ],
    servicos: [
      { nome: 'Branding', url: '/servicos/branding' },
      { nome: 'Design', url: '/servicos/design' },
      { nome: 'Marketing Digital', url: '/servicos/marketing' },
      { nome: 'Desenvolvimento Web', url: '/servicos/web' }
    ],
    recursos: [
      { nome: 'Blog', url: '/blog' },
      { nome: 'Estudos de Caso', url: '/casos' },
      { nome: 'Base de Conhecimentos', url: '/knowledge-base' },
      { nome: 'Recursos Gratuitos', url: '/recursos-gratuitos' },
      { nome: 'FAQ', url: '/faq' }
    ]
  };

  // Redes sociais
  const socialLinks = [
    { nome: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { nome: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { nome: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { nome: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
  ];

  // Renderizar ícone de rede social
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="relative py-20 overflow-hidden border-t border-white/5"
    >
      {/* Background com blur e transparência similar ao header */}
      <div className="absolute inset-0 backdrop-blur-lg bg-background/20 z-0 transition-all duration-500"></div>
      
      {/* Elementos de gradiente fixos */}
      <div className="absolute w-1/3 h-1/3 bottom-0 right-0 bg-primary/10 blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute w-1/4 h-1/4 top-0 right-1/4 bg-primary/8 blur-[160px] rounded-full pointer-events-none z-0"></div>
      
      {/* Padrão de grid sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ECC80B" strokeWidth="0.5" opacity="0.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>
      
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Coluna da logo e informações da empresa */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Link 
                  to="/" 
                  className="block relative mr-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md cursor-pointer transition-all duration-300 hover:opacity-90" 
                  title="Ir para página inicial"
                  aria-label="Página inicial Nobre Lobo"
                >
                  <motion.img 
                    src="/logo-2.png" 
                    alt="Nobre Lobo" 
                    className="h-16 w-auto object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </Link>
              </motion.div>
            </div>
            
            <p className="text-white/80 mb-6">
              Transformamos marcas através de estratégias criativas e soluções digitais inovadoras que geram resultados reais.
            </p>
            
            {/* Redes sociais */}
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="sr-only">{social.nome}</span>
                  {renderSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Colunas de links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-gilroy font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    to={link.url}
                    className="text-white/80 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2"></span>
                    {link.nome}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-gilroy font-bold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  <Link 
                    to={link.url}
                    className="text-white/80 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2"></span>
                    {link.nome}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-gilroy font-bold text-white mb-6">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                >
                  <Link 
                    to={link.url}
                    className="text-white/80 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2"></span>
                    {link.nome}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contato */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-gilroy font-bold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <p className="text-white/80 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contato@nobrelobo.com.br
                </p>
                <p className="text-white/80 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  (11) 99999-9999
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <p className="text-white/80 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  São Paulo, SP - Brasil
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <p className="text-white/80 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Seg-Sex: 9h às 18h
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        {/* Copyright e links legais */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nobre Lobo. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacidade" className="text-white/60 text-sm hover:text-primary transition-colors duration-300">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-white/60 text-sm hover:text-primary transition-colors duration-300">
              Termos de Uso
            </Link>
            <Link to="/cookies" className="text-white/60 text-sm hover:text-primary transition-colors duration-300">
              Política de Cookies
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 