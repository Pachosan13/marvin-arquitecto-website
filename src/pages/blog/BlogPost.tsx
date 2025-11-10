import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SeoHead from '../../components/seo/SeoHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { blogPosts } from '../data/siteContent';

function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: `https://marvin-arquitecto.com${post.heroImage}`,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Marvin Pérez de Obaldía',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Estudio Marvin Pérez de Obaldía',
    },
    mainEntityOfPage: `https://marvin-arquitecto.com/blog/${post.slug}`,
  };

  return (
    <>
      <SeoHead
        title={`${post.title} | Blog de arquitectura en Panamá`}
        description={post.description}
        keywords={[...post.keywords, 'arquitecto panamá']}
        jsonLd={[articleSchema]}
        openGraph={{ type: 'article', image: `https://marvin-arquitecto.com${post.heroImage}` }}
      />
      <article className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-12">
          <Breadcrumbs
            items={[
              { label: 'Inicio', to: '/' },
              { label: 'Blog', to: '/blog' },
              { label: post.title },
            ]}
          />
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#1a1a1a]">{post.title}</h2>
            <p className="text-sm text-[#1a1a1a]/60">
              {new Date(post.publishedAt).toLocaleDateString('es-PA', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
              · {post.readingTime}
            </p>
            <p className="text-base text-[#1a1a1a]/80">{post.description}</p>
            <img
              src={post.heroImage}
              alt={post.heroAlt}
              className="w-full rounded-3xl object-cover"
              loading="lazy"
            />
          </header>
          <div className="mt-10 space-y-10 text-base leading-7 text-[#1a1a1a]/80">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#1a1a1a]">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="list-disc space-y-2 pl-6 text-sm text-[#1a1a1a]/80">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          <footer className="mt-12 space-y-4 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <p className="font-semibold text-[#1a1a1a]">Continúa explorando</p>
            <ul className="space-y-2">
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/remodelacion-apartamentos">
                  Remodelación de apartamentos en Panamá
                </a>
              </li>
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/remodelacion-casas">
                  Remodelación de casas en Panamá
                </a>
              </li>
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/remodelacion-oficinas">
                  Remodelación de oficinas en Panamá
                </a>
              </li>
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/diseno-y-construccion">
                  Diseño y construcción llave en mano
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </article>
    </>
  );
}

export default BlogPost;
