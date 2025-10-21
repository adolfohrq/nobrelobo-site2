import React from 'react';
import { Link } from 'react-router-dom';

export interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ 
  href, 
  className, 
  children, 
  ...props 
}) => {
  // Verificar se o link é externo
  const isExternal = 
    typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:'));

  if (isExternal) {
    return (
      <a 
        href={href.toString()} 
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Usar React Router Link para links internos
  return (
    <Link to={href} className={className} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink; 