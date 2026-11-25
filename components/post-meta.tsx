import Image from "next/image";
import { formatDate, type Post } from "@/lib/posts";

function Avatar() {
  return <Image src="/images/laimonas.png" alt="" width={36} height={36} className="size-9 shrink-0 rounded-full bg-black object-cover" />;
}

/** Stacked author/date block used on the blog list cards. */
export function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-3 text-sm text-body">
      <Avatar />
      <div>
        <p>Laimonas Sutkus</p>
        <p>
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
        </p>
      </div>
    </div>
  );
}

/** Single-line author/date block used at the top of an article. */
export function PostMetaInline({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-body">
      <Avatar />
      <span className="ml-1">Laimonas Sutkus</span>·<time dateTime={post.date}>{formatDate(post.date)}</time>·<span>{post.readingTime}</span>
    </div>
  );
}
