import type { ReactNode } from 'react';

type Tone = 'amber' | 'green' | 'muted' | 'red';

const toneClass: Record<Tone, string> = {
  amber: 'border-[#efdcbf] bg-[#fff4dc] text-[#a9631a]',
  green: 'border-[#cfe3d7] bg-[#eef7f1] text-[#256b4b]',
  muted: 'border-[#e8e0d5] bg-[#f6f1e9] text-[#877867]',
  red: 'border-[#efd3c9] bg-[#fff1ec] text-[#a53b2e]',
};

export function Pill({ tone = 'amber', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-[9px] py-[4px] text-[9px] font-bold uppercase tracking-[0.8px] ${toneClass[tone]}`}>
      {children}
    </span>
  );
}

export function seatTone(seats: number): Tone {
  if (seats === 0) return 'muted';
  if (seats === 1) return 'amber';
  return 'green';
}
