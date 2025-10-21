import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from '../sections/Footer'
import ScrollToTop from './ScrollToTop'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  
  // Efeito para rolar para o topo quando a rota muda
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="min-h-screen bg-[#111] text-foreground flex flex-col relative overflow-hidden">
      {/* Elementos de fundo fixos */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ECC80B" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Elementos de gradiente fixos */}
      <div className="fixed w-48 h-48 md:w-1/3 md:h-1/3 top-0 right-0 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed w-32 h-32 md:w-1/4 md:h-1/4 bottom-0 left-1/4 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed w-40 h-40 md:w-1/3 md:h-1/3 top-1/2 left-0 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <Header />
      <main className="flex-1 relative z-10 pt-0">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout 