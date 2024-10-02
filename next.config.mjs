/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
