/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org"
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc"
      }
    ]
  }
};

export default nextConfig;

