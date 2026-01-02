/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
}

module.exports = nextConfig 