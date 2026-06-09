"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

type Milestone = { year: string; event: string };
type Office = { name: string; address: string; type: string };

export function AboutClientSections({
  milestones,
  offices,
  setApart,
}: {
  milestones: Milestone[];
  offices: Office[];
  setApart: string[];
}) {
  return (
    <>
      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-left">
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  We believe every Filipino deserves access to world-class education. Our mission is to
                  make studying abroad simple, affordable, and achievable — regardless of your
                  background or budget.
                </p>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Unlike other agencies, our services are completely free to students. We&apos;re funded
                  by commissions from our 300+ partner schools worldwide, which means we can focus
                  entirely on what&apos;s best for you.
                </p>
                <h2 className="mt-10 font-heading text-3xl font-bold text-gray-900">Our Vision</h2>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  To be the leading education consultancy in Southeast Asia, known for integrity,
                  expertise, and the highest visa approval rate in the industry.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-right">
              <div className="bg-gradient-to-br from-navy-50 to-brand-50 rounded-2xl p-8 border border-navy-100">
                <h3 className="font-heading text-2xl font-bold text-gray-900">What Sets Us Apart</h3>
                <ul className="mt-6 space-y-4">
                  {setApart.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                        <svg className="h-3.5 w-3.5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 bg-dot-pattern">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">Our Journey</h2>
          </ScrollReveal>
          <div className="mt-12 space-y-0">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} animation="fade-up" delay={i * 80}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                      {m.year.slice(-2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 h-16 bg-navy-200" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-bold text-brand-500">{m.year}</p>
                    <p className="mt-1 text-gray-600">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-gray-900">Our Team</h2>
              <p className="mt-3 text-lg text-gray-500">
                Expert counselors dedicated to your success
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ScrollReveal key={i} animation="scale-in" delay={i * 60}>
                <div className="text-center">
                  <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-navy-50 to-navy-100 border-2 border-navy-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-navy-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-400">Counselor Profile</p>
                  <p className="text-xs text-gray-300">Coming soon</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">Our Offices</h2>
            <p className="mt-3 text-lg text-gray-500 text-center">6 locations across the Philippines</p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <ScrollReveal key={office.name} animation="fade-up" delay={i * 80}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <span className="inline-flex rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">
                    {office.type}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{office.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{office.address}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
