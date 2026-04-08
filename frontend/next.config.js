/** @type {import('next').NextConfig} */

// Lê a variável de ambiente BASE_PATH, default '/'
const BASE_PATH = process.env.BASE_PATH || '/'

const nextConfig = {
  // Faz o Next servir tudo em /BASE_PATH
  basePath: BASE_PATH.replace(/\/$/, ''), // remove barra final se houver

  // Rewrites dinâmicos para backend
  async rewrites() {
    return [
      {
        // Frontend acessa `${BASE_PATH}/api/...`
        source: `${BASE_PATH}/api/:path*`,
        // Vai para o backend Go
        destination: `http://localhost:8080/api/:path*`,
      },
    ]
  },

  output: 'standalone',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig