"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function RetailerForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/retailer", {
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
          className="rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.05] p-6"
        >
          <p className="font-display text-2xl text-[var(--color-ink)]">
            Request received.
          </p>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
            Our wholesale team will reach out within 48 hours. Check your inbox,
            including spam.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Your name"
              name="name"
              required
              placeholder="First and last"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              required
              placeholder="buyer@dispensary.com"
            />
          </div>
          <Field
            label="Dispensary name"
            name="dispensary"
            required
            placeholder="Legal operating name"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Select
              label="State"
              name="state"
              required
              options={[
                { value: "", label: "Select" },
                { value: "NY", label: "New York" },
                { value: "CA", label: "California" },
                { value: "NJ", label: "New Jersey" },
                { value: "other", label: "Other" },
              ]}
            />
            <Field
              label="Borough or city"
              name="borough"
              placeholder="Bronx, Manhattan, LA..."
            />
          </div>
          <Field
            label="Retail license number"
            name="license"
            required
            placeholder="OCM-RETL-XX-XXXXX"
          />
          <div>
            <label
              htmlFor="notes"
              className="block font-mono-xs text-[var(--color-ink-muted)]"
            >
              Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Quantities, preferred strains, timing..."
              className="mt-2 w-full resize-none rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition focus:border-[var(--color-accent)]"
            />
          </div>

          <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-[var(--color-ink-soft)]">
              Response in 48h. License verified before first drop.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full justify-center sm:w-auto"
            >
              {status === "submitting" ? "Sending..." : "Request wholesale"}
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>

          {status === "error" ? (
            <p className="text-xs text-[var(--color-accent)]">
              Something went wrong. Email us directly at hello@staexotic.com.
            </p>
          ) : null}
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono-xs text-[var(--color-ink-muted)]"
      >
        {label}
        {required ? <span className="text-[var(--color-accent)]"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition focus:border-[var(--color-accent)]"
      />
    </div>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono-xs text-[var(--color-ink-muted)]"
      >
        {label}
        {required ? <span className="text-[var(--color-accent)]"> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="mt-2 w-full rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-4 py-3 text-sm text-[var(--color-ink)] transition focus:border-[var(--color-accent)]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
