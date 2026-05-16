"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook that animates a number counting up from 0 to the target value.
 * Starts when the element enters the viewport.
 *
 * Usage:
 *   const { ref, value } = useCountUp(3000, { duration: 2000, suffix: "+" });
 *   <span ref={ref}>{value}</span>
 */
export function useCountUp(
  target: number,
  options: {
    duration?: number;
    suffix?: string;
    prefix?: string;
  } = {}
) {
  const { duration = 2000, suffix = "", prefix = "" } = options;
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(`${prefix}0${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.unobserve(el);

            const startTime = performance.now();

            function animate(currentTime: number) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease out cubic for smooth deceleration
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * target);

              setValue(`${prefix}${current.toLocaleString()}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            }

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix, prefix]);

  return { ref, value };
}
