import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../components/general/Layout';
import { ArrowRight, MessageSquare, TrendingUp, Users, BarChart, Instagram, Facebook, Linkedin, Twitter, Youtube, Heart, Share2, Award } from 'lucide-react';
import FaqAccordion from '../../components/general/FaqAccordion';

// Componente Hero para a página de Social Media
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com efeito de redes sociais */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        
        {/* Elementos flutuantes de ícones de redes sociais */}
        <motion.div 
          className="absolute top-1/4 left-1/4 text-primary/20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <Instagram size={64} />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-1/4 text-blue-500/20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          <Facebook size={72} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 text-red-500/20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          <Youtube size={80} />
        </motion.div>
        
        <motion.div 
          className="absolute top-2/3 right-1/3 text-blue-400/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 5.5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5
          }}
        >
          <Twitter size={60} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-1/5 text-blue-600/20"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6.5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        >
          <Linkedin size={68} />
        </motion.div>
      </div>
      
      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Share2 size={16} className="mr-2" /> Social Media
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Potencialize sua marca nas <span className="text-primary">redes sociais</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Estratégias personalizadas de social media que conectam sua marca ao público certo, aumentam o engajamento e impulsionam seus resultados de negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Solicitar Proposta
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                Conhecer Serviços
              </motion.a>
            </div>
            
            {/* Métricas de Social Media */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+500%</div>
                <div className="text-white/70 text-sm">Aumento de engajamento</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+300%</div>
                <div className="text-white/70 text-sm">Crescimento de seguidores</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-primary text-2xl font-bold mb-1">+200%</div>
                <div className="text-white/70 text-sm">Conversões via redes sociais</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Elemento visual de dashboard de social media */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Dashboard de Social Media */}
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Instagram size={18} className="text-pink-500 mr-2" />
                        <span className="text-sm font-medium">Instagram</span>
                      </div>
                      <span className="text-green-400 text-xs">+24.8%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Facebook size={18} className="text-blue-500 mr-2" />
                        <span className="text-sm font-medium">Facebook</span>
                      </div>
                      <span className="text-green-400 text-xs">+18.3%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Linkedin size={18} className="text-blue-600 mr-2" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </div>
                      <span className="text-green-400 text-xs">+32.1%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Twitter size={18} className="text-blue-400 mr-2" />
                        <span className="text-sm font-medium">Twitter</span>
                      </div>
                      <span className="text-green-400 text-xs">+15.7%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Youtube size={18} className="text-red-500 mr-2" />
                        <span className="text-sm font-medium">YouTube</span>
                      </div>
                      <span className="text-green-400 text-xs">+42.5%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de Serviços para Social Media
const ServicesSection: React.FC = () => {
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
            <Share2 size={16} className="mr-2" /> Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Estratégias de <span className="text-primary">Social Media</span> que Convertem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Desenvolvemos estratégias personalizadas para cada plataforma, criando conteúdo relevante 
            que engaja seu público e converte seguidores em clientes.
          </motion.p>
        </div>
        
        {/* Serviços em formato de cards interativos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Gestão de Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Instagram className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">Gestão de Redes Sociais</h3>
              <p className="text-white/70 mb-6">
                Administramos suas redes sociais com estratégia e criatividade, garantindo presença digital consistente e engajamento crescente.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Planejamento editorial</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Criação de conteúdo</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monitoramento e relatórios</span>
                </li>
              </ul>
              
              <motion.a
                href="#contato"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-primary font-medium"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Card 2 - Criação de Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <MessageSquare className="h-7 w-7 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">Criação de Conteúdo</h3>
              <p className="text-white/70 mb-6">
                Produzimos conteúdo relevante e criativo que ressoa com seu público-alvo e fortalece o posicionamento da sua marca.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copywriting estratégico</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Design gráfico para redes</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Produção de vídeos</span>
                </li>
              </ul>
              
              <motion.a
                href="#contato"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-400 font-medium"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Card 3 - Estratégia de Crescimento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <TrendingUp className="h-7 w-7 text-purple-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">Estratégia de Crescimento</h3>
              <p className="text-white/70 mb-6">
                Desenvolvemos estratégias para aumentar sua base de seguidores, engajamento e conversões através das redes sociais.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Análise de concorrência</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Estratégias de hashtags</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Otimização de perfil</span>
                </li>
              </ul>
              
              <motion.a
                href="#contato"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-purple-400 font-medium"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Card 4 - Gestão de Comunidade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                <Users className="h-7 w-7 text-green-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">Gestão de Comunidade</h3>
              <p className="text-white/70 mb-6">
                Construímos e gerenciamos comunidades engajadas ao redor da sua marca, fortalecendo o relacionamento com seu público.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Moderação de comentários</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Resposta a mensagens</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestão de crises</span>
                </li>
              </ul>
              
              <motion.a
                href="#contato"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-green-400 font-medium"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Card 5 - Análise de Dados */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                <BarChart className="h-7 w-7 text-red-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">Análise de Dados</h3>
              <p className="text-white/70 mb-6">
                Monitoramos e analisamos métricas para otimizar estratégias e maximizar o retorno sobre investimento em redes sociais.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Relatórios personalizados</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Análise de performance</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insights estratégicos</span>
                </li>
              </ul>
              
              <motion.a
                href="#contato"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-red-400 font-medium"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Card 6 - Campanhas Pagas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
                <Award className="h-7 w-7 text-amber-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">Campanhas Pagas</h3>
              <p className="text-white/70 mb-6">
                Criamos e gerenciamos campanhas de anúncios em redes sociais com foco em resultados e otimização de investimento.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Segmentação avançada</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Criação de anúncios</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Otimização de campanhas</span>
                </li>
              </ul>
              
              <motion.a
                href="#contato"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-amber-400 font-medium"
              >
                Saiba mais
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de Plataformas
const PlatformsSection: React.FC = () => {
  // Dados das plataformas
  const platforms = [
    {
      id: 1,
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      color: "from-pink-500 to-purple-500",
      description: "Ideal para marcas visuais, produtos e serviços com forte apelo estético. Perfeito para engajamento com público jovem e adulto.",
      features: ["Stories", "Reels", "Feed", "IGTV", "Shopping"]
    },
    {
      id: 2,
      name: "Facebook",
      icon: <Facebook className="h-8 w-8" />,
      color: "from-blue-500 to-blue-400",
      description: "Excelente para construção de comunidade, relacionamento com clientes e campanhas segmentadas para diversos públicos.",
      features: ["Página", "Grupos", "Marketplace", "Eventos", "Anúncios"]
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <Linkedin className="h-8 w-8" />,
      color: "from-blue-600 to-blue-500",
      description: "Perfeito para B2B, networking profissional, recrutamento e posicionamento de autoridade em seu segmento.",
      features: ["Artigos", "Página Empresarial", "Grupos", "InMail", "Anúncios"]
    },
    {
      id: 4,
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      color: "from-blue-400 to-blue-300",
      description: "Ideal para comunicação rápida, atendimento ao cliente, monitoramento de tendências e engajamento em tempo real.",
      features: ["Tweets", "Threads", "Espaços", "Listas", "Momentos"]
    },
    {
      id: 5,
      name: "YouTube",
      icon: <Youtube className="h-8 w-8" />,
      color: "from-red-500 to-red-400",
      description: "Excelente para conteúdo educativo, demonstrações de produtos, tutoriais e construção de autoridade com vídeos.",
      features: ["Vídeos", "Shorts", "Lives", "Playlists", "Comunidade"]
    }
  ];
  
  return (
    <section className="py-24 relative">
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
            <Share2 size={16} className="mr-2" /> Plataformas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Presença <span className="text-primary">Multiplataforma</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Desenvolvemos estratégias específicas para cada rede social, maximizando o potencial de cada plataforma 
            de acordo com seu público e objetivos de negócio.
          </motion.p>
        </div>
        
        {/* Plataformas */}
        <div className="space-y-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-5">
                {/* Ícone e Nome */}
                <div className={`md:col-span-1 bg-gradient-to-br ${platform.color} p-8 flex flex-col items-center justify-center text-white`}>
                  <div className="mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center">{platform.name}</h3>
                </div>
                
                {/* Descrição e Recursos */}
                <div className="md:col-span-4 p-8">
                  <p className="text-white/80 mb-6">
                    {platform.description}
                  </p>
                  
                  <h4 className="text-sm uppercase text-white/50 mb-4">Recursos Principais</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 bg-gradient-to-r ${platform.color} bg-opacity-10 rounded-full text-sm font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Resultados e Métricas
const ResultsSection: React.FC = () => {
  // Dados das métricas
  const metrics = [
    {
      id: 1,
      title: "Engajamento",
      value: "+350%",
      description: "Aumento médio na taxa de engajamento dos nossos clientes",
      icon: <Heart className="h-6 w-6 text-pink-400" />
    },
    {
      id: 2,
      title: "Alcance",
      value: "+280%",
      description: "Crescimento médio no alcance orgânico das publicações",
      icon: <Users className="h-6 w-6 text-blue-400" />
    },
    {
      id: 3,
      title: "Conversões",
      value: "+200%",
      description: "Aumento médio na taxa de conversão via redes sociais",
      icon: <TrendingUp className="h-6 w-6 text-green-400" />
    },
    {
      id: 4,
      title: "ROI",
      value: "+320%",
      description: "Retorno médio sobre o investimento em campanhas pagas",
      icon: <BarChart className="h-6 w-6 text-purple-400" />
    }
  ];
  
  return (
    <section className="py-24 relative">
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
            <BarChart size={16} className="mr-2" /> Resultados
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Resultados <span className="text-primary">Mensuráveis</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Trabalhamos com foco em métricas e resultados concretos, garantindo que cada ação nas redes sociais 
            contribua para os objetivos de negócio dos nossos clientes.
          </motion.p>
        </div>
        
        {/* Métricas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                {metric.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{metric.title}</h3>
              <div className="text-primary text-4xl font-bold mb-3">{metric.value}</div>
              <p className="text-white/70 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Página principal de Social Media
const SocialMediaPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section Personalizada */}
      <HeroSection />
      
      {/* Serviços Section */}
      <ServicesSection />
      
      {/* Plataformas Section */}
      <PlatformsSection />
      
      {/* Resultados Section */}
      <ResultsSection />
      
      {/* Seção de Contato (componente reutilizável) */}
    </Layout>
  );
};

export default SocialMediaPage; 