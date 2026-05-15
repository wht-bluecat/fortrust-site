import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { FAQAccordion } from "@/components/faq-accordion";
import { StatBar } from "@/components/stat-bar";

export const metadata: Metadata = {
  title: "Visa Refused? Reprocessing Help Philippines | 95% Success Rate",
  description:
    "Got your student visa refused? Fortrust specializes in visa-refused reprocessing with a 95% success rate. Free assessment — we've turned hundreds of refusals into approvals.",
};

const refusalReasons = [
  {
    reason: "Insufficient financial proof",
    fix: "We help you structure your financial documents to meet exact embassy requirements — including show money, sponsor letters, and bank certificates.",
  },
  {
    reason: "Weak study plan or purpose",
    fix: "Our counselors craft a compelling Statement of Purpose that clearly connects your education history, career goals, and chosen program.",
  },
  {
    reason: "Gaps in employment or education",
    fix: "We address gaps head-on with proper documentation and a narrative that makes sense to the visa officer.",
  },
  {
    reason: "Wrong school or program choice",
    fix: "We match you with the right school from 300+ partners — one that aligns with your profile and strengthens your application.",
  },
  {
    reason: "Incomplete or incorrect documents",
    fix: "Our documentation team cross-checks every requirement before submission. Nothing gets missed.",
  },
  {
    reason: "Previous visa refusal on record",
    fix: "This is our specialty. We analyze your previous refusal, identify what went wrong, and build a stronger case.",
  },
];

const reprocessSteps = [
  {
    step: 1,
    title: "Free Assessment",
    desc: "Send us your refusal letter and documents. We'll analyze exactly what went wrong — at no cost to you.",
  },
  {
    step: 2,
    title: "Gap Analysis & Strategy",
    desc: "Our team identifies every weakness in your previous application and builds a strategy to address each one.",
  },
  {
    step: 3,
    title: "Resubmission",
    desc: "We prepare a complete new application package and lodge it with confidence. 95% of our reprocessed applications get approved.",
  },
];

const faqItems = [
  {
    question: "How much does reprocessing cost?",
    answer:
      "Our consultation and assessment are completely free. If we take on your case, our services remain free — we're paid by partner schools, not by you.",
  },
  {
    question: "What if I was refused by a different agency?",
    answer:
      "That's actually our most common case. Many students come to us after being refused through another agency or DIY application. We specialize in fixing these situations.",
  },
  {
    question: "How long does reprocessing take?",
    answer:
      "Typically 4-8 weeks from assessment to resubmission, depending on the destination country and the complexity of your case.",
  },
  {
    question: "What's your success rate with refused cases?",
    answer:
      "Our overall visa approval rate is 95%. For reprocessed cases specifically, our success rate is exceptionally high because we only take on cases we believe we can win.",
  },
];

export default function RefusedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-200 ring-1 ring-red-400/30">
              Visa Refused?
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
              You&apos;re not alone. And you&apos;re{" "}
              <span className="text-teal-300">not out of options.</span>
            </h1>
            <p className="mt-6 text-lg text-teal-100 leading-relaxed">
              Visa-refused reprocessing is our specialty. We&apos;ve turned hundreds of refusals into
              approvals with our 95% success rate. Get a free assessment today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#assessment-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 transition-all"
              >
                Get Your Free Assessment
              </a>
              <a
                href="tel:+639178224448"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call Us Now: 0917 822 4448
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatBar />

      {/* Common Refusal Reasons */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
              Common Refusal Reasons — And How We Fix Them
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              We&apos;ve seen every type of refusal. Here&apos;s how we address the most common ones.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {refusalReasons.map((item) => (
              <div key={item.reason} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="h-5 w-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <h3 className="font-bold text-gray-900 text-sm">{item.reason}</h3>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Reprocessing */}
      <section className="py-20 bg-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
              Our 3-Step Reprocessing Process
            </h2>
            <p className="mt-3 text-lg text-gray-600">Simple, transparent, and designed to get you approved</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {reprocessSteps.map((step) => (
              <div key={step.step} className="relative bg-white rounded-xl p-8 shadow-sm text-center">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-600 text-white font-bold text-xl">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment-form" className="py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
              Get Your Free Assessment
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Tell us about your situation and we&apos;ll analyze your case — completely free.
            </p>
          </div>
          <form className="mt-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country You Applied To</label>
              <select id="country" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500">
                <option value="">Select a country</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>New Zealand</option>
                <option>United Kingdom</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="when" className="block text-sm font-medium text-gray-700">When Were You Refused?</label>
              <select id="when" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500">
                <option value="">Select timeframe</option>
                <option>Last month</option>
                <option>1-3 months ago</option>
                <option>3-6 months ago</option>
                <option>6+ months ago</option>
              </select>
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Brief Reason for Refusal</label>
              <textarea id="reason" rows={4} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" placeholder="Tell us what happened — what reason was given for the refusal?" />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-teal-600 px-8 py-4 text-base font-bold text-white hover:bg-teal-700 transition-colors"
            >
              Get Your Free Assessment
            </button>
            <p className="text-xs text-gray-500 text-center">
              Your information is confidential. We&apos;ll contact you within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">
            Refused Visa FAQ
          </h2>
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't give up on your dream."
        subtitle="We've helped hundreds of refused applicants get approved. Let us help you too — it's completely free."
        buttonText="Get Your Free Assessment"
        buttonHref="#assessment-form"
      />
    </>
  );
}
