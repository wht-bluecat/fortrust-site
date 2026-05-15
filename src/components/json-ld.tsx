const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fortrust.ph";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Fortrust Education Services",
  alternateName: "Fortrust International Pty Ltd",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "The Philippines' most trusted study abroad agency. 95% visa approval rate, 3,000+ students sent abroad since 2013.",
  foundingDate: "2013",
  areaServed: "Philippines",
  sameAs: [
    "https://facebook.com/fortrusteducation",
    "https://instagram.com/fortrustph",
    "https://linkedin.com/company/fortrustph",
    "https://tiktok.com/@fortrustph",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+639178224448",
      contactType: "customer service",
      areaServed: "PH",
      availableLanguage: ["English", "Filipino"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "5th Floor, Liberty Building, A. Arnaiz Avenue",
    addressLocality: "Makati City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fortrust Education Services - Makati",
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: "+639178224448",
  email: "admin@fortrust.ph",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5th Floor, Liberty Building, A. Arnaiz Avenue",
    addressLocality: "Makati City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "Free",
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

export function FAQPageJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
