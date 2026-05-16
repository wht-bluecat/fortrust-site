"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { type ReactNode } from "react";

/**
 * Wrapper component for scroll-reveal animations.
 * Wraps children in a div that fades in when scrolled into view.
 */
export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
  stagger?: boolean;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ stagger });

  const animationClass = {
    "fade-up": "reveal-fade-up",
    "fade-in": "reveal-fade-in",
    "scale-in": "reveal-scale-in",
    "slide-left": "reveal-slide-left",
    "slide-right": "reveal-slide-right",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
