import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'Nobre Lobo Design System',
    brandUrl: 'https://nobrelobo.com',
    brandImage: '/logo.png',
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
  panelPosition: 'bottom',
  showNav: true,
  showPanel: true,
  showToolbar: true,
  enableShortcuts: true,
  showCanvas: true,
  selectedPanel: 'storybook/controls/panel',
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
