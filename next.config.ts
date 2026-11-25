import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep old Wix URLs working after the domain moves over.
  async redirects() {
    return [
      { source: "/ctovisory", destination: "/", permanent: true },
      { source: "/post/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/copy-of-privacy-policy", destination: "/terms", permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
