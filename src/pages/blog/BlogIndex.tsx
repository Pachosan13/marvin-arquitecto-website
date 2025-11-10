import SeoHead from '../../components/seo/SeoHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { blogPosts } from '../data/siteContent';

function BlogIndex() {
  return (
    <>
      <SeoHead
        title="Blog de arquitectura y remodelación en Panamá"
        description="Consejos de arquitectura, remodelación y diseño en Panamá. Guías prácticas para apartamentos, casas, oficinas y proyectos llave en mano."
        keywords={['blog arquitectura panamá', 'blog remodelación panamá', 'arquitecto panamá']}
        openGraph={{ type: 'website' }}
      />
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Blog' }]} />
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">Blog de arquitectura y remodelación en Panamá</h2>
          <p className="mt-4 text-base text-[#1a1a1a]/70">
            Contenido creado por Marvin Pérez de Obaldía para ayudarte a planificar, presupuestar y ejecutar proyectos residenciales y comerciales en Ciudad de Panamá. Comparte estas guías con tu familia o equipo para tomar decisiones informadas.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] shadow-sm">
                <img
                  src={post.heroImage}
                  alt={post.heroAlt}
                  className="h-48 w-full rounded-t-3xl object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="text-xs uppercase tracking-wide text-[#1e3a8a]">{post.readingTime}</div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">{post.title}</h3>
                  <p className="text-sm text-[#1a1a1a]/70">{post.description}</p>
                  <a
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a]"
                    href={`/blog/${post.slug}`}
                  >
                    Leer artículo
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogIndex;
