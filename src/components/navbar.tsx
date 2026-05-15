"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/destinations",
    label: "Destinations",
    children: [
      { href: "/destinations/canada", label: "🇨🇦 Study in Canada" },
      { href: "/destinations/australia", label: "🇦🇺 Study in Australia" },
      { href: "/destinations/new-zealand", label: "🇳🇿 Study in New Zealand" },
      { href: "/destinations/uk", label: "🇬🇧 Study in the UK" },
    ],
  },
  { href: "/refused", label: "Visa Refused?" },
  { href: "/pr-planning", label: "PR Planning™" },
  { href: "/seminars", label: "Free Seminars" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-teal-700 tracking-tight">
              Fortrust
            </span>
            <span className="hidden sm:inline text-xs text-gray-500 font-medium uppercase tracking-wider">
              Education Services
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDestOpen(true)}
                  onMouseLeave={() => setDestOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors rounded-md hover:bg-teal-50"
                  >
                    {link.label}
                  </Link>
                  {destOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors rounded-md hover:bg-teal-50"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Book Free Consultation
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-teal-700"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-teal-700 hover:bg-teal-50 rounded-md"
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-8 pr-3 py-2 text-sm text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-md"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3 px-3">
              <a
                href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
