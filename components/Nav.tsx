"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[var(--color-bg)]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg tracking-tight text-[var(--color-ink)]">
            STA
          </span>
          <span className="hidden font-mono-xs text-[var(--color-ink-soft)] sm:inline">
            Exotic
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#products"
            className="link-underline font-mono-xs text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Product
          </a>
          <a
            href="#locator"
            className="link-underline font-mono-xs text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Find us
          </a>
          <a
            href="#retailers"
            className="link-underline font-mono-xs text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Retailers
          </a>
          <a
            href="#press"
            className="link-underline font-mono-xs text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Press
          </a>
          <a
            href="#story"
            className="link-underline font-mono-xs text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          >
            Story
          </a>
        </div>

        <a
          href="#retailers"
          className="rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Wholesale
        </a>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="none"
      className="text-[var(--color-accent)]"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 16c2.5-4 9.5-4 12 0-2.5 4-9.5 4-12 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}
