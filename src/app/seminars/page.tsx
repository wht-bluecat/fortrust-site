import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { FAQAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Free Study Abroad Seminars Manila | Every Tue & Sat",
  description:
    "Attend a free 1-hour study abroad seminar every Tuesday and Saturday at Fortrust Makati. Learn about studying in Canada, Australia, NZ & UK. No commitment required.",
};

const whatYoullLearn = [
  "How to study abroad from the Philippines — step by step",
  "Cost breakdowns for Canada, Australia, NZ & UK",
  "Visa requirements and how to maximize your approval chances",
  "Work rights and post-study pathways (including Canada PR)",
  "How Fortrust's free services work — no hidden fees, ever",
];

const faqItems = [
  {
    question: "Is the seminar really free?",
    answer: "Yes, 100% free. No registration fee, no hidden charges, no commitment required. Just show up (or join online) and learn.",
  },
  {
    question: "Do I need to prepare anything?",
    answer: "No preparation needed. Just bring your questions! If you have specific documents (transcripts, passport), you can bring them for a quick assessment after the seminar.",
  },
  {
    question: "Can I attend online?",
    answer: "Yes! We offer both in-person (Makati HQ) and online options. Book via Setmore and select your preferred format.",
  },
  {
    question: "Will I be pressured to sign up?",
    answer: "Absolutely not. The seminar is purely educational. If you want to proceed, you can book a free 1-on-1 consultation afterward — but there's zero pressure.",
  },
];

export default function SeminarsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-200 ring-1 ring-teal-400/30">
              100% Free &bull; No Commitment
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
              Free Study Abroad{" "}
              <span className="text-teal-300">Seminars</span>
            </h1>
            <p className="mt-6 text-lg text-teal-100 leading-relaxed">
              Every Tuesday and Saturday, 1 hour. Learn everything you need to know about studying
              abroad — costs, requirements, visa process, and pathways to permanent residency.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 transition-all"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">Schedule</h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-5">
                  <div className="text-center shrink-0">
                    <p className="text-2xl font-bold text-teal-700">TUE</p>
                    <p className="text-xs text-gray-500">Weekly</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Tuesday Seminar</p>
                    <p className="text-sm text-gray-600">1 hour &bull; In-person &amp; Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-5">
                  <div className="text-center shrink-0">
                    <p className="text-2xl font-bold text-teal-700">SAT</p>
                    <p className="text-xs text-gray-500">Weekly</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Saturday Seminar</p>
                    <p className="text-sm text-gray-600">1 hour &bull; In-person &amp; Online</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Location: Fortrust Makati HQ, 5th Floor, Liberty Building, A. Arnaiz Avenue
              </p>
              <p className="text-sm text-gray-500">
                Also available in Cebu &amp; Baguio — contact us for local schedules.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">What You&apos;ll Learn</h2>
              <ul className="mt-8 space-y-4">
                {whatYoullLearn.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seminar Photos Placeholder */}
      <section className="py-16 bg-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900">Past Seminars</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-lg bg-teal-100 flex items-center justify-center">
                <p className="text-sm text-teal-400">Photo placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">Seminar FAQ</h2>
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to attend?"
        subtitle="Reserve your spot at the next free seminar. No commitment, no fees — just useful information."
        buttonText="Reserve Your Spot"
      />
    </>
  );
}
