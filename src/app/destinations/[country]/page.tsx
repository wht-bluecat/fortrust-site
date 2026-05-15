import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/cta-banner";
import { StatBar } from "@/components/stat-bar";
import { FAQAccordion } from "@/components/faq-accordion";

const countryData: Record<string, {
  name: string; flag: string; slug: string;
  tagline: string; description: string;
  whyStudy: string[];
  costs: { item: string; range: string }[];
  workRights: string;
  prPathway: string | null;
  faq: { question: string; answer: string }[];
}> = {
  canada: {
    name: "Canada", flag: "🇨🇦", slug: "canada",
    tagline: "Work, study, and build your path to permanent residency",
    description: "Canada is the #1 destination for Filipino students who want to study abroad AND build a future. With the Post-Graduation Work Permit (PGWP) and clear pathways to permanent residency, Canada offers more than education — it offers a new life.",
    whyStudy: [
      "Post-Graduation Work Permit (PGWP) — work for up to 3 years after graduating",
      "Clear pathway to Permanent Residency (PR) through Express Entry and PNP",
      "Affordable tuition compared to the US and UK",
      "High quality of life and multicultural communities",
      "Strong Filipino community across major cities",
      "Spouse/common-law partner can get an open work permit",
    ],
    costs: [
      { item: "Tuition (per year)", range: "₱400,000 – ₱900,000" },
      { item: "Living expenses (per year)", range: "₱500,000 – ₱800,000" },
      { item: "Student visa fee", range: "~₱8,500 (CAD 150)" },
      { item: "Biometrics", range: "~₱4,800 (CAD 85)" },
      { item: "Total first year (estimate)", range: "₱900,000 – ₱1,700,000" },
    ],
    workRights: "Work 24 hours/week off-campus during studies. Full-time during scheduled breaks. PGWP for 1-3 years after graduation.",
    prPathway: "Fortrust's Permanent Residency Planning™ maps your PR pathway from Day 1. We select schools, programs, and provinces that maximize your Express Entry or PNP points.",
    faq: [
      { question: "How much money do I need to show?", answer: "You'll need to prove you have enough funds for tuition + living expenses (approx. CAD 20,635/year for living costs, plus tuition). Fortrust helps you structure your financial documents correctly." },
      { question: "Can I work while studying in Canada?", answer: "Yes! International students can work up to 24 hours per week off-campus during academic sessions and full-time during scheduled breaks." },
      { question: "What is PGWP?", answer: "The Post-Graduation Work Permit allows you to work in Canada for 1-3 years after graduating from a Designated Learning Institution (DLI). It's a key step toward permanent residency." },
      { question: "Can my spouse come with me?", answer: "Yes. If you're studying at a graduate program or a DLI, your spouse/common-law partner may be eligible for an open work permit." },
    ],
  },
  australia: {
    name: "Australia", flag: "🇦🇺", slug: "australia",
    tagline: "World-class education with generous post-study work rights",
    description: "Australia offers some of the world's best universities, a welcoming culture, and generous work rights for international students. With post-study work visas of up to 4 years, Australia is a top choice for Filipinos seeking quality education and career opportunities.",
    whyStudy: [
      "Post-Study Work Visa — 2 to 4 years depending on qualification",
      "Work 48 hours per fortnight during studies",
      "World-ranked universities (8 in global top 100)",
      "Regional study opportunities with extended work rights",
      "Strong economy with high graduate employment rates",
      "Beautiful climate and lifestyle",
    ],
    costs: [
      { item: "Tuition (per year)", range: "₱500,000 – ₱1,200,000" },
      { item: "Living expenses (per year)", range: "₱600,000 – ₱900,000" },
      { item: "Student visa fee (Subclass 500)", range: "~₱35,000 (AUD 710)" },
      { item: "OSHC (health insurance/year)", range: "~₱25,000 – ₱40,000" },
      { item: "Total first year (estimate)", range: "₱1,100,000 – ₱2,100,000" },
    ],
    workRights: "Work 48 hours per fortnight during academic sessions. Unlimited during scheduled breaks. Post-study work visa for 2-4 years.",
    prPathway: null,
    faq: [
      { question: "Is Australia expensive for Filipino students?", answer: "It's pricier than Canada or NZ, but the generous work rights (48hrs/fortnight) help offset costs. Many students earn enough to cover living expenses while studying." },
      { question: "What's the post-study work visa?", answer: "The Temporary Graduate Visa (subclass 485) allows you to work in Australia for 2-4 years after graduating, depending on your qualification level and study location." },
      { question: "Do I need IELTS for Australia?", answer: "Most universities require IELTS 6.0-6.5. However, Fortrust partners with schools that accept alternative English tests or have pathway programs for students who need to improve their English." },
    ],
  },
  "new-zealand": {
    name: "New Zealand", flag: "🇳🇿", slug: "new-zealand",
    tagline: "Affordable, safe, and welcoming — with pathways to residency",
    description: "New Zealand combines high-quality education with a relaxed lifestyle and clear immigration pathways. With lower costs than Australia and the UK, it's an excellent choice for Filipino students looking for value and opportunity.",
    whyStudy: [
      "Work 20 hours/week while studying",
      "Post-Study Work Visa (1-3 years)",
      "Lower cost of living than Australia/UK",
      "Safe, welcoming, and English-speaking",
      "Pathway to residency through skilled work",
      "Beautiful natural environment",
    ],
    costs: [
      { item: "Tuition (per year)", range: "₱350,000 – ₱800,000" },
      { item: "Living expenses (per year)", range: "₱400,000 – ₱650,000" },
      { item: "Student visa fee", range: "~₱17,000 (NZD 375)" },
      { item: "Total first year (estimate)", range: "₱750,000 – ₱1,450,000" },
    ],
    workRights: "Work 20 hours/week during studies. Full-time during holidays. Post-study work visa for 1-3 years.",
    prPathway: null,
    faq: [
      { question: "Is New Zealand cheaper than Australia?", answer: "Generally yes — both tuition and living costs are lower in NZ. It's one of the most affordable English-speaking study destinations." },
      { question: "Can I get residency after studying?", answer: "Yes. After your post-study work visa, you can apply for residency through the Skilled Migrant Category if you have a job offer in a skilled occupation." },
    ],
  },
  uk: {
    name: "United Kingdom", flag: "🇬🇧", slug: "uk",
    tagline: "Prestigious education with the Graduate Route visa",
    description: "The UK is home to some of the world's most prestigious universities. With 1-year Master's programs and the Graduate Route visa allowing 2 years of post-study work, the UK offers a fast path to a world-class qualification.",
    whyStudy: [
      "Graduate Route Visa — 2 years post-study work",
      "1-year Master's programs (save time and money)",
      "World-renowned universities (4 of global top 10)",
      "Rich cultural experience",
      "Strong Filipino community in London and major cities",
      "Globally recognized qualifications",
    ],
    costs: [
      { item: "Tuition (per year)", range: "₱600,000 – ₱1,500,000" },
      { item: "Living expenses (per year)", range: "₱600,000 – ₱1,000,000" },
      { item: "Student visa fee", range: "~₱22,000 (£363)" },
      { item: "Immigration Health Surcharge", range: "~₱40,000/year (£470)" },
      { item: "Total first year (estimate)", range: "₱1,200,000 – ₱2,500,000" },
    ],
    workRights: "Work 20 hours/week during term. Full-time during holidays. Graduate Route visa for 2 years (3 for PhD) after graduation.",
    prPathway: null,
    faq: [
      { question: "Is the UK worth the cost?", answer: "For Master's degrees, absolutely — UK Master's programs are only 1 year vs 2 years elsewhere, so total cost is often comparable. Plus, the Graduate Route visa gives you 2 years to work and gain experience." },
      { question: "What's the Graduate Route visa?", answer: "It allows you to stay and work in the UK for 2 years after graduating (3 years for PhD). No sponsorship needed — you can work in any job." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const data = countryData[country];
  if (!data) return {};
  return {
    title: `Study in ${data.name} from Philippines 2026 | Cost, Requirements & Pathway`,
    description: `Study in ${data.name} from the Philippines with Fortrust. ${data.tagline}. 95% visa approval rate. Free consultation.`,
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = countryData[country];
  if (!data) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-5xl">{data.flag}</span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
              Study in <span className="text-teal-300">{data.name}</span>
            </h1>
            <p className="mt-4 text-lg text-teal-100">{data.tagline}</p>
            <div className="mt-8">
              <a
                href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 transition-all"
              >
                Book Free {data.name} Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatBar />

      {/* Why Study Here */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">Why Study in {data.name}?</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{data.description}</p>
              <ul className="mt-6 space-y-3">
                {data.whyStudy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {/* Cost Table */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-teal-50 px-6 py-4">
                  <h3 className="font-bold text-gray-900">Cost Breakdown</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {data.costs.map((cost) => (
                    <div key={cost.item} className="flex justify-between px-6 py-3">
                      <span className="text-sm text-gray-600">{cost.item}</span>
                      <span className="text-sm font-medium text-gray-900">{cost.range}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Work Rights */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900">Work Rights</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{data.workRights}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR Pathway (Canada only) */}
      {data.prPathway && (
        <section className="py-16 bg-teal-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white p-8 lg:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">EXCLUSIVE</span>
                <h2 className="font-heading text-2xl font-bold text-gray-900">Permanent Residency Planning™</h2>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-3xl">{data.prPathway}</p>
              <div className="mt-6">
                <Link
                  href="/pr-planning"
                  className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Learn more about PR Planning
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">
            Studying in {data.name} — FAQ
          </h2>
          <div className="mt-10">
            <FAQAccordion items={data.faq} />
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to study in ${data.name}?`}
        subtitle={`Book a free consultation with a ${data.name} specialist. We'll help you choose the right school, program, and pathway.`}
        buttonText={`Book Free ${data.name} Consultation`}
      />
    </>
  );
}
