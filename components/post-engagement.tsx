import { connection } from "next/server";
import { CommentForm, LikeButton } from "@/components/engagement";
import { getAllStats, getComments } from "@/lib/db";
import { formatDate } from "@/lib/posts";

function plural(n: number, word: string) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

/** "42 views · 1 comment · ♥" row. Rendered at request time, so wrap it in <Suspense>. */
export async function PostStatsRow({ slug }: { slug: string }) {
  await connection();
  const stats = (await getAllStats())[slug] ?? { views: 0, likes: 0, comments: 0 };
  return (
    <div className="flex items-center justify-between text-body">
      <div className="flex gap-6">
        <span>{plural(stats.views, "view")}</span>
        <span>{plural(stats.comments, "comment")}</span>
      </div>
      <LikeButton slug={slug} likes={stats.likes} />
    </div>
  );
}

export function PostStatsFallback() {
  return <div className="h-6" aria-hidden="true" />;
}

const avatarColors = ["#e07b39", "#4a7fd1", "#3e9b6f", "#9b59b6", "#d14a4b"];

export async function CommentsSection({ slug }: { slug: string }) {
  await connection();
  const comments = await getComments(slug);
  return (
    <>
      <h2 className="font-serif text-2xl text-ink">{comments.length === 1 ? "1 Comment" : `${comments.length} Comments`}</h2>
      <div className="mt-6 border-t border-neutral-300 pt-8">
        <CommentForm slug={slug} />
      </div>
      {comments.length > 0 && (
        <ul className="mt-10 space-y-8">
          {comments.map((c) => (
            <li key={c.id} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full text-lg text-white"
                style={{ background: avatarColors[c.author_name.length % avatarColors.length] }}
              >
                {c.author_name[0]?.toUpperCase()}
              </span>
              <div>
                <p className="text-ink">{c.author_name}</p>
                <p className="text-sm text-body">{formatDate(c.created_at.slice(0, 10))}</p>
                <p className="mt-3 whitespace-pre-line text-lg text-ink">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
