import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

const shellClass =
  'block min-w-0 rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 transition-[border-color,box-shadow] focus-within:border-[#e6a12b] focus-within:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]';
const labelClass = 'mb-1 block text-[9px] font-semibold uppercase tracking-[1.2px] text-[#958777]';
const controlClass =
  'block w-full min-w-0 border-0 bg-transparent p-0 text-[12px] font-semibold text-[#3b2a1c] outline-none placeholder:font-normal placeholder:text-[#a3988a] [color-scheme:light]';

type FieldProps = {
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
};

export function Field({ label, error, hint, children, className = '' }: FieldProps) {
  return (
    <label className={`${shellClass} ${className}`}>
      <span className={labelClass}>{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[10px] font-normal text-[#9a8b79]">{hint}</span>}
      {error && <span className="mt-1 block text-[10px] font-semibold text-[#a53b2e]">{error}</span>}
    </label>
  );
}

export function TextInput({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${controlClass} ${className}`.trim()} {...props} />;
}

export function SelectInput({ className = '', ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={`${controlClass} cursor-pointer appearance-none ${className}`.trim()} {...props} />;
}

export function TextArea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${controlClass} resize-y ${className}`.trim()} {...props} />;
}
