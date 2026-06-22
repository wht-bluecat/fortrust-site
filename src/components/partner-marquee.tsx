"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { topPartners } from "@/data/partners";

export function PartnerMarquee() {
  // Duplicate the list so the -50% translateX loop is seamless.
  const row = [...topPartners, ...topPartners];

  return (
    <section className="border-t border-navy-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-navy-500">
            Trusted by 300+ partner schools worldwide
          </p>
        </ScrollReveal>
      </div>

      <div className="marquee-track relative mt-8 overflow-hidden">
        {/* Edge fades so chips dissolve at the margins */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-4">
          {row.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-16 shrink-0 items-center gap-3 rounded-xl border border-navy-100 bg-white px-6 shadow-sm"
            >
              {partner.logo && (
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={36}
                  height={36}
                  className="h-8 w-8 shrink-0 rounded-md object-contain"
                />
              )}
              <span className="whitespace-nowrap font-heading text-base font-bold text-navy-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
