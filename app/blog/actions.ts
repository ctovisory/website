"use server";

import { refresh } from "next/cache";
import { db } from "@/lib/db";
import { getPost } from "@/lib/posts";

async function increment(slug: string, field: "views" | "likes") {
  const supabase = db();
  if (!supabase || !getPost(slug)) return;
  const { error } = await supabase.rpc("increment_post_stat", { p_slug: slug, p_field: field });
  if (error) console.error(`increment ${field} failed`, error);
}

export async function recordView(slug: string) {
  await increment(slug, "views");
}

export async function likePost(slug: string) {
  await increment(slug, "likes");
}

export type CommentState = { status: "idle" | "success" | "error"; message?: string };

export async function addComment(slug: string, _prev: CommentState, formData: FormData): Promise<CommentState> {
  const name = String(formData.get("name") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  // Honeypot: real visitors never see or fill this field.
  if (formData.get("website")) return { status: "success" };

  if (!getPost(slug)) return { status: "error", message: "Unknown post." };
  if (!name || !body) return { status: "error", message: "Please add your name and a comment." };
  if (name.length > 80 || body.length > 2000) return { status: "error", message: "Your comment is too long." };

  const supabase = db();
  if (!supabase) return { status: "error", message: "Comments are not available right now." };

  const { error } = await supabase.from("comments").insert({ slug, author_name: name, body });
  if (error) {
    console.error("insert comment failed", error);
    return { status: "error", message: "Could not post your comment. Please try again." };
  }

  refresh();
  return { status: "success" };
}
