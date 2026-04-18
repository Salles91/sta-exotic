"use client";

/**
 * SectionBackground, translucent editorial photo that sits behind a section.
 * Framer Motion whileInView fades the image in as user scrolls into viewport.
 * Dark gradient overlay preserves legibility of the copy on top.
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
  // default, balanced, works for most copy-heavy sections
  default:
    "linear-gradient(180deg, rgba(10,8,8,0.72) 0%, rgba(10,8,8,0.82) 50%, rgba(10,8,8,0.95) 100%)",
  // soft, for hero where mesh is doing heavy lifting
  soft: "linear-gradient(180deg, rgba(10,8,8,0.55) 0%, rgba(10,8,8,0.7) 55%, rgba(10,8,8,0.92) 100%)",
  // strong, for retailer/press where forms sit on top
  strong:
    "linear-gradient(180deg, rgba(10,8,8,0.82) 0%, rgba(10,8,8,0.9) 45%, rgba(10,8,8,0.96) 100%)",
  // edge, for story where copy is dense and needs clarity
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
  // parallax, image drifts 12 percent across the scroll range
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      // amount 0 so any intersection triggers, margin 200px so the
      // animation fires slightly before the section enters viewport
      viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
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
    </motion.div>
  );
}
