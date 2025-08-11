/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  // Netlify optimization
  trailingSlash: false,
  experimental: {
    // Enable if needed
  },
  // Remove output: 'export' for development and if using API routes
  // output: 'export',
  // distDir: 'out',
}

module.exports = nextConfig
