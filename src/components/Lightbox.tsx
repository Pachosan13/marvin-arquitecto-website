import { useCallback, useEffect } from 'react';

type LightboxProps = {
  open: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const Lightbox = ({ open, images, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
      if (event.key === 'ArrowLeft') {
        onPrev();
      }
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown, open]);

  if (!open) return null;

  const image = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-white/30 p-2 text-white"
        aria-label="Cerrar galería"
      >
        ×
      </button>
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white"
        aria-label="Imagen anterior"
      >
        ‹
      </button>
      <img
        key={image}
        src={image}
        alt="Proyecto arquitectónico"
        className="max-h-[80vh] w-auto max-w-[85vw] rounded-3xl object-contain shadow-2xl"
        loading="lazy"
      />
      <button
        type="button"
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white"
        aria-label="Siguiente imagen"
      >
        ›
      </button>
      <div className="absolute bottom-8 flex gap-2">
        {images.map((img, index) => (
          <span key={img} className={`h-[2px] w-12 bg-white/30 ${index === currentIndex ? 'opacity-100' : 'opacity-40'}`} />
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
