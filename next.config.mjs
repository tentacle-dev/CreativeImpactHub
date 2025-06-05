/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // These are from next-sitemap
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
};

export default nextConfig;
