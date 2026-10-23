import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-5 max-[760px]:mb-6">
      <div className="max-w-[620px]">
        <div className="mb-[9px] flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[1.6px] text-[#a66a24]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#e18b21] shadow-[0_0_0_4px_rgba(225,139,33,0.12)]" />
          {eyebrow}
        </div>
        <h1 className="mb-3 font-display text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-2px] max-[760px]:text-[30px] max-[760px]:tracking-[-1.4px]">
          {title}
        </h1>
        <p className="m-0 text-[13px] leading-[1.7] text-[#786b5d] max-[760px]:text-[12px]">{description}</p>
      </div>
      {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
    </div>
  );
}
