import React from 'react'
import Layout from '../components/general/Layout'
import HeroPages from '../components/general/HeroPages'
import CtaSection from '../components/sections/CtaSection'
import ContactSection from '../components/sections/ContactSection'
import ProjectsSection from '../components/sections/ProjectsSection'

const PortfolioPage: React.FC = () => {
  // Dados dos projetos
  const projects = [
    {
      id: 1,
      title: 'Redesign da Marca Solaris',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1600775508114-5c30cf911a40?q=80&w=2574',
      client: 'Solaris Energia',
      year: '2023',
      description: 'Renovação completa da identidade visual para empresa de energia solar, incluindo logo, paleta de cores e materiais de comunicação.'
    },
    {
      id: 2,
      title: 'E-commerce Moda Sustentável',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2670',
      client: 'EcoVeste',
      year: '2023',
      description: 'Desenvolvimento de plataforma de e-commerce com foco em experiência do usuário e conversão de vendas.'
    },
    {
      id: 3,
      title: 'Campanha Lançamento Produto',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670',
      client: 'TechNova',
      year: '2022',
      description: 'Estratégia completa para redes sociais com foco no lançamento de novo produto tecnológico.'
    },
    {
      id: 4,
      title: 'SEO e Performance Digital',
      category: 'Marketing Digital',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426',
      client: 'Grupo Horizonte',
      year: '2022',
      description: 'Otimização de site para mecanismos de busca, resultando em aumento de 150% no tráfego orgânico.'
    },
    {
      id: 5,
      title: 'Identidade Visual Restaurante',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1583396618422-597b2755de83?q=80&w=2574',
      client: 'Sabor Autêntico',
      year: '2023',
      description: 'Criação de identidade visual completa para restaurante de alta gastronomia, incluindo menus, sinalização e materiais promocionais.'
    },
    {
      id: 6,
      title: 'Aplicativo de Serviços',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670',
      client: 'ServiçosJá',
      year: '2022',
      description: 'Design de interface para aplicativo mobile de contratação de serviços, com foco em usabilidade e experiência do usuário.'
    },
    {
      id: 7,
      title: 'Gestão de Redes Sociais',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574',
      client: 'Moda Elegance',
      year: '2023',
      description: 'Estratégia e produção de conteúdo para Instagram e Facebook, resultando em aumento de 200% no engajamento.'
    },
    {
      id: 8,
      title: 'Campanha Google Ads',
      category: 'Marketing Digital',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2574',
      client: 'Imobiliária Premium',
      year: '2022',
      description: 'Campanha de anúncios no Google com ROI de 450% e redução do custo por aquisição em 30%.'
    },
    {
      id: 9,
      title: 'Rebranding Completo',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2574',
      client: 'Financeira Futuro',
      year: '2023',
      description: 'Reposicionamento de marca para instituição financeira, incluindo nova identidade visual, tom de voz e estratégia de comunicação.'
    },
    {
      id: 10,
      title: 'Portal Corporativo',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669',
      client: 'Grupo Empresarial Delta',
      year: '2023',
      description: 'Desenvolvimento de portal corporativo com área de cliente, blog e integração com sistemas internos.'
    },
    {
      id: 11,
      title: 'Campanha de Influenciadores',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2631',
      client: 'Cosméticos Natureza',
      year: '2023',
      description: 'Estratégia e gestão de campanha com influenciadores digitais para lançamento de linha de produtos.'
    },
    {
      id: 12,
      title: 'Estratégia de Email Marketing',
      category: 'Marketing Digital',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670',
      client: 'E-commerce MegaStore',
      year: '2022',
      description: 'Desenvolvimento de fluxos de automação e campanhas de email marketing com aumento de 35% na taxa de conversão.'
    }
  ]

  return (
    <Layout>
      <HeroPages 
        title="NOSSO <br />PORTFÓLIO<span class='text-primary'>.</span>"
        subtitle="Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes."
        badge="Casos de Sucesso"
        backgroundImage="/lobo-hero-portfolio.jpg"
        height="h-[50vh] sm:h-[55vh] md:h-[60vh]"
        imageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          brightness: "75",
          contrast: "110",
          scale: 1.05
        }}
      />
      
      {/* Seção de Projetos */}
      <ProjectsSection projects={projects} />


    </Layout>
  )
}

export default PortfolioPage 