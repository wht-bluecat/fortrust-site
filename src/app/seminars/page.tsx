import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { SeminarsClientSections } from "./client-sections";

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
      <PageHero
        variant="angled"
        badge={{ label: "100% Free • No Commitment", color: "teal" }}
        title={<>Free Study Abroad <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Seminars</span></>}
        subtitle="Every Tuesday and Saturday, 1 hour. Learn everything you need to know about studying abroad — costs, requirements, visa process, and pathways to permanent residency."
      >
        <div className="mt-8">
          <a
            href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
          >
            Reserve Your Spot
          </a>
        </div>
      </PageHero>

      <SeminarsClientSections whatYoullLearn={whatYoullLearn} />

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
