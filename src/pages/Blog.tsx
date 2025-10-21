import React, { useState } from 'react'
import Layout from '../components/general/Layout'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import BlogCard from '../components/general/BlogCard'
import FeaturedPostCard from '../components/general/FeaturedPostCard'

import HeroPages from '../components/general/HeroPages'
import BlogSidebar from '../components/general/BlogSidebar'

const BlogPage: React.FC = () => {
  // Categorias de posts
  const categories = ['Todos', 'Marketing Digital', 'Branding', 'Design', 'Redes Sociais', 'SEO']
  const [activeCategory, setActiveCategory] = useState('Todos')

  // Post em destaque
  const featuredPost = {
    id: 1,
    title: 'Como o Marketing Digital Transformou o Mercado em 2023',
    category: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426',
    author: 'Amanda Silva',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000',
    date: '15 de Março, 2023',
    readTime: '8 min de leitura',
    excerpt: 'Descubra as principais tendências de marketing digital que transformaram o mercado em 2023 e como aplicá-las em sua estratégia.',
    tags: ['Marketing Digital', 'Tendências', 'Estratégia']
  }

  // Dados dos posts do blog
  const posts = [
    {
      id: 2,
      title: 'A Importância do Branding para Pequenas Empresas',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1600775508114-5c30cf911a40?q=80&w=2574',
      author: 'Rafael Mendes',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
      date: '28 de Fevereiro, 2023',
      readTime: '6 min de leitura',
      excerpt: 'Entenda por que investir em branding é essencial mesmo para pequenas empresas e como isso pode impactar seus resultados.',
      tags: ['Branding', 'Pequenas Empresas', 'Identidade Visual']
    },
    {
      id: 3,
      title: 'Princípios de UX/UI Design para Conversão',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2670',
      author: 'Carla Oliveira',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000',
      date: '10 de Fevereiro, 2023',
      readTime: '7 min de leitura',
      excerpt: 'Conheça os princípios fundamentais de UX/UI design que podem aumentar significativamente as taxas de conversão do seu site.',
      tags: ['UX Design', 'UI Design', 'Conversão']
    },
    {
      id: 4,
      title: 'Estratégias Avançadas de SEO para 2023',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2574',
      author: 'Lucas Santos',
      authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
      date: '5 de Janeiro, 2023',
      readTime: '9 min de leitura',
      excerpt: 'Descubra as técnicas mais avançadas de SEO para posicionar seu site nos primeiros resultados de busca em 2023.',
      tags: ['SEO', 'Google', 'Tráfego Orgânico']
    },
    {
      id: 5,
      title: 'Como Criar Conteúdo Viral para Redes Sociais',
      category: 'Redes Sociais',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574',
      author: 'Juliana Costa',
      authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000',
      date: '18 de Dezembro, 2022',
      readTime: '5 min de leitura',
      excerpt: 'Aprenda técnicas comprovadas para criar conteúdo com alto potencial de viralização nas principais redes sociais.',
      tags: ['Redes Sociais', 'Conteúdo Viral', 'Engajamento']
    },
    {
      id: 6,
      title: 'O Impacto da Inteligência Artificial no Marketing',
      category: 'Marketing Digital',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670',
      author: 'Pedro Almeida',
      authorImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000',
      date: '30 de Novembro, 2022',
      readTime: '8 min de leitura',
      excerpt: 'Entenda como a inteligência artificial está revolucionando as estratégias de marketing e como aproveitar essa tecnologia.',
      tags: ['Inteligência Artificial', 'Marketing Digital', 'Tecnologia']
    },
    {
      id: 7,
      title: 'Psicologia das Cores no Branding',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2574',
      author: 'Amanda Silva',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000',
      date: '15 de Novembro, 2022',
      readTime: '6 min de leitura',
      excerpt: 'Descubra como a escolha das cores pode influenciar a percepção da sua marca e impactar o comportamento dos consumidores.',
      tags: ['Branding', 'Psicologia das Cores', 'Identidade Visual']
    },
    {
      id: 8,
      title: 'Tendências de Design para Sites em 2023',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1583396618422-597b2755de83?q=80&w=2574',
      author: 'Rafael Mendes',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
      date: '2 de Novembro, 2022',
      readTime: '7 min de leitura',
      excerpt: 'Conheça as principais tendências de design para sites que dominarão o mercado em 2023 e como aplicá-las em seu projeto.',
      tags: ['Design', 'Web Design', 'Tendências']
    },
    {
      id: 9,
      title: 'Como Aumentar o Engajamento no Instagram',
      category: 'Redes Sociais',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670',
      author: 'Carla Oliveira',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000',
      date: '20 de Outubro, 2022',
      readTime: '5 min de leitura',
      excerpt: 'Estratégias comprovadas para aumentar o engajamento do seu perfil no Instagram e construir uma comunidade ativa.',
      tags: ['Instagram', 'Redes Sociais', 'Engajamento']
    }
  ]

  // Posts populares para sidebar
  const popularPosts = [
    {
      id: 1,
      title: 'Como o Marketing Digital Transformou o Mercado em 2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426',
      date: '15 de Março, 2023'
    },
    {
      id: 4,
      title: 'Estratégias Avançadas de SEO para 2023',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2574',
      date: '5 de Janeiro, 2023'
    },
    {
      id: 6,
      title: 'O Impacto da Inteligência Artificial no Marketing',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670',
      date: '30 de Novembro, 2022'
    },
    {
      id: 9,
      title: 'Como Aumentar o Engajamento no Instagram',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670',
      date: '20 de Outubro, 2022'
    }
  ]

  // Lista de todas as tags
  const allTags = ['Marketing Digital', 'Tendências', 'Estratégia', 'Branding', 'Pequenas Empresas', 
    'Identidade Visual', 'UX Design', 'UI Design', 'Conversão', 'SEO', 'Google', 
    'Tráfego Orgânico', 'Redes Sociais', 'Conteúdo Viral', 'Engajamento', 
    'Inteligência Artificial', 'Tecnologia', 'Psicologia das Cores', 'Web Design', 'Instagram']

  // Filtra os posts com base na categoria selecionada
  const filteredPosts = activeCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  // Newsletter form state
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail('')
    }, 500)
  }

  return (
    <Layout>
      <Helmet>
        <title>Blog | Marketing Digital, Design e Tecnologia | Nobre Lobo</title>
        <meta name="description" content="Insights especializados em marketing digital, design e tecnologia. Artigos para impulsionar seu negócio digital." />
        <meta name="keywords" content="marketing digital, design, tecnologia, blog, artigos, estratégias, SEO, branding" />
        <meta property="og:title" content="Blog | Nobre Lobo" />
        <meta property="og:description" content="Insights especializados em marketing digital, design e tecnologia" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nobrelobo.com/blog" />
        <meta property="og:image" content="https://nobrelobo.com/lobo-hero-blog.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Nobre Lobo" />
        <meta name="twitter:description" content="Insights especializados em marketing digital, design e tecnologia" />
        <meta name="twitter:image" content="https://nobrelobo.com/lobo-hero-blog.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Nobre Lobo",
            "description": "Insights especializados em marketing digital, design e tecnologia",
            "url": "https://nobrelobo.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Nobre Lobo",
              "url": "https://nobrelobo.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nobrelobo.com/logo.png"
              }
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Como o Marketing Digital Transformou o Mercado em 2023",
                "url": "https://nobrelobo.com/blog/como-o-marketing-digital-transformou-o-mercado-em-2023",
                "datePublished": "2023-03-15",
                "author": {
                  "@type": "Person",
                  "name": "Amanda Silva"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "A Importância do Branding para Pequenas Empresas",
                "url": "https://nobrelobo.com/blog/a-importancia-do-branding-para-pequenas-empresas",
                "datePublished": "2023-02-28",
                "author": {
                  "@type": "Person",
                  "name": "Rafael Mendes"
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <HeroPages 
        title="NOSSO <br />BLOG<span class='text-primary'>.</span>"
        subtitle="Insights, estudos de caso e novidades sobre marketing digital, design e tecnologia."
        badge="Insights Digitais"
        backgroundImage="/lobo-hero-blog.jpg"
        height="h-[50vh] sm:h-[55vh] md:h-[60vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "75",
          contrast: "110",
          scale: 1
        }}
      />
      
      {/* Layout principal com sidebar e conteúdo */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Post em destaque - visível apenas em telas maiores */}
          <div className="mb-16">
            <FeaturedPostCard post={featuredPost} />
          </div>
          
          {/* Layout de duas colunas */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar à esquerda */}
            <BlogSidebar 
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              popularPosts={popularPosts}
              tags={allTags.slice(0, 15)} // Limitando para não sobrecarregar
            />
            
            {/* Conteúdo principal */}
            <div className="flex-1">
              {/* Cabeçalho da seção e filtros */}
              <div className="mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-gilroy font-bold text-white mb-4 flex items-center">
                    {activeCategory === 'Todos' ? 'Todos os Artigos' : activeCategory}
                    <span className="text-primary ml-2">.</span>
                  </h2>
                  
                  <div className="flex items-center text-white/60 text-sm">
                    <span>Mostrando {filteredPosts.length} artigos</span>
                    <span className="mx-2">•</span>
                    <span>{activeCategory === 'Todos' ? 'Todas as categorias' : `Categoria: ${activeCategory}`}</span>
                  </div>
                  
                  {/* Filtros em layout mobile */}
                  <div className="flex flex-wrap gap-2 mt-6 lg:hidden">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className={`py-2 px-4 rounded-full text-sm transition-colors ${
                          activeCategory === category
                            ? 'bg-primary text-black font-medium'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Grade de posts */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="bg-white/5 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-medium text-white mb-2">Nenhum artigo encontrado</h3>
                  <p className="text-white/70">Não encontramos artigos nesta categoria. Tente selecionar outra categoria.</p>
                </div>
              )}
              
              {/* Paginação */}
              {filteredPosts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    <button className="w-10 h-10 rounded-lg bg-primary text-black flex items-center justify-center font-medium">1</button>
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">2</button>
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">3</button>
                    
                    <span className="text-white/50 mx-1">...</span>
                    
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">8</button>
                    
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      

    </Layout>
  )
}

export default BlogPage 