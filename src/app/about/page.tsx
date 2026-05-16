import type { Metadata } from "next";
import { StatBar } from "@/components/stat-bar";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { AboutClientSections } from "./client-sections";

export const metadata: Metadata = {
  title: "About Fortrust | 13+ Years Helping Filipinos Study Abroad",
  description:
    "Founded in 2013, Fortrust Education Services has helped 3,000+ Filipino students study abroad with a 95% visa approval rate. 6 offices across the Philippines.",
};

const milestones = [
  { year: "2013", event: "Fortrust Philippines established in Makati City" },
  { year: "2015", event: "Opened Cebu IT Park branch" },
  { year: "2017", event: "1,000th visa granted — Baguio office opens" },
  { year: "2019", event: "Launched Permanent Residency Planning™ for Canada" },
  { year: "2021", event: "2,000+ visas granted — Davao & CDO satellites open" },
  { year: "2023", event: "Ortigas/Pasig office opens — now 6 locations nationwide" },
  { year: "2025", event: "3,000+ visas granted — 95% approval rate maintained" },
];

const offices = [
  { name: "Makati (HQ)", address: "5th Floor, Liberty Building, A. Arnaiz Avenue, Makati City", type: "Headquarters" },
  { name: "Cebu", address: "Cebu IT Park, Cebu City", type: "Full Office" },
  { name: "Baguio", address: "Baguio City", type: "Full Office" },
  { name: "Davao", address: "Davao City", type: "Satellite" },
  { name: "Cagayan de Oro", address: "CDO", type: "Satellite" },
  { name: "Ortigas / Pasig", address: "Pasig City", type: "Satellite" },
];

const setApart = [
  "100% free services — always",
  "95% visa approval rate",
  "Visa-refused reprocessing specialty",
  "Permanent Residency Planning™ for Canada",
  "300+ partner schools across 4+ countries",
  "6 offices nationwide for accessibility",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={<>13+ Years of Helping Filipinos <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Study Abroad</span></>}
        subtitle="Since 2013, Fortrust Education Services has been the Philippines' most trusted study abroad agency. 3,000+ visas granted. 6 offices nationwide."
      />

      <StatBar />

      <AboutClientSections
        milestones={milestones}
        offices={offices}
        setApart={setApart}
      />

      <CTABanner />
    </>
  );
}
