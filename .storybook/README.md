# 📚 Storybook - Nobre Lobo Design System

Este é o Storybook do projeto Nobre Lobo, uma ferramenta para documentar e testar componentes de forma isolada.

## 🚀 Como usar

### Executar o Storybook
```bash
npm run storybook
```

### Build do Storybook
```bash
npm run build-storybook
```

## 📁 Estrutura

### Componentes Documentados

#### UI Components
- **Button** - Componente de botão com múltiplas variantes
- **CustomLink** - Link personalizado com estilização

#### General Components
- **Hero** - Seção hero principal
- **ServiceCard** - Card para exibição de serviços
- **Navbar** - Barra de navegação
- **Layout** - Layout principal da aplicação

#### Icons
- **ServiceIcons** - Conjunto de ícones para serviços
- Ícones individuais para cada serviço

#### Sections
- **ServicesSection** - Seção de serviços
- **ContactSection** - Seção de contato
- **CtaSection** - Seção de call-to-action

## 🎨 Design System

### Cores
- **Primary**: #ECC80B (Amarelo)
- **Background**: #0E0E0E (Preto)
- **Foreground**: #FEFEFE (Branco)
- **Muted**: #C8C8CD (Cinza claro)
- **Accent**: #1A1A1A (Cinza escuro)

### Tipografia
- **Títulos**: Gilroy
- **Corpo**: Poppins

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📝 Como adicionar novas stories

1. Crie um arquivo `.stories.tsx` junto ao componente
2. Importe o componente e configure os tipos
3. Defina as stories com diferentes variações
4. Use `tags: ['autodocs']` para documentação automática

### Exemplo:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MeuComponente } from './MeuComponente';

const meta: Meta<typeof MeuComponente> = {
  title: 'Categoria/MeuComponente',
  component: MeuComponente,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prop1: 'valor1',
    prop2: 'valor2',
  },
};
```

## 🔧 Configuração

### Addons Instalados
- **@storybook/addon-essentials** - Addons essenciais
- **@storybook/addon-interactions** - Testes de interação
- **@storybook/addon-links** - Links entre stories
- **@storybook/addon-onboarding** - Onboarding

### Configurações Especiais
- Tema escuro por padrão
- Suporte ao Tailwind CSS
- Configuração do Vite
- Decorators personalizados

## 🎯 Boas Práticas

1. **Nomenclatura**: Use nomes descritivos para stories
2. **Organização**: Agrupe por categoria (UI, General, Sections, etc.)
3. **Documentação**: Use `tags: ['autodocs']` para documentação automática
4. **Variações**: Crie stories para diferentes estados e variações
5. **Controles**: Use `argTypes` para controles interativos

## 🐛 Solução de Problemas

### Storybook não inicia
- Verifique se todas as dependências estão instaladas
- Execute `npm install` para instalar dependências

### Componentes não aparecem
- Verifique se o arquivo `.stories.tsx` está no local correto
- Confirme se o componente está sendo importado corretamente

### Estilos não aplicados
- Verifique se o Tailwind CSS está configurado
- Confirme se os estilos globais estão sendo importados

## 📞 Suporte

Para dúvidas ou problemas com o Storybook, consulte:
- [Documentação oficial do Storybook](https://storybook.js.org/docs)
- [Guia de configuração](https://storybook.js.org/docs/react/configure/overview)
- [Exemplos de stories](https://storybook.js.org/docs/react/writing-stories/introduction)
