"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Mailto-based form — opens the visitor's email app with a prefilled message.
 * No backend, no API keys, no fake success states. To use a form service
 * (e.g. Formspree) or a Route Handler + Resend later, replace handleSubmit.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  const inputStyles =
    "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-150 outline-none hover:border-slate-400 focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-white/20 dark:focus:border-sky-400/60 dark:focus:ring-sky-400/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Send me a message">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          placeholder="Your name"
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={120}
          autoComplete="email"
          placeholder="you@example.com"
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder="Tell me about your opportunity or project..."
          className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-150 outline-none hover:border-slate-400 focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-white/20 dark:focus:border-sky-400/60 dark:focus:ring-sky-400/30"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-500 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(14,165,233,0.7)] transition-all duration-200 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-sky-400 dark:text-[#04121f] dark:hover:bg-sky-300 dark:focus-visible:ring-sky-400 dark:focus-visible:ring-offset-[#070b14]"
      >
        <Send
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px]"
          aria-hidden="true"
        />
        Send Message
      </button>

      {status === "opened" ? (
        <p role="status" className="text-sm leading-6 text-slate-600 dark:text-slate-400">
          Opening your email app with the message prefilled — just press send there.
          Prefer direct email? Write to{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-sky-600 underline underline-offset-4 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            {profile.email}
          </a>
          .
        </p>
      ) : (
        <p className="text-xs leading-5 text-slate-500">
          This form opens your email app — no message is stored on this site.
        </p>
      )}
    </form>
  );
}
