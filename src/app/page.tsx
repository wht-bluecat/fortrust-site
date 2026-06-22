"use client";

import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABanner } from "@/components/cta-banner";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HomeHero } from "@/components/home-hero";
import { PartnerMarquee } from "@/components/partner-marquee";
// import { SuccessCarousel } from "@/components/success-carousel"; // disabled until real student stories exist

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
  {
    step: 1,
    title: "Free Consultation",
    desc: "Meet a counselor. Discuss your goals, budget, and timeline.",
    accent: "orange" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5h8M8 14h5m-9 5.5l3.2-2.1A2 2 0 019.3 17H17a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v11.5z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "School Selection",
    desc: "We match you with the right school from 300+ partners.",
    accent: "navy" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L2.5 8.5 12 13l9.5-4.5L12 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 10.5V15c0 1.1 2.5 2.2 5.5 2.2s5.5-1.1 5.5-2.2v-4.5M20.5 9v5" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Agency Sign-Up",
    desc: "Formalize your application. No fees to you.",
    accent: "orange" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.5l3 3L9 18l-4 1 1-4 10.5-10.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5l3 3" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Residency Planning",
    desc: "Map your post-study pathway (Canada PR, AU work rights, etc.)",
    accent: "navy" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l-5.5 2V6L9 4m0 15l6 2m-6-2V4m6 17l5.5-2V4L15 6m0 15V6m0 0L9 4" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "College Applications",
    desc: "We handle submissions to your chosen schools.",
    accent: "orange" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h7l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4v5.5H19M9 13.5h6M9 16.5h6" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Tuition Payment",
    desc: "Guided payment process with school coordination.",
    accent: "navy" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5h18M6.5 14.5h3" />
      </svg>
    ),
  },
  {
    step: 7,
    title: "Visa Documentation",
    desc: "Our team prepares your complete visa package.",
    accent: "orange" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a1 1 0 011 1v15a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3.5h5v2h-5zM9 13l2 2 3.5-3.5" />
      </svg>
    ),
  },
  {
    step: 8,
    title: "Visa Submission",
    desc: "Lodge with confidence. 95% approval rate.",
    accent: "navy" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 3L10 14M21 3l-7 18-4-9-9-4 20-5z" />
      </svg>
    ),
  },
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
      {/* Hero — animated landing (globe + integrated stats) */}
      <HomeHero />

      {/* Destinations — Image-backed cards */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
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
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                      {dest.country}
                    </h3>
                    <p className="mt-1 text-sm text-brand-300 font-semibold">{dest.highlight}</p>
                    <p className="mt-1 text-sm text-white/70">{dest.schools}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-white group-hover:text-brand-400 transition-colors">
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

      {/* Partner Schools — trust marquee */}
      <PartnerMarquee />

      {/* 8-Step Journey */}
      <section className="py-20 bg-navy-50 bg-dot-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
                Your 8-Step Journey
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                From first consultation to visa approval, we guide you every step
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
              {journeySteps.map((step) => {
                const isOrange = step.accent === "orange";
                return (
                  <div
                    key={step.step}
                    className="reveal-child group relative rounded-2xl border border-gray-100 bg-white p-6 pt-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-20px_rgba(22,38,89,0.45)]"
                  >
                    {/* Step number chip (top-right) */}
                    <span
                      className={`absolute -top-3 right-5 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold text-white shadow-md ${
                        isOrange
                          ? "bg-gradient-to-br from-brand-500 to-brand-600"
                          : "bg-gradient-to-br from-navy-700 to-navy-900"
                      }`}
                    >
                      {step.step}
                    </span>

                    {/* Animated dashed connector to the next card (desktop only) */}
                    {step.step % 4 !== 0 && step.step < 8 && (
                      <svg
                        className="pointer-events-none absolute top-9 -right-6 hidden h-3 w-12 lg:block"
                        viewBox="0 0 48 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          className="journey-connector"
                          d="M2 6h44"
                          stroke={isOrange ? "var(--brand-300)" : "var(--navy-300)"}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M40 2l5 4-5 4"
                          stroke={isOrange ? "var(--brand-400)" : "var(--navy-400)"}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    {/* Icon tile */}
                    <div
                      className={`journey-icon flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm ${
                        isOrange
                          ? "bg-gradient-to-br from-brand-400 to-brand-600"
                          : "bg-gradient-to-br from-navy-600 to-navy-900"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <h3 className="mt-4 text-base font-bold text-navy-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Fortrust */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
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
                <div className="group flex gap-4 p-5 rounded-2xl border border-transparent hover:border-navy-100 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(22,38,89,0.35)] transition-all duration-300">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {usp.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900">{usp.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{usp.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories carousel — disabled until real student stories are provided.
          Re-enable by restoring the import and the <SuccessCarousel /> render below. */}
      {/* <SuccessCarousel /> */}

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900">
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
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
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
