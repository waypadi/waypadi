import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'small';
};

export function ButtonLink({ children, variant = 'default', className = '', ...props }: ButtonLinkProps) {
  const variantClass = variant === 'dark'
    ? 'ml-auto bg-[#3c291a] text-[#fff7e8] shadow-[0_8px_18px_rgba(55,37,20,0.16)] hover:bg-[#55371e]'
    : variant === 'small'
      ? 'min-h-10 rounded-[11px] px-[17px]'
      : '';

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-6 rounded-[13px] bg-amber px-[22px] text-[13px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#ffc447] hover:shadow-[0_10px_22px_rgba(219,144,18,0.23)] ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'default' | 'dark';
};

export function Button({ children, variant = 'default', className = '', ...props }: ButtonProps) {
  const variantClass = variant === 'dark'
    ? 'ml-auto bg-[#3c291a] text-[#fff7e8] shadow-[0_8px_18px_rgba(55,37,20,0.16)] hover:bg-[#55371e]'
    : '';

  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center gap-6 rounded-[13px] border-0 bg-amber px-[22px] text-[13px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#ffc447] hover:shadow-[0_10px_22px_rgba(219,144,18,0.23)] ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
