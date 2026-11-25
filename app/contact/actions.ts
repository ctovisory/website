"use server";

import { site } from "@/lib/site";

export type ContactState = { status: "idle" | "success" | "error"; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) return { status: "success" };

  if (!name || !EMAIL_RE.test(email) || !message) {
    return { status: "error", message: "Please fill in your name, a valid email and a message." };
  }
  if (name.length > 200 || message.length > 5000) {
    return { status: "error", message: "Your message is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form message was not sent.");
    return { status: "error", message: `Sending failed. Please email us directly at ${site.email}.` };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "CTOVISORY website <website@ctovisory.com>",
      to: [process.env.CONTACT_TO ?? site.email],
      reply_to: email,
      subject: `Website message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend API error", res.status, await res.text());
    return { status: "error", message: `Sending failed. Please email us directly at ${site.email}.` };
  }

  return { status: "success" };
}
