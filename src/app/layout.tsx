import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics, MetaPixel, GTM } from "@/components/analytics";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/json-ld";
import { MobileCTA } from "@/components/mobile-cta";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fortrust Education Services | Study Abroad Agency Philippines | 95% Visa Approval",
    template: "%s | Fortrust Education Services",
  },
  description:
    "The Philippines' most trusted education agency. 95% visa approval rate, 3,000+ students sent abroad since 2013. Free consultation to study in Canada, Australia, NZ and the UK.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fortrust.ph"),
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Fortrust Education Services",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <GoogleAnalytics />
        <MetaPixel />
        <GTM />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
