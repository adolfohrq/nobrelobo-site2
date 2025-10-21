import { defineConfig } from 'vite';
import { mergeConfig } from 'vite';
import viteConfig from '../vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    // Storybook specific configuration
    define: {
      'process.env': {},
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  })
);
