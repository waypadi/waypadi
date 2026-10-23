import Link from 'next/link';
import { PageShell, cardClass } from '@/components/ui/surface';

export default function NotFound() {
  return (
    <PageShell>
      <div className={`${cardClass} mx-auto max-w-[560px] px-6 py-12 text-center`}>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#a66a24]">404</p>
        <h1 className="mb-3 font-display text-[30px] font-extrabold tracking-[-1.4px]">This ride has moved on</h1>
        <p className="mx-auto mb-6 max-w-[380px] text-[12px] leading-[1.7] text-[#918373]">
          The page you are looking for is not here. It may have been cancelled, or the link is out of date.
        </p>
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-[11px] bg-amber px-5 text-[12px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-colors hover:bg-[#ffc447]"
          href="/rides"
        >
          Browse rides <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </PageShell>
  );
}
