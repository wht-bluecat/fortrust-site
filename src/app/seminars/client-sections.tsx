"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

export function SeminarsClientSections({ whatYoullLearn }: { whatYoullLearn: string[] }) {
  return (
    <>
      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="slide-left">
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">Schedule</h2>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="text-center shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex flex-col items-center justify-center">
                      <p className="text-lg font-bold text-white leading-none">TUE</p>
                      <p className="text-[10px] text-teal-200">Weekly</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Tuesday Seminar</p>
                      <p className="text-sm text-gray-500">1 hour &bull; In-person &amp; Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="text-center shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex flex-col items-center justify-center">
                      <p className="text-lg font-bold text-white leading-none">SAT</p>
                      <p className="text-[10px] text-teal-200">Weekly</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Saturday Seminar</p>
                      <p className="text-sm text-gray-500">1 hour &bull; In-person &amp; Online</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-400">
                  Location: Fortrust Makati HQ, 5th Floor, Liberty Building, A. Arnaiz Avenue
                </p>
                <p className="text-sm text-gray-400">
                  Also available in Cebu &amp; Baguio — contact us for local schedules.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right">
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">What You&apos;ll Learn</h2>
                <ul className="mt-8 space-y-4">
                  {whatYoullLearn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                        <svg className="h-3.5 w-3.5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Seminar Photos Placeholder */}
      <section className="py-16 bg-teal-50 bg-dot-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-gray-900">Past Seminars</h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <ScrollReveal key={i} animation="scale-in" delay={i * 80}>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-teal-100 to-cyan-50 border border-teal-200/50 flex items-center justify-center">
                  <p className="text-sm text-teal-400">Photo placeholder</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
