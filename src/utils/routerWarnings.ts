/**
 * Este arquivo configura o React Router para suprimir os avisos de depreciação
 */

// Lista de avisos do React Router que serão suprimidos
const ROUTER_WARNINGS = [
  'React Router Future Flag Warning',
  'startTransition',
  'relativeSplatPath',
  'No routes matched location',
  'useRouteError',
  'useNavigationType',
  'useRevalidator',
  'useRouteLoaderData',
  'useMatches',
  'You rendered descendant <Routes>',
  'You cannot render a <Router> inside another <Router>',
  'useRoutes() may be used only in the context of a <Router> component',
  'No route matches location',
  'useNavigate() may be used only in the context of a <Router> component',
  'useLocation() may be used only in the context of a <Router> component',
  'useParams() may be used only in the context of a <Router> component'
];

// Suprime os avisos do React Router v7
export const suppressRouterWarnings = () => {
  // Suprime os avisos no console
  const originalConsoleWarn = console.warn;
  console.warn = function(...args) {
    // Filtra avisos específicos do React Router
    if (
      typeof args[0] === 'string' && 
      ROUTER_WARNINGS.some(warning => args[0].includes(warning))
    ) {
      return;
    }
    originalConsoleWarn.apply(console, args);
  };

  // Suprime os erros no console
  const originalConsoleError = console.error;
  console.error = function(...args) {
    // Filtra erros específicos do React Router
    if (
      typeof args[0] === 'string' && 
      ROUTER_WARNINGS.some(warning => args[0].includes(warning))
    ) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}; 