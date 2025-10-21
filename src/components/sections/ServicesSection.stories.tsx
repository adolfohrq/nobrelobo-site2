import type { Meta, StoryObj } from '@storybook/react';
import ServicesSection from './ServicesSection';

const meta: Meta<typeof ServicesSection> = {
  title: 'Sections/ServicesSection',
  component: ServicesSection,
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

export const WithCustomTitle: Story = {
  args: {
    title: 'Nossos Serviços',
    subtitle: 'Soluções completas para seu negócio digital',
  },
};
