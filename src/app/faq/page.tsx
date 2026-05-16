import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABanner } from "@/components/cta-banner";
import { FAQPageJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "FAQ | Study Abroad Questions Answered",
  description:
    "Frequently asked questions about studying abroad with Fortrust. Learn about costs, visa requirements, our services, and more.",
};

const categories = [
  {
    title: "General",
    items: [
      { question: "Is Fortrust really free?", answer: "Yes, 100% free. We're paid by our partner schools, not by you. You'll never be charged for our consultation, school selection, application processing, or visa guidance services." },
      { question: "What's your visa approval rate?", answer: "95% — one of the highest in the Philippine study-abroad industry. Our documentation specialists know exactly what each embassy requires." },
      { question: "What countries can I study in?", answer: "Canada, Australia, New Zealand, and the UK. We also have emerging programs in Europe, including Spain." },
      { question: "How long does the process take?", answer: "Typically 3-6 months from consultation to departure, depending on the destination and intake period. We recommend starting 6-12 months early for best school options." },
    ],
  },
  {
    title: "By Country",
    items: [
      { question: "Which country is cheapest?", answer: "New Zealand generally has the lowest combined tuition + living costs. Canada offers the best long-term value when you factor in work rights and PR pathways." },
      { question: "Which country has the best work rights?", answer: "Australia allows 48hrs/fortnight while studying. Canada offers a 3-year post-graduation work permit. The UK offers 2 years via the Graduate Route. Each has strong work opportunities." },
      { question: "Can I get permanent residency?", answer: "Canada has the clearest PR pathway for international students. Australia and NZ also have skilled migration pathways. Our Permanent Residency Planning™ service is specifically designed for Canada-bound students." },
    ],
  },
  {
    title: "Visa Process",
    items: [
      { question: "What documents do I need?", answer: "It varies by country, but typically: valid passport, acceptance letter, proof of funds, academic transcripts, English proficiency test results, and sometimes medical exams. Fortrust provides a complete checklist for your specific destination." },
      { question: "What if I get refused?", answer: "Visa-refused reprocessing is our specialty. We analyze why you were refused, fix the gaps, and resubmit. Our success rate with refused applicants is exceptionally high. Visit our Visa Refused page for more details." },
      { question: "Do I need IELTS?", answer: "Most destinations require an English proficiency test (IELTS, TOEFL, PTE, or Duolingo). However, we partner with schools that accept alternative tests or offer pathway programs if your score isn't quite there yet." },
    ],
  },
  {
    title: "About Fortrust",
    items: [
      { question: "How long have you been operating?", answer: "Since 2013 — over 13 years in the Philippines. We've helped 3,000+ students study abroad." },
      { question: "Where are your offices?", answer: "We have 6 offices: Makati (HQ), Cebu IT Park, Baguio, Davao, Cagayan de Oro, and Ortigas/Pasig." },
      { question: "Do I need to visit your office?", answer: "No. We offer free online consultations via Setmore. But you're welcome to visit any of our 6 offices for in-person support." },
      { question: "What is Permanent Residency Planning™?", answer: "It's our trademarked service for Canada-bound students. We don't just plan your education — we plan your pathway to Canadian permanent residency from the start." },
    ],
  },
];

export default function FAQPage() {
  const allItems = categories.flatMap((cat) => cat.items);
  return (
    <>
      <FAQPageJsonLd items={allItems} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about studying abroad with Fortrust."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-heading text-2xl font-bold text-gray-900">{cat.title}</h2>
              <div className="mt-6">
                <FAQAccordion items={cat.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        subtitle="Book a free consultation — our counselors will answer everything in person or online."
      />
    </>
  );
}
