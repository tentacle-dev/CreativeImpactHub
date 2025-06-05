// Minimal safe config
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Optional in newer versions, but good for clarity
  },
};

export default nextConfig;
