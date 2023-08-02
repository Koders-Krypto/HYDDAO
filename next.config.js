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
    domains: [
      "api.meetupswala.xyz",
      "social3-uploads.s3.ap-south-1.amazonaws.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
