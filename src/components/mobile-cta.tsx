"use client";

import { useEffect, useState } from "react";

/**
 * Sticky bottom CTA bar for mobile devices.
 * Appears after user scrolls past the hero section.
 * Hides on scroll down, shows on scroll up (like iOS Safari toolbar).
 */
export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const heroHeight = window.innerHeight * 0.6;

          // Only show after scrolling past hero
          if (currentY > heroHeight) {
            setPastHero(true);
            // Show on scroll up, hide on scroll down
            if (currentY < lastScrollY || currentY < heroHeight + 100) {
              setVisible(true);
            } else {
              setVisible(false);
            }
          } else {
            setPastHero(false);
            setVisible(false);
          }

          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!pastHero) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-lg border-t border-gray-200 px-4 py-3 safe-area-bottom">
        <a
          href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center rounded-full bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-teal-700 transition-colors"
        >
          Book Free Consultation
        </a>
      </div>
    </div>
  );
}
