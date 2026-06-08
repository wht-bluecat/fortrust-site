"use client";

import Link from "next/link";
import Image from "next/image";

const SETMORE = process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com";

/* Destination pins positioned around the orbiting globe */
const pins = [
  { code: "CA", label: "Canada", top: "8%", left: "50%", color: "var(--accent-cyan)" },
  { code: "AU", label: "Australia", top: "70%", left: "86%", color: "var(--brand-500)" },
  { code: "NZ", label: "New Zealand", top: "84%", left: "30%", color: "var(--accent-blue)" },
  { code: "UK", label: "United Kingdom", top: "26%", left: "12%", color: "#ffffff" },
];

/* Floating stat chips */
const chips = [
  { value: "95%", label: "Visa approval", className: "top-2 -left-4 sm:-left-10", anim: "animate-bob" },
  { value: "$0", label: "Cost to you", className: "bottom-10 -left-2 sm:-left-8", anim: "animate-bob-slow" },
  { value: "3,000+", label: "Sent abroad", className: "bottom-0 right-2 sm:right-0", anim: "animate-bob-fast" },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      {/* Layered navy gradient base */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Aurora glows (orange + cyan, drifting) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="animate-aurora absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-[110px]" />
        <div className="animate-aurora-slow absolute top-1/3 -left-32 h-[26rem] w-[26rem] rounded-full bg-accent-blue/25 blur-[120px]" />
        <div className="animate-float-delayed absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-accent-cyan/15 blur-[100px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-24 lg:pt-28 lg:pb-36">
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:items-center">
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
              className="hero-rise mt-6 font-heading text-[2.65rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
              style={{ animationDelay: "100ms" }}
            >
              Study Abroad.
              <br />
              <span className="relative inline-block text-brand-500">
                Change Your Life.
                {/* hand-drawn underline doodle */}
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 320 22"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="draw-underline"
                    d="M4 14C58 6 130 4 180 8C228 12 280 12 316 6"
                    stroke="var(--brand-500)"
                    strokeWidth="5"
                    strokeLinecap="round"
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
                href="/seminars"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/25 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
              >
                Attend a Free Seminar
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

          {/* ===== RIGHT: orbiting globe + floating chips ===== */}
          <div
            className="hero-pop relative mt-14 hidden h-[26rem] sm:flex lg:mt-0 lg:h-[30rem]"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative m-auto aspect-square w-[22rem] lg:w-[26rem]">
              {/* glow halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-cyan/20 blur-2xl" />

              {/* orbit rings */}
              <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-white/15" />
              <div className="animate-spin-rev absolute inset-[12%] rounded-full border border-white/10" />
              <div className="animate-spin-slow absolute inset-[24%] rounded-full border border-dashed border-accent-cyan/20" />

              {/* destination pins on outer ring */}
              {pins.map((p) => (
                <div
                  key={p.code}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: p.top, left: p.left }}
                >
                  <div className="group flex flex-col items-center gap-1">
                    <span
                      className="pulse-ring relative flex h-3.5 w-3.5 items-center justify-center rounded-full"
                      style={{ color: p.color }}
                    >
                      <span
                        className="relative h-3.5 w-3.5 rounded-full ring-2 ring-navy-900"
                        style={{ background: p.color }}
                      />
                    </span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white backdrop-blur">
                      {p.code}
                    </span>
                  </div>
                </div>
              ))}

              {/* center globe mark */}
              <div className="absolute inset-[30%] flex items-center justify-center">
                <div className="relative h-full w-full animate-bob-slow">
                  <Image
                    src="/logo-icon-white.png"
                    alt="Fortrust globe mark"
                    fill
                    className="object-contain drop-shadow-[0_8px_24px_rgba(65,230,226,0.35)]"
                    sizes="200px"
                  />
                </div>
              </div>
            </div>

            {/* floating stat chips */}
            {chips.map((c) => (
              <div
                key={c.label}
                className={`absolute ${c.className} ${c.anim} rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md`}
              >
                <p className="font-heading text-2xl font-extrabold leading-none text-white">{c.value}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-navy-200">{c.label}</p>
              </div>
            ))}

            {/* doodle: paper plane */}
            <svg className="animate-bob absolute right-6 top-2 h-9 w-9 text-brand-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* doodle: graduation cap */}
            <svg className="animate-bob-slow absolute left-2 top-24 h-8 w-8 text-accent-cyan" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 10L12 5 2 10l10 5 10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
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
