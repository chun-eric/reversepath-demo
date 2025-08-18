import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Ignore ESLint and TypeScript errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
