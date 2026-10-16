type BrandProps = { compact?: boolean };

export function Brand({ compact = false }: BrandProps) {
  return (
    <a className="brand" href="#top" aria-label="WayPadi home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <path d="M20 2.5a13 13 0 0 0-13 13c0 9.1 13 22 13 22s13-12.9 13-22a13 13 0 0 0-13-13Z" fill="currentColor" />
          <circle cx="20" cy="15.5" r="7.4" fill="#fff8ec" />
          <circle cx="20" cy="15.5" r="3.1" fill="#352011" />
        </svg>
      </span>
      <span className="brand-name">Way<span>Padi</span></span>
      {!compact && <span className="sr-only">Share your route. Split your ride.</span>}
    </a>
  );
}
