import { useCallback, useEffect, useState } from 'react';
import type { ProjectGalleryItem } from '../pages/data/siteContent';

interface LightboxProps {
  readonly images: readonly ProjectGalleryItem[];
  readonly startIndex: number;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

function Lightbox({ images, startIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(startIndex);
    }
  }, [isOpen, startIndex]);

  useEffect(() => {
    if (!isOpen) {
      return () => undefined;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }

    function handleBodyScroll() {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    handleBodyScroll();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleBodyScroll);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleBodyScroll);
    };
  }, [images.length, isOpen, onClose]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  if (!isOpen) {
    return null;
  }

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 text-white"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-white/50 px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        aria-label="Cerrar galería"
      >
        Cerrar
      </button>
      <div className="flex max-w-5xl flex-col items-center gap-6">
        <figure className="w-full">
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[70vh] w-full rounded-2xl object-contain"
            loading="eager"
            width={current.width}
            height={current.height}
          />
          <figcaption className="mt-3 text-center text-sm text-white/70">{current.alt}</figcaption>
        </figure>
        {images.length > 1 ? (
          <div className="flex items-center justify-between gap-6 text-sm">
            <button
              type="button"
              onClick={goToPrev}
              className="rounded-full border border-white/60 px-4 py-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              Anterior
            </button>
            <span className="text-white/70">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={goToNext}
              className="rounded-full border border-white/60 px-4 py-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              Siguiente
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Lightbox;
