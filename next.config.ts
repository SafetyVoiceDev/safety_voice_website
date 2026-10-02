import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — emit plain HTML into `out/` for Netlify.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
