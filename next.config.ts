import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Hosted at https://maygridmusic.com with no subpath. Do not set basePath.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
