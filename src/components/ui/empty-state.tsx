import Link from 'next/link';
import type { ReactNode } from 'react';

type EmptyStateProps = {
  title: string;
  description: string;
  action?: { href: string; label: string };
  children?: ReactNode;
};

export function EmptyState({ title, description, action, children }: EmptyStateProps) {
  return (
    <div className="rounded-[20px] border border-dashed border-[#e4d6c2] bg-[#fffdf8]/70 px-6 py-12 text-center">
      <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-[#efdcbf] bg-[#fff4dc] text-xl text-[#b76c1c]" aria-hidden="true">
        ↗
      </span>
      <h2 className="mb-2 font-display text-lg font-bold tracking-[-0.6px]">{title}</h2>
      <p className="mx-auto mb-5 max-w-[420px] text-[12px] leading-[1.7] text-[#918373]">{description}</p>
      {action && (
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-[11px] bg-amber px-5 text-[12px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-colors hover:bg-[#ffc447]"
          href={action.href}
        >
          {action.label} <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      )}
      {children}
    </div>
  );
}
