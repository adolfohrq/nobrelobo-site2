import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../general/SectionHeader'

// Interface para os projetos
interface Project {
  id: number
  title: string
  category: string
  image: string
  client: string
  year: string
  description: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Categorias de projetos
  const categories = ['Todos', 'Branding', 'Web Design', 'Social Media', 'Marketing Digital']
  const [activeCategory, setActiveCategory] = useState('Todos')
  
  // Paginação
  const projectsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  
  // Resetar a página quando mudar a categoria
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  // Filtra os projetos com base na categoria selecionada
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  // Calcular o número total de páginas
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  
  // Obter os projetos da página atual
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  
  // Funções para navegação
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }
  
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className="py-8 md:py-12 relative">
      {/* Fundo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-gradient-to-b from-primary/3 to-transparent rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-gradient-to-t from-primary/3 to-transparent rounded-full blur-[100px] opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 lg:mb-16">
          <SectionHeader
            title={<>Nossos <span className="text-primary">Projetos</span></>}
            subtitle="Conheça alguns dos trabalhos que desenvolvemos para clientes em diferentes segmentos e áreas de atuação."
            badge="Portfólio"
            floatingTitleText="Trabalhos"
            iconComponent={
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9L11 12L8 15M13 15H16M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-black shadow-lg' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Status */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center text-sm text-white/60 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 shadow-md">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
          </div>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentProjects.length > 0 ? (
            currentProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-full bg-transparent rounded-xl overflow-hidden transition-all duration-500 group-hover:translate-y-[-8px] border border-white/10 group-hover:border-primary/20 shadow-lg">
                  {/* Imagem do projeto */}
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    {/* Overlay com gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85"></div>
                    
                    {/* Badge de categoria */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-black/40 backdrop-blur-sm text-primary border border-primary/20 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Badge de ano */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-black/40 backdrop-blur-sm text-white/80 border border-white/10 rounded-lg">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-6 bg-black/30 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center text-white/70 text-sm mb-4">
                      <span className="mr-2">Cliente:</span>
                      <span className="font-medium text-white/90">{project.client}</span>
                    </div>
                    
                    <p className="text-white/70 text-sm mb-5 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <span className="text-xs text-white/50">{project.category}</span>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary text-sm font-medium group"
                      >
                        Ver detalhes
                        <svg 
                          className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-10 text-center border border-white/10 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Nenhum projeto encontrado</h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto">
                  Não encontramos projetos na categoria selecionada. Tente selecionar outra categoria ou veja todos os projetos.
                </p>
                <button 
                  onClick={() => setActiveCategory('Todos')} 
                  className="px-6 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-full transition-all duration-300 border border-primary/20"
                >
                  Ver todos os projetos
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Paginação */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-col items-center">
            <div className="flex gap-2">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                  currentPage === 1 
                    ? 'opacity-50 cursor-not-allowed border-white/10 text-white/40' 
                    : 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {Array.from({ length: totalPages }).map((_, index) => {
                // Mostrar apenas botões em uma janela ao redor da página atual
                if (
                  (currentPage <= 3 && index < 5) ||
                  (currentPage > totalPages - 3 && index > totalPages - 6) ||
                  (index >= currentPage - 2 && index <= currentPage + 2)
                ) {
                  if (index === 0 || index === totalPages - 1 || (index >= currentPage - 1 && index <= currentPage + 1)) {
                    return (
                      <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          currentPage === index + 1 
                            ? 'bg-primary text-black' 
                            : 'text-white hover:bg-white/10 border border-white/20 hover:border-white/30'
                        }`}
                      >
                        {index + 1}
                      </button>
                    )
                  }
                }
                
                // Mostrar elipses quando há saltos
                if ((index === 1 && currentPage > 4) || (index === totalPages - 2 && currentPage < totalPages - 3)) {
                  return (
                    <div key={index} className="w-10 h-10 flex items-center justify-center">
                      <span className="text-white/50">...</span>
                    </div>
                  )
                }
                
                return null
              })}
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                  currentPage === totalPages 
                    ? 'opacity-50 cursor-not-allowed border-white/10 text-white/40' 
                    : 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="mt-4 text-sm text-white/60">
              Página {currentPage} de {totalPages}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection 