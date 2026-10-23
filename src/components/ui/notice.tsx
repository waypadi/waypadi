import type { ReactNode } from 'react';

export function Notice({ children, tone = 'success' }: { children: ReactNode; tone?: 'success' | 'info' }) {
  const toneClass = tone === 'success'
    ? 'border-[#cfe3d7] bg-[#eef7f1] text-[#1f5b3e]'
    : 'border-[#efdcbf] bg-[#fff7e9] text-[#8a5a1c]';

  return (
    <p className={`mb-5 rounded-xl border px-4 py-3 text-[12px] font-semibold ${toneClass}`} role="status">
      {children}
    </p>
  );
}
