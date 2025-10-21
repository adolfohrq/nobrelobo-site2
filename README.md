# Vorix

Projeto desenvolvido com React, TypeScript e Tailwind CSS, seguindo o layout do Figma.

> Teste de commit realizado em $(date)

## Estrutura de Diretórios

```
/
├── src/               # Código fonte principal
│   ├── components    # Componentes    
│   │   ├── ui        # Componentes shadcn
│   │   ├── general   # Componentes React reutilizáveis
│   │   ├── pages/    # Páginas/rotas da aplicação
│   │   ├── hooks/    # Custom hooks React
│   │   ├── routes/index.tsx        # Arquivo onde estão todas as rotas
│   │   ├── services/     # Serviços e integrações com APIs
│   │   ├── utils/        # Funções utilitárias
│   │   ├── types/        # Definições de tipos TypeScript
│   │   ├── styles/       # Estilos globais e temas
│   │   └── contexts/     # Contextos React
│   ├── public/           # Arquivos estáticos
│   ├── tests/            # Testes unitários e de integração
│   └── docs/            # Documentação adicional
```

## Stack Tecnológica
- **Framework Principal**: React
- **Linguagem**: TypeScript
- **Estilização**: Styled Components + Tailwind CSS
- **Gerenciador de Estado**: React Context API + Hooks
- **Testes**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **Rotas**: React Router
- **Validação**: Yup
- **Isolation Component test**: Storybook
- **Build Tool**: Vite

## Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Executar testes
npm test
```

## Componentes

O projeto utiliza componentes do Shadcn UI, que estão localizados em `src/components/ui`. Esses componentes são altamente customizáveis e seguem as melhores práticas de acessibilidade.

## Estilização

A estilização é feita principalmente com Tailwind CSS, com alguns componentes específicos utilizando Styled Components quando necessário.

## Desenvolvimento

O projeto segue uma estrutura modular, com componentes reutilizáveis e separação clara de responsabilidades. Sempre priorize a simplicidade e a separação de componentes. 