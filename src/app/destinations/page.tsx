import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Study Abroad Destinations | Canada, Australia, NZ, UK",
  description:
    "Choose from 4 world-class destinations with 300+ partner schools. Study in Canada, Australia, New Zealand, or the UK with Fortrust — 95% visa approval rate.",
};

const destinations = [
  {
    flag: "🇨🇦", country: "Canada", href: "/destinations/canada",
    tagline: "Work, study, and build your path to permanent residency",
    highlights: ["Post-Graduation Work Permit (PGWP)", "Permanent Residency Planning™", "Affordable tuition vs. US/UK", "High quality of life"],
    schools: "120+", tuition: "From ₱400,000/year",
  },
  {
    flag: "🇦🇺", country: "Australia", href: "/destinations/australia",
    tagline: "World-class education with generous work rights",
    highlights: ["Post-Study Work Visa (2-4 years)", "Work 48hrs/fortnight while studying", "Regional opportunities", "Strong alumni network"],
    schools: "80+", tuition: "From ₱500,000/year",
  },
  {
    flag: "🇳🇿", country: "New Zealand", href: "/destinations/new-zealand",
    tagline: "Affordable, safe, and welcoming for international students",
    highlights: ["Work while studying (20hrs/week)", "Post-Study Work Visa", "Lower cost of living", "Pathway to residency"],
    schools: "40+", tuition: "From ₱350,000/year",
  },
  {
    flag: "🇬🇧", country: "United Kingdom", href: "/destinations/uk",
    tagline: "Prestigious education with the Graduate Route visa",
    highlights: ["Graduate Route Visa (2 years)", "1-year Master's programs", "World-renowned universities", "Rich cultural experience"],
    schools: "60+", tuition: "From ₱600,000/year",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Where do you want to <span className="text-teal-300">study?</span>
          </h1>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl">
            4 world-class destinations. 300+ partner schools. One trusted agency to guide you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {destinations.map((dest) => (
            <Link
              key={dest.country}
              href={dest.href}
              className="group block rounded-2xl border border-gray-200 p-8 hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{dest.flag}</span>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                      Study in {dest.country}
                    </h2>
                  </div>
                  <p className="mt-2 text-gray-600">{dest.tagline}</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {dest.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="h-4 w-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-row lg:flex-col gap-6 lg:gap-3 lg:text-right shrink-0">
                  <div>
                    <p className="text-sm text-gray-500">Partner Schools</p>
                    <p className="text-xl font-bold text-teal-700">{dest.schools}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tuition</p>
                    <p className="text-sm font-medium text-gray-900">{dest.tuition}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="Not sure which country is right for you?"
        subtitle="Book a free consultation and we'll help you find the perfect destination based on your goals, budget, and timeline."
      />
    </>
  );
}
