import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProd ? 'https://lexykapp.com/' : '',
  basePath: isProd ? '' : '',
  output: 'export',
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
};

export default nextConfig;