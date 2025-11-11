import { useEffect, useMemo } from 'react';
import type { JsonLd } from './jsonld';

type OpenGraph = {
  image?: string;
  type?: string;
  siteName?: string;
  locale?: string;
};

type SeoHeadProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  og?: OpenGraph;
  schema?: JsonLd[];
};

const ensureMetaTag = (name: string, attr: 'name' | 'property', content: string) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const ensureLinkTag = (rel: string, href: string) => {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

export const SeoHead = ({ title, description, canonical, keywords, og, schema }: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;
    ensureMetaTag('description', 'name', description);
    ensureMetaTag('og:title', 'property', title);
    ensureMetaTag('og:description', 'property', description);
    ensureMetaTag('og:type', 'property', og?.type ?? 'website');
    ensureMetaTag('og:url', 'property', canonical);
    ensureMetaTag('og:image', 'property', og?.image ?? `${canonical.replace(/\/$/, '')}/og-image.jpg`);
    ensureMetaTag('og:site_name', 'property', og?.siteName ?? 'Marvin Pérez Arquitecto');
    ensureMetaTag('og:locale', 'property', og?.locale ?? 'es_PA');
    ensureMetaTag('twitter:card', 'name', 'summary_large_image');
    ensureMetaTag('twitter:title', 'name', title);
    ensureMetaTag('twitter:description', 'name', description);
    ensureMetaTag('twitter:image', 'name', og?.image ?? `${canonical.replace(/\/$/, '')}/og-image.jpg`);
    if (keywords?.length) {
      ensureMetaTag('keywords', 'name', keywords.join(', '));
    }
    ensureLinkTag('canonical', canonical);
  }, [title, description, canonical, keywords, og]);

  const scripts = useMemo(
    () =>
      schema?.map((entry) => JSON.stringify(entry)).filter(Boolean) as string[] | undefined,
    [schema]
  );

  return (
    <>
      {scripts?.map((content, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: content }} />
      ))}
    </>
  );
};

export default SeoHead;
