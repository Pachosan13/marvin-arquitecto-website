interface PainPoint {
  readonly pain: string;
  readonly solution: string;
}

interface PainSolutionSectionProps {
  readonly heading: string;
  readonly description: string;
  readonly items: readonly PainPoint[];
}

function PainSolutionSection({ heading, description, items }: PainSolutionSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">{heading}</h2>
          <p className="text-base text-[#1a1a1a]/70">{description}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.pain} className="rounded-3xl border border-[#1e3a8a]/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#1e3a8a]">Dolor</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/80">{item.pain}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-secondary">Solución</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/80">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainSolutionSection;
