"use client";

import { motion } from "framer-motion";

/**
 * Mesh gradient hero background. CSS-only, animação sutil, perf mobile OK.
 * Linear/Framer style: movimento lento, quase imperceptível, respira.
 */
export default function HeroMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[var(--color-bg)]" />

      {/* animated mesh blobs */}
      <motion.div
        className="mesh mesh-animate absolute"
        style={{
          inset: "-20%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* vignette top to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--color-bg)]" />

      {/* grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
