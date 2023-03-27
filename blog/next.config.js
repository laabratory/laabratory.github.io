/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '' : '', // TODO: is this right?
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
