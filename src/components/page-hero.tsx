/**
 * Reusable hero component with 2 variants:
 * - "compact" (default): Short gradient header with centered text. For standard inner pages.
 * - "angled": Taller gradient with clip-path angle. For conversion pages.
 */
export function PageHero({
  title,
  subtitle,
  badge,
  variant = "compact",
  children,
}: {
  title: string | React.ReactNode;
  subtitle?: string;
  badge?: { label: string; color?: "brand" | "red" | "teal" };
  variant?: "compact" | "angled";
  children?: React.ReactNode;
}) {
  const isAngled = variant === "angled";

  const badgeColor =
    badge?.color === "red"
      ? "bg-red-500/20 text-red-200 ring-red-400/30"
      : "bg-brand-500/20 text-brand-200 ring-brand-400/30";

  return (
    <section
      className={`relative overflow-hidden ${isAngled ? "hero-angled" : ""}`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, #14264f 0%, #1b3c73 46%, #236aa0 100%)",
      }}
    >
      {/* Grain texture */}
      <div className="hero-grain-overlay" />

      {/* Decorative aurora glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute rounded-full blur-3xl ${
            isAngled
              ? "-top-20 -right-20 w-72 h-72 bg-brand-500/20"
              : "top-1/2 -translate-y-1/2 -right-20 w-48 h-48 bg-accent-blue/15"
          }`}
        />
        <div className="absolute -bottom-10 -left-16 w-56 h-56 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isAngled ? "py-16 sm:py-24 pb-24 sm:pb-32" : "py-12 sm:py-16"
        }`}
      >
        <div className={isAngled ? "max-w-3xl" : "text-center max-w-3xl mx-auto"}>
          {badge && (
            <span
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ring-1 backdrop-blur-sm mb-4 ${badgeColor}`}
            >
              {badge.label}
            </span>
          )}
          <h1
            className={`font-heading font-bold text-white leading-tight ${
              isAngled ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-4 text-navy-100/90 leading-relaxed ${
                isAngled ? "text-lg" : "text-base sm:text-lg"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
