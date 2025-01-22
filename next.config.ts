import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  distDir: 'dist', // Set the output directory to 'dist'
  images: {
    domains: ['w16manik.blr1.cdn.digitaloceanspaces.com'], // Add your domain here
  },
};

export default nextConfig;
