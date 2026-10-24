import type { InputHTMLAttributes } from 'react';

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)] ${className}`.trim()}
      {...props}
    />
  );
}

export function Label({ className = '', ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777] ${className}`.trim()} {...props} />;
}
