export type JsonLd = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const localBusinessSchema = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
}: {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name,
  description,
  url,
  telephone,
  email,
  address: {
    '@type': 'PostalAddress',
    ...address,
  },
  geo: geo
    ? {
        '@type': 'GeoCoordinates',
        ...geo,
      }
    : undefined,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: address.addressLocality,
  },
  image: `${url}/og-image.jpg`,
  priceRange: '$$-$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
});

export const websiteSchema = ({
  name,
  url,
  searchUrl,
}: {
  name: string;
  url: string;
  searchUrl?: string;
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name,
  url,
  potentialAction: searchUrl
    ? {
        '@type': 'SearchAction',
        target: `${searchUrl}?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      }
    : undefined,
});

export const breadcrumbSchema = ({
  items,
}: {
  items: BreadcrumbItem[];
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
});

export const faqSchema = ({ faqs }: { faqs: FaqItem[] }): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
