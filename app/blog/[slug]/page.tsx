import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/sections";
import { PostMetaInline } from "@/components/post-meta";
import { CommentsSection, PostStatsFallback, PostStatsRow } from "@/components/post-engagement";
import { ViewTracker } from "@/components/engagement";
import { ShareButtons } from "@/components/share-buttons";
import { formatDate, getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", publishedTime: post.date, modifiedTime: post.updated, images: [post.image] },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);
  const recent = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <Container className="pt-6 md:pt-10">
      <article className="border border-neutral-300 bg-white px-5 py-10 md:px-24 md:py-16">
        <PostMetaInline post={post} />
        <h1 className="mt-6 font-serif text-3xl leading-tight text-ink md:text-[2.75rem]">{post.title}</h1>
        {post.updated && <p className="mt-6 text-body">Updated: {formatDate(post.updated)}</p>}
        <Image src={post.image} alt="" width={1200} height={700} sizes="(min-width: 768px) 700px, 100vw" className="mt-10 h-auto w-full" priority />
        <div className="prose prose-lg mt-10 max-w-none font-light text-body prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-strong:font-normal prose-strong:text-ink prose-a:text-brand prose-h2:text-2xl md:prose-h2:text-3xl [&_p>strong:only-child]:text-xl">
          <Body />
        </div>
        <div className="mt-12 border-t border-neutral-300 pt-8">
          <ShareButtons url={`${site.url}/blog/${slug}`} title={post.title} />
        </div>
        <div className="mt-8 border-t border-neutral-300 pt-6">
          <Suspense fallback={<PostStatsFallback />}>
            <PostStatsRow slug={slug} />
          </Suspense>
        </div>
        <ViewTracker slug={slug} />
      </article>

      <aside className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl text-ink">Recent Posts</h2>
          <Link href="/blog" className="text-lg text-ink hover:text-brand">
            See All
          </Link>
        </div>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block h-full border border-neutral-300 bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={p.image} alt="" fill sizes="300px" className="object-cover" />
                </div>
                <p className="m-6 line-clamp-2 font-serif text-xl leading-snug text-ink group-hover:text-brand">{p.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <section className="mt-12 border border-neutral-300 bg-white px-5 py-10 md:px-24 md:py-16">
        <Suspense fallback={<h2 className="font-serif text-2xl text-ink">Comments</h2>}>
          <CommentsSection slug={slug} />
        </Suspense>
      </section>
    </Container>
  );
}
