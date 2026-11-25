import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

const pages = [
  "",
  "/services",
  "/services/technical-audit",
  "/services/fractional-cto",
  "/services/technical-recruiting",
  "/services/coaching",
  "/about",
  "/faq",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...posts.map((post) => ({ url: `${site.url}/blog/${post.slug}`, lastModified: post.updated ?? post.date })),
  ];
}
