import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { DestinationsClientSections } from "./client-sections";

export const metadata: Metadata = {
  title: "Study Abroad Destinations | Canada, Australia, NZ, UK",
  description:
    "Choose from 4 world-class destinations with 300+ partner schools. Study in Canada, Australia, New Zealand, or the UK with Fortrust — 95% visa approval rate.",
};

const destinations = [
  {
    country: "Canada", href: "/destinations/canada",
    image: "/destinations/canada.jpg",
    tagline: "Work, study, and build your path to permanent residency",
    highlights: ["Post-Graduation Work Permit (PGWP)", "Permanent Residency Planning™", "Affordable tuition vs. US/UK", "High quality of life"],
    schools: "120+", tuition: "Starting at ₱400,000/year",
  },
  {
    country: "Australia", href: "/destinations/australia",
    image: "/destinations/australia.jpg",
    tagline: "World-class education with generous work rights",
    highlights: ["Post-Study Work Visa (2-4 years)", "Work 48hrs/fortnight while studying", "Regional opportunities", "Strong alumni network"],
    schools: "80+", tuition: "Starting at ₱500,000/year",
  },
  {
    country: "New Zealand", href: "/destinations/new-zealand",
    image: "/destinations/new-zealand.jpg",
    tagline: "Affordable, safe, and welcoming for international students",
    highlights: ["Work while studying (20hrs/week)", "Post-Study Work Visa", "Lower cost of living", "Pathway to residency"],
    schools: "40+", tuition: "Starting at ₱350,000/year",
  },
  {
    country: "United Kingdom", href: "/destinations/uk",
    image: "/destinations/uk.jpg",
    tagline: "Prestigious education with the Graduate Route visa",
    highlights: ["Graduate Route Visa (2 years)", "1-year Master's programs", "World-renowned universities", "Rich cultural experience"],
    schools: "60+", tuition: "Starting at ₱600,000/year",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title={<>Where do you want to <span className="text-brand-400">study?</span></>}
        subtitle="4 world-class destinations. 300+ partner schools. One trusted agency to guide you."
      />

      <DestinationsClientSections destinations={destinations} />

      <CTABanner
        title="Not sure which country is right for you?"
        subtitle="Book a free consultation and we'll help you find the perfect destination based on your goals, budget, and timeline."
      />
    </>
  );
}
