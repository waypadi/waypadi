'use client';

import type { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  children: ReactNode;
  pendingLabel?: string;
  className?: string;
};

export function SubmitButton({ children, pendingLabel = 'Working…', className = '' }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-[13px] border-0 bg-amber px-[22px] text-[13px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#ffc447] hover:shadow-[0_10px_22px_rgba(219,144,18,0.23)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 ${className}`.trim()}
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
