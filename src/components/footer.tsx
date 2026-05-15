import Link from "next/link";

const offices = [
  { name: "Makati (HQ)", address: "5th Floor, Liberty Building, A. Arnaiz Avenue, Makati City" },
  { name: "Cebu", address: "Cebu IT Park, Cebu City" },
  { name: "Baguio", address: "Baguio City" },
  { name: "Davao", address: "Davao City" },
  { name: "Cagayan de Oro", address: "CDO" },
  { name: "Ortigas / Pasig", address: "Pasig City" },
];

const destinations = [
  { href: "/destinations/canada", label: "Study in Canada" },
  { href: "/destinations/australia", label: "Study in Australia" },
  { href: "/destinations/new-zealand", label: "Study in New Zealand" },
  { href: "/destinations/uk", label: "Study in the UK" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/seminars", label: "Free Seminars" },
  { href: "/refused", label: "Visa Refused?" },
  { href: "/pr-planning", label: "PR Planning™" },
];

export function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-white">Fortrust</span>
              <span className="block text-xs text-teal-400 font-medium uppercase tracking-wider mt-0.5">
                Education Services
              </span>
            </Link>
            <p className="mt-4 text-sm text-teal-300 leading-relaxed">
              The Philippines&apos; most trusted education agency. Free consultation, 95% visa
              approval rate, 3,000+ students sent abroad since 2013.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://facebook.com/fortrusteducation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-teal-400 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/fortrustph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-teal-400 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/fortrustph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-teal-400 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@fortrustph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-teal-400 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Destinations</h3>
            <ul className="mt-4 space-y-2.5">
              {destinations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-teal-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-teal-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-teal-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-teal-300">
                <span className="block font-medium text-white">Phone</span>
                <a href="tel:+639178224448" className="hover:text-white transition-colors">0917 822 4448</a>
                {" / "}
                <a href="tel:+639175600066" className="hover:text-white transition-colors">0917 560 0066</a>
              </li>
              <li className="text-sm text-teal-300">
                <span className="block font-medium text-white">Email</span>
                <a href="mailto:admin@fortrust.ph" className="hover:text-white transition-colors">admin@fortrust.ph</a>
              </li>
              <li className="text-sm text-teal-300">
                <span className="block font-medium text-white">Hours</span>
                Mon – Sat, 9:00 AM – 5:00 PM
              </li>
            </ul>
            <h3 className="mt-8 text-sm font-semibold text-white uppercase tracking-wider">Offices</h3>
            <ul className="mt-3 space-y-1.5">
              {offices.map((office) => (
                <li key={office.name} className="text-xs text-teal-400">
                  <span className="font-medium text-teal-300">{office.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-teal-500">
            &copy; {new Date().getFullYear()} Fortrust Education Services (Fortrust International Pty Ltd). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-teal-500 hover:text-teal-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-teal-500 hover:text-teal-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
