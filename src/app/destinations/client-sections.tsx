"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

type Destination = {
  country: string;
  href: string;
  image: string;
  tagline: string;
  highlights: string[];
  schools: string;
  tuition: string;
};

export function DestinationsClientSections({ destinations }: { destinations: Destination[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {destinations.map((dest, i) => (
          <ScrollReveal key={dest.country} animation="fade-up" delay={i * 100}>
            <Link
              href={dest.href}
              className="group block rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative w-full lg:w-80 h-48 lg:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`Study in ${dest.country}`}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-l lg:from-white/10 lg:to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                      Study in {dest.country}
                    </h2>
                    <p className="mt-2 text-gray-500">{dest.tagline}</p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dest.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-teal-50 flex items-center justify-center">
                            <svg className="h-2.5 w-2.5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-6 lg:gap-3 lg:text-right shrink-0">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Schools</p>
                      <p className="text-xl font-bold text-teal-700">{dest.schools}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Tuition</p>
                      <p className="text-sm font-medium text-gray-700">{dest.tuition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
