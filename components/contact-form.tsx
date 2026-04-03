"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const { error } = await supabase.from("contact_messages").insert({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    });

    setSending(false);

    if (error) {
      setError("Something went wrong. Please try again or email me directly.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-line text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="mt-4 text-lg font-semibold text-foreground">
          Message sent
        </p>
        <p className="mt-1 text-sm text-muted">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="Tell me about your project..."
        />
      </div>

      {error && (
        <p className="text-sm text-rose-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
