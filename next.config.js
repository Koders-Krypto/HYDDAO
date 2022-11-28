/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.meetupswala.xyz",
        port: "",
        pathname: "/**",
      },
    ],
  },
  images: {
    domains: ["api.meetupswala.xyz"],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
