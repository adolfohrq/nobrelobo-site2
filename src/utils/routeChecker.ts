/**
 * Utilitário para verificar se as rotas estão funcionando corretamente
 */

/**
 * Verifica se a rota existe no aplicativo
 * @param {string} pathname - Caminho da rota a ser verificada
 * @returns {boolean} - Retorna true se a rota existe, false caso contrário
 */
export const checkRoute = (pathname: string): boolean => {
  // Lista de rotas válidas
  const validRoutes = ['/', '/about', '/features', '/pricing', '/portfolio', '/blog', '/services'];
  
  // Verifica se a rota atual está na lista de rotas válidas
  return validRoutes.includes(pathname);
};

/**
 * Registra a navegação no console
 * @param {string} pathname - Caminho da rota para a qual o usuário navegou
 */
export const logNavigation = (pathname: string): void => {
  console.info(`Navegação para: ${pathname}`);
};

export default { checkRoute, logNavigation }; 