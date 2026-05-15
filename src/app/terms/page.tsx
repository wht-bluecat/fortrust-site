import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Fortrust Education Services. Read our terms and conditions for using our study abroad consultation services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Terms of Service</h1>
          <p className="mt-2 text-teal-200 text-sm">Last updated: May 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-gray-600 [&_ul]:mb-4 [&_li]:mb-1">
          <h2>1. About Our Services</h2>
          <p>
            Fortrust Education Services provides free study abroad consultation and placement
            services for Filipino students. Our services include school selection, application
            assistance, visa documentation guidance, and related support. Our services are free
            to students — we are compensated by our partner institutions.
          </p>

          <h2>2. No Guarantee of Outcomes</h2>
          <p>
            While we maintain a 95% visa approval rate, we cannot guarantee visa approval,
            school admission, or any specific outcome. Visa and admission decisions are made
            by embassies and educational institutions respectively, and are beyond our control.
          </p>

          <h2>3. Your Responsibilities</h2>
          <p>When using our services, you agree to:</p>
          <ul>
            <li>Provide accurate and truthful information in all documents and forms</li>
            <li>Respond to communications in a timely manner</li>
            <li>Pay all fees directly owed to schools, embassies, and testing centers</li>
            <li>Comply with the laws and regulations of your destination country</li>
            <li>Attend scheduled consultations and deadlines</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and the
            &quot;Permanent Residency Planning&trade;&quot; trademark, is the property of
            Fortrust Education Services and is protected by applicable intellectual property laws.
          </p>

          <h2>5. Website Use</h2>
          <p>
            You may use our website for lawful purposes only. You may not use our website
            in any way that could damage, disable, or impair the site, or interfere with
            other users&apos; access.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Fortrust Education Services shall not be liable for any indirect, incidental,
            or consequential damages arising from the use of our services or website.
            Our total liability shall not exceed the amount paid by you for our services
            (which is zero for our standard free consultation services).
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Our website may link to third-party services such as Setmore (booking),
            partner school websites, and embassy portals. We are not responsible for the
            content or practices of these third-party sites.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Continued use of our
            services after changes constitutes acceptance of the updated terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Republic of the Philippines.
            Any disputes shall be resolved in the courts of Makati City.
          </p>

          <h2>10. Contact</h2>
          <p>
            For questions about these terms, contact us at info@fortrust.ph or
            call 0917 822 4448.
          </p>
        </div>
      </section>
    </>
  );
}
