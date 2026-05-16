import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { FAQAccordion } from "@/components/faq-accordion";
import { StatBar } from "@/components/stat-bar";
import { RefusedClientSections } from "./client-sections";

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
      {/* Hero — Variant 2: Angled */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 hero-angled overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 pb-24 sm:pb-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-red-500/20 px-4 py-1.5 text-sm font-medium text-red-200 ring-1 ring-red-400/30 backdrop-blur-sm">
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              Visa Refused?
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
              You&apos;re not alone. And you&apos;re{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                not out of options.
              </span>
            </h1>
            <p className="mt-6 text-lg text-teal-100/90 leading-relaxed">
              Visa-refused reprocessing is our specialty. We&apos;ve turned hundreds of refusals into
              approvals with our 95% success rate. Get a free assessment today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#assessment-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
              >
                Get Your Free Assessment
              </a>
              <a
                href="tel:+639178224448"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Call Us Now: 0917 822 4448
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatBar />

      {/* Common Refusal Reasons */}
      <RefusedClientSections
        refusalReasons={refusalReasons}
        reprocessSteps={reprocessSteps}
      />

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
