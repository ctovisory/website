"use client";

import { useActionState, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Heart } from "lucide-react";
import { addComment, likePost, recordView, type CommentState } from "@/app/blog/actions";
import { button } from "@/lib/ui";

function storageGet(store: "local" | "session", key: string) {
  try {
    return (store === "local" ? localStorage : sessionStorage).getItem(key);
  } catch {
    return null;
  }
}

function storageSet(store: "local" | "session", key: string) {
  try {
    (store === "local" ? localStorage : sessionStorage).setItem(key, "1");
  } catch {
    // Storage can be unavailable (private mode); counting still works, just without dedupe.
  }
}

/** Counts one view per post per browser session. */
export function ViewTracker({ slug }: { slug: string }) {
  const sent = useRef(false);
  useEffect(() => {
    const key = `viewed:${slug}`;
    if (sent.current || storageGet("session", key)) return;
    sent.current = true;
    storageSet("session", key);
    recordView(slug);
  }, [slug]);
  return null;
}

const noopSubscribe = () => () => {};

export function LikeButton({ slug, likes }: { slug: string; likes: number }) {
  const key = `liked:${slug}`;
  const storedLike = useSyncExternalStore(noopSubscribe, () => storageGet("local", key) === "1", () => false);
  const [justLiked, setJustLiked] = useState(false);
  const liked = storedLike || justLiked;
  const count = likes + (justLiked ? 1 : 0);

  function like() {
    if (liked) return;
    setJustLiked(true);
    storageSet("local", key);
    likePost(slug);
  }

  return (
    <button type="button" onClick={like} disabled={liked} aria-label={liked ? "Liked" : "Like this post"} aria-pressed={liked} className="relative z-10 flex items-center gap-2 text-brand disabled:cursor-default">
      {count > 0 && <span className="text-body">{count}</span>}
      <Heart className="size-6" strokeWidth={1.5} fill={liked ? "currentColor" : "none"} />
    </button>
  );
}

const inputClass =
  "w-full border border-neutral-400 bg-white px-4 py-3 text-lg text-ink outline-none transition-colors placeholder:text-neutral-400 focus:border-brand";

export function CommentForm({ slug }: { slug: string }) {
  const [state, action, pending] = useActionState<CommentState, FormData>(addComment.bind(null, slug), { status: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={action} className="space-y-4">
      <input name="name" required maxLength={80} placeholder="Your name" autoComplete="name" className={inputClass} />
      <textarea name="body" required maxLength={2000} rows={3} placeholder="Write a comment..." className={`${inputClass} resize-y`} />
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {state.status === "error" && (
        <p role="alert" className="text-brand">
          {state.message}
        </p>
      )}
      <button type="submit" disabled={pending} className={`${button("primary")} disabled:opacity-60`}>
        {pending ? "Publishing…" : "Publish"}
      </button>
    </form>
  );
}
