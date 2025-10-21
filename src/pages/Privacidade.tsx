import React from 'react';
import Layout from '../components/general/Layout';
import { motion } from 'framer-motion';
import SectionHeader from '../components/general/SectionHeader';
import HeroPages from '../components/general/HeroPages';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

const Privacidade: React.FC = () => {
  return (
    <Layout>
      <HeroPages 
        title="POLÍTICA DE <br />PRIVACIDADE<span class='text-primary'>.</span>"
        subtitle="Transparência e proteção dos seus dados pessoais são fundamentais para nós. Conheça como coletamos, usamos e protegemos suas informações."
        badge="Privacidade"
        backgroundImage="/lobo-hero-about.jpg"
        height="h-[50vh] sm:h-[55vh] md:h-[60vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "75",
          contrast: "110",
          scale: 1.05
        }}
      />

      {/* Introdução */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-gilroy font-bold text-white mb-6">
              Sua <span className="text-primary">Privacidade</span> é Nossa Prioridade
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Na Nobre Lobo, valorizamos a confiança que você deposita em nós. Esta política de privacidade 
              explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
            </p>
          </motion.div>

          {/* Cards de princípios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Transparência",
                description: "Comunicamos claramente como seus dados são utilizados e para quais finalidades."
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Segurança",
                description: "Implementamos medidas técnicas e organizacionais para proteger suas informações."
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Controle",
                description: "Você tem controle total sobre seus dados e pode solicitá-los a qualquer momento."
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-gilroy font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-white/70">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Coletadas */}
      <section className="py-24 relative bg-white/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Informações que Coletamos"
            subtitle="Coletamos apenas as informações necessárias para fornecer nossos serviços e melhorar sua experiência."
            badge="Coleta de Dados"
            floatingTitleText="DADOS"
            iconComponent={<Database className="w-8 h-8 text-primary" />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Dados Pessoais */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-gilroy font-bold text-white mb-6 flex items-center">
                <UserCheck className="w-6 h-6 text-primary mr-3" />
                Dados Pessoais
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Nome completo e informações de contato</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Endereço de e-mail e telefone</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Informações da empresa (quando aplicável)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Preferências de comunicação</span>
                </li>
              </ul>
            </motion.div>

            {/* Dados Técnicos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-gilroy font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 text-primary mr-3" />
                Dados Técnicos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Endereço IP e informações do navegador</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Cookies e tecnologias similares</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Dados de uso do site e interações</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Informações de dispositivo e localização</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Usamos os Dados */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Como Utilizamos suas Informações"
            subtitle="Utilizamos seus dados exclusivamente para fornecer serviços de qualidade e melhorar sua experiência."
            badge="Uso dos Dados"
            floatingTitleText="UTILIZAÇÃO"
            iconComponent={<Eye className="w-8 h-8 text-primary" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Prestação de Serviços",
                description: "Fornecer nossos serviços de marketing digital, desenvolvimento web e consultoria estratégica.",
                icon: <FileText className="w-6 h-6" />
              },
              {
                title: "Comunicação",
                description: "Enviar informações sobre nossos serviços, atualizações e conteúdo relevante.",
                icon: <UserCheck className="w-6 h-6" />
              },
              {
                title: "Melhoria Contínua",
                description: "Analisar dados para melhorar nossos serviços e desenvolver novas soluções.",
                icon: <Database className="w-6 h-6" />
              },
              {
                title: "Suporte Técnico",
                description: "Prestar suporte e assistência técnica quando necessário.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Cumprimento Legal",
                description: "Atender obrigações legais e regulamentares aplicáveis.",
                icon: <Lock className="w-6 h-6" />
              },
              {
                title: "Segurança",
                description: "Proteger contra fraudes, abusos e garantir a segurança dos nossos serviços.",
                icon: <Eye className="w-6 h-6" />
              }
            ].map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {use.icon}
                </div>
                <h3 className="text-lg font-gilroy font-bold text-white mb-3">{use.title}</h3>
                <p className="text-white/70 text-sm">{use.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compartilhamento de Dados */}
      <section className="py-24 relative bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-gilroy font-bold text-white mb-8 text-center">
              <span className="text-primary">Compartilhamento</span> de Dados
            </h2>
            <p className="text-xl text-white/70 text-center mb-12">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto nas situações descritas abaixo:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Prestadores de Serviços",
                  description: "Compartilhamos dados apenas com prestadores de serviços confiáveis que nos ajudam a operar nosso negócio, sempre sob contratos de confidencialidade."
                },
                {
                  title: "Obrigações Legais",
                  description: "Podemos divulgar informações quando exigido por lei, ordem judicial ou para proteger nossos direitos legais."
                },
                {
                  title: "Consentimento Explícito",
                  description: "Compartilhamos dados apenas quando você nos dá consentimento explícito para fazê-lo."
                },
                {
                  title: "Proteção de Direitos",
                  description: "Para proteger os direitos, propriedade ou segurança da Nobre Lobo, nossos usuários ou terceiros."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-gilroy font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seus Direitos */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Seus Direitos"
            subtitle="Você tem controle total sobre seus dados pessoais. Conheça seus direitos e como exercê-los."
            badge="Direitos do Usuário"
            floatingTitleText="DIREITOS"
            iconComponent={<UserCheck className="w-8 h-8 text-primary" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Acesso",
                description: "Solicitar uma cópia dos dados pessoais que temos sobre você.",
                icon: <Eye className="w-6 h-6" />
              },
              {
                title: "Retificação",
                description: "Corrigir dados incorretos ou incompletos em nossos registros.",
                icon: <FileText className="w-6 h-6" />
              },
              {
                title: "Exclusão",
                description: "Solicitar a exclusão dos seus dados pessoais de nossos sistemas.",
                icon: <Database className="w-6 h-6" />
              },
              {
                title: "Portabilidade",
                description: "Receber seus dados em formato estruturado e legível por máquina.",
                icon: <Lock className="w-6 h-6" />
              },
              {
                title: "Limitação",
                description: "Restringir o processamento dos seus dados em certas circunstâncias.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Oposição",
                description: "Opor-se ao processamento dos seus dados para fins específicos.",
                icon: <UserCheck className="w-6 h-6" />
              }
            ].map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {right.icon}
                </div>
                <h3 className="text-lg font-gilroy font-bold text-white mb-3">{right.title}</h3>
                <p className="text-white/70 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-gilroy font-bold text-white mb-4">
                Como Exercer seus Direitos
              </h3>
              <p className="text-white/70 mb-6">
                Para exercer qualquer um dos seus direitos, entre em contato conosco através do e-mail:
              </p>
              <a 
                href="mailto:privacidade@nobrelobo.com"
                className="text-primary font-bold text-lg hover:text-primary/80 transition-colors"
              >
                privacidade@nobrelobo.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-24 relative bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-gilroy font-bold text-white mb-8 text-center">
              <span className="text-primary">Cookies</span> e Tecnologias Similares
            </h2>
            <p className="text-xl text-white/70 text-center mb-12">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Cookies Essenciais",
                  description: "Necessários para o funcionamento básico do site e não podem ser desativados.",
                  type: "Obrigatórios"
                },
                {
                  title: "Cookies de Desempenho",
                  description: "Coletam informações sobre como você usa nosso site para melhorar sua experiência.",
                  type: "Opcionais"
                },
                {
                  title: "Cookies de Funcionalidade",
                  description: "Permitem que o site lembre de suas escolhas e forneça recursos aprimorados.",
                  type: "Opcionais"
                },
                {
                  title: "Cookies de Marketing",
                  description: "Usados para exibir anúncios relevantes e medir a eficácia das campanhas.",
                  type: "Opcionais"
                }
              ].map((cookie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-gilroy font-bold text-white">{cookie.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cookie.type === 'Obrigatórios' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {cookie.type}
                    </span>
                  </div>
                  <p className="text-white/70">{cookie.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Segurança */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Segurança dos Dados"
            subtitle="Implementamos medidas rigorosas de segurança para proteger suas informações contra acesso não autorizado."
            badge="Segurança"
            floatingTitleText="PROTEÇÃO"
            iconComponent={<Shield className="w-8 h-8 text-primary" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-gilroy font-bold text-white mb-6">Medidas Técnicas</h3>
              {[
                "Criptografia SSL/TLS para transmissão de dados",
                "Armazenamento seguro em servidores protegidos",
                "Backup regular e recuperação de desastres",
                "Monitoramento contínuo de segurança",
                "Atualizações regulares de software e sistemas"
              ].map((measure, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">{measure}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-gilroy font-bold text-white mb-6">Medidas Organizacionais</h3>
              {[
                "Acesso restrito aos dados pessoais",
                "Treinamento regular da equipe em privacidade",
                "Políticas internas de segurança de dados",
                "Auditorias regulares de conformidade",
                "Procedimentos de resposta a incidentes"
              ].map((measure, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">{measure}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alterações na Política */}
      <section className="py-24 relative bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-gilroy font-bold text-white mb-8">
              <span className="text-primary">Alterações</span> nesta Política
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Podemos atualizar esta política de privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares.
            </p>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-gilroy font-bold text-white mb-4">
                Como Seremos Notificados
              </h3>
              <p className="text-white/70 mb-6">
                Quando fizermos alterações significativas nesta política, notificaremos você através de:
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• E-mail para o endereço registrado em sua conta</li>
                <li>• Aviso proeminente em nosso site</li>
                <li>• Notificação através dos nossos canais de comunicação</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-gilroy font-bold text-white mb-8">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Se você tiver dúvidas sobre esta política de privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-gilroy font-bold text-white mb-4">E-mail</h3>
                <a 
                  href="mailto:privacidade@nobrelobo.com"
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  privacidade@nobrelobo.com
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-gilroy font-bold text-white mb-4">Telefone</h3>
                <a 
                  href="tel:+5511999999999"
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>

            <div className="mt-12 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-gilroy font-bold text-white mb-4">
                Última Atualização
              </h3>
              <p className="text-white/70">
                Esta política de privacidade foi atualizada pela última vez em <strong>15 de dezembro de 2024</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacidade;
