/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'http://192.168.8.*',
    'http://192.168.1.*',
    'http://10.0.0.*',
    'http://172.16.*.*',
  ],
}

export default nextConfig
