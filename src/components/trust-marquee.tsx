const items = [
  "95% Visa Approval Rate",
  "300+ Partner Schools",
  "Study in Canada",
  "Study in Australia",
  "Study in New Zealand",
  "Study in the UK",
  "Permanent Residency Planning™",
  "Visa-Refused Reprocessing",
  "6 Offices Across the Philippines",
  "Free Consultation, Always",
];

function Row() {
  return (
    <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
      {items.map((it) => (
        <span key={it} className="flex items-center gap-10 whitespace-nowrap">
          <span className="text-sm font-semibold tracking-wide text-navy-700">{it}</span>
          <svg className="h-2.5 w-2.5 text-brand-500" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export function TrustMarquee() {
  return (
    <div className="marquee-track relative overflow-hidden border-y border-navy-100 bg-white py-4">
      <div className="flex w-max">
        <Row />
        <Row />
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
