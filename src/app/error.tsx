'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-[560px] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#a66a24]">Something went wrong</p>
      <h1 className="mb-3 font-display text-[28px] font-extrabold tracking-[-1.2px]">We couldn’t load this page</h1>
      <p className="mb-6 text-[12px] leading-[1.7] text-[#918373]">
        Try again or head back to the rides board while we sort it out.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          className="inline-flex min-h-11 items-center justify-center rounded-[11px] bg-amber px-5 text-[12px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-colors hover:bg-[#ffc447]"
          onClick={reset}
        >
          Try again
        </button>
        <Link className="text-[12px] font-bold text-[#8a7358]" href="/rides">
          Browse rides <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
