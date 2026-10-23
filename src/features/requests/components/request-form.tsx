'use client';

import { useActionState } from 'react';
import { Field, SelectInput, TextArea, TextInput } from '@/components/ui/field';
import { FormMessage } from '@/components/ui/form-message';
import { SubmitButton } from '@/components/ui/submit-button';
import { cardClass } from '@/components/ui/surface';
import { createRequestAction } from '@/features/requests/actions';
import { emptyFormState } from '@/lib/form-state';

type RequestDefaults = {
  origin?: string;
  destination?: string;
  departureAt?: string;
  seatsNeeded?: string;
};

export function RequestForm({ minDeparture, defaults = {} }: { minDeparture: string; defaults?: RequestDefaults }) {
  const [state, formAction] = useActionState(createRequestAction, emptyFormState);

  return (
    <form action={formAction} className={`${cardClass} p-5 max-[760px]:p-4`} noValidate>
      <div className="grid gap-3 min-[700px]:grid-cols-2">
        <Field label="Your name" error={state.errors.passengerName}>
          <TextInput name="passengerName" placeholder="e.g. Ngozi O." autoComplete="name" required />
        </Field>
        <Field label="Phone number" error={state.errors.passengerPhone} hint="Drivers use this to reach you.">
          <TextInput name="passengerPhone" type="tel" placeholder="0805 000 0000" autoComplete="tel" required />
        </Field>

        <Field label="Leaving from" error={state.errors.origin}>
          <TextInput name="origin" placeholder="e.g. Yaba" defaultValue={defaults.origin ?? ''} autoComplete="off" required />
        </Field>
        <Field label="Going to" error={state.errors.destination}>
          <TextInput name="destination" placeholder="e.g. Lekki Phase 1" defaultValue={defaults.destination ?? ''} autoComplete="off" required />
        </Field>

        <Field label="Pickup joint" error={state.errors.pickupPoint} hint="Where should a driver meet you?" className="min-[700px]:col-span-2">
          <TextInput name="pickupPoint" placeholder="e.g. Yaba Tech bus stop" autoComplete="off" required />
        </Field>

        <Field label="Earliest departure" error={state.errors.departureAt}>
          <TextInput name="departureAt" type="datetime-local" min={minDeparture} defaultValue={defaults.departureAt ?? ''} required />
        </Field>
        <Field label="Seats needed" error={state.errors.seatsNeeded}>
          <SelectInput name="seatsNeeded" defaultValue={defaults.seatsNeeded ?? '1'}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((seats) => (
              <option key={seats} value={seats}>
                {seats === 1 ? '1 seat' : `${seats} seats`}
              </option>
            ))}
          </SelectInput>
        </Field>

        <Field label="Price per seat you'll pay (₦)" error={state.errors.pricePerSeat} className="min-[700px]:col-span-2">
          <TextInput name="pricePerSeat" type="number" inputMode="numeric" min={0} step={50} placeholder="1200" required />
        </Field>

        <Field label="Notes for drivers (optional)" error={state.errors.notes} className="min-[700px]:col-span-2">
          <TextArea name="notes" rows={3} placeholder="Flexible timing, luggage, meeting point, anything useful." />
        </Field>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <SubmitButton pendingLabel="Posting request…">
          Post request <span aria-hidden="true">→</span>
        </SubmitButton>
        <p className="m-0 text-[10px] text-[#9a8b79]">Drivers going your way can offer a seat.</p>
      </div>
      <FormMessage state={state} />
    </form>
  );
}
