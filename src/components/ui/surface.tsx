import type { ReactNode } from 'react';

export function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1210px] px-6 pb-20 pt-10 max-[760px]:px-4 max-[760px]:pb-14 max-[760px]:pt-7 ${className}`.trim()}>
      {children}
    </div>
  );
}

export const cardClass =
  'rounded-[20px] border border-[#efe5d7] bg-paper shadow-[0_18px_50px_rgba(72,48,20,0.09)]';
