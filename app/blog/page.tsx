import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/sections";
import { PostMeta } from "@/components/post-meta";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on fractional CTO work, technology strategy and tech markets by Laimonas Sutkus.",
};

export default function BlogPage() {
  return (
    <Container className="pt-6 md:pt-10">
      <h1 className="sr-only">Blog</h1>
      <div className="space-y-8">
        {posts.map((post, i) => (
          <article key={post.slug} className="group relative grid overflow-hidden border border-neutral-300 bg-white md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <Image src={post.image} alt="" fill sizes="(min-width: 768px) 440px, 100vw" className="object-cover" priority={i === 0} />
            </div>
            <div className="flex flex-col p-6 md:p-8">
              <PostMeta post={post} />
              <h2 className="mt-5 font-serif text-2xl leading-snug text-ink transition-colors group-hover:text-brand md:text-3xl">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
