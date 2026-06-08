export function CTABanner({
  title = "Ready to start your journey?",
  subtitle = "Book a free consultation with one of our expert counselors. It costs nothing, ever.",
  buttonText = "Book Your Free Consultation",
  buttonHref,
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-aurora absolute -top-20 -left-20 w-72 h-72 bg-brand-500/25 rounded-full blur-3xl" />
        <div className="animate-aurora-slow absolute -bottom-24 -right-20 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">{title}</h2>
        <p className="mt-4 text-lg text-navy-100">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonHref || process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-8px_rgba(242,107,33,0.6)] hover:bg-brand-600 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
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
