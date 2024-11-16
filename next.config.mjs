/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"],
    domains: ["avatars.githubusercontent.com"],
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
