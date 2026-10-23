type BrandProps = { compact?: boolean };

export function Brand({ compact = false }: BrandProps) {
  return (
    <a className="inline-flex flex-none items-center gap-[9px]" href="#top" aria-label="WayPadi home">
      <span className="grid h-[38px] w-[38px] place-items-center text-amber drop-shadow-[0_3px_3px_rgba(127,79,14,0.15)] max-[760px]:h-[34px] max-[760px]:w-[34px]" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 40 40">
          <path d="M20 2.5a13 13 0 0 0-13 13c0 9.1 13 22 13 22s13-12.9 13-22a13 13 0 0 0-13-13Z" fill="currentColor" />
          <circle cx="20" cy="15.5" r="7.4" fill="#fff8ec" />
          <circle cx="20" cy="15.5" r="3.1" fill="#352011" />
        </svg>
      </span>
      <span className={`font-display text-[21px] font-extrabold tracking-[-1.1px] max-[760px]:text-[19px] ${compact ? 'text-[17px] max-[760px]:text-[17px]' : ''}`}>
        Way<span className="text-orange">Padi</span>
      </span>
      {!compact && <span className="sr-only">Share your route. Split your ride.</span>}
    </a>
  );
}
