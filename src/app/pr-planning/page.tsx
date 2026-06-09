import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PRPlanningClientSections } from "./client-sections";

export const metadata: Metadata = {
  title: "Permanent Residency Planning Canada | From Philippines",
  description:
    "Fortrust's Permanent Residency Planning™ maps your path to Canadian PR from Day 1. We select schools, programs, and provinces that maximize your immigration points.",
};

const SETMORE = process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com";

export default function PRPlanningPage() {
  return (
    <>
      <PageHero
        variant="angled"
        badge={{ label: "Trademarked Service — Exclusive to Fortrust", color: "brand" }}
        title={<>Permanent Residency <span className="text-brand-400">Planning™</span></>}
        subtitle="We don't just get you a student visa. We plan your entire path to Canadian permanent residency — from school selection to PR application."
      >
        <div className="mt-8">
          <a
            href={SETMORE}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-[0_12px_30px_-8px_rgba(242,107,33,0.55)] hover:bg-brand-600 hover:scale-[1.02] transition-all duration-200"
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
