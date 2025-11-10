import type { ProcessStep } from '../../pages/data/siteContent';

interface ProcessSectionProps {
  readonly steps: readonly ProcessStep[];
  readonly heading: string;
  readonly description: string;
}

function ProcessSection({ steps, heading, description }: ProcessSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">{heading}</h2>
          <p className="text-base text-[#1a1a1a]/70">{description}</p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative overflow-hidden rounded-3xl border border-[#1e3a8a]/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1e3a8a]/10 text-lg font-semibold text-[#1e3a8a]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">{step.title}</h3>
              <p className="mt-2 text-sm text-[#1a1a1a]/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProcessSection;
