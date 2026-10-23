import Link from 'next/link';
import { Field, TextInput } from '@/components/ui/field';
import { SubmitButton } from '@/components/ui/submit-button';
import { cardClass } from '@/components/ui/surface';

type RouteFiltersProps = {
  action: string;
  submitLabel: string;
  clearHref: string;
  origin?: string;
  destination?: string;
  date?: string;
};

export function RouteFilters({ action, submitLabel, clearHref, origin, destination, date }: RouteFiltersProps) {
  const hasFilters = Boolean(origin || destination || date);

  return (
    <form
      className={`${cardClass} mb-6 grid items-end gap-3 p-4 [grid-template-columns:minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.75fr)_auto] max-[900px]:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)] max-[560px]:[grid-template-columns:minmax(0,1fr)]`}
      action={action}
      method="get"
    >
      <Field label="Leaving from">
        <TextInput name="origin" placeholder="e.g. Yaba" defaultValue={origin} autoComplete="off" />
      </Field>
      <Field label="Going to">
        <TextInput name="destination" placeholder="e.g. Lekki Phase 1" defaultValue={destination} autoComplete="off" />
      </Field>
      <Field label="Travel date">
        <TextInput name="date" type="date" defaultValue={date} />
      </Field>
      <div className="flex items-center gap-2 max-[900px]:col-span-2 max-[560px]:col-span-1">
        <SubmitButton className="min-h-[58px] w-full rounded-xl px-4 text-[11px] max-[560px]:min-h-11" pendingLabel="Searching…">
          {submitLabel}
        </SubmitButton>
        {hasFilters && (
          <Link className="whitespace-nowrap px-1 text-[10px] font-bold text-[#8a7358] underline decoration-[#d9c1a0] underline-offset-[3px]" href={clearHref}>
            Clear
          </Link>
        )}
      </div>
    </form>
  );
}
