"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function PressForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/press", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("network");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="rounded-lg border border-[var(--color-ember)]/30 bg-[var(--color-ember)]/[0.05] p-5"
        >
          <p className="font-display text-xl text-[var(--color-ink)]">
            Thanks for reaching out.
          </p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
            Press kit link and samples request acknowledgment on the way.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-3"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition focus:border-[var(--color-accent)]"
            />
            <input
              name="outlet"
              required
              placeholder="Outlet or publication"
              className="w-full rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition focus:border-[var(--color-accent)]"
            />
          </div>
          <input
            name="email"
            type="email"
            required
            placeholder="Work email"
            className="w-full rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition focus:border-[var(--color-accent)]"
          />
          <textarea
            name="angle"
            rows={2}
            placeholder="Story angle or sampling request..."
            className="w-full resize-none rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition focus:border-[var(--color-accent)]"
          />
          <div className="flex items-center justify-between gap-3 pt-1">
            <p className="text-[11px] text-[var(--color-ink-soft)]">
              21+ credentialed writers and editors only.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-ghost"
            >
              {status === "submitting" ? "Sending..." : "Request access"}
            </button>
          </div>
          {status === "error" ? (
            <p className="text-xs text-[var(--color-accent)]">
              Something went wrong. Email us at press@staexotic.com.
            </p>
          ) : null}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
