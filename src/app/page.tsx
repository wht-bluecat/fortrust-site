"use client";

import Link from "next/link";
import Image from "next/image";
import { StatBar } from "@/components/stat-bar";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABanner } from "@/components/cta-banner";
import { ScrollReveal } from "@/components/scroll-reveal";

const destinations = [
  {
    country: "Canada",
    href: "/destinations/canada",
    highlight: "PR Pathway Available",
    schools: "120+ partner schools",
    image: "/destinations/canada.jpg",
  },
  {
    country: "Australia",
    href: "/destinations/australia",
    highlight: "Post-Study Work Visa",
    schools: "80+ partner schools",
    image: "/destinations/australia.jpg",
  },
  {
    country: "New Zealand",
    href: "/destinations/new-zealand",
    highlight: "Work While Studying",
    schools: "40+ partner schools",
    image: "/destinations/new-zealand.jpg",
  },
  {
    country: "United Kingdom",
    href: "/destinations/uk",
    highlight: "Graduate Route Visa",
    schools: "60+ partner schools",
    image: "/destinations/uk.jpg",
  },
];

const journeySteps = [
  { step: 1, title: "Free Consultation", desc: "Meet a counselor. Discuss your goals, budget, and timeline." },
  { step: 2, title: "School Selection", desc: "We match you with the right school from 300+ partners." },
  { step: 3, title: "Agency Sign-Up", desc: "Formalize your application. No fees to you." },
  { step: 4, title: "Residency Planning", desc: "Map your post-study pathway (Canada PR, AU work rights, etc.)" },
  { step: 5, title: "College Applications", desc: "We handle submissions to your chosen schools." },
  { step: 6, title: "Tuition Payment", desc: "Guided payment process with school coordination." },
  { step: 7, title: "Visa Documentation", desc: "Our team prepares your complete visa package." },
  { step: 8, title: "Visa Submission", desc: "Lodge with confidence. 95% approval rate." },
];

const usps = [
  {
    title: "It's Completely Free",
    desc: "Our services cost you nothing. Partner schools pay us — so you get expert guidance at zero cost.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "95% Visa Approval Rate",
    desc: "One of the highest in the industry. Our documentation team knows exactly what embassies want.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Refused? We Can Help.",
    desc: "Got rejected by another agency or DIY? Our specialty is visa-refused reprocessing. We've turned hundreds of refusals into approvals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: "Permanent Residency Planning™",
    desc: "We don't just get you a student visa. We plan your path to permanent residency in Canada from Day 1.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "13+ Years in the Philippines",
    desc: "Since 2013, Fortrust has been helping Filipinos study abroad. 6 offices. 300+ partner schools. Real track record.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: "Is Fortrust really free?",
    answer:
      "Yes, 100% free. We're paid by our partner schools, not by you. You'll never be charged for our consultation, school selection, application processing, or visa guidance services.",
  },
  {
    question: "What's your visa approval rate?",
    answer:
      "95% — one of the highest in the Philippine study-abroad industry. Our documentation specialists know exactly what each embassy requires.",
  },
  {
    question: "What countries can I study in?",
    answer: "Canada, Australia, New Zealand, and the UK. We also have emerging programs in Europe.",
  },
  {
    question: "I got refused by another agency. Can you still help?",
    answer:
      "Absolutely. Visa-refused reprocessing is our specialty. We analyze why you were refused, fix the gaps, and resubmit. Our success rate with refused applicants is exceptionally high.",
  },
  {
    question: "What is Permanent Residency Planning™?",
    answer:
      "It's our trademarked service for Canada-bound students. We don't just plan your education — we plan your pathway to Canadian permanent residency from the start, including school choice, program selection, and post-graduation work permit strategy.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Typically 3-6 months from consultation to departure, depending on the destination and intake period. We recommend starting 6-12 months early for best school options.",
  },
  {
    question: "Do I need to visit your office?",
    answer: "No. We offer free online consultations via Setmore. But you're welcome to visit any of our 6 offices.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Variant 1: Grand */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 overflow-hidden">
        {/* Floating gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-teal-300/8 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left: Text */}
            <div>
              <p className="text-teal-300 text-sm font-semibold uppercase tracking-wider mb-4">
                The Philippines&apos; Most Trusted Education Agency
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Study Abroad.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  Change Your Life.
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-teal-100/90 leading-relaxed max-w-2xl">
                95% visa approval rate. 3,000+ students sent abroad since 2013. Free consultation —
                always.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
                >
                  Book Your Free Consultation
                </a>
                <Link
                  href="/seminars"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                >
                  Attend a Free Seminar
                </Link>
              </div>
              <p className="mt-4 text-sm text-teal-400">
                Every Tuesday &amp; Saturday &bull; Completely free &bull; No commitment
              </p>
            </div>

            {/* Right: Glassmorphism stats card (desktop only) */}
            <div className="hidden lg:block">
              <div className="relative ml-auto max-w-sm">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-sm font-semibold text-teal-200 uppercase tracking-wider mb-6">
                    Proven Track Record
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="font-heading text-2xl font-bold text-white">95%</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Visa Approval Rate</p>
                        <p className="text-teal-300 text-sm">Industry-leading success</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="font-heading text-xl font-bold text-white">3K+</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Students Sent Abroad</p>
                        <p className="text-teal-300 text-sm">Since 2013</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="font-heading text-xl font-bold text-white">300+</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Partner Schools</p>
                        <p className="text-teal-300 text-sm">Across 4 countries</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                        <span className="font-heading text-2xl font-bold text-white">$0</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Cost to You</p>
                        <p className="text-teal-300 text-sm">Always free consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative glow behind card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Bar */}
      <StatBar />

      {/* Destinations — Image-backed cards */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                Where do you want to study?
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Choose from 4 world-class destinations with 300+ partner schools
              </p>
            </div>
          </ScrollReveal>

          {/* Mobile: horizontal scroll, Desktop: grid */}
          <div className="mt-12 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-4 overflow-x-auto scroll-snap-x scrollbar-hide pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
              {destinations.map((dest, i) => (
                <Link
                  key={dest.country}
                  href={dest.href}
                  className="group relative flex-shrink-0 w-[280px] sm:w-auto rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[3/4] card-hover"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Country photo */}
                  <Image
                    src={dest.image}
                    alt={`Study in ${dest.country}`}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {dest.country}
                    </h3>
                    <p className="mt-1 text-sm text-teal-300 font-medium">{dest.highlight}</p>
                    <p className="mt-1 text-sm text-white/70">{dest.schools}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-white group-hover:text-teal-300 transition-colors">
                      Learn more
                      <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Journey */}
      <section className="py-20 bg-teal-50 bg-dot-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                Your 8-Step Journey
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                From first consultation to visa approval — we guide you every step
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((step, i) => (
                <div
                  key={step.step}
                  className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Step number */}
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold text-sm shadow-sm">
                    {step.step}
                  </span>
                  {/* Connecting line (hidden on mobile, visible on desktop between cards) */}
                  {step.step < 8 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-[2px] bg-teal-200" />
                  )}
                  <h3 className="mt-3 text-base font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Fortrust */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                Why Fortrust?
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                5 reasons Filipino students trust us with their future
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, i) => (
              <ScrollReveal key={usp.title} animation="fade-up" delay={i * 100}>
                <div className="flex gap-4 p-5 rounded-2xl hover:bg-teal-50/50 transition-colors duration-300">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-sm">
                    {usp.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{usp.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{usp.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free Seminar Banner */}
      <section className="relative bg-teal-800 py-14 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <ScrollReveal animation="slide-left">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Free Study Abroad Seminars
                </h2>
                <p className="mt-2 text-teal-200 text-lg">
                  Every Tuesday &amp; Saturday &bull; 1 hour &bull; No commitment required
                </p>
                <p className="mt-1 text-teal-300 text-sm">
                  Makati HQ &bull; Also available in Cebu &amp; Baguio
                </p>
              </div>
            </ScrollReveal>
            <div className="flex gap-4">
              <a
                href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 hover:bg-teal-50 hover:scale-[1.02] transition-all duration-200"
              >
                Reserve Your Spot
              </a>
              <Link
                href="/seminars"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Everything you need to know about studying abroad with Fortrust
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" className="mt-10">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              View all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
