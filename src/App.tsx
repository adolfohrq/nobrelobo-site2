import React from 'react';
import Routes from './routes';
import { HelmetProvider } from 'react-helmet-async';

// Componente para tratamento de erros
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Erro na aplicação:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] p-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Algo deu errado</h1>
          <p className="text-white text-lg mb-8 text-center max-w-md">
            Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-8 px-6 py-3 bg-primary text-black font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            Voltar para Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App; 