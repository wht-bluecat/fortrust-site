"use client";

import { useEffect, useRef } from "react";

/**
 * Hook that adds scroll-reveal animation to elements.
 * Elements start hidden and animate in when they enter the viewport.
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>();
 *   <div ref={ref} className="reveal">...</div>
 *
 * Or for staggered children:
 *   const ref = useScrollReveal<HTMLDivElement>({ stagger: true });
 *   <div ref={ref} className="reveal-parent">
 *     <div className="reveal-child">...</div>
 *   </div>
 */
export function useScrollReveal<T extends HTMLElement>(
  options: {
    threshold?: number;
    stagger?: boolean;
    rootMargin?: string;
  } = {}
) {
  const { threshold = 0.1, stagger = false, rootMargin = "0px 0px -50px 0px" } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              // Animate children with stagger
              const children = el.querySelectorAll(".reveal-child");
              children.forEach((child, i) => {
                setTimeout(() => {
                  child.classList.add("revealed");
                }, i * 100);
              });
            }
            el.classList.add("revealed");
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, stagger, rootMargin]);

  return ref;
}
