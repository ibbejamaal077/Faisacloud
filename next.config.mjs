/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: './.next',
  basePath: '/', // Explicitly set basePath to the root
  output: 'standalone',
}

export default nextConfig
