import type { FormState } from '@/lib/form-state';

export function FormMessage({ state }: { state: FormState }) {
  if (!state.message) return null;

  return (
    <p
      className="mb-0 mt-1 rounded-xl border border-[#efd3c9] bg-[#fff4ef] px-3 py-2 text-[11px] font-semibold text-[#a53b2e]"
      role="alert"
    >
      {state.message}
    </p>
  );
}
