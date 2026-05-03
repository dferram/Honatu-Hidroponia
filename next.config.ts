import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Honatu-Hidroponia' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Honatu-Hidroponia/' : '',
};

export default nextConfig;
