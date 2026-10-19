import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` so any free static host can serve it.
  output: "export",
  // Images are pre-optimized to WebP in public/img, so no runtime optimizer is needed.
  images: { unoptimized: true },
};

export default nextConfig;
