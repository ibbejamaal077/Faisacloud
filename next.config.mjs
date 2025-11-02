/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  output: 'standalone',
}

export default nextConfig
