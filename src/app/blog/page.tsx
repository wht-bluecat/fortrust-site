import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Study Abroad Blog Philippines | Tips, Costs & Guides",
  description:
    "Study abroad tips, cost breakdowns, visa guides, and success stories from Fortrust Education Services. Updated regularly with fresh content for Filipino students.",
};

const categories = [
  "All", "Success Stories", "Country Comparisons", "Visa Myths Busted",
  "Cost Breakdowns", "The Refused Pathway", "Behind Fortrust",
];

const placeholderPosts = [
  { title: "Canada vs Australia: Which is Better for Filipino Students in 2026?", category: "Country Comparisons", readTime: "8 min", excerpt: "A detailed comparison of costs, work rights, PR pathways, and lifestyle to help you choose the right destination." },
  { title: "The True Cost of Studying in Canada from the Philippines", category: "Cost Breakdowns", readTime: "10 min", excerpt: "We break down tuition, living expenses, visa fees, and hidden costs — with real numbers from our students." },
  { title: "5 Visa Myths That Stop Filipinos From Studying Abroad", category: "Visa Myths Busted", readTime: "6 min", excerpt: "Common misconceptions about student visas that hold people back — and the truth behind each one." },
  { title: "How Andrea Went From Manila to Canadore College", category: "Success Stories", readTime: "5 min", excerpt: "Andrea's journey from a BS Communications graduate to a Social Service Worker student in Canada." },
  { title: "Got Refused? Here's Exactly What to Do Next", category: "The Refused Pathway", readTime: "7 min", excerpt: "A step-by-step guide for students whose visa applications were rejected — and how to turn it around." },
  { title: "Why Our Seminars Are the #1 Thing We Recommend", category: "Behind Fortrust", readTime: "4 min", excerpt: "Every Tuesday and Saturday, we host free study abroad seminars. Here's why they're our most powerful tool." },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Tips, guides, and real stories to help you study abroad from the Philippines."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderPosts.map((post) => (
              <article key={post.title} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center">
                  <p className="text-sm text-teal-300">Featured image</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime} read</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-gray-500">
            Blog posts coming soon. Subscribe to be notified when new content is published.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
