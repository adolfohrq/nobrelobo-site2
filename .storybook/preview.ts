import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0E0E0E',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'primary',
          value: '#ECC80B',
        },
      ],
    },
    docs: {
      theme: {
        colorPrimary: '#ECC80B',
        colorSecondary: '#C8C8CD',
        appBg: '#0E0E0E',
        appContentBg: '#0E0E0E',
        appBorderColor: '#1A1A1A',
        textColor: '#FEFEFE',
        textInverseColor: '#0E0E0E',
        barTextColor: '#FEFEFE',
        barSelectedColor: '#ECC80B',
        barBg: '#1A1A1A',
        inputBg: '#1A1A1A',
        inputBorder: '#C8C8CD',
        inputTextColor: '#FEFEFE',
        inputBorderRadius: 6,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#0E0E0E',
        color: '#FEFEFE',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
