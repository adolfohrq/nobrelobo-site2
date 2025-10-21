// Importar o polyfill para process antes de qualquer outro código
import './process-polyfill.js';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import { suppressRouterWarnings } from './utils/routerWarnings'

// Suprime os avisos do React Router v7 antes da renderização
suppressRouterWarnings();

// Renderiza a aplicação
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 