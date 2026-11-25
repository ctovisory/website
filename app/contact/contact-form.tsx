"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "./actions";
import { button } from "@/lib/ui";

const inputClass =
  "w-full border-b border-neutral-400 bg-transparent py-2 text-lg text-ink outline-none transition-colors placeholder:text-neutral-400 focus:border-brand";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, { status: "idle" });

  if (state.status === "success") {
    return <p className="py-12 text-center font-serif text-2xl text-ink">Thank you! We have received your message!</p>;
  }

  return (
    <form action={action} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-body">First Name *</span>
          <input name="name" required autoComplete="given-name" className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm text-body">Email *</span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="text-sm text-body">Message *</span>
        <textarea name="message" required rows={5} className={`${inputClass} resize-y`} />
      </label>
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {state.status === "error" && (
        <p role="alert" className="text-brand">
          {state.message}
        </p>
      )}
      <div className="text-center">
        <button type="submit" disabled={pending} className={`${button("primary")} disabled:opacity-60`}>
          {pending ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
