import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On Vercel, let the platform build and serve the app natively. Everywhere
  // else, export plain HTML/CSS/JS to `out/` so any free static host can serve it.
  output: process.env.VERCEL ? undefined : "export",
  // Images are pre-optimized to WebP in public/img, so no runtime optimizer is needed.
  images: { unoptimized: true },
};

export default nextConfig;
