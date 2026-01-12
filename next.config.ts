const repo = "DITT_REPO_NAMN";            // ex: "clearchoice"
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  trailingSlash: true,                     // /about -> /about/ (snällare för Pages)
  basePath: isProd ? `/${repo}` : "",      // kör under /repo på Pages :contentReference[oaicite:2]{index=2}
  assetPrefix: isProd ? `/${repo}/` : "",  // så JS/CSS laddas från rätt subpath :contentReference[oaicite:3]{index=3}
  images: { unoptimized: true },           // Pages har ingen image-optimizer :contentReference[oaicite:4]{index=4}
};
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
