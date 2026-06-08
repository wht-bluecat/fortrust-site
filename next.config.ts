import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (multiple lockfiles exist in the monorepo-style parent).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
