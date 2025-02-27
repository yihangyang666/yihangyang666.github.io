/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig 