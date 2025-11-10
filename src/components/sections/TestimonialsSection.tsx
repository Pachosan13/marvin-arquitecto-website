import type { Testimonial } from '../../pages/data/siteContent';

interface TestimonialsSectionProps {
  readonly testimonials: readonly Testimonial[];
  readonly heading: string;
  readonly description: string;
}

function TestimonialsSection({ testimonials, heading, description }: TestimonialsSectionProps) {
  return (
    <section className="bg-[#1e3a8a] py-16">
      <div className="mx-auto w-full max-w-6xl px-4 text-white">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold">{heading}</h2>
          <p className="text-base text-white/80">{description}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="flex flex-col gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur">
              <blockquote className="text-sm text-white/90">“{testimonial.quote}”</blockquote>
              <figcaption className="text-sm font-semibold text-secondary">
                {testimonial.author}
                <span className="block text-xs font-normal text-white/70">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
