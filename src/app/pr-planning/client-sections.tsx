"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  { title: "Profile Assessment", desc: "We evaluate your age, education, work experience, and language ability against Canada's immigration point system." },
  { title: "Strategic School Selection", desc: "We match you with DLI schools and programs in provinces that offer the best PR pathways for your profile." },
  { title: "Point Maximization", desc: "We plan how to maximize your Comprehensive Ranking System (CRS) score through program choice, work experience, and provincial nominations." },
  { title: "Post-Graduation Strategy", desc: "After graduation, we guide your PGWP application and help you build the work experience needed for Express Entry or PNP." },
];

const pathways = [
  "Express Entry (Federal Skilled Worker / Canadian Experience Class)",
  "Provincial Nominee Programs (PNP)",
  "Atlantic Immigration Program",
  "Rural and Northern Immigration Pilot",
];

export function PRPlanningClientSections() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal animation="slide-left">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">What is PR Planning?</h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Most agencies just help you get a student visa. Fortrust goes further — we plan your
                entire immigration pathway to Canadian permanent residency from the moment you start.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                This means every decision — which school, which program, which province — is made
                with your long-term PR goal in mind. Not just your education.
              </p>
              <h3 className="mt-8 text-lg font-bold text-gray-900">How It Works</h3>
              <ol className="mt-4 space-y-5">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold text-sm shrink-0 shadow-sm">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{step.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-right">
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 p-8">
                <h3 className="font-heading text-xl font-bold text-gray-900">Why This Matters</h3>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  Choosing the wrong school or program can delay your PR application by years — or
                  make it impossible. PR Planning eliminates that risk by aligning every step with
                  your immigration goals.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                      <svg className="h-3.5 w-3.5 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Other agencies: Get visa → figure out PR later</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                      <svg className="h-3.5 w-3.5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Fortrust: Plan PR → choose school strategically → get visa → achieve PR</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="font-heading text-xl font-bold text-gray-900">Key Canada PR Pathways</h3>
                <ul className="mt-4 space-y-3">
                  {pathways.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
