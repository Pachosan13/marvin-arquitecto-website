interface LocationBadgeProps {
  readonly variant?: 'light' | 'dark';
}

function LocationBadge({ variant = 'light' }: LocationBadgeProps) {
  const baseStyles = 'inline-flex flex-wrap items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors';
  const palette =
    variant === 'dark'
      ? 'bg-primary/10 text-primary border border-primary/20'
      : 'bg-white/80 text-primary border border-primary/30 shadow-sm backdrop-blur';

  return (
    <span className={`${baseStyles} ${palette}`}>
      Oficina: La Cresta, Calle José Gabriel Duque, Ciudad de Panamá · Tel: 6675-8035 · Email: marvinper@mparquitecto.com
    </span>
  );
}

export default LocationBadge;
