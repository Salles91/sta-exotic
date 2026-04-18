"use client";

/**
 * SectionBackground, translucent editorial photo that sits behind a section.
 * Uses CSS keyframe fade in plus parallax via Framer Motion useScroll so it
 * stays reliable across browsers and server rendered states.
 *
 * Usage:
 *   <section className="relative overflow-hidden ...">
 *     <SectionBackground src="/images/bg/bg-hero.jpg" alt="..." />
 *     <div className="relative z-10"> ...content... </div>
 *   </section>
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  opacity?: number;
  eager?: boolean;
  parallax?: boolean;
  overlayVariant?: "default" | "soft" | "strong" | "edge";
};

const OVERLAYS: Record<NonNullable<Props["overlayVariant"]>, string> = {
  default:
    "linear-gradient(180deg, rgba(10,8,8,0.72) 0%, rgba(10,8,8,0.82) 50%, rgba(10,8,8,0.95) 100%)",
  soft: "linear-gradient(180deg, rgba(10,8,8,0.55) 0%, rgba(10,8,8,0.7) 55%, rgba(10,8,8,0.92) 100%)",
  strong:
    "linear-gradient(180deg, rgba(10,8,8,0.82) 0%, rgba(10,8,8,0.9) 45%, rgba(10,8,8,0.96) 100%)",
  edge: "radial-gradient(ellipse at center, rgba(10,8,8,0.55) 0%, rgba(10,8,8,0.9) 85%), linear-gradient(180deg, rgba(10,8,8,0.65) 0%, rgba(10,8,8,0.95) 100%)",
};

export default function SectionBackground({
  src,
  alt,
  opacity = 0.28,
  eager = false,
  parallax = false,
  overlayVariant = "default",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="sta-bg-fade pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ ["--sta-bg-opacity" as string]: opacity }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={src}
        alt={alt}
        className="img-grade-sta absolute inset-0 h-[112%] w-full object-cover"
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        style={parallax ? { y } : undefined}
      />
      <div
        className="absolute inset-0"
        style={{ background: OVERLAYS[overlayVariant] }}
      />
    </div>
  );
}
