import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'General/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomContent: Story = {
  args: {
    title: 'Transforme sua marca digital',
    subtitle: 'Soluções inovadoras para o seu negócio',
    description: 'A Nobre Lobo oferece serviços de desenvolvimento web, marketing digital e design para impulsionar sua presença online.',
    ctaText: 'Começar Agora',
    ctaLink: '/contact',
  },
};
