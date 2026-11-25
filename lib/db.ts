import "server-only";
import { cache } from "react";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type PostStats = { views: number; likes: number; comments: number };
export type Comment = { id: number; author_name: string; body: string; created_at: string };

let client: SupabaseClient | null | undefined;

/** Server-only Supabase client using the secret key. Null when the env vars are missing (e.g. local dev). */
export function db() {
  if (client === undefined) {
    const url = process.env.SUPABASE_WEBSITE_DB_URL;
    const key = process.env.SUPABASE_WEBSITE_DB_SECRET_KEY;
    if (url && !url.startsWith("https://")) {
      console.error("SUPABASE_WEBSITE_DB_URL must be the project API URL (https://<ref>.supabase.co), not a Postgres connection string.");
      client = null;
    } else {
      client = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
    }
  }
  return client;
}

/** Views, likes and comment counts for every post, fetched once per request. */
export const getAllStats = cache(async (): Promise<Record<string, PostStats>> => {
  const supabase = db();
  if (!supabase) return {};

  const [stats, comments] = await Promise.all([
    supabase.from("post_stats").select("slug, views, likes"),
    supabase.from("comments").select("slug"),
  ]);
  if (stats.error) console.error("post_stats query failed", stats.error);
  if (comments.error) console.error("comments query failed", comments.error);

  const result: Record<string, PostStats> = {};
  for (const row of stats.data ?? []) result[row.slug] = { views: row.views, likes: row.likes, comments: 0 };
  for (const row of comments.data ?? []) {
    result[row.slug] ??= { views: 0, likes: 0, comments: 0 };
    result[row.slug].comments++;
  }
  return result;
});

export async function getComments(slug: string): Promise<Comment[]> {
  const supabase = db();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("comments")
    .select("id, author_name, body, created_at")
    .eq("slug", slug)
    .order("created_at", { ascending: false });
  if (error) console.error("comments query failed", error);
  return data ?? [];
}
