import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics, MetaPixel, GTM } from "@/components/analytics";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fortrust Education Services | Study Abroad Agency Philippines | 95% Visa Approval",
    template: "%s | Fortrust Education Services",
  },
  description:
    "The Philippines' most trusted education agency. 95% visa approval rate, 3,000+ students sent abroad since 2013. Free consultation — study in Canada, Australia, NZ & UK.",
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <GoogleAnalytics />
        <MetaPixel />
        <GTM />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
