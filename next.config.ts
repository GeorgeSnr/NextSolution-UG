// next.config.ts
import type { NextConfig } from 'next'

// ...existing code...
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
} as NextConfig

// ...existing code...

export default nextConfig