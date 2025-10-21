import type { Meta, StoryObj } from '@storybook/react';
import ServiceCard from './ServiceCard';

const meta: Meta<typeof ServiceCard> = {
  title: 'General/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: '🚀',
    title: 'Desenvolvimento Web',
    description: 'Criamos sites modernos e responsivos que impulsionam seu negócio online.',
    href: '/services/desenvolvimento-web',
  },
};

export const SEO: Story = {
  args: {
    icon: '📈',
    title: 'SEO Estratégico',
    description: 'Otimizamos seu site para aparecer no topo dos resultados de busca.',
    href: '/services/seo-estrategico',
  },
};

export const Marketing: Story = {
  args: {
    icon: '📱',
    title: 'Marketing Digital',
    description: 'Estratégias completas para aumentar sua presença digital e conversões.',
    href: '/services/marketing-digital',
  },
};

export const Design: Story = {
  args: {
    icon: '🎨',
    title: 'Design Gráfico',
    description: 'Identidade visual única e impactante para sua marca.',
    href: '/services/design-grafico',
  },
};
