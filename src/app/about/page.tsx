import type { Metadata } from "next";
import { StatBar } from "@/components/stat-bar";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About Fortrust | 13+ Years Helping Filipinos Study Abroad",
  description:
    "Founded in 2013, Fortrust Education Services has helped 3,000+ Filipino students study abroad with a 95% visa approval rate. 6 offices across the Philippines.",
};

const milestones = [
  { year: "2013", event: "Fortrust Philippines established in Makati City" },
  { year: "2015", event: "Opened Cebu IT Park branch" },
  { year: "2017", event: "1,000th visa granted — Baguio office opens" },
  { year: "2019", event: "Launched Permanent Residency Planning™ for Canada" },
  { year: "2021", event: "2,000+ visas granted — Davao & CDO satellites open" },
  { year: "2023", event: "Ortigas/Pasig office opens — now 6 locations nationwide" },
  { year: "2025", event: "3,000+ visas granted — 95% approval rate maintained" },
];

const offices = [
  { name: "Makati (HQ)", address: "5th Floor, Liberty Building, A. Arnaiz Avenue, Makati City", type: "Headquarters" },
  { name: "Cebu", address: "Cebu IT Park, Cebu City", type: "Full Office" },
  { name: "Baguio", address: "Baguio City", type: "Full Office" },
  { name: "Davao", address: "Davao City", type: "Satellite" },
  { name: "Cagayan de Oro", address: "CDO", type: "Satellite" },
  { name: "Ortigas / Pasig", address: "Pasig City", type: "Satellite" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
              13+ Years of Helping Filipinos{" "}
              <span className="text-teal-300">Study Abroad</span>
            </h1>
            <p className="mt-6 text-lg text-teal-100 leading-relaxed">
              Since 2013, Fortrust Education Services has been the Philippines&apos; most trusted
              study abroad agency. 3,000+ visas granted. 6 offices nationwide. 95% approval rate.
            </p>
          </div>
        </div>
      </section>

      <StatBar />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe every Filipino deserves access to world-class education. Our mission is to
                make studying abroad simple, affordable, and achievable — regardless of your
                background or budget.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Unlike other agencies, our services are completely free to students. We&apos;re funded
                by commissions from our 300+ partner schools worldwide, which means we can focus
                entirely on what&apos;s best for you.
              </p>
              <h2 className="mt-10 font-heading text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To be the leading education consultancy in Southeast Asia, known for integrity,
                expertise, and the highest visa approval rate in the industry.
              </p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-gray-900">What Sets Us Apart</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "100% free services — always",
                  "95% visa approval rate",
                  "Visa-refused reprocessing specialty",
                  "Permanent Residency Planning™ for Canada",
                  "300+ partner schools across 4+ countries",
                  "6 offices nationwide for accessibility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">Our Journey</h2>
          <div className="mt-12 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {m.year.slice(-2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-16 bg-teal-200" />}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-bold text-teal-700">{m.year}</p>
                  <p className="mt-1 text-gray-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-3 text-lg text-gray-600">
              Expert counselors dedicated to your success
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-28 h-28 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-teal-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-400">Counselor Profile</p>
                <p className="text-xs text-gray-300">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">Our Offices</h2>
          <p className="mt-3 text-lg text-gray-600 text-center">6 locations across the Philippines</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                  {office.type}
                </span>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{office.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
