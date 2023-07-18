/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.dummyimage.com",
      "i.dummyjson.com",
      "raw.githubusercontent.com",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
