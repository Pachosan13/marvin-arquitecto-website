import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  readonly title: string;
  readonly description: string;
  readonly canonical?: string;
  readonly keywords?: readonly string[];
  readonly jsonLd?: readonly Record<string, unknown>[];
  readonly openGraph?: {
    readonly type?: string;
    readonly image?: string;
  };
}

const SITE_URL = 'https://marvin-arquitecto.com';

function SeoHead({ title, description, canonical, keywords, jsonLd, openGraph }: SeoHeadProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);

    if (keywords?.length) {
      setMeta('keywords', keywords.join(', '));
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') ?? document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    if (!ogDescription.parentNode) document.head.appendChild(ogDescription);

    const ogType = document.querySelector('meta[property="og:type"]') ?? document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', openGraph?.type ?? 'website');
    if (!ogType.parentNode) document.head.appendChild(ogType);

    if (openGraph?.image) {
      const ogImage = document.querySelector('meta[property="og:image"]') ?? document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', openGraph.image);
      if (!ogImage.parentNode) document.head.appendChild(ogImage);
    }

    const url = `${SITE_URL}${location.pathname}`;
    const canonicalUrl = canonical ?? url;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]') ?? document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', canonicalUrl);
    if (!ogUrl.parentNode) document.head.appendChild(ogUrl);

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: location.pathname
        .split('/')
        .filter(Boolean)
        .map((segment, index, segments) => {
          const path = `/${segments.slice(0, index + 1).join('/')}`;
          return {
            '@type': 'ListItem',
            position: index + 1,
            name: segment,
            item: `${SITE_URL}${path}`,
          };
        }),
    };

    const schemas = jsonLd ? [...jsonLd, breadcrumbSchema] : [breadcrumbSchema];

    document.querySelectorAll('script[data-dynamic-schema]').forEach((node) => node.remove());

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-schema', 'true');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-dynamic-schema]').forEach((node) => node.remove());
    };
  }, [title, description, canonical, keywords, jsonLd, openGraph, location.pathname]);

  return null;
}

export default SeoHead;
