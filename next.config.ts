import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Fanatic-Fandom" : "",
  assetPrefix: isProd ? "/Fanatic-Fandom/" : "",
};

export default nextConfig;