import type { Metadata } from "next";

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
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl">
            6 offices across the Philippines. Free consultation — in person or online.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900">Send Us a Message</h2>
              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <select id="subject" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500">
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Consultation Request</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={5} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <button type="submit" className="w-full rounded-full bg-teal-600 px-8 py-4 text-base font-bold text-white hover:bg-teal-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900">Get In Touch</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Phone</h3>
                  <p className="mt-2">
                    <a href="tel:+639178224448" className="text-teal-600 hover:text-teal-700 font-medium">0917 822 4448</a>
                    {" / "}
                    <a href="tel:+639175600066" className="text-teal-600 hover:text-teal-700 font-medium">0917 560 0066</a>
                  </p>
                  <p className="mt-1">
                    <a href="tel:+6285512542" className="text-teal-600 hover:text-teal-700 font-medium">(02) 8551 2542</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Email</h3>
                  <p className="mt-2">
                    <a href="mailto:admin@fortrust.ph" className="text-teal-600 hover:text-teal-700 font-medium">admin@fortrust.ph</a>
                  </p>
                  <p className="mt-1">
                    <a href="mailto:philippines@fortrust.com" className="text-teal-600 hover:text-teal-700 font-medium">philippines@fortrust.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Hours</h3>
                  <p className="mt-2 text-gray-700">Monday – Saturday, 9:00 AM – 5:00 PM</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Book Online</h3>
                  <p className="mt-2">
                    <a
                      href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-100 transition-colors"
                    >
                      Book Free Consultation via Setmore
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">Our Offices</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                  {office.type}
                </span>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{office.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
