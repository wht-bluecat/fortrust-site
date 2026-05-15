import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Success Stories | Filipino Students Who Studied Abroad",
  description:
    "Read real success stories from Fortrust students who studied abroad in Canada, Australia, NZ & UK. 3,000+ visas granted with a 95% approval rate.",
};

const stories = [
  { name: "Andrea", from: "Manila", destination: "Canada", school: "Canadore College", program: "Social Service Worker", quote: "Fortrust made everything easy. From school selection to visa documentation, they guided me every step of the way." },
  { name: "Mark", from: "Cebu", destination: "Australia", school: "Academia International", program: "Business Management", quote: "I was refused before by another agency. Fortrust fixed my application and I got approved in just 6 weeks." },
  { name: "Sarah", from: "Baguio", destination: "Canada", school: "Centennial College", program: "Software Engineering", quote: "The PR Planning service was the reason I chose Fortrust. They didn't just plan my education — they planned my future in Canada." },
  { name: "Miguel", from: "Davao", destination: "New Zealand", school: "Aspire2 International", program: "Applied Computing", quote: "Fortrust's free seminars changed my life. I attended one on a Saturday and within 3 months I was studying in Auckland." },
  { name: "Maria", from: "Makati", destination: "UK", school: "University of London", program: "MBA", quote: "I thought studying in the UK was out of reach. Fortrust showed me it was possible and made it happen." },
  { name: "James", from: "Pasig", destination: "Canada", school: "Seneca College", program: "Computer Programming", quote: "The 8-step process was smooth and transparent. I always knew exactly where I was in the journey." },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Success Stories
          </h1>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl">
            Real students. Real journeys. 3,000+ visas granted and counting.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.name} className="rounded-2xl border border-gray-200 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-lg">{story.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{story.name}</p>
                    <p className="text-xs text-gray-500">From {story.from}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                    {story.destination}
                  </span>
                </div>
                <p className="text-sm text-gray-600 italic flex-1">&ldquo;{story.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{story.school}</p>
                  <p className="text-xs text-gray-400">{story.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Write your own success story"
        subtitle="Join 3,000+ Filipino students who studied abroad with Fortrust. Start with a free consultation."
      />
    </>
  );
}
