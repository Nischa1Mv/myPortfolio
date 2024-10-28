/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.gq.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
