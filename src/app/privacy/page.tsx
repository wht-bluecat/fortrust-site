import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Fortrust Education Services privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-teal-200 text-sm">Last updated: May 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-gray-600 [&_ul]:mb-4 [&_li]:mb-1">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information you provide when you fill out forms on our website,
            book a consultation, attend a seminar, or communicate with us. This may include your
            name, email address, phone number, educational background, and study abroad preferences.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries and provide consultation services</li>
            <li>Process your study abroad applications</li>
            <li>Send you relevant updates about programs, seminars, and deadlines</li>
            <li>Improve our services and website experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We may share your information with partner schools and institutions as part of your
            application process. We do not sell your personal information to third parties.
            We may share data with service providers who assist us in operating our website
            and conducting our business.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the Internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your experience,
            analyze site traffic, and for marketing purposes. You can control cookie settings
            through your browser preferences.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Under the Philippine Data Privacy Act of 2012 (RA 10173), you have the right to
            access, correct, and request deletion of your personal data. To exercise these
            rights, contact us at info@fortrust.ph.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for
            the privacy practices of these external sites.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be posted on
            this page with an updated revision date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, contact us at:
          </p>
          <ul>
            <li>Email: info@fortrust.ph</li>
            <li>Phone: 0917 822 4448</li>
            <li>Office: Makati City, Metro Manila, Philippines</li>
          </ul>
        </div>
      </section>
    </>
  );
}
