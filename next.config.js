/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig 