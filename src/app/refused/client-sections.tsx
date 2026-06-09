"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

type RefusalReason = { reason: string; fix: string };
type ReprocessStep = { step: number; title: string; desc: string };

export function RefusedClientSections({
  refusalReasons,
  reprocessSteps,
}: {
  refusalReasons: RefusalReason[];
  reprocessSteps: ReprocessStep[];
}) {
  return (
    <>
      {/* Common Refusal Reasons */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                Common Refusal Reasons — And How We Fix Them
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                We&apos;ve seen every type of refusal. Here&apos;s how we address the most common ones.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {refusalReasons.map((item, i) => (
              <ScrollReveal key={item.reason} animation="fade-up" delay={i * 80}>
                <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 bg-white h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.reason}</h3>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center mt-0.5">
                      <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Reprocessing */}
      <section className="py-20 bg-navy-50 bg-dot-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                Our 3-Step Reprocessing Process
              </h2>
              <p className="mt-3 text-lg text-gray-500">Simple, transparent, and designed to get you approved</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" className="mt-12">
            <div className="relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-10 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px] bg-navy-200" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reprocessSteps.map((step) => (
                  <div key={step.step} className="relative bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <span className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment-form" className="py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-600 mb-6">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Join 500+ students who turned their refusal into an approval
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                Get Your Free Assessment
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Tell us about your situation and we&apos;ll analyze your case — completely free.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" className="mt-10">
            <form className="space-y-5 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input type="text" id="name" required className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" id="email" required className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" id="phone" required className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none" />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">Country You Applied To</label>
                <select id="country" className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none">
                  <option value="">Select a country</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="when" className="block text-sm font-medium text-gray-700 mb-1.5">When Were You Refused?</label>
                <select id="when" className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none">
                  <option value="">Select timeframe</option>
                  <option>Last month</option>
                  <option>1-3 months ago</option>
                  <option>3-6 months ago</option>
                  <option>6+ months ago</option>
                </select>
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1.5">Brief Reason for Refusal</label>
                <textarea id="reason" rows={4} className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none" placeholder="Tell us what happened — what reason was given for the refusal?" />
              </div>
              <button
                type="submit"
                className="cta-shine w-full rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white hover:bg-brand-600 hover:shadow-lg transition-all duration-200 shadow-[0_8px_24px_-6px_rgba(242,107,33,0.5)]"
              >
                Get Your Free Assessment
              </button>
              <p className="text-xs text-gray-400 text-center">
                Your information is confidential. We&apos;ll contact you within 24 hours.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
