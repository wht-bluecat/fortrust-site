export function CTABanner({
  title = "Ready to start your journey?",
  subtitle = "Book a free consultation with one of our expert counselors. It costs nothing — ever.",
  buttonText = "Book Your Free Consultation",
  buttonHref,
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative bg-gradient-to-r from-teal-700 to-teal-600 py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-lg text-teal-100/90">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonHref || process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-teal-700 shadow-lg hover:bg-teal-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            {buttonText}
          </a>
          <a
            href="/seminars"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            Attend a Free Seminar
          </a>
        </div>
      </div>
    </section>
  );
}
