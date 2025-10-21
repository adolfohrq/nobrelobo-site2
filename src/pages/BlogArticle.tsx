import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/general/Layout';
import HeroPages from '../components/general/HeroPages';

// Dados do artigo sobre branding
const brandingArticle = {
  id: 'a-importancia-do-branding-para-pequenas-empresas',
  title: 'A Importância do Branding para Pequenas Empresas',
  category: 'Branding',
  image: 'https://images.unsplash.com/photo-1600775508114-5c30cf911a40?q=80&w=2574',
  readTime: '6 min de leitura',
  excerpt: 'Entenda por que investir em branding é essencial mesmo para pequenas empresas e como isso pode impactar seus resultados de forma significativa no mercado atual.',
  tags: ['Branding', 'Pequenas Empresas', 'Identidade Visual', 'Marketing'],
  content: `
    <div class="article-headline">
      <h2>Por que o branding é fundamental para pequenas empresas</h2>
      <div class="headline-decoration"></div>
    </div>

    <p class="article-intro">Em um mercado cada vez mais competitivo, ter um produto ou serviço de qualidade já não é suficiente para se destacar. O <strong>branding</strong>, ou gestão de marca, tornou-se um diferencial crucial para empresas de todos os portes, especialmente para pequenos negócios que precisam competir com empresas maiores e já estabelecidas no mercado.</p>
    
    <div class="article-callout">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="article-callout-icon">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16V12" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8H12.01" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p>Segundo pesquisas recentes, empresas com identidade visual consistente têm 33% mais chances de serem reconhecidas pelos clientes, mesmo em nichos altamente competitivos.</p>
    </div>
    
    <p>Muitos empreendedores ainda consideram o branding como um investimento exclusivo para grandes corporações, mas a realidade é justamente o oposto: empresas menores têm ainda mais a ganhar com uma estratégia de marca bem definida. Enquanto grandes empresas já possuem reconhecimento e uma base de clientes estabelecida, pequenos negócios precisam construir sua reputação desde o início, muitas vezes com recursos limitados.</p>
    
    <div class="article-headline">
      <h2>O que realmente é branding e por que ele importa</h2>
      <div class="headline-decoration"></div>
    </div>
    
    <p>Branding vai muito além de um logotipo bonito ou uma paleta de cores atraente. Trata-se da <strong>percepção completa</strong> que as pessoas têm do seu negócio – a impressão que sua marca deixa, os valores que ela transmite e a conexão emocional que estabelece com seus clientes em todos os pontos de contato.</p>
    
    <p>Uma estratégia de branding eficaz comunica claramente quatro aspectos fundamentais:</p>
    
    <ul class="article-list">
      <li>
        <div class="list-icon-container">
          <svg class="list-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ECC80B" stroke-width="2"/>
            <path d="M9 12L11 14L15 10" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <strong>Identidade:</strong> Quem você é como empresa, seus valores e sua missão no mercado
        </div>
      </li>
      <li>
        <div class="list-icon-container">
          <svg class="list-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ECC80B" stroke-width="2"/>
            <path d="M9 12L11 14L15 10" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <strong>Proposta de valor:</strong> O que você oferece e por que isso é relevante para seu público
        </div>
      </li>
      <li>
        <div class="list-icon-container">
          <svg class="list-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ECC80B" stroke-width="2"/>
            <path d="M9 12L11 14L15 10" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <strong>Diferenciação:</strong> Por que você é diferente dos concorrentes e o que torna seu negócio único
        </div>
      </li>
      <li>
        <div class="list-icon-container">
          <svg class="list-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ECC80B" stroke-width="2"/>
            <path d="M9 12L11 14L15 10" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <strong>Personalidade:</strong> Que valores você defende e qual o tom de comunicação da sua marca
        </div>
      </li>
    </ul>
    
    <div class="article-headline">
      <h2>Os 5 benefícios transformadores do branding para pequenas empresas</h2>
      <div class="headline-decoration"></div>
    </div>
    
    <div class="article-benefit">
      <span class="benefit-number">01</span>
      <h3>Reconhecimento e memorabilidade</h3>
      <p>Um branding consistente torna sua empresa mais facilmente reconhecível e memorável mesmo em um mar de concorrentes. Quando elementos visuais, tom de voz e mensagens são coerentes em todos os pontos de contato, os clientes começam a reconhecer sua marca instantaneamente, antes mesmo de ler seu nome.</p>
      <p>Uma pequena cafeteria local com uma identidade visual distintiva, por exemplo, pode se destacar entre dezenas de outras opções similares simplesmente por sua apresentação visual única e consistente.</p>
    </div>
    
    <div class="article-benefit">
      <span class="benefit-number">02</span>
      <h3>Diferenciação estratégica da concorrência</h3>
      <p>Em nichos saturados, onde vários negócios oferecem produtos ou serviços semelhantes, o branding é o que verdadeiramente diferencia uma empresa da outra. Sua identidade de marca comunica sutilmente o que torna seu negócio único e por que os clientes devem escolher você em vez da concorrência.</p>
      <p>Por exemplo, duas lojas de roupas podem vender produtos similares, mas aquela com um branding que comunica sustentabilidade e responsabilidade social atrairá um público específico que valoriza esses princípios.</p>
    </div>
    
    <div class="article-quote">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="quote-icon">
        <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 15.5304 9.78929 16.0391 9.41421 16.4142C9.03914 16.7893 8.53043 17 8 17H6M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17H16" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <blockquote>
        "Produtos são criados em fábricas, mas marcas são criadas na mente. O branding não é sobre fazer seu cliente escolher você em vez da concorrência. É sobre fazer seu cliente ver você como a única solução para o problema dele."
        <cite>— Scott Goodson, Fundador da StrawberryFrog</cite>
      </blockquote>
    </div>
    
    <div class="article-benefit">
      <span class="benefit-number">03</span>
      <h3>Construção de confiança e credibilidade</h3>
      <p>Um branding profissional e consistente transmite confiabilidade e credibilidade imediatas. Quando uma empresa se apresenta de forma coesa e profissional, os clientes tendem a confiar mais nela, mesmo que seja nova no mercado. Esse elemento é particularmente crucial para pequenas empresas que ainda estão construindo sua reputação.</p>
      <p>A consistência visual, verbal e de experiência cria uma percepção de solidez que tranquiliza clientes em potencial a fazer negócios com você.</p>
    </div>
    
    <div class="article-benefit">
      <span class="benefit-number">04</span>
      <h3>Conexão emocional profunda com os clientes</h3>
      <p>O branding eficaz vai muito além dos aspectos racionais e estabelece uma conexão emocional genuína com os clientes. Empresas que conseguem criar essa conexão transformam clientes ocasionais em verdadeiros defensores da marca, que não apenas retornam para novas compras, mas também recomendam o negócio para outras pessoas com entusiasmo.</p>
      <p>Essa dimensão emocional é o que separa marcas que são simplesmente "conhecidas" daquelas que são "amadas". Quando os clientes se identificam com os valores e a história da sua marca, eles desenvolvem uma lealdade que vai além da simples satisfação com o produto.</p>
    </div>
    
    <div class="article-benefit">
      <span class="benefit-number">05</span>
      <h3>Valor percebido significativamente mais alto</h3>
      <p>Empresas com branding forte são percebidas como mais valiosas, o que permite que cobrem preços mais altos por seus produtos ou serviços sem perder competitividade. Os clientes estão dispostos a pagar mais por marcas nas quais confiam e com as quais se identificam emocionalmente.</p>
      <p>Um pequeno restaurante com uma identidade visual sofisticada, por exemplo, pode cobrar mais por seus pratos do que concorrentes com qualidade similar, mas sem uma marca bem trabalhada.</p>
    </div>
    
    <div class="article-headline">
      <h2>Como implementar uma estratégia de branding eficaz</h2>
      <div class="headline-decoration"></div>
    </div>
    
    <div class="implementation-step">
      <div class="step-header">
        <div class="step-number">1</div>
        <h3>Defina sua missão e valores fundamentais</h3>
      </div>
      <p>Antes de desenvolver elementos visuais, defina claramente a missão do seu negócio e os valores que orientam suas ações. Essas definições servirão como base para todas as decisões de branding futuras e garantirão coerência ao longo do tempo.</p>
      <div class="step-tips">
        <strong>Dicas práticas:</strong>
        <ul>
          <li>Faça um workshop com sua equipe para definir valores essenciais</li>
          <li>Crie uma declaração de missão concisa em até 25 palavras</li>
          <li>Defina 3-5 valores fundamentais que realmente representem seu negócio</li>
        </ul>
      </div>
    </div>
    
    <div class="implementation-step">
      <div class="step-header">
        <div class="step-number">2</div>
        <h3>Conheça profundamente seu público-alvo</h3>
      </div>
      <p>Um branding eficaz fala diretamente com seu público ideal. Pesquise e entenda profundamente quem são seus clientes, o que valorizam, como tomam decisões de compra e quais são seus pontos de dor e aspirações.</p>
      <div class="step-tips">
        <strong>Dicas práticas:</strong>
        <ul>
          <li>Desenvolva personas detalhadas dos seus clientes ideais</li>
          <li>Realize entrevistas com clientes atuais para entender suas percepções</li>
          <li>Analise o comportamento online do seu público-alvo</li>
        </ul>
      </div>
    </div>
    
    <div class="implementation-step">
      <div class="step-header">
        <div class="step-number">3</div>
        <h3>Crie uma identidade visual coerente e memorável</h3>
      </div>
      <p>Desenvolva um sistema visual consistente que inclua logotipo, cores, tipografia e elementos gráficos. Esses elementos devem ser utilizados de forma consistente em todos os materiais e plataformas, criando uma experiência visual coesa e reconhecível.</p>
      <div class="step-tips">
        <strong>Dicas práticas:</strong>
        <ul>
          <li>Crie um manual de identidade visual simplificado</li>
          <li>Limite sua paleta de cores a 2-3 cores principais</li>
          <li>Escolha no máximo 2 famílias tipográficas complementares</li>
        </ul>
      </div>
    </div>
    
    <div class="implementation-step">
      <div class="step-header">
        <div class="step-number">4</div>
        <h3>Desenvolva uma voz e tom de comunicação distintivos</h3>
      </div>
      <p>Como sua marca se comunica é tão importante quanto sua aparência. Defina o tom de voz que melhor representa sua personalidade de marca e utilize-o consistentemente em textos de site, posts em redes sociais, emails e outros conteúdos.</p>
      <div class="step-tips">
        <strong>Dicas práticas:</strong>
        <ul>
          <li>Crie um guia de voz e tom para sua comunicação escrita</li>
          <li>Defina termos e frases características da sua marca</li>
          <li>Estabeleça diretrizes para comunicação nas redes sociais</li>
        </ul>
      </div>
    </div>
    
    <div class="implementation-step">
      <div class="step-header">
        <div class="step-number">5</div>
        <h3>Seja rigorosamente consistente em todos os pontos de contato</h3>
      </div>
      <p>Aplique sua identidade de marca de forma consistente em todos os pontos de contato com o cliente – desde seu site e redes sociais até embalagens, atendimento ao cliente, ambiente físico e experiência pós-venda.</p>
      <div class="step-tips">
        <strong>Dicas práticas:</strong>
        <ul>
          <li>Faça uma auditoria regular dos pontos de contato da sua marca</li>
          <li>Treine sua equipe para incorporar os valores da marca no atendimento</li>
          <li>Crie modelos padronizados para comunicações frequentes</li>
        </ul>
      </div>
    </div>
    
    <div class="article-callout article-callout-dark">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="article-callout-icon">
        <path d="M9.00016 16.2L4.80016 12L3.40016 13.4L9.00016 19L21.0002 7.00001L19.6002 5.60001L9.00016 16.2Z" fill="#ECC80B"/>
      </svg>
      <div>
        <h4>Dica para orçamentos limitados:</h4>
        <p>Mesmo com recursos reduzidos, é possível desenvolver um branding eficaz. Comece com elementos essenciais (logo, cores e tipografia básicas) e vá refinando sua identidade de marca gradualmente à medida que seu negócio cresce.</p>
      </div>
    </div>
    
    <div class="article-headline">
      <h2>O branding como investimento estratégico de longo prazo</h2>
      <div class="headline-decoration"></div>
    </div>
    
    <p>É fundamental entender que o branding não traz resultados instantâneos como algumas estratégias de marketing direto. Trata-se de um investimento estratégico de longo prazo que constrói valor para o negócio ao longo do tempo, criando fundamentos sólidos para o crescimento sustentável.</p>
    
    <p>Para pequenas empresas com orçamentos limitados, é possível iniciar com elementos básicos e ir refinando a estratégia de branding conforme o negócio cresce. O importante é manter a consistência e garantir que todas as decisões de negócio estejam alinhadas com a identidade da marca estabelecida.</p>
    
    <div class="article-checklist">
      <h4>Sinais de que seu branding está funcionando:</h4>
      <div class="checklist-items">
        <div class="checklist-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Clientes reconhecem sua marca facilmente</span>
        </div>
        <div class="checklist-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Aumento nas indicações de clientes</span>
        </div>
        <div class="checklist-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Clientes dispostos a pagar um valor premium</span>
        </div>
        <div class="checklist-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Maior taxa de retenção de clientes</span>
        </div>
        <div class="checklist-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#ECC80B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Funcionários orgulhosos de representar a marca</span>
        </div>
      </div>
    </div>
    
    <div class="article-headline">
      <h2>Conclusão: Branding como necessidade estratégica</h2>
      <div class="headline-decoration"></div>
    </div>
    
    <p>O branding não é um luxo reservado às grandes corporações – é uma necessidade estratégica para pequenas empresas que desejam se destacar em mercados competitivos. Ao investir em uma identidade de marca forte e coerente, pequenos negócios podem construir reconhecimento, confiança e lealdade, estabelecendo bases sólidas para crescimento sustentável a longo prazo.</p>
    
    <div class="article-final-note">
      <p>Lembre-se: sua marca é muito mais do que um logotipo ou slogan; é a percepção completa que as pessoas têm do seu negócio. Invista nela como investiria em qualquer outro aspecto fundamental do seu negócio e colha os benefícios duradouros de uma marca forte e memorável.</p>
    </div>
  `
};

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Verificar se o slug corresponde ao artigo esperado
    if (slug !== brandingArticle.id) {
      // Redirecionar para o blog se o artigo não for encontrado
      navigate('/blog');
    }
    
    // Scroll para o topo da página quando o artigo carrega
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  // Se não houver slug ou não for o artigo esperado, mostrar indicador de carregamento
  if (!slug || slug !== brandingArticle.id) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Layout>
      <Helmet>
        <title>{brandingArticle.title} | Nobre Lobo</title>
        <meta name="description" content={brandingArticle.excerpt} />
        <meta name="keywords" content={brandingArticle.tags.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={brandingArticle.title} />
        <meta property="og:description" content={brandingArticle.excerpt} />
        <meta property="og:image" content={brandingArticle.image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={brandingArticle.title} />
        <meta name="twitter:description" content={brandingArticle.excerpt} />
        <meta name="twitter:image" content={brandingArticle.image} />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": brandingArticle.title,
            "description": brandingArticle.excerpt,
            "image": brandingArticle.image,
            "keywords": brandingArticle.tags.join(','),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://nobrelobo.com/blog/${brandingArticle.id}`
            }
          })}
        </script>
        
        {/* Estilos específicos para o artigo */}
        <style>
          {`
            /* Estilos gerais do artigo */
            .article-content {
              font-family: 'Poppins', sans-serif;
              line-height: 1.8;
              color: rgba(255, 255, 255, 0.9);
            }

            /* Estilo para os títulos */
            .article-headline {
              position: relative;
              margin: 3rem 0 2rem;
            }

            .article-headline h2 {
              font-family: 'Unbounded', sans-serif;
              font-size: 2.25rem;
              color: #ECC80B;
              margin-bottom: 1rem;
              line-height: 1.3;
            }

            .headline-decoration {
              height: 4px;
              width: 80px;
              background-color: #ECC80B;
              border-radius: 2px;
              margin-bottom: 2rem;
            }

            /* Estilo para texto de introdução */
            .article-intro {
              font-size: 1.25rem;
              line-height: 1.8;
              color: rgba(255, 255, 255, 0.95);
              margin-bottom: 2rem;
              font-weight: 400;
            }

            /* Estilo para callouts */
            .article-callout {
              background-color: rgba(236, 200, 11, 0.1);
              border-left: 4px solid #ECC80B;
              border-radius: 0.5rem;
              padding: 1.5rem;
              margin: 2rem 0;
              display: flex;
              align-items: flex-start;
              gap: 1rem;
            }

            .article-callout-dark {
              background-color: rgba(255, 255, 255, 0.05);
            }

            .article-callout p {
              margin: 0;
              font-style: italic;
            }

            .article-callout-icon {
              flex-shrink: 0;
            }

            /* Estilo para imagens */
            .article-image {
              margin: 2.5rem 0;
              max-width: 100%;
            }

            .article-image img {
              width: 100%;
              max-height: 400px;
              object-fit: cover;
              border-radius: 1rem;
              display: block;
            }

            .article-image figcaption {
              font-size: 0.9rem;
              color: rgba(255, 255, 255, 0.6);
              text-align: center;
              margin-top: 0.75rem;
              font-style: italic;
            }

            /* Estilo para listas */
            .article-list {
              list-style: none;
              padding: 0;
              margin: 2rem 0;
            }

            .article-list li {
              display: flex;
              margin-bottom: 1.25rem;
              align-items: flex-start;
              gap: 1rem;
            }

            .list-icon-container {
              flex-shrink: 0;
              width: 24px;
              height: 24px;
            }

            .list-icon {
              width: 24px;
              height: 24px;
            }

            /* Estilo para blocos de benefícios */
            .article-benefit {
              margin: 3rem 0;
              position: relative;
              padding-left: 1rem;
              border-left: 2px solid rgba(236, 200, 11, 0.3);
            }

            .benefit-number {
              position: absolute;
              top: 0;
              left: -1.25rem;
              font-family: 'Unbounded', sans-serif;
              font-size: 0.9rem;
              background-color: #ECC80B;
              color: #000;
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
            }

            .article-benefit h3 {
              font-family: 'Unbounded', sans-serif;
              color: #fff;
              font-size: 1.5rem;
              margin-bottom: 1.25rem;
              padding-left: 1.5rem;
            }

            /* Estilo para citações */
            .article-quote {
              background-color: rgba(255, 255, 255, 0.03);
              border-radius: 1rem;
              padding: 2rem;
              margin: 3rem 0;
              position: relative;
            }

            .quote-icon {
              position: absolute;
              top: -1.25rem;
              left: 2rem;
            }

            .article-quote blockquote {
              font-style: italic;
              font-size: 1.25rem;
              line-height: 1.8;
              color: rgba(255, 255, 255, 0.9);
              margin: 0;
              padding: 0;
              border: none;
            }

            .article-quote cite {
              display: block;
              margin-top: 1rem;
              font-style: normal;
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.6);
            }

            /* Estilo para etapas de implementação */
            .implementation-step {
              margin: 2.5rem 0;
              padding: 1.5rem;
              background-color: rgba(255, 255, 255, 0.03);
              border-radius: 1rem;
            }

            .step-header {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1.25rem;
            }

            .step-number {
              font-family: 'Unbounded', sans-serif;
              font-size: 1.25rem;
              font-weight: bold;
              width: 3rem;
              height: 3rem;
              background-color: #ECC80B;
              color: #000;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }

            .implementation-step h3 {
              font-family: 'Unbounded', sans-serif;
              font-size: 1.25rem;
              color: #fff;
              margin: 0;
              margin-left: 0.5rem;
            }

            .step-tips {
              margin-top: 1.5rem;
              background-color: rgba(236, 200, 11, 0.05);
              border-radius: 0.5rem;
              padding: 1rem 1.5rem;
            }

            .step-tips strong {
              display: block;
              margin-bottom: 0.5rem;
              color: #ECC80B;
            }

            .step-tips ul {
              margin: 0;
              padding-left: 1.25rem;
            }

            .step-tips li {
              margin-bottom: 0.5rem;
            }

            /* Estilo para checklists */
            .article-checklist {
              background-color: rgba(255, 255, 255, 0.03);
              border-radius: 1rem;
              padding: 1.5rem 2rem;
              margin: 2.5rem 0;
            }

            .article-checklist h4 {
              color: #ECC80B;
              font-family: 'Unbounded', sans-serif;
              margin-bottom: 1.25rem;
            }

            .checklist-items {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 1rem;
            }

            .checklist-item {
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }

            /* Estilo para nota final */
            .article-final-note {
              background-color: rgba(236, 200, 11, 0.1);
              border-radius: 1rem;
              padding: 2rem;
              margin: 3rem 0 1rem;
              text-align: center;
            }

            .article-final-note p {
              font-size: 1.2rem;
              margin: 0;
              line-height: 1.8;
            }

            /* Estilos para responsividade */
            @media (max-width: 768px) {
              .article-headline h2 {
                font-size: 1.75rem;
              }
              
              .article-intro {
                font-size: 1.1rem;
              }
              
              .article-quote blockquote {
                font-size: 1.1rem;
              }
              
              .checklist-items {
                grid-template-columns: 1fr;
              }
              
              .article-image {
                margin: 1.5rem 0;
              }
              
              .article-image img {
                max-height: 300px;
              }
            }
          `}
        </style>
      </Helmet>
      
      <HeroPages 
        title={brandingArticle.title}
        subtitle={brandingArticle.excerpt}
        badge={brandingArticle.category}
        backgroundImage={brandingArticle.image}
        height="h-[50vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "65",
          contrast: "125",
          scale: 1.12
        }}
      />
      
      <section className="py-16 relative">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Layout principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Conteúdo principal */}
            <motion.div 
              className="lg:col-span-10 lg:col-start-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Início do artigo com borda superior */}
              <div className="w-32 h-1 bg-primary/30 rounded-full mb-10"></div>
              
              {/* Metadados do artigo */}
              <div className="flex flex-wrap gap-4 items-center mb-10">
                <div className="inline-block bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-medium">
                  {brandingArticle.category}
                </div>
                <div className="text-white/50 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  {brandingArticle.readTime}
                </div>
              </div>
              
              {/* Conteúdo formatado do artigo */}
              <div className="article-content bg-white/[0.02] p-8 rounded-xl">
                <div 
                  dangerouslySetInnerHTML={{ __html: brandingArticle.content }}
                />
              </div>
              
              {/* Separador visual antes das tags */}
              <div className="flex items-center my-12">
                <div className="flex-grow h-px bg-white/10"></div>
                <div className="mx-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M12 2L15 9L22 10L17 15L18 22L12 19L6 22L7 15L2 10L9 9L12 2Z" fill="#ECC80B"/>
                  </svg>
                </div>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>
              
              {/* Tags do artigo com design melhorado */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-white text-lg font-gilroy font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {brandingArticle.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/blog?tag=${tag}`}
                      className="px-4 py-2 bg-white/5 hover:bg-primary/20 rounded-full text-sm text-white/70 hover:text-white transition-colors flex items-center"
                    >
                      <span className="text-primary mr-1">#</span>{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Compartilhar */}
              <div className="mt-8 bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-white text-lg font-gilroy font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                  </svg>
                  Compartilhar
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(brandingArticle.title)}&url=${encodeURIComponent(`https://nobrelobo.com/blog/${brandingArticle.id}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 rounded-full text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="text-sm">Twitter</span>
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://nobrelobo.com/blog/${brandingArticle.id}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 rounded-full text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://nobrelobo.com/blog/${brandingArticle.id}`)}&title=${encodeURIComponent(brandingArticle.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 rounded-full text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href={`mailto:?subject=${encodeURIComponent(brandingArticle.title)}&body=${encodeURIComponent(`Confira este artigo: https://nobrelobo.com/blog/${brandingArticle.id}`)}`} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
              
              {/* Voltar para Blog */}
              <div className="mt-12">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-primary/20 rounded-full text-white hover:text-primary transition-colors group"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-primary group-hover:transform group-hover:-translate-x-1 transition-transform">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Voltar para o Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle; 