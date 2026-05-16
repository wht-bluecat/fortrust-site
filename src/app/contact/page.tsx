import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactClientSections } from "./client-sections";

export const metadata: Metadata = {
  title: "Contact Fortrust | 6 Offices Across Philippines | Free Consultation",
  description:
    "Contact Fortrust Education Services. 6 offices across the Philippines — Makati, Cebu, Baguio, Davao, CDO, Pasig. Call 0917 822 4448 or book a free consultation.",
};

const offices = [
  { name: "Makati (HQ)", address: "5th Floor, Liberty Building, A. Arnaiz Avenue, Makati City", type: "Headquarters" },
  { name: "Cebu", address: "Cebu IT Park, Cebu City", type: "Full Office" },
  { name: "Baguio", address: "Baguio City", type: "Full Office" },
  { name: "Davao", address: "Davao City", type: "Satellite" },
  { name: "Cagayan de Oro", address: "CDO", type: "Satellite" },
  { name: "Ortigas / Pasig", address: "Pasig City", type: "Satellite" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="6 offices across the Philippines. Free consultation — in person or online."
      />

      <ContactClientSections offices={offices} />
    </>
  );
}
