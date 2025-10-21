/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Configuração para importar SVGs como React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig 