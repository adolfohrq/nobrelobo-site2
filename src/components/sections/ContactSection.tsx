import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeader from '../general/SectionHeader'

interface ContactSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  id,
  title = "Entre em Contato",
  subtitle = "Estamos prontos para transformar suas ideias em projetos de sucesso. Fale conosco e descubra como a Nobre Lobo pode impulsionar o seu negócio."
}) => {
  // Referência para animação de scroll
  const sectionRef = useRef<HTMLElement>(null);
  
  // Estados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Efeitos de scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);
  
  // Lidar com mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setFormStatus('success');
      // Resetar o formulário após 3 segundos
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  // Dados de contato
  const contactDetails = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Telefone',
      details: ['+55 (48) 9.9608-4931'],
      delay: 0.1,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'E-mail',
      details: ['contato@nobrelobo.com.br'],
      delay: 0.2,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Endereço',
      details: ['Tijucas/SC'],
      delay: 0.3,
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      url: 'https://linkedin.com/company/nobrelobo',
      delay: 0.5,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      url: 'https://instagram.com/nobrelobo',
      delay: 0.6,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      url: 'https://facebook.com/nobrelobo',
      delay: 0.7,
    },

  ];
  
  return (
    <section ref={sectionRef} id={id} className="py-28 relative overflow-hidden">
      {/* Elementos decorativos já estão no Layout principal */}
      
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, y }}
      >
        {/* Cabeçalho da seção */}
        <SectionHeader
          title={title}
          subtitle={subtitle}
          badge="Fale Conosco"
          floatingTitleText="Contato"
          iconComponent={
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Formulário de contato */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-accent/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Elementos decorativos de fundo */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-gilroy font-bold text-white mb-6 relative">
              Envie sua mensagem
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/20 border border-primary/30 text-primary p-8 rounded-xl mb-6 shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-gilroy font-bold mb-2 text-center">Mensagem enviada com sucesso!</h3>
                <p className="text-center">Obrigado pelo seu contato. Responderemos o mais breve possível.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="group">
                    <label htmlFor="name" className="text-white/80 text-sm font-medium mb-2 block group-focus-within:text-primary transition-colors">
                      Seu nome completo
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-primary transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H17C18.0609 15 19.0783 15.4214 19.8284 16.1716C20.5786 16.9217 21 17.9391 21 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="text-white/80 text-sm font-medium mb-2 block group-focus-within:text-primary transition-colors">
                      E-mail profissional
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-primary transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        placeholder="seuemail@empresa.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="group">
                    <label htmlFor="phone" className="text-white/80 text-sm font-medium mb-2 block group-focus-within:text-primary transition-colors">
                      Telefone
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-primary transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="subject" className="text-white/80 text-sm font-medium mb-2 block group-focus-within:text-primary transition-colors">
                      Como podemos ajudar?
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-primary transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 14.5H15.5M8.5 9.5H12.5M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <motion.select
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none"
                        required
                      >
                        <option value="" disabled className="bg-[#1A1A1A] text-white/70">Selecione o serviço de interesse</option>
                        <option value="SEO Estratégico" className="bg-[#1A1A1A] text-white">SEO Estratégico</option>
                        <option value="Design Gráfico" className="bg-[#1A1A1A] text-white">Design Gráfico</option>
                        <option value="Automação de Marketing" className="bg-[#1A1A1A] text-white">Automação de Marketing</option>
                        <option value="Inteligência Artificial" className="bg-[#1A1A1A] text-white">Inteligência Artificial</option>
                        <option value="Tráfego Pago" className="bg-[#1A1A1A] text-white">Tráfego Pago</option>
                        <option value="Marketing Digital" className="bg-[#1A1A1A] text-white">Marketing Digital</option>
                        <option value="Desenvolvimento Web" className="bg-[#1A1A1A] text-white">Desenvolvimento Web</option>
                        <option value="Social Media" className="bg-[#1A1A1A] text-white">Social Media</option>
                        <option value="Branding" className="bg-[#1A1A1A] text-white">Branding</option>
                        <option value="Consultoria" className="bg-[#1A1A1A] text-white">Consultoria</option>
                        <option value="Outro" className="bg-[#1A1A1A] text-white">Outro</option>
                      </motion.select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8 group">
                  <label htmlFor="message" className="text-white/80 text-sm font-medium mb-2 block group-focus-within:text-primary transition-colors">
                    Conte-nos sobre seu projeto
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-white/50 group-focus-within:text-primary transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                      placeholder="Descreva brevemente seu projeto, objetivos e expectativas..."
                      required
                    ></motion.textarea>
                  </div>
                </div>
                
                <motion.button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary text-primary-foreground font-gilroy font-bold py-4 px-8 rounded-xl relative overflow-hidden group disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {formStatus === 'idle' && (
                      <>
                        Solicitar Contato
                        <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    )}
                    {formStatus === 'error' && 'Erro ao enviar. Tente novamente.'}
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-primary-dark scale-x-0 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <div className="mt-6 flex items-center gap-3 justify-center">
                  <div className="h-px flex-grow bg-white/5"></div>
                  <p className="text-white/50 text-xs">
                    Ao enviar, você concorda com nossa <a href="/politica-privacidade" className="text-primary hover:underline">Política de Privacidade</a>
                  </p>
                  <div className="h-px flex-grow bg-white/5"></div>
                </div>
              </form>
            )}
          </motion.div>
          
          {/* Informações de contato */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-2xl border border-white/10 p-8 lg:p-10 h-full flex flex-col justify-between bg-accent/10 backdrop-blur-sm shadow-xl relative overflow-hidden"
          >
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-3xl font-gilroy font-bold text-white mb-6 relative">
                  Informações de Contato
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                </h3>
                <p className="text-white/70 mb-10">
                  Entre em contato com nossa equipe por qualquer um dos canais abaixo.
                  Estamos prontos para atender suas necessidades.
                </p>

                <div className="space-y-8 mb-6">
                  {contactDetails.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      className="flex items-start group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-primary/90 text-sm uppercase tracking-wider font-medium mb-1">{item.title}</p>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-white/90 font-medium">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Barra divisória */}
              <div className="w-full h-px bg-white/10 my-4"></div>
              

              
              {/* CONECTE-SE - seguindo estilo do site */}
              <div>
                <div className="mb-3 flex items-center">
                  <div className="w-1 h-4 bg-primary mr-2"></div>
                  <span className="text-primary text-xs font-bold uppercase">CONECTE-SE</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a 
                    href="https://linkedin.com/company/nobreloboagencia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-white bg-accent hover:bg-accent/80 rounded-md transition-colors"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />
                      <path d="M6 9H2V21H6V9Z" />
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://instagram.com/nobrelobo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-white bg-accent hover:bg-accent/80 rounded-md transition-colors"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://facebook.com/nobrelobo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-white bg-accent hover:bg-accent/80 rounded-md transition-colors"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection 