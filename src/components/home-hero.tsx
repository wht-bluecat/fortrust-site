"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCountUp } from "@/hooks/use-count-up";

const SETMORE = process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com";

/* The interactive canvas globe is client-only (needs window) */
const Globe = dynamic(() => import("@/components/globe").then((m) => m.Globe), {
  ssr: false,
  loading: () => (
    <div className="aspect-square w-full animate-pulse rounded-full bg-white/5" />
  ),
});

/* Full stat set (moved here from the old stat-bar tab) */
function HeroStat({ target, suffix, prefix, label }: { target: number; suffix?: string; prefix?: string; label: string }) {
  const { ref, value } = useCountUp(target, { suffix, prefix, duration: 2000 });
  return (
    <div className="text-center sm:text-left">
      <p ref={ref as React.RefObject<HTMLParagraphElement>} className="font-heading text-xl sm:text-2xl font-extrabold leading-none text-white">
        {value}
      </p>
      <p className="mt-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-wide text-navy-200">{label}</p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Base gradient + mesh radials for depth */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 65% 55% at 8% 92%, rgba(75,35,130,0.28) 0%, transparent 70%)",
            "radial-gradient(ellipse 55% 45% at 92% 8%, rgba(30,170,215,0.20) 0%, transparent 70%)",
            "linear-gradient(135deg, #14264f 0%, #1b3c73 46%, #236aa0 100%)",
          ].join(", "),
        }}
      />

      {/* Film-grain texture overlay (premium matte feel) */}
      <div className="hero-grain-overlay" />

      {/* Aurora glows (orange + cyan, drifting) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="animate-aurora absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-500/30 blur-[110px]" />
        <div className="animate-aurora-slow absolute top-1/3 -left-32 h-[26rem] w-[26rem] rounded-full bg-accent-cyan/25 blur-[120px]" />
        <div className="animate-float-delayed absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-accent-blue/20 blur-[100px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-20 lg:pt-24 lg:pb-28">
        <div className="lg:grid lg:grid-cols-[1fr_1.12fr] lg:gap-12 xl:gap-16 lg:items-center">
          {/* ===== LEFT: copy ===== */}
          <div className="max-w-2xl">
            <div className="hero-rise" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan backdrop-blur">
                <span className="relative flex h-2 w-2 text-brand-400">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                The Philippines&apos; Most Trusted Education Agency
              </span>
            </div>

            <h1
              className="hero-rise mt-6 font-heading text-[2.2rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
              style={{ animationDelay: "100ms" }}
            >
              Study Abroad.
              <br />
              {/* whitespace-nowrap prevents "Life." from orphaning on a new line,
                  keeping the draw-on underline perfectly under the full phrase */}
              <span className="relative inline-block whitespace-nowrap text-brand-500">
                Change Your Life.
                {/* hand-drawn underline sweep */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 320 18"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="draw-underline"
                    d="M4 12C58 4 130 2 180 6C228 10 280 10 316 4"
                    stroke="var(--brand-500)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="hero-rise mt-7 max-w-xl text-lg leading-relaxed text-navy-100 sm:text-xl"
              style={{ animationDelay: "220ms" }}
            >
              95% visa approval rate. 3,000+ students sent abroad since 2013. Your
              free consultation is waiting, and it always stays free.
            </p>

            <div
              className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href={SETMORE}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-shine inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-[0_12px_30px_-8px_rgba(242,107,33,0.6)] transition-all duration-200 hover:bg-brand-600 hover:scale-[1.02]"
              >
                Book Your Free Consultation
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/25 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
              >
                Explore Destinations
              </Link>
            </div>

            <div
              className="hero-rise mt-8 flex items-center gap-4"
              style={{ animationDelay: "430ms" }}
            >
              <div className="flex -space-x-2.5">
                {["from-brand-400 to-brand-600", "from-accent-blue to-accent-deep", "from-accent-cyan to-accent-blue", "from-navy-300 to-navy-500"].map(
                  (g, i) => (
                    <span
                      key={i}
                      className={`inline-block h-9 w-9 rounded-full ring-2 ring-navy-900 bg-gradient-to-br ${g}`}
                    />
                  )
                )}
              </div>
              <p className="text-sm text-navy-200">
                <span className="font-bold text-white">3,000+ Filipinos</span> already
                started their journey
              </p>
            </div>
          </div>

          {/* ===== RIGHT: interactive world globe with Fortrust logo pins ===== */}
          <div
            className="hero-pop relative mt-16 sm:mt-14 lg:mt-0 lg:translate-x-4 xl:translate-x-8"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative mx-auto w-[19rem] sm:w-[24rem] lg:w-[30rem]">
              <Globe />
            </div>

            <p className="mt-4 text-center text-xs font-medium text-navy-200/60 tracking-wide">
              Drag to explore
            </p>
          </div>
        </div>

        {/* ===== integrated stat strip (moved from the old stat tab) ===== */}
        <div
          className="hero-rise mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/12 bg-white/5 px-5 py-5 backdrop-blur-md sm:mt-14 sm:grid-cols-3 sm:gap-6 sm:px-8 lg:grid-cols-5"
          style={{ animationDelay: "520ms" }}
        >
          <HeroStat target={95} suffix="%" label="Visa Approval Rate" />
          <HeroStat target={3000} suffix="+" label="Visas Granted" />
          <HeroStat target={300} suffix="+" label="Partner Schools" />
          <HeroStat target={6} suffix="" label="PH Offices" />
          <HeroStat target={13} suffix="+" label="Years Since 2013" />
        </div>
      </div>

      {/* bottom curve divider into next (light) section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 80" className="h-[40px] w-full sm:h-[64px]" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80V40C240 70 480 80 720 70 960 60 1200 20 1440 36V80Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
