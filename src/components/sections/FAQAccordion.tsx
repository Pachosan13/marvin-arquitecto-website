import { useState } from 'react';
import type { FAQItem } from '../../pages/data/siteContent';

interface FAQAccordionProps {
  readonly items: readonly FAQItem[];
  readonly heading: string;
  readonly description?: string;
  readonly visibleCount?: number;
  readonly ctaLabel?: string;
  readonly ctaHref?: string;
}

function FAQAccordion({ items, heading, description, visibleCount, ctaHref, ctaLabel }: FAQAccordionProps) {
  const displayedItems = typeof visibleCount === 'number' ? items.slice(0, visibleCount) : items;
  const [openIndex, setOpenIndex] = useState(displayedItems.length > 0 ? 0 : -1);

  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">{heading}</h2>
          {description ? <p className="text-base text-[#1a1a1a]/70">{description}</p> : null}
        </div>
        <div className="mt-10 divide-y divide-[#1e3a8a]/10 rounded-3xl border border-[#1e3a8a]/10 bg-white">
          {displayedItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#f8f8f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span aria-hidden className="text-lg font-bold text-[#1e3a8a]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`px-6 text-sm text-[#1a1a1a]/70 transition-all duration-300 ${
                    isOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {visibleCount && items.length > visibleCount && ctaHref && ctaLabel ? (
          <div className="mt-6 flex justify-center">
            <a
              href={ctaHref}
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default FAQAccordion;
