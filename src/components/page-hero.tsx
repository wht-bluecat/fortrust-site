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
  badge?: { label: string; color?: "teal" | "red" };
  variant?: "compact" | "angled";
  children?: React.ReactNode;
}) {
  const isAngled = variant === "angled";

  const badgeColor = badge?.color === "red"
    ? "bg-red-500/20 text-red-200 ring-red-400/30"
    : "bg-teal-500/20 text-teal-200 ring-teal-400/30";

  return (
    <section
      className={`relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 overflow-hidden ${
        isAngled ? "hero-angled" : ""
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute rounded-full blur-3xl ${
          isAngled
            ? "-top-20 -right-20 w-72 h-72 bg-teal-500/10"
            : "top-1/2 -translate-y-1/2 -right-20 w-48 h-48 bg-teal-400/10"
        }`} />
      </div>

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isAngled
            ? "py-16 sm:py-24 pb-24 sm:pb-32"
            : "py-12 sm:py-16"
        }`}
      >
        <div className={isAngled ? "max-w-3xl" : "text-center max-w-3xl mx-auto"}>
          {badge && (
            <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ring-1 backdrop-blur-sm mb-4 ${badgeColor}`}>
              {badge.label}
            </span>
          )}
          <h1
            className={`font-heading font-bold text-white leading-tight ${
              isAngled
                ? "text-4xl sm:text-5xl"
                : "text-3xl sm:text-4xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-4 text-teal-100/90 leading-relaxed ${
              isAngled ? "text-lg" : "text-base sm:text-lg"
            }`}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
