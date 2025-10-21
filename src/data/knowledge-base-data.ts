import { Article, Category } from '../types/knowledge-base';

// Artigos da base de conhecimentos
export const articles: Article[] = [
  {
    id: 'seo-estrategico-para-pequenas-empresas',
    title: 'SEO Estratégico para Pequenas Empresas: Um Guia Completo',
    excerpt: 'Aprenda como implementar estratégias eficazes de SEO para aumentar a visibilidade da sua pequena empresa nos motores de busca.',
    content: `
      <h2>Introdução ao SEO para Pequenas Empresas</h2>
      <p>O SEO (Search Engine Optimization) é fundamental para qualquer negócio que deseja ter presença online. Para pequenas empresas, uma estratégia de SEO bem executada pode ser a diferença entre ser encontrado por potenciais clientes ou ficar invisível na vastidão da internet.</p>
      
      <p>Neste guia, vamos explorar as melhores práticas de SEO específicas para pequenas empresas, com foco em resultados práticos e de baixo custo.</p>
      
      <h2>Por que o SEO é Essencial para Pequenas Empresas?</h2>
      <ul>
        <li>Aumenta a visibilidade online sem grandes investimentos em publicidade</li>
        <li>Gera tráfego qualificado e direcionado para o seu site</li>
        <li>Constrói credibilidade e autoridade no seu nicho de mercado</li>
        <li>Oferece resultados duradouros e de longo prazo</li>
        <li>Proporciona vantagem competitiva sobre concorrentes que negligenciam o SEO</li>
      </ul>
      
      <h2>Elementos Fundamentais do SEO para Pequenas Empresas</h2>
      
      <h3>1. Pesquisa de Palavras-chave Focada no Nicho</h3>
      <p>Para pequenas empresas, é essencial focar em palavras-chave de nicho com intenção comercial clara. Busque termos específicos relacionados ao seu produto ou serviço, especialmente aqueles com concorrência moderada.</p>
      
      <p>Utilize ferramentas como Google Keyword Planner, Ubersuggest ou SEMrush para identificar palavras-chave relevantes para o seu negócio.</p>
      
      <h3>2. Otimização On-page</h3>
      <p>A otimização on-page envolve ajustar elementos do seu site para melhorar seu posicionamento nos resultados de busca:</p>
      
      <ul>
        <li>Títulos (tags H1, H2, H3) otimizados com palavras-chave relevantes</li>
        <li>Meta descrições persuasivas que incentivam cliques</li>
        <li>URLs amigáveis e descritivas</li>
        <li>Conteúdo de qualidade que responde às dúvidas dos usuários</li>
        <li>Otimização de imagens (alt text, compressão, dimensionamento)</li>
        <li>Estrutura interna de links lógica e bem planejada</li>
      </ul>
      
      <h3>3. SEO Local</h3>
      <p>Para pequenas empresas com presença física, o SEO local é crucial:</p>
      
      <ul>
        <li>Configure e otimize seu perfil no Google Meu Negócio</li>
        <li>Garanta consistência de NAP (Nome, Endereço, Telefone) em todas as plataformas</li>
        <li>Colete avaliações positivas de clientes</li>
        <li>Crie conteúdo localizado mencionando bairros, cidades e regiões atendidas</li>
        <li>Participe de diretórios locais relevantes</li>
      </ul>
      
      <h3>4. Construção de Autoridade</h3>
      <p>Mesmo sendo uma pequena empresa, você pode construir autoridade no seu setor:</p>
      
      <ul>
        <li>Crie conteúdo especializado que demonstre seu conhecimento</li>
        <li>Busque parcerias com outros sites e negócios locais</li>
        <li>Participe de eventos e comunidades do seu setor</li>
        <li>Obtenha backlinks de qualidade de sites relevantes</li>
      </ul>
      
      <h2>Ferramentas Acessíveis para SEO de Pequenas Empresas</h2>
      <p>Existem diversas ferramentas gratuitas ou de baixo custo que podem ajudar pequenas empresas com SEO:</p>
      
      <ul>
        <li>Google Search Console - monitoramento gratuito do desempenho do site</li>
        <li>Google Analytics - análise de tráfego e comportamento dos usuários</li>
        <li>Yoast SEO (para WordPress) - plugin de otimização on-page</li>
        <li>Ubersuggest - pesquisa de palavras-chave com versão gratuita</li>
        <li>Screaming Frog SEO Spider - versão gratuita para sites pequenos</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>O SEO para pequenas empresas não precisa ser complicado ou caro. Com uma abordagem estratégica focada nos fundamentos e nas necessidades específicas do seu negócio, é possível obter resultados significativos e sustentáveis.</p>
      
      <p>Lembre-se que o SEO é um trabalho contínuo e de longo prazo. Comece com pequenas melhorias, monitore os resultados e ajuste sua estratégia conforme necessário.</p>
    `,
    category: 'SEO Estratégico',
    readTime: 8,
    date: '15 Mar 2023',
    author: {
      name: 'Ana Silva',
      avatar: '/images/authors/ana-silva.jpg',
      role: 'Especialista em SEO'
    },
    tags: ['SEO', 'Marketing Digital', 'Pequenas Empresas', 'Otimização'],
    featured: true,
    popular: true
  },
  {
    id: 'principios-design-grafico-eficaz',
    title: 'Princípios Fundamentais do Design Gráfico Eficaz',
    excerpt: 'Descubra os princípios essenciais do design gráfico que podem transformar a comunicação visual da sua marca.',
    content: `
      <h2>Introdução aos Princípios do Design Gráfico</h2>
      <p>O design gráfico é muito mais do que criar peças visualmente atraentes. É uma forma de comunicação visual que combina arte e tecnologia para transmitir mensagens específicas a um público-alvo. Compreender os princípios fundamentais do design é essencial para criar materiais que não apenas pareçam bons, mas que também comuniquem efetivamente.</p>
      
      <p>Neste artigo, exploraremos os princípios essenciais que formam a base de qualquer design gráfico eficaz, independentemente da plataforma ou finalidade.</p>
      
      <h2>Os 7 Princípios Fundamentais do Design Gráfico</h2>
      
      <h3>1. Hierarquia Visual</h3>
      <p>A hierarquia visual orienta o olhar do espectador através do conteúdo na ordem de importância. Ela é criada através de:</p>
      
      <ul>
        <li>Variações de tamanho - elementos maiores parecem mais importantes</li>
        <li>Contraste de cores - elementos com maior contraste atraem mais atenção</li>
        <li>Posicionamento estratégico - elementos no topo ou centro geralmente recebem mais atenção</li>
        <li>Espaçamento - elementos isolados ganham mais destaque</li>
      </ul>
      
      <p>Uma hierarquia visual bem definida garante que o público absorva as informações na sequência correta e compreenda a mensagem principal.</p>
      
      <h3>2. Equilíbrio</h3>
      <p>O equilíbrio refere-se à distribuição do peso visual em um design. Pode ser:</p>
      
      <ul>
        <li>Simétrico - elementos distribuídos igualmente em ambos os lados</li>
        <li>Assimétrico - elementos diferentes em cada lado, mas ainda mantendo equilíbrio visual</li>
        <li>Radial - elementos dispostos em círculo a partir de um ponto central</li>
      </ul>
      
      <p>Um design equilibrado cria sensação de harmonia e estabilidade, enquanto o desequilíbrio intencional pode criar tensão e dinamismo.</p>
      
      <h3>3. Alinhamento</h3>
      <p>O alinhamento cria ordem e organização em um design. Elementos alinhados criam conexões visuais invisíveis que unificam o layout, mesmo quando os elementos estão distantes entre si.</p>
      
      <p>Tipos comuns de alinhamento incluem à esquerda, à direita, centralizado e justificado. A consistência no alinhamento é crucial para criar uma aparência profissional e organizada.</p>
      
      <h3>4. Proximidade</h3>
      <p>A proximidade sugere relacionamento entre elementos. Itens relacionados devem ser agrupados, enquanto elementos não relacionados devem ter espaço entre si.</p>
      
      <p>Este princípio ajuda a organizar informações, reduzir a desordem visual e criar uma estrutura clara que facilita a compreensão do conteúdo.</p>
      
      <h3>5. Contraste</h3>
      <p>O contraste chama a atenção e melhora a legibilidade. Pode ser criado através de:</p>
      
      <ul>
        <li>Cores - cores complementares ou de alto contraste</li>
        <li>Tamanho - elementos grandes versus pequenos</li>
        <li>Forma - formas orgânicas versus geométricas</li>
        <li>Textura - superfícies lisas versus texturizadas</li>
        <li>Tipografia - fontes serifadas versus sem serifa, bold versus light</li>
      </ul>
      
      <p>Um bom contraste não apenas melhora a estética, mas também a acessibilidade do design.</p>
      
      <h3>6. Repetição</h3>
      <p>A repetição de elementos visuais (cores, formas, texturas, etc.) cria consistência e reforça a identidade. Este princípio é fundamental para o branding, pois ajuda a criar reconhecimento e familiaridade.</p>
      
      <p>A repetição também cria ritmo visual e pode guiar o olhar através do design de maneira previsível e agradável.</p>
      
      <h3>7. Espaço em Branco</h3>
      <p>Também conhecido como espaço negativo, o espaço em branco é a área não preenchida ao redor dos elementos. É um componente ativo do design, não apenas um fundo vazio.</p>
      
      <p>O uso adequado do espaço em branco:</p>
      <ul>
        <li>Melhora a legibilidade e compreensão</li>
        <li>Cria elegância e sofisticação</li>
        <li>Permite que o design "respire"</li>
        <li>Direciona o foco para elementos importantes</li>
      </ul>
      
      <h2>Aplicando os Princípios em Diferentes Contextos</h2>
      
      <h3>Design para Mídias Sociais</h3>
      <p>Nas mídias sociais, onde o tempo de atenção é limitado, a hierarquia visual e o contraste são particularmente importantes. Designs simples com mensagens claras e elementos visuais impactantes tendem a ter melhor desempenho.</p>
      
      <h3>Design para Materiais Impressos</h3>
      <p>Em materiais impressos como folhetos e cartões de visita, o alinhamento e o espaço em branco são cruciais. A consistência no design através da repetição de elementos também ajuda a reforçar a identidade da marca.</p>
      
      <h3>Design para Web</h3>
      <p>No design web, a proximidade e a hierarquia são essenciais para a usabilidade. O contraste é fundamental para a acessibilidade, garantindo que o conteúdo seja legível para todos os usuários.</p>
      
      <h2>Conclusão</h2>
      <p>Dominar estes sete princípios fundamentais do design gráfico fornece uma base sólida para criar comunicações visuais eficazes em qualquer meio. Lembre-se que estes princípios não são regras rígidas, mas diretrizes que podem ser adaptadas e, ocasionalmente, quebradas intencionalmente para criar efeitos específicos.</p>
      
      <p>O design eficaz equilibra estética e funcionalidade, criando peças que não apenas atraem visualmente, mas também comunicam claramente a mensagem pretendida ao público-alvo.</p>
    `,
    category: 'Design Gráfico',
    readTime: 10,
    date: '22 Fev 2023',
    author: {
      name: 'Carlos Mendes',
      avatar: '/images/authors/carlos-mendes.jpg',
      role: 'Designer Sênior'
    },
    tags: ['Design Gráfico', 'Princípios de Design', 'Comunicação Visual', 'Branding'],
    featured: true
  }
];

// Categorias da base de conhecimentos
export const categories: Category[] = [
  {
    name: 'SEO Estratégico',
    count: 1
  },
  {
    name: 'Design Gráfico',
    count: 1
  }
];

// Função para obter artigos filtrados
export const getFilteredArticles = (
  articles: Article[],
  category: string = 'all',
  searchQuery: string = '',
  tag?: string
): Article[] => {
  return articles.filter((article) => {
    // Filtro por categoria
    const categoryMatch = category === 'all' || article.category === category;
    
    // Filtro por busca
    const searchMatch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filtro por tag
    const tagMatch = !tag || article.tags.includes(tag);
    
    return categoryMatch && searchMatch && tagMatch;
  });
};

// Função para obter artigos relacionados
export const getRelatedArticles = (
  currentArticleId: string,
  articles: Article[],
  limit: number = 3
): Article[] => {
  const currentArticle = articles.find(article => article.id === currentArticleId);
  
  if (!currentArticle) return [];
  
  return articles
    .filter(article => 
      article.id !== currentArticleId && 
      (article.category === currentArticle.category || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
}; 