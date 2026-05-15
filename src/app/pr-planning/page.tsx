import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Permanent Residency Planning Canada | From Philippines",
  description:
    "Fortrust's Permanent Residency Planning™ maps your path to Canadian PR from Day 1. We select schools, programs, and provinces that maximize your immigration points.",
};

export default function PRPlanningPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-200 ring-1 ring-teal-400/30">
              Trademarked Service — Exclusive to Fortrust
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
              Permanent Residency{" "}
              <span className="text-teal-300">Planning™</span>
            </h1>
            <p className="mt-6 text-lg text-teal-100 leading-relaxed">
              We don&apos;t just get you a student visa. We plan your entire path to Canadian permanent
              residency — from school selection to PR application.
            </p>
            <div className="mt-8">
              <a
                href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 transition-all"
              >
                Book PR Planning Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">What is PR Planning?</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most agencies just help you get a student visa. Fortrust goes further — we plan your
                entire immigration pathway to Canadian permanent residency from the moment you start.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                This means every decision — which school, which program, which province — is made
                with your long-term PR goal in mind. Not just your education.
              </p>
              <h3 className="mt-8 text-lg font-bold text-gray-900">How It Works</h3>
              <ol className="mt-4 space-y-4">
                {[
                  { title: "Profile Assessment", desc: "We evaluate your age, education, work experience, and language ability against Canada's immigration point system." },
                  { title: "Strategic School Selection", desc: "We match you with DLI schools and programs in provinces that offer the best PR pathways for your profile." },
                  { title: "Point Maximization", desc: "We plan how to maximize your Comprehensive Ranking System (CRS) score through program choice, work experience, and provincial nominations." },
                  { title: "Post-Graduation Strategy", desc: "After graduation, we guide your PGWP application and help you build the work experience needed for Express Entry or PNP." },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{step.title}</p>
                      <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl bg-teal-50 p-8">
                <h3 className="font-heading text-xl font-bold text-gray-900">Why This Matters</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Choosing the wrong school or program can delay your PR application by years — or
                  make it impossible. PR Planning eliminates that risk by aligning every step with
                  your immigration goals.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Other agencies: Get visa → figure out PR later",
                    "Fortrust: Plan PR → choose school strategically → get visa → achieve PR",
                  ].map((item, i) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5 ${i === 0 ? "bg-red-100 text-red-500" : "bg-teal-100 text-teal-600"}`}>
                        {i === 0 ? "✕" : "✓"}
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8">
                <h3 className="font-heading text-xl font-bold text-gray-900">Key Canada PR Pathways</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Express Entry (Federal Skilled Worker / Canadian Experience Class)",
                    "Provincial Nominee Programs (PNP)",
                    "Atlantic Immigration Program",
                    "Rural and Northern Immigration Pilot",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan your path to Canadian PR"
        subtitle="Book a free PR Planning consultation. We'll assess your profile and map out your best pathway to permanent residency."
        buttonText="Book PR Planning Consultation"
      />
    </>
  );
}
