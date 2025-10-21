import type { Meta, StoryObj } from '@storybook/react';
import { 
  WebIcon, 
  SeoIcon, 
  MarketingIcon, 
  DesignIcon, 
  MobileIcon, 
  UiUxIcon,
  BrandingIcon,
  SocialMediaIcon,
  TrafficIcon,
  AutomationIcon,
  AiIcon,
  ProjectIcon
} from './ServiceIcons';

const meta: Meta = {
  title: 'Icons/ServiceIcons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const WebIcon: Story = {
  render: () => <WebIcon className="w-12 h-12 text-primary" />,
};

export const SeoIcon: Story = {
  render: () => <SeoIcon className="w-12 h-12 text-primary" />,
};

export const MarketingIcon: Story = {
  render: () => <MarketingIcon className="w-12 h-12 text-primary" />,
};

export const DesignIcon: Story = {
  render: () => <DesignIcon className="w-12 h-12 text-primary" />,
};

export const MobileIcon: Story = {
  render: () => <MobileIcon className="w-12 h-12 text-primary" />,
};

export const UiUxIcon: Story = {
  render: () => <UiUxIcon className="w-12 h-12 text-primary" />,
};

export const BrandingIcon: Story = {
  render: () => <BrandingIcon className="w-12 h-12 text-primary" />,
};

export const SocialMediaIcon: Story = {
  render: () => <SocialMediaIcon className="w-12 h-12 text-primary" />,
};

export const TrafficIcon: Story = {
  render: () => <TrafficIcon className="w-12 h-12 text-primary" />,
};

export const AutomationIcon: Story = {
  render: () => <AutomationIcon className="w-12 h-12 text-primary" />,
};

export const AiIcon: Story = {
  render: () => <AiIcon className="w-12 h-12 text-primary" />,
};

export const ProjectIcon: Story = {
  render: () => <ProjectIcon className="w-12 h-12 text-primary" />,
};

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="flex flex-col items-center space-y-2">
        <WebIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">Web</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SeoIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">SEO</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MarketingIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">Marketing</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DesignIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">Design</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MobileIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">Mobile</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <UiUxIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">UI/UX</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BrandingIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">Branding</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SocialMediaIcon className="w-8 h-8 text-primary" />
        <span className="text-sm text-muted-foreground">Social</span>
      </div>
    </div>
  ),
};
