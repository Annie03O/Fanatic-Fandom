import type { NextConfig } from "next";

<<<<<<< HEAD
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
=======
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
>>>>>>> d847065 (Initial commit from Create Next App)
