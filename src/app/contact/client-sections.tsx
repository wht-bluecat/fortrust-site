"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

type Office = { name: string; address: string; type: string };

export function ContactClientSections({ offices }: { offices: Office[] }) {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal animation="slide-left">
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">Send Us a Message</h2>
                <form className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input type="text" id="name" required className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <input type="email" id="email" required className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" id="phone" required className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <select id="subject" className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all">
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Consultation Request</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea id="message" rows={5} className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-teal-600 px-8 py-4 text-base font-bold text-white hover:bg-teal-700 hover:shadow-lg transition-all duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal animation="slide-right">
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">Get In Touch</h2>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                      <p className="mt-1">
                        <a href="tel:+639178224448" className="text-teal-600 hover:text-teal-700 font-medium text-sm">0917 822 4448</a>
                        {" / "}
                        <a href="tel:+639175600066" className="text-teal-600 hover:text-teal-700 font-medium text-sm">0917 560 0066</a>
                      </p>
                      <p className="mt-0.5">
                        <a href="tel:+6285512542" className="text-teal-600 hover:text-teal-700 font-medium text-sm">(02) 8551 2542</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                      <p className="mt-1">
                        <a href="mailto:admin@fortrust.ph" className="text-teal-600 hover:text-teal-700 font-medium text-sm">admin@fortrust.ph</a>
                      </p>
                      <p className="mt-0.5">
                        <a href="mailto:philippines@fortrust.com" className="text-teal-600 hover:text-teal-700 font-medium text-sm">philippines@fortrust.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Hours</h3>
                      <p className="mt-1 text-sm text-gray-600">Monday – Saturday, 9:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Book Online</h3>
                      <p className="mt-2">
                        <a
                          href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://fortrustmakati.setmore.com"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2.5 text-sm font-medium text-teal-700 hover:bg-teal-100 transition-colors"
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-gray-900 text-center">Our Offices</h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <ScrollReveal key={office.name} animation="fade-up" delay={i * 80}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    {office.type}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{office.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{office.address}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
