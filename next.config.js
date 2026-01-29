/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app',
      },
    ],
    // Optimize image quality and formats
    formats: ['image/avif', 'image/webp'],
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Optimize CSS loading - reduces render-blocking
    optimizeCss: true,
    // Better tree-shaking for packages like Framer Motion
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Stricter build output
  poweredByHeader: false,
};

module.exports = nextConfig;
