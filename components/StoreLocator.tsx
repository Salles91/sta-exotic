"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder data - stores reais seriam populados do Dutchie/CRM
const stores = [
  { name: "Housing Works Cannabis Co", area: "NoHo, Manhattan, NY", borough: "Manhattan" },
  { name: "Travel Agency", area: "Union Square, Manhattan, NY", borough: "Manhattan" },
  { name: "Smacked Village", area: "Greenwich Village, Manhattan, NY", borough: "Manhattan" },
  { name: "Bronx Joint", area: "Fordham, Bronx, NY", borough: "Bronx" },
  { name: "Stoops NYC", area: "East Village, Manhattan, NY", borough: "Manhattan" },
  { name: "The Depot NY", area: "Astoria, Queens, NY", borough: "Queens" },
  { name: "New Amsterdam", area: "Lower East Side, Manhattan, NY", borough: "Manhattan" },
  { name: "Valley Greens", area: "Westchester, NY", borough: "Westchester" },
  { name: "Cannadreams", area: "Brooklyn Heights, Brooklyn, NY", borough: "Brooklyn" },
  { name: "Evergreen NY", area: "Long Island, NY", borough: "Long Island" },
  { name: "Cannabis Realm NY", area: "Yonkers, NY", borough: "Westchester" },
  { name: "Ripe Cannabis", area: "Flatbush, Brooklyn, NY", borough: "Brooklyn" },
];

const boroughs = ["All", "Manhattan", "Brooklyn", "Queens", "Bronx", "Westchester", "Long Island"];

export default function StoreLocator() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return stores.filter((s) => {
      const matchBorough = filter === "All" || s.borough === filter;
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" || s.name.toLowerCase().includes(q) || s.area.toLowerCase().includes(q);
      return matchBorough && matchQuery;
    });
  }, [filter, query]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Map placeholder - estilo dark editorial, grid abstrato */}
      <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] lg:order-1 lg:aspect-auto">
        <MapVisual />
        <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-black/60 px-3 py-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
          <span className="font-mono-xs text-[var(--color-ink-muted)]">
            80+ licensed retailers · NY + CA
          </span>
        </div>
      </div>

      {/* Filter + list */}
      <div className="order-1 flex flex-col lg:order-2">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dispensary or area"
            className="w-full rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)] transition focus:border-[var(--color-accent)]"
          />
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 snap-rail sm:flex-wrap sm:overflow-visible">
          {boroughs.map((b) => (
            <button
              key={b}
              onClick={() => setFilter(b)}
              className={`snap-item shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] transition ${
                filter === b
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "border-[var(--color-line-strong)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink-muted)]"
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="mt-5 divide-y divide-[var(--color-line)] overflow-hidden rounded-lg border border-[var(--color-line)]">
          <AnimatePresence initial={false}>
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 text-sm text-[var(--color-ink-muted)]"
              >
                No dispensary matches that search. Try another borough.
              </motion.div>
            ) : (
              filtered.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="flex items-center justify-between gap-4 px-4 py-3.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[var(--color-ink)]">
                      {s.name}
                    </p>
                    <p className="truncate text-[11px] text-[var(--color-ink-muted)]">
                      {s.area}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono-xs text-[var(--color-ink-soft)]">
                    {s.borough}
                  </span>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        <p className="mt-4 text-xs text-[var(--color-ink-soft)]">
          Not a complete list. Full directory available on request.
        </p>
      </div>
    </div>
  );
}

/**
 * Map visual abstrato - dots + lines em grid NY.
 * Linear-style: abstract, geometric, sem Google Maps cost/complexity.
 */
function MapVisual() {
  const dots = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    x: 15 + Math.random() * 70,
    y: 15 + Math.random() * 70,
    delay: i * 0.15,
  }));

  return (
    <svg
      viewBox="0 0 100 80"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {/* subtle grid */}
      <defs>
        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(245,242,238,0.04)" strokeWidth="0.2" />
        </pattern>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(233,79,111,0.35)" />
          <stop offset="100%" stopColor="rgba(233,79,111,0)" />
        </radialGradient>
      </defs>
      <rect width="100" height="80" fill="url(#grid)" />

      {/* connecting lines suaves */}
      {dots.slice(0, 8).map((d, i) => {
        const next = dots[i + 1];
        if (!next) return null;
        return (
          <line
            key={`l-${d.id}`}
            x1={d.x}
            y1={d.y}
            x2={next.x}
            y2={next.y}
            stroke="rgba(245,242,238,0.08)"
            strokeWidth="0.15"
          />
        );
      })}

      {/* dots */}
      {dots.map((d) => (
        <g key={d.id}>
          <circle cx={d.x} cy={d.y} r="3" fill="url(#glow)" />
          <circle cx={d.x} cy={d.y} r="0.8" fill="#e94f6f">
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="3s"
              begin={`${d.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
