import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PRPlanningClientSections } from "./client-sections";

export const metadata: Metadata = {
  title: "Permanent Residency Planning Canada | From Philippines",
  description:
    "Fortrust's Permanent Residency Planning™ maps your path to Canadian PR from Day 1. We select schools, programs, and provinces that maximize your immigration points.",
};

export default function PRPlanningPage() {
  return (
    <>
      <PageHero
        variant="angled"
        badge={{ label: "Trademarked Service — Exclusive to Fortrust", color: "teal" }}
        title={<>Permanent Residency <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Planning™</span></>}
        subtitle="We don't just get you a student visa. We plan your entire path to Canadian permanent residency — from school selection to PR application."
      >
        <div className="mt-8">
          <a
            href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-teal-800 shadow-xl hover:bg-teal-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
          >
            Book PR Planning Consultation
          </a>
        </div>
      </PageHero>

      <PRPlanningClientSections />

      <CTABanner
        title="Plan your path to Canadian PR"
        subtitle="Book a free PR Planning consultation. We'll assess your profile and map out your best pathway to permanent residency."
        buttonText="Book PR Planning Consultation"
      />
    </>
  );
}
